<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useQuiz } from "@/quizzes/useQuiz";
import { Quiz } from "./types";

const { quiz, questions } = useQuiz();
const props = defineProps({
  quiz: Object as () => Quiz,
});
</script>

<template>
  <div>Quiz</div>
  <div>
    <h1>{{ quiz.title }}</h1>
    <ul>
      <li v-for="question in quiz.questions" :key="question.id">
        {{ question.text }}
      </li>
    </ul>
  </div>
</template>
