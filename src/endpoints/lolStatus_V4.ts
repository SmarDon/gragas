import axios from 'axios';
import { STATUS } from '../helpers/constants';
import { PLATFORM_BASE_URLS } from '../helpers/constants';
import { Status } from '../types';

export default class Status_V4 {
  private apiKey: string;
  public platform: string;

  constructor(apiKey: string, platform: string = 'EUW') {
    this.apiKey = apiKey;
    this.platform = platform;
  }
  updatePlatform = (platform: string) => {
    this.platform = platform;
  };

  async getStatus(platform: string): Promise<Status | void> {
    if (this.platform !== platform) {
      this.updatePlatform(platform);
    }
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[this.platform] + STATUS,
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data as Status;
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  }
}
