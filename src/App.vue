<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->
<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-24">
          <div class="flex items-center pl-0">
            <img
              src="https://static.readdy.ai/image/bd761bcaa8d3bed71136525661ab40e4/90da2c829f05fc7f6e5c6fe89f562254.png"
              alt="Gạo Sạch Minh Hồng"
              class="h-[84px] w-[95px] object-contain"
            />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                @click="currentPage = 'home'"
                :class="{
                  'text-green-700 font-semibold': currentPage === 'home',
                  'text-gray-900 hover:text-green-700': currentPage !== 'home',
                }"
                class="px-3 py-2 text-lg font-bold transition-colors cursor-pointer"
                >Trang Chủ</a
              >
              <a
                href="#about"
                @click="currentPage = 'about'"
                :class="{
                  'text-green-700 font-semibold': currentPage === 'about',
                  'text-gray-900 hover:text-green-700': currentPage !== 'about',
                }"
                class="px-3 py-2 text-lg font-bold transition-colors cursor-pointer"
                >Giới Thiệu</a
              >
              <a
                href="#products"
                @click="currentPage = 'products'"
                :class="{
                  'text-green-700 font-semibold': currentPage === 'products',
                  'text-gray-900 hover:text-green-700':
                    currentPage !== 'products',
                }"
                class="px-3 py-2 text-lg font-bold transition-colors cursor-pointer"
                >Sản Phẩm</a
              >
              <a
                href="https://vuagaominhhong-app.vercel.app/"
                data-readdy="true"
                target="_blank"
                :class="{
                  'text-green-700 font-semibold': currentPage === 'rice-log',
                  'text-gray-900 hover:text-green-700':
                    currentPage !== 'rice-log',
                }"
                class="px-3 py-2 text-lg font-bold transition-colors cursor-pointer"
                >Nhật Ký Gạo</a
              >
              <a
                href="#charity"
                @click="currentPage = 'charity'"
                :class="{
                  'text-green-700 font-semibold': currentPage === 'charity',
                  'text-gray-900 hover:text-green-700':
                    currentPage !== 'charity',
                }"
                class="px-3 py-2 text-lg font-bold transition-colors cursor-pointer"
                >Gạo Sỉ-Từ Thiện</a
              >
              <a
                href="#contact"
                @click="currentPage = 'contact'"
                :class="{
                  'text-green-700 font-semibold': currentPage === 'contact',
                  'text-gray-900 hover:text-green-700':
                    currentPage !== 'contact',
                }"
                class="px-3 py-2 text-lg font-bold transition-colors cursor-pointer"
                >Liên Hệ</a
              >
            </div>
          </div>
          <div class="md:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-900 hover:text-green-700 cursor-pointer"
            >
              <i class="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#home"
            @click="
              currentPage = 'home';
              mobileMenuOpen = false;
            "
            :class="{
              'bg-green-50 text-green-700': currentPage === 'home',
              'text-gray-900 hover:bg-gray-50': currentPage !== 'home',
            }"
            class="block px-3 py-2 text-base font-medium cursor-pointer"
            >Trang Chủ</a
          >
          <a
            href="#about"
            @click="
              currentPage = 'about';
              mobileMenuOpen = false;
            "
            :class="{
              'bg-green-50 text-green-700': currentPage === 'about',
              'text-gray-900 hover:bg-gray-50': currentPage !== 'about',
            }"
            class="block px-3 py-2 text-base font-medium cursor-pointer"
            >Giới Thiệu</a
          >
          <a
            href="#products"
            @click="
              currentPage = 'products';
              mobileMenuOpen = false;
            "
            :class="{
              'bg-green-50 text-green-700': currentPage === 'products',
              'text-gray-900 hover:bg-gray-50': currentPage !== 'products',
            }"
            class="block px-3 py-2 text-base font-medium cursor-pointer"
            >Sản Phẩm</a
          >
          <a
            href="https://readdy.link/preview/d5f152a5-3cf8-4d95-b4a1-4ba54051f845/1136950"
            data-readdy="true"
            target="_blank"
            :class="{
              'bg-green-50 text-green-700': currentPage === 'rice-log',
              'text-gray-900 hover:bg-gray-50': currentPage !== 'rice-log',
            }"
            class="block px-3 py-2 text-base font-medium cursor-pointer"
            >Số Gạo</a
          >
          <a
            href="#charity"
            @click="
              currentPage = 'charity';
              mobileMenuOpen = false;
            "
            :class="{
              'bg-green-50 text-green-700': currentPage === 'charity',
              'text-gray-900 hover:bg-gray-50': currentPage !== 'charity',
            }"
            class="block px-3 py-2 text-base font-medium cursor-pointer"
            >Gạo Từ Thiện</a
          >
          <a
            href="#contact"
            @click="
              currentPage = 'contact';
              mobileMenuOpen = false;
            "
            :class="{
              'bg-green-50 text-green-700': currentPage === 'contact',
              'text-gray-900 hover:bg-gray-50': currentPage !== 'contact',
            }"
            class="block px-3 py-2 text-base font-medium cursor-pointer"
            >Liên Hệ</a
          >
        </div>
      </div>
    </nav>
    <!-- Main Content -->
    <div class="pt-16">
      <!-- Home Page -->
      <div v-if="currentPage === 'home'">
        <!-- Hero Banner Slider -->
        <div class="relative h-96 md:h-[500px] overflow-hidden">
          <swiper
            :modules="swiperModules"
            :slides-per-view="1"
            :autoplay="{ delay: 5000 }"
            :pagination="{ clickable: true }"
            class="h-full"
          >
            <swiper-slide v-for="(slide, index) in heroSlides" :key="index">
              <div class="relative h-full">
                <img
                  :src="slide.image"
                  :alt="slide.title"
                  class="w-full h-full object-cover object-center"
                />
                <div
                  class="absolute inset-0 bg-black bg-opacity-40 flex items-center"
                >
                  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div class="max-w-2xl text-white">
                      <h1 class="text-4xl md:text-6xl font-bold mb-4">
                        {{ slide.title }}
                      </h1>
                      <p class="text-xl md:text-2xl mb-8">
                        {{ slide.subtitle }}
                      </p>
                      <button
                        class="!rounded-button whitespace-nowrap bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg font-semibold transition-colors cursor-pointer"
                      >
                        Tìm Hiểu Thêm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- Service Features Bar -->
        <div class="bg-green-800 py-4">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div class="flex items-center justify-center text-center">
                <i class="fas fa-clock text-yellow-400 text-2xl mr-3"></i>
                <div class="text-white w-3/4 lg:w-auto">
                  <span class="font-semibold">GIAO HÀNG TRONG NGÀY</span>
                  <p class="text-sm opacity-80">Cho khoảng cách dưới 5km</p>
                </div>
                <span class="hidden md:block text-white opacity-50 ml-4"
                  >|</span
                >
              </div>
              <div class="flex items-center justify-center text-center">
                <i class="fas fa-truck text-yellow-400 text-2xl mr-3"></i>
                <div class="text-white w-3/4 lg:w-auto">
                  <span class="font-semibold">GIAO HÀNG MIỄN PHÍ</span>
                  <p class="text-sm opacity-80">Trong nội thành</p>
                </div>
                <span class="hidden md:block text-white opacity-50 ml-4"
                  >|</span
                >
              </div>
              <div class="flex items-center justify-center text-center">
                <i class="fas fa-shield-alt text-yellow-400 text-2xl mr-3"></i>
                <div class="text-white w-3/4 lg:w-auto">
                  <span class="font-semibold">TIN CẬY - ĐÚNG HẸN</span>
                  <p class="text-sm opacity-80">Cam kết chất lượng</p>
                </div>
                <span class="hidden md:block text-white opacity-50 ml-4"
                  >|</span
                >
              </div>
              <div class="flex items-center justify-center text-center">
                <i class="fas fa-users text-yellow-400 text-2xl mr-3"></i>
                <div class="text-white w-3/4 lg:w-auto">
                  <span class="font-semibold">ĐỘI NGŨ CHUYÊN NGHIỆP</span>
                  <p class="text-sm opacity-80">Tận tâm và chu đáo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Featured Products -->
        <section class="py-16 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sản Phẩm Nổi Bật
              </h2>
              <p class="text-xl text-gray-600">
                Khám phá các loại gạo cao cấp của chúng tôi
              </p>
            </div>
            <swiper
              :modules="[Navigation, Pagination]"
              :slides-per-view="1"
              :space-between="20"
              :navigation="true"
              :pagination="{ clickable: true }"
              :breakpoints="{
                '320': {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                '768': {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                '1024': {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }"
              class="product-swiper"
            >
              <swiper-slide
                v-for="product in featuredProducts"
                :key="product.id"
              >
                <div
                  :id="
                    'product-' + product.name.toLowerCase().replace(/\s+/g, '-')
                  "
                  class="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="w-full h-48 object-cover object-top"
                  />
                  <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      {{ product.name }}
                    </h3>
                    <p class="text-gray-500 mb-3">{{ product.description }}</p>
                    <div class="flex items-center mb-4">
                      <span class="text-2xl font-bold text-green-700">{{
                        product.price
                      }}</span>
                    </div>
                    <button
                      @click="handleOrderClick(product)"
                      class="!rounded-button whitespace-nowrap w-full bg-green-700 hover:bg-green-800 text-white px-6 py-2 font-semibold transition-colors cursor-pointer"
                    >
                      Đặt Hàng
                    </button>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </section>
        <!-- Order Form Modal -->
        <a-modal
          v-model:open="showOrderForm"
          :title="`Đặt Hàng: ${selectedProduct?.name || 'Gạo'}`"
          @ok="handleOrderSubmit"
          :footer="null"
          width="500px"
        >
          <form
            id="order-form"
            @submit.prevent="handleOrderSubmit"
            class="space-y-4"
          >
            <div>
              <label
                for="customer-name"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Họ và tên:</label
              >
              <input
                type="text"
                id="customer-name"
                name="Họ và tên"
                v-model="orderFormData.customerName"
                required
                minlength="2"
                maxlength="50"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            <div>
              <label
                for="customer-phone"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Số điện thoại:</label
              >
              <input
                type="tel"
                id="customer-phone"
                name="Số điện thoại"
                v-model="orderFormData.customerPhone"
                required
                pattern="^[0-9]{10}$"
                maxlength="10"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Nhập số điện thoại 10 số"
              />
            </div>
            <div>
              <label
                for="delivery-address"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Địa chỉ giao hàng:</label
              >
              <textarea
                id="delivery-address"
                name="Địa chỉ"
                v-model="orderFormData.address"
                placeholder="VD: 123 Nguyễn Văn Cừ, Q.5, TP.HCM"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            <div>
              <label
                for="quantity"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Số lượng (kg):</label
              >
              <input
                type="number"
                id="quantity"
                name="Số lượng (kg)"
                min="0"
                max="100"
                required
                step="1"
                v-model="orderFormData.quantity"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Nhập số lượng từ 0-100kg"
                @input="validateQuantity"
                @change="validateQuantity"
                @focus="$event.target.select()"
              />
            </div>
            <div>
              <label
                for="rice-type"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Loại gạo:</label
              >
              <input
                type="text"
                id="rice-type"
                name="Loại gạo"
                :value="selectedProduct?.name"
                readonly
                required
                class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="notes"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Ghi chú thêm (tuỳ chọn):</label
              >
              <textarea
                id="notes"
                v-model="orderFormData.notes"
                name="Ghi chú"
                placeholder="VD: giao sáng, không gọi cửa..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://yourdomain.com/cam-on"
            />
            <div class="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                @click="showOrderForm = false"
                class="!rounded-button whitespace-nowrap px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                <i class="fas fa-times mr-2"></i>Đóng
              </button>
              <button
                type="submit"
                class="!rounded-button whitespace-nowrap px-6 py-2 bg-green-700 text-white hover:bg-green-800 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center"
              >
                <i class="fas fa-paper-plane mr-2"></i>Gửi đơn hàng
              </button>
            </div>
          </form>
        </a-modal>
        <!-- Company Introduction -->
        <section class="py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Price Table -->
            <div class="mb-16">
              <h2 class="text-3xl font-bold text-green-800 text-center mb-4">
                BẢNG GIÁ GẠO MỚI NHẤT HÔM NAY
              </h2>
              <p class="text-lg text-green-600 text-center uppercase mb-8">
                Cập nhật ngày 29/07/2025
              </p>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                  <thead>
                    <tr class="bg-green-50">
                      <th
                        class="border-2 border-green-600 px-4 py-3 text-green-800"
                      >
                        TÊN GẠO
                      </th>
                      <th
                        class="border-2 border-green-600 px-4 py-3 text-green-800"
                      >
                        ĐẶC TÍNH SẢN PHẨM
                      </th>
                      <th
                        class="border-2 border-green-600 px-4 py-3 text-green-800"
                      >
                        GIÁ (Đ/KG)
                      </th>
                      <th
                        class="border-2 border-green-600 px-4 py-3 text-green-800"
                      >
                        THAO TÁC
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(product, index) in allProducts"
                      :key="product.id"
                      class="hover:bg-green-50"
                    >
                      <td class="border border-green-200 px-4 py-3">
                        <span class="font-bold text-green-700">{{
                          product.name
                        }}</span>
                      </td>
                      <td class="border border-green-200 px-4 py-3">
                        {{ product.description }}
                      </td>
                      <td
                        class="border border-green-200 px-4 py-3 text-red-600 font-semibold"
                      >
                        {{ product.price.replace("đ/kg", "") }}
                      </td>
                      <td class="border border-green-200 px-4 py-3">
                        <button
                          @click="handleOrderClick(product)"
                          class="!rounded-button whitespace-nowrap bg-green-700 hover:bg-green-800 text-white px-4 py-2 text-sm font-semibold transition-colors"
                        >
                          Đặt hàng
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2
                class="text-3xl text-left md:text-5xl font-bold text-gray-900 mb-6"
              >
                Sổ Gạo Định Kỳ
              </h2>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div class="bg-green-50 rounded-lg p-6 mb-6">
                    <h3 class="text-2xl font-bold text-green-700 mb-4">
                      🌟 Giải pháp tiết kiệm & tiện lợi cho mọi gia đình!
                    </h3>
                    <p class="text-lg text-gray-700 mb-4">
                      Bạn đã từng 😵 bối rối vì phải mua gạo nhiều lần trong
                      tháng?
                    </p>
                    <p class="text-lg text-gray-700 mb-4">
                      Bạn muốn 🍚 chăm lo bữa cơm mỗi ngày mà không lo giá cả ?
                    </p>
                    <p class="text-xl font-semibold text-green-800 mb-6">
                      📒 Sổ Gạo Tuần – Tháng chính là lựa chọn thông minh dành
                      cho bạn!
                    </p>
                  </div>
                  <div class="grid grid-cols-1 gap-8 mb-8">
                    <div
                      class="bg-white p-6 rounded-lg shadow-md border border-green-100"
                    >
                      <h4 class="text-xl font-semibold mb-4 text-green-700">
                        ✅ Lợi ích khi đăng ký:
                      </h4>
                      <ul class="space-y-3">
                        <li class="flex items-start">
                          <span
                            >🚚 Giao tận nơi định kỳ – 1 lần/tuần hoặc 1
                            lần/tháng theo nhu cầu.</span
                          >
                        </li>
                        <li class="flex items-start">
                          <span
                            >💰 Giá cố định – Không lo biến động thị
                            trường.</span
                          >
                        </li>
                        <li class="flex items-start">
                          <span
                            >🌾 Chọn gạo yêu thích – ST25, thơm lài, nàng hoa,
                            tài nguyên…</span
                          >
                        </li>
                        <li class="flex items-start">
                          <span>📝 Miễn phí giao hàng trong nội thành.</span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="bg-white p-6 rounded-lg shadow-md border border-green-100"
                    >
                      <h4 class="text-xl font-semibold mb-4 text-green-700">
                        👨‍👩‍👧‍👦 Phù hợp cho:
                      </h4>
                      <ul class="space-y-3">
                        <li class="flex items-start">
                          <span>🏠 Hộ gia đình & người bận rộn.</span>
                        </li>
                        <li class="flex items-start">
                          <span>🍴 Quán ăn, tiệm cơm văn phòng.</span>
                        </li>
                        <li class="flex items-start">
                          <span>❤️ Người thân mua cho cha mẹ ở quê.</span>
                        </li>
                        <li class="flex items-start">
                          <span
                            >📞 Đặt hàng ngay để đảm bảo bữa cơm ngon – đủ – đều
                            mỗi ngày!</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    @click="currentPage = 'contact'"
                    class="!rounded-button whitespace-nowrap bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg font-semibold transition-colors cursor-pointer"
                  >
                    <i class="fas fa-book-open mr-2"></i>
                    Đăng Ký Ngay
                  </button>
                </div>
                <div class="lg:order-1 order-[-1]">
                  <img
                    class="lg:w-[70%] w-[80%] mx-auto"
                    src="/public/image3.png"
                    alt=""
                  />
                  <!-- <img
                    src="https://readdy.ai/api/search-image?query=traditional%20vietnamese%20rice%20farming%20with%20farmers%20working%20in%20green%20rice%20fields%20under%20blue%20sky%20peaceful%20rural%20landscape%20clean%20and%20natural%20environment&width=600&height=400&seq=intro001&orientation=landscape"
                    alt="Rice farming"
                    class="w-full h-auto rounded-lg shadow-lg"
                  /> -->
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Why Choose Us -->
        <section class="py-16 bg-green-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dịch Vụ Của Chúng Tôi – Gạo Minh Hồng
              </h2>
              <p class="text-xl text-gray-600">
                Cùng nhau phát triển – Xây dựng quan hệ đối tác bền vững
              </p>
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#f5fdf7] rounded-xl p-8"
            >
              <div
                class="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  class="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <i class="fas fa-store text-white text-3xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-4">
                  Tư Vấn Mở Đại Lý
                </h3>
                <p class="text-gray-600">
                  Khởi nghiệp kinh doanh gạo với vốn từ 30-100 triệu đồng. Hỗ
                  trợ toàn diện về nguồn hàng và vận hành.
                </p>
              </div>
              <div
                class="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  class="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <i class="fas fa-building text-white text-3xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-4">
                  Gạo Sỉ-Từ Thiện-Quán Cơm
                </h3>
                <p class="text-gray-600">
                  Cung cấp gạo số lượng lớn cho bệnh viện, trường học và các tổ
                  chức từ thiện với giá ưu đãi.
                </p>
              </div>
              <div
                class="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  class="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <i class="fas fa-handshake text-white text-3xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-4">
                  Sổ Gạo Định Kỳ
                </h3>
                <p class="text-gray-600">
                  Giải pháp tiết kiệm và tiện lợi cho mọi gia đình! Giao tận nơi
                  định kỳ: 1 lần/tuần hoặc 1 lần/tháng theo nhu cầu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- About Page -->
      <div v-if="currentPage === 'about'">
        <!-- Hero Section -->
        <section
          class="relative h-64 md:h-80 bg-cover bg-center"
          style="
            background-image: url('https://readdy.ai/api/search-image?query=vietnamese%20rice%20fields%20at%20sunset%20with%20golden%20light%20reflecting%20on%20water%20traditional%20farming%20landscape%20peaceful%20and%20serene%20atmosphere&width=1440&height=320&seq=about001&orientation=landscape');
          "
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center"
          >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 class="text-4xl md:text-6xl font-bold text-white">
                Về Chúng Tôi
              </h1>
            </div>
          </div>
        </section>
        <!-- History Section -->
        <section class="py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-6">
                  Vựa Gạo Minh Hồng – Hơn 30 Năm Cung Cấp Gạo Ngon Tại TP.HCM
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                  Vựa Gạo Minh Hồng là địa chỉ uy tín chuyên cung cấp gạo sỉ và
                  lẻ tại TP.HCM với hơn 30 năm kinh nghiệm trong ngành lương
                  thực. Khởi đầu từ một cửa hàng nhỏ, Minh Hồng từng bước khẳng
                  định vị thế bằng chất lượng gạo thơm ngon, dẻo mềm, phù hợp
                  cho mọi nhu cầu từ hộ gia đình đến quán ăn, nhà hàng.
                </p>
                <p class="text-lg text-gray-600 mb-6">
                  Chúng tôi tự hào lựa chọn và phân phối các loại gạo ngon, gạo
                  đặc sản, gạo dẻo thơm, gạo nở xốp từ những vùng lúa nổi tiếng
                  của Việt Nam.
                </p>
                <p class="text-lg text-gray-600 mb-6">
                  Với phương châm "Uy tín làm nên thương hiệu", Minh Hồng luôn
                  đặt lợi ích và sự hài lòng của khách hàng lên hàng đầu.
                </p>
                <p class="text-lg text-gray-600">
                  Nếu bạn đang tìm vựa gạo giá tốt, gạo chất lượng cao tại
                  TP.HCM, hãy liên hệ với Vựa Gạo Minh Hồng – người bạn đồng
                  hành tin cậy trong từng bữa cơm Việt.
                </p>
              </div>
              <div>
                <img
                  src="https://static.readdy.ai/image/bd761bcaa8d3bed71136525661ab40e4/74c316eb914eca6d59e4b7fb762c5df8.png"
                  alt="Company history"
                  class="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Products Page -->
      <div v-if="currentPage === 'products'">
        <!-- Category Filters -->
        <section
          class="relative h-64 md:h-80 bg-cover bg-center"
          style="
            background-image: url('https://readdy.ai/api/search-image?query=vietnamese%20rice%20fields%20at%20sunset%20with%20golden%20light%20reflecting%20on%20water%20traditional%20farming%20landscape%20peaceful%20and%20serene%20atmosphere&width=1440&height=320&seq=about001&orientation=landscape');
          "
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center"
          >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 class="text-4xl md:text-6xl font-bold text-white">
                Sản Phẩm
              </h1>
            </div>
          </div>
        </section>
        <section class="py-8 bg-white border-b">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap justify-center gap-4">
              <button
                v-for="category in productCategories"
                :key="category"
                @click="selectedCategory = category"
                :class="{
                  'bg-green-700 text-white': selectedCategory === category,
                  'bg-gray-100 text-gray-700 hover:bg-gray-200':
                    selectedCategory !== category,
                }"
                class="!rounded-button whitespace-nowrap px-6 py-2 font-medium transition-colors cursor-pointer"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </section>
        <!-- Order Form Modal -->
        <a-modal
          v-model:open="showOrderForm"
          :title="`Đặt Hàng: ${selectedProduct?.name || 'Gạo'}`"
          @ok="handleOrderSubmit"
          :footer="null"
          width="500px"
        >
          <form
            id="order-form"
            @submit.prevent="handleOrderSubmit"
            class="space-y-4"
          >
            <div>
              <label
                for="customer-name"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Họ và tên:</label
              >
              <input
                type="text"
                id="customer-name"
                name="Họ và tên"
                v-model="orderFormData.customerName"
                required
                minlength="2"
                maxlength="50"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            <div>
              <label
                for="customer-phone"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Số điện thoại:</label
              >
              <input
                type="tel"
                id="customer-phone"
                name="Số điện thoại"
                v-model="orderFormData.customerPhone"
                required
                pattern="^[0-9]{10}$"
                maxlength="10"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Nhập số điện thoại 10 số"
              />
            </div>
            <div>
              <label
                for="delivery-address"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Địa chỉ giao hàng:</label
              >
              <textarea
                id="delivery-address"
                name="Địa chỉ"
                v-model="orderFormData.adress"
                placeholder="VD: 123 Nguyễn Văn Cừ, Q.5, TP.HCM"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            <div>
              <label
                for="quantity"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Số lượng (kg):</label
              >
              <input
                type="number"
                id="quantity"
                name="Số lượng (kg)"
                min="0"
                max="100"
                required
                step="1"
                v-model="orderFormData.quantity"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Nhập số lượng từ 0-100kg"
                @input="validateQuantity"
                @change="validateQuantity"
                @focus="$event.target.select()"
              />
            </div>
            <div>
              <label
                for="rice-type"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Loại gạo:</label
              >
              <input
                type="text"
                id="rice-type"
                name="Loại gạo"
                :value="selectedProduct?.name"
                readonly
                required
                class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="notes"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Ghi chú thêm (tuỳ chọn):</label
              >
              <textarea
                id="notes"
                v-model="orderFormData.notes"
                name="Ghi chú"
                placeholder="VD: giao sáng, không gọi cửa..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://yourdomain.com/cam-on"
            />
            <div class="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                @click="showOrderForm = false"
                class="!rounded-button whitespace-nowrap px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                <i class="fas fa-times mr-2"></i>Đóng
              </button>
              <button
                type="submit"
                class="!rounded-button whitespace-nowrap px-6 py-2 bg-green-700 text-white hover:bg-green-800 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center"
              >
                <i class="fas fa-paper-plane mr-2"></i>Gửi đơn hàng
              </button>
            </div>
          </form>
        </a-modal>
        <!-- Products Grid -->
        <section class="py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="product in filteredProducts"
                :key="product.id"
                class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-64 object-contain object-center"
                />
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">
                    {{ product.name }}
                  </h3>
                  <p class="text-gray-600 mb-4">{{ product.description }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-green-700">{{
                      product.price
                    }}</span>
                    <button
                      @click="handleOrderClick(product)"
                      id="order-button"
                      class="!rounded-button whitespace-nowrap bg-green-700 hover:bg-green-800 text-white px-6 py-2 font-semibold transition-colors cursor-pointer hover:scale-105 active:scale-95 transform duration-200"
                    >
                      <i class="fas fa-shopping-cart mr-2"></i>
                      Đặt Hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Rice Log Page -->
      <div v-if="currentPage === 'rice-log'">
        <!-- Hero Section -->
        <section class="py-16 bg-green-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rice Log
            </h1>
            <p class="text-xl text-gray-600">
              Cooking tips, storage advice, and rice knowledge
            </p>
          </div>
        </section>
        <!-- Featured Post -->
        <section class="py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <img
                src="https://readdy.ai/api/search-image?query=perfect%20cooked%20white%20rice%20in%20wooden%20bowl%20with%20steam%20rising%20traditional%20asian%20kitchen%20setting%20warm%20lighting%20food%20photography&width=800&height=400&seq=blog001&orientation=landscape"
                alt="Featured post"
                class="w-full h-64 md:h-80 object-cover object-top"
              />
              <div class="p-8">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">
                  The Perfect Rice: A Complete Cooking Guide
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                  Master the art of cooking perfect rice every time with our
                  comprehensive guide. From selecting the right variety to
                  achieving the ideal texture, discover the secrets that
                  professional chefs use.
                </p>
                <button
                  class="!rounded-button whitespace-nowrap bg-green-700 hover:bg-green-800 text-white px-6 py-3 font-semibold transition-colors cursor-pointer"
                >
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </section>
        <!-- Blog Posts Grid -->
        <section class="py-16 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="post in blogPosts"
                :key="post.id"
                class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-48 object-cover object-top"
                />
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">
                    {{ post.title }}
                  </h3>
                  <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500">{{ post.date }}</span>
                    <button
                      class="!rounded-button whitespace-nowrap text-green-700 hover:text-green-800 font-medium cursor-pointer"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Charity Rice Page -->
      <div v-if="currentPage === 'charity'">
        <!-- Photo Gallery -->
        <section
          class="relative h-64 md:h-80 bg-cover bg-center"
          style="
            background-image: url('https://readdy.ai/api/search-image?query=vietnamese%20rice%20fields%20at%20sunset%20with%20golden%20light%20reflecting%20on%20water%20traditional%20farming%20landscape%20peaceful%20and%20serene%20atmosphere&width=1440&height=320&seq=about001&orientation=landscape');
          "
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center"
          >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 class="text-4xl md:text-6xl font-bold text-white">
                Gạo Sỉ-Từ Thiện
              </h1>
            </div>
          </div>
        </section>
        <section class="py-16 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Our Charity Activities
              </h2>
              <p class="text-xl text-gray-600">
                Moments of giving back to the community
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="activity in charityActivities"
                :key="activity.id"
                class="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  :src="activity.image"
                  :alt="activity.title"
                  class="w-full h-48 object-cover object-top"
                />
                <div class="p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    {{ activity.title }}
                  </h3>
                  <p class="text-gray-600 text-sm">
                    {{ activity.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Call to Action -->
        <section class="py-16 bg-green-700">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
            <p class="text-xl text-green-100 mb-8">
              Help us reach more families in need
            </p>
            <button
              @click="currentPage = 'contact'"
              class="!rounded-button whitespace-nowrap bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-colors cursor-pointer"
            >
              Get Involved
            </button>
          </div>
        </section>
      </div>
      <!-- Contact Page -->
      <div v-if="currentPage === 'contact'">
        <!-- Hero Section -->
        <section
          class="relative h-64 md:h-80 bg-cover bg-center"
          style="
            background-image: url('https://readdy.ai/api/search-image?query=vietnamese%20rice%20fields%20at%20sunset%20with%20golden%20light%20reflecting%20on%20water%20traditional%20farming%20landscape%20peaceful%20and%20serene%20atmosphere&width=1440&height=320&seq=about001&orientation=landscape');
          "
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center"
          >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
                Liên hệ
              </h1>
              <p class="text-xl md:text-2xl mb-8 text-white">
                Get in touch with our team
              </p>
            </div>
          </div>
        </section>
        <!-- <section class="py-16 bg-green-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p class="text-xl text-gray-600">Get in touch with our team</p>
          </div>
        </section> -->
        <!-- Contact Content -->
        <section class="py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <!-- Contact Form -->
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                  Find Us on Map
                </h2>
                <div class="w-full h-[450px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6223871248612!2d106.56412357586873!3d10.763557859429328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ce5867aff81%3A0x7c0bfcd2ab3b4486!2zVuG7sWEgR-G6oW8gTWluaCBI4buTbmc!5e0!3m2!1svi!2s!4v1753806062349!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
              <!-- Contact Information -->
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <i class="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">Địa chỉ</h3>
                      <p class="text-gray-600">
                        1546 ấp 63 xã Tân Vĩnh Lộc, Huyện Bình Chánh, TPHCM
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <i class="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">
                        Điện thoại
                      </h3>
                      <div class="flex items-center gap-1">
                        <a :href="`tel:0937744266`">
                          <p class="text-gray-600">0937744266</p>
                        </a>
                        <p>-</p>
                        <a :href="`tel:0768022318`">
                          <p class="text-gray-600">0768022318</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <i class="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                      <a :href="`mailto:arantran201299@gmail.com`">
                        <p class="text-gray-600">arantran201299@gmail.com</p>
                      </a>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <i class="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">
                        Giờ làm việc
                      </h3>
                      <p class="text-gray-600">
                        Tất cả các ngày: 6:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <!-- Google Map -->
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <a
      :href="`tel:0937744266`"
      :style="{ backgroundColor: '#9E1616' }"
      class="lg:w-[45px] w-[37px] custom_button_call bottom-[calc(110px+65px+20px)] devvn_animation_zoom"
    >
      <div
        class="overflow-hidden absolute -bottom-2.5 -left-2.5 opacity-70 rounded-full w-[calc(100%+20px)] h-[calc(100%+20px)] bg-[#9E1616] z-[-1]"
      ></div>
      <p class="!text-white lg:!leading-[45px] leading-[37px]">0937744266</p>
      <img
        src="/public/icon-phone.png"
        class="lg:w-[45px] w-[37px] h-[37px] lg:h-[45px] p-2 object-cover"
      />
    </a>
    <a
      :href="'https://zalo.me/0937744266'"
      :style="{ backgroundColor: '#0068ff' }"
      class="lg:w-[45px] w-[40px] custom_button_zalo bottom-[110px] devvn_animation_zoom"
      :target="'_blank'"
    >
      <div
        class="overflow-hidden absolute -bottom-2.5 -left-2.5 opacity-70 rounded-full w-[calc(100%+20px)] h-[calc(100%+20px)] bg-[#0068ff] z-[-1]"
      ></div>
      <p class="!text-white lg:!leading-[45px] leading-[37px]">0937744266</p>
      <img
        src="/public/icon_zalo.webp"
        class="lg:w-[45px] w-[37px] h-[37px] lg:h-[45px] p-2 object-cover"
      />
    </a>
    <a
      :href="'https://www.facebook.com/messages/t/758555593996701'"
      :style="{ backgroundColor: '#9E1616' }"
      class="lg:w-[45px] w-[37px] custom_button_mess bottom-[285px] devvn_animation_zoom"
      :target="'_blank'"
    >
      <div
        class="overflow-hidden absolute -bottom-2.5 -left-2.5 opacity-70 rounded-full w-[calc(100%+20px)] h-[calc(100%+20px)] bg-[#fd00db36] z-[-1]"
      ></div>
      <img
        src="/public/icon-fb.png"
        class="lg:w-[45px] w-[37px] h-[37px] lg:h-[45px] p-2 object-cover"
      />
    </a>
    <div
      :class="isShowButtonToTop ? 'visible opacity-100' : 'invisible opacity-0'"
      :style="{ backgroundColor: '#FFC8C8E3' }"
      class="custom_button_to_top md:bottom-[30px] bottom-[30px] transition-all duration-300 ease-out"
      @click="scrollToTop()"
    >
      <div
        class="absolute -bottom-2.5 -left-2.5 opacity-50 rounded-full w-[calc(100%+20px)] h-[calc(100%+20px)] bg-[#FFE1E1] z-[-1]"
      />
      <img
        src="/public/icon-to-top.png"
        class="w-[40px] h-[40px] object-cover"
      />
    </div>
    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://static.readdy.ai/image/bd761bcaa8d3bed71136525661ab40e4/90da2c829f05fc7f6e5c6fe89f562254.png"
              alt="Gạo Sạch Minh Hồng"
              class="h-[90px] w-[90px] object-contain mb-4"
            />
            <p class="text-gray-400">
              Gạo sạch chất lượng cao từ đồng bằng sông Cửu Long
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#home"
                  @click="currentPage = 'home'"
                  class="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >Trang Chủ</a
                >
              </li>
              <li>
                <a
                  href="#about"
                  @click="currentPage = 'about'"
                  class="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >Giới Thiệu</a
                >
              </li>
              <li>
                <a
                  href="#products"
                  @click="currentPage = 'products'"
                  class="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >Sản Phẩm</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  @click="currentPage = 'contact'"
                  class="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >Liên Hệ</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Thông Tin Liên Hệ</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center space-x-2">
                <i class="fas fa-phone"></i>
                <div class="flex items-center gap-1">
                  <a :href="`tel:0937744266`">
                    <p class="">0937744266</p>
                  </a>
                  <p>-</p>
                  <a :href="`tel:0768022318`">
                    <p class="">0768022318</p>
                  </a>
                </div>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-envelope"></i>
                 <a :href="`mailto:arantran201299@gmail.com`">
                    <span>arantran201299@gmail.com</span>
                  </a>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-map-marker-alt"></i>
                <span>1546 ấp 63 xã Tân Vĩnh Lộc Huyện Bình Chánh, TPHCM</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Theo Dõi Chúng Tôi</h3>
            <div class="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578023500415"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i class="fab fa-facebook text-4xl"></i>
              </a>
            </div>
            <div class="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6223871248612!2d106.56412357586873!3d10.763557859429328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ce5867aff81%3A0x7c0bfcd2ab3b4486!2zVuG7sWEgR-G6oW8gTWluaCBI4buTbmc!5e0!3m2!1svi!2s!4v1753806062349!5m2!1svi!2s"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>
        <div
          class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Gạo Sạch Minh Hồng. Đã đăng ký bản quyền.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, h, nextTick } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Modal as AModal, message } from "ant-design-vue";
