import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://duckduckgo.com/`;

test('My first test', async t => {
    // Test code
    await t.typeText(Selector('input[id="search_form_input_homepage"]'), 'Hello World')
    .click(Selector('input[id="search_button_homepage"]'));
});
