export const APP_CONFIG = {
  name: 'PitchAtlas',

  description:
    'Immersive football analytics platform inspired by terrain exploration.',

  api: {
    footballDataBaseUrl: 'https://api.football-data.org/v4',

    apiFootballBaseUrl: 'https://v3.football.api-sports.io',

    unsplashBaseUrl: 'https://api.unsplash.com',
  },

  storage: {
    favorites: 'pitchAtlas-favorites',
    dashboard: 'pitchAtlas-dashboard',
    recentSearches: 'pitchAtlas-recent-searches',
  },

  defaults: {
    leagueCode: 'PL',
    matchesLimit: 10,
    chartAnimationDuration: 1200,
  },
} as const
