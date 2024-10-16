<template>
  <div class="login-main">
    <div class="w-login m-auto">
      <div class="row form-register">
        <div class="col-md-6 col-sm-12 col-12 login-main-left">
          <img
            src="https://res.cloudinary.com/dn6xdmqbl/image/upload/v1727257964/SportApp/mknprdtxbccrnznryglk.png"
          />
        </div>
        <div class="col-md-6 col-sm-12 col-12 login-main-right">
          <form class="login-form reg-form">
            <div class="login-main-header">
              <h3>OTP</h3>
            </div>
            <div class="input-div one">
              <div class="div lg-lable">
                <h5 v-if="!otp">Nhập OTP<span class="req">*</span></h5>
                <input
                  v-model="otp"
                  type="text"
                  class="input form-control-lgin"
                />
              </div>
            </div>
            <button
              v-if="!status"
              class="btn btn-primary float-right btn-login d-block w-100"
              @click.prevent="verifyOTP"
            >
              Xong
            </button>
            <button
              v-else
              class="btn btn-primary float-right btn-login d-block w-100"
            >
              Loading...
            </button>
            <div class="form-group d-block w-100 mt-5"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Toast from "../../../helper/toast";
import router from "@/router";

const otp = ref(null);

const status = ref(false);
const data = {
  otp: "",
};

const verifyOTP = async () => {
  if (!otp.value) {
    return Toast.error("Yêu cầu nhập otp");
  }
  data.otp = otp.value;
  const postOtp = await axios.post(
    `http://localhost:3000/api/auth/verify-otp`,
    data
  );
  console.log(postOtp.data);
  if (postOtp.data.success) {
    Toast.success("OTP chính xác");
    status.value = !status.value;
    router.push({ name: "Login" });
  }
};
</script>

<style scoped>
.register-container {
  /* Add your styles here */
}

.form-register {
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
