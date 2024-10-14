<script setup>
import Toast from 'primevue/toast';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
const display = ref(false);
const menuItems = ref([]);
const product = ref({});
const menuDialog = ref(false);
const toast = useToast();
const submitted = ref(false);
const productToDelete = ref(null);

onMounted(async () => {
    try {
        const res = await fetch('http://localhost:3000/api/auth/admin/all');
        const data = await res.json();
        menuItems.value = data.data;
        console.log(menuItems.value);
    } catch (err) {
        console.log(err);
    }
});

const createUser = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/user/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product.value)
        });
        const data = await response.json();
        if (response.ok) {
            menuItems.value.push(data);
            menuDialog.value = false;
            toast.add({ severity: 'success', summary: 'Success', detail: 'User created successfully', life: 3000 });
        }
    } catch (error) {
        console.log(error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to connect to server', life: 3000 });
    }
};

const updateUser = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/user/update/${product.value._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product.value)
        });
        const data = await response.json();
        if (response.ok) {
            const index = menuItems.value.findIndex((item) => item._id === product.value._id);
            if (index !== -1) {
                display.value = false;
                toast.add({ severity: 'success', summary: 'Success', detail: 'User update successfully', life: 3000 });
            } else {
                console.error(data);
                toast.add({ severity: 'error', summary: 'Error', detail: data.message || 'Failed to update user', life: 3000 });
            }
        }
    } catch (error) {
        console.error(error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to connect to server', life: 3000 });
    }
};

const deleteMenu = async (productId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/user/delete/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if (response.ok) {
            menuItems.value = menuItems.value.filter((item) => item._id !== productId);
            toast.add({ severity: 'success', summary: 'Success', detail: 'Menu deleted successfully', life: 3000 });
        } else {
            console.error(data);
            toast.add({ severity: 'error', summary: 'Error', detail: data.message || 'Failed to delete menu', life: 3000 });
        }
    } catch (error) {
        console.error(error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to connect to server', life: 3000 });
    }
};
const openNew = () => {
    product.value = {};
    submitted.value = false;
    menuDialog.value = true;
};

const open = (editProduct) => {
    product.value = { ...editProduct };
    display.value = true;
};
const confirmPopup = useConfirm();
const confirm = (event, product) => {
    productToDelete.value = product;
    confirmPopup.require({
        target: event.target,
        message: 'bạn có muốn xóa không',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            deleteMenu(productToDelete.value._id);
        },
        reject: () => {
            toast.add({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>

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
        :value="menuItems"
        v-model:selection="selectedMenuItems"
        dataKey="_id"
        :paginator="true"
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
    >
        <template #header>
            <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                <h5 class="m-0">Manage User</h5>
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
        <Column field="name" header="Name" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Name</span>
                {{ slotProps.data.name }}
            </template>
        </Column>
        <Column field="email" header="Email" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Email</span>
                {{ slotProps.data.email }}
            </template>
        </Column>
        <Column field="password" header="Password" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Password</span>
                {{ slotProps.data.password }}
            </template>
        </Column>
        <Column field="role" header="Role" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Role</span>
                {{ slotProps.data.role }}
            </template>
        </Column>
        <Column headerStyle="min-width:10rem;">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="mr-2" severity="success" rounded @click="open(slotProps.data)" />
                <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirm($event, slotProps.data)" />
            </template>
        </Column>
    </DataTable>

    <Dialog v-model:visible="menuDialog" :style="{ width: '450px' }" header="User Details" :modal="true" class="p-fluid">
        <div class="field" field="_id">
            <label for="name">Name</label>
            <InputText id="name" v-model.trim="product.name" required="true" autofocus :invalid="submitted && !!product.name" />
            <small class="p-invalid" v-if="submitted && !product.name">Name is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="email">Email</label>
            <InputText id="email" v-model.trim="product.email" required="true" autofocus :invalid="submitted && !!product.email" />
            <small class="p-invalid" v-if="submitted && !product.email">Name is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="password">Password</label>
            <InputText id="password" v-model.trim="product.password" required="true" autofocus :invalid="submitted && !!product.password" />
            <small class="p-invalid" v-if="submitted && !product.password">Name is required.</small>
        </div>
        <div class="field" field="_id">
            <label for="role">Role</label>
            <InputText id="role" v-model.trim="product.role" required="true" autofocus :invalid="submitted && !!product.role" />
            <small class="p-invalid" v-if="submitted && !product.role">Name is required.</small>
        </div>
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" text="" @click="menuDialog = false" />
            <Button label="Save" icon="pi pi-check" text="" @click="createUser" />
        </template>
    </Dialog>

    <Dialog v-model:visible="display" :style="{ width: '450px' }" header="User Details" :modal="true" class="p-fluid">
        <div class="field">
            <label for="name">Name</label>
            <InputText id="name" v-model.trim="product.name" required autofocus />
        </div>
        <div class="field">
            <label for="password">Password</label>
            <InputText id="password" v-model.trim="product.password" required autofocus />
        </div>
        <div class="field">
            <label for="role">Role</label>
            <InputText id="role" v-model.trim="product.role" required autofocus />
        </div>
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" @click="display = false" />
            <Button label="Save" icon="pi pi-check" @click="updateUser" />
        </template>
    </Dialog>

    <ConfirmPopup></ConfirmPopup>
</template>
<style scoped></style>
