
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LienHe() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    if (formData.message.length > 500) {
      alert('Tin nhắn không được vượt quá 500 ký tự');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
              <Link href="/gioi-thieu" className="text-amber-700 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
                Giới thiệu
              </Link>
              <Link href="/lien-he" className="text-amber-800 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
                Liên hệ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-amber-100">
            Sẵn sàng hỗ trợ và tư vấn cho bạn 24/7
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl text-center shadow-lg">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">Điện thoại</h3>
              <p className="text-gray-600 mb-2">Hotline: 0937744266 - 0768022318</p>
              <p className="text-sm text-amber-600 mt-2">Hỗ trợ 24/7</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl text-center shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Email</h3>
              <p className="text-gray-600 mb-2">info@vuagaominhhong.vn</p>
              <p className="text-gray-600">sales@vuagaominhhong.vn</p>
              <p className="text-sm text-green-600 mt-2">Phản hồi trong 2h</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-map-pin-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Địa chỉ</h3>
              <p className="text-gray-600 mb-2">1546 ấp 63 Trần Văn Giàu</p>
              <p className="text-gray-600">xã Tân Vĩnh Lộc, TP HCM</p>
              <p className="text-sm text-blue-600 mt-2">Mở cửa 6:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">Gửi tin nhắn cho chúng tôi</h2>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Gửi thành công!</h3>
                  <p className="text-green-600">
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                        placeholder="Nhập họ và tên"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                        placeholder="Nhập số điện thoại"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Chủ đề
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm pr-8 appearance-none"
                      >
                        <option value="">Chọn chủ đề</option>
                        <option value="price-inquiry">Hỏi giá sản phẩm</option>
                        <option value="bulk-order">Đặt hàng số lượng lớn</option>
                        <option value="product-info">Tư vấn sản phẩm</option>
                        <option value="complaint">Khiếu nại</option>
                        <option value="other">Khác</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tin nhắn *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm resize-none"
                      placeholder="Nhập nội dung tin nhắn..."
                      required
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.message.length}/500 ký tự
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Gửi tin nhắn
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">Vị trí cửa hàng</h3>
                <p className="text-gray-600">1546 ấp 63 Trần Văn Giàu, xã Tân Vĩnh Lộc, TP HCM</p>
              </div>
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6305142797927!2d106.69417831462315!3d10.762622392330687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Giờ làm việc</h2>
            <p className="text-lg text-gray-600">Chúng tôi sẵn sàng phục vụ bạn</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4">Cửa hàng</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Thứ 2 - Thứ 6:</span>
                      <span className="font-medium text-amber-800">6:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Thứ 7:</span>
                      <span className="font-medium text-amber-800">6:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chủ nhật:</span>
                      <span className="font-medium text-amber-800">7:00 - 16:00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">Hotline</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hỗ trợ khách hàng:</span>
                      <span className="font-medium text-green-800">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tư vấn kỹ thuật:</span>
                      <span className="font-medium text-green-800">8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Giao hàng:</span>
                      <span className="font-medium text-green-800">6:00 - 22:00</span>
                    </div>
                  </div>
                </div>
              </div>
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
