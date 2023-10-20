import axios from 'axios';
import { API_ENDPOINT_GEORIMA } from '../global/api_endpoint';

const {
  GET_LIST_POTENSI,

  // Batu Bara
  GET_LIST_BATU_BARA,
  GET_ALL_BATU_BARA,
  GET_BATU_BARA_RENDAH,
  GET_BATU_BARA_SEDANG,
  GET_BATU_BARA_TINGGI,
  GET_BATU_BARA_SANGAT_TINGGI,

  // Panas Bumi
  GET_LIST_PANAS_BUMI,
  GET_PENDAHULUAN_AWAL,
  GET_PENDAHULUAN,
  GET_RINCI,
  GET_SIAP_DIKEMBANGKAN,
  GET_TERPASANG,

  // Mineral Logam
  GET_LIST_MINERAL_LOGAM,

  // Logam Dasar
  GET_AIR_RAKSA,
  GET_ANTIMON,
  GET_SENG,
  GET_TEMBAGA,
  GET_TIMAH,
  GET_TIMBAL,

  // Logam Mulia
  GET_EMAS_ALLUVIAL,
  GET_EMAS_PRIMER,
  GET_PERAK,
  GET_PLATINA,

  // Logam Besi Paduan Besi
  GET_BESI_LATERIT,
  GET_BESI_PRIMER,
  GET_BESI_SEDIMEN,
  GET_KOBAL,
  GET_KROMIT,
  GET_KROMIT_PLASER,
  GET_MANGAN,
  GET_MOLIBDENUM,
  GET_NIKEL,
  GET_PASIR_BESI,
  GET_VANADIUM,

  // Logam Ringan
  GET_BAUKSIT,
  GET_MONASIT,
  GET_TITAN_PLASER,
  GET_TITAN_LATERIT,
  GET_XENOTIM,

  // Mineral Bukan Logam
  GET_LIST_MINERAL_BUKAN_LOGAM,

  // Batu Mulia
  GET_AMETIS,
  GET_BATU_HIAS,
  GET_INTAN,
  GET_JASPER,
  GET_KALSEDON,
  GET_ONIKS,
  GET_OPAL,
  GET_RIJANG,

  // Bahan Bangunan
  GET_ANDESIT,
  GET_BASAL,
  GET_BATU_SABAK,
  GET_DASIT,
  GET_DIORIT,
  GET_DOLOMIT,
  GET_GRANIT,
  GET_GRANODIORIT,
  GET_MARMER,
  GET_PASIR_LAUT,
  GET_PERIDOTIT,
  GET_SIRTU,
  GET_TRAS,

  // Bahan Keramik
  GET_BALL_BOND_CLAY,
  GET_FELSPAR,
  GET_KAOLIN,
  GET_LEMPUNG,
  GET_MAGNESIT,
  GET_OBSIDIAN,
  GET_PERLIT,
  GET_PIROFILIT,
  GET_TOSEKI,
  GET_TRAKHIT,

  // Mineral Industri
  GET_BARIT,
  GET_BATUAN_PEMBAWA_KALIUM,
  GET_BATU_APUNG,
  GET_BATU_GAMPING,
  GET_BATU_KUARSA,
  GET_BELERANG,
  GET_BENTONIT,
  GET_DIATOMEA,
  GET_FOSFAT,
  GET_GIPSUM,
  GET_KALSIT,
  GET_KUARSIT,
  GET_OKER,
  GET_PASIRKUARSA,
  GET_PASIR_ZIRKON,
  GET_PREHNIT,
  GET_SERPENTIN,
  GET_TALK,
  GET_TRAVERTIN,
  GET_ULTRABASA,
  GET_YODIUM,
  GET_ZEOLIT,
} = API_ENDPOINT_GEORIMA;

class sourceGeoRIMA {
  static async getListPotensi() {
    const response = await axios.get(GET_LIST_POTENSI);
    return response.data.data;
  }

  // Batubara
  static async getListBatuBara() {
    const response = await axios.get(GET_LIST_BATU_BARA);
    return response.data.data;
  }

  static async getAllBatuBara() {
    const response = await axios.get(GET_ALL_BATU_BARA);
    return response.data.data;
  }

  static async getBatuBaraRendah() {
    const response = await axios.get(GET_BATU_BARA_RENDAH);
    return response.data.data;
  }

  static async getBatuBaraSedang() {
    const response = await axios.get(GET_BATU_BARA_SEDANG);
    return response.data.data;
  }

  static async getBatuBaraTinggi() {
    const response = await axios.get(GET_BATU_BARA_TINGGI);
    return response.data.data;
  }

  static async getBatuBaraSangatTinggi() {
    const response = await axios.get(GET_BATU_BARA_SANGAT_TINGGI);
    return response.data.data;
  }

  // Panas Bumi
  static async getListPanaBumi() {
    const response = await axios.get(GET_LIST_PANAS_BUMI);
    return response.data.data;
  }

  static async getPendahuluanAwal() {
    const response = await axios.get(GET_PENDAHULUAN_AWAL);
    return response.data.data;
  }

