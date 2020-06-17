import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {
  extractPostTitle,
  extractTopAnswersTexts,
  filterOutUnwanted,
  extractMusicFromAnswer,
} from "./reddit.ts";
import { lineBreak, link, dot } from "./mocks/answers-texts.ts";
import { postWithRoot } from "./mocks/post.ts";
import { answersWithRoot } from "./mocks/answer.ts";

Deno.test("can extract a post title", () => {
  assertEquals(
    extractPostTitle(postWithRoot),
    "What’s a song that so funky, it makes you say “damn, that’s funky”?"
  );
});

Deno.test("filters answers properly", () => {
  assertEquals(filterOutUnwanted(answersWithRoot).length, 2);
});

Deno.test("can extract and properly sort answers texts", () => {
  assertEquals(
    extractTopAnswersTexts(answersWithRoot)[0],
    "Use Me by Bill Withers\n\nEdit: thanks for my first gold kind stranger!"
  );
});

Deno.test("Can figure out the music to be searched from an answer", () => {
  assertEquals(extractMusicFromAnswer(lineBreak), "Use Me Bill Withers");
  assertEquals(extractMusicFromAnswer(dot), "Ripe Stanky");
  assertEquals(extractMusicFromAnswer(link), "Chameleon Herbie Hancock");
  assertEquals(extractMusicFromAnswer(lineBreak), "Use Me Bill Withers");
});
