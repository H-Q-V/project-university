<template>
  <div class="container-fluid fluid-nav">
    <div class="container cnt-tnar">
      <nav class="navbar navbar-expand-lg navbar-light tjnav-bar">
        <a href="#" class="nav-logo">
          <img :src="imgTechJob" />
        </a>
        <button
          class="navbar-toggler tnavbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars icn-res" aria-hidden="true"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto tnav-left tn-nav">
            <li class="nav-item" v-for="item in menuItems" :key="item._id">
              <a class="nav-link" :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto my-2 my-lg-0 tnav-right tn-nav">
            <ul class="button-auth" v-if="!isLogin">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Register' }"
                  >Đăng Ký</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Login' }"
                  >Đăng Nhập</router-link
                >
              </li>
            </ul>
            <li class="button-auth" v-else>
              <div class="bt-au-em">
                <RouterLink
                  class="nav-link btn-employers"
                  :to="{ name: 'recruitment' }"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Nhà Tuyển Dụng
                </RouterLink>
              </div>
              <div class="bt-au-span">
                <span class="user-info">Xin chào, {{ nameUser }}</span>
              </div>
              <div class="btn-logout" @click="confirmLogout">
                <i class="fa fa-sign-out sign-out-icon" aria-hidden="true"></i>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import imgTechJob from "@/assets/img/techjobs_bgb.png";
import { ref, onMounted } from "vue";
const nameUser = ref("");
const menuItems = ref([]);
const isLogin = ref(false);
import router from "@/router";

const confirmLogout = () => {
  if (confirm("Bạn có chắc chắn muốn thoát không?")) {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    router.push({ name: "Login" });
  }
};

onMounted(async () => {
  if (localStorage.getItem("token")) {
    isLogin.value = true;
    nameUser.value = localStorage.getItem("name");
  }
  try {
    const res = await fetch("http://localhost:3000/api/menu/getAll");
    const data = await res.json();
    menuItems.value = data.data;
    console.log(menuItems.value);
  } catch (err) {
    console.log(err);
  }
});
</script>

<style scoped>
.button-auth {
  display: flex;
}
.sign-out-icon {
  margin-left: 20px;
  font-size: 24px;
  color: white;
}

.sign-out-icon:hover {
  cursor: pointer;
  color: red;
}
.user-info {
  color: white; /* Thay đổi màu chữ thành trắng */
}

.button-auth {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 8px;
}

.btn-employers {
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  color: #339af0; /* Màu chữ cho nút */
}

.btn-employers:hover {
  color: #004a9c !important;
}

.btn-logout {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  transition: background-color 0.3s;
}
</style>
