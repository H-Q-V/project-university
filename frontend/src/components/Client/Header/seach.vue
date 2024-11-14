<template>
  <div class="container-fluid search-fluid">
    <div class="container search-wrapper" style="margin-top: -11rem;">
      <ul class="nav nav-tabs search-nav-tabs" id="myTab" role="tablist">
        <li class="nav-item search-nav-item" @click="setActiveTab('home')">
          <a class="nav-link snav-link" :class="{ active: activeTab === 'home' }" id="home-tab" role="tab">Tìm việc làm</a>
        </li>
        <li class="nav-item search-nav-item" @click="setActiveTab('profile')">
          <a class="nav-link snav-link" :class="{ active: activeTab === 'profile' }" id="profile-tab" role="tab">Tìm công ty</a>
        </li>
      </ul>
      <div class="tab-content search-tab-content" id="myTabContent">
        <div class="tab-pane stab-pane fade" :class="{ 'show active': activeTab === 'home' }" id="home" role="tabpanel">
          <form class="bn-search-form" @submit.prevent="handleSearch">
            <div class="row">
              <div class="col-md-10 col-sm-12">
                <div class="row">
                  <div class="col-md-5">
                    <div class="input-group s-input-group">
                      <input 
                        type="text" 
                        class="form-control sinput" 
                        placeholder="Nhập kỹ năng, công việc,..."
                        v-model="searchQuery.keyword"
                      >
                      <span><i class="fa fa-search"></i></span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <select class="form-control" v-model="searchQuery.language">
                      <option value="">Tất cả ngôn ngữ</option>
                      <option v-for="lang in languages" :key="lang" :value="lang">
                        {{ lang }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <select class="form-control" v-model="searchQuery.location">
                      <option value="">Tất cả địa điểm</option>
                      <option v-for="loc in locations" :key="loc" :value="loc">
                        {{ loc }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-2 col-sm-12">
                <button type="submit" class="btn btn-primary btn-search col-sm-12">Tìm kiếm</button>
              </div>
            </div>
          </form>
        </div>
        <div class="tab-pane stab-pane fade" :class="{ 'show active': activeTab === 'profile' }" id="profile" role="tabpanel">
          <form class="bn-search-form" @submit.prevent="handleCompanySearch">
            <div class="row">
              <div class="col-md-10 col-sm-12">
                <div class="input-group s-input-group w-100">
                  <input 
                    type="text" 
                    class="form-control sinput" 
                    placeholder="Nhập tên công ty..."
                    v-model="companyQuery"
                  >
                  <span><i class="fa fa-search"></i></span>
                </div>
              </div>
              <div class="col-md-2 col-sm-12">
                <button type="submit" class="btn btn-primary btn-search col-sm-12">Tìm kiếm</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted ,defineEmits} from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter

const emit = defineEmits(); // Định nghĩa emit
const router = useRouter(); // Khởi tạo router

const activeTab = ref('home');
const languages = ref([]);
const locations = ref([ 'Hồ Chí Minh', 'Đà Nẵng']);
const searchQuery = 
ref({
  keyword: '',
  language: '',
  location: ''
});
const companyQuery = ref('');


onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/jobs/getAll');
    const data = await res.json();
    if (data.success) {
      locations.value = [...new Set(data.data.map(job => job.location))];
      languages.value = [...new Set(data.data.flatMap(job => job.programmingLanguages))];    }
  } catch (error) {
    console.error('Error fetching locations:', error);
  }
});

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const handleSearch = async () => {
  try {
    const params = new URLSearchParams();
    if (searchQuery.value.keyword) params.append('keyword', searchQuery.value.keyword);
    if (searchQuery.value.location) params.append('location', searchQuery.value.location);
    if (searchQuery.value.language) params.append('language', searchQuery.value.language);

    const res = await fetch(`http://localhost:3000/api/jobs/search?${params}`);
    const data = await res.json();
    
    if (data.success) {
      router.push({ name: 'Search' });
      emit('search-results', data.data);

    }
  } catch (error) {
    console.error('Error searching jobs:', error);
  }

};

const handleCompanySearch = async () => {
  if (!companyQuery.value) return;
  
  try {
    const res = await fetch(`http://localhost:3000/api/jobs/search?company=${companyQuery.value}`);
    const data = await res.json();
    
    if (data.success) {
      emit('search-results', data.data);
      router.push({ name: 'Search' }); // Chuyển hướng đến trang Search.vue

    }
  } catch (error) {
    console.error('Error searching companies:', error);
  }
};
</script>


  
  <style scoped>
  .search-wrapper {
  /*margin-top: -11rem;*/
  z-index: 9999;
}

.nav-tabs .nav-item {
  z-index: 9999;
}

.btn-search {
  padding: 10px;
  background-color: #2f55d4 !important;
  border: 1px solid #2f55d4 !important;
  color: #ffffff !important;
  -webkit-box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.3);
  box-shadow: 0 3px 5px 0 rgba(38, 88, 255, 0.3);
  border-radius: 5px;
  padding: 0.65rem 1.5rem !important;
  font-size: 15px;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #fff;
  background-color: transparent;
  border: none;
  height: 39px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
}

