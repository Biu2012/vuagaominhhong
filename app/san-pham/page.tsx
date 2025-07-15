
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SanPham() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    // Gạo cao cấp
    {
      id: 1,
      name: 'Gạo ST25',
      category: 'premium',
      price: 30000,
      image: 'https://readdy.ai/api/search-image?query=Premium%20white%20rice%20bag%20with%20Vietnamese%20ST25%20label%2C%20commercial%20rice%20packaging%2C%2050kg%20rice%20sack%2C%20clean%20product%20photography%2C%20white%20background%2C%20professional%20food%20packaging%20design&width=400&height=300&seq=rice-bag-st25-2&orientation=landscape',
      description: 'Dẻo Thơm - Gạo cao cấp được yêu thích',
      features: ['Dẻo thơm', 'Giống gạo đặc biệt', 'Chất lượng cao', 'Giải thưởng quốc tế'],
      origin: 'An Giang'
    },
    {
      id: 2,
      name: 'Gạo Thơm Thái',
      category: 'aromatic',
      price: 17000,
      image: 'https://readdy.ai/api/search-image?query=Thai%20fragrant%20rice%20bag%20packaging%2C%20commercial%20rice%20sack%20with%20Vietnamese%20labeling%2C%2025kg%20rice%20bag%2C%20clean%20product%20photography%2C%20white%20background%2C%20professional%20food%20packaging&width=400&height=300&seq=rice-bag-thai-2&orientation=landscape',
      description: 'Dẻo Vừa - Hương thơm tự nhiên',
      features: ['Dẻo vừa', 'Thơm nhẹ', 'Dễ nấu', 'Phổ biến'],
      origin: 'Đồng Tháp'
    },
    {
      id: 3,
      name: 'Gạo Thơm Lài',
      category: 'aromatic',
      price: 20000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20lai%20rice%20bag%20packaging%2C%20traditional%20rice%20sack%20design%2C%20commercial%20food%20bag%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=400&height=300&seq=rice-bag-lai&orientation=landscape',
      description: 'Dẻo Dai - Giống gạo truyền thống',
      features: ['Dẻo dai', 'Hương thơm đặc trưng', 'Truyền thống', 'Bền dai'],
      origin: 'Cần Thơ'
    },
    {
      id: 4,
      name: 'Gạo Jasmine',
      category: 'aromatic',
      price: 18000,
      image: 'https://readdy.ai/api/search-image?query=Jasmine%20rice%20bag%20packaging%2C%20premium%20rice%20sack%20with%20clean%20design%2C%20Vietnamese%20rice%20product%20packaging%2C%20commercial%20food%20bag%2C%20white%20background%2C%20professional%20photography&width=400&height=300&seq=rice-bag-jasmine-2&orientation=landscape',
      description: 'Dẻo Vừa - Chất lượng cao',
      features: ['Dẻo vừa', 'Hương thơm nhẹ', 'Màu trắng sáng', 'Dễ tiêu hóa'],
      origin: 'Long An'
    },
    {
      id: 5,
      name: 'Gạo Nàng Hoa',
      category: 'premium',
      price: 25000,
      image: 'https://readdy.ai/api/search-image?query=Premium%20Vietnamese%20nang%20hoa%20rice%20bag%2C%20specialty%20rice%20packaging%2C%20commercial%20rice%20sack%2C%20clean%20minimal%20background%2C%20professional%20food%20packaging%20design&width=400&height=300&seq=rice-bag-nang-hoa&orientation=landscape',
      description: 'Thơm Dẻo - Giống gạo đặc biệt',
      features: ['Thơm dẻo', 'Giống gạo quý', 'Hương vị đặc biệt', 'Cao cấp'],
      origin: 'Hậu Giang'
    },
    {
      id: 6,
      name: 'Gạo Hàm Châu',
      category: 'premium',
      price: 22000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20ham%20chau%20rice%20bag%20packaging%2C%20special%20rice%20variety%20bag%2C%20clean%20rice%20packaging%20design%2C%20white%20background%2C%20commercial%20food%20bag%20photography&width=400&height=300&seq=rice-bag-ham-chau&orientation=landscape',
      description: 'Dẻo Thơm - Giống gạo cao cấp',
      features: ['Dẻo thơm', 'Hạt đều', 'Chất lượng cao', 'Ngon cơm'],
      origin: 'Tiền Giang'
    },
    {
      id: 7,
      name: 'Gạo ST21',
      category: 'premium',
      price: 28000,
      image: 'https://readdy.ai/api/search-image?query=Premium%20ST21%20rice%20bag%20packaging%2C%20Vietnamese%20specialty%20rice%20sack%2C%20high%20quality%20rice%20bag%20design%2C%20clean%20product%20photography%2C%20professional%20food%20packaging&width=400&height=300&seq=rice-bag-st21&orientation=landscape',
      description: 'Dẻo Thơm - Giống gạo cao cấp',
      features: ['Dẻo thơm', 'Giống mới', 'Chất lượng tốt', 'Hương vị đặc biệt'],
      origin: 'An Giang'
    },
    {
      id: 8,
      name: 'Gạo Đài Loan',
      category: 'premium',
      price: 24000,
      image: 'https://readdy.ai/api/search-image?query=Taiwan%20rice%20bag%20packaging%2C%20sweet%20rice%20variety%20bag%2C%20clean%20commercial%20packaging%20design%2C%20white%20background%2C%20professional%20food%20photography&width=400&height=300&seq=rice-bag-taiwan&orientation=landscape',
      description: 'Dẻo Ngọt - Hương vị độc đáo',
      features: ['Dẻo ngọt', 'Vị ngọt tự nhiên', 'Giống đặc biệt', 'Thơm nhẹ'],
      origin: 'Đồng Tháp'
    },
    // Thêm các sản phẩm mới
    {
      id: 9,
      name: 'Gạo Thơm Lài Cũ',
      category: 'aromatic',
      price: 20000,
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Vietnamese%20lai%20rice%20bag%2C%20aged%20rice%20variety%20packaging%2C%20commercial%20rice%20sack%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=400&height=300&seq=rice-bag-lai-cu&orientation=landscape',
      description: 'Nở Mềm - Giống gạo truyền thống',
      features: ['Nở mềm', 'Hương thơm đặc trưng', 'Gạo cũ', 'Chất lượng tốt'],
      origin: 'Cần Thơ'
    },
    {
      id: 10,
      name: 'Gạo Tài Nguyên Chợ Đào',
      category: 'regular',
      price: 22000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20tai%20nguyen%20rice%20bag%20packaging%2C%20cho%20dao%20rice%20variety%2C%20commercial%20rice%20sack%2C%20clean%20product%20design%2C%20white%20background%20photography&width=400&height=300&seq=rice-bag-tai-nguyen&orientation=landscape',
      description: 'Nở Xốp - Gạo thông dụng chất lượng',
      features: ['Nở xốp', 'Dễ nấu', 'Giá hợp lý', 'Phù hợp gia đình'],
      origin: 'Long An'
    },
    {
      id: 11,
      name: 'Gạo Lài Sữa',
      category: 'aromatic',
      price: 20000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20lai%20sua%20rice%20bag%20packaging%2C%20milk%20lai%20rice%20variety%2C%20premium%20rice%20sack%20design%2C%20clean%20commercial%20packaging%2C%20professional%20photography&width=400&height=300&seq=rice-bag-lai-sua&orientation=landscape',
      description: 'Dẻo Thơm - Giống gạo đặc biệt',
      features: ['Dẻo thơm', 'Hương vị độc đáo', 'Chất lượng cao', 'Thơm nhẹ'],
      origin: 'Hậu Giang'
    },
    {
      id: 12,
      name: 'Gạo Ngọc Nữ',
      category: 'regular',
      price: 16000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20ngoc%20nu%20rice%20bag%20packaging%2C%20pearl%20rice%20variety%2C%20commercial%20rice%20sack%20design%2C%20clean%20white%20background%2C%20professional%20food%20photography&width=400&height=300&seq=rice-bag-ngoc-nu&orientation=landscape',
      description: 'Nở Mềm - Gạo gia đình phổ biến',
      features: ['Nở mềm', 'Giá tốt', 'Dễ nấu', 'Phù hợp hàng ngày'],
      origin: 'Đồng Tháp'
    },
    {
      id: 13,
      name: 'Gạo D8',
      category: 'aromatic',
      price: 17000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20D8%20rice%20bag%20packaging%2C%20specialty%20rice%20variety%2C%20commercial%20rice%20sack%20design%2C%20clean%20product%20photography%2C%20white%20background&width=400&height=300&seq=rice-bag-d8&orientation=landscape',
      description: 'Dẻo Thơm - Giống gạo phổ biến',
      features: ['Dẻo thơm', 'Hương vị tốt', 'Giá hợp lý', 'Chất lượng ổn định'],
      origin: 'Cần Thơ'
    },
    {
      id: 14,
      name: 'Gạo 504',
      category: 'regular',
      price: 13000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20504%20rice%20bag%20packaging%2C%20economy%20rice%20variety%2C%20commercial%20rice%20sack%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography&width=400&height=300&seq=rice-bag-504&orientation=landscape',
      description: 'Nở Xốp - Gạo kinh tế chất lượng',
      features: ['Nở xốp', 'Giá rẻ', 'Tiết kiệm', 'Phù hợp đại trà'],
      origin: 'Long An'
    },
    {
      id: 15,
      name: 'Gạo 64 Cũ',
      category: 'regular',
      price: 16000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%2064%20rice%20bag%20packaging%2C%20aged%20rice%20variety%2C%20traditional%20rice%20sack%20design%2C%20clean%20commercial%20packaging%2C%20professional%20photography&width=400&height=300&seq=rice-bag-64-cu&orientation=landscape',
      description: 'Nở Mềm - Gạo cũ truyền thống',
      features: ['Nở mềm', 'Gạo cũ', 'Hương vị đậm đà', 'Giá hợp lý'],
      origin: 'Tiền Giang'
    },
    {
      id: 16,
      name: 'Gạo Long Lài',
      category: 'premium',
      price: 25000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20long%20lai%20rice%20bag%20packaging%2C%20premium%20rice%20variety%2C%20high%20quality%20rice%20sack%20design%2C%20clean%20commercial%20packaging%2C%20professional%20photography&width=400&height=300&seq=rice-bag-long-lai&orientation=landscape',
      description: 'Dẻo Thơm - Giống gạo cao cấp',
      features: ['Dẻo thơm', 'Hương vị đặc biệt', 'Chất lượng cao', 'Cao cấp'],
      origin: 'An Giang'
    },
    {
      id: 17,
      name: 'Gạo Huyết Rồng',
      category: 'premium',
      price: 26000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20huyet%20rong%20rice%20bag%20packaging%2C%20dragon%20blood%20rice%20variety%2C%20premium%20rice%20sack%20design%2C%20clean%20product%20photography%2C%20professional%20commercial%20packaging&width=400&height=300&seq=rice-bag-huyet-rong&orientation=landscape',
      description: 'Dẻo Dai - Giống gạo đặc biệt',
      features: ['Dẻo dai', 'Màu đỏ tự nhiên', 'Giá trị dinh dưỡng cao', 'Đặc sản'],
      origin: 'Cà Mau'
    },
    {
      id: 18,
      name: 'Gạo Quán Cơm',
      category: 'regular',
      price: 16000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20quan%20com%20rice%20bag%20packaging%2C%20restaurant%20rice%20variety%2C%20commercial%20rice%20sack%20design%2C%20clean%20white%20background%2C%20professional%20food%20photography&width=400&height=300&seq=rice-bag-quan-com&orientation=landscape',
      description: 'Nở Mềm - Gạo chuyên quán ăn',
      features: ['Nở mềm', 'Phù hợp kinh doanh', 'Giá tốt', 'Chất lượng ổn định'],
      origin: 'Đồng Tháp'
    },
    // Nếp
    {
      id: 19,
      name: 'Nếp Sáp',
      category: 'glutinous',
      price: 19000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20nep%20sap%20glutinous%20rice%20bag%20packaging%2C%20sticky%20rice%20variety%2C%20commercial%20rice%20sack%20design%2C%20clean%20product%20photography%2C%20white%20background&width=400&height=300&seq=nep-bag-sap&orientation=landscape',
      description: 'Dẻo Thơm - Nếp chất lượng cao',
      features: ['Dẻo thơm', 'Nấu bánh ngon', 'Màu trắng đẹp', 'Chất lượng tốt'],
      origin: 'Hậu Giang'
    },
    {
      id: 20,
      name: 'Nếp Cao Sản',
      category: 'glutinous',
      price: 23000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20nep%20cao%20san%20glutinous%20rice%20bag%20packaging%2C%20high%20yield%20sticky%20rice%2C%20premium%20rice%20sack%20design%2C%20clean%20commercial%20packaging%2C%20professional%20photography&width=400&height=300&seq=nep-bag-cao-san&orientation=landscape',
      description: 'Dẻo Thơm - Nếp cao cấp',
      features: ['Dẻo thơm', 'Hạt to đều', 'Chất lượng cao', 'Năng suất cao'],
      origin: 'Long An'
    },
    {
      id: 21,
      name: 'Nếp Bắc Hoa Vàng',
      category: 'glutinous',
      price: 25000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20nep%20bac%20hoa%20vang%20glutinous%20rice%20bag%20packaging%2C%20northern%20yellow%20flower%20sticky%20rice%2C%20premium%20rice%20sack%20design%2C%20clean%20product%20photography&width=400&height=300&seq=nep-bag-bac-hoa-vang&orientation=landscape',
      description: 'Dẻo - Nếp miền Bắc đặc biệt',
      features: ['Dẻo dai', 'Màu vàng tự nhiên', 'Hương vị đặc trưng', 'Cao cấp'],
      origin: 'Hà Nam'
    },
    {
      id: 22,
      name: 'Nếp Bắc Nhung',
      category: 'glutinous',
      price: 34000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20nep%20bac%20nhung%20glutinous%20rice%20bag%20packaging%2C%20northern%20velvet%20sticky%20rice%2C%20premium%20large%20grain%20rice%20sack%2C%20clean%20commercial%20packaging%2C%20professional%20photography&width=400&height=300&seq=nep-bag-bac-nhung&orientation=landscape',
      description: 'Dẻo Thơm Hột To - Nếp cao cấp nhất',
      features: ['Dẻo thơm', 'Hạt to đặc biệt', 'Chất lượng tuyệt vời', 'Siêu cao cấp'],
      origin: 'Hà Nam'
    },
    {
      id: 23,
      name: 'Nếp Than',
      category: 'glutinous',
      price: 27000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20nep%20than%20black%20glutinous%20rice%20bag%20packaging%2C%20charcoal%20sticky%20rice%20variety%2C%20premium%20dark%20rice%20sack%20design%2C%20clean%20product%20photography&width=400&height=300&seq=nep-bag-than&orientation=landscape',
      description: 'Dẻo - Nếp đen đặc biệt',
      features: ['Dẻo dai', 'Màu đen tự nhiên', 'Giá trị dinh dưỡng cao', 'Đặc sản'],
      origin: 'Sóc Trăng'
    },
    {
      id: 24,
      name: 'Nếp Thái',
      category: 'glutinous',
      price: 26000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20nep%20thai%20glutinous%20rice%20bag%20packaging%2C%20Thai%20sticky%20rice%20variety%2C%20commercial%20rice%20sack%20design%2C%20clean%20white%20background%2C%20professional%20photography&width=400&height=300&seq=nep-bag-thai&orientation=landscape',
      description: 'Dẻo Nhiều - Nếp Thái chất lượng',
      features: ['Dẻo nhiều', 'Hương thơm nhẹ', 'Chất lượng tốt', 'Phổ biến'],
      origin: 'Cần Thơ'
    },
    {
      id: 25,
      name: 'Nếp Lá',
      category: 'glutinous',
      price: 19000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20nep%20la%20glutinous%20rice%20bag%20packaging%2C%20leaf%20sticky%20rice%20variety%2C%20traditional%20rice%20sack%20design%2C%20clean%20commercial%20packaging%2C%20professional%20photography&width=400&height=300&seq=nep-bag-la&orientation=landscape',
      description: 'Dẻo Vừa - Nếp truyền thống',
      features: ['Dẻo vừa', 'Hương vị truyền thống', 'Giá hợp lý', 'Chất lượng ổn'],
      origin: 'Hậu Giang'
    },
    // Tấm
    {
      id: 26,
      name: 'Tấm ST',
      category: 'broken',
      price: 17000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20tam%20ST%20broken%20rice%20bag%20packaging%2C%20ST%20variety%20broken%20rice%2C%20commercial%20rice%20sack%20design%2C%20clean%20product%20photography%2C%20white%20background&width=400&height=300&seq=tam-bag-st&orientation=landscape',
      description: 'Dẻo Nhiều - Tấm cao cấp',
      features: ['Dẻo nhiều', 'Chất lượng cao', 'Hạt đều', 'Ngon cơm'],
      origin: 'An Giang'
    },
    {
      id: 27,
      name: 'Tấm TN Cũ',
      category: 'broken',
      price: 17000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20tam%20TN%20cu%20broken%20rice%20bag%20packaging%2C%20aged%20TN%20broken%20rice%20variety%2C%20commercial%20rice%20sack%20design%2C%20clean%20white%20background%2C%20professional%20photography&width=400&height=300&seq=tam-bag-tn-cu&orientation=landscape',
      description: 'Nở Mềm - Tấm truyền thống',
      features: ['Nở mềm', 'Tấm cũ', 'Hương vị đậm đà', 'Giá tốt'],
      origin: 'Long An'
    },
    {
      id: 28,
      name: 'Tấm Thơm Cũ',
      category: 'broken',
      price: 16000,
      image: 'https://readdy.ai/api/search-image?query=Vietnamese%20tam%20thom%20cu%20broken%20rice%20bag%20packaging%2C%20aged%20fragrant%20broken%20rice%2C%20traditional%20rice%20sack%20design%2C%20clean%20commercial%20packaging%2C%20professional%20photography&width=400&height=300&seq=tam-bag-thom-cu&orientation=landscape',
      description: 'Nở Xốp - Tấm thơm giá rẻ',
      features: ['Nở xốp', 'Thơm nhẹ', 'Giá rẻ', 'Phù hợp gia đình'],
      origin: 'Đồng Tháp'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'premium', name: 'Gạo cao cấp' },
    { id: 'aromatic', name: 'Gạo thơm' },
    { id: 'regular', name: 'Gạo thường' },
    { id: 'glutinous', name: 'Nếp' },
    { id: 'broken', name: 'Tấm' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-amber-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
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
              <Link href="/" className="text-amber-700 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
                Trang chủ
              </Link>
              <Link href="/san-pham" className="text-amber-800 hover:text-amber-600 font-medium cursor-pointer whitespace-nowrap">
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

      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sản phẩm gạo chất lượng
          </h1>
          <p className="text-xl text-amber-100">
            Đa dạng các loại gạo, nếp, tấm cao cấp với giá cả hợp lý
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-amber-800">{product.name}</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {product.origin}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Đặc điểm:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-amber-600">
                        {product.price.toLocaleString('vi-VN')}đ/kg
                      </div>
                    </div>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap">
                      Liên hệ đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Bảng giá chi tiết</h2>
            <p className="text-gray-600">Giá cả minh bạch, cập nhật thường xuyên</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-amber-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">STT</th>
                    <th className="px-6 py-4 text-left font-semibold">Tên sản phẩm</th>
                    <th className="px-6 py-4 text-left font-semibold">Đặc tính</th>
                    <th className="px-6 py-4 text-left font-semibold">Giá (đ/kg)</th>
                    <th className="px-6 py-4 text-left font-semibold">Trạng thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((product, index) => (
                    <tr key={product.id} className={index % 2 === 0 ? 'bg-amber-25' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-amber-800">{product.id}</td>
                      <td className="px-6 py-4 font-medium text-amber-800">{product.name}</td>
                      <td className="px-6 py-4 text-gray-600">{product.description.split(' - ')[0]}</td>
                      <td className="px-6 py-4 font-semibold text-amber-600">
                        {product.price.toLocaleString('vi-VN')}đ
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Còn hàng
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              * Giá có thể thay đổi theo thị trường. Liên hệ để được báo giá chính xác nhất.
            </p>
            <Link href="/lien-he" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              Liên hệ báo giá
            </Link>
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
                <li>Nếp các loại</li>
                <li>Tấm chất lượng</li>
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