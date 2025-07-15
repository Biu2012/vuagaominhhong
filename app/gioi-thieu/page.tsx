
'use client';

import Link from 'next/link';

export default function GioiThieu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-amber-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <i className="ri-plant-line text-white text-2xl"></i>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-800" style={{fontFamily: 'Pacifico, serif'}}>
                  Vựa Gạo Minh Hồng
                </h1>
                <p className="text-sm text-amber-600">Nhà phân phối Sỉ và Lẻ Gạo - Tấm - Nếp</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-amber-700 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
                Trang chủ
              </Link>
              <Link href="/san-pham" className="text-amber-700 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
                Sản phẩm
              </Link>
              <Link href="/gioi-thieu" className="text-amber-800 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
                Giới thiệu
              </Link>
              <Link href="/lien-he" className="text-amber-700 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
                Liên hệ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.4), rgba(217, 119, 6, 0.2)), url('https://readdy.ai/api/search-image?query=Traditional%20Vietnamese%20rice%20farming%20landscape%2C%20golden%20rice%20fields%20under%20sunset%2C%20peaceful%20rural%20countryside%2C%20farmers%20working%20in%20rice%20paddies%2C%20warm%20golden%20hour%20lighting%2C%20agricultural%20heritage%2C%20traditional%20farming%20methods&width=1920&height=600&seq=farming-heritage&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Về chúng tôi
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Hơn 30 năm kinh nghiệm trong ngành lúa gạo - Địa chỉ uy tín chuyên cung cấp sỉ và lẻ các loại gạo, tấm, nếp chất lượng cao
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-800 mb-6">
                Giới thiệu Vựa gạo Minh Hồng
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Với hơn 30 năm kinh nghiệm trong ngành lúa gạo, Vựa gạo Minh Hồng tự hào là địa chỉ uy tín chuyên cung cấp sỉ và lẻ các loại gạo, tấm, nếp chất lượng cao, đảm bảo an toàn vệ sinh thực phẩm cho người tiêu dùng.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Với phương châm "Chất lượng là niềm tin – Uy tín là thương hiệu", Vựa gạo Minh Hồng luôn không ngừng cải tiến và phát triển để mang đến cho khách hàng những sản phẩm gạo ngon nhất, sạch nhất, và dịch vụ tốt nhất.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20Vietnamese%20rice%20warehouse%20facility%2C%20clean%20rice%20storage%2C%20professional%20rice%20processing%20equipment%2C%20quality%20control%20environment%2C%20industrial%20rice%20facility%2C%20food%20safety%20standards%2C%20bright%20clean%20interior&width=600&height=400&seq=rice-warehouse&orientation=landscape"
                alt="Vựa gạo hiện đại"
                className="w-full rounded-xl shadow-lg object-cover object-top"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Cam kết của chúng tôi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những cam kết mà Vựa gạo Minh Hồng luôn thực hiện với khách hàng
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-map-pin-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Nguồn gốc rõ ràng</h3>
              <p className="text-gray-600 leading-relaxed">
                Gạo được tuyển chọn kỹ lưỡng từ những vùng nguyên liệu nổi tiếng như Long An, Tiền Giang, Đắk Lắk, Sóc Trăng, Cà Mau...
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">Đảm bảo chất lượng</h3>
              <p className="text-gray-600 leading-relaxed">
                Gạo mới, sạch, không pha trộn, không chất bảo quản. Đảm bảo an toàn vệ sinh thực phẩm.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-price-tag-3-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Giá cả cạnh tranh</h3>
              <p className="text-gray-600 leading-relaxed">
                Giá cả ổn định, phù hợp cho cả khách hàng lẻ, đại lý, quán ăn, nhà hàng, bếp ăn công nghiệp.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Dịch vụ tận tâm</h3>
              <p className="text-gray-600 leading-relaxed">
                Giao hàng nhanh chóng, phục vụ chuyên nghiệp, uy tín tạo nên thương hiệu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Origins */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Vùng nguyên liệu</h2>
            <p className="text-lg text-gray-600">Gạo từ những vùng đất trồng lúa nổi tiếng nhất Việt Nam</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <i className="ri-plant-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="font-bold text-green-800 mb-2">Long An</h3>
              <p className="text-sm text-gray-600">Vùng đất phù sa màu mỡ</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <i className="ri-plant-line text-amber-600 text-2xl"></i>
              </div>
              <h3 className="font-bold text-amber-800 mb-2">Tiền Giang</h3>
              <p className="text-sm text-gray-600">Đồng bằng sông Cửu Long</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <i className="ri-plant-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="font-bold text-red-800 mb-2">Đắk Lắk</h3>
              <p className="text-sm text-gray-600">Đất đỏ bazan màu mỡ</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <i className="ri-plant-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-bold text-blue-800 mb-2">Sóc Trăng</h3>
              <p className="text-sm text-gray-600">Vùng ven biển phù sa</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <i className="ri-plant-line text-emerald-600 text-2xl"></i>
              </div>
              <h3 className="font-bold text-emerald-800 mb-2">Cà Mau</h3>
              <p className="text-sm text-gray-600">Mũi cực Nam Tổ quốc</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Khách hàng của chúng tôi</h2>
            <p className="text-lg text-gray-600">Phục vụ đa dạng các đối tượng khách hàng</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">Khách hàng lẻ</h3>
              <p className="text-gray-600 text-sm">Gia đình, cá nhân</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-store-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Đại lý</h3>
              <p className="text-gray-600 text-sm">Cửa hàng, đại lý phân phối</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-restaurant-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-amber-800 mb-2">Nhà hàng</h3>
              <p className="text-gray-600 text-sm">Quán ăn, nhà hàng</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-red-800 mb-2">Bếp công nghiệp</h3>
              <p className="text-gray-600 text-sm">Nhà máy, xí nghiệp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Tại sao chọn chúng tôi?</h2>
            <p className="text-lg text-gray-600">Những ưu điểm vượt trội của Vựa gạo Minh Hồng</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Hơn 30 năm kinh nghiệm</h3>
                    <p className="text-gray-600">Tích lũy kiến thức và kinh nghiệm sâu sắc trong ngành lúa gạo</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-award-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-2">Uy tín được khẳng định</h3>
                    <p className="text-gray-600">Được khách hàng tin tưởng và giới thiệu qua nhiều năm</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-truck-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Giao hàng nhanh chóng</h3>
                    <p className="text-gray-600">Hệ thống vận chuyển chuyên nghiệp, đảm bảo hàng hóa đến tay khách hàng</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Vietnamese%20rice%20quality%20control%20process%2C%20professional%20rice%20inspection%2C%20food%20safety%20testing%2C%20clean%20modern%20rice%20processing%20facility%2C%20quality%20assurance%20procedures%2C%20rice%20grading%20and%20sorting&width=600&height=400&seq=quality-control&orientation=landscape"
                alt="Kiểm tra chất lượng"
                className="w-full rounded-xl shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                  <i className="ri-plant-line text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold" style={{fontFamily: 'Pacifico, serif'}}>
                  Vựa Gạo Minh Hồng
                </h3>
              </div>
              <p className="text-amber-200 leading-relaxed">
                Nhà phân phối Sỉ và Lẻ Gạo - Tấm - Nếp uy tín chất lượng cao.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên kết</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-amber-200 hover:text-white cursor-pointer">Trang chủ</Link></li>
                <li><Link href="/san-pham" className="text-amber-200 hover:text-white cursor-pointer">Sản phẩm</Link></li>
                <li><Link href="/gioi-thieu" className="text-amber-200 hover:text-white cursor-pointer">Giới thiệu</Link></li>
                <li><Link href="/lien-he" className="text-amber-200 hover:text-white cursor-pointer">Liên hệ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Gạo ST25</li>
                <li>Gạo Thơm Thái</li>
                <li>Gạo Jasmine</li>
                <li>Gạo Nàng Hoa</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
              <div className="space-y-3 text-amber-200">
                <div className="flex items-center space-x-2">
                  <i className="ri-phone-line"></i>
                  <span>0937744266 - 0768022318</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-mail-line"></i>
                  <span>info@vuagaominhhong.vn</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-map-pin-line"></i>
                  <span>1546 ấp 63 Trần Văn Giàu, xã Tân Vĩnh Lộc, TP HCM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-700 mt-12 pt-8 text-center text-amber-200">
            <p>&copy; 2024 Vựa Gạo Minh Hồng. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
