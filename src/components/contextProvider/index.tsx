import React, { useState } from 'react';

import { Context } from '../../providers';
import { useStyles } from '../../styles';

export const ContextProvider = ({ children }) => {
	const [activeStep, setActiveStep] = useState<number>(0);
	const [answers, setAnswers] = useState<string[]>([]);
	const [answersResult, setAnswersResult] = useState<number>(0);
	const classes = useStyles();

	const value = {
		activeStep,
		setActiveStep,
		answers,
		setAnswers,
		answersResult,
		setAnswersResult,
	};

	return (
		<div className={classes.context}>
			<Context.Provider value={value}>{children}</Context.Provider>
		</div>
	);
};
