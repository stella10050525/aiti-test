// ========== AITI v5.0 - 维度制闭环版 ==========
// 基于 MBTI 逻辑，4 个维度，12 题，映射到 8 个 AI 模型

// ========== 测试维度定义 ==========
const dimensions = {
    'T-F': '理性 - 感性',
    'E-P': '高效 - 完美',
    'S-B': '专精 - 广博',
    'C-O': '谨慎 - 开放'
};

// ========== 8 个模型在四维空间中的坐标（v5.0） ==========
const modelCoordinates = {
    chatgpt: { 'T-F': 6, 'E-P': 10, 'S-B': 6, 'C-O': 8 },
    claude: { 'T-F': 13, 'E-P': 13, 'S-B': 12, 'C-O': 14 },
    deepseek: { 'T-F': 14, 'E-P': 11, 'S-B': 13, 'C-O': 10 },
    kimi: { 'T-F': 12, 'E-P': 13, 'S-B': 13, 'C-O': 12 },
    doubao: { 'T-F': 5, 'E-P': 9, 'S-B': 5, 'C-O': 7 },
    qwen: { 'T-F': 11, 'E-P': 12, 'S-B': 12, 'C-O': 9 },
    zhipu: { 'T-F': 13, 'E-P': 14, 'S-B': 13, 'C-O': 13 },
    gemini: { 'T-F': 7, 'E-P': 10, 'S-B': 5, 'C-O': 8 }
};

// ========== 测试题目（v5.0，每维度 3 题） ==========
const questions = [
    // T-F 维度：理性 - 感性
    { id: 1, text: "做决定时，我依据逻辑和数据分析，而不是直觉或情感", dimension: 'T-F' },
    { id: 2, text: "面对争议话题，我更看重事实和证据，而不是人情世故", dimension: 'T-F' },
    { id: 3, text: "朋友遇到烦心事，我更倾向于给解决方案，而不是情感安慰", dimension: 'T-F' },
    
    // E-P 维度：高效 - 完美
    { id: 4, text: "我希望 AI 的回答直接高效，不说废话，快速给结果", dimension: 'E-P' },
    { id: 5, text: "写报告/文档时，我追求结构严谨、数据准确、引用规范", dimension: 'E-P' },
    { id: 6, text: "接到新任务时，我会先全面调研背景信息，确保方向正确", dimension: 'E-P' },
    
    // S-B 维度：专精 - 广博
    { id: 7, text: "我对工具的期待是专业可靠，能高效解决核心问题", dimension: 'S-B' },
    { id: 8, text: "遇到难题时，我会独立思考，用逻辑分析找出解决方案", dimension: 'S-B' },
    { id: 9, text: "周末空闲时，我喜欢尝试新鲜事物，探索各种可能性", dimension: 'S-B' },
    
    // C-O 维度：谨慎 - 开放
    { id: 10, text: "面对争议话题，我会谨慎表达，考虑多方立场和伦理影响", dimension: 'C-O' },
    { id: 11, text: "AI 出错时，我希望它坦诚承认，并给出修正思路", dimension: 'C-O' },
    { id: 12, text: "和朋友互动时，我偏好轻松有趣的氛围，不喜欢太严肃", dimension: 'C-O' }
];

