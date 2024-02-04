import axios from 'axios';
import { REGION_BASE_URLS, ACCOUNT_V1 } from '../helpers/constants';
import { RiotId } from '../types';

export default class Account_V1 {
  #apiKey: string;
  public region: string;

  constructor(apiKey: string, region: string = 'EUW') {
    this.region = region;
    this.#apiKey = apiKey;
  }
  async getPuuid(name: string, tag: string): Promise<RiotId | null> {
    const url = REGION_BASE_URLS[this.region] + ACCOUNT_V1 + `${name}/${tag}`;
    try {
      const response = await axios.get(url, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data as RiotId;
    } catch (error) {
      console.error('Error fetching account:', error);
    }
    return null;
  }
}
