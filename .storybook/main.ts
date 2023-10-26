import path from "path";
//Todo : require.resolve문 사용하지 말고 그냥 import 문으로 바꾸어볼것 

import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    path.dirname(
      require.resolve(path.join("@storybook/addon-links", "package.json"))
    ),
    path.dirname(
      require.resolve(path.join("@storybook/addon-essentials", "package.json"))
    ),
    path.dirname(
      require.resolve(
        path.join("@storybook/addon-interactions", "package.json")
      )
    ),
  ],
  core: {
    builder: '@storybook/builder-vite', 
  },
  framework :'@storybook/react-vite',
  docs: {
    autodocs: "tag",
  },
};
export default config;
