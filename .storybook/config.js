import { configure } from '@storybook/react';
import '../src/index.css';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();

const req = global.__requireContext(__dirname, '../src/components', true, /.stories.js$/)
// const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);