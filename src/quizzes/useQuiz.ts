import { ref, computed } from 'vue';
import fakeData from './quiz.data';
import { Quiz } from './types';




export function useQuiz() {
    const quiz = ref<Quiz[]>(null); // Initialize quiz as null

    // Fetch the quiz data...
    // This is just a placeholder. Replace it with your actual data fetching logic.

    quiz.value = fakeData; // Update quiz with the fetched data

    return {
        quiz,
        questions: computed(() => quiz.value[0].questions),
    };
}




