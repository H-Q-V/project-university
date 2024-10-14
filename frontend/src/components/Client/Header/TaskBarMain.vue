<template>
  <div class="container-fluid fluid-nav">
    <div class="container cnt-tnar">
      <nav class="navbar navbar-expand-lg navbar-light tjnav-bar">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
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
          <!-- <span class="navbar-toggler-icon"></span> -->
          <i class="fa fa-bars icn-res" aria-hidden="true"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto tnav-left tn-nav">
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Việc Làm IT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tin Tức</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div
                class="dropdown-menu tdropdown"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li> -->
            <li class="nav-item" v-for="item in menuItems" :key="item._id">
              <a class="nav-link" :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto my-2 my-lg-0 tnav-right tn-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                ><i class="fa fa-search" aria-hidden="true"></i>
                <span class="hidden-text">Tìm kiếm</span></a
              >
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Đăng Ký</a> -->
              <router-link class="nav-link" :to="{ name: 'Register' }"
                >Đăng Ký</router-link
              >
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Đăng Nhập</a> -->
              <router-link class="nav-link" :to="{ name: 'Login' }"
                >Đăng Nhập</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                VI
              </a>
              <div
                class="dropdown-menu tdropdown"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">English</a>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link btn-employers"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Nhà Tuyển Dụng</a
              >
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

const menuItems = ref([]);
onMounted(async () => {
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

<style lang="scss" scoped></style>
