import {
  Summoner_V4,
  Match_V5,
  Status_V4,
  ChampionMastery_V4,
  Account_V1,
  League_V4,
  LolChallenges_V1,
  Spectator_V4,
} from './endpoints/endpoints';

export default class Gragas {
  #apiKey: string;
  public region: string;
  public status: Status_V4;
  public summoner: Summoner_V4;
  public match: Match_V5;
  public championMastery: ChampionMastery_V4;
  public account: Account_V1;
  public league: League_V4;
  public lolChallenges: LolChallenges_V1;
  public spectator: Spectator_V4;

  constructor(apiKey: string, region: string = 'EUW') {
    this.#apiKey = apiKey;
    this.region = region;
    this.status = new Status_V4(apiKey);
    this.summoner = new Summoner_V4(apiKey);
    this.match = new Match_V5(apiKey);
    this.championMastery = new ChampionMastery_V4(apiKey);
    this.account = new Account_V1(apiKey);
    this.league = new League_V4(apiKey);
    this.lolChallenges = new LolChallenges_V1(apiKey);
    this.spectator = new Spectator_V4(apiKey);
  }
}