import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons-vue";

const swiperModules = [Pagination, Autoplay, Navigation];
const currentPage = ref("home");
const mobileMenuOpen = ref(false);
const selectedCategory = ref("Tất cả sản phẩm");
const isShowButtonToTop = ref(false);
const contactForm = ref({
  name: "",
  phone: "",
  message: "",
  productInfo: "",
});
const showOrderForm = ref(false);
const selectedRiceType = ref("ST25");
const selectedProduct = ref<any>(null);
const validateQuantity = (event: Event) => {
  const target = event.target as HTMLInputElement;
  let value = parseInt(target.value);
  if (isNaN(value) || value < 0) {
    orderFormData.value.quantity = 0;
    message.warning("Số lượng tối thiểu là 0kg");
  } else if (value > 100) {
    orderFormData.value.quantity = 100;
    message.warning("Số lượng tối đa 100kg");
  } else {
    orderFormData.value.quantity = value;
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const handleProductOrder = (product: any) => {
  currentPage.value = "home";
  nextTick(() => {
    const priceTable = document.querySelector(".mb-16");
    if (priceTable) {
      priceTable.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        handleOrderClick(product);
      }, 1000);
    }
  });
};
const handleOrderClick = (product: any) => {
  selectedProduct.value = product;
  selectedRiceType.value = product.name;
  showOrderForm.value = true;
  // Reset form data with default values
  orderFormData.value = {
    customerName: "",
    phone: "",
    address: "",
    quantity: 1,
    notes: "",
  };
  // Focus on first input after modal opens
  nextTick(() => {
    const nameInput = document.getElementById("customer-name");
    if (nameInput) {
      (nameInput as HTMLInputElement).focus();
    }
    // Prevent background scrolling when modal is open
    // document.body.style.overflow = "hidden";
    // Add event listener for order button
    const orderButton = document.getElementById("order-button");
    if (orderButton) {
      orderButton.removeEventListener("click", handleOrderButtonClick);
      orderButton.addEventListener("click", handleOrderButtonClick);
    }
  });
};
const handleOrderButtonClick = () => {
  const form = document.getElementById("order-form");
  if (!form) return;
  // Check if form is already filled
  const nameInput = document.getElementById(
    "customer-name"
  ) as HTMLInputElement;
  const phoneInput = document.getElementById(
    "customer-phone"
  ) as HTMLInputElement;
  const addressInput = document.getElementById(
    "delivery-address"
  ) as HTMLTextAreaElement;
  if (nameInput?.value && phoneInput?.value && addressInput?.value) {
    message.success(
      "Thông tin đã được điền. Vui lòng kiểm tra và gửi đơn hàng!"
    );
  } else {
    message.info("Vui lòng điền đầy đủ thông tin đặt hàng");
  }
};
const orderFormData = ref({
  customerName: "",
  customerPhone: "",
  address: "",
  quantity: "",
  notes: "",
});

