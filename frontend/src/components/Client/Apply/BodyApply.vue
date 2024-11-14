<template>
  <!-- widget recuitment  -->
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
  <!-- (end) widget recuitment  -->
  <div class="container-fluid published-recuitment-wrapper">
    <div class="container published-recuitment-content">
      <div class="row">
        <div class="col-md-8 col-sm-12 col-12 recuitment-inner">
          <form class="employee-form">
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
                      Thông tin tài khoản
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
                  <div class="card-body recuitment-body row">
                    <div class="col-md-9">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label text-right label"
                          >Họ tên<span style="color: red" class="pl-2"
                            >*</span
                          ></label
                        >
                        <div class="col-sm-9">
                          <input
                            v-model="fullname"
                            type="text"
                            class="form-control"
                            placeholder="Nhập họ và tên"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label text-right label"
                          >Số điện thoại</label
                        >
                        <div class="col-sm-9">
                          <input
                            v-model="phone"
                            type="number"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label text-right label"
                          >Giới tính<span style="color: red" class="pl-2"
                            >*</span
                          ></label
                        >
                        <div class="col-sm-9">
                          <select
                            type="text"
                            class="form-control"
                            id="jobGender"
                            v-model="gender"
                          >
                            <option value="1">Chọn giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label text-right label"
                          >Ngày sinh<span style="color: red" class="pl-2"
                            >*</span
                          ></label
                        >
                        <div class="col-sm-9 row">
                          <div class="col-md-4 pr-0">
                            <select
                              v-model="birthDay"
                              type="text"
                              class="form-control d-inline-block"
                              id="empDayOb"
                            >
                              <option value="0">Ngày</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                            </select>
                          </div>
                          <div class="col-md-4 pr-0">
                            <select
                              v-model="birthMonth"
                              type="text"
                              class="form-control d-inline-block"
                              id="empMonthOb"
                            >
                              <option selected="selected" value="0">
                                Tháng
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                            </select>
                          </div>
                          <div class="col-md-4 pr-0">
                            <select
                              v-model="birthYear"
                              type="text"
                              class="form-control d-inline-block"
                              id="empYearOb"
                            >
                              <option selected="selected" value="0">Năm</option>
                              <option value="2020">2020</option>
                              <option value="2019">2019</option>
                              <option value="2018">2018</option>
                              <option value="2017">2017</option>
                              <option value="2016">2016</option>
                              <option value="2015">2015</option>
                              <option value="2014">2014</option>
                              <option value="2013">2013</option>
                              <option value="2012">2012</option>
                              <option value="2011">2011</option>
                              <option value="2010">2010</option>
                              <option value="2009">2009</option>
                              <option value="2008">2008</option>
                              <option value="2007">2007</option>
                              <option value="2006">2006</option>
                              <option value="2005">2005</option>
                              <option value="2004">2004</option>
                              <option value="2003">2003</option>
                              <option value="2002">2002</option>
                              <option value="2001">2001</option>
                              <option value="2000">2000</option>
                              <option value="1999">1999</option>
                              <option value="1998">1998</option>
                              <option value="1997">1997</option>
                              <option value="1996">1996</option>
                              <option value="1995">1995</option>
                              <option value="1994">1994</option>
                              <option value="1993">1993</option>
                              <option value="1992">1992</option>
                              <option value="1991">1991</option>
                              <option value="1990">1990</option>
                              <option value="1989">1989</option>
                              <option value="1988">1988</option>
                              <option value="1987">1987</option>
                              <option value="1986">1986</option>
                              <option value="1985">1985</option>
                              <option value="1984">1984</option>
                              <option value="1983">1983</option>
                              <option value="1982">1982</option>
                              <option value="1981">1981</option>
                              <option value="1980">1980</option>
                              <option value="1979">1979</option>
                              <option value="1978">1978</option>
                              <option value="1977">1977</option>
                              <option value="1976">1976</option>
                              <option value="1975">1975</option>
                              <option value="1974">1974</option>
                              <option value="1973">1973</option>
                              <option value="1972">1972</option>
                              <option value="1971">1971</option>
                              <option value="1970">1970</option>
                              <option value="1969">1969</option>
                              <option value="1968">1968</option>
                              <option value="1967">1967</option>
                              <option value="1966">1966</option>
                              <option value="1965">1965</option>
                              <option value="1964">1964</option>
                              <option value="1963">1963</option>
                              <option value="1962">1962</option>
                              <option value="1961">1961</option>
                              <option value="1960">1960</option>
                              <option value="1959">1959</option>
                              <option value="1958">1958</option>
                              <option value="1957">1957</option>
                              <option value="1956">1956</option>
                              <option value="1955">1955</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label text-right label"
                          >Hôn nhân<span style="color: red" class="pl-2"
                            >*</span
                          ></label
                        >
                        <div class="col-sm-9">
                          <select
                            v-model="marriage"
                            type="text"
                            class="form-control"
                            id="empStatus"
                          >
                            <option value="">Chọn tình trạng hôn nhân</option>
                            <option value="Độc thân">Độc thân</option>
                            <option value="Đã kết hôn">Đã kết hôn</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label text-right label"
                          >Tỉnh/ Thành phố<span style="color: red" class="pl-2"
                            >*</span
                          ></label
                        >
                        <div class="col-sm-9">
                          <select
                            v-model="province"
                            type="text"
                            class="form-control"
                            id="jobProvince2"
                          >
                            <option
                              v-for="item in applyItems"
                              :key="item.id"
                              :value="item.name"
                            >
                              {{ item.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label text-right label"
                          >Chỗ ở hiện tại<span style="color: red" class="pl-2"
                            >*</span
                          ></label
                        >
                        <div class="col-sm-9">
                          <input
                            v-model="residence"
                            type="text"
                            class="form-control"
                            placeholder="Nhập địa chỉ"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card recuitment-card">
              <div class="card-header recuitment-card-header" id="headingTwo">
                <h2 class="mb-0">
                  <a
                    class="btn btn-link btn-block text-left collapsed recuitment-header"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    File đính kèm
                    <span id="clickc1_advance3" class="clicksd">
                      <i class="fa fa fa-angle-up"></i>
                    </span>
                  </a>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse show"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body recuitment-body">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-right label"
                      >Chọn hồ sơ đính kèm<span style="color: red" class="pl-2"
                        >*</span
                      ></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="file"
                        id="file"
                        class="recuitment-card-acttachment"
                        @change="handleFileChange"
                      />
                      <label for="file" class="btn-1"
                        ><i class="fa fa-paperclip pr-2"></i>Chọn file</label
                      >
                      <p>{{ selectFile.name }}</p>
                      <p @click="uploadFile">Chọn file này</p>
                      <div>
                        <p v-for="(u, i) of uploadFiles">
                          <a :href="u.url">{{ u.name }}</a>
                        </p>
                      </div>
                      <p class="output-file">
                        <span id="previewFileName"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card recuitment-card">
              <div class="card-header recuitment-card-header" id="headingThree">
                <h2 class="mb-0">
                  <a
                    class="btn btn-link btn-block text-left collapsed recuitment-header"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Thông tin chung
                    <span id="clickc1_advance1" class="clicksd">
                      <i class="fa fa fa-angle-up"></i>
                    </span>
                  </a>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse show"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body recuitment-body">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-right label"
                      >Tiêu đề hồ sơ<span style="color: red" class="pl-2"
                        >*</span
                      ></label
                    >
                    <div class="col-sm-9">
                      <input
                        v-model="title"
                        type="text"
                        class="form-control"
                        placeholder="Nhập tiêu đề"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-right label"
                      >Trình độ cao nhất<span style="color: red" class="pl-2"
                        >*</span
                      ></label
                    >
                    <div class="col-sm-9">
                      <select
                        v-model="qualification"
                        type="text"
                        class="form-control"
                        id="jobLevel"
                      >
                        <option selected="selected" value="">
                          Chọn trình độ
                        </option>
                        <option value="Đại học">Đại học</option>
                        <option value="Cao đẳng">Cao đẳng</option>
                        <option value="Trung cấp">Trung cấp</option>
                        <option value="Cao học">Cao học</option>
                        <option value="Trung học">Trung học</option>
                        <option value="Chứng chỉ">Chứng chỉ</option>
                        <option value="Lao động phổ thông">
                          Lao động phổ thông
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-right label"
                      >Số năm kinh nghiệm<span style="color: red" class="pl-2"
                        >*</span
                      ></label
                    >
                    <div class="col-sm-9">
                      <select
                        v-model="experience"
                        type="text"
                        class="form-control"
                        id="jobExperience"
                      >
                        <option selected="selected" value="">
                          Chọn kinh nghiệm
                        </option>
                        <option value="Chưa có kinh nghiệm">
                          Chưa có kinh nghiệm
                        </option>
                        <option value="Dưới 1 năm">Dưới 1 năm</option>
                        <option value="1 năm">1 năm</option>
                        <option value="2 năm">2 năm</option>
                        <option value="3 năm">3 năm</option>
                        <option value="4 năm">4 năm</option>
                        <option value="5 năm">5 năm</option>
                        <option value="Trên 5 năm">Trên 5 năm</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-right label"
                      >Cấp bậc hiện tại<span style="color: red" class="pl-2"
                        >*</span
                      ></label
                    >
                    <div class="col-sm-9">
                      <select
                        v-model="current_position"
                        type="text"
                        class="form-control"
                        id="empLevel"
                      >
                        <option selected="selected" value="100">
                          Chọn cấp bậc
                        </option>
                        <option value="Nhân viên">Nhân viên</option>
                        <option value="CTV">CTV</option>
                        <option value="Trưởng nhóm">Trưởng nhóm</option>
                        <option value="Chuyên gia">Chuyên gia</option>
                        <option value="Trưởng phó phòng">
                          Trưởng phó phòng
                        </option>
                        <option value="Quản lý cấp cao">Quản lý cấp cao</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-right label"
                      >Cấp bậc mong muốn<span style="color: red" class="pl-2"
                        >*</span
                      ></label
                    >
                    <div class="col-sm-9">
                      <select
                        type="text"
                        class="form-control"
                        id="empWishLevel"
                        v-model="desired_position"
                      >
                        <option selected="selected" value="100">
                          Chọn cấp bậc
                        </option>
                        <option value="Nhân viên">Nhân viên</option>
                        <option value="CTV">CTV</option>
                        <option value="Trưởng nhóm">Trưởng nhóm</option>
                        <option value="Chuyên gia">Chuyên gia</option>
                        <option value="Trưởng phó phòng">
                          Trưởng phó phòng
                        </option>
                        <option value="Quản lý cấp cao">Quản lý cấp cao</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-right label"
                      >Công việc mong muốn<span style="color: red" class="pl-2"
                        >*</span
                      ></label
                    >
                    <div class="col-sm-9">
                      <select
                        v-model="desired_job"
                        type="text"
                        class="form-control"
                        id="empWishJob"
                      >
                        <option value="10">Bán hàng</option>
                        <option value="47">Tài chính/Kế toán/Kiểm toán</option>
                        <option value="29">Hành chính/Thư ký/Trợ lý</option>
                        <option value="32">Kinh doanh</option>
                        <option value="21">Chăm sóc khách hàng</option>
                        <option value="50">Thời vụ/Bán thời gian</option>
                        <option value="22">Điện/Điện tử/Điện lạnh</option>
                        <option value="40">Nhân sự</option>
                        <option value="38">Ngân hàng/Chứng khoán/Đầu tư</option>
                        <option value="12">Báo chí/Biên tập viên</option>
                        <option value="20">Bảo vệ/Vệ sĩ/An ninh</option>
                        <option value="13">Bất động sản</option>
                        <option value="14">Biên dịch/Phiên dịch</option>
                        <option value="15">Bưu chính viễn thông</option>
                        <option value="16">Cơ khí/Kĩ thuật ứng dụng</option>
                        <option value="17">Công nghệ thông tin</option>
                        <option value="18">Dầu khí/Địa chất</option>
                        <option value="19">Dệt may</option>
                        <option value="23">Du lịch/Nhà hàng/Khách sạn</option>
                        <option value="24">Dược/Hóa chất/Sinh hóa</option>
                        <option value="25">Giải trí/Vui chơi</option>
                        <option value="26">Giáo dục/Đào tạo/Thư viện</option>
                        <option value="27">
                          Giao thông/Vận tải/Thủy lợi/Cầu đường
                        </option>
                        <option value="28">Giày da/Thuộc da</option>
                        <option value="55">Khác</option>
                        <option value="30">Kho vận/Vật tư/Thu mua</option>
                        <option value="58">Khu chế xuất/Khu công nghiệp</option>
                        <option value="31">Kiến trúc/Nội thất</option>
                        <option value="59">Làm đẹp/Thể lực/Spa</option>
                        <option value="33">Lao động phổ thông</option>
                        <option value="34">Luật/Pháp lý</option>
                        <option value="36">Môi trường/Xử lý chất thải</option>
                        <option value="37">Mỹ phẩm/Thời trang/Trang sức</option>
                        <option value="39">Nghệ thuật/Điện ảnh</option>
                        <option value="56">Ngoại ngữ</option>
                        <option value="41">Nông/Lâm/Ngư nghiệp</option>
                        <option value="64">PG/PB/Lễ tân</option>
                        <option value="65">Phát triển thị trường</option>
                        <option value="66">Phục vụ/Tạp vụ/Giúp việc</option>
                        <option value="42">Quan hệ đối ngoại</option>
                        <option value="44">Quản lý điều hành</option>
                        <option value="45">Quảng cáo/Marketing/PR</option>
                        <option value="46">Sản xuất/Vận hành sản xuất</option>
                        <option value="35">
                          Sinh viên/Mới tốt nghiệp/Thực tập
                        </option>
                        <option value="60">Tài xế/Lái xe/Giao nhận</option>
                        <option value="43">
                          Thẩm định/Giám định/Quản lý chất lượng
                        </option>
                        <option value="48">Thể dục/Thể thao</option>
                        <option value="49">Thiết kế/Mỹ thuật</option>
                        <option value="51">Thực phẩm/DV ăn uống</option>
                        <option value="61">Trang thiết bị công nghiệp</option>
                        <option value="62">Trang thiết bị gia dụng</option>
                        <option value="63">Trang thiết bị văn phòng</option>
                        <option value="11">Tư vấn bảo hiểm</option>
                        <option value="52">Xây dựng</option>
                        <option value="53">Xuất-Nhập khẩu/Ngoại thương</option>
                        <option value="54">Y tế</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-right label"
                      >Mong muốn mức lương tối thiểu (VNĐ/ tháng)<span
                        style="color: red"
                        class="pl-2"
                        >*</span
                      ></label
                    >
                    <div class="col-sm-9">
                      <input
                        v-model="salary"
                        type="number"
                        class="form-control"
                        placeholder="Nhập số"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-right label"
                      >Nơi làm việc mong muốn<span
                        style="color: red"
                        class="pl-2"
                        >*</span
                      ></label
                    >
                    <div class="col-sm-9">
                      <select
                        v-model="workplace"
                        type="text"
                        class="form-control"
                        id="empWishPlace"
                      >
                        <option
                          v-for="item in applyItems"
                          :key="item.id"
                          :value="item.name"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="rec-submit">
              <button
                type="submit"
                class="btn-submit-recuitment mb-3 ml-3"
                name=""
                @click.prevent="submitForm"
              >
                <i class="fa fa-floppy-o pr-2"></i>Lưu Hồ Sơ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgbanner from "@/assets/img/hna2.jpg";
import { ref, watch } from "vue";
import { onMounted } from "vue";
const applyItems = ref([]);
const token = ref(localStorage.getItem("token"));

// Form data refs
const fullname = ref("");
const phone = ref("");
const gender = ref("0");
const birthDay = ref("0");
const birthMonth = ref("0");
const birthYear = ref("0");
const date_of_birth = ref("");
const marriage = ref("");
const province = ref("");
const residence = ref("");
const file = ref(null);
const title = ref("");
const qualification = ref("");
const experience = ref("");
const current_position = ref("");
const desired_position = ref("");
const desired_job = ref("");
const salary = ref("");
const workplace = ref("");
const selectFile = ref("");
const uploadFiles = ref([]);

watch([birthDay, birthMonth, birthYear], ([newDay, newMonth, newYear]) => {
  if (newDay !== "0" && newMonth !== "0" && newYear !== "0") {
    date_of_birth.value = `${newDay}-${newMonth}-${newYear}`;
  }
});

const handleFileChange = (e) => {
  if (e.target.files && e.target.files[0]) {
    selectFile.value = e.target.files[0];
  }
};

const uploadFile = () => {
  const fileUrl = URL.createObjectURL(selectFile.value);
  uploadFiles.value.push({
    name: selectFile.value.name,
    url: fileUrl,
  });
  console.log(uploadFiles.value);
  selectFile.value = "";
};

// Form submission
const submitForm = async () => {
  try {
    const fileUrls = uploadFiles.value.map((file) => file.url);

    const formData = new FormData();
    formData.append("file", file.value);

    const applyData = {
      fullname: fullname.value,
      phone: phone.value,
      gender: gender.value,
      date_of_birth: date_of_birth.value,
      marriage: marriage.value,
      province: province.value,
      residence: residence.value,
      file: fileUrls,
      title: title.value,
      qualification: qualification.value,
      experience: experience.value,
      current_position: current_position.value,
      desired_position: desired_position.value,
      desired_job: desired_job.value,
      salary: salary.value,
      workplace: workplace.value,
    };

    const response = await fetch("http://localhost:3000/api/apply/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applyData),
    });
    console.log("aa", applyData);
    if (response.ok) {
      alert("Application submitted successfully!");
    } else {
      throw new Error("Failed to submit application");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit application");
  }
};

onMounted(async () => {
  try {
    const res = await fetch(
      "https://api.mysupership.vn/v1/partner/areas/province"
    );
    const data = await res.json();
    applyItems.value = data.results;
  } catch (err) {
    console.log(err);
  }
});
</script>

<style lang="scss" scoped></style>
