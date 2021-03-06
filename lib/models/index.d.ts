/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the RelatedCards class.
 * @constructor
 * @member {uuid} [id]
 * @member {string} [name]
 * @member {string} [uri]
 */
export interface RelatedCards {
  id?: string;
  name?: string;
  uri?: string;
}

/**
 * @class
 * Initializes a new instance of the ImageUri class.
 * @constructor
 * @member {string} [small]
 * @member {string} [normal]
 * @member {string} [large]
 * @member {string} [png]
 * @member {string} [artCrop]
 * @member {string} [borderCrop]
 */
export interface ImageUri {
  small?: string;
  normal?: string;
  large?: string;
  png?: string;
  artCrop?: string;
  borderCrop?: string;
}

/**
 * @class
 * Initializes a new instance of the CardFace class.
 * @constructor
 * @member {string} [name]
 * @member {string} [typeLine]
 * @member {string} [oracleText]
 * @member {string} [manaCost]
 * @member {array} [colors]
 * @member {string} [colorIndicator] Possible values include: 'W', 'U', 'B',
 * 'R', 'G'
 * @member {string} [power]
 * @member {string} [toughness]
 * @member {string} [loyalty]
 * @member {string} [flavorText]
 * @member {uuid} [illustrationId]
 * @member {object} [imageUris]
 * @member {string} [imageUris.small]
 * @member {string} [imageUris.normal]
 * @member {string} [imageUris.large]
 * @member {string} [imageUris.png]
 * @member {string} [imageUris.artCrop]
 * @member {string} [imageUris.borderCrop]
 */
export interface CardFace {
  name?: string;
  typeLine?: string;
  oracleText?: string;
  manaCost?: string;
  colors?: string[];
  colorIndicator?: string;
  power?: string;
  toughness?: string;
  loyalty?: string;
  flavorText?: string;
  illustrationId?: string;
  imageUris?: ImageUri;
}

/**
 * @class
 * Initializes a new instance of the Legality class.
 * @constructor
 * @member {string} [standard] Possible values include: 'legal', 'not_legal'
 * @member {string} [future] Possible values include: 'legal', 'not_legal'
 * @member {string} [frontier] Possible values include: 'legal', 'not_legal'
 * @member {string} [modern] Possible values include: 'legal', 'not_legal'
 * @member {string} [legacy] Possible values include: 'legal', 'not_legal'
 * @member {string} [pauper] Possible values include: 'legal', 'not_legal'
 * @member {string} [vintage] Possible values include: 'legal', 'not_legal'
 * @member {string} [penny] Possible values include: 'legal', 'not_legal'
 * @member {string} [commander] Possible values include: 'legal', 'not_legal'
 * @member {string} [onevOne] Possible values include: 'legal', 'not_legal'
 * @member {string} [duel] Possible values include: 'legal', 'not_legal'
 * @member {string} [brawl] Possible values include: 'legal', 'not_legal'
 */
export interface Legality {
  standard?: string;
  future?: string;
  frontier?: string;
  modern?: string;
  legacy?: string;
  pauper?: string;
  vintage?: string;
  penny?: string;
  commander?: string;
  onevOne?: string;
  duel?: string;
  brawl?: string;
}

