import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LearnWomen from './LearnWomen';
import '@testing-library/jest-dom/extend-expect';


test('renders btn btn-secondary', () => {
    render(<LearnWomen title="älgo" />);
   // const buttonElement = screen.getByText(/ver más/i);
    expect(screen.getByText("älgo")).toBeInTheDocument();

    // fireEvent.click(buttonElement);
    // const closeButton = screen.getByText(/cerrar/i);
    // expect(closeButton).toBeInTheDocument();

    // fireEvent.click(closeButton);
    // expect(closeButton).not.toBeInTheDocument();
});
