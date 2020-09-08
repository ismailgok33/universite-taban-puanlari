import University from "../models/university";

export const UNIVERSITIES = [
  // new University(
  //   "uni_1",
  //   "TOBB Ekonomi ve Teknoloji Üniversitesi",
  //   "Bilgisayar Mühendisliği %50 burslu",
  //   "512,232",
  //   "522,232",
  //   "16.392",
  //   false,
  //   "2",
  //   4,
  //   "SAY"
  // ),
  // new University(
  //   "uni_2",
  //   "ODTÜ",
  //   "Bilgisayar Mühendisliği",
  //   "572,562",
  //   "582,562",
  //   "4.231",
  //   true,
  //   "2",
  //   4,
  //   "EA"
  // ),
  // new University(
  //   "uni_3",
  //   "İhsan Doğramacı Bilkent Üniversitesi",
  //   "Makine Mühendisliği %100 Burslu",
  //   "542,562",
  //   "552,562",
  //   "6.573",
  //   false,
  //   "2",
  //   2,
  //   "TYT"
  // ),
  // new University(
  //   "uni_4",
  //   "Boğaziçi Üniversitesi",
  //   "Bilgisayar Mühendisliği",
  //   "572,562",
  //   "582,562",
  //   "4.231",
  //   true,
  //   "1",
  //   4,
  //   "SAY"
  // ),
  // new University(
  //   "uni_5",
  //   "Marmara Üniversitesi,",
  //   "Hukuk",
  //   "511,364",
  //   "521,364",
  //   "6.131",
  //   true,
  //   "1",
  //   2,
  //   "TYT"
  // ),
  // new University(
  //   "uni_6",
  //   "Koç Üniversitesi",
  //   "Elektrik Elektronik Mühendisiği",
  //   "612,870",
  //   "622,870",
  //   "1.012",
  //   false,
  //   "1",
  //   2,
  //   "TYT"
  // ),

  // ---------------Gerçek veriler: ----------------------
  // Önlisanslar
  new University(
    "uni_1", // id
    "ABDULLAH GÜL ÜNİVERSİTESİ", // name - okul ismi
    "Bilgisayar Mühendisliği (İngilizce)", //department - bölüm
    "461,36797", // score - taban puan
    "44996", // placement - sıralama
    "70", // quota - kontenjan
    true, // isState - devlet/vakıf/özel
    "47", // city - şehir
    4, // universityYear - lisans/önlisans
    "SAY" // scoreType - puan türü
  ),
  new University(
    "uni_2", // id
    "ABDULLAH GÜL ÜNİVERSİTESİ", // name - okul ismi
    "Biyomühendislik (İngilizce)", //department - bölüm
    "307,3526", // score - taban puan
    "237510", // placement - sıralama
    "60", // quota - kontenjan
    true, // isState - devlet/vakıf/özel
    "47", // city - şehir
    4, // universityYear - lisans/önlisans
    "SAY" // scoreType - puan türü
  ),
  new University(
    "uni_3", // id
    "ABDULLAH GÜL ÜNİVERSİTESİ", // name - okul ismi
    "Ekonomi (İngilizce)", //department - bölüm
    "304,85353", // score - taban puan
    "273962", // placement - sıralama
    "50", // quota - kontenjan
    true, // isState - devlet/vakıf/özel
    "47", // city - şehir
    4, // universityYear - lisans/önlisans
    "EA" // scoreType - puan türü
  ),
  new University(
    "uni_4", // id
    "ABDULLAH GÜL ÜNİVERSİTESİ", // name - okul ismi
    "Elektrik-Elektronik Mühendisliği (İngilizce)", //department - bölüm
    "439,05567", // score - taban puan
    "64104", // placement - sıralama
    "70", // quota - kontenjan
    true, // isState - devlet/vakıf/özel
    "47", // city - şehir
    4, // universityYear - lisans/önlisans
    "SAY" // scoreType - puan türü
  ),
  new University(
    "uni_5", // id
    "ABDULLAH GÜL ÜNİVERSİTESİ", // name - okul ismi
    "Endüstri Mühendisliği (İngilizce)", //department - bölüm
    "413,32107", // score - taban puan
    "87132", // placement - sıralama
    "60", // quota - kontenjan
    true, // isState - devlet/vakıf/özel
    "47", // city - şehir
    4, // universityYear - lisans/önlisans
    "SAY" // scoreType - puan türü
  ),
  new University(
    "uni_5", // id
    "ABDULLAH GÜL ÜNİVERSİTESİ", // name - okul ismi
    "İnşaat Mühendisliği (İngilizce)", //department - bölüm
    "287,94296", // score - taban puan
    "287008", // placement - sıralama
    "60", // quota - kontenjan
    true, // isState - devlet/vakıf/özel
    "47", // city - şehir
    4, // universityYear - lisans/önlisans
    "SAY" // scoreType - puan türü
  ),
  new University(
    "uni_6", // id
    "ABDULLAH GÜL ÜNİVERSİTESİ", // name - okul ismi
    "İşletme (İngilizce)", //department - bölüm
    "320,65151", // score - taban puan
    "216934", // placement - sıralama
    "60", // quota - kontenjan
    true, // isState - devlet/vakıf/özel
    "47", // city - şehir
    4, // universityYear - lisans/önlisans
    "EA" // scoreType - puan türü
  ),
  new University(
    "uni_7", // id
    "ABDULLAH GÜL ÜNİVERSİTESİ", // name - okul ismi
    "Makine Mühendisliği (İngilizce)", //department - bölüm
    "401,03082", // score - taban puan
    "98950", // placement - sıralama
    "60", // quota - kontenjan
    true, // isState - devlet/vakıf/özel
    "47", // city - şehir
    4, // universityYear - lisans/önlisans
    "SAY" // scoreType - puan türü
  ),
];