/**
 * @class
 * Initializes a new instance of the Card class.
 * @constructor
 * @member {uuid} [id]
 * @member {uuid} [oracleId]
 * @member {array} [multiverseIds]
 * @member {number} [mtgoId]
 * @member {number} [mtgoFoilId]
 * @member {string} [uri]
 * @member {string} [scryfallUri]
 * @member {string} [printsSearchUri]
 * @member {string} [rulingsUri]
 * @member {string} [name]
 * @member {string} [layout] Possible values include: 'normal', 'split',
 * 'transform', 'meld', 'leveler', 'saga', 'planar', 'scheme', 'vanguard',
 * 'token', 'double_faced_token', 'emblem', 'augment', 'host'
 * @member {number} [cmc]
 * @member {string} [typeLine]
 * @member {string} [oracleText]
 * @member {string} [manaCost]
 * @member {string} [power]
 * @member {string} [toughness]
 * @member {string} [loyalty]
 * @member {string} [lifeModifier]
 * @member {string} [handModifier]
 * @member {array} [colors]
 * @member {array} [colorIndicator]
 * @member {array} [colorIdentity]
 * @member {object} [allParts]
 * @member {uuid} [allParts.id]
 * @member {string} [allParts.name]
 * @member {string} [allParts.uri]
 * @member {array} [cardFaces]
 * @member {object} [legalities]
 * @member {string} [legalities.standard] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.future] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.frontier] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.modern] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.legacy] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.pauper] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.vintage] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.penny] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.commander] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.onevOne] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.duel] Possible values include: 'legal',
 * 'not_legal'
 * @member {string} [legalities.brawl] Possible values include: 'legal',
 * 'not_legal'
 * @member {boolean} [reserved]
 * @member {number} [edhrecRank]
 * @member {string} [set]
 * @member {string} [setName]
 * @member {string} [collectorNumber]
 * @member {string} [setSearchUri]
 * @member {string} [scryfallSetUri]
 * @member {object} [imageUris]
 * @member {string} [imageUris.small]
 * @member {string} [imageUris.normal]
 * @member {string} [imageUris.large]
 * @member {string} [imageUris.png]
 * @member {string} [imageUris.artCrop]
 * @member {string} [imageUris.borderCrop]
 * @member {boolean} [highresImage]
 * @member {boolean} [reprint]
 * @member {boolean} [digital]
 * @member {string} [rarity] Possible values include: 'common', 'uncommon',
 * 'rare', 'mythic'
 * @member {string} [flavorText]
 * @member {string} [artist]
 * @member {uuid} [illustrationId]
 * @member {string} [frame]
 * @member {boolean} [fullArt]
 * @member {string} [watermark]
 * @member {string} [borderColor] Possible values include: 'black',
 * 'borderless', 'gold', 'silver', 'white'
 * @member {number} [storySpotlightNumber]
 * @member {string} [storySpotlightUri]
 * @member {boolean} [timeshifted]
 * @member {boolean} [colorshifted]
 * @member {boolean} [futureshifted]
 * @member {object} [purchaseUris]
 * @member {object} [relatedUris]
 */
