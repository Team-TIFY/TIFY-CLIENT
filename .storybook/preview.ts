import { Preview } from '@storybook/react';
import { globalStyle } from '../src/styles/theme/global'
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import './style.css';

const customViewports = {
  iPhone13: {
    name: 'iPhone 13',
    styles: {
      width: '390px',
      height: '844px'
    },
    type: 'mobile'
  },
  tablet: {
    name: 'iPad Pro 11',
    styles: {
      width: '834px',
      height: '1194px',
    },
    type: 'tablet',
  },
}



const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { 
      viewports: customViewports, 
      defaultViewport: 'iPhone13'
    },
  },
};


export default preview;
