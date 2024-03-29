import { render, screen } from '@testing-library/react';
import Home from '@/pages';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByText(/Get started by editing/i);

        expect(heading).toBeInTheDocument()
    })

    it('renders Home unchanged', () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
})