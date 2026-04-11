# 🖼️ 图片替换指南

本文档说明如何将 emoji 替换为定制的 AI 人格小人图片。

---

## 📋 当前状态

✅ **代码已就绪** - 图片加载逻辑已实现，支持无缝替换  
⏳ **等待图片** - 你提供图片后，放入指定目录即可

---

## 🎨 图片需求

### 基础规格

| 项目 | 要求 |
|------|------|
| **格式** | PNG (透明背景) 或 SVG |
| **尺寸** | 512x512 或更大 (会自动缩放) |
| **背景** | 透明背景 (PNG) 或 纯色易抠图 |
| **风格** | 扁平化卡通插画 |
| **色彩** | 与模型主题色呼应 (见下方) |

### 8 个模型对应信息

| 模型 | 文件名 | 主题色 | Emoji | 性格关键词 |
|------|--------|--------|-------|-----------|
| ChatGPT | `chatgpt.png` | 紫色 #8B5CF6 | 🟣 | 温暖、全能、社交达人 |
| Claude | `claude.png` | 蓝色 #3B82F6 | 🔵 | 谨慎、深度、哲学学霸 |
| DeepSeek | `deepseek.png` | 绿色 #10B981 | 🟢 | 技术、简洁、勿扰模式 |
| Kimi | `kimi.png` | 橙色 #F97316 | 🟠 | 细致、长文本、图书管理员 |
| 豆包 | `doubao.png` | 红色 #EF4444 | 🔴 | 活泼、有趣、朋友圈达人 |
| 通义 | `qwen.png` | 黄色 #F59E0B | 🟡 | 务实、高效、项目经理 |
| 智谱 | `zhipu.png` | 灰色 #6B7280 | ⚪ | 严谨、学术、科研工作者 |
| Gemini | `gemini.png` | 青色 #06B6D4 | 🔷 | 发散、知识广、社团达人 |

---

## 📁 放置位置

将图片放入此目录：

```
ai-personality-test/images/results/
├── chatgpt.png
├── claude.png
├── deepseek.png
├── kimi.png
├── doubao.png
├── qwen.png
├── zhipu.png
└── gemini.png
```

---

## 🎯 设计建议

### 风格参考

**16Personalities 风格**:
- 扁平化卡通人物
- 代表性动作/道具
- 色彩与人格类型对应
- 表情生动但不夸张

### 各模型设计灵感

**ChatGPT** (紫色):
- 挥手的友好姿势
- 温暖的微笑
- 可能有对话框或爱心元素

**Claude** (蓝色):
- 思考的姿势 (手托下巴)
- 戴眼镜的学霸形象
- 可能有书本或羽毛笔

**DeepSeek** (绿色):
- 敲代码的姿势
- 戴耳机的技术宅
- 可能有电脑或代码元素

**Kimi** (橙色):
- 看书/整理资料的姿势
- 安静的图书管理员
- 可能有书本或文件夹

**豆包** (红色):
- 派对/庆祝姿势
- 活泼的表情
- 可能有 emoji 或气球

**通义** (黄色):
- 公文包/商务形象
- 干练的职场人士
- 可能有文档或图表

**智谱** (灰色):
- 实验服/科研形象
- 严谨的表情
- 可能有显微镜或数据图表

**Gemini** (青色):
- 多面/变化的形象
- 好奇探索的表情
- 可能有多个元素代表多模态

---

## 🔧 技术实现

### 代码逻辑

在 `js/app.js` 中，图片加载逻辑：

```javascript
// 尝试加载图片
resultEmoji.src = model.image;
resultEmoji.style.display = 'none';
resultEmojiFallback.style.display = 'block';
resultEmojiFallback.textContent = model.emoji;

// 图片加载成功 → 显示图片，隐藏 emoji
resultEmoji.onload = () => {
    resultEmoji.style.display = 'block';
    resultEmojiFallback.style.display = 'none';
};

// 图片加载失败 → 显示 emoji
resultEmoji.onerror = () => {
    resultEmoji.style.display = 'none';
    resultEmojiFallback.style.display = 'block';
};
```

### 无缝替换

- **无图片时**: 显示 emoji (如 🟣)
- **有图片时**: 自动显示图片
- **图片失败**: 自动回退到 emoji

无需修改代码，只需放入图片文件即可！

---

## ✅ 测试步骤

1. 放入图片到 `images/results/` 目录
2. 刷新浏览器
3. 完成测试，查看结果页
4. 检查图片是否正常显示
5. 如显示异常，检查：
   - 文件名是否正确 (小写)
   - 文件路径是否正确
   - 图片格式是否支持

---

## 🎨 如果没有设计师

### 方案 1: AI 绘图工具

使用以下工具生成：

**Midjourney** (质量最好):
```
prompt: flat cartoon illustration of a friendly AI assistant, 
warm purple theme, waving gesture, simple modern style, 
transparent background, 512x512 --no background
```

**DALL-E 3** (理解中文):
```
扁平化卡通插画，一个友好的 AI 助手形象，
温暖紫色调，挥手打招呼的姿势，
简洁现代风格，透明背景，512x512
```

**Stable Diffusion** (免费):
- 使用 `cartoon` 或 `flat illustration` 模型
- 添加 `transparent background` 关键词

**豆包/通义万相** (国内可用):
- 搜索"卡通人物生成"
- 选择扁平化风格

### 方案 2: 在线设计工具

- **Canva**: 有卡通人物素材
- **Figma**: 可绘制简单图形
- **稿定设计**: 中文界面，有模板

### 方案 3: 找设计师

- 淘宝/闲鱼: 搜索"卡通形象设计"
- 站酷: 联系插画师
- Fiverr/Upwork: 国外设计师

---

## 📞 有问题？

如遇到图片替换问题，请提供：
1. 图片文件
2. 遇到的问题描述
3. 浏览器控制台截图 (如有报错)

---

**最后更新**: 2026-04-11
