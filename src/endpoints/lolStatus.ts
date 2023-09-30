import axios from 'axios';
import { RIOT_API_EUW_BASE_URL, STATUS_URL } from '../constants';
import { Status } from '../types';

export class StatusAPI {
  private apiKey: string;
  private url: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.url = RIOT_API_EUW_BASE_URL + STATUS_URL;
  }

  async getStatus(): Promise<Status | null> {
    try {
      const response = await axios.get(this.url, {
        headers: {
          'X-Riot-Token': this.apiKey,
        },
      });

      return response.data as Status;
    } catch (error) {
      console.error('Error fetching status:', error);
      return null;
    }
  }
}
