import React from 'react';
import { render } from 'react-testing-library';

describe('Verifying your setup', () => {
  it('should run a test', () => {
    expect(3).toEqual(3);
  });

  it('can render a component', () => {
    const context = render(<h1>A React element</h1>);

    expect(context.queryByText('A React element')).not.toBeNull();
  });
});
