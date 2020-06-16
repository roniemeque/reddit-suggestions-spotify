// answers or comments
export interface IChildT1 {
  kind: "t1";
  data: {
    score: number;
    body: string;
    stickied: boolean; // stickied answers are usually from mods or bots, so irrelevant
    [key: string]: any;
  };
}

// the post itself
export interface IChildT3 {
  kind: "t3";
  data: {
    title?: string;
    [key: string]: any;
  };
}

export interface IListingRootItem {
  kind: string;
}

export interface IPostRootItem extends IListingRootItem {
  data: {
    children: IChildT3[];
    [key: string]: any;
  };
}

export interface IAnswersRootItem extends IListingRootItem {
  data: {
    children: IChildT1[];
    [key: string]: any;
  };
}
