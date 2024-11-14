<template>
    <div class="col-md-8 col-sm-12 col-12 clear-left">
      <div class="main-wrapper">
        <h2 class="widget-title">
            <span>Phúc lợi</span>
          </h2>
          <!-- content -->
          <div class="welfare-wrap">
            <div class="row">
              <div class="welfare-list">
                <ul>
                  <li v-for="(benefit, index) in jobDetails.benefits" :key="index">
                <p><i class="fa fa-check-circle icn-welfare"></i>{{ benefit }}</p>
              </li>
                </ul>
              </div>
            </div>
          </div>
          <h2 class="widget-title">
            <span>Mô tả công việc</span>
          </h2>
          <div class="jd-content" v-html="jobDetails.jobDescription"></div>
          <h2 class="widget-title">
            <span>Yêu cầu công việc</span>
          </h2>
          <div class="jd-content" v-html="jobDetails.jobRequest"></div>


        </div>




      </div>
      
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const jobDetails = ref({});
  const error = ref(null);
  
  const fetchJobDetails = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/jobs/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch job details');
      }
      const data = await res.json();
      jobDetails.value = data.data;
    } catch (err) {
      console.error('Error fetching job details:', err);
      error.value = err.message;
    }
  };
  
  onMounted(() => {
    fetchJobDetails(route.params.id);
  });
  
  const benefitsList = computed(() => {
  if (typeof jobDetails.value.benefits === 'string') {
    return jobDetails.value.benefits.split('. ');
  }
  return [];
  });
  </script>


  <style scoped>
  .main-wrapper {
    background: #fff;
    padding: 20px;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  .widget-title {
    border-left: 4px solid #00b14f;
    padding-left: 10px;
    margin-bottom: 20px;
  }
  
  .widget-title span {
    font-size: 18px;
    font-weight: bold;
    color: #212f3f;
  }
  
  .welfare-list ul {
    list-style: none;
    padding: 0;
  }
  
  .welfare-list ul li {
    margin-bottom: 10px;
  }
  
  .welfare-list ul li p {
    display: flex;
    align-items: center;
  }
  
  .icn-welfare {
    background-color: #edf5ff;
    color: #4d6eb7;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
  
  .jd-content {
    color: #4d4d4d;
    line-height: 1.6;
    font-size: 14px;
  }
  </style>