import React, { useState } from 'react';
import './quiz-app.css';
export default function Quiz() {
	const questions = [
		{
			questionText: 'Little interest or pleasure in doing things?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: false },
				{ answerText: 'Several Days', isCorrect: false },
				{ answerText: 'More than Half of the Days', isCorrect: true },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
		{
			questionText: 'Feeling down, depressed, or hopeless?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: false },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
		{
			questionText: 'Trouble falling or staying asleep, or sleeping too much?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
		{
			questionText: 'Feeling tired or having little energy?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
        {
			questionText: 'Poor appetite or overeating?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
        {
			questionText: 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
        {
			questionText: 'Trouble concentrating on things, such as reading the newspaper or watching television?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
        {
			questionText: 'Moving or speaking so slowly that other people could have noticed?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
        {
			questionText: 'Thoughts that you would be better off dead, or of hurting yourself?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
        {
			questionText: 'If you ve had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
        {
			questionText: 'Are you feeling well?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
        {
			questionText: 'Not being able to stop or control worrying?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
        {
			questionText: 'Feeling afraid, as if something awful might happen?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
        {
			questionText: 'Do you often feel emptiness,void or like you are lost cause?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: true },
				{ answerText: 'Several Days', isCorrect: true },
				{ answerText: 'More than Half of the Days', isCorrect: false },
				{ answerText: 'Nearly Every Day', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app1'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}