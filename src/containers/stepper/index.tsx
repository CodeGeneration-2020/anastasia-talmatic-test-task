import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Step } from '@mui/material';

import { QUESTIONS } from '../../questions';
import { LOCAL_STORAGE_KEYS } from '../../types';
import { Context } from '../../providers';
import { localStorageService } from '../../services/localStorage';
import { calculateResult } from '../../utils/calculateResult';
import { StepComponent } from '../../components/stepper';
import { useStyles } from '../../styles';

export const StepperComponent = () => {
	const [testCompletedScore, setTestCompletedScore] = useState<number>(0);
	const classes = useStyles();
	const {
		answers,
		setAnswers,
		activeStep,
		setActiveStep,
		answersResult,
		setAnswersResult,
	} = useContext(Context);

	const result = calculateResult(answers.length);
	const questions = Object.values(QUESTIONS);
	const isStepActive = activeStep === questions.length;

	useEffect(() => {
		setAnswersResult(Number(localStorageService.getData(LOCAL_STORAGE_KEYS.ALL_RESULTS)));
		setTestCompletedScore(
			Number(localStorageService.getData(LOCAL_STORAGE_KEYS.TEST_COMPLETED_SCORE)),
		);
	}, [answers]);

	const handleReset = () => {
		setActiveStep(0);
		setAnswers([]);
	};

	const handleSave = () => {
		localStorageService.setData(
			LOCAL_STORAGE_KEYS.ALL_RESULTS,
			String(+answersResult + result),
		);
		localStorageService.setData(
			LOCAL_STORAGE_KEYS.TEST_COMPLETED_SCORE,
			String(+testCompletedScore + 1),
		);

		handleReset();
	};

	return (
		<Box className={classes.stepperBox}>
			<Stepper activeStep={activeStep} orientation='vertical'>
				{questions.map((step: string) => (
					<Step key={step}>
						<StepComponent step={step} />
					</Step>
				))}
			</Stepper>
			{isStepActive && (
				<Paper square elevation={0} className={classes.papper}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button
						variant='contained'
						color='success'
						onClick={handleSave}
						className={classes.button}
					>
						Save result
					</Button>
					<Button
						variant='outlined'
						color='error'
						onClick={handleReset}
						className={classes.button}
					>
						Reset
					</Button>
				</Paper>
			)}
		</Box>
	);
};
