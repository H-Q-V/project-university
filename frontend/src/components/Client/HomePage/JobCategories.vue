<template>
  <div class="job-sidebar">
    <h2 class="widget-title">
      <span>Ngành Nghề</span>
    </h2>
    <div class="job-list">
      <div class="catelog-list">
        <ul class="job-list-category" id="jobCategories">
          <li v-for="category in jobCategories" :key="category.id">
            <a :href="category.link">
              <span class="cate-img">
                <em>{{ category.name }}</em>
              </span>
              <span class="cate-count">({{ category.count }})</span>
            </a>
          </li>
        </ul>
        <div class="readmorestyle-wrap">
          <a href="#" class="readallstyle reads1" id="readMoreLink" @click.prevent="toggleReadMore">Xem thêm<i class="fa fa-angle-down pl-2"></i></a>
          <a href="#" class="readallstyle reads1" id="readLessLink" style="display: none;" @click.prevent="toggleReadMore">Rút gọn<i class="fa fa-angle-up pl-2"></i></a>
        </div>
      </div>
    </div>
        <div class="sb-banner">
          <img src="@/assets/img/ads1.jpg" class="advertisement">
        </div>
      </div>
    

</template>

<script>
export default {
  data() {
    return {
      jobCategories: [
        { id: 1, name: 'Lập trình viên', count: 1100, link: '#' },
        { id: 2, name: 'Nhân viên kiểm thử', count: 230, link: '#' },
        { id: 3, name: 'Kỹ sư cầu nối', count: 110, link: '#' },
        { id: 4, name: 'Designer', count: 2300, link: '#' },
        { id: 5, name: 'Product Manager', count: 99, link: '#' },
        { id: 6, name: 'HR', count: 300, link: '#' },
      ],
      isExpanded: false,
    };
  },
  methods: {
    toggleReadMore() {
      this.isExpanded = !this.isExpanded;
      const jobList = document.getElementById('jobCategories');
      const readMoreLink = document.getElementById('readMoreLink');
      const readLessLink = document.getElementById('readLessLink');

      if (this.isExpanded) {
        jobList.style.maxHeight = 'none'; 
        readMoreLink.style.display = 'none'; 
        readLessLink.style.display = 'inline'; 
      } else {
        jobList.style.maxHeight = '150px'; 
        readMoreLink.style.display = 'inline'; 
        readLessLink.style.display = 'none'; 
      }
    },
  },
  mounted() {
    const jobList = document.getElementById('jobCategories');
    jobList.style.maxHeight = '150px'; 
  },
};
</script>

<style scoped>
.job-sidebar {
  background: #fff;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 1rem;
  margin-top: 30px;
}

.widget-title {
  margin-bottom: 15px;
}

.widget-title span {
  font-family: Roboto, Arial, sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #3a3a3a;
  font-weight: 500;
}

.job-list-category {
  list-style-type: none;
  padding: 0;
  overflow: hidden; 
  transition: max-height 0.3s ease;
  max-height: 150px;
}

.job-list-category li {
  margin-bottom: 10px;
}

.job-list-category li a {
  color: #333;
  font-size: 0.975rem;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
}

.job-list-category li a:hover {
  color: #28a745;
}

.job-category-count {
  color: #999;
  font-size: 0.9rem;
}
</style>