import { AmenitiesModel } from '@/model/AmenitiesModel';
import axios from 'axios';
import Constants from '../common/Constants';
class AmenitieService {
  private ListOfAmenities: AmenitiesModel[] = [];
  private instance = axios.create({
    baseURL: Constants.API_BASE_URL,
    timeout: Constants.API_TIMEOUT,
  });
  public async getAmenitiesList(): Promise<AmenitiesModel[]> {
    try {
      const response = await this.instance.get('data.json');
      this.ListOfAmenities = response.data.AmenitiesList;
    } catch (err) {
      throw (err);
    }
    return this.ListOfAmenities;
  }
}
export default new AmenitieService();
