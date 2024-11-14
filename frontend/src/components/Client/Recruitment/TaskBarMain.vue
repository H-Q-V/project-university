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
          <ul class="navbar-nav mr-auto my-2 my-lg-0 tnav-right tn-nav">
            <li class="nav-item nav-coin">
              <!-- <a
                class="nav-link btn-employers"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                style="color: #fff !important"
                >Nạp tiền</a
              > -->
              <RouterLink
                class="nav-link btn-employers"
                :to="{ name: 'payment' }"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                style="color: #fff !important"
              >
                Nạp tiền
              </RouterLink>
            </li>
            <li class="button-auth">
              <div class="btn-logout" @click="confirmLogout">
                <i
                  class="fa fa-universal-access"
                  style="color: #ffd700"
                  aria-hidden="true"
                ></i>
                <span class="coins">Coins: {{ coins }}</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import imgTechJob from "@/assets/img/techjobs_bgw.png";

const token = ref(localStorage.getItem("token"));
const isLogin = ref(!!token.value);
const coins = ref(0);

const fetchCoin = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/payos/coin", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Response data:", data);
    coins.value = data.data.coins || 0;
  } catch (error) {
    console.error("Error fetching coin data:", error);
  }
};

onMounted(() => {
  fetchCoin();
});

const confirmLogout = () => {
  localStorage.removeItem("token");
  isLogin.value = false;
};
</script>

<style scoped>
.coins {
  margin-left: 10px;
}

.nav-coin {
  margin-right: 20px;
}
</style>
