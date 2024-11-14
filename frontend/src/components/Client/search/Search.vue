<template>
  <div class="search-container">
    <SearchHeader/>
    <SearchForm @search-results="handleSearchResults" @search-input="handleSearchInput"/> <!-- Thêm sự kiện ở đây -->
    <Footer/>
  </div>
</template>

<script>
import SearchHeader from './SearchHeader.vue';
import SearchForm from './SearchForm.vue';
import Footer from './Footer.vue';

export default {
components: {
  SearchHeader,
  SearchForm,
  Footer
},
methods: {
    handleSearchResults(results) {
      this.searchResults = results; 
    },
    handleSearchInput(query) {
      this.searchResults = query; // Cập nhật searchResults với query
    }
  },
  data() {
    return {
      searchResults: [] 
    };
  }
}
</script>

<style scoped>
.search-container {
padding: 20px; 
background-color: #f8f9fa; 
min-height: 100vh; 
}

.search-container > * {
margin-bottom: 20px; 
}
</style>