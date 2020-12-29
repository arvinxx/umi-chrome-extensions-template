**注意：因集成插件 [umi-plugin-extension](https://github.com/arvinxx/umi-plugin-extensions) 还未完善,该脚手架模板也不是很完善！完成后会去掉该提示。**

#  Umi Chrome Extensions Template

基于 Umi 的 Chrome 插件开发脚手架。

## 特性

- 🌋 **企业级框架**，基于 umi 和 umi 插件 [umi-plugin-extension](https://github.com/arvinxx/umi-plugin-extensions) 构建，享受 umi 生态的全部技术能力；
- 📦 **开箱即用**，脚手架中已经配置 Chrome 插件开发常用的设置项；
- 🔧 **配置收敛**，直接在 `.umi.ts` 或 `config.ts` 设置插件配置；
- 🔥**热更新**： `options` 和 `popup` 页面支持 `react hot reload` 和 `react devtools`；
- 💡**类型定义支持**： 脚手架由 Typescript 编写，已集成 chrome 插件的类型定义文件。



## 📦 安装

```
# 克隆这个模板
git clone https://github.com/arvinxx/umi-chrome-extension-template.git

# 安装依赖，推荐使用 yarn
yarn
```



## 🛠️ 开发

🔔 请确保你对 Chrome 插件开发已经有基本的了解，入门推荐：[Chrome 插件(扩展)开发全攻略](http://blog.haoji.me/chrome-plugin-develop.html)。如果你对项目的配置有疑问，请查阅 umi-plugin-extension 配置项文档（TODO）。





### 启动



```
yarn start
```



## 👷 打包

构建生产级别的包直接运行：

```
yarn run build
```



## 🤝 贡献 [![PRs Welcome](https://camo.githubusercontent.com/0ff11ed110cfa69f703ef0dcca3cee6141c0a8ef465e8237221ae245de3deb3d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](http://makeapullrequest.com/)

欢迎提交 PRs 和 issues。



## License

[MIT](./LICENSE) ® Arvin Xu
