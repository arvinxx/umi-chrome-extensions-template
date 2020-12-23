const isDev = process.env.NODE_ENV === 'development';

const generateCSP = (hash: string[]) =>
  `script-src 'self' '${hash.join("' '")}'; object-src 'self'`;

export default {
  name: 'Umi Chrome Extension Template',
  version: '1.0',
  description: '基于 Umi 的 Chrome 插件开发脚手架',
  manifest_version: 2,
  minimum_chrome_version: '80',
  permissions: [],
  /**
   * Chrome 的内容安全政策(CSP)
   * @description
   * 由于 umi 打出来的html 包含了三个内联的 script
   * 因此必须将这三个内联的 script 添加到 csp 中
   */
  content_security_policy: generateCSP(
    isDev
      ? ['unsafe-eval']
      : [
          // window.routerBase = "/";
          'sha256-YM8uI2F+VfHULiDF1T+UCYmPwssvvWleyz5k2gtmTQo=',
          // umi 的版本
          'sha256-g3hjaXGjDuIE5N9wBAzFtJfpVSr27ys0zwyijmBdiL0=',
          // popup.html 的 路由页面
          'sha256-JMXt6Isa9gxE6MsyLWV97GmIuJEi8tQw4YKvMRi3NSs=',
          // option.html 的 路由页面
          'sha256-V1KaGDajKBXAi6K8XGvKbJ3sQ8XBDEZigeI40P4js34=',
        ],
  ),
  background: {
    scripts: ['background.js'],
    persistent: true,
  },
  content_scripts: [
    // {
    //   matches: ['https://github.com/*'],
    //   css: ['css/all.css'],
    //   js: ['js/all.js'],
    // },
  ],
  browser_action: {
    default_popup: 'popup.html',
    default_icon: {
      16: 'logo/logo@16.png',
      32: 'logo/logo@32.png',
      48: 'logo/logo@48.png',
      128: 'logo/logo@128.png',
    },
  },
  options_ui: {
    page: 'options.html',
    open_in_tab: true,
  },
  icons: {
    16: 'logo/logo@16.png',
    32: 'logo/logo@32.png',
    48: 'logo/logo@48.png',
    128: 'logo/logo@128.png',
  },
};
