import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../../providers';
import { localStorageService } from '../../services/localStorage';
import { useStyles } from '../../styles';
import { LOCAL_STORAGE_KEYS } from '../../types';
import { calculateAvarageResult } from '../../utils/calculateAvarageResult';
import { calculateResult } from '../../utils/calculateResult';

export const Header = () => {
	const [appRunScore, setAppRunScore] = useState<number>(0);
	const classes = useStyles();

	const { answers, activeStep, answersResult, setAnswersResult } = useContext(Context);

	const result = calculateResult(answers.length);
	const avarageResult = calculateAvarageResult(answersResult, appRunScore);

	useEffect(() => {
		setAnswersResult(Number(localStorageService.getData(LOCAL_STORAGE_KEYS.ALL_RESULTS)));
		setAppRunScore(
			Number(localStorageService.getData(LOCAL_STORAGE_KEYS.TEST_COMPLETED_SCORE)) || +[],
		);
	}, [answers]);

	return (
		<div>
			<div className={classes.headerText}>
				{appRunScore > 0 && <div>Avarage result: {avarageResult}</div>}
			</div>
			<div className={classes.headerText}>
				{answers.length || activeStep > 0 ? (
					<div>Your result: {result}</div>
				) : (
					<div>Here will be your result</div>
				)}
			</div>
		</div>
	);
};
