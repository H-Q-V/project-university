<template>
  <main>
    <div class="container-fluid search-fluid">
      <div class="container search-wrapper" style="margin-top: 1rem;">
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
    

    <div class="container-fluid">
      <div class="container search-wrapper">
        <div class="row">
          <div class="d-flex">
            <div class="col-md-3 col-sm-12 col-12">
              <a id="click_advance" class="btn btn-c-filter" type="button" @click="toggleFilter" aria-expanded="true" aria-controls="collapseExample">
                <i class="pr-2 fa fa-times" id="icon-s-sw" aria-hidden="true"></i>Filter &amp; Refind
              </a>

              <div class="collapse" :class="{ show: isFilterVisible }" id="collapseExample">
                <div class="card card-body bg-card-body-filter filter-bar" :class="{ show: isFilterVisible }">
                  <div class="filter-bar">
                    <div class="filter-form">
                      <div class="filter-form-item">
                        <p>
                          <a @click="toggleIndustryFilter" class="btnf btn-filter" role="button" aria-expanded="false" aria-controls="filter-topic">
                              Ngành nghề
                            <i class="fa fa-angle-up" aria-hidden="true"></i>
                         </a>
                        </p>
                        <div class="collapse" :class="{ show: isIndustryFilterVisible }" id="filter-topic">
                          <div class="card o-card card-body">
                            <div class="filter-panel">
                              <div class="panel-content">
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Tất cả ngành nghề</a>
                                  <span class="filter-count">1,000</span>
                                </div>
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Lập trình viên</a>
                                  <span class="filter-count">555</span>
                                </div>
                                <!-- Thêm các mục khác ở đây -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="filter-form-item">
                        <p>
                          <a id="clickc2_advance" class="btnf btn-filter" data-toggle="collapse" href="#filter-price" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Mức Lương
                            <i class="fa fa-angle-up" aria-hidden="true"></i>
                          </a>
                        </p>
                        <div class="collapse show" id="filter-price">
                          <div class="card o-card card-body">
                            <div class="filter-panel">
                              <div class="panel-content">
                                <div class="filter-topic filter-input-price">
                                  <form class="al-price-filter">
                                    <span class="_fpblock">
                                      <input type="number" class="if-price" placeholder="50,000">
                                    </span>
                                    <span class="_fpblock _line">
                                      <p>-</p>
                                    </span>
                                    <span class="_fpblock">
                                      <input type="number" class="if-price" placeholder="1,000,000">
                                    </span>
                                    <span class="_fpblock">
                                      <button type="submit" class="sb-fprice"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
                                    </span>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="filter-form-item">
                        <p>
                          <a id="clickc3_advance" class="btnf btn-filter" data-toggle="collapse" href="#filter-rating" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Đánh giá
                            <i class="fa fa-angle-up" aria-hidden="true"></i>
                          </a>
                        </p>
                        <div class="collapse show" id="filter-rating">
                          <div class="card o-card card-body">
                            <div class="filter-panel">
                              <div class="panel-content">
                                <div class="filter-rating">
                                  <a href="#">
                                    <span class="rating-wrapper">
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                    </span>
                                    <span>(từ 5 sao)</span>
                                  </a>
                                </div>
                                <div class="filter-rating">
                                  <a href="#">
                                    <span class="rating-wrapper">
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </span>
                                    <span>(từ 4 sao)</span>
                                  </a>
                                </div>
                                <div class="filter-rating">
                                  <a href="#">
                                    <span class="rating-wrapper">
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                      <i class="fa fa-star-o" aria-hidden="true"></i>
                                      <i class="fa fa-star-o" aria-hidden="true"></i>
                                    </span>
                                    <span>(từ 3 sao)</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="filter-form-item">
                        <p>
                          <a id="clickc4_advance" class="btnf btn-filter" data-toggle="collapse" href="#filter-level" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Cấp bậc
                            <i class="fa fa-angle-up" aria-hidden="true"></i>
                          </a>
                        </p>
                        <div class="collapse show" id="filter-level">
                          <div class="card o-card card-body">
                            <div class="filter-panel">
                              <div class="panel-content">
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Tất cả cấp bậc</a>
                                  <span class="filter-count">2,450</span>
                                </div>
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Thực tập sinh</a>
                                  <span class="filter-count">555</span>
                                </div>
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Nhân viên</a>
                                  <span class="filter-count">233</span>
                                </div>
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Trưởng nhóm</a>
                                  <span class="filter-count">100</span>
                                </div>
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Trưởng phòng</a>
                                  <span class="filter-count">99</span>
                                </div>
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Phó giám đốc</a>
                                  <span class="filter-count">95</span>
                                </div>
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Giám đốc</a>
                                  <span class="filter-count">77</span>
                                </div>
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Tổng giám đốc điều hành</a>
                                  <span class="filter-count">50</span>
                                </div>
                                <div class="filter-topic cotain-common-filter">
                                  <a href="#" class="filter-action">Thư ký</a>
                                  <span class="filter-count">50</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> <!-- filter bar -->
                  </div>
                </div> <!-- ./ collapse -->
              </div>
            </div>  
            <div class="col-md-9 col-sm-12 col-12">
              <!-- This is where the search results will be displayed -->
              <div v-if="searchResults.length > 0">
                <h4 class="search-find">Tìm thấy {{ searchResults.length }} việc làm đang tuyển dụng</h4>
                <div class="job-board-wrap">
                  <div class="job-group">
                    <div v-for="job in searchResults" :key="job.id" class="job pagi">
                      <div class="job-content">
                        <div class="job-logo">
                          <a href="#">
                            <img :src="job.logo" class="job-logo-ima" alt="job-logo">
                          </a>
                        </div>
                        <div class="job-desc">
                          <div class="job-title">
                            <a href="#">{{ job.title }}</a>
                          </div>
                          <div class="job-company">
                            <a href="#">{{ job.company }}</a> | <a href="#" class="job-address"><i class="fa fa-map-marker" aria-hidden="true"></i> {{ job.location }}</a>
                          </div>
                          <div class="job-inf">
                            <div class="job-main-skill">
                              <i class="fa fa-code" aria-hidden="true"></i> <a href="#">{{ job.mainSkill }}</a>
                            </div>
                            <div class="job-salary">
                              <i class="fa fa-money" aria-hidden="true"></i>
                              <span class="salary-min">{{ job.salary }}<em class="salary-unit"></em></span>
                              <!-- <span class="salary-max">{{ job.salaryMax }} <em class="salary-unit">triệu</em></span> -->
                              <!-- <p class="salary">Giá: {{ job.salary }}</p> -->
                            </div>
                            <div class="job-deadline">
                              <span><i class="fa fa-clock-o" aria-hidden="true"></i> Hạn nộp: <strong>{{ job.deadline }}</strong></span>
                            </div>
                          </div>
                        </div>
                        <div class="wrap-btn-appl">
                          <!-- <a href="#" class="btn btn-appl" @click.prevent="applyNow(job.id)">Apply Now</a> -->
                          <!-- <button class="apply-button" @click.stop="openJdPage(job)">Apply Now</button>            -->
                          <a href="#" class="btn btn-appl" @click.stop="openJdPage(job)">Apply Now</a> <!-- Gọi openJdPage với job -->

                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
          <h4 class="search-find">Không có kết quả tìm kiếm nào.</h4>
        </div>
              </div>
              
        
            
          </div>
      </div>
    </div>
    </div>
  </main>
