import Gragas from '../../src/gragas';
import dotenv from 'dotenv';
dotenv.config();

import {
  SummonerAPI,
  MatchAPI,
  StatusAPI,
} from '../../src/endpoints/endpoints';
test('gragas', async () => {
  const apiKey = process.env.RIOT_API_KEY || '';
  const gragas = new Gragas(apiKey, 'EUW');
  const summoner = await gragas.summoner.getSummonerByName('T1 Faker', 'KR');
  console.log(summoner);
});
