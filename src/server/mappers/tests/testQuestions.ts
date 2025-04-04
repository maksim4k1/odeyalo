import {
  type GetTestApiResponseData,
  type GetTestQuestionsApiResponseData,
  type GetTestQuestionsResponseData,
} from "@/shared/types";

export const mapGetTestQuestionsResponse = (
  currentTest: GetTestApiResponseData,
  testqQuestions: GetTestQuestionsApiResponseData,
): GetTestQuestionsResponseData => {
  const { test_id, title } = currentTest;
  const { questions } = testqQuestions;

  return {
    id: test_id,
    title: title,
    questions: questions.map(({ number, text, answer_options }) => ({
      title: text,
      number,
      answers: answer_options.map(({ id, score, text }) => ({
        id,
        text,
        score,
      })),
    })),
  };
};
