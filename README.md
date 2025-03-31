# PLAY-FRENZY 游戏页面模板使用示例

## 创建新游戏页面流程

下面展示如何使用模板创建一个"像素冒险"（Pixel Adventure）游戏页面的完整流程。

### 1. 复制模板文件

```bash
cp templates/game-template.html pixel-adventure.html
```

### 2. 准备游戏资源

在创建页面前，应该准备好以下资源：

- 游戏图片（主图、截图、logo等）
- 游戏描述文本
- 游戏特性和亮点
- 游戏嵌入链接（iframe URL）
- 开发者信息

### 3. 替换基本变量

替换模板中的基本变量，例如：

```html
<!-- 基本信息 -->
<title>Pixel Adventure - PLAY-FRENZY | Online Gaming Platform</title>
<meta name="description" content="PLAY-FRENZY offers Pixel Adventure - a challenging 2D platform game with retro pixel graphics. Play now for free in your browser!">
<link rel="canonical" href="https://play-frenzy.com/games/pixel-adventure">

<!-- 游戏标题和描述 -->
<h2 class="text-2xl md:text-3xl font-bold mb-4 neon-text">Pixel Adventure - Retro Platform Challenge</h2>
<p class="text-lg text-neon-blue/90 mb-6">Jump, dodge and collect fruits in this challenging 2D platformer with charming retro pixel graphics and precise controls!</p>
```

### 4. 内容块替换示例

下面是一些主要内容块的替换示例：

#### 游戏亮点示例 (`{{GAME_HIGHLIGHTS}}`)

```html
<li class="flex items-start">
    <span class="text-neon-green mr-2">✓</span>
    <span>100+ challenging levels with increasing difficulty</span>
</li>
<li class="flex items-start">
    <span class="text-neon-green mr-2">✓</span>
    <span>Multiple playable characters with unique abilities</span>
</li>
<li class="flex items-start">
    <span class="text-neon-green mr-2">✓</span>
    <span>Collect fruits and gems to unlock new content</span>
</li>
<li class="flex items-start">
    <span class="text-neon-green mr-2">✓</span>
    <span>Avoid traps and defeat enemies in your quest</span>
</li>
```

#### 游戏操作步骤 (`{{HOW_TO_PLAY_STEPS}}`)

```html
<div class="bg-cyber-black/30 p-3 rounded-lg">
    <div class="text-neon-green text-3xl mb-2">1</div>
    <p class="text-neon-blue/90">Use arrow keys or WASD to move your character</p>
</div>
<div class="bg-cyber-black/30 p-3 rounded-lg">
    <div class="text-neon-green text-3xl mb-2">2</div>
    <p class="text-neon-blue/90">Press Space or Up Arrow to jump and double jump</p>
</div>
<div class="bg-cyber-black/30 p-3 rounded-lg">
    <div class="text-neon-green text-3xl mb-2">3</div>
    <p class="text-neon-blue/90">Collect all fruits to complete the level</p>
</div>
```

#### 推荐游戏卡片示例 (`{{RECOMMENDED_GAMES}}`)

```html
<div class="bg-cyber-black/40 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 group">
    <div class="relative">
        <img src="/images/games/super-dash.jpg" alt="Super Dash" class="w-full h-48 object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-70"></div>
        <div class="absolute bottom-0 left-0 right-0 p-4">
            <h3 class="text-white font-bold text-lg">Super Dash</h3>
            <p class="text-neon-blue/80 text-sm">Fast-paced runner with obstacle challenges</p>
        </div>
    </div>
    <div class="p-4">
        <div class="flex justify-between items-center mb-3">
            <span class="text-neon-orange text-sm">Runner / Arcade</span>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-neon-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span class="text-neon-blue/80 text-sm ml-1">4.7</span>
            </div>
        </div>
        <a href="/super-dash.html" class="block text-center bg-cyber-purple/60 hover:bg-cyber-purple py-2 px-4 rounded text-white transition-colors duration-300 game-link">Play Now</a>
    </div>
</div>

<!-- 更多游戏卡片 -->
```

### 5. 完成其他内容区域

按照相同的方式替换所有变量，确保每个部分都有适当的内容。

### 6. 测试与部署

- 在本地浏览器测试页面，确保所有内容正确显示
- 测试游戏iframe加载是否正常
- 检查响应式设计，确保在不同设备上显示正常
- 部署到服务器 