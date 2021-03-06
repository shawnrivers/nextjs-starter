import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading } from '@/components/Heading';

describe('Heading', () => {
  it('should render h1 with the correct content', () => {
    const { container, getByText } = render(<Heading text="test" />);

    expect(getByText('test')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h1
        class="text-4xl font-bold"
      >
        test
      </h1>
    `);
  });
});
