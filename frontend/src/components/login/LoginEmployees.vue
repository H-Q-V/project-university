<template>
    <div class="container-fluid login-fluid clear-left clear-right">
      <div class="login-container">
        <div class="login-header">
          <div class="w-login m-auto">
            <div class="login-logo">
              <h3>
                <a href="#">
                  <img src="@/assets/img/techjobs_bgw.png" alt="TechJobs">
                </a>
              </h3>
              <span class="login-breadcrumb"><em>/</em> Đăng Nhập</span>
            </div>
            <div class="login-right">
                <RouterLink to="/" class="btn btn-return">Return Home</RouterLink>
            </div>
          </div>
        </div>
  
        <div class="clearfix"></div>
        <div class="padding-top-90"></div>
  
        <div class="login-main">
          <div class="w-login m-auto">
            <div class="row">
              <div class="col-md-6 col-sm-12 col-12 login-main-left">
                <img src="@/assets/img/banner-login.png">
              </div>
              <div class="col-md-6 col-sm-12 col-12 login-main-right">
                <form class="login-form">
                  <div class="login-main-header">
                    <h3>Đăng Nhập</h3>
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Nhập email của bạn" required>
                  </div>
                  <div class="form-group">
                    <label for="password">Mật khẩu</label>
                    <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu" required>
                  </div>
                  <div class="form-group d-block frm-text">
                    <a href="#" class="fg-login d-inline-block">Quên mật khẩu</a>
                    <a href="#" class="fg-login float-right d-inline-block">Bạn chưa có tài khoản? Đăng ký</a>
                  </div>
                  <button type="submit" class="btn btn-primary float-right btn-login d-block w-100">Đăng Nhập</button>
                  <div class="form-group d-block w-100 mt-5">
                    <div class="text-or text-center">
                      <span>Hoặc</span>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 col-12 pr-7">
                        <button class="btn btn-secondary btn-login-facebook btnw w-100 float-left">
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                          <span>Đăng nhập bằng Facebook</span>
                        </button>
                      </div>
                      <div class="col-sm-6 col-12 pl-7">
                        <button class="btn btn-secondary btn-login-google btnw w-100 float-left">
                          <i class="fa fa-google" aria-hidden="true"></i>
                          <span>Đăng nhập bằng Google</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="login-footer">
        <div class="w-login m-auto">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-12 login-footer-left">
              <div class="login-copyright">
                <p>Copyright © 2020 <a href="#"> TechJobs</a>. All Rights Reserved.</p>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-12 login-footer-right">
              <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
import { onMounted } from 'vue'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'LoginEmployees',
  setup() {
    
  }
}
</script>

<style scoped>


@import url('/src/style.css');
@import url('/src/style.css');

</style>