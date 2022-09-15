import { newSpecPage } from '@stencil/core/testing';
import { ButtonExample } from '../button-example';

describe('button-example', () => {
  it('renders', async () => {
    const button = new ButtonExample();

    expect(button.loading).toBe(undefined);

    const page = await newSpecPage({
      components: [ButtonExample],
      html: `<button-example></button-example>`,
    });
    expect(page.root).toEqualHtml(`
      <button-example>
        <mock:shadow-root>
          <button class="button-example"></button>
        </mock:shadow-root>
      </button-example>
    `);


  });
});
