import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading } from 'app/components/Heading';

describe('Heading', () => {
  it('should render h1 with the correct content', () => {
    const { container, getByText } = render(<Heading text="test" />);

    expect(getByText('test')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h1>
        test
      </h1>
    `);
  });
});
