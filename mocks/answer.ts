import { IAnswersRootItem } from "../types.d.ts";

export const answersWithRoot: IAnswersRootItem = {
  kind: "Listing",
  data: {
    children: [
      {
        kind: "t1",
        data: {
          score: 2005,
          body:
            "Pusherman by Curtis Mayfield. In fact the whole Superfly album is golden, down and dirty, 1970s New York kind of funk. Bongos and dashikis kind of funk. Nothing touches it, really.\n\nA lot of the replies are soul and disco. I'm not saying they're unrelated or that they're not excellent songs. But Superfly is pure, unadulterated funk.",

          stickied: false,
        },
      },
      {
        kind: "t1",
        data: {
          score: 4471,
          body:
            "Use Me by Bill Withers\n\nEdit: thanks for my first gold kind stranger!",
          stickied: false,
        },
      },
      {
        //@ts-ignore
        kind: "t2",
        data: {
          score: 4471,
          body: "This has an invalid type!",
          stickied: false,
        },
      },
      {
        kind: "t1",
        data: {
          score: 1,
          body: "This has a low score!",
          stickied: false,
        },
      },
      {
        kind: "t1",
        data: {
          score: 1,
          body: "This is stickied!",
          stickied: true,
        },
      },
    ],
    after: null,
    before: null,
  },
};
