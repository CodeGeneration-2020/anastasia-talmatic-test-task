import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import { Context } from '../../providers';
import { useStyles } from '../../styles';

export const StepComponent = ({ step }) => {
	const { setAnswers, setActiveStep } = useContext(Context);
	const classes = useStyles();

	const handleYes = () => {
		handleNextStep();
		setAnswers((prevActiveStep: string[]) => [...prevActiveStep, step]);
	};

	const handleNextStep = () => {
		setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
	};

	return (
		<>
			<StepLabel>{step}</StepLabel>
			<StepContent>
				<Box className={classes.stepBox}>
					<div>
						<Button variant='contained' onClick={handleYes} className={classes.button}>
							Yes
						</Button>
						<Button variant='contained' onClick={handleNextStep} className={classes.button}>
							No
						</Button>
					</div>
				</Box>
			</StepContent>
		</>
	);
};
