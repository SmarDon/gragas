// summonerAPI test
import SummonerAPI from '../../src/endpoints/summoner';

test('summoner', () => {
  const summoner = new SummonerAPI('API_KEY');
  expect(summoner).toBeDefined();
  expect(summoner.getSummonerByName).toBeInstanceOf(Function);
  expect(summoner.getSummonerByPuuid).toBeInstanceOf(Function);
});
