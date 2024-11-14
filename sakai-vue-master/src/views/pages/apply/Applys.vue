<template>
    <Toolbar class="mb-4">
        <template v-slot:start>
            <div class="my-2">
                <Button label="New" icon="pi pi-plus" class="mr-2" severity="success" @click="openNew" />
            </div>
        </template>
    </Toolbar>

    <DataTable
        ref="dt"
        :value="applyItems"
        v-model:selection="selectedApplyItems"
        dataKey="_id"
        :paginator="true"
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
    >
        <template #header>
            <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                <h5 class="m-0">Apply</h5>
                <IconField iconPosition="left" class="block mt-2 md:mt-0">
                    <InputIcon class="pi pi-search" />
                </IconField>
            </div>
        </template>

        <Column field="_id" header="Code" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Code</span>
                {{ slotProps.data._id }}
            </template>
        </Column>
        <Column field="title" header="User" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">User</span>
                {{ slotProps.data.userid }}
            </template>
        </Column>
        <Column field="company" header="Fullname" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Fullname</span>
                {{ slotProps.data.fullname }}
            </template>
        </Column>
        <Column field="location" header="Phone" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Phone</span>
                {{ slotProps.data.phone }}
            </template>
        </Column>
        <Column field="salary" header="Gender" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Gender</span>
                {{ slotProps.data.gender }}
            </template>
        </Column>
        <Column field="logo" header=">Date of Birth" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Date of Birth</span>
                {{ slotProps.data.date_of_birth }}
            </template>
        </Column>
        <Column field="benefits" header="Marriage" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Marriage</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.marriage">
                    {{ slotProps.data.marriage }}
                </span>
            </template>
        </Column>
        <Column field="jobDescription" header="Province" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Province</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.province">
                    {{ slotProps.data.province }}
                </span>
            </template>
        </Column>
        <Column field="jobRequest" header="Residence" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Residence</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.residence">
                    {{ slotProps.data.residence }}
                </span>
            </template>
        </Column>
        <!-- <Column field="jobRequest" header="File" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">File</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.file">
                    {{ slotProps.data.file }}
                </span>
            </template>
        </Column> -->
        <Column field="file" header="File" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">File</span>
                <div v-if="slotProps.data.file && slotProps.data.file.length">
                    <div v-for="(fileUrl, index) in slotProps.data.file" :key="index" class="file-download-link">
                        <Button icon="pi pi-download" class="p-button-text" @click="downloadFile(fileUrl, `CV_${index + 1}`)" v-tooltip.top="fileUrl"> CV {{ index + 1 }} </Button>
                    </div>
                </div>
                <div v-else>No file available</div>
            </template>
        </Column>

        <Column field="jobRequest" header="Title" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Title</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.title">
                    {{ slotProps.data.title }}
                </span>
            </template>
        </Column>
        <Column field="jobRequest" header="Qualification" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Qualification</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.qualification">
                    {{ slotProps.data.qualification }}
                </span>
            </template>
        </Column>
        <Column field="jobRequest" header="Experience" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Experience</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.experience">
                    {{ slotProps.data.experience }}
                </span>
            </template>
        </Column>
        <Column field="jobRequest" header="Current Position" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Current Position</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.current_position">
                    {{ slotProps.data.current_position }}
                </span>
            </template>
        </Column>
        <Column field="jobRequest" header="Desired Position" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Desired Position</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.desired_position">
                    {{ slotProps.data.desired_position }}
                </span>
            </template>
        </Column>
        <Column field="jobRequest" header="Desired Job" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Desired Job</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.desired_job">
                    {{ slotProps.data.desired_job }}
                </span>
            </template>
        </Column>
        <Column field="jobRequest" header="Salary" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Salary</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.salary">
                    {{ slotProps.data.salary }}
                </span>
            </template>
        </Column>
        <Column field="jobRequest" header="Workplace" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Workplace</span>
                <span class="truncate-text" v-tooltip.top="slotProps.data.workplace">
                    {{ slotProps.data.workplace }}
                </span>
            </template>
        </Column>

        <Column headerStyle="min-width:10rem;">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="mr-2" severity="success" rounded @click="open(slotProps.data)" />
                <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirm($event, slotProps.data)" />
            </template>
        </Column>
    </DataTable>

    <Dialog v-model:visible="applyDialog" :style="{ width: '450px' }" header="Apply Details" :modal="true" class="p-fluid">
        <div class="field" field="_id">
            <label for="fullname">Fullname</label>
            <InputText id="fullname" v-model.trim="apply.fullname" required="true" autofocus :invalid="submitted && !!apply.fullname" />
            <small class="p-invalid" v-if="submitted && !apply.fullname">Fullname is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="phone">Phone</label>
            <InputText id="phone" v-model.trim="apply.phone" required="true" autofocus :invalid="submitted && !!apply.phone" />
            <small class="p-invalid" v-if="submitted && !apply.company">Company is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="gender">Gender</label>
            <InputText id="gender" v-model.trim="apply.gender" required="true" autofocus :invalid="submitted && !!apply.gender" />
            <small class="p-invalid" v-if="submitted && !apply.gender">Location is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="date_of_birth">Date of Birth</label>
            <InputText id="date_of_birth" v-model.trim="apply.date_of_birth" required="true" autofocus :invalid="submitted && !!apply.date_of_birth" />
            <small class="p-invalid" v-if="submitted && !apply.date_of_birth">Salary is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="marriage">Marriage</label>
            <InputText id="marriage" v-model.trim="apply.marriage" required="true" autofocus :invalid="submitted && !!apply.marriage" />
            <small class="p-invalid" v-if="submitted && !apply.marriage">Salary is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="province">Province</label>
            <InputText id="province" v-model.trim="apply.province" required="true" autofocus :invalid="submitted && !!apply.province" />
            <small class="p-invalid" v-if="submitted && !apply.province">Benefits is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="residence">Residence</label>
            <Textarea id="residence" v-model.trim="apply.residence" required="true" autofocus :invalid="submitted && !!apply.residence" rows="4" />
            <small class="p-invalid" v-if="submitted && !apply.residence">Job Description is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="file">File</label>
            <Textarea id="file" v-model.trim="apply.file" required="true" autofocus :invalid="submitted && !!apply.file" rows="4" />
            <small class="p-invalid" v-if="submitted && !apply.file">Job Request is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="title">Title</label>
            <Textarea id="title" v-model.trim="apply.title" required="true" autofocus :invalid="submitted && !!apply.title" rows="4" />
            <small class="p-invalid" v-if="submitted && !apply.title">Job Request is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="qualification">Qualification</label>
            <Textarea id="qualification" v-model.trim="apply.qualification" required="true" autofocus :invalid="submitted && !!apply.qualification" rows="4" />
            <small class="p-invalid" v-if="submitted && !apply.qualification">Qualification Request is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="experience">Experience</label>
            <Textarea id="experience" v-model.trim="apply.experience" required="true" autofocus :invalid="submitted && !!apply.experience" rows="4" />
            <small class="p-invalid" v-if="submitted && !apply.experience">Qualification Request is required.</small>
        </div>

        <div class="field" field="_id">
            <label for="current_position">Current Position</label>
            <Textarea id="current_position" v-model.trim="apply.current_position" required="true" autofocus :invalid="submitted && !!apply.current_position" rows="4" />
            <small class="p-invalid" v-if="submitted && !apply.current_position">Qualification Request is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="desired_position">Desired Position</label>
            <Textarea id="desired_position" v-model.trim="apply.desired_position" required="true" autofocus :invalid="submitted && !!apply.desired_position" rows="4" />
            <small class="p-invalid" v-if="submitted && !apply.desired_position">Qualification Request is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="desired_job">Desired Job</label>
            <Textarea id="desired_job" v-model.trim="apply.desired_job" required="true" autofocus :invalid="submitted && !!apply.desired_job" rows="4" />
            <small class="p-invalid" v-if="submitted && !apply.desired_job">Qualification Request is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="salary">Salary</label>
            <Textarea id="salary" v-model.trim="apply.salary" required="true" autofocus :invalid="submitted && !!apply.salary" rows="4" />
            <small class="p-invalid" v-if="submitted && !apply.salary">Salary Request is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="workplace">Workplace</label>
            <Textarea id="workplace" v-model.trim="apply.workplace" required="true" autofocus :invalid="submitted && !!apply.workplace" rows="4" />
            <small class="p-invalid" v-if="submitted && !apply.workplace">Workplace Request is required.</small>
        </div>
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" text="" @click="applyDialog = false" />
            <Button label="Save" icon="pi pi-check" text="" @click="createApply" />
        </template>
    </Dialog>

    <Dialog v-model:visible="display" :style="{ width: '450px' }" header="Apply Details" :modal="true" class="p-fluid">
        <div class="field">
            <label for="fullname">Fullname</label>
            <InputText id="fullname" v-model.trim="apply.fullname" required autofocus />
        </div>
        <div class="field">
            <label for="phone">Phone</label>
            <InputText id="phone" v-model.trim="apply.phone" required autofocus />
        </div>
        <div class="field">
            <label for="gender">Gender</label>
            <InputText id="gender" v-model.trim="apply.gender" required autofocus />
        </div>
        <div class="field">
            <label for="date_of_birth">Date of Birth</label>
            <InputText id="date_of_birth" v-model.trim="apply.date_of_birth" required autofocus />
        </div>
        <div class="field">
            <label for="marriage">Marriage</label>
            <InputText id="marriage" v-model.trim="apply.marriage" required autofocus />
        </div>
        <div class="field">
            <label for="province">Province</label>
            <InputText id="province" v-model.trim="apply.province" required autofocus />
        </div>
        <div class="field">
            <label for="residence">Residence</label>
            <InputText id="residence" v-model.trim="apply.residence" required autofocus />
        </div>
        <div class="field">
            <label for="file">File</label>
            <InputText id="file" v-model.trim="apply.file" required autofocus />
        </div>
        <div class="field">
            <label for="title">Title</label>
            <InputText id="title" v-model.trim="apply.title" required autofocus />
        </div>
        <div class="field">
            <label for="qualification">Qualification</label>
            <InputText id="qualification" v-model.trim="apply.qualification" required autofocus />
        </div>
        <div class="field">
            <label for="experience">Experience</label>
            <InputText id="experience" v-model.trim="apply.experience" required autofocus />
        </div>

        <div class="field">
            <label for="current_position">Current Position</label>
            <InputText id="current_position" v-model.trim="apply.current_position" required autofocus />
        </div>
        <div class="field">
            <label for="desired_position">Desired Position</label>
            <InputText id="desired_position" v-model.trim="apply.desired_position" required autofocus />
        </div>
        <div class="field">
            <label for="desired_job">Desired Job</label>
            <InputText id="desired_job" v-model.trim="apply.desired_job" required autofocus />
        </div>
        <div class="field">
            <label for="salary">Salary</label>
            <InputText id="salary" v-model.trim="apply.salary" required autofocus />
        </div>
        <div class="field">
            <label for="workplace">Workplace</label>
            <InputText id="workplace" v-model.trim="apply.workplace" required autofocus />
        </div>
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" text="" @click="display = false" />
            <Button label="Save" icon="pi pi-check" text="" @click="updateApply" />
        </template>
    </Dialog>
    <ConfirmPopup></ConfirmPopup>
