import { newSpecPage } from '@stencil/core/testing';
import { FormLabel } from '../form-label';

describe('form-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormLabel],
      html: `<form-label></form-label>`,
    });
    expect(page.root).toEqualHtml(`
      <form-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </form-label>
    `);
  });
});
