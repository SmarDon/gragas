import axios from 'axios';
import { Summoner } from '../types';
import * as constants from '../constants';

export class SummonerAPI {
  private apiKey: string;
  private url: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.url = constants.RIOT_API_BASE_URL + constants.SUMMONER_BASE_URL;
  }

  async getSummonerByName(summonerName: string): Promise<Summoner | null> {
    try {
      const response = await axios.get(`${this.url}/by-name/${summonerName}`, {
        headers: {
          'X-Riot-Token': this.apiKey,
        },
      });
      console.log(response.data);
      return response.data as Summoner;
    } catch (error) {
      console.error('Error fetching summoner:', error);
      return null;
    }
  }

  async getSummonerByPuuid(puuid: string): Promise<Summoner | null> {
    try {
      const response = await axios.get(`${this.url}/by-puuid/${puuid}`, {
        headers: {
          'X-Riot-Token': this.apiKey,
        },
      });

      return response.data as Summoner;
    } catch (error) {
      console.error('Error fetching summoner:', error);
      return null;
    }
  }
}
