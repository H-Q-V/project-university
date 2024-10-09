<template>
    <div class="row">
        <div class="col-md-12 job-board2-wrap">
            <div class="job-board2-wrap-header">
                <h3>Tin tuyển dụng, việc làm mới nhất</h3>
            </div>
            <div class="job-listings-container">
                <div class="job-latest-group" v-for="(job, index) in paginatedJobs" :key="index">
                    <a href="#" class="job-latest-item">
                        <div class="job-lt-logo">
                            <img :src="job.logo" alt="Company Logo">
                        </div>
                        <div class="job-lt-info">
                            <h3>{{ job.title }}</h3>
                            <a class="company" href="#">{{ job.company }}</a>
                            <p class="address"><i class="fa fa-map-marker pr-1" aria-hidden="true"></i> {{ job.location }}</p>
                            <p class="salary">Giá: {{ job.salary }}</p>
                            <button class="apply-button">Apply Now</button>
                        </div>
                    </a>
                </div>
            </div>
            <div class="pagination">
                <button class="nav-button" @click="prevPage" :disabled="currentPage === 1">←</button>
                <span>Trang {{ currentPage }} / {{ totalPages }}</span>
                <button class="nav-button" @click="nextPage" :disabled="currentPage === totalPages">→</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        const jobs = [
            {
                title: "[HCM] 02 Solution Architects–Up to $2000",
                company: "FPT Software",
                location: "Đà Nẵng",
                salary: "$2000", 
                logo: '/src/assets/img/fpt-logo.png', 
            },
            {
                title: "[HCM] 01 Frontend Developer–Up to $1500",
                company: "ABC Tech",
                location: "Hà Nội",
                salary: "$1500", 
                logo: '/src/assets/img/fpt-logo.png', 
            },
            {
                title: "[HCM] 03 Backend Developer–Up to $1800",
                company: "XYZ Solutions",
                location: "Đà Nẵng",
                salary: "$1800", 
                logo: '/src/assets/img/fpt-logo.png', 
            },
            {
                title: "[HCM] 04 UI/UX Designer–Up to $1200",
                company: "Design Co.",
                location: "Hồ Chí Minh",
                salary: "$1200", 
                logo: '/src/assets/img/fpt-logo.png', 
            },
            {
                title: "[HCM] 05 Data Scientist–Up to $2500",
                company: "Data Inc.",
                location: "Đà Nẵng",
                salary: "$2500", 
                logo: '/src/assets/img/fpt-logo.png', 
            },
            {
                title: "[HCM] 05 Data Scientist–Up to $2500",
                company: "Data Inc.",
                location: "Đà Nẵng",
                salary: "$2500", 
                logo: '/src/assets/img/fpt-logo.png', 
            },
            {
                title: "[HCM] 05 Data Scientist–Up to $2500",
                company: "Data Inc.",
                location: "Đà Nẵng",
                salary: "$2500", 
                logo: '/src/assets/img/fpt-logo.png', 
            },
            {
                title: "[HCM] 05 Data Scientist–Up to $2500",
                company: "Data Inc.",
                location: "Đà Nẵng",
                salary: "$2500", 
                logo: '/src/assets/img/fpt-logo.png', 
            },
            {
                title: "[HCM] 05 Data Scientist–Up to $2500",
                company: "Data Inc.",
                location: "Đà Nẵng",
                salary: "$2500", 
                logo: '/src/assets/img/fpt-logo.png', 
            },
        ];

        const currentPage = ref(1);
        const itemsPerPage = 6; 
        const totalPages = computed(() => Math.ceil(jobs.length / itemsPerPage));

        const paginatedJobs = computed(() => {
            const start = (currentPage.value - 1) * itemsPerPage;
            return jobs.slice(start, start + itemsPerPage);
        });

        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                currentPage.value++;
            } else {
                currentPage.value = 1; 
            }
        };

        const prevPage = () => {
            if (currentPage.value > 1) {
                currentPage.value--;
            } else {
                currentPage.value = totalPages.value; 
            }
        };

       
        let intervalId;

        onMounted(() => {
            intervalId = setInterval(() => {
                nextPage();
            }, 5000); 
        });

        onUnmounted(() => {
            clearInterval(intervalId); 
        });

        return {
            jobs,
            paginatedJobs,
            currentPage,
            totalPages,
            nextPage,
            prevPage
        };
    }
}
</script>

<style scoped>
.job-board2-wrap {
    background: #fff; 
    padding: 15px;
    border-radius: 10px; 
    margin-bottom: 1rem;
}

.job-listings-container {
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
}

.job-latest-group {
    width: calc(33.33% - 10px); 
    margin-bottom: 15px;
}

.job-latest-item {
    display: flex;
    background: white;
    border-radius: 10px;
    border: 1px solid #eaeaeac4;
    padding: 10px;
    text-decoration: none; 
    color: inherit; 
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}
.job-latest-item:hover {
    transform: translateY(-5px) scale(1.02); 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); 
}

.job-lt-logo {
    width: 110px;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px; 
}

.job-lt-logo img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.job-lt-info {
    padding: 10px;
}

.job-lt-info h3 {
    font-size: 14px;
    line-height: 1.4;
    color: #000;
}

.job-lt-info .company,
.job-lt-info .address,
.salary {
    color: #333;
    font-size: 14px;
}

.salary {
    color: #28a745;
    font-weight: bold;
}

.apply-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}
.apply-button:hover {
    background-color: #218838;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.nav-button {
    background-color: #28a745;
    color: white; 
    border: none; 
    border-radius: 50%; 
    width: 40px; 
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 10px; 
    transition: background-color 0.3s; 
}

.nav-button:hover {
    background-color: #218838; /* Màu nền khi hover */
}
</style>