import { newE2EPage } from '@stencil/core/testing';

describe('button-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-example></button-example>');

    const element = await page.find('button-example');
    expect(element).toHaveClass('hydrated');
  });
});
