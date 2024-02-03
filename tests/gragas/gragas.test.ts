import Gragas from '../../src/gragas';
import {
  SummonerAPI,
  MatchAPI,
  StatusAPI,
} from '../../src/endpoints/endpoints';
test('gragas', () => {
  const gragas = new Gragas('API_KEY', 'EUW');
  expect(gragas).toBeDefined();
  expect(gragas.status).toBeInstanceOf(StatusAPI);
  expect(gragas.summoner).toBeInstanceOf(SummonerAPI);
  expect(gragas.match).toBeInstanceOf(MatchAPI);
});
