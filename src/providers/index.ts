import { createContext } from 'react';

import { IContext } from '../types';

const defaultState = {
	activeStep: 0,
	setActiveStep: () => {},
	answers: [],
	setAnswers: () => {},
	answersResult: 0,
	setAnswersResult: () => {},
};

export const Context = createContext<IContext>(defaultState);
