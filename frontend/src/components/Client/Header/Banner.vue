<template>
  <div class="container-fluid clear-left clear-right">
    <div class="main-banner">
      <div class="banner-image">
        <img :src="banner" alt="banner-image" />
      </div>
    </div>
    <div class="banner-content">
      <h3>1000+ Jobs For Developers</h3>
      <div class="banner-tags">
        <ul>
          <li><a href="#">Java</a></li>
          <li><a href="#">Python</a></li>
          <li><a href="#">Tester</a></li>
          <li><a href="#">QA QC</a></li>
          <li><a href="#">.NET</a></li>
          <li><a href="#">Javascript</a></li>
          <li><a href="#">Business Analyst</a></li>
          <li><a href="#">Designer</a></li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import banner from "@/assets/img/banner2.jpg";

</script>

<style scoped></style>
