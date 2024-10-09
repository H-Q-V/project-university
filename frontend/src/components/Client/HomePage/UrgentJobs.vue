<template>
  <div class="col-md-8 col-sm-12 col-12">
    <div class="job-board-wrap">
      <h2 class="widget-title">
        <span>Tuyển gấp</span>
      </h2>

      <div class="job-group">
        <div v-for="job in urgentJobs" :key="job.id" class="job pagi">
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
                  <span class="salary-min">{{ job.salaryMin }}<em class="salary-unit">triệu</em></span>
                  <span class="salary-max">{{ job.salaryMax }} <em class="salary-unit">triệu</em></span>
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
export default {
  name: 'UrgentJobs',
      
  data() {
    return {
      urgentJobs: [
        {
          id: 1,
          title: 'Lập trình viên Frontend',
          company: 'Công ty ABC',
          logo: '/src/assets/img/fpt-logo.png', 
          link: '#',
          companyLink: '#',
          location: 'Hà Nội',
          skillLink: '#',
          mainSkill: 'Vue.js',
          salaryMin: 15,
          salaryMax: 25,
          deadline: '30/06/2023',
          applyLink: '#'
        },
        {
          id: 2,
          title: 'Kỹ sư phần mềm Backend',
          company: 'Công ty XYZ',
          logo: '/src/assets/img/fpt-logo.png', 
          link: '#',
          companyLink: '#',
          location: 'Hồ Chí Minh',
          skillLink: '#',
          mainSkill: 'Node.js',
          salaryMin: 20,
          salaryMax: 30,
          deadline: '15/07/2023',
          applyLink: '#'
        },
        {
          id: 2,
          title: 'Kỹ sư phần mềm Backend',
          company: 'Công ty XYZ',
          logo: '/src/assets/img/fpt-logo.png', 
          link: '#',
          companyLink: '#',
          location: 'Hồ Chí Minh',
          skillLink: '#',
          mainSkill: 'Node.js',
          salaryMin: 20,
          salaryMax: 30,
          deadline: '15/07/2023',
          applyLink: '#'
        },
      ]
    }
  }, 

  created() {
    console.log('Danh sách công việc khẩn cấp đã được tải');
  }
}
</script>

<style scoped>
.job-board-wrap {
    margin-top: 30px; 
}
</style>