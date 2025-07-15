
'use client';

import Link from 'next/link';

export default function Home() {
  const products = [
    { id: 1, name: 'Gạo ST25', feature: 'Dẻo Thơm', price: 30000 },
    { id: 2, name: 'Gạo Thơm Thái', feature: 'Dẻo Vừa', price: 17000 },
    { id: 3, name: 'Gạo Thơm Lài', feature: 'Dẻo Dai', price: 20000 },
    { id: 4, name: 'Gạo Jasmine', feature: 'Dẻo Vừa', price: 18000 },
    { id: 5, name: 'Gạo Nàng Hoa', feature: 'Thơm Dẻo', price: 25000 },
    { id: 6, name: 'Gạo Hàm Châu', feature: 'Dẻo Thơm', price: 22000 },
    { id: 7, name: 'Gạo ST21', feature: 'Dẻo Thơm', price: 28000 },
    { id: 8, name: 'Gạo Đài Loan', feature: 'Dẻo Ngọt', price: 24000 },
    { id: 9, name: 'Gạo Thơm Lài Cũ', feature: 'Nở Mềm', price: 20000 },
    { id: 10, name: 'Gạo Tài Nguyên Chợ Đào', feature: 'Nở Xốp', price: 22000 },
    { id: 11, name: 'Gạo Lài Sữa', feature: 'Dẻo Thơm', price: 20000 },
    { id: 12, name: 'Gạo Ngọc Nữ', feature: 'Nở Mềm', price: 16000 },
    { id: 13, name: 'Gạo D8', feature: 'Dẻo Thơm', price: 17000 },
    { id: 14, name: 'Gạo 504', feature: 'Nở Xốp', price: 13000 },
    { id: 15, name: 'Gạo 64 Cũ', feature: 'Nở Mềm', price: 16000 },
    { id: 16, name: 'Gạo Long Lài', feature: 'Dẻo Thơm', price: 25000 },
    { id: 17, name: 'Gạo Huyết Rồng', feature: 'Dẻo Dai', price: 26000 },
    { id: 18, name: 'Gạo Quán Cơm', feature: 'Nở Mềm', price: 16000 },
    { id: 19, name: 'Nếp Sáp', feature: 'Dẻo Thơm', price: 19000 },
    { id: 20, name: 'Nếp Cao Sản', feature: 'Dẻo Thơm', price: 23000 },
    { id: 21, name: 'Nếp Bắc Hoa Vàng', feature: 'Dẻo', price: 25000 },
    { id: 22, name: 'Nếp Bắc Nhung', feature: 'Dẻo Thơm Hột To', price: 34000 },
    { id: 23, name: 'Nếp Than', feature: 'Dẻo', price: 27000 },
    { id: 24, name: 'Nếp Thái', feature: 'Dẻo Nhiều', price: 26000 },
    { id: 25, name: 'Nếp Lá', feature: 'Dẻo Vừa', price: 19000 },
    { id: 26, name: 'Tấm ST', feature: 'Dẻo Nhiều', price: 17000 },
    { id: 27, name: 'Tấm TN Cũ', feature: 'Nở Mềm', price: 17000 },
    { id: 28, name: 'Tấm Thơm Cũ', feature: 'Nở Xốp', price: 16000 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-amber-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-30 h-30 rounded-full overflow-hidden">
                <img 
                  src="https://static.readdy.ai/image/7331f8e64e92f6c7d340d19d8726907d/5107cd81736e97812f652fabeff4f215.jfif"
                  alt="Vựa Gạo Minh Hồng Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-800" style={{fontFamily: 'Pacifico, serif'}}>
                  Vựa Gạo Minh Hồng
                </h1>
                <p className="text-sm text-amber-600">Nhà phân phối Sỉ và Lẻ Gạo - Tấm - Nếp</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-amber-800 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
                Trang chủ
              </Link>
              <Link href="/san-pham" className="text-amber-700 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
                Sản phẩm
              </Link>
              <Link href="/gioi-thieu" className="text-amber-700 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
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
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.3), rgba(217, 119, 6, 0.1)), url('https://intechvietnam.com/uploads/noidung/images/baiviet/quy-trinh-san-xuat-gao.jpg')`
        }}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Vựa Gạo Minh Hồng
            </h1>
            <p className="text-xl text-amber-100 mb-4">
              Nhà phân phối Sỉ và Lẻ Gão - Tấm - Nếp
            </p>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Cửa hàng: 1546 ấp 63 Trần Văn Giàu, xã Tân Vĩnh Lộc, TP HCM
            </p>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Hotline: 0937744266 - 0768022318
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/san-pham" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap text-center">
                Xem sản phẩm
              </Link>
              <Link href="/lien-he" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/50 cursor-pointer whitespace-nowrap text-center">
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">
              Sản Phẩm Của Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600">
              Bảng giá các loại gạo, nếp, tấm chất lượng cao
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-amber-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">STT</th>
                    <th className="px-6 py-4 text-left font-semibold">Tên sản phẩm</th>
                    <th className="px-6 py-4 text-left font-semibold">Đặc tính</th>
                    <th className="px-6 py-4 text-left font-semibold">Giá (đ/kg)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((product, index) => (
                    <tr key={product.id} className={index % 2 === 0 ? 'bg-amber-25' : 'bg-white'}>
                      <td className="px-6 py-3 font-medium text-amber-800">{product.id}</td>
                      <td className="px-6 py-3 font-medium text-amber-800">{product.name}</td>
                      <td className="px-6 py-3 text-gray-600">{product.feature}</td>
                      <td className="px-6 py-3 font-semibold text-amber-600">
                        {product.price.toLocaleString('vi-VN')}đ
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/san-pham" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              Xem chi tiết sản phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-amber-800 mb-6">
                Về Vựa Gạo Minh Hồng
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Vựa Gạo Minh Hồng là nhà phân phối sỉ và lẻ chuyên nghiệp các loại gạo, tấm, nếp chất lượng cao. Chúng tôi đã khẳng định được vị thế của mình trên thị trường với chất lượng sản phẩm uy tín và dịch vụ khách hàng tận tâm.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Cửa hàng tại 1546 ấp 63 Trần Văn Giàu, xã Tân Vĩnh Lộc, TP HCM với đội ngũ chuyên nghiệp, chúng tôi cam kết cung cấp những sản phẩm chất lượng cao, đảm bảo an toàn sức khỏe và thân thiện với môi trường.
              </p>
              <Link href="/gioi-thieu" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Tìm hiểu thêm
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20rice%20warehouse%20interior%2C%20Vietnamese%20rice%20storage%20facility%2C%20professional%20food%20processing%20environment%2C%20clean%20organized%20warehouse%20with%20rice%20bags%2C%20industrial%20agriculture%20setting%2C%20professional%20lighting%2C%20business%20photography%20style&width=600&height=400&seq=warehouse&orientation=landscape"
                alt="Kho gạo Minh Hồng"
                className="w-full rounded-xl shadow-lg object-cover object-top"
              />
            </div>
          </div>

          {/* Product Origins */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Vùng nguyên liệu</h3>
              <p className="text-lg text-gray-600">Gạo từ những vùng đất trồng lúa nổi tiếng nhất Việt Nam</p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <i className="ri-plant-line text-green-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-green-800 mb-2">Long An</h4>
                <p className="text-sm text-gray-600">Vùng đất phù sa màu mỡ</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <i className="ri-plant-line text-amber-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-amber-800 mb-2">Tiền Giang</h4>
                <p className="text-sm text-gray-600">Đồng bằng sông Cửu Long</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <i className="ri-plant-line text-red-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-red-800 mb-2">Đắk Lắk</h4>
                <p className="text-sm text-gray-600">Đất đỏ bazan màu mỡ</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <i className="ri-plant-line text-blue-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-blue-800 mb-2">Sóc Trăng</h4>
                <p className="text-sm text-gray-600">Vùng ven biển phù sa</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  <i className="ri-plant-line text-emerald-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-emerald-800 mb-2">Cà Mau</h4>
                <p className="text-sm text-gray-600">Mũi cực Nam Tổ quốc</p>
              </div>
            </div>
          </div>

          {/* Customer Types */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Khách hàng của chúng tôi</h3>
              <p className="text-lg text-gray-600">Phục vụ đa dạng các đối tượng khách hàng</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">Khách hàng lẻ</h4>
                <p className="text-gray-600 text-sm">Gia đình, cá nhân</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-store-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-green-800 mb-2">Đại lý</h4>
                <p className="text-gray-600 text-sm">Cửa hàng, đại lý phân phối</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-restaurant-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-amber-800 mb-2">Nhà hàng</h4>
                <p className="text-gray-600 text-sm">Quán ăn, nhà hàng</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-building-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-red-800 mb-2">Bếp công nghiệp</h4>
                <p className="text-gray-600 text-sm">Nhà máy, xí nghiệp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Di chuyển xuống cuối */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">
              Tại sao chọn Vựa Gạo Minh Hồng?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nhà phân phối uy tín, chúng tôi cam kết mang đến những sản phẩm gạo chất lượng cao nhất
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-store-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">Phân Phối Sỉ & Lẻ</h3>
              <p className="text-gray-600">
                Chuyên phân phối sỉ và lẻ các loại gạo, tấm, nếp chất lượng cao
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">An Toàn Sức Khỏe</h3>
              <p className="text-gray-600">
                Sản phẩm đảm bảo an toàn vệ sinh thực phẩm, không chất bảo quản có hại
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Thân Thiện Môi Trường</h3>
              <p className="text-gray-600">
                Quy trình sản xuất và đóng gói thân thiện với môi trường, bền vững
              </p>
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
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="https://static.readdy.ai/image/7331f8e64e92f6c7d340d19d8726907d/5107cd81736e97812f652fabeff4f215.jfif"
                    alt="Vựa Gạo Minh Hồng Logo"
                    className="w-full h-full object-cover"
                  />
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
