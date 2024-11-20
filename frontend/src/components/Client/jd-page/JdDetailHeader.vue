<template>
  <div class="container-fluid job-detail-wrap">
    <div class="container job-detail">
      <div class="job-detail-header">
        <div class="row">
          <div class="col-md-2 col-sm-12 col-12">
            <div class="job-detail-header-logo">
              <a href="#">
                <img
                  :src="jobDetails.logo"
                  class="job-logo-ima"
                  alt="logo công ty"
                />
              </a>
            </div>
          </div>
          <div class="col-md-7 col-sm-12 col-12">
            <div class="job-detail-header-desc">
              <div class="job-detail-header-title">
                <a href="#">{{ jobDetails.title }}</a>
              </div>
              <div class="job-detail-header-company">
                <a href="#">{{ jobDetails.company }}</a>
              </div>
              <div class="job-detail-header-de">
                <ul>
                  <li><i class="fa fa-map-marker icn-jd"></i><span>{{ jobDetails.location }}</span></li>
                  <li><i class="fa fa-usd icn-jd"></i><span>{{ jobDetails.x }}</span></li>
                  <li><i class="fa fa-calendar icn-jd"></i><span>15/01/2019</span></li>
                </ul>
              </div>
              <div class="job-detail-header-tag">
                <ul>
                  <li v-for="(language, index) in jobDetails.programmingLanguages" :key="index">
                    <a href="#">{{ language }}</a>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 col-12">
            <div class="jd-header-wrap-right">
              <div class="jd-center">
                <RouterLink :to="{ name: 'apply' }">
                  <a href="#" class="btn btn-primary btn-apply">Nạp đơn</a>
                </RouterLink>
                <p class="jd-view">Lượt xem: <span>1.520</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const jobDetails = ref({});

const fetchJobDetails = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/jobs/${id}`);
    const data = await res.json();
    jobDetails.value = data.data;
    console.log("Job details:", jobDetails.value);
  } catch (error) {
    console.error("Error fetching job details:", error);
  }
};

onMounted(() => {
  fetchJobDetails(route.params.id);
});
</script>

<style scoped>
.job-detail-wrap {
  background: #fff;
  padding: 20px 0;
  border-bottom: 1px solid #e8e8e8;
}

.job-detail-header-logo {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.job-detail-header-logo img {
  width: 100%;
  max-width: 100px;
  height: auto;
}

.job-detail-header-title a {
  color: #212f3f;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}

.job-detail-header-company a {
  color: #212f3f;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
}

.job-detail-header-de ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.job-detail-header-de ul li {
  display: inline-block;
  margin-right: 20px;
  color: #6f7882;
}

.job-detail-header-tag ul {
  list-style: none;
  padding: 0;
}

.job-detail-header-tag ul li {
  display: inline-block;
  margin-right: 10px;
}

.job-detail-header-tag ul li a {
  background-color: #edf5ff;
  color: #4d6eb7;
  padding: 5px 10px;
  border-radius: 3px;
  text-decoration: none;
  font-size: 14px;
}

.btn-apply {
  background-color: #00b14f;
  border-color: #00b14f;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
}

.jd-view {
  color: #6f7882;
  font-size: 14px;
  margin-top: 10px;
}
</style>
