export interface Card {
  assetPath: string;
  displayIcon: string;
  displayName: string;
  isHiddenIfNotOwned: boolean;
  largeArt: string;
  smallArt: string;
  levels: Level[];
  themeUuid: null;
  uuid: string;
}

export interface Level {
  uuid: string;
  charmLevel: number;
  displayName: string;
  displayIcon: string;
  assetPath: string;
}
