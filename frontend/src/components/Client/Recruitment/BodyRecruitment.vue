<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="home-ads">
            <a href="#">
              <img :src="imgbanner" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion" id="accordionExample">
    <div class="card recuitment-card">
      <div class="card-header recuitment-card-header" id="headingOne">
        <h2 class="mb-0">
          <a
            class="btn btn-link btn-block text-left recuitment-header"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Đăng tin tuyển dụng
            <span id="clickc1_advance2" class="clicksd">
              <i class="fa fa fa-angle-up"></i>
            </span>
          </a>
        </h2>
      </div>

      <div
        id="collapseOne"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div class="card-body recuitment-body">
          <div class="form-group row">
            <label class="col-sm-3 col-form-label text-right label">Title<span style="color: red" class="pl-2">*</span></label>
            <div class="col-sm-9">
              <input v-model="title" type="text" class="form-control" placeholder="Nhập tiêu đề" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label text-right label">Company<span style="color: red" class="pl-2">*</span></label>
            <div class="col-sm-9">
              <textarea v-model="company" class="form-control" placeholder="Nhập tên công ty" rows="5"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label text-right label">Location<span style="color: red" class="pl-2">*</span></label>
            <div class="col-sm-9">
              <textarea v-model="location" class="form-control" placeholder="Nhập địa điểm" rows="5"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label text-right label">Salary<span style="color: red" class="pl-2">*</span></label>
            <div class="col-sm-9">
              <textarea v-model="salary" class="form-control" placeholder="Nhập mức lương" rows="5"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-3 col-form-label text-right label">Logo</label>
            <div class="col-sm-9">
              <div id="drop-area">
                <input
                  type="file"
                  id="fileElem"
                  multiple
                  accept="image/*"
                  @change="handleFiles($event.target.files)"
                />
                <label style="cursor: pointer" for="fileElem">Tải ảnh lên hoặc kéo thả vào đây</label>

                <progress
                  id="progress-bar"
                  max="100"
                  :value="uploadProgress"
                  v-show="uploadProgress > 0 && uploadProgress < 100"
                ></progress>

                <div id="gallery">
                  <img
                    v-for="(img, index) in gallery"
                    :src="img"
                    :key="index"
                    class="preview-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label text-right label">Benefits<span style="color: red" class="pl-2">*</span></label>
            <div class="col-sm-9">
              <textarea v-model="benefits" class="form-control" placeholder="Nhập lợi ích" rows="5"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label text-right label">Job Description<span style="color: red" class="pl-2">*</span></label>
            <div class="col-sm-9">
              <textarea v-model="obDescription" class="form-control" placeholder="Nhập mô tả công việc" rows="5"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label text-right label">Job Request<span style="color: red" class="pl-2">*</span></label>
            <div class="col-sm-9">
              <textarea v-model="jobRequest" class="form-control" placeholder="Nhập yêu cầu công việc" rows="5"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label text-right label">Languages<span style="color: red" class="pl-2">*</span></label>
            <div class="col-sm-9">
              <textarea v-model="languages" class="form-control" placeholder="Nhập ngôn ngữ lập trình" rows="5"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-3 col-form-label text-right label">Tuyển gấp</label>
            <div class="col-sm-9">
              <input type="checkbox" v-model="isUrgent" /> 
            </div>
          </div>

          <div class="rec-submit">
            <button
              type="submit"
              class="btn-submit-recuitment"
              :disabled="loading"
              @click.prevent="fetchcreate"
            >
              <i class="fa fa-floppy-o pr-2"></i>
              <span v-if="loading">Đang lưu...</span>
              <span v-else>Lưu Tin</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import imgbanner from "@/assets/img/hna2.jpg";
const uploadProgress = ref(0);
const gallery = ref([]);
const title = ref("");
const company = ref("");
const location = ref("");
const salary = ref("");
const benefits = ref("");
const obDescription = ref("");
const jobRequest = ref("");
const languages = ref("");
// const logo = ref("");
const logoUrl = ref("");
const isUrgent = ref(false);
const token = ref(localStorage.getItem("token"));
const loading = ref(false);

const handleFiles = (files) => {
  gallery.value = [];
  uploadProgress.value = 0;

  Array.from(files).forEach((file) => {
    const fileURL = URL.createObjectURL(file);
    gallery.value.push(fileURL);
    logoUrl.value = fileURL;
    const interval = setInterval(() => {
      if (uploadProgress.value < 100) {
        uploadProgress.value += 10;
      } else {
        clearInterval(interval);
      }
    }, 100);
  });
};


const fetchcreate = async () => {
  loading.value = true;
  try {
    const check = await fetch("http://localhost:3000/api/payos/coin", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
    });

    const checkcoins = await check.json();
    if (checkcoins.data.coins < 2000) {
      alert("Phải nạp đủ tiền mới có thể đăng bài!");
      loading.value = false;
      return;
    }

    const payload = {
      title: title.value,
      company: company.value,
      location: location.value,
      salary: salary.value,
      logo: logoUrl.value,
      benefits: benefits.value.split(','), 
      jobDescription: obDescription.value,
      jobRequest: jobRequest.value,
      programmingLanguages: languages.value.split(','), 
      isUrgent: isUrgent.value, 
    };

    const response = await fetch("http://localhost:3000/api/jobs/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    alert("Đăng tin thành công!");
  } catch (error) {
    alert("Có lỗi xảy ra khi đăng tin!");
  }finally{
    loading.value=false
  }
};
</script>

<style scoped>
#gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.preview-image {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 5px;
}

#progress-bar {
  width: 100%;
  height: 10px;
  margin-top: 10px;
  display: block;
}
</style>
