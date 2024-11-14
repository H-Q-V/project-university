<template>
  <div class="container-fluid fluid-nav another-page">
    <div class="container cnt-tnar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light tjnav-bar">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <a href="#" class="nav-logo">
          <router-link to="/">
          <img :src="logoImage" alt="TechJobs Logo">
        </router-link>
        </a>
        <button class="navbar-toggler tnavbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <!-- <span class="navbar-toggler-icon"></span> -->
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
            <span class="user-info">Xin chào, {{ nameUser }}</span>
            <div class="btn-logout" @click="logout">
              <!-- <i class="fa fa-sign-out sign-out-icon" aria-hidden="true"></i> -->
            </div>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import logoImage from '@/assets/img/techjobs_bgw.png';

export default {
name: 'SearchHeader',
setup() {
  const isLogin = ref(false);
  const menuItems = ref([]);
  const nameUser = ref("");

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

  return {
    logoImage,
    isLogin,
    menuItems,
    nameUser
  };
}
}
</script>
<style scoped>
.fluid-nav,
.tjnav-bar {
  z-index: 9999;
}

ul.tn-nav li a {
  color: #000 !important;
  border-bottom: 2px solid transparent;
  font-size: 0.9rem;
}

ul.tn-nav li a:hover {
  border-bottom: 2px solid blue;
}

.tjnav-bar {
  background: #fff !important;
}

.nav-logo img {
  width: 120px;
  height: auto;
}

.btn-employers {
  background-color: #2f55d4 !important;
  border: 1px solid #2f55d4 !important;
  color: #ffffff !important;
  -webkit-box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.3);
  box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.3);
  border-radius: 10px;
  padding: 0.5rem 1.5rem !important;
  margin-left: 15px;
}

.another-page {
  background: #fff;
  margin-bottom: 20px;
  transition: all ease 0.3s;
  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
  padding: 6px 0;
}

.another-page a.nav-link.btn-employers {
  color: #fff !important;
}
.button-auth {
display: flex;
list-style: none;
padding: 0;
margin: 0;
}

.button-auth .nav-item {
margin-right: 10px;
}

.button-auth .nav-item:last-child {
margin-right: 0;
}
</style>