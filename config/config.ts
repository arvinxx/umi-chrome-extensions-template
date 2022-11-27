import { defineConfig } from '@umijs/max';

export default defineConfig({
  plugins: [require.resolve('umi-plugin-extensions')],
  extensions: {
    name: 'Umi Chrome Extension Template',
    description: '基于 Umi 的 Chrome 插件开发脚手架',
    optionsUI: {
      page: '@/pages/options',
      openInTab: true,
    },
    background: { service_worker: '@/background/index' },
    popupUI: '@/pages/popup',
    contentScripts: [
      { matches: ['https://github.com/*'], entries: ['@/contentScripts/all'] },
    ],
    icons: {
      16: 'logo/logo@16.png',
      32: 'logo/logo@32.png',
      48: 'logo/logo@48.png',
      128: 'logo/logo@128.png',
    },
  },
});
