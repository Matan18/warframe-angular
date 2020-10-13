

// https://api.warframestat.us/pc/alerts
export interface IAlerts {
  mission: {
    reward: {
      countedItems: [
        {
          count: number,
          type: string
        }
      ],
      thumbnail: string,
      color: number,
      credits: number,
      asString: string,
      items: [
        {}
      ],
      itemString: string
    },
    node: string,
    faction: string,
    maxEnemyLevel: number,
    minEnemyLevel: number,
    maxWaveNum: number,
    type: string,
    nightmare: boolean,
    archwingRequired: boolean,
    isSharkwing: boolean,
    enemySpec: string,
    levelOverride: string,
    advancedSpawners: [string],
    requiredItems: [string],
    consumeRequiredItems: boolean,
    leadersAlwaysAllowed: boolean,
    levelAuras: [string]
  },
  expired: boolean,
  eta: string,
  id: string,
  expiry: string, // Timestamp
  activation: string, //Timestamp
  rewardTypes: [
    string
  ]
}


// https://api.warframestat.us/pc/persistentEnemies
// Commonly array
export interface IPersistentEnemies {
  locationTag: string,
  agentType: string,
  rank: number,
  healthPercent: number,
  fleeDamage: number,
  region: string,
  lastDiscoveredTime: string,
  lastDiscoveredAt: string,
  isDiscovered: boolean,
  isUsingTicketing: boolean,
  pid: string
}

// https://api.warframestat.us/pc/arbitration
export interface IArbitrationData {
  activation: string,
  expiry: string,
  enemy: string,
  type: string,
  archwing: boolean,
  sharkwing: boolean,
  node: string
}

// https://api.warframestat.us/pc/cetusCycle
export interface ICetusStatus {
  id: string,
  expiry: string,
  activation: string,
  isDay: boolean,
  state: string,
  timeLeft: string,
  isCetus: boolean,
  shortString: string
}

// https://api.warframestat.us/pc/conclaveChallenges
// commonly array
export interface IConclaveChallengData {
  id: string,
  expiry: string,
  activation: string,
  amount: number,
  mode: string,
  category: string,
  eta: string,
  expired: boolean,
  daily: boolean,
  rootChallenge: boolean,
  endString: string,
  description: string,
  title: string,
  standing: number,
  asString: string
}

// https://api.warframestat.us/pc/constructionProgress
export interface IConstructionProgress {
  id: string,
  fomorianProgress: string,
  razorbackProgress: string,
  unknownProgress: string
}


//https://api.warframestat.us/pc/earthCycle
export interface IEarthCycle {
  id: string,
  expiry: string,
  activation: string,
  isDay: boolean,
  state: string,
  timeLeft: string
}

// https://api.warframestat.us/pc/globalUpgrades
// Commonly array
export interface IGlobalUpdates {
  start: string,
  end: string,
  upgrade: string,
  operation: string,
  operationSymbol: string,
  upgradeOperationValue: number,
  expired: boolean,
  eta: string,
  desc: string
}




// https://api.warframestat.us/pc/events
export interface IEvents {
  activation: string,
  expiry: string,
  maximumScore: 0,
  currentScore: 0,
  smallInterval: 0,
  largeInterval: 0,
  faction: string,
  description: string,
  tooltip: string,
  node: string,
  concurrentNodes: [
    string
  ],
  victimNode: string,
  scoreLocTag: string,
  rewards: [
    {
      countedItems: [
        {
          count: number,
          type: string
        }
      ],
      thumbnail: string,
      color: number,
      credits: number,
      asString: string,
      items: [
        {}
      ],
      itemString: string
    }
  ],
  expired: true,
  health: number,
  affiliatedWith: string,
  jobs: [
    {
      activation: string,
      expiry: string,
      rewardPool: [
        string
      ],
      type: string,
      enemyLevels: [
        number
      ],
      standingStages: [
        number
      ],
      minMR: number
    }
  ],
  interimSteps: [
    {
      goal: number,
      reward: {
        countedItems: [
          {
            count: number,
            type: string
          }
        ],
        thumbnail: string,
        color: number,
        credits: number,
        asString: string,
        items: [
          {}
        ],
        itemString: string
      },
      message: {
        sender: string,
        subject: string,
        message: string,
        senderIcon: string,
        attachments: [
          string
        ]
      },
      winnerCount: number
    }
  ],
  progressSteps: {
    type: string,
    progressAmt: number
  },
  progressTotal: number,
  showTotalAtEndOfMission: true,
  isPersonal: true,
  isCommunity: true,
  regionDrops: [
    string
  ],
  archwingDrops: [
    string
  ],
  asString: string,
  metadata: {},
  completionBonuses: [
    number
  ],
  scoreVar: string,
  altExpiry: string,
  altActivation: string,
  nextAlt: {
    expiry: string,
    activation: string
  }
}

// https://api.warframestat.us/pc/news
// Commonly array
export interface INews {
  id: string,
  message: string,
  link: string,
  imageLink: string,
  priority: boolean,
  date: string,
  eta: string,
  update: boolean,
  primeAccess: boolean,
  stream: boolean,
  translations: {
    fr: string,
    it: string,
    de: string,
    pt: string,
    ru: string,
    pl: string,
    tr: string,
    zh: string,
    ko: string,
    tc: string
  },
  asString: string
}

