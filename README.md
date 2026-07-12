# 房贷计算器 | Mortgage Calculator

中英双语房贷计算器网站，支持 Google AdSense，可部署到 GitHub Pages 或 Cloudflare Pages。

## 功能特性

- 中英双语切换（自动检测浏览器语言）
- 等额本息 / 等额本金两种计算方式
- 8 种货币选择（USD/CNY/EUR/GBP/AUD/CAD/JPY/SGD）
- 还款明细表（可展开/收起）
- 本金/利息占比图表
- SEO 优化（Schema.org 结构化数据）
- Google AdSense 广告位（顶部/中部/底部）
- 响应式设计，完美适配手机
- FAQ 常见问题模块

## 文件结构

```
mortgage-calculator/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 计算逻辑 + 双语切换
├── manifest.json       # PWA 清单
├── robots.txt          # 搜索引擎爬虫规则
├── sitemap.xml         # 站点地图
├── ads.txt             # Google AdSense 验证
└── README.md           # 说明文档
```

## 部署方法

### 方法一：GitHub Pages

1. 在 GitHub 创建新仓库（如 `mortgage-calculator`）
2. 将所有文件上传到仓库
3. 进入仓库 Settings → Pages
4. Source 选择 `main` 分支，文件夹选 `/ (root)`
5. 保存后几分钟即可访问：`https://你的用户名.github.io/mortgage-calculator/`

### 方法二：Cloudflare Pages（推荐）

1. 将代码推送到 GitHub 仓库
2. 登录 Cloudflare Dashboard → Pages → Create a project
3. 连接 GitHub 仓库
4. 构建配置：
   - Framework preset: `None`
   - Build command: （留空）
   - Build output directory: `/`
5. 点击 Save and Deploy
6. 绑定自定义域名（如 `heils.top`）

### 方法三：Cloudflare Pages 直接上传

1. 登录 Cloudflare Dashboard → Pages
2. 点击 "Upload assets"
3. 将整个文件夹拖入上传
4. 部署完成

## 配置 Google AdSense

### 1. 申请 AdSense

1. 访问 https://www.google.com/adsense
2. 用 Google 账号登录并申请
3. 填写网站地址（需部署后才能申请）
4. 等待审核（通常 1-14 天）

### 2. 配置广告代码

审核通过后：

1. 在 AdSense 后台获取您的 Publisher ID（格式：`ca-pub-XXXXXXXXXXXXXXXX`）
2. 打开 `index.html`
3. 将所有 `ca-pub-XXXXXXXXXXXXXXXX` 替换为您的真实 Publisher ID
4. 取消注释广告代码块（删除 `<!--` 和 `-->`）
5. 在 AdSense 后台创建广告单元，获取 `data-ad-slot` ID
6. 将 `XXXXXXXXXX` 替换为真实的广告位 ID

### 3. 配置 ads.txt

打开 `ads.txt`，将 `pub-XXXXXXXXXXXXXXXX` 替换为您的 Publisher ID（不含 `ca-` 前缀）。

### 4. 配置域名

- 将 `index.html` 中的 `https://your-domain.com/` 替换为您的真实域名
- 将 `sitemap.xml` 和 `robots.txt` 中的域名也一并替换

## SEO 优化建议

1. 提交站点到 Google Search Console
2. 提交 sitemap.xml
3. 确保网站 HTTPS 正常（Cloudflare 自动处理）
4. 定期更新内容（可添加博客模块）
5. 在域名根目录配置 `.well-known/security.txt`

## 自定义修改

### 修改默认值

编辑 `index.html` 中的 `value` 属性：
- 贷款金额：`<input id="loanAmount" value="300000">`
- 首付：`<input id="downPayment" value="60000">`
- 利率：`<input id="interestRate" value="6.5">`

### 添加新语言

在 `script.js` 的 `translations` 对象中添加新语言，并在 `index.html` 的语言切换按钮中添加对应按钮。

### 修改主题色

编辑 `styles.css` 顶部的 CSS 变量：
```css
:root {
    --primary: #2563eb;  /* 主色 */
    --accent: #f59e0b;   /* 强调色 */
}
```

## License

MIT
