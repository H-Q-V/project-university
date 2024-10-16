<script setup>
import { RouterLink, RouterView } from "vue-router";
import TaskBarMain from "./components/Client/Header/TaskBarMain.vue";
import Banner from "./components/Client/Header/Banner.vue";
import Search from "./components/Client/Header/seach.vue";
import UrgentJobs from './components/Client/HomePage/UrgentJobs.vue'
import JobCategories from './components/Client/HomePage/JobCategories.vue'
import JobListings from './components/Client/HomePage/JobListings.vue';
// import LoginEmployees from './components/login/LoginEmployees.vue';
//const route = useRoute(); 
import TopEmployers from'./components/Client/HomePage/TopEmployers.vue';
import JobBestSalary from'./components/Client/HomePage/JobBestSalary.vue';
import New from'./components/Client/HomePage/New.vue';
</script>

<template>
  <div>
    <RouterView />
   
    <!-- <TaskBarMain />
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
    <New></New> -->
    
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  
}

</style>
