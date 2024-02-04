// @ts-nocheck

import Gragas from '../../src/gragas';
import dotenv from 'dotenv';
dotenv.config();

test('gragas', async () => {
  const apiKey = process.env.RIOT_API_KEY || '';

  const gragas = new Gragas(apiKey, 'EUW');

  const summoner =
    (await gragas.summoner.getSummonerByName('SmarDon', 'EUW')) || null;
  const matches = await gragas.match.getMatchesByPuuid(summoner?.puuid, 20, 0);
  const match = await gragas.match.getMatchById(matches[0]);
  console.log(match);
});
