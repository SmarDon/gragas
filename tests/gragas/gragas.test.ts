import Gragas from '../../src/gragas';
import {
  SummonerAPI,
  MatchAPI,
  StatusAPI,
} from '../../src/endpoints/endpoints';
test('gragas', async () => {
  const gragas = new Gragas('API_KEY', 'EUW');
  const summoner = await gragas.summoner.getSummonerByName('T1 Faker', 'KR');
  console.log(summoner);
});
