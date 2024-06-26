import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from '../components/Footer';

test("should render text from props", () =>{
    render(<Footer backgroundText="bgText"/>)
    const paragraphEl = screen.getByText(/bgText/i)
    expect(paragraphEl).toBeInTheDocument()
})