// https://api.warframestat.us/pc/nightwave
export interface INightwave {
  id: string,
  activation: string,
  expiry: string,
  params: {},
  rewardTypes: [
    string
  ],
  season: number,
  tag: string,
  phase: number,
  possibleChallenges: [
    {
      id: string,
      activation: string,
      expiry: string,
      isDaily: number,
      isElite: number,
      title: string,
      desc: string,
      reputation: number
    }
  ],
  activeChallenges: [
    {
      id: string,
      activation: string,
      expiry: string,
      isDaily: number,
      isElite: number,
      title: string,
      desc: string,
      reputation: number
    }
  ]
}


export interface IInvasions {
  defenderReward: {
    countedItems: [
      {
        count: number,
        type: string
      }
    ],
    thumbnail: string,
    color: number,
    credits: number,
    asString: string,
    items: [
      {}
    ],
    itemString: string
  },
  attackingFaction: string,
  completion: number,
  attackerReward: {
    countedItems: [
      {
        count: number,
        type: string
      }
    ],
    thumbnail: string,
    color: number,
    credits: number,
    asString: string,
    items: [
      {}
    ],
    itemString: string
  },
  count: number,
  completed: true,
  requiredRuns: number,
  vsInfestation: true,
  node: string,
  eta: string,
  defendingFaction: string,
  id: string,
  activation: string,
  rewardTypes: [
    string
  ],
  desc: string
}


// https://api.warframestat.us/pc/kuva
// Commonly array
export interface IKuva {
  activation: string,
  expiry: string,
  node: string,
  enemy: string,
  type: string,
  node_type: string,
  archwing: boolean,
  sharkwing: boolean
}





// https://api.warframestat.us/pc/fissures
// Commonly array
export interface IFissure {
  id: string,
  activation: string,
  startString: string,
  expiry: string,
  active: boolean,
  node: string,
  missionType: string,
  enemy: string,
  tier: string,
  tierNum: number,
  expired: boolean,
  eta: string
}


export interface IArcane {
  regex: string,
  name: string,
  effect: string,
  rarity: string,
  location: string,
  thumbnail: string,
  info: string
}


// https://api.warframestat.us/pc/flashSales
// Commonly array
export interface IDarvoSales {
  item: string,
  expiry: string,
  activation: string,
  discount: number,
  regularOverride: number,
  premiumOverride: number,
  isShownInMarket: boolean,
  isFeatured: boolean,
  isPopular: boolean,
  id: string,
  expired: boolean,
  eta: string
}

// Commonly Array
export interface IWarframe {
  uniqueName: string,
  name: string,
  description: string,
  health: number,
  shield: number,
  armor: number,
  stamina: number,
  power: number,
  masteryReq: number,
  sprintSpeed: number,
  passiveDescription: string,
  abilities: [
    {
      name: string,
      description: string
    },
  ],
  productCategory: string,
  buildPrice: number,
  buildTime: number,
  skipBuildTimePrice: number,
  buildQuantity: number,
  consumeOnBuild: boolean,
  components: [
    {
      uniqueName: string,
      name: string,
      description: string,
      itemCount: number,
      imageName: string,
      tradable: boolean
      drops: [
        {
          location: string,
          type: string,
          rarity: string,
          chance: number,
          rotation: string
        },
      ]
    },
  ],
  type: string,
  imageName: string,
  category: string,
  tradable: boolean,
  patchlogs: [
    {
      name: string,
      date: string,
      url: string,
      imgUrl: string,
      additions: string,
      changes: string,
      fixes: string
    },
  ],
  aura: string,
  conclave: boolean,
  color: number,
  introduced: string,
  polarities: [
    string,
    string
  ],
  sex: string,
  sprint: number,
  wikiaThumbnail: string,
  wikiaUrl: string
}

// Commonly Array
export interface IWeapon {
  name: string,
  uniqueName: string,
  secondsPerShot: number,
  dmagePerShot: [
    number
  ],
  magazineSize: number,
  reloadTime: number,
  totalDamage: number,
  damagePerSecond: number,
  trigger: string,
  description: string,
  accuracy: number,
  criticalChance: number,
  criticalMultiplier: number,
  procChance: number,
  fireRate: number,
  slot: number,
  noise: string,
  sentinel: true,
  masteryReq: number,
  omegaAttenuation: number,
  type: string,
  buildPrice: number,
  buildTime: number,
  skipBuildTimePrice: number,
  buildQuantity: number,
  consumeOnBuild: true,
  components: {
    name: string,
    uniqueName: string
  },
  imageName: string,
  category: string,
  tradable: true,
  patchlogs: {
    name: string,
    date: string,
    url: string,
    additions: string,
    changes: string,
    fixes: string
  },
  ammo: number,
  damage: number,
  damageTypes: {
    impact: number,
    puncture: number,
    slash: number,
    heat: number,
    cold: number,
    electric: number,
    toxin: number,
    gas: number,
    viral: number,
    corrosive: number,
    blast: number,
    magnetic: number,
    radiation: number,
    true: number,
    void: number
  },
  flight: number,
  polarities: string,
  projectile: string,
  tags: [
    string
  ],
  vaulted: true,
  wikiaThumbnail: string,
  wikiaUrl: string,
  disposition: number,
  releaseDate: string,
  vaultDate: string
}