  static async getPendahuluan() {
    const response = await axios.get(GET_PENDAHULUAN);
    return response.data.data;
  }

  static async getRinci() {
    const response = await axios.get(GET_RINCI);
    return response.data.data;
  }

  static async getSiapDikembangkan() {
    const response = await axios.get(GET_SIAP_DIKEMBANGKAN);
    return response.data.data;
  }

  static async getTerpasang() {
    const response = await axios.get(GET_TERPASANG);
    return response.data.data;
  }

  // Mineral Logam
  static async getListMineralLogam() {
    const response = await axios.get(GET_LIST_MINERAL_LOGAM);
    return response.data.data;
  }

  // Logam Dasar
  static async getAirRaksa() {
    const response = await axios.get(GET_AIR_RAKSA);
    return response.data.data;
  }

  static async getAntimon() {
    const response = await axios.get(GET_ANTIMON);
    return response.data.data;
  }

  static async getSeng() {
    const response = await axios.get(GET_SENG);
    return response.data.data;
  }

  static async getTembaga() {
    const response = await axios.get(GET_TEMBAGA);
    return response.data.data;
  }

  static async getTimah() {
    const response = await axios.get(GET_TIMAH);
    return response.data.data;
  }

  static async getTimbal() {
    const response = await axios.get(GET_TIMBAL);
    return response.data.data;
  }

  // Logam Mulia
  static async getEmasAlluvial() {
    const response = await axios.get(GET_EMAS_ALLUVIAL);
    return response.data.data;
  }

  static async getEmasPrimer() {
    const response = await axios.get(GET_EMAS_PRIMER);
    return response.data.data;
  }

  static async getPerak() {
    const response = await axios.get(GET_PERAK);
    return response.data.data;
  }

  static async getPlatina() {
    const response = await axios.get(GET_PLATINA);
    return response.data.data;
  }

  // Logam Besi Paduan Besi
  static async getBesiLaterit() {
    const response = await axios.get(GET_BESI_LATERIT);
    return response.data.data;
  }

  static async getBesiPrimer() {
    const response = await axios.get(GET_BESI_PRIMER);
    return response.data.data;
  }

  static async getBesiSedimen() {
    const response = await axios.get(GET_BESI_SEDIMEN);
    return response.data.data;
  }

  static async getKobal() {
    const response = await axios.get(GET_KOBAL);
    return response.data.data;
  }

  static async getKromit() {
    const response = await axios.get(GET_KROMIT);
    return response.data.data;
  }

  static async getKromitPlaser() {
    const response = await axios.get(GET_KROMIT_PLASER);
    return response.data.data;
  }

  static async getMangan() {
    const response = await axios.get(GET_MANGAN);
    return response.data.data;
  }

  static async getMolibdenum() {
    const response = await axios.get(GET_MOLIBDENUM);
    return response.data.data;
  }

  static async getNikel() {
    const response = await axios.get(GET_NIKEL);
    return response.data.data;
  }

  static async getPasirBesi() {
    const response = await axios.get(GET_PASIR_BESI);
    return response.data.data;
  }

  static async getVanadium() {
    const response = await axios.get(GET_VANADIUM);
    return response.data.data;
  }

  // Logam Ringan
  static async getBauksit() {
    const response = await axios.get(GET_BAUKSIT);
    return response.data.data;
  }

  static async getMonasit() {
    const response = await axios.get(GET_MONASIT);
    return response.data.data;
  }

  static async getTitanPlaser() {
    const response = await axios.get(GET_TITAN_PLASER);
    return response.data.data;
  }

  static async getTitanLaterit() {
    const response = await axios.get(GET_TITAN_LATERIT);
    return response.data.data;
  }

  static async getXenotim() {
    const response = await axios.get(GET_XENOTIM);
    return response.data.data;
  }

  // Mineral Bukan Logam
  static async getListMineralBukanLogam() {
    const response = await axios.get(GET_LIST_MINERAL_BUKAN_LOGAM);
    return response.data.data;
  }

  // Batu Mulia
  static async getAmetis() {
    const response = await axios.get(GET_AMETIS);
    return response.data.data;
  }

  static async getBatuHias() {
    const response = await axios.get(GET_BATU_HIAS);
    return response.data.data;
  }

  static async getIntan() {
    const response = await axios.get(GET_INTAN);
    return response.data.data;
  }

  static async getJasper() {
    const response = await axios.get(GET_JASPER);
    return response.data.data;
  }

  static async getKalsedon() {
    const response = await axios.get(GET_KALSEDON);
    return response.data.data;
  }

  static async getOniks() {
    const response = await axios.get(GET_ONIKS);
    return response.data.data;
  }

  static async getOpal() {
    const response = await axios.get(GET_OPAL);
    return response.data.data;
  }

  static async getRijang() {
    const response = await axios.get(GET_RIJANG);
    return response.data.data;
  }

  // Bahan Bangunan
  static async getAndesit() {
    const response = await axios.get(GET_ANDESIT);
    return response.data.data;
  }

  static async getBasal() {
    const response = await axios.get(GET_BASAL);
    return response.data.data;
  }

