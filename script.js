"use strict";

console.log("Working");

//selecting buttons, boxes and text

const startButton = document.querySelector(".start__button");
const nextButton = document.querySelector(".next__button");
const againButton = document.querySelector(".again__button");

const img = document.querySelector(".main__img");
const initialBox = document.querySelector(".main__box");
const questionsBox = document.querySelector(".questions__box");
const resultsBox = document.querySelector(".quiz__results");

const questions = document.querySelector(".question");
const optionButton = document.querySelectorAll(".option__btn");
const questionNumber = document.querySelector(".question__number");
const correctAnswerResult = document.querySelector(".answer__text");
const answerExplanation = document.querySelector(".explanation__text");
const finalScore = document.querySelector(".result__number");
const finalText = document.querySelector(".results__text");

let currentQuestionIndex = 0;
let score = 0;

//creating the quiz questions

const quizQuestions = [
  {
    question: "What was the immediate cause of World War I?",
    options: [
      "Assassination of Archduke Franz Ferdinand",
      "Germany’s invasion of Belgium",
      "The sinking of the Lusitania",
      "The Zimmermann Telegram",
    ],
    correctAnswer: "Assassination of Archduke Franz Ferdinand",
    explanation:
      "His assassination in Sarajevo in 1914 set off a chain of alliances that triggered the war.",
  },
  {
    question: "Which countries formed the Triple Entente before WWI?",
    options: [
      "Germany, Austria-Hungary, Italy",
      "Britain, France, Russia",
      "France, Italy, Russia",
      "Britain, Germany, USA",
    ],
    correctAnswer: "Britain, France, Russia",
    explanation:
      "Britain, France, and Russia formed the Triple Entente to balance the power of the Triple Alliance.",
  },
  {
    question: "What was Germany’s plan to avoid a two-front war?",
    options: [
      "The Molotov Plan",
      "The Berlin Strategy",
      "The Schlieffen Plan",
      "The Bismarck Doctrine",
    ],
    correctAnswer: "The Schlieffen Plan",
    explanation:
      "The Schlieffen Plan aimed for a quick victory over France before turning to fight Russia.",
  },
  {
    question: "What battle in 1916 became one of the bloodiest in history?",
    options: [
      "Battle of the Somme",
      "Battle of Gallipoli",
      "Battle of Verdun",
      "Battle of the Marne",
    ],
    correctAnswer: "Battle of the Somme",
    explanation:
      "The Somme caused over 1 million casualties, showing the horrors of trench warfare.",
  },
  {
    question: "Which of these weapons was first widely used during WWI?",
    options: ["Atomic bomb", "Machine gun", "Cruise missile", "Helicopter"],
    correctAnswer: "Machine gun",
    explanation:
      "Machine guns caused massive casualties and contributed to the deadlock on the Western Front.",
  },
  {
    question: "What country switched sides in 1915 and joined the Allies?",
    options: ["Bulgaria", "Italy", "Japan", "Romania"],
    correctAnswer: "Italy",
    explanation:
      "Italy joined the Allies after being promised territory by the Treaty of London.",
  },
  {
    question: "What was the main purpose of trench warfare?",
    options: [
      "Speed up the movement of troops",
      "Prevent chemical attacks",
      "Create a defensive position",
      "Hide from airplanes",
    ],
    correctAnswer: "Create a defensive position",
    explanation:
      "Trenches protected soldiers and created a static front that defined the Western Front.",
  },
  {
    question: "What did the Zimmermann Telegram propose?",
    options: [
      "A German-Mexican alliance against the U.S.",
      "A peace treaty between Germany and Britain",
      "An alliance between Italy and Russia",
      "The surrender of the Ottoman Empire",
    ],
    correctAnswer: "A German-Mexican alliance against the U.S.",
    explanation:
      "Germany promised Mexico U.S. land if it joined the war against America—this helped push the U.S. into the war.",
  },
  {
    question: "Which empire collapsed after WWI?",
    options: [
      "Chinese Empire",
      "Spanish Empire",
      "Ottoman Empire",
      "Mughal Empire",
    ],
    correctAnswer: "Ottoman Empire",
    explanation:
      "The Ottoman Empire dissolved after the war, leading to the creation of new states in the Middle East.",
  },
  {
    question: "What was the name of the peace treaty that ended WWI?",
    options: [
      "Treaty of Brest-Litovsk",
      "Treaty of Versailles",
      "Treaty of Ghent",
      "Treaty of Paris",
    ],
    correctAnswer: "Treaty of Versailles",
    explanation:
      "The Treaty of Versailles (1919) ended WWI and imposed heavy penalties on Germany.",
  },
];
//click the button to start the quiz

startButton.addEventListener("click", function () {
  img.classList.add("hidden");
  initialBox.classList.add("hidden");
  questionsBox.classList.remove("hidden");
});

function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questions.textContent = currentQuestion.question;

  correctAnswerResult.textContent = `Correct Answer: ${currentQuestion.correctAnswer}.`;
  answerExplanation.textContent = currentQuestion.explanation;
  questionNumber.textContent = `${currentQuestionIndex + 1} of 10`;

  optionButton.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
    button.classList.remove("correct", "incorrect");
    button.disabled = false;
  });

  answerExplanation.classList.add("hidden");
  correctAnswerResult.classList.add("hidden");
}

showQuestion();

optionButton.forEach((button) => {
  button.addEventListener("click", () => {
    optionButton.forEach((button) => {
      button.disabled = true;
    });
    if (
      button.textContent.includes(
        quizQuestions[currentQuestionIndex].correctAnswer
      )
    ) {
      console.log("Correct");
      button.classList.add("correct");
      score += 1;
    } else {
      console.log("Wrong!");
      button.classList.add("incorrect");
    }
    correctAnswerResult.classList.remove("hidden");
    answerExplanation.classList.remove("hidden");
  });
});

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    questionsBox.classList.add("hidden");
    resultsBox.classList.remove("hidden");
    finalScore.textContent = `${score} of 10`;
    if (score >= 1 && score <= 3) {
      finalText.textContent =
        "Tough quiz! Time to brush up on your WWI history.";
    } else if (score >= 4 && score <= 5) {
      finalText.textContent =
        "Not bad! You've got a basic grasp — keep learning!";
    } else if (score >= 6 && score <= 7) {
      finalText.textContent =
        "Great work! You're really getting the hang of it.";
    } else if (score >= 8 && score <= 9) {
      finalText.textContent = "Impressive! You're nearly a WWI expert.";
    } else if (score === 10) {
      finalText.textContent =
        "Perfect score! You're a true World War I master!";
    }
  }
});

againButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  questionNumber.textContent = `${currentQuestionIndex + 1} of 10`;
  resultsBox.classList.add("hidden");
  img.classList.remove("hidden");
  initialBox.classList.remove("hidden");
  correctAnswerResult.classList.add("hidden");
  answerExplanation.classList.add("hidden");
  optionButton.forEach((button) => {
    button.classList.remove("correct", "incorrect");
    button.disabled = false;
  });
});