// ========== 模型数据（v5.0 完整版） ==========
const models = {
    chatgpt: {
        name: "ChatGPT",
        emoji: "🟣",
        image: "images/results/chatgpt.png",
        color: "#8B5CF6",
        tagline: "社交达人 · 知心周到 · 全能选手",
        description: "你是 AI 界的学生会主席——热情、周到、人人爱。就像班里那个组织能力超强、谁都愿意找 TA 帮忙的同学，你擅长平衡各方需求，既专业又有温度。朋友遇到烦心事，第一个想到的就是你。",
        abilities: ["共情力强 — 能理解对方的情绪和需求", "表达流畅 — 说话让人舒服，不冷场", "适应性好 — 什么话题都能聊，什么任务都能接", "创意丰富 — 点子多，不枯燥"],
        scenarios: ["情感支持 — 聊天解闷、倾诉心事", "创意写作 — 写文案、写故事、写脚本", "日常咨询 — 查资料、问问题、求建议", "团队协作 — 头脑风暴、项目管理"],
        tips: [
            { type: "技巧", text: "关键决策要多核实，明确说'我需要批判性建议'，会更客观" }
        ],
        alternatives: []
    },
    claude: {
        name: "Claude",
        emoji: "🔵",
        image: "images/results/claude.png",
        color: "#3B82F6",
        tagline: "哲学学霸 · 技术过硬 · 深度思考",
        description: "你是 AI 界的哲学系学霸——说话前会思考三秒，有原则、有底线，让人信任。就像那个总是说'这个问题需要从多个角度分析'的同学，虽然有时显得谨慎，但说出的话最有分量。",
        abilities: ["深度思考 — 能看到问题的本质和深层逻辑", "伦理意识 — 考虑道德影响，不盲目给建议", "系统分析 — 结构化强，逻辑严密", "谨慎负责 — 不确定的事会说'不确定'"],
        scenarios: ["复杂分析 — 需要深度思考的难题", "敏感话题 — 伦理、价值观、争议性问题", "长文档 — 合同、论文、报告的深度解读", "决策支持 — 重要选择的利弊分析"],
        tips: [
            { type: "技巧", text: "说'请直接给建议'，会减少犹豫" }
        ],
        alternatives: []
    },
    deepseek: {
        name: "DeepSeek",
        emoji: "🟢",
        image: "images/results/deepseek.png",
        color: "#10B981",
        tagline: "深度分析 · 详细推理 · 大大方方",
        description: "你是 AI 界的技术宅——业务能力强，就像实验室里那个代码写得最溜、但总是戴着耳机的学长。",
        abilities: ["技术过硬 — 代码、算法、技术方案一流", "性价比高 — token 消耗据说较少", "逻辑严密 — 推理清晰，不犯低级错误", "专注力强 — 不被无关话题分散注意力"],
        scenarios: ["写代码 — 编程、debug、代码审查", "技术方案 — 架构设计、技术选型", "逻辑推理 — 数学题、算法题", "学习技术 — 概念讲解、最佳实践"],
        tips: [
            { type: "技巧", text: "问题描述越精确，回答质量越高" }
        ],
        alternatives: []
    },
    kimi: {
        name: "Kimi",
        emoji: "🟠",
        image: "images/results/kimi.png",
        color: "#F97316",
        tagline: "图书管理员 · 长文本专家 · 安静做事",
        description: "你是 AI 界的图书馆管理员——安静、细致、值得托付。就像那个总是默默整理好所有资料、你需要时总能第一时间找到的同学。网上热梗：'沉默不语只跑程序的小王'。",
        abilities: ["长文本处理 — 能读几百页的文档不费劲", "信息整理 — 归纳总结能力强", "耐心细致 — 复杂任务也能一步步来", "温和友好 — 说话让人舒服，不急躁"],
        scenarios: ["长文档阅读 — 论文、报告、书籍摘要", "资料整理 — 会议记录、访谈整理", "信息提取 — 从大量文本中找关键信息", "学习笔记 — 知识点梳理、结构化"],
        tips: [
            { type: "技巧", text: "需要处理大量文本和信息的时候，直接丢文档，说'帮我总结重点'" }
        ],
        alternatives: []
    },
    doubao: {
        name: "豆包",
        emoji: "🔴",
        image: "images/results/doubao.png",
        color: "#EF4444",
        tagline: "全能百搭 · 有趣好玩 · 接地气",
        description: "你是 AI 界的朋友圈达人——活泼、接地气、会用 emoji。就像朋友圈里那个最会拍照、最会找乐子的朋友，和 TA 在一起永远不会无聊。",
        abilities: ["有趣好玩 — 聊天不枯燥，经常有梗", "接地气 — 懂网络热词，不端着", "反应快 — 回复迅速，不拖沓", "亲和力强 — 让人放松，不紧张"],
        scenarios: ["日常聊天 — 无聊时找人说话", "内容任务 — 写短文案、想点子、做图片", "娱乐互动 — 玩游戏、讲笑话", "生活建议 — 吃喝玩乐推荐"],
        tips: [
            { type: "技巧", text: "像跟朋友聊天一样跟 TA 说话" }
        ],
        alternatives: []
    },
    qwen: {
        name: "通义千问",
        emoji: "🟡",
        image: "images/results/qwen.png",
        color: "#F59E0B",
        tagline: "项目经理 · 靠谱高效 · 说到做到",
        description: "你是 AI 界的项目经理——务实、高效、执行力强。就像工作中那个永远靠谱、交代的事一定能完成的同事，喜欢分点列举，清晰明了。",
        abilities: ["高效执行 — 不拖沓，快速给结果", "结构化 — 喜欢分点列举，清晰明了", "本土化 — 懂中文语境和中国式表达", "实用主义 — 给的建议能落地"],
        scenarios: ["工作文档 — 周报、总结、方案", "中文写作 — 公文、邮件、通知", "商务沟通 — 客服话术、销售脚本", "数据处理 — 表格、清单、分类", "点奶茶 — ？"],
        tips: [
            { type: "技巧", text: "说'请分点列举'，会更符合预期" }
        ],
        alternatives: []
    },
    zhipu: {
        name: "智谱",
        emoji: "⚪",
        image: "images/results/zhipu.png",
        color: "#6B7280",
        tagline: "科研工作者 · 严谨认真 · 引用规范",
        description: "你是 AI 界的科研大佬——严谨、学术、引用规范。就像实验室里那个论文写得最规范、数据最准确的学长，重视事实和证据，不偏不倚。",
        abilities: ["严谨准确 — 不胡说，有根据", "学术规范 — 引用、格式都很标准", "事实导向 — 重视数据和证据", "客观中立 — 不偏不倚，就事论事"],
        scenarios: ["学术写作 — 论文、研究报告", "事实查询 — 需要准确信息的场景", "数据分析 — 统计、图表解读", "专业咨询 — 法律、医疗等严谨领域"],
        tips: [
            { type: "技巧", text: "说'请提供引用来源'，会更规范" }
        ],
        alternatives: []
    },
    gemini: {
        name: "Gemini",
        emoji: "🔷",
        image: "images/results/gemini.png",
        color: "#06B6D4",
        tagline: "多模态 · 思维跳跃 · 知识达人",
        description: "你是 AI 界的社团达人——什么都懂，就像那个能从量子力学聊到今晚吃什么的学霸，知识广博，联想丰富。",
        abilities: ["知识广博 — 各个领域都能聊", "联想丰富 — 能从 A 想到 Z", "多模态 — 图文混合处理能力强", "灵活应变 — 不僵化，能调整"],
        scenarios: ["头脑风暴 — 需要发散思维的场景", "跨领域 — 需要多领域知识的任务", "图文混合 — 处理带图片的内容", "信息探索 — 找资料、查背景"],
        tips: [
            { type: "技巧", text: "需要多模态和跨领域知识的时候可以试试" }
        ],
        alternatives: []
    }
};

