import { Preview } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import { RecoilRoot } from 'recoil'

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
    actions: { argTypesRegex: '^on.*' },
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
  decorators: [
    (Story) => (
      <BrowserRouter>
      <RecoilRoot>
        <div>
          <Story/>
        </div>
      </RecoilRoot>
      </BrowserRouter>
    )
  ]
};


export default preview;