</template>

<script setup>
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
const apply = ref({});
const applytoDelete = ref(null);
const applyDialog = ref(false);
const applyItems = ref([]);
const selectedApplyItems = ref(null);
const submitted = ref(false);
const display = ref(false);
const toast = useToast();
const confirmPopup = useConfirm();
const open = (editApply) => {
    apply.value = { ...editApply };
    display.value = true;
};

const confirm = (event, apply) => {
    applytoDelete.value = apply;
    confirmPopup.require({
        target: event.target,
        message: 'bạn có muốn xóa không',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            deleteApply(applytoDelete.value._id);
        },
        reject: () => {
            toast.add({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
const openNew = () => {
    apply.value = {};
    submitted.value = false;
    applyDialog.value = true;
};

const downloadFile = async (fileUrl, fileName) => {
    try {
        // Kiểm tra URL
        if (!fileUrl) {
            throw new Error('Invalid file URL');
        }
        console.log('fileurl', fileUrl);
        // Nếu URL đã là blob URL
        if (fileUrl.startsWith('blob:')) {
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = `${fileName}.pdf`; // Hoặc extension phù hợp
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            toast.add({
                severity: 'success',
                summary: 'Success',
                detail: 'File downloaded successfully',
                life: 3000
            });
            return;
        }

        // Nếu là URL thông thường
        let response;
        try {
            // Thử với URL gốc
            response = await fetch(fileUrl);
        } catch (error) {
            // Thử với base URL của backend
            const baseUrl = 'http://localhost:3000'; // URL của backend
            response = await fetch(`${fileUrl}`);
        }

        if (!response.ok) {
            throw new Error('Failed to download file');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        // Lấy extension từ Content-Type hoặc từ URL
        const contentType = response.headers.get('content-type');
        let extension = 'pdf'; // default extension
        if (contentType) {
            if (contentType.includes('pdf')) extension = 'pdf';
            else if (contentType.includes('image')) extension = contentType.split('/')[1];
            else if (fileUrl.includes('.')) extension = fileUrl.split('.').pop().toLowerCase();
        }

        link.download = `${fileName}.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        toast.add({
            severity: 'success',
            summary: 'Success',
            detail: 'File downloaded successfully',
            life: 3000
        });
    } catch (error) {
        console.error('Download error:', error);
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.message || 'Failed to download file',
            life: 3000
        });
    }
};

onMounted(async () => {
    try {
        const res = await fetch('http://localhost:3000/api/apply/getAll');
        const data = await res.json();
        applyItems.value = data.data;
        console.log('a', applyItems.value);
    } catch (error) {
        console.log(err);
    }
});

const createApply = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/apply/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(apply.value)
        });
        const data = await response.json();
        if (response.ok) {
            applyItems.value.push(data);
            applyDialog.value = false;
        } else {
            console.error(data);
        }
    } catch (error) {
        console.error(data);
    }
};

const updateApply = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/apply/update/${apply.value._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(apply.value)
        });
        const data = await response.json();
        if (response.ok) {
            const index = applyItems.value.findIndex((item) => item._id === apply.value._id);
            if (index !== -1) {
                applyItems.value[index] = data;
            }
            display.value = false;
            toast.add({ severity: 'success', summary: 'Success', detail: 'Menu updated successfully', life: 3000 });
        } else {
            console.error(data);
            toast.add({ severity: 'error', summary: 'Error', detail: data.message || 'Failed to update menu', life: 3000 });
        }
    } catch (error) {
        console.log(error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to connect to server', life: 3000 });
    }
};

const deleteApply = async (applyId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/apply/delete/${applyId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if (response.ok) {
            applyItems.value = applyItems.value.filter((item) => item._id !== applyId);
            toast.add({ severity: 'success', summary: 'Success', detail: 'Apply deleted successfully', life: 3000 });
        } else {
            console.error(data);
            toast.add({ severity: 'error', summary: 'Error', detail: data.message || 'Failed to delete apply', life: 3000 });
        }
    } catch (error) {
        console.log(error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to connect to server', life: 3000 });
    }
};
</script>

<style lang="scss" scoped></style>
