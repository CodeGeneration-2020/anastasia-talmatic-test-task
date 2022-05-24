import React from 'react';

import { ContextProvider } from './components/contextProvider';
import { Header } from './components/header';
import { StepperComponent } from './containers/stepper';

const App = () => {
	return (
		<ContextProvider>
			<Header />
			<StepperComponent />
		</ContextProvider>
	);
};

export default App;
