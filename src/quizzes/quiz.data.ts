// interface Quiz {
//     id: string;
//     title: string;
//     questions: Question[];
// }

import { Quiz } from "./types"

// id: number;
// title: string;
// level: QuizLevel;
// type: QuizType;

export const fakeData: Quiz[] = [{
        id: 1,
        title: "Beginner CSS",
        level: "Beginner",
        type: "CSS",
        questions: [
            {
                id: 1,
                title: "What is a CSS declaration block?",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 2",
            },
            {
                id: 2,
                title: "What does Cascading mean in CSS?",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 3",
            },
        ],
    },

    
    {
        id: 2,
        title: "Advanced CSS",
        level: "Beginner",
        type: "CSS",
        questions: [
            {
                id: 1,
                title: "What are CSS Variables?",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 1",
            },
            {
                id: 2,
                title: "What is CSS Flexbox?",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 4",
            },
        ],
    },
];

export default fakeData;