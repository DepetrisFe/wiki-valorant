export interface Buddie {
  uuid: string;
  displayName: string;
  isHiddenIfNotOwned: boolean;
  themeUuid: null;
  displayIcon: string;
  assetPath: string;
  levels: Level[];
}

export interface Level {
  uuid: string;
  charmLevel: number;
  displayName: string;
  displayIcon: string;
  assetPath: string;
}
