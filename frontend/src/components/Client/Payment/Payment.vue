<template>
  <div
    class="container-fluid login-fluid clear-left clear-right"
    v-if="!isform"
  >
    <div class="login-container">
      <div class="clearfix"></div>

      <div class="padding-top-90"></div>

      <div class="login-main">
        <div class="w-login m-auto">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-12 login-main-left">
              <img :src="imgTechJob" />
            </div>
            <div class="col-md-6 col-sm-12 col-12 login-main-right">
              <form class="login-form">
                <div class="login-main-header">
                  <h3>Nhập số tiền</h3>
                </div>
                <div class="input-div one">
                  <div class="div lg-lable">
                    <input
                      type="text"
                      v-model="amount"
                      class="input form-control-lgin"
                      @input="formatNumber"
                      placeholder="Nhập số tiền"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary float-right btn-login d-block w-100"
                  @click.prevent="fetchpayment"
                >
                  Nạp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="form-group d-block w-100 mt-5" v-else>
    <div class="text-center">
      <span>Tiếp tục giao dịch</span>
    </div>

    <div class="row">
      <div class="col-sm-6 col-12 pr-7">
        <button
          class="btn btn-secondary btn-login-facebook btnw w-100 float-left"
        >
          <!-- <span>Hủy</span> -->
          <RouterLink :to="{ name: 'home' }">Hủy</RouterLink>
        </button>
      </div>
      <div class="col-sm-6 col-12 pl-7">
        <button
          class="btn btn-secondary btn-login-google btnw w-100 float-left"
        >
          <span @click="payment">Tiếp tục giao dịch</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import imgTechJob from "@/assets/img/banner-login.png";
const urlPayment = ref("");
const isform = ref(false);
const token = ref(localStorage.getItem("token"));
const amount = ref("");
const formatNumber = (event) => {
  let value = event.target.value.replace(/\D/g, "");

  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  amount.value = value;
};

const fetchpayment = async () => {
  try {
    const rawAmount = parseInt(amount.value.replace(/\./g, ""), 10);
    const payment = {
      amount: rawAmount,
    };
    const response = await fetch(
      "http://localhost:3000/api/payos/create-payment-link",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      }
    );
    const data = await response.json();
    urlPayment.value = data.data.checkoutUrl;
    console.log(urlPayment.value);
    console.log("a:", data);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    isform.value = true;
  } catch (error) {
    alert("Có lỗi xảy ra khi nạp tiền");
  }
};

const payment = () => {
  console.log(111);
  window.location.href = urlPayment.value;
};
</script>

<style lang="scss" scoped></style>
