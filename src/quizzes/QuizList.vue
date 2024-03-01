<template>
  <div>
    <h1>CSS and Javascript Quizzes</h1>
    <ul>
      <li v-for="quiz in quizzes" :key="quiz.id">
        {{ quiz.title }}
        <ul>
          <li v-for="question in quiz.questions" :key="question.id">
            {{ question.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { fakeData } from "./quiz.data";
import { Quiz } from "./types";

const quizzes = ref<Quiz[]>([]);

// Load data from quiz.data.ts
quizzes.value = fakeData;
</script>

<style scoped>
/* Add your component styles here */
</style>
