# AITI v5.0 - AI 人格测试

> 🦞 技术小白用有道龙虾 LobsterAI 搓出来的 AI 人格测试网页

**在线测试**: [https://你的用户名.gitee.io/aiti-test/](https://你的用户名.gitee.io/aiti-test/)

---

## 📖 项目介绍

AITI (Artificial Intelligence Type Indicator) 是一个有趣的 AI 人格测试，帮你找到最适合你的 AI 模型！

### ✨ 特色功能

- **12 道精选题** - 参考 MBTI 测评逻辑，约 2-3 分钟完成
- **8 个主流模型** - ChatGPT、Claude、DeepSeek、Kimi、豆包、Qwen、智谱、Gemini
- **详细解读报告** - 性格描述 + 使用建议 + 匹配场景
- **完全免费** - 无需注册，结果可分享

### 🎯 测试维度

1. **T-F (理性 - 感性)** - 做决定的依据
2. **E-P (高效 - 完美)** - 工作与处事风格
3. **S-B (专精 - 广博)** - 知识覆盖范围
4. **C-O (谨慎 - 开放)** - 表达与接受度

---

## 🚀 本地运行

直接双击打开 `index.html` 即可在浏览器中运行。

或使用本地服务器：
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

然后访问 `http://localhost:8000`

---

## 📁 项目结构

```
ai-personality-test/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── app.js          # 核心逻辑
├── images/
│   ├── logo.png        # Logo
│   └── results/        # 8 个模型结果图
│       ├── chatgpt.png
│       ├── claude.png
│       └── ...
└── README.md           # 本文件
```

---

## 🛠️ 部署到 Gitee Pages

### 步骤 1: 创建仓库
1. 访问 [gitee.com](https://gitee.com)
2. 点击右上角 "+" → "新建仓库"
3. 仓库名：`aiti-test`
4. 公开仓库
5. 勾选"使用 README.md 初始化仓库"（可选）

### 步骤 2: 上传文件
**方式 A - 网页上传**:
1. 进入仓库 → 点击"上传文件"
2. 拖拽所有文件到上传区域
3. 提交

**方式 B - Git 命令**:
```bash
cd ai-personality-test
git init
git remote add origin https://gitee.com/你的用户名/aiti-test.git
git add .
git commit -m "Initial commit: AITI v5.0"
git push -u origin master
```

### 步骤 3: 开启 Pages
1. 进入仓库 → 服务 → Gitee Pages
2. 选择分支：`master`
3. 点击"确定"
4. 等待 1-2 分钟

### 步骤 4: 访问
访问：`https://你的用户名.gitee.io/aiti-test/`

---

## 📝 更新说明

### v5.0 (2026-04-11)
- ✅ 4 个维度，12 题，欧氏距离匹配
- ✅ 8 个 AI 模型人格完整解读
- ✅ 龙虾橙主题配色
- ✅ 响应式设计，适配手机端
- ✅ 分享卡片功能

### 已知问题
- 无

---

## 🙏 致谢

- 测试逻辑：综合多个 AI 模型探讨生成
- 网页制作：有道龙虾 LobsterAI
- 灵感来源：MBTI 人格测试

---

## 📄 免责声明

🚨 测试和解读是综合和多个 AI 模型探讨生成的，网页是技术小白用有道龙虾 LobsterAI 搓出来的。

🙌 测试结果仅供参考玩梗，不构成专业或商业推荐。

---

## 📱 联系方式

小红书：[@AI 啥啥](https://www.xiaohongshu.com/user/profile/68452893000000001b0226a4)

---

**© 2026 AITI v5.0 · Made with 🦞**
