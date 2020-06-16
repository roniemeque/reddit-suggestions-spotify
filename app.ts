import {
  fetchData,
  extractPostTitle,
  extractTopAnswersTexts,
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

  console.log(postTitle, answersTexts);
};

app();