// ========== 全局变量 ==========
let currentQuestionIndex = 0;
let answers = {}; // { 'T-F': [score1, score2, score3], ... }
let currentResultModel = null;

// ========== DOM 元素 ==========
const homePage = document.getElementById('home-page');
const quizPage = document.getElementById('quiz-page');
const resultPage = document.getElementById('result-page');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionText = document.getElementById('question-text');
const progressFill = document.getElementById('progress-fill');
const currentQuestionEl = document.getElementById('current-question');

// ========== 初始化 ==========
function init() {
    Object.keys(dimensions).forEach(dim => {
        answers[dim] = [];
    });
    startBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    document.getElementById('restart-btn').addEventListener('click', restart);
    document.getElementById('share-btn').addEventListener('click', showShare);
    document.querySelector('.close-modal').addEventListener('click', hideShare);
    document.querySelector('.options').addEventListener('click', handleOptionClick);
    document.getElementById('total-questions').textContent = questions.length;
}

// ========== 答题逻辑 ==========
function startQuiz() {
    homePage.classList.remove('active');
    quizPage.classList.add('active');
    showQuestion(0);
}

function showQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.text;
    currentQuestionEl.textContent = index + 1;
    const progress = ((index + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    prevBtn.disabled = index === 0;
    
    const savedAnswer = answers[question.dimension][getDimensionQuestionIndex(question.dimension, index)];
    nextBtn.disabled = savedAnswer === undefined;
    
    if (savedAnswer !== undefined) {
        document.querySelectorAll('.option').forEach(o => {
            o.classList.toggle('selected', parseInt(o.dataset.value) === savedAnswer);
            o.querySelector('input').checked = (parseInt(o.dataset.value) === savedAnswer);
        });
    } else {
        document.querySelectorAll('.option').forEach(o => {
            o.classList.remove('selected');
            o.querySelector('input').checked = false;
        });
    }
}

function handleOptionClick(e) {
    const option = e.target.closest('.option');
    if (!option) return;
    const value = parseInt(option.dataset.value);
    const question = questions[currentQuestionIndex];
    const dimQIndex = getDimensionQuestionIndex(question.dimension, currentQuestionIndex);
    answers[question.dimension][dimQIndex] = value;
    document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
    option.querySelector('input').checked = true;
    nextBtn.disabled = false;
}

function getDimensionQuestionIndex(dimension, questionIndex) {
    let count = 0;
    for (let i = 0; i <= questionIndex; i++) {
        if (questions[i].dimension === dimension) {
            if (i === questionIndex) return count;
            count++;
        }
    }
    return -1;
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        calculateResult();
    }
}

