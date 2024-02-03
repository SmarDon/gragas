// test statusAPI.ts
import StatusAPI from '../../src/endpoints/lolStatus';

test('status', () => {
  const status = new StatusAPI('API_KEY');
  expect(status).toBeDefined();
  expect(status.getStatus).toBeInstanceOf(Function);
});
