## Gragas

Gragas is a small API wrapper for the RIOT api developed in typescript. Currently it only supports the League of Legends related endpoints, with the exception of the tournament endpoints.

I'm mainly just developing this for my own personal use and to learn some typescript.

# Usage examples

```
yarn add gragas

```

```
import Gragas from "gragas"

// Region will default to EUW, but as of right now, you'll have to provide regions with most of the endpoints so it doesnt really matter that much.
const gragas = new Gragas('RIOT_API_KEY')

// Since Riot has changed to use Riot ID this will only get the summoner with the tags "#EUW1", "#NA1" and so on based on platform.
const summoner = await gragas.summoner.getSummonerByName('SmarDon', 'EUW')

// This will use a name and tag to get a puuid, in this case "SmarDon" is the name and "EUW1" is the tag. This can then be used for matches etc...
const riotAccount = await gragas.account.getPuuid('SmarDon', 'EUW1')

```

# TODO:

- Fix Summoner/Riot ID related issues.
- Add endpoints for TFT and Valorant.(I don't really play those so I don't know when this will happen.)
- Fix way of handeling URLs.
- Add tests, got some locally, but should be updated and less specific before I add them to repo.