export interface Card {
  id?: string;
  oracleId?: string;
  multiverseIds?: number[];
  mtgoId?: number;
  mtgoFoilId?: number;
  uri?: string;
  scryfallUri?: string;
  printsSearchUri?: string;
  rulingsUri?: string;
  name?: string;
  layout?: string;
  cmc?: number;
  typeLine?: string;
  oracleText?: string;
  manaCost?: string;
  power?: string;
  toughness?: string;
  loyalty?: string;
  lifeModifier?: string;
  handModifier?: string;
  colors?: string[];
  colorIndicator?: string[];
  colorIdentity?: string[];
  allParts?: RelatedCards;
  cardFaces?: CardFace[];
  legalities?: Legality;
  reserved?: boolean;
  edhrecRank?: number;
  set?: string;
  setName?: string;
  collectorNumber?: string;
  setSearchUri?: string;
  scryfallSetUri?: string;
  imageUris?: ImageUri;
  highresImage?: boolean;
  reprint?: boolean;
  digital?: boolean;
  rarity?: string;
  flavorText?: string;
  artist?: string;
  illustrationId?: string;
  frame?: string;
  fullArt?: boolean;
  watermark?: string;
  borderColor?: string;
  storySpotlightNumber?: number;
  storySpotlightUri?: string;
  timeshifted?: boolean;
  colorshifted?: boolean;
  futureshifted?: boolean;
  purchaseUris?: { [propertyName: string]: string };
  relatedUris?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Catalog class.
 * @constructor
 * @member {number} [totalItems]
 * @member {array} [data]
 */
export interface Catalog {
  totalItems?: number;
  data?: string[];
}

/**
 * @class
 * Initializes a new instance of the Set class.
 * @constructor
 * @member {string} [code]
 * @member {string} [mtgoCode]
 * @member {string} [name]
 * @member {string} [setType] Possible values include: 'core', 'expansion',
 * 'masters', 'masterpiece', 'from_the_vault', 'spellbook', 'premium_deck',
 * 'duel_deck', 'commander', 'planechase', 'conspiracy', 'archenemy',
 * 'vanguard', 'funny', 'starter', 'box', 'promo', 'token', 'memorabilia',
 * 'treasure_chest'
 * @member {date} [releasedAt]
 * @member {string} [blockCode]
 * @member {string} [block]
 * @member {string} [parentSetCode]
 * @member {number} [cardCount]
 * @member {boolean} [digital]
 * @member {boolean} [foil]
 * @member {string} [iconSvgUri]
 * @member {string} [searchUri]
 */
export interface Set {
  code?: string;
  mtgoCode?: string;
  name?: string;
  setType?: string;
  releasedAt?: Date;
  blockCode?: string;
  block?: string;
  parentSetCode?: string;
  cardCount?: number;
  digital?: boolean;
  foil?: boolean;
  iconSvgUri?: string;
  searchUri?: string;
}

/**
 * @class
 * Initializes a new instance of the Ruling class.
 * @constructor
 * @member {string} [source]
 * @member {date} [publishedAt]
 * @member {string} [comment]
 */
export interface Ruling {
  source?: string;
  publishedAt?: Date;
  comment?: string;
}

/**
 * @class
 * Initializes a new instance of the CardSymbol class.
 * @constructor
 * @member {string} [symbol]
 * @member {string} [looseVariant]
 * @member {string} [english]
 * @member {boolean} [transposable]
 * @member {boolean} [representsMana]
 * @member {number} [cmc]
 * @member {boolean} [appearsInManaCosts]
 * @member {boolean} [funny]
 * @member {string} [colors] Possible values include: 'W', 'U', 'B', 'R', 'G'
 */
export interface CardSymbol {
  symbol?: string;
  looseVariant?: string;
  english?: string;
  transposable?: boolean;
  representsMana?: boolean;
  cmc?: number;
  appearsInManaCosts?: boolean;
  funny?: boolean;
  colors?: string;
}

/**
 * @class
 * Initializes a new instance of the ManaCost class.
 * @constructor
 * @member {string} [cost]
 * @member {number} [cmc]
 * @member {string} [colors] Possible values include: 'W', 'U', 'B', 'R', 'G'
 * @member {boolean} [colorless]
 * @member {boolean} [monocolored]
 * @member {boolean} [multicolored]
 */
export interface ManaCost {
  cost?: string;
  cmc?: number;
  colors?: string;
  colorless?: boolean;
  monocolored?: boolean;
  multicolored?: boolean;
}

/**
 * @class
 * Initializes a new instance of the CardList class.
 * @constructor
 * @member {number} [totalCards]
 * @member {boolean} [hasMore]
 * @member {string} [nextPage]
 * @member {array} [data]
 */
export interface CardList {
  totalCards?: number;
  hasMore?: boolean;
  nextPage?: string;
  data?: Card[];
}

/**
 * @class
 * Initializes a new instance of the SetList class.
 * @constructor
 * @member {array} [data]
 */
export interface SetList {
  data?: Set[];
}

/**
 * @class
 * Initializes a new instance of the RulingList class.
 * @constructor
 * @member {array} [data]
 */
export interface RulingList {
  data?: Ruling[];
}

/**
 * @class
 * Initializes a new instance of the CardSymbolList class.
 * @constructor
 * @member {array} [data]
 */
export interface CardSymbolList {
  data?: CardSymbol[];
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * @member {number} [status]
 * @member {string} [code]
 * @member {string} [details]
 * @member {string} [type]
 * @member {array} [warnings]
 */
export interface ErrorModel {
  status?: number;
  code?: string;
  details?: string;
  type?: string;
  warnings?: string[];
}
