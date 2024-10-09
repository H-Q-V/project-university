<script setup>
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
const submitted = ref(false);
const product = ref({});
const menuDialog = ref(false);
const selectedMenuItems = ref(null);
const menuItems = ref([]);
const display = ref(false);
const productToDelete = ref(null);

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

onMounted(async () => {
    try {
        const res = await fetch('http://localhost:3000/api/menu/getAll');
        const data = await res.json();
        menuItems.value = data.data;
    } catch (err) {
        console.log(err);
    }
});

const createMenu = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/menu/create', {
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
            toast.add({ severity: 'success', summary: 'Success', detail: 'Tag created successfully', life: 3000 });
        } else {
            console.error(data);
            toast.add({ severity: 'error', summary: 'Error', detail: data.message || 'Failed to create tag', life: 3000 });
        }
    } catch (error) {
        console.error(error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to connect to server', life: 3000 });
    }
};

const updateMenu = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/menu/update/${product.value._id}`, {
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
                menuItems.value[index] = data; // Cập nhật sản phẩm trong danh sách
            }
            display.value = false; // Đóng dialog
            toast.add({ severity: 'success', summary: 'Success', detail: 'Menu updated successfully', life: 3000 });
        } else {
            console.error(data);
            toast.add({ severity: 'error', summary: 'Error', detail: data.message || 'Failed to update menu', life: 3000 });
        }
    } catch (error) {
        console.error(error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to connect to server', life: 3000 });
    }
};

const deleteMenu = async (productId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/menu/delete/${productId}`, {
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

const getBadgeSeverity = (inventoryStatus) => {
    switch (inventoryStatus.toLowerCase()) {
        case 'instock':
            return 'success';
        case 'lowstock':
            return 'warning';
        case 'outofstock':
            return 'danger';
        default:
            return 'info';
    }
};

const confirmPopup = useConfirm();
const toast = useToast();

const open = (editProduct) => {
    //display.value = { ...editProduct };
    product.value = { ...editProduct };
    display.value = true; // Hiển thị dialog chỉnh sửa
};

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

const openNew = () => {
    product.value = {};
    submitted.value = false;
    menuDialog.value = true;
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
                <h5 class="m-0">Manage Menu</h5>
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
        <Column headerStyle="min-width:10rem;">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="mr-2" severity="success" rounded @click="open(slotProps.data)" />
                <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirm($event, slotProps.data)" />
            </template>
        </Column>
    </DataTable>

    <Dialog v-model:visible="menuDialog" :style="{ width: '450px' }" header="Menu Details" :modal="true" class="p-fluid">
        <div class="field" field="_id">
            <label for="name">Name</label>
            <InputText id="name" v-model.trim="product.name" required="true" autofocus :invalid="submitted && !!product.name" />
            <small class="p-invalid" v-if="submitted && !product.name">Name is required.</small>
        </div>
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" text="" @click="menuDialog = false" />
            <Button label="Save" icon="pi pi-check" text="" @click="createMenu" />
        </template>
    </Dialog>

    <Dialog v-model:visible="display" :style="{ width: '450px' }" header="Menu Details" :modal="true" class="p-fluid">
        <div class="field">
            <label for="name">Name</label>
            <InputText id="name" v-model.trim="product.name" required autofocus />
        </div>
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" @click="display = false" />
            <Button label="Save" icon="pi pi-check" @click="updateMenu" />
        </template>
    </Dialog>

    <ConfirmPopup></ConfirmPopup>
</template>

<style lang="scss" scoped></style>
