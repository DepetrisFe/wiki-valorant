export interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: WeaponStats;
  shopData: ShopData;
  skins: Skin[];
}

export interface ShopData {
  cost: number;
  category: string;
  categoryText: string;
  gridPosition: GridPosition;
  canBeTrashed: boolean;
  image: null;
  newImage: string;
  newImage2: null;
  assetPath: string;
}

export interface GridPosition {
  row: number;
  column: number;
}

export interface Skin {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: null | string;
  displayIcon: string | undefined;
  wallpaper: null;
  assetPath: string;
  chromas: Chroma[];
  levels: Level[];
}

export interface Chroma {
  uuid: string;
  displayName: string;
  displayIcon: null | string;
  fullRender: string;
  swatch: null | string;
  streamedVideo: null | string;
  assetPath: string;
}

export interface Level {
  uuid: string;
  displayName: string;
  levelItem: null | string;
  displayIcon: null | string;
  streamedVideo: null | string;
  assetPath: string;
}

export interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
  shotgunPelletCount: number;
  wallPenetration: string;
  feature: string;
  fireMode: null;
  altFireType: string;
  adsStats: AdsStats;
  altShotgunStats: null;
  airBurstStats: null;
  damageRanges: DamageRange[];
}

export interface AdsStats {
  zoomMultiplier: number;
  fireRate: number;
  runSpeedMultiplier: number;
  burstCount: number;
  firstBulletAccuracy: number;
}

export interface DamageRange {
  rangeStartMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
}

export interface Categories {
  categoryName:
    | "Heavy"
    | "Rifle"
    | "Shotgun"
    | "Sidearm"
    | "Sniper"
    | "SMG"
    | "Melee";
}
