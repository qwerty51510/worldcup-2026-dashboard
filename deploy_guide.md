# 2026 世界杯比赛数据分析看板 - 域名部署与即时数据更新指南

本系统已实现**数据与逻辑的完全解耦**。所有展示的数据（包含进球、射正、射门、角球、伤停列表、主力阵容、核心球员角色及 AI 预测比分）均由 `data.json` 集中管理。

您可以将项目免费托管至网络并绑定您的**自定义域名**，之后您只需编辑 GitHub 上的 `data.json` 文件，即可实现页面的实时数据更新。

---

## 方案一：使用 Vercel 免费托管与自定义域名（推荐，极简）

Vercel 是目前全球最受欢迎的前端托管平台，完美支持自定义域名，且提供免费的 SSL 证书。

### 第一步：将项目代码上传至您的 GitHub 仓库
1. 在您的 GitHub 账号下新建一个仓库（例如命名为 `worldcup-2026-dashboard`）。
2. 在本地终端进入 `worldcup_analysis` 目录，执行以下命令初始化并推送至 GitHub：
   ```bash
   git init
   git add .
   git commit -m "Initial commit with dynamic players data"
   git branch -M main
   git remote add origin https://github.com/您的用户名/worldcup-2026-dashboard.git
   git push -u origin main
   ```

### 第二步：在 Vercel 导入项目
1. 访问 [Vercel 官网](https://vercel.com/) 并使用您的 GitHub 账号登录。
2. 点击 **Add New...** -> **Project**。
3. 导入您刚刚创建的 `worldcup-2026-dashboard` 仓库。
4. 框架预设（Framework Preset）选择 **Other**，构建与输出设置保持默认即可。
5. 点击 **Deploy**。等待大约 20 秒，您的网站就会部署完成，并获得一个免费的 `xxx.vercel.app` 临时域名。

### 第三步：绑定您的自定义域名
1. 在 Vercel 的项目控制台（Dashboard）中，进入 **Settings** -> **Domains**。
2. 在输入框中输入您拥有的域名（例如：`worldcup.yourdomain.com`），然后点击 **Add**。
3. 按照页面提示，前往您的域名注册商（如阿里云、腾讯云、GoDaddy 等）的 DNS 解析控制台，添加对应的解析记录：
   - 如果是子域名（如 `worldcup.yourdomain.com`），添加一条 **CNAME** 记录指向 `cname.vercel-dns.com`。
   - 如果是主域名（如 `yourdomain.com`），添加一条 **A** 记录指向 `76.76.21.21`。
4. 解析生效后，Vercel 会自动为您签发免费的 HTTPS 证书，您就可以通过自己的域名访问此分析系统了。

---

## 方案二：使用 GitHub Pages 免费托管

GitHub 官方提供的静态托管服务，同样完全免费且支持自定义域名。

1. 进入您 GitHub 仓库的 **Settings** -> **Pages**。
2. 在 **Build and deployment** 下的 Build Source 选择 **Deploy from a branch**。
3. Branch 选择 `main` 分支和 `/ (root)` 文件夹，点击 **Save**。
4. 在下方的 **Custom domain** 框中，输入您的域名（如 `worldcup.yourdomain.com`），点击 **Save**。
5. 在您的域名 DNS 解析商处添加一条 **CNAME** 记录指向 `您的用户名.github.io`。

---

## 💡 如何实现“随时更新，即时显示最新数据”？

由于 `app.js` 会在每次页面加载时拉取 `data.json`，因此：

1. **零代码更新**：您不需要克隆代码到本地，也不需要修改 HTML 或 JS。
2. **操作步骤**：
   - 访问您的 GitHub 仓库，找到 [data.json](file:///Users/anchor/anti/worldcup_analysis/data.json) 文件。
   - 点击文件右上角的 **铅笔按钮 (Edit this file)**。
   - 比如挪威队踢完比赛进球数变了，或者有球员新增伤停，直接在 JSON 树状结构中修改对应的数字/文本。
   - 修改完成后，滑动到页面下方，点击 **Commit changes** 提交修改。
3. **即时生效**：Vercel 会在检测到 GitHub 提交后，自动在后台进行不到 5 秒的重新部署。此时您刷新自定义域名，页面上的进球数、排行榜、角球对比、AI预测就已经全部更新为最新数据！
