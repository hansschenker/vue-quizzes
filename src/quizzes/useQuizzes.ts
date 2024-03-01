import { reactive } from 'vue';


interface Quiz {
    id: number;
    title: string;
    questions: string[];
}

export function useQuizzes() {
    const state = reactive({
        quizzes: [] as Quiz[],
    });

    function addQuiz(quiz: Quiz) {
        state.quizzes.push(quiz);
    }

    function removeQuiz(id: number) {
        const index = state.quizzes.findIndex((quiz) => quiz.id === id);
        if (index !== -1) {
            state.quizzes.splice(index, 1);
        }
    }

    return {
        quizzes: state.quizzes,
        addQuiz,
        removeQuiz,
    };
}