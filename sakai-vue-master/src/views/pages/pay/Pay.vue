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
        :value="payItems"
        v-model:selection="selectedPayItems"
        dataKey="_id"
        :paginator="true"
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
    >
        <template #header>
            <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                <h5 class="m-0">Manage Pay</h5>
                <IconField iconPosition="left" class="block mt-2 md:mt-0">
                    <InputIcon class="pi pi-search" />
                </IconField>
                <h6>Tổng: {{ calculateTotal.toLocaleString() }} VND</h6>
            </div>
        </template>

        <Column field="_id" header="Code" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Code</span>
                {{ slotProps.data._id }}
            </template>
        </Column>
        <Column field="user" header="User" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">User</span>
                {{ slotProps.data.User }}
            </template>
        </Column>
        <Column field="charity" header="Charity" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Charity</span>
                {{ slotProps.data.Charity }}
            </template>
        </Column>
        <Column field="amount" header="Amount" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Amount</span>
                {{ slotProps.data.Amount }}
            </template>
        </Column>
        <Column field="status" header="Status" :sortable="true" headerStyle="width:14%; min-width:10rem;">
            <template #body="slotProps">
                <span class="p-column-title">Status</span>
                {{ slotProps.data.Status }}
            </template>
        </Column>
        <Column headerStyle="min-width:10rem;">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="mr-2" severity="success" rounded @click="open(slotProps.data)" />
                <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirm($event, slotProps.data)" />
            </template>
        </Column>
    </DataTable>

    <Dialog v-model:visible="display" :style="{ width: '450px' }" header="Menu Details" :modal="true" class="p-fluid">
        <div class="field">
            <label for="user">User</label>
            <InputText id="user" v-model.trim="product.User" required autofocus />
        </div>
        <div class="field">
            <label for="charity">Charity</label>
            <InputText id="charity" v-model.trim="product.Charity" required autofocus />
        </div>
        <div class="field">
            <label for="amount">Amount</label>
            <InputText id="amount" v-model.trim="product.Amount" required autofocus />
        </div>
        <div class="field">
            <label for="status">Status</label>
            <InputText id="status" v-model.trim="product.Status" required autofocus />
        </div>
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" @click="display = false" />
            <Button label="Save" icon="pi pi-check" @click="updatePay" />
        </template>
    </Dialog>
    <ConfirmPopup></ConfirmPopup>
</template>

<script setup>
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref, computed } from 'vue';
const confirmPopup = useConfirm();
const toast = useToast();
const payItems = ref([]);
const selectedPayItems = ref(null);
const payToDelete = ref(null);
const display = ref(false);
const product = ref({});

const calculateTotal = computed(() => {
    return payItems.value.reduce((sum, item) => sum + (Number(item.Amount * 1000) || 0), 0);
});

const confirm = (event, product) => {
    payToDelete.value = product;
    confirmPopup.require({
        target: event.target,
        message: 'bạn có muốn xóa không',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            deletePay(payToDelete.value._id);
        },
        reject: () => {
            toast.add({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const open = (editProduct) => {
    product.value = { ...editProduct };
    display.value = true;
};
onMounted(async () => {
    try {
        const res = await fetch('http://localhost:3000/api/payos/getAllCoin');
        const data = await res.json();
        payItems.value = data.data;
        console.log(payItems.value);
    } catch (error) {
        console.log(error);
    }
});

const deletePay = async (payId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/payos/delete/${payId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if (response.ok) {
            payItems.value = payItems.value.filter((item) => item._id !== payId);
            toast.add({ severity: 'success', summary: 'Success', detail: 'Pay deleted successfully', life: 3000 });
        } else {
            console.error(data);
            toast.add({ severity: 'error', summary: 'Error', detail: data.message || 'Failed to delete pay', life: 3000 });
        }
    } catch (error) {
        console.log(error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to connect to server', life: 3000 });
    }
};

const updatePay = async (payId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/payos/update/${product.value._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product.value)
        });
        const data = await response.json();
        if (response.ok) {
            const index = payItems.value.findIndex((item) => item._id === product.value._id);
            if (index !== -1) {
                payItems.value[index] = data; // Cập nhật sản phẩm trong danh sách
            }
            display.value = false; // Đóng dialog
            toast.add({ severity: 'success', summary: 'Success', detail: 'Pay updated successfully', life: 3000 });
        } else {
            console.error(data);
            toast.add({ severity: 'error', summary: 'Error', detail: data.message || 'Failed to update pay', life: 3000 });
        }
    } catch (error) {
        console.error(data);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to connect to server', life: 3000 });
    }
};
</script>
<style lang="scss" scoped></style>
