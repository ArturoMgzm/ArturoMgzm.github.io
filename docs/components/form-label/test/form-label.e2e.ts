import { newE2EPage } from '@stencil/core/testing';

describe('form-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<form-label></form-label>');

    const element = await page.find('form-label');
    expect(element).toHaveClass('hydrated');
  });
});
