import {
  fetchData,
  extractPostTitle,
  extractTopAnswersTexts,
  extractMusicFromAnswer,
} from "./reddit.ts";

const app = async () => {
  const [postRoot, answersRoot] = await fetchData();
  if (!postRoot || !answersRoot) {
    console.log("Could find or load data properly");
    return;
  }

  const [postTitle, answersTexts] = [
    extractPostTitle(postRoot),
    extractTopAnswersTexts(answersRoot),
  ];

  const searchable = answersTexts.map((answer) =>
    extractMusicFromAnswer(answer)
  );

  console.log(searchable);
};

app();
