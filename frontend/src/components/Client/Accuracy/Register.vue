<!-- frontend/src/components/Register/Register.vue -->
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
              <h3>Đăng Ký</h3>
            </div>
            <div class="input-div one">
              <div class="div lg-lable">
                <h5 v-if="!username">Họ Và Tên<span class="req">*</span></h5>
                <input
                  v-model="username"
                  type="text"
                  class="input form-control-lgin"
                />
              </div>
            </div>
            <div class="input-div one">
              <div class="div lg-lable">
                <h5 v-if="!email">Địa Chỉ Email<span class="req">*</span></h5>
                <input
                  v-model="email"
                  type="text"
                  class="input form-control-lgin"
                />
              </div>
            </div>
            <div class="input-div one">
              <div class="div lg-lable">
                <h5 v-if="!password">Mật khẩu<span class="req">*</span></h5>
                <input
                  v-model="password"
                  type="password"
                  class="input form-control-lgin"
                />
              </div>
            </div>
           
          
            <RouterLink
              :to="{ name: 'Login' }"
              class="fg-login d-inline-block"
              style="float: right; margin: 10px 0"
              >Bạn đã có tài khoản? Đăng nhập</RouterLink
            >
            <button
              v-if="!status"
              class="btn btn-primary float-right btn-login d-block w-100"
              @click.prevent="register"
            >
              Đăng Ký
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

const username = ref(null);
const email = ref(null);
const password = ref(null);
const status = ref(false);

const data = {
  name: "",
  email: "",
  password: "",
  
};

const register = async () => {
  if (!username.value) {
    return Toast.error("Yêu cầu nhập tên người dùng!");
  }
  if (!email.value) {
    return Toast.error("Yêu cầu nhập email");
  }
  if (!password.value) {
    return Toast.error("Yêu cầu nhập mật khẩu");
  }
  data.name = username.value.trim();
  data.email = email.value;
  data.password = password.value;
  status.value = !status.value;
  const postUser = await axios.post(
    `http://localhost:3000/api/auth/register`,
    data
  );
  console.log(postUser.data);
  if (postUser.data.success) {
    Toast.success("Đăng ký thành công");
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
