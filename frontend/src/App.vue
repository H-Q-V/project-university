<script setup>
import { RouterLink, RouterView } from "vue-router";
import TaskBarMain from "./components/Client/Header/TaskBarMain.vue";
import Banner from "./components/Client/Header/Banner.vue";
import Search from "./components/Client/Header/seach.vue";
import UrgentJobs from './components/Client/HomePage/UrgentJobs.vue'
import JobCategories from './components/Client/HomePage/JobCategories.vue'
import JobListings from './components/Client/HomePage/JobListings.vue';
import LoginEmployees from './components/login/LoginEmployees.vue';
//const route = useRoute(); 
import TopEmployers from'./components/Client/HomePage/TopEmployers.vue';
import JobBestSalary from'./components/Client/HomePage/JobBestSalary.vue';
import New from'./components/Client/HomePage/New.vue';
</script>

<template>
  <div>
    
    
    <TaskBarMain />
    <Banner />
    <Search />
    <div class="container">
      <div class="row">
        <UrgentJobs class="col-md-8" />
        <JobCategories class="col-md-4" />
      </div>
      <div class="row">
        <JobListings class="col-md-12" /> 
      </div>
    </div>
    <TopEmployers></TopEmployers>
    <JobBestSalary></JobBestSalary>
    <New></New>
  </div>

  <RouterView></RouterView>
</template>

<script setup></script>

<style scoped></style>