// ========== 结果计算（四维坐标 + 欧氏距离） ==========
function calculateResult() {
    // 步骤 1：计算各维度得分
    const userCoordinates = {};
    
    // T-F 维度：Q1+Q2+Q3（越高越 T）
    userCoordinates['T-F'] = answers['T-F'][0] + answers['T-F'][1] + answers['T-F'][2];
    
    // E-P 维度：Q4+(6-Q5)+(6-Q6)（越高越 E）
    userCoordinates['E-P'] = answers['E-P'][0] + (6 - answers['E-P'][1]) + (6 - answers['E-P'][2]);
    
    // S-B 维度：Q7+Q8+(6-Q9)（越高越 S）
    userCoordinates['S-B'] = answers['S-B'][0] + answers['S-B'][1] + (6 - answers['S-B'][2]);
    
    // C-O 维度：Q10+Q11+(6-Q12)（越高越 C）
    userCoordinates['C-O'] = answers['C-O'][0] + answers['C-O'][1] + (6 - answers['C-O'][2]);
    
    // 步骤 2：计算与 8 个模型的欧氏距离
    const distances = {};
    Object.keys(modelCoordinates).forEach(modelKey => {
        const modelCoord = modelCoordinates[modelKey];
        let distanceSquared = 0;
        Object.keys(dimensions).forEach(dim => {
            const diff = userCoordinates[dim] - modelCoord[dim];
            distanceSquared += diff * diff;
        });
        distances[modelKey] = Math.sqrt(distanceSquared);
    });
    
    // 步骤 3：按距离排序，找最近的模型
    const sortedModels = Object.entries(distances).sort(([, a], [, b]) => a - b);
    const resultModel = sortedModels[0][0];
    const secondModel = sortedModels[1][0];
    const thirdModel = sortedModels[2][0];
    
    currentResultModel = resultModel;
    showResult(resultModel, secondModel, thirdModel, sortedModels);
}

// ========== 显示结果 ==========
function showResult(modelKey, second, third, sortedDistances) {
    quizPage.classList.remove('active');
    resultPage.classList.add('active');
    const model = models[modelKey];
    document.getElementById('result-name').textContent = model.name;
    document.getElementById('result-tagline').textContent = model.tagline;
    document.getElementById('result-description').textContent = model.description;
    document.documentElement.style.setProperty('--primary', model.color);
    document.documentElement.style.setProperty('--primary-dark', adjustColor(model.color, -20));
    
    // 优先显示图片，失败则 fallback 到 emoji
    const resultEmoji = document.getElementById('result-emoji');
    const resultImage = document.getElementById('result-image');
    
    resultEmoji.textContent = model.emoji;
    resultEmoji.style.display = 'block';
    
    if (resultImage && model.image) {
        resultImage.src = model.image;
        resultImage.style.display = 'none';
        resultImage.onload = () => {
            resultImage.style.display = 'block';
            resultEmoji.style.display = 'none';
        };
        resultImage.onerror = () => {
            resultImage.style.display = 'none';
            resultEmoji.style.display = 'block';
        };
    }
    
    document.getElementById('result-abilities').innerHTML = model.abilities.map(a => '<li>' + a + '</li>').join('');
    document.getElementById('result-scenarios').innerHTML = model.scenarios.map(s => '<li>' + s + '</li>').join('');
    document.getElementById('result-tips').innerHTML = model.tips.map(t => '<div class="tip-item">' + t.text + '</div>').join('');
    
    // 其他推荐：动态显示第 2、3 名的模型
    const secondModel = sortedDistances[1][0];
    const thirdModel = sortedDistances[2][0];
    document.getElementById('result-alternatives').innerHTML = [
        '<div class="alt-item">第二选择：<strong>' + models[secondModel].name + '</strong></div>',
        '<div class="alt-item">第三选择：<strong>' + models[thirdModel].name + '</strong></div>'
    ].join('');
}

// ========== 分享功能 ==========
function showShare() {
    const resultName = document.getElementById('result-name').textContent;
    const resultTagline = document.getElementById('result-tagline').textContent;
    const model = models[currentResultModel];
    
    document.getElementById('share-name').textContent = resultName;
    document.getElementById('share-tagline').textContent = resultTagline;
    
    const shareEmoji = document.getElementById('share-emoji');
    const shareImage = document.getElementById('share-image');
    
    shareEmoji.textContent = model.emoji;
    shareEmoji.style.display = 'block';
    shareImage.style.display = 'none';
    
    if (shareImage && model.image) {
        shareImage.src = model.image;
        shareImage.onload = () => {
            shareImage.style.display = 'block';
            shareEmoji.style.display = 'none';
        };
        shareImage.onerror = () => {
            shareImage.style.display = 'none';
            shareEmoji.style.display = 'block';
        };
    }
    
    document.getElementById('share-modal').classList.add('active');
}

function hideShare() {
    document.getElementById('share-modal').classList.remove('active');
}

// ========== 工具函数 ==========
function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
}

function restart() {
    currentQuestionIndex = 0;
    answers = {};
    currentResultModel = null;
    Object.keys(dimensions).forEach(dim => {
        answers[dim] = [];
    });
    resultPage.classList.remove('active');
    homePage.classList.add('active');
    document.documentElement.style.setProperty('--primary', '#FF6B35');
    document.documentElement.style.setProperty('--primary-dark', '#E85D2A');
}

// ========== 启动应用 ==========
init();
