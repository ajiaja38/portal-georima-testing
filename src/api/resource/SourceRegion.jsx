import axios from 'axios';
import { API_ENDPOINT_REGION } from '../global/api_endpoint';

const { GET_ALL_PROVINSI, GET_KABUPATEN } = API_ENDPOINT_REGION;

class SourceRegion {
  static apiKey = 'vCxf5SpLoBwTChXRchM7izgO77rch6';

  static async getProvinsi() {
    const response = await axios.get(GET_ALL_PROVINSI, {
      headers: {
        'x-api-key': SourceRegion.apiKey,
      },
    });
    return response.data.data;
  }

  static async getKabupaten(provinsiId) {
    const response = await axios.get(GET_KABUPATEN(provinsiId), {
      headers: {
        'x-api-key': SourceRegion.apiKey,
      },
    });

    return response.data.data;
  }
}

export default SourceRegion;