.nav-tabs .nav-link {
  border: none;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: #ccc;
}

.nav-tabs {
  border-bottom: none;
}

input.sinput {
  font-size: 0.9rem;
  font-family: "Roboto", Arial, sans-serif;
  padding: 23px;
  padding-left: 40px;
  border-radius: 5px !important;
  border: none;
}

i.sfa {
  position: absolute;
  z-index: 3000;
  left: 28px;
  top: 16px;
  color: #6f6f6f;
  font-size: 15px;
}
.s-input-group {
  position: relative;
}
.s-input-group span i {
  position: absolute;
  left: 15px;
  line-height: 46px;
  color: #6f6f6f;
  font-size: 15px;
  z-index: 1010;
}
.s-input-group input {
  padding-left: 30px; /* Để tạo khoảng cách cho biểu tượng tìm kiếm */
}

/*css select 2 */

.select2.select2-container {
  width: 100% !important;
}

.select2.select2-container .select2-selection {
  border: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  height: 45px;
  margin-bottom: 15px;
  outline: none !important;
  transition: all 0.15s ease-in-out;
}

.select2.select2-container .select2-selection .select2-selection__rendered {
  color: #8f8d8d;
  line-height: 45px;
  padding-right: 33px;
  padding-left: 40px;
}

.select2.select2-container .select2-selection .select2-selection__arrow {
  background: #ffffff;
  border-left: 1px solid #ececec;
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
  height: 43px;
  width: 38px;
}

.select2.select2-container.select2-container--open
  .select2-selection.select2-selection--single {
  background: #f8f8f8;
}
.select2.select2-container.select2-container--open
  .select2-selection.select2-selection--single
  .select2-selection__arrow {
  -webkit-border-radius: 0 3px 0 0;
  -moz-border-radius: 0 3px 0 0;
  border-radius: 0 3px 0 0;
}
.select2.select2-container.select2-container--open
  .select2-selection.select2-selection--multiple {
  border: 1px solid #34495e;
}
.select2.select2-container .select2-selection--multiple {
  height: auto;
  min-height: 34px;
}
.select2.select2-container
  .select2-selection--multiple
  .select2-search--inline
  .select2-search__field {
  margin-top: 0;
  height: 32px;
}
.select2.select2-container
  .select2-selection--multiple
  .select2-selection__rendered {
  display: block;
  padding: 0 4px;
  line-height: 29px;
}
.select2.select2-container
  .select2-selection--multiple
  .select2-selection__choice {
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin: 4px 4px 0 0;
  padding: 0 6px 0 22px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  position: relative;
}
.select2.select2-container
  .select2-selection--multiple
  .select2-selection__choice
  .select2-selection__choice__remove {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  margin: 0;
  text-align: center;
  color: #e74c3c;
  font-weight: bold;
  font-size: 16px;
}
.select2-container .select2-dropdown {
  background: transparent;
  border: none;
  margin-top: -5px;
}
.select2-container .select2-dropdown .select2-search {
  padding: 0;
}
.select2-container .select2-dropdown .select2-search input {
  outline: none !important;
  border: 1px solid #c7c7c7 !important;
  border-bottom: none !important;
  padding: 4px 6px !important;
}
.select2-container .select2-dropdown .select2-results {
  padding: 0;
}
.select2-container .select2-dropdown .select2-results ul {
  background: #fff;
  border: 1px solid #c7c7c7;
}
.select2-container
  .select2-dropdown
  .select2-results
  ul
  .select2-results__option--highlighted[aria-selected] {
  background-color: #007bff;
}
.select2-container--default .select2-results__group {
  cursor: default;
  display: block;
  padding: 6px;
  background: #007bff1a;
  border: 1px solid #ccc;
  border-top: 0;
  border-bottom: 0;
  font-weight: 500;
  color: #0558b2;
}
.form-control {
  height: 45px; /* Đảm bảo chiều cao đồng nhất cho các ô */
  margin-bottom: 15px; /* Khoảng cách giữa các ô */
}
/* (end) css select 2 */

@media (max-width: 720px) {
  .search-wrapper {
    margin-top: 1rem !important;
  }
  .banner-content {
    display: none;
  }
  .search-fluid {
    background: transparent;
  }
  input.form-control.sinput {
    margin-bottom: 15px;
    border: none;
  }
  .wrap-btn-appl {
    display: none;
  }
  .job-desc {
    float: none !important;
  }
  .job-title a {
    font-size: 0.9rem !important;
    line-height: 1;
  }
  .job-inf {
    display: none;
  }
  .job-logo {
    width: 70px;
    height: 70px;
  }
  img.job-logo-ima {
    width: 70px !important;
    height: auto;
  }
  .job-content {
    padding: 0 !important;
  }
  .job-company a {
    font-size: 0.8rem !important;
  }
  .job-board-wrap {
    margin-left: -15px;
    margin-right: -15px;
  }
}
  </style>
  