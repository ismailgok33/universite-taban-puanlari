import Department from "../models/department";

export const DEPARTMENTS = [
  // 4 yıllık bölümler
  new Department("1", "Acil Yardım ve Afet Yönetimi"),
  new Department("2", "Adli Bilimler"),
  new Department("3", "Adli Bilişim Mühendisliği"),
  new Department("4", "Ağaç İşleri Endüstri Mühendisliği"),
  new Department("5", "Aile ve Tüketici Bilimleri"),
  new Department("6", "Aktüerya Bilimleri"),
  new Department("7", "Alman Dili ve Edebiyatı"),
  new Department("8", "Almanca Mütercim ve Tercümanlık"),
  new Department("9", "Almanca Öğretmenliği"),
  new Department("10", "Amerikan Kültürü ve Edebiyatı"),
  new Department("11", "Antrenörlük Eğitimi"),
  new Department("12", "Antropoloji"),
  new Department("13", "Arap Dili ve Edebiyatı"),
  new Department("14", "Arapça Mütercim ve Tercümanlık"),
  new Department("15", "Arapça Öğretmenliği"),
  new Department("16", "Arkeoloji"),
  new Department("17", "Arkeoloji ve Sanat Tarihi"),
  new Department("18", "Arnavut Dili ve Edebiyatı"),
  new Department("19", "Astronomi ve Uzay Bilimleri"),
  new Department("20", "Ayakkabı Tasarımı ve Üretimi"),
  new Department("21", "Azerbaycan Türkçesi ve Edebiyatı"),
  new Department("22", "Bahçe Bitkileri"),
  new Department("23", "Balıkçılık Teknolojisi Mühendisliği"),
  new Department("24", "Bankacılık"),
  new Department("25", "Bankacılık ve Finans"),
  new Department("26", "Bankacılık ve Sigortacılık"),
  new Department("27", "Basım Teknolojileri"),
  new Department("28", "Basın ve Yayın"),
  new Department("29", "Batı Dilleri"),
  new Department("30", "Beden Eğitimi ve Spor Öğretmenliği"),
  new Department("31", "Beslenme ve Diyetetik"),
  new Department("32", "Bilgi Güvenliği Teknolojisi"),
  new Department("33", "Bilgi ve Belge Yönetimi"),
  new Department("34", "Bilgisayar Bilimleri"),
  new Department("35", "Bilgisayar Mühendisliği"),
  new Department("36", "Bilgisayar Teknolojisi ve Bilişim Sistemleri"),
  new Department("37", "Bilgisayar ve Öğretim Teknolojileri Öğretmenliği"),
  new Department("38", "Bilim Tarihi"),
  new Department("39", "Bilişim Sistemleri Mühendisliği"),
  new Department("40", "Bilişim Sistemleri ve Teknolojileri"),
  new Department("41", "Bitki Koruma"),
  new Department("42", "Bitkisel Üretim ve Teknolojileri"),
  new Department("43", "Biyoenformatik ve Genetik"),
  new Department("44", "Biyokimya"),
  new Department("45", "Biyoloji"),
  new Department("46", "Biyoloji Öğretmenliği"),
  new Department("47", "Biyomedikal Mühendisliği"),
  new Department("48", "Biyomühendislik"),
  new Department("49", "Biyosistem Mühendisliği"),
  new Department("50", "Biyoteknoloji"),
  new Department("51", "Boşnak Dili ve Edebiyatı"),
  new Department("52", "Bulgar Dili ve Edebiyatı"),
  new Department("53", "Bulgarca Mütercim ve Tercümanlık"),
  new Department("54", "Cevher Hazırlama Mühendisliği"),
  new Department("55", "Coğrafya"),
  new Department("56", "Coğrafya Öğretmenliği"),
  new Department("57", "Çağdaş Türk Lehçeleri ve Edebiyatları"),
  new Department("58", "Çağdaş Yunan Dili ve Edebiyatı"),
  new Department("59", "Çalışma Ekonomisi ve Endüstri İlişkileri"),
  new Department("60", "Çerkez Dili ve Edebiyatı"),
  new Department("61", "Çeviribilim"),
  new Department("62", "Çevre Mühendisliği"),
  new Department("63", "Çin Dili ve Edebiyatı"),
  new Department("64", "Çince Mütercim ve Tercümanlık"),
  new Department("65", "Çizgi Film ve Animasyon"),
  new Department("66", "Çocuk Gelişimi"),
  new Department("67", "Deniz Bilimleri ve Teknolojisi Mühendisliği"),
  new Department("68", "Deniz Ulaştırma İşletme Mühendisliği"),
  new Department("69", "Denizcilik İşletmeleri Yönetimi"),
  new Department("70", "Deri Mühendisliği"),
  new Department("71", "Dijital Oyun Tasarımı"),
  new Department("72", "Dil ve Konuşma Terapisi"),
  new Department("73", "Dilbilimi"),
  new Department("74", "Diş Hekimliği"),
  new Department("75", "Ebelik"),
  new Department("76", "Egzersiz ve Spor Bilimleri"),
  new Department("77", "Eczacılık"),
  new Department("78", "Ekonometri"),
  new Department("79", "Ekonomi"),
  new Department("80", "Ekonomi ve Finans"),
  new Department("81", "El Sanatları"),
  new Department("82", "Elektrik Mühendisliği"),
  new Department("83", "Elektrik-Elektronik Mühendisliği"),
  new Department("84", "Elektronik Mühendisliği"),
  new Department("85", "Elektronik ve Haberleşme Mühendisliği"),
  new Department("86", "Endüstri Mühendisliği"),
  new Department("87", "Endüstriyel Tasarım"),
  new Department("88", "Endüstriyel Tasarım Mühendisliği"),
  new Department("89", "Enerji Mühendisliği"),
  new Department("90", "Enerji Sistemleri Mühendisliği"),
  new Department("91", "Enerji Yönetimi"),
  new Department("92", "Ergoterapi"),
  new Department("93", "Ermeni Dili ve Kültürü"),
  new Department("94", "Eski Yunan Dili ve Edebiyatı"),
  new Department("95", "Fars Dili ve Edebiyatı"),
  new Department("96", "Farsça Mütercim ve Tercümanlık"),
  new Department("97", "Felsefe"),
  new Department("98", "Felsefe Grubu Öğretmenliği"),
  new Department("99", "Fen Bilgisi Öğretmenliği"),
  new Department("100", "Film Tasarımı ve Yazarlığı"),
  new Department("101", "Film Tasarımı ve Yönetimi"),
  new Department("102", "Film Tasarım ve Yönetmenliği"),
  new Department("103", "Fizik"),
  new Department("104", "Fizik Mühendisliği"),
  new Department("105", "Fizik Öğretmenliği"),
  new Department("106", "Fizyoterapi ve Rehabilitasyon"),
  new Department("107", "Fotoğraf"),
  new Department("108", "Fotoğraf ve Video"),
  new Department("109", "Fotonik"),
  new Department("110", "Fransız Dili ve Edebiyatı"),
  new Department("111", "Fransızca Mütercim ve Tercümanlık"),
  new Department("112", "Fransızca Öğretmenliği"),
  new Department("113", "Gastronomi ve Mutfak Sanatları"),
  new Department("114", "Gayrimenkul Geliştirme ve Yönetimi"),
  new Department("115", "Gazetecilik"),
  new Department("116", "Geleneksel Türk Sanatları"),
  new Department("117", "Gemi İnşaatı ve Gemi Makineleri Mühendisliği"),
  new Department("118", "Gemi İnşaatı ve Gemi Makineleri Mühendisliği"),
  new Department("119", "Gemi ve Deniz Teknolojisi Mühendisliği"),
  new Department("120", "Gemi ve Yat Tasarımı"),
  new Department("121", "Genetik ve Biyomühendislik"),
  new Department("122", "Genetik ve Yaşam Bilimleri Programları"),
  new Department("123", "Geomatik Mühendisliği"),
  new Department("124", "Gerontoloji"),
  new Department("125", "Gıda Mühendisliği"),
  new Department("126", "Gıda Teknolojisi"),
  new Department("127", "Girişimcilik"),
  new Department("128", "Görsel İletişim Tasarımı"),
  new Department("129", "Görsel Sanatlar"),
  new Department("130", "Grafik"),
  new Department("131", "Grafik Tasarımı"),
  new Department("132", "Gümrük İşletme"),
  new Department("133", "Gürcü Dili ve Edebiyatı"),
  new Department("134", "Halkbilim"),
  new Department("135", "Halkla İlişkiler"),
  new Department("136", "Halkla İlişkiler ve Reklamcılık"),
  new Department("137", "Halkla İlişkiler ve Tanıtım"),
  new Department("138", "Harita Mühendisliği"),
  new Department("139", "Havacılık Elektrik ve Elektroniği"),
  new Department("140", "Havacılık ve Uzay Mühendisliği"),
  new Department("141", "Havacılık Yönetimi"),
  new Department("142", "Hayvansal Üretim ve Teknolojileri"),
  new Department("143", "Hemşirelik"),
  new Department("144", "Hidrojeoloji Mühendisliği"),
  new Department("145", "Hindoloji"),
  new Department("146", "Hititoloji"),
  new Department("147", "Hukuk"),
  new Department("148", "Hungaroloji"),
  new Department("149", "İbrani Dili ve Kültürü"),
  new Department("150", "İç Mimarlık"),
  new Department("151", "İç Mimarlık ve Çevre Tasarımı"),
  new Department("152", "İktisadi ve İdari Bilimler Programları"),
  new Department("153", "İktisadi ve İdari Programlar"),
  new Department("154", "İktisat"),
  new Department("155", "İlahiyat"),
  new Department("156", "İletişim Bilimleri"),
  new Department("157", "İletişim Fakültesi"),
  new Department("158", "İletişim Sanatları"),
  new Department("159", "İletişim Tasarımı ve Yönetimi"),
  new Department("160", "İletişim ve Tasarım"),
  new Department("161", "İlköğretim Matematik Öğretmenliği"),
  new Department("162", "İmalat Mühendisliği"),
  new Department("163", "İngiliz Dil Bilimi"),
  new Department("164", "İngiliz Dili ve Edebiyatı"),
  new Department("165", "İngiliz ve Rus Dilleri ve Edebiyatları"),
  new Department("166", "İngilizce Mütercim ve Tercümanlık"),
  new Department("167", "İngilizce Öğretmenliği"),
  new Department("168", "İngilizce, Fransızca Mütercim ve Tercümanlık"),
  new Department("169", "İnsan Kaynakları Yönetimi"),
  new Department("170", "İnşaat Mühendisliği"),
  new Department("171", "İslam Bilimleri"),
  new Department("172", "İslami İlimler"),
  new Department("173", "İslam İktisadı ve Finans"),
  new Department("174", "İspanyol Dili ve Edebiyatı"),
  new Department("175", "İstatistik"),
  new Department("176", "İstatistik ve Bilgisayar Bilimleri"),
  new Department("177", "İş Sağlığı ve Güvenliği"),
  new Department("178", "İşletme"),
  new Department("179", "İşletme"),
  new Department("180", "İtalyan Dili ve Edebiyatı"),
  new Department("181", "Japon Dili ve Edebiyatı"),
  new Department("182", "Japonca Öğretmenliği"),
  new Department("183", "Jeofizik Mühendisliği"),
  new Department("184", "Jeoloji Mühendisliği"),
  new Department("185", "Kamu Yönetimi"),
  new Department("186", "Kanatlı Hayvan Yetiştiriciliği"),
  new Department("187", "Karşılaştırmalı Edebiyat"),
  new Department("188", "Kazak Dili ve Edebiyatı"),
  new Department("189", "Kentsel Tasarım ve Peyzaj Mimarlığı"),
  new Department("190", "Kimya"),
  new Department("191", "Kimya Mühendisliği"),
  new Department("192", "Kimya Öğretmenliği"),
  new Department("193", "Kimya-Biyoloji Mühendisliği"),
  new Department("194", "Klasik Arkeoloji"),
  new Department("195", "Kontrol ve Otomasyon Mühendisliği"),
  new Department("196", "Kore Dili ve Edebiyatı"),
  new Department("197", "Kuyumculuk ve Mücevher Tasarımı"),
  new Department("198", "Kültür Varlıklarını Koruma ve Onarım"),
  new Department("199", "Kültür ve İletişim Bilimleri"),
  new Department("200", "Küresel Siyaset ve Uluslararası İlişkiler"),
  new Department("201", "Kürt Dili ve Edebiyatı"),
  new Department("202", "Latin Dili ve Edebiyatı"),
  new Department("203", "Leh Dili ve Edebiyatı"),
  new Department("204", "Lojistik Yönetimi"),
  new Department("205", "Maden Mühendisliği"),
  new Department("206", "Makine Mühendisliği"),
  new Department("207", "Maliye"),
  new Department("208", "Malzeme Bilimi ve Mühendisliği"),
  new Department("209", "Malzeme Bilimi ve Nanoteknoloji Mühendisliği"),
  new Department("210", "Malzeme Bilimi ve Teknolojileri"),
  new Department("211", "Matematik"),
  new Department("212", "Matematik Mühendisliği"),
  new Department("213", "Matematik Öğretmenliği"),
  new Department("214", "Matematik ve Bilgisayar Bilimleri"),
  new Department("215", "Medya ve Görsel Sanatlar"),
  new Department("216", "Medya ve İletişim"),
  new Department("217", "Mekatronik Mühendisliği"),
  new Department("218", "Metalurji ve Malzeme Mühendisliği"),
  new Department("219", "Meteoroloji Mühendisliği"),
  new Department("220", "Mimarlık"),
  new Department("221", "Moda Tasarımı"),
  new Department("222", "Moleküler Biyoloji ve Genetik"),
  new Department("223", "Moleküler Biyoteknoloji"),
  new Department("224", "Muhasebe ve Denetim"),
  new Department("225", "Muhasebe ve Finans Yönetimi"),
  new Department("226", "Mühendislik Programları"),
  new Department("227", "Mühendislik ve Doğa Bilimleri Programları"),
  new Department("228", "Mütercim-Tercümanlık"),
  new Department("229", "Müzecilik"),
  new Department("230", "Nanobilim ve Nanoteknoloji"),
  new Department("231", "Nanoteknoloji Mühendisliği"),
  new Department("232", "Nükleer Enerji Mühendisliği"),
  new Department("233", "Odyoloji"),
  new Department("234", "Okul Öncesi Öğretmenliği"),
  new Department("235", "Optik ve Akustik Mühendisliği"),
  new Department("236", "Organik Tarım İşletmeciliği"),
  new Department("237", "Orman Endüstrisi Mühendisliği"),
  new Department("238", "Orman Mühendisliği"),
  new Department("239", "Otel Yöneticiliği"),
  new Department("240", "Otomotiv Mühendisliği"),
  new Department("241", "Özel Eğitim Öğretmenliği"),
  new Department("242", "Pazarlama"),
  new Department("243", "Perfüzyon"),
  new Department("244", "Petrol ve Doğalgaz Mühendisliği"),
  new Department("245", "Peyzaj Mimarlığı"),
  new Department("246", "Pilotaj"),
  new Department("247", "Polimer Malzeme Mühendisliği"),
  new Department("248", "Politika ve Ekonomi"),
  new Department("249", "Protohistorya ve Ön Asya Arkeolojisi"),
  new Department("250", "Psikoloji"),
  new Department("251", "Psikolojik Danışmanlık ve Rehberlik"),
  new Department("252", "Psikolojik Danışmanlık ve Rehberlik Öğretmenliği"),
  new Department("253", "Radyo, Televizyon ve Sinema"),
  new Department("254", "Raylı Sistemler Mühendisliği"),
  new Department("255", "Rehberlik ve Psikolojik Danışmanlık"),
  new Department("256", "Reklam Tasarımı ve İletişimi"),
  new Department("257", "Reklamcılık"),
  new Department("258", "Rekreasyon"),
  new Department("259", "Rekreasyon Yönetimi"),
  new Department("260", "Rus Dili ve Edebiyatı"),
  new Department("261", "Rus Dili ve Edebiyatı Öğretmenliği"),
  new Department("262", "Rus ve İngiliz Dilleri ve Edebiyatları"),
  new Department("263", "Rusça Mütercim ve Tercümanlık"),
  new Department("264", "Sağlık Yönetimi"),
  new Department("265", "Sanat Tarihi"),
  new Department("266", "Sanat ve Kültür Yönetimi"),
  new Department("267", "Sanat ve Sosyal Bilimler Programları"),
  new Department("268", "Sermaye Piyasası"),
  new Department("269", "Seyahat İşletmeciliği"),
  new Department("270", "Seyahat İşletmeciliği ve Turizm Rehberliği"),
  new Department("271", "Sınıf Öğretmenliği"),
  new Department("272", "Sigortacılık"),
  new Department("273", "Sigortacılık ve Aktüerya Bilimleri"),
  new Department("274", "Sigortacılık ve Risk Yönetimi"),
  new Department("275", "Sigortacılık ve Sosyal Güvenlik"),
  new Department("276", "Sinema ve Dijital Medya"),
  new Department("277", "Sinema ve Televizyon"),
  new Department("278", "Sinoloji"),
  new Department("279", "Siyasal Bilimler"),
  new Department("280", "Siyaset Bilimi"),
  new Department("281", "Siyaset Bilimi ve Kamu Yönetimi"),
  new Department("282", "Siyaset Bilimi ve Uluslararası İlişkiler"),
  new Department("283", "Sosyal Bilgiler Öğretmenliği"),
  new Department("284", "Sosyal Hizmet"),
  new Department("285", "Sosyal ve Siyasal Bilimler"),
  new Department("286", "Sosyoloji"),
  new Department("287", "Spor Yöneticiliği"),
  new Department("288", "Su Bilimleri ve Mühendisliği"),
  new Department("289", "Su Ürünleri Mühendisliği"),
  new Department("290", "Sümeroloji"),
  new Department("291", "Süryani Dili ve Edebiyatı"),
  new Department("292", "Süt Teknolojisi"),
  new Department("293", "Şehir ve Bölge Planlama"),
  new Department("294", "Takı Tasarımı"),
  new Department("295", "Tapu Kadastro"),
  new Department("296", "Tarım Ekonomisi"),
  new Department("297", "Tarım Makineleri ve Teknolojileri Mühendisliği"),
  new Department("298", "Tarım Ticareti ve İşletmeciliği"),
  new Department("299", "Tarımsal Biyoteknoloji"),
  new Department("300", "Tarımsal Genetik Mühendisliği"),
  new Department("301", "Tarımsal Yapılar ve Sulama"),
  new Department("302", "Tarih"),
  new Department("303", "Tarih Öğretmenliği"),
  new Department("304", "Tarih Öncesi Arkeolojisi"),
  new Department("305", "Tarla Bitkileri"),
  new Department("306", "Teknoloji ve Bilgi Yönetimi"),
  new Department("307", "Tekstil Mühendisliği"),
  new Department("308", "Tekstil Tasarımı"),
  new Department("309", "Tekstil ve Moda Tasarımı"),
  new Department("310", "Televizyon Haberciliği ve Programcılığı"),
  new Department("311", "Tıp"),
  new Department("312", "Tıp Mühendisliği"),
  new Department("313", "Tiyatro Eleştirmenliği ve Dramaturji"),
  new Department("314", "Tohum Bilimi ve Teknolojisi"),
  new Department("315", "Toprak Bilimi ve Bitki Besleme"),
  new Department("316", "Turizm İşletmeciliği"),
  new Department("317", "Turizm Rehberliği"),
  new Department("318", "Turizm ve Otel İşletmeciliği"),
  new Department("319", "Türk Dili ve Edebiyatı"),
  new Department("320", "Türk Halkbilimi"),
  new Department("321", "Türk İslam Arkeolojisi"),
  new Department("322", "Türkçe Öğretmenliği"),
  new Department("323", "Türkoloji"),
  new Department("324", "Tütün Eksperliği"),
  new Department("325", "Uçak Bakım ve Onarım"),
  new Department("326", "Uçak Elektrik ve Elektroniği"),
  new Department("327", "Uçak Gövde ve Motor Bakımı"),
  new Department("328", "Uçak Mühendisliği"),
  new Department("329", "Ukrayna Dili ve Edebiyatı"),
  new Department("330", "Uluslararası Ekonomik İlişkiler"),
  new Department("331", "Uluslararası Finans"),
  new Department("332", "Uluslararası Finans ve Bankacılık"),
  new Department("333", "Uluslararası Girişimcilik"),
  new Department("334", "Uluslararası İlişkiler"),
  new Department("335", "Uluslararası İşletme Yönetimi"),
  new Department("336", "Uluslararası Ticaret"),
  new Department("337", "Uluslararası Ticaret ve Finans"),
  new Department("338", "Uluslararası Ticaret ve Finansman"),
  new Department("339", "Uluslararası Ticaret ve İşletmecilik"),
  new Department("340", "Uluslararası Ticaret ve Lojistik"),
  new Department("341", "Uluslararası Ulaştırma Sistemleri"),
  new Department("342", "Urdu Dili ve Edebiyatı"),
  new Department("343", "Uzay Bilimleri ve Teknolojileri"),
  new Department("344", "Uzay Mühendisliği"),
  new Department("345", "Uzay ve Uydu Mühendisliği"),
  new Department("346", "Veteriner"),
  new Department("347", "Yaban Hayatı Ekolojisi ve Yönetimi"),
  new Department("348", "Yapay Zeka Mühendisliği"),
  new Department("349", "Yapay Zeka ve Veri Mühendisliği"),
  new Department("350", "Yazılım Geliştirme"),
  new Department("351", "Yazılım Mühendisliği"),
  new Department("352", "Yeni Medya"),
  new Department("353", "Yeni Medya ve İletişim"),
  new Department("354", "Yerel Yönetimler"),
  new Department("355", "Yiyecek ve İçecek İşletmeciliği"),
  new Department("356", "Yönetim Bilimleri Programları"),
  new Department("357", "Yönetim Bilişim Sistemleri"),
  new Department("358", "Yunan Dili ve Edebiyatı"),
  new Department("359", "Zaza Dili ve Edebiyatı"),
  new Department("360", "Ziraat Mühendisliği Programları"),
  new Department("361", "Zootekni"),

  // 2 yıllık bölümler
  new Department("362", "Acil Durum ve Afet Yönetimi"),
  new Department("363", "Adalet"),
  new Department("364", "Ağız ve Diş Sağlığı"),
  new Department("365", "Alternatif Enerji Kaynakları Teknolojisi"),
  new Department("366", "Ambalaj Tasarımı"),
  new Department("367", "Ameliyathane Hizmetleri"),
  new Department("368", "Anestezi"),
  new Department("369", "Arıcılık"),
  new Department("370", "Aşçılık"),
  new Department("371", "Atçılık ve Antrenörlüğü "),
  new Department("372", "Atık Yönetimi"),
  new Department("373", "Avcılık ve Yaban Hayatı"),
  new Department("374", "Ayakkabı Tasarım ve Üretimi"),
  new Department("375", "Bağcılık"),
  new Department("376", "Bahçe Tarımı"),
  new Department("377", "Bankacılık ve Sigortacılık"),
  new Department("378", "Basım ve Yayım Teknolojileri"),
  new Department("379", "Bilgi Yönetimi"),
  new Department("380", "Bilgisayar Destekli Tasarım ve Animasyon"),
  new Department("381", "Bilgisayar Operatörlüğü"),
  new Department("382", "Bilgisayar Programcılığı"),
  new Department("383", "Bilgisayar Teknolojisi"),
  new Department("384", "Bilişim Güvenliği Teknolojisi"),
  new Department("385", "Bitki Koruma"),
  new Department("386", "Biyokimya"),
  new Department("387", "Biyomedikal Cihaz Teknolojisi"),
  new Department("388", "Boya Teknolojisi"),
  new Department("389", "Büro Yönetimi ve Yönetici Asistanlığı"),
  new Department("390", "Ceza İnfaz ve Güvenlik Hizmetleri"),
  new Department("391", "Coğrafi Bilgi Sistemleri"),
  new Department("392", "Çağrı Merkezi Hizmetleri"),
  new Department("393", "Çay Tarımı ve İşleme Teknolojisi"),
  new Department("394", "Çevre Koruma ve Kontrol"),
  new Department("395", "Çevre Sağlığı"),
  new Department("396", "Çevre Temizliği ve Denetimi"),
  new Department("397", "Çim Alan Tesisi ve Yönetimi"),
  new Department("398", "Çini Sanatı ve Tasarımı"),
  new Department("399", "Çocuk Gelişimi"),
  new Department("400", "Çocuk Koruma ve Bakım Hizmetleri"),
  new Department("401", "Çok Boyutlu Modelleme ve Animasyon"),
  new Department("402", "Deniz Brokerliği"),
  new Department("403", "Deniz Ulaştırma ve İşletme"),
  new Department("404", "Deniz ve Liman İşletmeciliği"),
  new Department("405", "Deri Konfeksiyon"),
  new Department("406", "Deri Teknolojisi"),
  new Department(
    "407",
    "Dezenfeksiyon, Sterilizasyon ve Antisepsi Teknikerliği"
  ),
  new Department("408", "Dış Ticaret"),
  new Department("409", "Dijital Fabrika Teknolojileri"),
  new Department("410", "Diş Protez Teknolojisi"),
  new Department("411", "Diyaliz"),
  new Department("412", "Doğal Yapı Taşları Teknolojisi"),
  new Department("413", "Doğalgaz ve Tesisatı Teknolojisi "),
  new Department("414", "Döküm"),
  new Department("415", "Eczane Hizmetleri"),
  new Department("416", "Elektrik"),
  new Department("417", "Elektrik Enerjisi Üretim, İletim ve Dağıtımı"),
  new Department("418", "Elektrikli Cihaz Teknolojisi"),
  new Department("419", "Elektronik Haberleşme Teknolojisi "),
  new Department("420", "Elektronik Teknolojisi"),
  new Department("421", "Elektronörofizyoloji"),
  new Department("422", "Emlak Yönetimi"),
  new Department("423", "Endüstri Ürünleri Tasarımı"),
  new Department("424", "Endüstriyel Cam ve Seramik"),
  new Department("425", "Endüstriyel Hammaddeler İşleme Teknolojisi"),
  new Department("426", "Endüstriyel Kalıpçılık"),
  new Department("427", "Enerji Tesisleri İşletmeciliği"),
  new Department("428", "Engelli Bakımı ve Rehabilitasyon"),
  new Department("429", "Engelliler İçin Destek Programı"),
  new Department("430", "Eser Koruma"),
  new Department("431", "Et ve Ürünleri Teknolojisi"),
  new Department("432", "Et ve Ürünleri Teknolojisi"),
  new Department("433", "Ev İdaresi "),
  new Department("434", "Evde Hasta Bakımı"),
  new Department("435", "Fındık Eksperliği"),
  new Department("436", "Fidan Yetiştiriciliği"),
  new Department("437", "Fizyoterapi"),
  new Department("438", "Fotoğrafçılık ve Kameramanlık"),
  new Department("439", "Geleneksel El Sanatları"),
  new Department("440", "Gemi İnşaatı"),
  new Department("441", "Gemi Makineleri İşletmeciliği"),
  new Department("442", "Geoteknik"),
  new Department("443", "Gıda Kalite Kontrolü ve Analizi"),
  new Department("444", "Gıda Teknolojisi"),
  new Department("445", "Giyim Üretim Teknolojisi"),
  new Department("446", "Grafik Tasarımı"),
  new Department("447", "Halıcılık ve Kilimcilik"),
  new Department("448", "Halkla İlişkiler ve Tanıtım"),
  new Department("449", "Harita ve Kadastro"),
  new Department("450", "Hava Lojistiği"),
  new Department("451", "Hibrid ve Elektrikli Taşıtlar Teknolojisi"),
  new Department("452", "Hukuk Büro Yönetimi ve Sekreterliği"),
  new Department("453", "İç Mekan Tasarımı"),
  new Department("454", "İklimlendirme ve Soğutma Teknolojisi"),
  new Department("455", "İkram Hizmetleri"),
  new Department("456", "İlahiyat"),
  new Department("457", "İlk ve Acil Yardım"),
  new Department("458", "İnsan Kaynakları Yönetimi"),
  new Department("459", "İnsansız Hava Aracı Teknolojisi ve Operatörlüğü"),
  new Department("460", "İnşaat Teknolojisi"),
  new Department("461", "İnternet ve Ağ Teknolojileri "),
  new Department("462", "İslami İlimler"),
  new Department("463", "İş Makineleri Operatörlüğü "),
  new Department("464", "İş Sağlığı ve Güvenliği"),
  new Department("465", "İş ve Uğraşı Terapisi"),
  new Department("466", "İşletme Yönetimi"),
  new Department("467", "Kaynak Teknolojisi"),
  new Department("468", "Kimya Teknolojisi"),
  new Department("469", "Kontrol ve Otomasyon Teknolojisi"),
  new Department("470", "Kooperatifçilik"),
  new Department("471", "Kozmetik Teknolojisi"),
  new Department("472", "Kuyumculuk ve Takı Tasarımı"),
  new Department("473", "Kültürel Miras ve Turizm"),
  new Department("474", "Kümes Hayvanları Yetiştiriciliği"),
  new Department("475", "Laborant ve Veteriner Sağlık"),
  new Department("476", "Laboratuvar Teknolojisi "),
  new Department("477", "Lojistik"),
  new Department("478", "Madencilik Teknolojisi"),
  new Department("479", "Makine"),
  new Department("480", "Makine Resim ve Konstrüksiyonu"),
  new Department("481", "Maliye"),
  new Department("482", "Mantarcılık"),
  new Department("483", "Marina ve Yat İşletmeciliği "),
  new Department("484", "Marka İletişimi "),
  new Department("485", "Medya ve İletişim "),
  new Department("486", "Mekatronik"),
  new Department("487", "Menkul Kıymetler ve Sermaye Piyasası "),
  new Department("488", "Mermer Teknolojisi"),
  new Department("489", "Metalurji"),
  new Department("490", "Meyve ve Sebze İşleme Teknolojisi"),
  new Department("491", "Mimari Dekoratif Sanatlar"),
  new Department("492", "Mimari Restorasyon"),
  new Department("493", "Mobil Teknolojileri "),
  new Department("494", "Mobilya ve Dekorasyon"),
  new Department("495", "Moda Tasarımı"),
  new Department("496", "Moda Yönetimi"),
  new Department("497", "Muhasebe ve Vergi Uygulamaları"),
  new Department("498", "Nüfus ve Vatandaşlık"),
  new Department("499", "Nükleer Teknoloji ve Radyasyon Güvenliği"),
  new Department("500", "Nükleer Tıp Teknikleri"),
  new Department("501", "Odyometri"),
  new Department("502", "Optisyenlik"),
  new Department("503", "Organik Tarım"),
  new Department("504", "Ormancılık ve Orman Ürünleri"),
  new Department("505", "Ortopedik Protez ve Ortez"),
  new Department("506", "Otobüs Kaptanlığı"),
  new Department("507", "Otomotiv Gövde ve Yüzey İşlem Teknolojileri"),
  new Department("508", "Otomotiv Teknolojisi"),
  new Department("509", "Otopsi Yardımcılığı"),
  new Department("510", "Özel Güvenlik ve Koruma"),
  new Department("511", "Pastacılık ve Ekmekçilik"),
  new Department("512", "Patoloji Laboratuvar Teknikleri"),
  new Department("513", "Pazarlama"),
  new Department("514", "Perakende Satış ve Mağaza Yönetimi"),
  new Department("515", "Peyzaj ve Süs Bitkileri Yetiştiriciliği"),
  new Department("516", "Podoloji"),
  new Department("517", "Polimer Teknolojisi"),
  new Department("518", "Posta Hizmetleri"),
  new Department("519", "Radyo ve Televizyon Programcılığı"),
  new Department("520", "Radyo ve Televizyon Teknolojisi"),
  new Department("521", "Radyoterapi"),
  new Department("522", "Rafineri ve Petro-Kimya Teknolojisi"),
  new Department("523", "Raylı Sistemler Elektrik ve Elektronik"),
  new Department("524", "Raylı Sistemler İşletmeciliği"),
  new Department("525", "Raylı Sistemler Makine Teknolojisi "),
  new Department("526", "Raylı Sistemler Makinistliği"),
  new Department("527", "Raylı Sistemler Yol Teknolojisi"),
  new Department("528", "Reklamcılık"),
  new Department("529", "Saç Bakımı ve Güzellik Hizmetleri"),
  new Department("530", "Sağlık Bilgi Sistemleri Teknikerliği"),
  new Department("531", "Sağlık Kurumları İşletmeciliği"),
  new Department("532", "Sağlık Turizmi İşletmeciliği"),
  new Department("533", "Sahne Işık ve Ses Teknolojileri"),
  new Department("534", "Sahne ve Dekor Tasarımı"),
  new Department("535", "Seracılık"),
  new Department("536", "Seramik ve Cam Tasarımı"),
  new Department("537", "Silah Sanayi Teknikerliği"),
  new Department("538", "Sivil Hava Ulaştırma İşletmeciliği"),
  new Department("539", "Sivil Havacılık Kabin Hizmetleri"),
  new Department("540", "Sivil Savunma ve İtfaiyecilik"),
  new Department("541", "Sondaj Teknolojisi"),
  new Department("542", "Sosyal Güvenlik"),
  new Department("543", "Sosyal Hizmetler"),
  new Department("544", "Sosyal Medya Yöneticiliği"),
  new Department("545", "Spor Yönetimi"),
  new Department("546", "Su Altı Teknolojisi"),
  new Department("547", "Su Ürünleri İşleme Teknolojisi"),
  new Department("548", "Sulama Teknolojisi"),
  new Department("549", "Sulama Teknolojisi"),
  new Department("550", "Süt ve Ürünleri Teknolojisi"),
  new Department("551", "Tahribatsız Muayene"),
  new Department("552", "Tapu ve Kadastro"),
  new Department("553", "Tarım Makineleri"),
  new Department("554", "Tarım Teknolojisi"),
  new Department("555", "Tarımsal İşletmecilik"),
  new Department("556", "Tarla Bitkileri"),
  new Department("557", "Tekstil Teknolojisi"),
  new Department("558", "Tekstil ve Halı Makineleri "),
  new Department("559", "Tıbbi Dokümantasyon ve Sekreterlik"),
  new Department("560", "Tıbbi Görüntüleme Teknikleri"),
  new Department("561", "Tıbbi Laboratuvar Teknikleri"),
  new Department("562", "Tıbbi Tanıtım ve Pazarlama"),
  new Department("563", "Tıbbi ve Aromatik Bitkiler"),
  new Department("564", "Tohumculuk Teknolojisi"),
  new Department("565", "Turist Rehberliği"),
  new Department("566", "Turizm Animasyonu"),
  new Department("567", "Turizm ve Otel İşletmeciliği"),
  new Department("568", "Turizm ve Seyahat Hizmetleri"),
  new Department("569", "Uçak Teknolojisi"),
  new Department("570", "Uçuş Harekat Yöneticiliği"),
  new Department("571", "Ulaştırma ve Trafik Hizmetleri"),
  new Department("572", "Un ve Unlu Mamuller Teknolojisi"),
  new Department("573", "Uygulamalı İngilizce Çevirmenlik"),
  new Department("574", "Uygulamalı İspanyolca Çevirmenlik (İspanyolca)"),
  new Department("575", "Uygulamalı Rusça Çevirmenlik (Rusça)"),
  new Department("576", "Üretimde Kalite Kontrol"),
  new Department("577", "Web Tasarımı ve Kodlama"),
  new Department("578", "Yağ Endüstrisi"),
  new Department("579", "Yapı Denetimi "),
  new Department("580", "Yapı Ressamlığı"),
  new Department("581", "Yapı Tesisat Teknolojisi"),
  new Department("582", "Yapı Yalıtım Teknolojisi"),
  new Department("583", "Yaşlı Bakımı"),
  new Department("584", "Yat Kaptanlığı"),
  new Department("585", "Yeni Medya ve Gazetecilik"),
  new Department("586", "Yerel Yönetimler"),
  new Department("587", "Zeytincilik ve Zeytin İşleme Teknolojisi"),
];
