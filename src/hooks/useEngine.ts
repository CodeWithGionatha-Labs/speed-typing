import { useCallback, useEffect, useState } from "react";
import { findDifferences } from "../utils/helpers";
import useCountdown from "./useCountdown";
import useTypings from "./useTypings";
import useWords from "./useWords";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { timeLeft, startCountdown, resetCountdown } =
    useCountdown(COUNTDOWN_SECONDS);
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);
  const { cursor, typed, clearTyped, totalTyped, resetTotalTyped } = useTypings(
    state !== "finish"
  );
  const [errors, setErrors] = useState(0);

  const isStarting = state === "start" && cursor > 0;
  const areWordsFinished = cursor === words.length;

  const restart = useCallback(() => {
    setState("start");
    setErrors(0);
    updateWords();
    resetCountdown();
    clearTyped();
    resetTotalTyped();
  }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  const countErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor);
    setErrors(
      (prevErrors) => prevErrors + findDifferences(typed, wordsReached)
    );
  }, [typed, words, cursor]);

  // when the user type the first letter, we've started
  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountdown();
    }
  }, [isStarting, startCountdown]);

  // when the time is up, we've finished
  useEffect(() => {
    if (!timeLeft) {
      setState("finish");
      countErrors();
    }
  }, [timeLeft, countErrors]);

  // when the current words are all filled up, show another set of words
  useEffect(() => {
    if (areWordsFinished) {
      countErrors();
      updateWords();
      clearTyped();
    }
  }, [
    cursor,
    words,
    clearTyped,
    typed,
    areWordsFinished,
    updateWords,
    countErrors,
  ]);

  return { state, words, typed, errors, restart, timeLeft, totalTyped };
};

export default useEngine;
