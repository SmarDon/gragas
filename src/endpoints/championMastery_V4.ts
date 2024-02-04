import axios from 'axios';
import { PLATFORM_BASE_URLS, CHAMPION_MASTERY } from '../helpers/constants';
import { ChampionMastery } from '../types';

export default class ChampionMastery_V4 {
  private apiKey: string;
  public region: string;
  constructor(apiKey: string, region: string = 'EUW') {
    this.apiKey = apiKey;
    this.region = region;
  }
  async getChampionMasteryByPuuid(
    puuid: string
  ): Promise<ChampionMastery[] | null> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[this.region] + CHAMPION_MASTERY.BY_PUUID + puuid,
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching champion mastery:', error);
    }
    return null;
  }
  async getChampionMasteryByChampionId(
    puuid: string,
    championId: number
  ): Promise<ChampionMastery | null> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[this.region] +
          CHAMPION_MASTERY.BY_PUUID +
          puuid +
          '/by-champion' +
          championId,
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching champion mastery by champion:', error);
    }
    return null;
  }
  async getChampionMasteryTop(
    puuid: string
  ): Promise<ChampionMastery[] | null> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[this.region] +
          CHAMPION_MASTERY.BY_PUUID +
          puuid +
          '/top',
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching top champion mastery:', error);
    }
    return null;
  }
  async getChampionMasteryScores(
    puuid: string
  ): Promise<ChampionMastery[] | null> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[this.region] + CHAMPION_MASTERY.SCORES + puuid,
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching champion mastery scores:', error);
    }
    return null;
  }
}
