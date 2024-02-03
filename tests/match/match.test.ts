// tests for MatchAPI
import MatchAPI from '../../src/endpoints/match';

test('match', () => {
  const match = new MatchAPI('API_KEY');
  expect(match).toBeDefined();
  expect(match.getMatchesByPuuid).toBeInstanceOf(Function);
  expect(match.getMatchById).toBeInstanceOf(Function);
  expect(match.getMatchTimelineById).toBeInstanceOf(Function);
});
