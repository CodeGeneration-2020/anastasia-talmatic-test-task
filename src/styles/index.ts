import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
	stepperBox: {
		maxWidth: 400,
	},
	stepBox: {
		marginBottom: 2,
	},
	papper: { padding: 3 },

	button: { marginTop: 1, margin: 1 },
	headerText: {
		marginBottom: 20,
		color: 'blue',
	},
	context: {
		height: '100vh',
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		padding: 50,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
}));
