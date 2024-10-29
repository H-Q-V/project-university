<template>
    <div class="col-md-4 col-sm-12 col-12 clear-right">
      <div class="side-bar mb-3">
        <h2 class="widget-title">
          <span>Thông tin</span>
        </h2>
        <!-- Nội dung thông tin công việc -->
      </div>
      <div class="side-bar mb-3">
        <h2 class="widget-title">
          <span>Giới thiệu công ty</span>
        </h2>
        <div class="company-intro">
          <a href="#">
            <img :src="fptLogo" class="job-logo-ima" alt="logo công ty">
          </a>
        </div>
        <!-- Nội dung giới thiệu công ty -->
      </div>
      <div class="side-bar mb-3">
        <h2 class="widget-title">
          <span>Việc làm tương tự</span>
        </h2>
        <!-- Nội dung việc làm tương tự -->
      </div>
      <div class="side-bar mb-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="home-ads">
                <a href="#">
                  <img :src="ads1" alt="Quảng cáo">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import fptLogo from '@/assets/img/fpt-logo.png'
  import ads1 from '@/assets/img/ads1.jpg'
  
  export default {
    name: 'JdSidebar',
    data() {
      return {
        fptLogo,
        ads1
      }
    }
  }
  </script>
  <style scoped>
  .side-bar {
    background: #fff;
    padding: 15px;
    border-radius: 3px;
    margin-top: 1rem;
  }
  
  .widget-title span {
    font-family: Roboto, Arial, sans-serif;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #3a3a3a;
    font-weight: 500;
  }
  
  .company-intro {
    width: 100%;
    text-align: center;
  }
  
  .job-logo-ima {
    width: 100px;
    height: auto;
  }
  
  .home-ads img {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }
  </style>