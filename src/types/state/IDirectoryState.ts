export interface IDirectoryItem {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
  linkUrl: string;
}

export interface IDirectoryState {
  sections: IDirectoryItem[];
}
