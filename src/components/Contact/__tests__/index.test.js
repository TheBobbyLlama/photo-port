import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Nav component', () => {
	// baseline test
	it('renders', () => {
		render(<ContactForm />);
	});

	it('renders', () => {
		const { getByTestId } = render(<ContactForm />)
		expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
	  });

	  it('renders', () => {
		const { getByTestId } = render(<ContactForm />)
		expect(getByTestId('submitbutton')).toHaveTextContent('Submit')
	  });
});