function parseVND(str) {
  // Bỏ mọi ký tự không phải số
  const onlyDigits = str.replace(/[^\d]/g, "");
  return onlyDigits ? Number(onlyDigits) : 0;
}

const handleTotalPrice = (price, quantity) => {
  const total = parseVND(price) * quantity;

  return (
    new Intl.NumberFormat("vi-VN", {
      maximumFractionDigits: 0, // không có phần thập phân
    }).format(total) + "đ"
  );
};

const handleOrderSubmit = async () => {
  const form = document.getElementById("order-form");
  if (!form) return;
  // Enhanced validation with more detailed feedback
  const nameInput = document.getElementById(
    "customer-name"
  ) as HTMLInputElement;
  const phoneInput = document.getElementById(
    "customer-phone"
  ) as HTMLInputElement;
  const addressInput = document.getElementById(
    "delivery-address"
  ) as HTMLTextAreaElement;
  const quantityInput = document.getElementById("quantity") as HTMLInputElement;
  // Name validation
  if (nameInput.value.trim().length < 2) {
    message.error("Họ tên phải có ít nhất 2 ký tự");
    nameInput.focus();
    return;
  }
  // Phone validation with improved pattern
  if (!phoneInput.value.match(/^(0[0-9]{9})$/)) {
    message.error(
      "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại bắt đầu bằng số 0 và có 10 chữ số."
    );
    phoneInput.focus();
    return;
  }
  // Address validation with minimum length
  if (addressInput.value.trim().length < 10) {
    message.error(
      "Vui lòng nhập địa chỉ chi tiết (tối thiểu 10 ký tự) để chúng tôi giao hàng chính xác."
    );
    addressInput.focus();
    return;
  }
  // Quantity validation with improved feedback
  const quantity = parseInt(quantityInput.value);
  if (isNaN(quantity)) {
    message.error("Vui lòng nhập số lượng hợp lệ.");
    quantityInput.focus();
    return;
  } else if (quantity < 1) {
    message.error("Số lượng tối thiểu là 1kg.");
    quantityInput.focus();
    return;
  } else if (quantity > 100) {
    message.error(
      "Số lượng tối đa là 100kg. Vui lòng liên hệ trực tiếp cho đơn hàng lớn hơn."
    );
    quantityInput.focus();
    return;
  }
  // Show loading state
  const submitBtn = form.querySelector(
    'button[type="submit"]'
  ) as HTMLButtonElement;
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin mr-2"></i>Đang gửi...';
  try {
    // Create form data
    const submitData = new FormData();
    submitData.append("_captcha", "false");
    submitData.append("_subject", "NEW RICE ORDER from customer!");
    submitData.append("Họ và tên", orderFormData.value.customerName);
    submitData.append("Số điện thoại", orderFormData.value.customerPhone);
    submitData.append("Địa chỉ", orderFormData.value.address);
    submitData.append(
      "Ghi chú",
      orderFormData.value.notes || "No additional notes"
    );
    submitData.append("Loại gạo", selectedProduct.value?.name || "");
    submitData.append("Số lượng", `${orderFormData.value.quantity}kg`);
    submitData.append("Giá", selectedProduct.value?.price || "");
    submitData.append("Ngày đặt hàng", new Date().toLocaleDateString("vi-VN"));
    // Send to FormSubmit
    // "https://formsubmit.co/herowhite666@gmail.com",
    console.log("selectedProduct : ", selectedProduct);

    const payload = {
      _captcha: false,
      _subject: `NEW RICE ORDER from customer ${orderFormData.value.customerName}!`,
      full_name: orderFormData.value.customerName,
      phone: orderFormData.value.customerPhone,
      address: orderFormData.value.address,
      rice_name: selectedProduct.value?.name || "",
      quantity: `${orderFormData.value.quantity}kg`,
      price: selectedProduct.value?.price,
      totalPrice: handleTotalPrice(
        selectedProduct.value?.price,
        orderFormData.value.quantity
      ),
      date: new Date().toLocaleDateString("vi-VN"),
    };
    // const response = await fetch(
    //   "https://formsubmit.co/yetiw26490@baxidy.com",
    //   {
    //     method: "POST",
    //     body: submitData,
    //   }
    // );
    const response = await fetch(
      "https://formsubmit.co/ajax/herowhite666@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...payload,
        }),
      }
    );
    if (response.ok) {
      showOrderForm.value = false;
      // Reset form

      // Show success notification
      // message.success("Đặt hàng thành công!");
      // Show success modal with more details
      AModal.success({
        title: "Đặt Hàng Thành Công!",
        content: h("div", {
          class: "text-left",
          innerHTML: `
<p class="text-lg mb-3">Cảm ơn bạn đã đặt hàng tại Gạo Sạch Minh Hồng!</p>
<div class="bg-gray-50 p-4 rounded-lg mb-4">
<h3 class="font-semibold mb-2">Chi tiết đơn hàng:</h3>
<div class="space-y-2">
<p><span class="font-medium">Sản phẩm:</span> ${selectedProduct.value?.name}</p>
<p><span class="font-medium">Số lượng:</span> ${
            orderFormData.value.quantity
          }kg</p>
<p><span class="font-medium">Đơn giá:</span> ${selectedProduct.value?.price}</p>
<p><span class="font-medium">Tổng tiền:</span> ${
            handleTotalPrice(
              selectedProduct.value?.price,
              orderFormData.value.quantity
            )
            // parseInt(selectedProduct.value?.price.replace(/\D/g, "")) *
            // parseInt(orderFormData.value.quantity)
          }</p>
<p><span class="font-medium">Thời gian đặt:</span> ${new Date().toLocaleString(
            "vi-VN"
          )}</p>
</div>
</div>
<div class="bg-gray-50 p-4 rounded-lg mb-4">
<h3 class="font-semibold mb-2">Thông tin giao hàng:</h3>
<div class="space-y-2">
<p><span class="font-medium">Họ tên:</span> ${
            orderFormData.value.customerName
          }</p>
<p><span class="font-medium">Số điện thoại:</span> ${
            orderFormData.value.customerPhone
          }</p>
<p><span class="font-medium">Địa chỉ:</span> ${orderFormData.value.address}</p>
<p><span class="font-medium">Ghi chú:</span> ${
            orderFormData.value.notes || "Không có"
          }</p>
</div>
</div>
<p class="mb-2">Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn hàng.</p>
<p class="text-sm text-gray-500">Vui lòng kiểm tra email (kể cả mục Spam) để xem chi tiết đơn hàng.</p>
`,
        }),

        okText: "Xác nhận",
        centered: true,
        onOk: () => {
          // Tự động đóng modal (hành vi mặc định của Modal.success)
          // nhưng bạn có thể thêm logic khác ở đây
          // ví dụ: reset form
          orderFormData.value = {
            customerName: "",
            customerPhone: "",
            address: "",
            notes: "",
            quantity: 1,
          };
          // form.reset();
        },
      });
    } else {
      const errorText = await response.text();
      console.error("FormSubmit error:", errorText);
      message.error("Gửi đơn hàng thất bại, vui lòng thử lại.");
    }
  } catch (error) {
    console.error("Error submitting order:", error);
    message.error("Có lỗi xảy ra khi gửi đơn hàng. Vui lòng thử lại sau!");
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
};
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const gaoParam = urlParams.get("gao");
  if (gaoParam) {
    selectedRiceType.value = gaoParam.toUpperCase();
  }
});
const handleContactClick = (product: any) => {
  currentPage.value = "contact";
  contactForm.value.message = `I am interested in: ${product.name}\nPrice: ${product.price}\n\nPlease provide more information about this product.`;
  // Scroll to contact form after a short delay to ensure page transition
  setTimeout(() => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};
const heroSlides = ref([
  {
    title: "Premium Clean Rice",
    subtitle: "From Vietnam's fertile fields to your table",
    image:
      "https://readdy.ai/api/search-image?query=beautiful%20vietnamese%20rice%20fields%20at%20sunrise%20with%20golden%20sunlight%20reflecting%20on%20water%20peaceful%20rural%20landscape%20with%20mountains%20in%20background&width=1440&height=500&seq=hero001&orientation=landscape",
  },
  {
    title: "Naturally Grown",
    subtitle: "No chemicals, just pure natural goodness",
    image:
      "https://static.readdy.ai/image/bd761bcaa8d3bed71136525661ab40e4/cfea165fe57fa4383c749c9c69d1187b.png",
  },
  {
    title: "Family Tradition",
    subtitle: "Three generations of rice farming excellence",
    image:
      "https://readdy.ai/api/search-image?query=traditional%20vietnamese%20rice%20harvest%20with%20farmers%20in%20conical%20hats%20working%20together%20in%20golden%20rice%20fields%20cultural%20heritage%20farming&width=1440&height=500&seq=hero003&orientation=landscape",
  },
]);
const featuredProducts = ref([
  {
    id: 1,
    name: "Gạo ST25",
    description: "Gạo dẻo thơm, hạt dài đều",
    price: "30.000đ/kg",
    image:
      "https://static.readdy.ai/image/bd761bcaa8d3bed71136525661ab40e4/42cf383debf45b9642fcf45eda7e57c1.png",
  },
  {
    id: 2,
    name: "Gạo ST21",
    description: "Dẻo nhiều thơm",
    price: "28.000đ/kg",
    image:
      "https://readdy.ai/api/search-image?query=vietnamese%20ST21%20rice%20bag%20retail%20packaging%20with%20product%20label%20and%20branding%20on%20clean%20white%20background%20supermarket%20style%20package%20professional%20product%20photography&width=320&height=240&seq=product006&orientation=landscape",
  },
  {
    id: 3,
    name: "Gạo Thơm Lài",
    description: "Dẻo nhiều thơm",
    price: "20.000đ/kg",
    image:
      "https://readdy.ai/api/search-image?query=jasmine%20rice%20retail%20bag%20packaging%20with%20vietnamese%20text%20and%20branding%20on%20clean%20white%20background%20supermarket%20style%20package%20professional%20product%20photography&width=320&height=240&seq=product007&orientation=landscape",
  },
  {
    id: 4,
    name: "Gạo Jasmine",
    description: "Gạo dẻo vừa, thơm nhẹ",
    price: "18.000đ/kg",
    image:
      "https://readdy.ai/api/search-image?query=jasmine%20rice%20premium%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20retail%20package%20professional%20product%20photography&width=320&height=240&seq=product008&orientation=landscape",
  },
  {
    id: 5,
    name: "Gạo Nàng Hoa",
    description: "Gạo thơm dẻo, vị ngọt tự nhiên",
    price: "25.000đ/kg",
    image:
      "https://readdy.ai/api/search-image?query=traditional%20vietnamese%20nang%20hoa%20rice%20retail%20packaging%20with%20product%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=320&height=240&seq=product009&orientation=landscape",
  },
  {
    id: 6,
    name: "Gạo Hàm Châu",
    description: "Dẻo nhiều thơm",
    price: "22.000đ/kg",
    image:
      "https://readdy.ai/api/search-image?query=premium%20ham%20chau%20rice%20retail%20packaging%20with%20vietnamese%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=320&height=240&seq=product010&orientation=landscape",
  },
  {
    id: 7,
    name: "Gạo Đài Loan",
    description: "Dẻo vừa",
    price: "24.000đ/kg",
    image:
      "https://readdy.ai/api/search-image?query=taiwanese%20rice%20variety%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=320&height=240&seq=product011&orientation=landscape",
  },
]);
const productCategories = ref([
  "Tất cả sản phẩm",
  "Gạo thơm",
  "Gạo dẻo",
  "Gạo đặc sản",
  "Gạo truyền thống",
  "Gạo nếp",
]);
const allProducts = ref([
  {
    id: 1,
    name: "Gạo ST25",
    description: "Dẻo nhiều thơm",
    price: "30.000đ/kg",
    category: "Gạo thơm",
    image:
      "https://readdy.ai/api/search-image?query=premium%20vietnamese%20ST25%20rice%20bag%20packaging%20with%20clear%20product%20label%20and%20branding%20on%20clean%20white%20background%20retail%20package%20professional%20product%20photography&width=400&height=300&seq=allprod001&orientation=landscape",
  },
  {
    id: 2,
    name: "Gạo Thơm Thái",
    description: "Dẻo vừa",
    price: "17.000đ/kg",
    category: "Gạo dẻo",
    image:
      "https://readdy.ai/api/search-image?query=thai%20fragrant%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod002&orientation=landscape",
  },
  {
    id: 3,
    name: "Gạo Thơm Lài",
    description: "Dẻo nhiều thơm",
    price: "20.000đ/kg",
    category: "Gạo thơm",
    image:
      "https://readdy.ai/api/search-image?query=jasmine%20rice%20retail%20bag%20packaging%20with%20vietnamese%20text%20and%20branding%20on%20clean%20white%20background%20supermarket%20style%20package%20professional%20product%20photography&width=400&height=300&seq=allprod003&orientation=landscape",
  },
  {
    id: 4,
    name: "Gạo Jasmine",
    description: "Dẻo vừa",
    price: "18.000đ/kg",
    category: "Gạo dẻo",
    image:
      "https://readdy.ai/api/search-image?query=jasmine%20rice%20premium%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20retail%20package%20professional%20product%20photography&width=400&height=300&seq=allprod004&orientation=landscape",
  },
  {
    id: 5,
    name: "Gạo Nàng Hoa",
    description: "Dẻo nhiều thơm",
    price: "25.000đ/kg",
    category: "Gạo thơm",
    image:
      "https://readdy.ai/api/search-image?query=traditional%20vietnamese%20nang%20hoa%20rice%20retail%20packaging%20with%20product%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod005&orientation=landscape",
  },
  {
    id: 6,
    name: "Gạo Hàm Châu",
    description: "Dẻo nhiều thơm",
    price: "22.000đ/kg",
    category: "Gạo đặc sản",
    image:
      "https://readdy.ai/api/search-image?query=premium%20ham%20chau%20rice%20retail%20packaging%20with%20vietnamese%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod006&orientation=landscape",
  },
  {
    id: 7,
    name: "Gạo ST21",
    description: "Dẻo nhiều thơm",
    price: "28.000đ/kg",
    category: "Gạo thơm",
    image:
      "https://readdy.ai/api/search-image?query=vietnamese%20ST21%20rice%20retail%20packaging%20with%20product%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod007&orientation=landscape",
  },
  {
    id: 8,
    name: "Gạo Đài Loan",
    description: "Dẻo vừa",
    price: "24.000đ/kg",
    category: "Gạo dẻo",
    image:
      "https://readdy.ai/api/search-image?query=taiwanese%20rice%20variety%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod008&orientation=landscape",
  },
  {
    id: 9,
    name: "Gạo Thơm Lài Cũ",
    description: "Nở mềm",
    price: "20.000đ/kg",
    category: "Gạo đặc sản",
    image:
      "https://readdy.ai/api/search-image?query=traditional%20vietnamese%20rice%20retail%20packaging%20with%20vintage%20style%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod009&orientation=landscape",
  },
  {
    id: 10,
    name: "Gạo Tài Nguyên Chợ Đào",
    description: "Nở xốp khô",
    price: "22.000đ/kg",
    category: "Gạo đặc sản",
    image:
      "https://readdy.ai/api/search-image?query=traditional%20vietnamese%20cho%20dao%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod010&orientation=landscape",
  },
  {
    id: 11,
    name: "Gạo Lài Sữa",
    description: "Dẻo nhiều thơm",
    price: "20.000đ/kg",
    category: "Gạo thơm",
    image:
      "https://readdy.ai/api/search-image?query=premium%20vietnamese%20lai%20sua%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod011&orientation=landscape",
  },
  {
    id: 12,
    name: "Gạo Ngọc Nữ",
    description: "Nở mềm",
    price: "16.000đ/kg",
    category: "Gạo truyền thống",
    image:
      "https://readdy.ai/api/search-image?query=traditional%20vietnamese%20ngoc%20nu%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod012&orientation=landscape",
  },
  {
    id: 13,
    name: "Gạo D8",
    description: "Dẻo nhiều thơm",
    price: "17.000đ/kg",
    category: "Gạo thơm",
    image:
      "https://readdy.ai/api/search-image?query=premium%20D8%20rice%20variety%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod013&orientation=landscape",
  },
  {
    id: 14,
    name: "Gạo 504",
    description: "Nở xốp khô",
    price: "13.000đ/kg",
    category: "Gạo truyền thống",
    image:
      "https://readdy.ai/api/search-image?query=traditional%20504%20rice%20variety%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod014&orientation=landscape",
  },
  {
    id: 15,
    name: "Gạo 64 Cũ",
    description: "Nở mềm",
    price: "16.000đ/kg",
    category: "Gạo truyền thống",
    image:
      "https://readdy.ai/api/search-image?query=traditional%20vietnamese%2064%20rice%20retail%20packaging%20with%20vintage%20style%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod015&orientation=landscape",
  },
  {
    id: 16,
    name: "Gạo Long Lài",
    description: "Dẻo nhiều thơm",
    price: "25.000đ/kg",
    category: "Gạo thơm",
    image:
      "https://readdy.ai/api/search-image?query=premium%20long%20lai%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod016&orientation=landscape",
  },
  {
    id: 17,
    name: "Gạo Lứt Huyết Rồng",
    description: "Dẻo vừa",
    price: "26.000đ/kg",
    category: "Gạo đặc sản",
    image:
      "https://readdy.ai/api/search-image?query=premium%20red%20brown%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod017&orientation=landscape",
  },
  {
    id: 18,
    name: "Gạo Quán Cơm",
    description: "Nở mềm",
    price: "16.000đ/kg",
    category: "Gạo truyền thống",
    image:
      "https://readdy.ai/api/search-image?query=restaurant%20grade%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod018&orientation=landscape",
  },
  {
    id: 19,
    name: "Nếp Sáp",
    description: "Nếp dẻo thơm, thích hợp làm xôi",
    price: "19.000đ/kg",
    category: "Gạo nếp",
    image:
      "https://readdy.ai/api/search-image?query=premium%20sticky%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod019&orientation=landscape",
  },
  {
    id: 20,
    name: "Nếp Cao Sản",
    description: "Nếp dẻo thơm, năng suất cao",
    price: "23.000đ/kg",
    category: "Gạo nếp",
    image:
      "https://readdy.ai/api/search-image?query=high%20yield%20sticky%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod020&orientation=landscape",
  },
  {
    id: 21,
    name: "Nếp Bắc Hoa Vàng",
    description: "Nếp dẻo, hạt vàng đẹp",
    price: "25.000đ/kg",
    category: "Gạo nếp",
    image:
      "https://readdy.ai/api/search-image?query=premium%20yellow%20flower%20sticky%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod021&orientation=landscape",
  },
  {
    id: 22,
    name: "Nếp Bắc Nhung",
    description: "Nếp dẻo thơm, hột to đẹp",
    price: "34.000đ/kg",
    category: "Gạo nếp",
    image:
      "https://readdy.ai/api/search-image?query=premium%20large%20grain%20sticky%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod022&orientation=landscape",
  },
  {
    id: 23,
    name: "Nếp Than",
    description: "Nếp dẻo, màu đen tự nhiên",
    price: "27.000đ/kg",
    category: "Gạo nếp",
    image:
      "https://readdy.ai/api/search-image?query=black%20sticky%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod023&orientation=landscape",
  },
  {
    id: 24,
    name: "Nếp Thái",
    description: "Nếp dẻo nhiều, thích hợp làm xôi",
    price: "26.000đ/kg",
    category: "Gạo nếp",
    image:
      "https://readdy.ai/api/search-image?query=thai%20sticky%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod024&orientation=landscape",
  },
  {
    id: 25,
    name: "Nếp Lá",
    description: "Nếp dẻo vừa, thơm lá dứa",
    price: "19.000đ/kg",
    category: "Gạo nếp",
    image:
      "https://readdy.ai/api/search-image?query=pandan%20leaf%20sticky%20rice%20retail%20packaging%20with%20clear%20branding%20on%20clean%20white%20background%20professional%20product%20photography&width=400&height=300&seq=allprod025&orientation=landscape",
  },
]);
const blogPosts = ref([
  {
    id: 1,
    title: "How to Store Rice for Maximum Freshness",
    excerpt:
      "Learn the best practices for storing different types of rice to maintain quality and prevent spoilage.",
    date: "March 15, 2024",
    image:
      "https://readdy.ai/api/search-image?query=rice%20storage%20containers%20and%20jars%20in%20modern%20kitchen%20pantry%20organized%20food%20storage%20clean%20white%20background%20lifestyle%20photography&width=400&height=240&seq=blog001&orientation=landscape",
  },
  {
    id: 2,
    title: "5 Healthy Rice Recipes for Busy Weeknights",
    excerpt:
      "Quick and nutritious rice dishes that your family will love, ready in 30 minutes or less.",
    date: "March 10, 2024",
    image:
      "https://readdy.ai/api/search-image?query=healthy%20rice%20bowl%20with%20vegetables%20and%20protein%20colorful%20nutritious%20meal%20food%20photography%20clean%20white%20background&width=400&height=240&seq=blog002&orientation=landscape",
  },
  {
    id: 3,
    title: "The Nutritional Benefits of Brown Rice",
    excerpt:
      "Discover why brown rice is considered a superfood and how it can improve your health.",
    date: "March 5, 2024",
    image:
      "https://readdy.ai/api/search-image?query=brown%20rice%20nutrition%20facts%20infographic%20healthy%20whole%20grain%20benefits%20clean%20modern%20design%20food%20science%20illustration&width=400&height=240&seq=blog003&orientation=landscape",
  },
]);
const charityActivities = ref([
  {
    id: 1,
    title: "Rice Distribution in Rural Schools",
    description: "Providing nutritious meals to students in remote areas",
    image:
      "https://readdy.ai/api/search-image?query=volunteers%20distributing%20rice%20packages%20to%20children%20at%20rural%20school%20charity%20activity%20community%20service%20warm%20atmosphere&width=400&height=240&seq=charity001&orientation=landscape",
  },
  {
    id: 2,
    title: "Emergency Relief Support",
    description: "Supporting families affected by natural disasters",
    image:
      "https://readdy.ai/api/search-image?query=disaster%20relief%20volunteers%20handing%20out%20rice%20bags%20to%20families%20in%20need%20humanitarian%20aid%20community%20support&width=400&height=240&seq=charity002&orientation=landscape",
  },
  {
    id: 3,
    title: "Elderly Care Program",
    description: "Monthly rice donations to senior citizens",
    image:
      "https://readdy.ai/api/search-image?query=young%20volunteers%20visiting%20elderly%20people%20with%20rice%20donations%20intergenerational%20care%20community%20program%20heartwarming%20scene&width=400&height=240&seq=charity003&orientation=landscape",
  },
]);
const filteredProducts = computed(() => {
  if (selectedCategory.value === "Tất cả sản phẩm") {
    return allProducts.value;
  }
  return allProducts.value.filter(
    (product) => product.category === selectedCategory.value
  );
});
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      isShowButtonToTop.value = true;
    } else {
      isShowButtonToTop.value = false;
    }
  });
});
</script>
<style scoped>
html {
  scroll-behavior: smooth;
}
.\!rounded-button {
  border-radius: 8px !important;
}
.product-swiper {
  padding: 20px 40px;
}
.product-swiper :deep(.swiper-button-next),
.product-swiper :deep(.swiper-button-prev) {
  color: #15803d;
}
.product-swiper :deep(.swiper-pagination-bullet) {
  background: #15803d;
  opacity: 0.5;
}
.product-swiper :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}
/* Hide number input arrows */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
/* Swiper pagination custom styles */
.swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.5);
}
.swiper-pagination-bullet-active {
  background: white;
}

