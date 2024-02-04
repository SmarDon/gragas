import axios from 'axios';
import { REGION_BASE_URLS, ACCOUNT } from '../helpers/constants';
import { RiotId } from '../types';

export default class AccountAPI {
  private apiKey: string;
  public region: string;

  constructor(apiKey: string, region: string = 'EUW') {
    this.region = region;
    this.apiKey = apiKey;
  }
  async getPuuid(name: string, tag: string): Promise<RiotId | null> {
    const url = REGION_BASE_URLS[this.region] + ACCOUNT + `${name}/${tag}`;
    try {
      const response = await axios.get(url, {
        headers: {
          'X-Riot-Token': this.apiKey,
        },
      });
      return response.data as RiotId;
    } catch (error) {
      console.error('Error fetching account:', error);
    }
    return null;
  }
}
