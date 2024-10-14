<template>
   <div class="container-fluid">
  <div class="container top-employer">
    <div class="row">
      <div class="col-md-12 top-employer-contain">
        <div class="header">
          <h3>Nhà tuyển dùng hàng đầu</h3>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-6 col-12 top-employer-wrap">
            <div class="top-employer-item">
              <a href="#">
                <div class="emp-img-thumb">
                  <img src="/src/assets/img/fpt-logo.png">
                </div>
                <h3 class="company">FPT Software</h3>
              </a>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12 top-employer-wrap">
            <div class="top-employer-item">
              <a href="#">
                <div class="emp-img-thumb">
                  <img src="/src/assets/img/fpt-logo.png">
                </div>
                <h3 class="company">mgm technology</h3>
              </a>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12 top-employer-wrap">
            <div class="top-employer-item">
              <a href="#">
                <div class="emp-img-thumb">
                  <img src="/src/assets/img/fpt-logo.png">
                </div>
                <h3 class="company">ALIPAY Software</h3>
              </a>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12 top-employer-wrap">
            <div class="top-employer-item">
              <a href="#">
                <div class="emp-img-thumb">
                  <img src="/src/assets/img/fpt-logo.png">
                </div>
                <h3 class="company">Luxoft Software</h3>
              </a>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12 top-employer-wrap">
            <div class="top-employer-item">
              <a href="#">
                <div class="emp-img-thumb">
                  <img src="/src/assets/img/fpt-logo.png">
                </div>
                <h3 class="company">Techcombank</h3>
              </a>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12 top-employer-wrap">
            <div class="top-employer-item">
              <a href="#">
                <div class="emp-img-thumb">
                  <img src="/src/assets/img/fpt-logo.png">
                </div>
                <h3 class="company">Home Credit</h3>
              </a>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12 top-employer-wrap">
            <div class="top-employer-item">
              <a href="#">
                <div class="emp-img-thumb">
                  <img src="/src/assets/img/fpt-logo.png">
                </div>
                <h3 class="company">Grab (Vietnam) Ltd.</h3>
              </a>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12 top-employer-wrap">
            <div class="top-employer-item">
              <a href="#">
                <div class="emp-img-thumb">
                  <img src="/src/assets/img/fpt-logo.png">
                </div>
                <h3 class="company">Techbase Vietnam</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="clearfix"></div>
</template>

<script>
import { onMounted } from 'vue'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'TopEmployers',
  setup() {
    
  }
}
</script>

<style scoped>


/*top employer*/
.top-employer-item {
  background: #fefefe;
  height: 185px;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.top-employer-wrap:nth-child(4n) {
  margin-right: 0;
  padding-right: 15px;
}
.top-employer-wrap:nth-child(4n + 1) {
  margin-left: 0;
  padding-left: 15px;
}
.top-employer-wrap {
  padding: 8px;
 
}

.emp-img-thumb {
  height: 130px;
  overflow: hidden;
  width: 100%;
  display: block;
  padding: 10px;
  text-align: center;
  line-height: 177px;
}

.emp-img-thumb img {
  width: 110px;
  height: auto;
}

.top-employer-item .company {
  font-weight: 500;
  font-size: 15px;
  width: 100%;
  text-align: center;
  display: block;
  margin-top: 30px;
}

.top-employer-contain .header h3 {
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
}

.top-employer-item:hover {
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0.25), 0 1px 5px rgba(0, 0, 0, 0.22);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.25), 0 1px 5px rgba(0, 0, 0, 0.22);
}



</style>