</template>







<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; 

const activeTab = ref('home');
const languages = ref([]);
const locations = ref(['Hồ Chí Minh', 'Đà Nẵng']);
const searchQuery = ref({
  keyword: '',
  language: '',
  location: ''
});
const companyQuery = ref('');
const isFilterVisible = ref(false);
const isIndustryFilterVisible = ref(false);
const isSalaryFilterVisible = ref(false);
const isRatingFilterVisible = ref(false);
const isLevelFilterVisible = ref(false);
const searchResults = ref([]); 
const router = useRouter(); 

const toggleFilter = () => {
  isFilterVisible.value = !isFilterVisible.value;
};

const toggleIndustryFilter = () => {
  isIndustryFilterVisible.value = !isIndustryFilterVisible.value;
};

const toggleSalaryFilter = () => {
  isSalaryFilterVisible.value = !isSalaryFilterVisible.value;
};

const toggleRatingFilter = () => {
  isRatingFilterVisible.value = !isRatingFilterVisible.value;
};

const toggleLevelFilter = () => {
  isLevelFilterVisible.value = !isLevelFilterVisible.value;
};

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/jobs/getAll');
    const data = await res.json();
    if (data.success) {
      locations.value = [...new Set(data.data.map(job => job.location))];
      languages.value = [...new Set(data.data.flatMap(job => job.programmingLanguages))];
    }
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
      searchResults.value = data.data;
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
    }
  } catch (error) {
    console.error('Error searching companies:', error);
  }
};
const emit = defineEmits();
emit('search-results', (results) => {
  searchResults.value = results; 
});
const openJdPage = (job) => {
  console.log('Job object:', job); 
  if (job && job._id) { 
    router.push({ 
      name: 'jd-page', 
      params: { id: job._id.toString() } 
    });
  } else {
    console.error('Job or Job ID is undefined', job);
  }
};
</script>

<style scoped>
.d-flex {
  display: flex;
}



.job-board-wrap {
  flex-grow: 1;

}






.input-group, .form-control {
  height: 50px; 
}

.form-control {
  padding: 0.375rem 0.75rem; 
 
}

.search-wrapper {
  z-index: 100;
  margin-top: 30px;

 
}

.nav-tabs .nav-item {
  z-index: 9999;
}

.btn-search {
  padding: 10px;
  background-color: #2f55d4 !important;
  border: 1px solid #2f55d4 !important;
  color: #ffffff !important;
  box-shadow: 0 3px 5px 0 rgba(47, 85, 212, 0.3);
  border-radius: 5px;
  padding: 0.65rem 1.5rem !important;
  font-size: 15px;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #0800ff;
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

/* Responsive styles */
@media (max-width: 10px) {
  .search-wrapper {
    margin-top: -1rem !important;
  }
  .job-title a {
    font-size: 0.9rem !important;
    line-height: 1;
  }
  .job-company a {
    font-size: 0.8rem !important;
  }
}




</style>