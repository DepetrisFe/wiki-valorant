export interface Spray {
  uuid: string;
  displayName: string;
  category: null;
  themeUuid: null;
  displayIcon: string;
  fullIcon: string;
  fullTransparentIcon: string;
  animationPng: null;
  animationGif: null;
  assetPath: string;
  levels: Level[];
}

export interface Level {
  uuid: string;
  sprayLevel: number;
  displayName: string;
  displayIcon: string;
  assetPath: string;
}