  static async getBatuSabak() {
    const response = await axios.get(GET_BATU_SABAK);
    return response.data.data;
  }

  static async getDasit() {
    const response = await axios.get(GET_DASIT);
    return response.data.data;
  }

  static async getDiorit() {
    const response = await axios.get(GET_DIORIT);
    return response.data.data;
  }

  static async getDolomit() {
    const response = await axios.get(GET_DOLOMIT);
    return response.data.data;
  }

  static async getGranit() {
    const response = await axios.get(GET_GRANIT);
    return response.data.data;
  }

  static async getGranodiorit() {
    const response = await axios.get(GET_GRANODIORIT);
    return response.data.data;
  }

  static async getMarmer() {
    const response = await axios.get(GET_MARMER);
    return response.data.data;
  }

  static async getPasirLaut() {
    const response = await axios.get(GET_PASIR_LAUT);
    return response.data.data;
  }

  static async getPeridotit() {
    const response = await axios.get(GET_PERIDOTIT);
    return response.data.data;
  }

  static async getSirtu() {
    const response = await axios.get(GET_SIRTU);
    return response.data.data;
  }

  static async getTras() {
    const response = await axios.get(GET_TRAS);
    return response.data.data;
  }

  // Get Bahan Keramik
  static async getBallBondClay() {
    const response = await axios.get(GET_BALL_BOND_CLAY);
    return response.data.data;
  }

  static async getFelspar() {
    const response = await axios.get(GET_FELSPAR);
    return response.data.data;
  }

  static async getKaolin() {
    const response = await axios.get(GET_KAOLIN);
    return response.data.data;
  }

  static async getLempung() {
    const response = await axios.get(GET_LEMPUNG);
    return response.data.data;
  }

  static async getMagnesit() {
    const response = await axios.get(GET_MAGNESIT);
    return response.data.data;
  }

  static async getObsidian() {
    const response = await axios.get(GET_OBSIDIAN);
    return response.data.data;
  }

  static async getPerlit() {
    const response = await axios.get(GET_PERLIT);
    return response.data.data;
  }

  static async getPirofilit() {
    const response = await axios.get(GET_PIROFILIT);
    return response.data.data;
  }

  static async getToseki() {
    const response = await axios.get(GET_TOSEKI);
    return response.data.data;
  }

  static async getTrakhit() {
    const response = await axios.get(GET_TRAKHIT);
    return response.data.data;
  }

  // Mineral Industri
  static async getBarit() {
    const response = await axios.get(GET_BARIT);
    return response.data.data;
  }

  static async getBatuanPembawaKalium() {
    const response = await axios.get(GET_BATUAN_PEMBAWA_KALIUM);
    return response.data.data;
  }

  static async getBatuApung() {
    const response = await axios.get(GET_BATU_APUNG);
    return response.data.data;
  }

  static async getBatuGamping() {
    const response = await axios.get(GET_BATU_GAMPING);
    return response.data.data;
  }

  static async getBatuKuarsa() {
    const response = await axios.get(GET_BATU_KUARSA);
    return response.data.data;
  }

  static async getBelerang() {
    const response = await axios.get(GET_BELERANG);
    return response.data.data;
  }

  static async getBentonit() {
    const response = await axios.get(GET_BENTONIT);
    return response.data.data;
  }

  static async getDiatomea() {
    const response = await axios.get(GET_DIATOMEA);
    return response.data.data;
  }

  static async getFosfat() {
    const response = await axios.get(GET_FOSFAT);
    return response.data.data;
  }

  static async getGipsum() {
    const response = await axios.get(GET_GIPSUM);
    return response.data.data;
  }

  static async getKalsit() {
    const response = await axios.get(GET_KALSIT);
    return response.data.data;
  }

  static async getKuarsit() {
    const response = await axios.get(GET_KUARSIT);
    return response.data.data;
  }

  static async getOker() {
    const response = await axios.get(GET_OKER);
    return response.data.data;
  }

  static async getPasirKuarsa() {
    const response = await axios.get(GET_PASIRKUARSA);
    return response.data.data;
  }

  static async getPasirZirkon() {
    const response = await axios.get(GET_PASIR_ZIRKON);
    return response.data.data;
  }

  static async getPrehnit() {
    const response = await axios.get(GET_PREHNIT);
    return response.data.data;
  }

  static async getSerpentin() {
    const response = await axios.get(GET_SERPENTIN);
    return response.data.data;
  }

  static async getTalk() {
    const response = await axios.get(GET_TALK);
    return response.data.data;
  }

  static async getTravertin() {
    const response = await axios.get(GET_TRAVERTIN);
    return response.data.data;
  }

  static async getUltrabasa() {
    const response = await axios.get(GET_ULTRABASA);
    return response.data.data;
  }

  static async getYodium() {
    const response = await axios.get(GET_YODIUM);
    return response.data.data;
  }

  static async getZeolit() {
    const response = await axios.get(GET_ZEOLIT);
    return response.data.data;
  }
}

export default sourceGeoRIMA;
