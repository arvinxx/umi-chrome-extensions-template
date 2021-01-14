import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { default: 'zh-CN' },
  extensions: {
    name: 'Umi Chrome Extension Template',
    description: '基于 Umi 的 Chrome 插件开发脚手架',
    optionsUI: {
      page: '@/pages/options',
      openInTab: true,
    },
    background: { scripts: ['@/background/index'] },
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
