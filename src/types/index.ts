import { Dispatch, SetStateAction } from 'react';

export enum LOCAL_STORAGE_KEYS {
	ALL_RESULTS = 'ALL_RESULTS',
	TEST_COMPLETED_SCORE = 'TEST_COMPLETED_SCORE',
}

export interface IContext {
	activeStep: number;
	setActiveStep: Dispatch<SetStateAction<number>>;
	answers: string[];
	setAnswers: Dispatch<SetStateAction<string[]>>;
	answersResult: number;
	setAnswersResult: Dispatch<SetStateAction<number>>;
}
