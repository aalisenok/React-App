import React from "react";
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'Какая столица Аргентины ?',
                rightAnswer: 5,
                id: 1,
                answers: [
                    {text: 'Каракас', id: 1},
                    {text: 'Барселона', id: 2},
                    {text: 'Монтевидео', id: 3},
                    {text: 'Сантьяго', id: 4},
                    {text: 'Буэнос-Айрес', id: 5},
                ]
            },
            {
                question: 'Какая столица Австралии ?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Канберра', id: 1},
                    {text: 'Сидней', id: 2},
                    {text: 'Нумеа', id: 3},
                    {text: 'Порт-Морсби', id: 4},
                    {text: 'Веллингтон', id: 5},
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        const question = this.state.quiz[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            });
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {

                } else  {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    })
                }
                window.clearTimeout(timeout)
            }, 100)

        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    >
                    </ActiveQuiz>
                </div>
            </div>
        )
    }
}

export default Quiz