.custom_button_to_top {
  position: fixed;
  right: 30px;
  z-index: 11;
  border-radius: 100px;
  cursor: pointer;
}
.custom_button_call {
  position: fixed;
  right: 30px;
  z-index: 11;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.4s;
  /* width: 45px; */
  p {
    opacity: 0;
    right: 0;
    visibility: hidden;
    position: absolute;
    /* line-height: 45px; */
    padding-left: 15px;
    color: var(--color-white);
    overflow: hidden;
    transition: all 0.4s;
  }
  img {
    transition: all 0.4s;
    background: var(--color-main);
    border-radius: 100%;
  }
  &:hover {
    width: 160px;
    img {
      margin-left: 110px;
    }
    p {
      opacity: 1;
      visibility: visible;
      right: 55px;
    }
  }
}
.custom_button_mess {
  position: fixed;
  right: 30px;
  z-index: 11;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.4s;
  /* width: 45px; */
  img {
    transition: all 0.4s;
    background: #fd00db9a;
    border-radius: 100%;
  }
}
.custom_button_zalo {
  position: fixed;
  right: 30px;
  z-index: 11;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.4s;
  /* width: 45px; */
  p {
    opacity: 0;
    right: 0;
    visibility: hidden;
    position: absolute;
    /* line-height: 45px; */
    padding-left: 15px;
    color: var(--color-white);
    overflow: hidden;
    transition: all 0.4s;
  }
  img {
    transition: all 0.4s;
    background: #0068ff;
    border-radius: 100%;
  }
  &:hover {
    width: 160px;
    img {
      margin-left: 110px;
    }
    p {
      opacity: 1;
      visibility: visible;
      right: 55px;
    }
  }
}
.devvn_animation_zoom {
  -webkit-animation: devvn_zoom 1.5s infinite linear;
  -moz-animation: devvn_zoom 1.5s infinite linear;
  -o-animation: devvn_zoom 1.5s infinite linear;
  animation: devvn_zoom 1.5s infinite linear;
}
a.devvn_animation_zoom img {
  -webkit-animation: calltrap_spin 2s infinite linear;
  -moz-animation: calltrap_spin 2s infinite linear;
  -o-animation: calltrap_spin 2s infinite linear;
  animation: calltrap_spin 2s infinite linear;
}
@-webkit-keyframes devvn_zoom {
  70% {
    box-shadow: 0 0 0 15px transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}
@keyframes devvn_zoom {
  70% {
    box-shadow: 0 0 0 15px transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}
@-webkit-keyframes calltrap_spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  30% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  33% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  36% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  39% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  42% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  45% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  48% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
    opacity: 1;
  }
  51% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  54% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  57% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@-moz-keyframes calltrap_spin {
  0% {
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  30% {
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  33% {
    -moz-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  36% {
    -moz-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  39% {
    -moz-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  42% {
    -moz-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  45% {
    -moz-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  48% {
    -moz-transform: rotate(10deg);
    transform: rotate(10deg);
    opacity: 1;
  }
  51% {
    -moz-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  54% {
    -moz-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  57% {
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@-o-keyframes calltrap_spin {
  0% {
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  30% {
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  33% {
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  36% {
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  39% {
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  42% {
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  45% {
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  48% {
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
    opacity: 1;
  }
  51% {
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  54% {
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  57% {
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@keyframes calltrap_spin {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  30% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  33% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  36% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  39% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  42% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  45% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  48% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
    opacity: 1;
  }
  51% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  54% {
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  57% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>
