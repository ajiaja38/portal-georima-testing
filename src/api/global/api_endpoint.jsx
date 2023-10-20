import CONFIG from './config';

const { BASE_URL_REGION, BASE_URL_GEORIMA } = CONFIG;

export const API_ENDPOINT_REGION = {
  GET_ALL_PROVINSI: `${BASE_URL_REGION}/provinsi`,
  GET_KABUPATEN: (provinsiId) =>
    `${BASE_URL_REGION}/kota?provinsi_id=${provinsiId}`,
};

export const API_ENDPOINT_GEORIMA = {
  GET_LIST_POTENSI: `${BASE_URL_GEORIMA}/data/data-georima/index.json`,

  // Batu Bara
  GET_LIST_BATU_BARA: `${BASE_URL_GEORIMA}/data/data-georima/batu_bara/index.json`,
  GET_ALL_BATU_BARA: `${BASE_URL_GEORIMA}/data/data-georima/batu_bara/all.json`,
  GET_BATU_BARA_RENDAH: `${BASE_URL_GEORIMA}/data/data-georima/batu_bara/rendah.json`,
  GET_BATU_BARA_SEDANG: `${BASE_URL_GEORIMA}/data/data-georima/batu_bara/sedang.json`,
  GET_BATU_BARA_TINGGI: `${BASE_URL_GEORIMA}/data/data-georima/batu_bara/tinggi.json`,
  GET_BATU_BARA_SANGAT_TINGGI: `${BASE_URL_GEORIMA}/data/data-georima/batu_bara/sangat_tinggi.json`,

  // Panas Bumi
  GET_LIST_PANAS_BUMI: `${BASE_URL_GEORIMA}/data/data-georima/panas_bumi/category.json`,
  GET_ALL_PANAS_BUMI: `${BASE_URL_GEORIMA}/data/data-georima/panas_bumi/index.json`,
  GET_PENDAHULUAN_AWAL: `${BASE_URL_GEORIMA}/data/data-georima/panas_bumi/survey_pendahuluan_awal.json`,
  GET_PENDAHULUAN: `${BASE_URL_GEORIMA}/data/data-georima/panas_bumi/survey_pendahuluan.json`,
  GET_RINCI: `${BASE_URL_GEORIMA}/data/data-georima/panas_bumi/survey_rinci.json`,
  GET_SIAP_DIKEMBANGKAN: `${BASE_URL_GEORIMA}/data/data-georima/panas_bumi/siap_dikembangkan.json`,
  GET_TERPASANG: `${BASE_URL_GEORIMA}/data/data-georima/panas_bumi/terpasang.json`,

  // Mineral Logam
  GET_LIST_MINERAL_LOGAM: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/category.json`,

  // Logam Dasar
  GET_AIR_RAKSA: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_dasar/Air Raksa.json`,
  GET_ANTIMON: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_dasar/Antimon.json`,
  GET_SENG: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_dasar/Seng.json`,
  GET_TEMBAGA: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_dasar/Tembaga.json`,
  GET_TIMAH: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_dasar/Timah.json`,
  GET_TIMBAL: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_dasar/Timbal.json`,

  // Logam Mulia
  GET_EMAS_ALLUVIAL: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_mulia/Emas Alluvial.json`,
  GET_EMAS_PRIMER: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_mulia/Emas Primer.json`,
  GET_PERAK: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_mulia/Perak.json`,
  GET_PLATINA: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_mulia/Platina.json`,

  // Logam Besi Paduan Besi
  GET_BESI_LATERIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Besi Laterit.json`,
  GET_BESI_PRIMER: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Besi Primer.json`,
  GET_BESI_SEDIMEN: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Besi Sedimen.json`,
  GET_KOBAL: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Kobal.json`,
  GET_KROMIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Kromit.json`,
  GET_KROMIT_PLASER: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Kromit Plaser.json`,
  GET_MANGAN: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Mangan.json`,
  GET_MOLIBDENUM: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Molibdenum.json`,
  GET_NIKEL: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Nikel.json`,
  GET_PASIR_BESI: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Pasir Besi.json`,
  GET_VANADIUM: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/logam_besi_paduan_besi/Vanadium.json`,

  // Logam Ringan
  GET_BAUKSIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/lrl/bauksit.json`,
  GET_MONASIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/lrl/monasit.json`,
  GET_TITAN_PLASER: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/lrl/Titan Plaser.json`,
  GET_TITAN_LATERIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/lrl/Titan Laterit.json`,
  GET_XENOTIM: `${BASE_URL_GEORIMA}/data/data-georima/mineral_logam/lrl/xenotim.json`,

  // Mineral Bukan Logam
  GET_LIST_MINERAL_BUKAN_LOGAM: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/category.json`,

  // Batu Mulia
  GET_AMETIS: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/batu_mulia/Ametis.json`,
  GET_BATU_HIAS: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/batu_mulia/Batu Hias.json`,
  GET_INTAN: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/batu_mulia/Intan.json`,
  GET_JASPER: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/batu_mulia/Jasper.json`,
  GET_KALSEDON: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/batu_mulia/Kalsedon.json`,
  GET_ONIKS: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/batu_mulia/Oniks.json`,
  GET_OPAL: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/batu_mulia/Opal.json`,
  GET_RIJANG: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/batu_mulia/Rijang.json`,

  // Bahan Bangunan
  GET_ANDESIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Andesit.json`,
  GET_BASAL: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Basal.json`,
  GET_BATU_SABAK: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Batusabak.json`,
  GET_DASIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Dasit.json`,
  GET_DIORIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Diorit.json`,
  GET_DOLOMIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Dolomit.json`,
  GET_GRANIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Granit.json`,
  GET_GRANODIORIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Granodiorit.json`,
  GET_MARMER: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Marmer.json`,
  GET_PASIR_LAUT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Pasir Laut.json`,
  GET_PERIDOTIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Peridotit.json`,
  GET_SIRTU: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Peridotit.json`,
  GET_TRAS: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_bangunan/Peridotit.json`,

  // Bahan Keramik
  GET_BALL_BOND_CLAY: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_keramik/Ball - Bond Clay.json`,
  GET_FELSPAR: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_keramik/Felspar.json`,
  GET_KAOLIN: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_keramik/Kaolin.json`,
  GET_LEMPUNG: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_keramik/Lempung.json`,
  GET_MAGNESIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_keramik/Magnesit.json`,
  GET_OBSIDIAN: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_keramik/Obsidian.json`,
  GET_PERLIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_keramik/Perlit.json`,
  GET_PIROFILIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_keramik/Pirofilit.json`,
  GET_TOSEKI: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_keramik/Toseki.json`,
  GET_TRAKHIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/bahan_keramik/Trakhit.json`,

  // Mineral Industri
  GET_BARIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Barit.json`,
  GET_BATUAN_PEMBAWA_KALIUM: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Batuan Pembawa Kalium.json`,
  GET_BATU_APUNG: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Batuapung.json`,
  GET_BATU_GAMPING: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Batugamping.json`,
  GET_BATU_KUARSA: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Batu Kuarsa.json`,
  GET_BELERANG: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Belerang.json`,
  GET_BENTONIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Bentonit.json`,
  GET_DIATOMEA: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Diatomea.json`,
  GET_FOSFAT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Fosfat.json`,
  GET_GIPSUM: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Gipsum.json`,
  GET_KALSIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Kalsit.json`,
  GET_KUARSIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Kuarsit.json`,
  GET_OKER: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Oker.json`,
  GET_PASIRKUARSA: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Pasirkuarsa.json`,
  GET_PASIR_ZIRKON: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Pasir Zirkon.json`,
  GET_PREHNIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Prehnit.json`,
  GET_SERPENTIN: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Serpentin.json`,
  GET_TALK: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Talk.json`,
  GET_TRAVERTIN: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Travertin.json`,
  GET_ULTRABASA: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Ultrabasa.json`,
  GET_YODIUM: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Yodium.json`,
  GET_ZEOLIT: `${BASE_URL_GEORIMA}/data/data-georima/mineral_bukan_logam/mineral_industri/Zeolit.json`,
};
