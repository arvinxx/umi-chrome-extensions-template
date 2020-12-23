import { defineConfig } from 'umi';
import Config from 'webpack-chain';
import GenerateJsonPlugin from 'generate-json-webpack-plugin';

import manifest from '../src/manifest';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  chainWebpack: (config: Config) => {
    config.entry('background').add('@/background/index');

    config
      .plugin('toJSON')
      .use(GenerateJsonPlugin, ['manifest.json', manifest]);
  },
  locale: { default: 'zh-CN' },
  routes: [
    { path: '/popup', component: '@/popup/index' },
    { path: '/options', component: '@/options/index' },
  ],
  mpa: {},
});
