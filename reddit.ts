import { writeJsonSync } from "https://deno.land/std@0.51.0/fs/mod.ts";
import { IPostRootItem, IAnswersRootItem, IChildT1 } from "./types.d.ts";

const ANSWERS_LIMIT = 30;
const MIN_ANSWERS_SCORE = 10;

export const extractPostTitle = (postListing: IPostRootItem) => {
  const [post] = postListing?.data?.children;
  if (post.kind !== "t3") return null;

  return post?.data?.title || null;
};

export const filterOutUnwanted = (
  commentsListing: IAnswersRootItem
): IChildT1[] => {
  return commentsListing.data.children.filter((item) => {
    if (item.kind !== "t1") return false;
    if (!item.data.score || !item.data.body) return false;
    if (item.data.stickied) return false;
    if (item.data.score < MIN_ANSWERS_SCORE) return false;

    return true;
  });
};

export const extractTopAnswersTexts = (commentsListing: IAnswersRootItem) => {
  const answers = filterOutUnwanted(commentsListing);

  const orderedFromBiggestScore = answers.sort((a, b) =>
    a.data.score > b.data.score ? -1 : 1
  );

  const textOnly = orderedFromBiggestScore.map((item) => item.data.body);

  return textOnly;
};

export const fetchData = async (): Promise<
  [IPostRootItem, IAnswersRootItem] | []
> => {
  try {
    const res = await fetch(
      "https://www.reddit.com/r/AskReddit/comments/gjwo5y/whats_a_song_that_so_funky_it_makes_you_say_damn.json"
    );

    const data = await res.json();

    writeJsonSync("./response.json", data, { spaces: 2 });

    if (!data?.length) return [];

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
