<template>
  <div class="col-md-8 col-sm-12 col-12">
    <div class="job-board-wrap">
      <h2 class="widget-title">
        <span>Tuyển gấp</span>
      </h2>

      <div class="job-group">
        <div v-for="job in urgentJobs" :key="job._id" class="job pagi">
          <div class="job-content">
            <div class="job-logo">
              <a :href="job.companyLink">
                <img :src="job.logo" class="job-logo-ima" :alt="job.company + ' logo'"> 
              </a>
            </div>

            <div class="job-desc">
              <div class="job-title">
                <a :href="job.link">{{ job.title }}</a>
              </div>
              <div class="job-company">
                <a :href="job.companyLink">{{ job.company }}</a> | 
                <a :href="job.link" class="job-address">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  {{ job.location }}
                </a>
              </div>

              <div class="job-inf">
                <div class="job-main-skill">
                  <i class="fa fa-code" aria-hidden="true"></i>
                  <a :href="job.skillLink"> {{ job.mainSkill }}</a>
                </div>
                <div class="job-salary">
                  <i class="fa fa-money" aria-hidden="true"></i>
                  <!-- <span class="salary-min">{{ job.salaryMin }}<em class="salary-unit">triệu</em></span> -->
                  <span class="salary">Giá: {{ job.salary }}</span>
                </div>
                <div class="job-deadline">
                  <span><i class="fa fa-clock-o" aria-hidden="true"></i> Hạn nộp: <strong>{{ job.deadline }}</strong></span>
                </div>
              </div>
            </div>
            <div class="wrap-btn-appl">
              <a :href="job.applyLink" class="btn btn-appl">Ứng tuyển ngay</a>
            </div>
          </div>
        </div>
      </div>

      <div class="readmorestyle-wrap">
        <a href="#" class="readallstyle reads1">Xem tất cả</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  name: 'UrgentJobs',
  components: {
    SlickCarousel,
  },
  data() {
    return {
      urgentJobs: [],
    };
  },
  async created() {
    await this.fetchUrgentJobs();
  },
  methods: {
    async fetchUrgentJobs() {
      try {
        const response = await axios.get('http://localhost:3000/api/jobs/urgent'); 
        this.urgentJobs = response.data.data; 
      } catch (error) {
        console.error('Error fetching urgent jobs:', error);
      }
    },
  },
};
</script>

<style scoped>
.job-board-wrap {
    margin-top: 30px; 
}
</style>