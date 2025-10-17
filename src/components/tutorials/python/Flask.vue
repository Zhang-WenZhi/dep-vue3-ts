<template>
  <div class="ebook-container">
    <!-- 顶部工具栏 -->
    <a-layout-header class="ebook-header">
      <div class="header-left">
        <MenuOutlined
          class="menu-trigger"
          @click="isCatalogShow = !isCatalogShow"
        />
        <span class="ebook-title">Flask 教程</span>
      </div>
      <div class="header-right">
        <!-- 字体大小调整 -->
        <a-dropdown
          placement="bottomRight"
          :trigger="['click']"
          class="header-tool"
        >
          <FontSizeOutlined />
          <template #overlay>
            <a-menu @click="handleFontSizeChange">
              <a-menu-item key="small">小</a-menu-item>
              <a-menu-item key="normal" :selected="fontSize === 'normal'">中</a-menu-item>
              <a-menu-item key="large">大</a-menu-item>
              <a-menu-item key="xlarge">特大</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

        <!-- 分享按钮 -->
        <a-button type="text" class="header-tool">
          <ShareAltOutlined />
        </a-button>
      </div>
    </a-layout-header>

    <a-layout>
      <!-- 左侧目录 -->
      <a-layout-sider
        :width="260"
        :collapsed="!isCatalogShow"
        :collapsible="false"
        class="ebook-catalog"
      >
        <a-menu
          mode="inline"
          :selected-keys="[currentChapterKey]"
          @click="handleChapterChange"
          class="catalog-menu"
        >
          <a-menu-item key="chapter1">第 1 章：Flask 简介与环境搭建</a-menu-item>
          <a-menu-item key="chapter2">第 2 章：第一个 Flask 应用</a-menu-item>
          <a-menu-item key="chapter3">第 3 章：路由与视图函数</a-menu-item>
          <a-menu-item key="chapter4">第 4 章：模板与静态文件</a-menu-item>
          <a-menu-item key="chapter5">第 5 章：表单处理与数据库</a-menu-item>
        </a-menu>
      </a-layout-sider>

      <!-- 中间阅读区域 -->
      <a-layout-content
        class="ebook-content"
        :class="['font-' + fontSize]"
      >
        <!-- 阅读进度条 -->
        <div
          class="progress-bar"
          :style="{ width: `${readingProgress}%` }"
        ></div>

        <!-- 章节内容 -->
        <div class="content-wrapper">
          <div class="chapter-title">{{ currentChapterTitle }}</div>
          <div class="chapter-content">
            <p>Flask 是一个轻量级的 Python Web 框架，由 Armin Ronacher 开发，基于 Werkzeug WSGI 工具包和 Jinja2 模板引擎。它被设计为灵活、简洁且易于扩展，非常适合开发小型到中型的 Web 应用程序。</p>
            
            <p class="content-space">与 Django 等“大而全”的框架不同，Flask 遵循“微框架”理念，仅提供核心功能（如路由、模板渲染），其他功能（如数据库集成、表单验证）可通过第三方扩展实现。这种设计让开发者可以根据项目需求选择合适的工具，避免不必要的冗余。</p>
            
            <h3 class="content-subtitle">1.1 为什么选择 Flask？</h3>
            <ul class="content-list">
              <li>简洁易学：API 设计直观，新手能快速上手。</li>
              <li>高度灵活：无强制依赖，可自由选择扩展。</li>
              <li>轻量级：核心代码量少，性能开销低。</li>
              <li>社区活跃：拥有丰富的扩展库和完善的文档。</li>
            </ul>
            
            <h3 class="content-subtitle">1.2 环境搭建准备</h3>
            <p>在开始使用 Flask 前，需要准备以下环境：</p>
            <ol class="content-list">
              <li>Python 3.7+（推荐 3.9 或更高版本）。</li>
              <li>虚拟环境工具（如 venv、virtualenv），用于隔离项目依赖。</li>
              <li>包管理工具 pip（通常随 Python 自带）。</li>
            </ol>
          </div>
        </div>

        <!-- 页码控制 -->
        <div class="page-control">
          <a-button
            type="text"
            @click="currentPage--"
            :disabled="currentPage === 1"
          >
            <LeftOutlined />
            上一页
          </a-button>
          <span class="page-info">
            {{ currentPage }} / {{ totalPages }}
          </span>
          <a-button
            type="text"
            @click="currentPage++"
            :disabled="currentPage === totalPages"
          >
            下一页
            <RightOutlined />
          </a-button>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  MenuOutlined, 
  FontSizeOutlined, 
  ShareAltOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons-vue';
// import { 
//   Layout, 
//   Menu, 
//   Dropdown, 
//   Button,
//   MenuProps 
// } from 'ant-design-vue';

// 状态管理
const isCatalogShow = ref(true); // 目录显示状态
const fontSize = ref<'small' | 'normal' | 'large' | 'xlarge'>('normal'); // 字体大小
const currentChapterKey = ref('chapter1'); // 当前章节Key
const currentPage = ref(1); // 当前页码
const totalPages = ref(12); // 总页数

// 当前章节标题（根据选中的Key计算）
const currentChapterTitle = computed(() => {
  const chapterMap: Record<string, string> = {
    chapter1: '第 1 章：Flask 简介与环境搭建',
    chapter2: '第 2 章：第一个 Flask 应用',
    chapter3: '第 3 章：路由与视图函数',
    chapter4: '第 4 章：模板与静态文件',
    chapter5: '第 5 章：表单处理与数据库'
  };
  return chapterMap[currentChapterKey.value];
});

// 阅读进度（根据当前页码计算）
const readingProgress = computed(() => {
  return Math.round((currentPage.value / totalPages.value) * 100);
});

// 字体大小变更
const handleFontSizeChange = ({ key }: { key: string }) => {
  fontSize.value = key as 'small' | 'normal' | 'large' | 'xlarge';
};

// 章节切换
const handleChapterChange = ({ key }: { key: string }) => {
  currentChapterKey.value = key;
  currentPage.value = 1; // 切换章节重置到第一页
};
</script>

<style scoped>
.ebook-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 顶部工具栏 */
.ebook-header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu-trigger {
  font-size: 18px;
  cursor: pointer;
  color: #666;
  transition: color 0.3s;
}

.menu-trigger:hover {
  color: #1890ff;
}

.ebook-title {
  font-size: 18px;
  font-weight: 500;
  color: #1890ff;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-tool {
  font-size: 16px;
  color: #666;
  cursor: pointer;
  transition: color 0.3s;
}

.header-tool:hover {
  color: #1890ff;
}

/* 布局主体 */
.ant-layout {
  flex: 1;
  display: flex;
  overflow: hidden;
}

/* 左侧目录 - 对齐优化 */
.ebook-catalog {
  background: #fafafa;
  border-right: 1px solid #e8e8e8;
  overflow-y: auto;
}

.catalog-menu {
  border-right: none;
  padding: 12px 0; /* 统一上下内边距 */
  text-align: left; /* 强制左对齐 */
}

/* 目录项对齐核心样式 */
.catalog-menu .ant-menu-item {
  height: 44px; /* 固定高度确保对齐 */
  line-height: 44px; /* 行高与高度一致，实现垂直居中 */
  padding: 0 24px; /* 统一左右内边距 */
  margin: 0; /* 清除默认外边距 */
  border-radius: 0; /* 去除圆角避免视觉偏移 */
  font-size: 14px; /* 统一字体大小 */
  transition: background-color 0.2s ease;
}

/* 目录项交互样式 */
.catalog-menu .ant-menu-item-selected {
  background-color: #e6f7ff;
  color: #1890ff;
  font-weight: 500;
}

.catalog-menu .ant-menu-item:hover:not(.ant-menu-item-selected) {
  background-color: #f5f5f5;
}

/* 中间阅读区域 */
.ebook-content {
  flex: 1;
  padding: 40px 80px;
  overflow-y: auto;
  background: #fff;
}

/* 阅读进度条 */
.progress-bar {
  position: fixed;
  top: 64px;
  left: 0;
  height: 3px;
  background: #1890ff;
  z-index: 20;
  transition: width 0.3s ease;
}

/* 内容容器 */
.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.chapter-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #1a1a1a;
  text-align: center;
}

.chapter-content {
  line-height: 1.8;
  color: #333;
  text-align: left; /* 强制左对齐 */
}

.content-space {
  margin: 16px 0;
}

.content-subtitle {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 16px;
  color: #1a1a1a;
}

.content-list {
  margin: 8px 0 16px 24px;
  padding-left: 0;
}

.content-list li {
  margin-bottom: 8px;
}

/* 页码控制 */
.page-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 60px;
  padding-bottom: 40px;
}

.page-info {
  color: #666;
}

/* 字体大小样式 */
.font-small {
  font-size: 14px;
}

.font-normal {
  font-size: 16px;
}

.font-large {
  font-size: 18px;
}

.font-xlarge {
  font-size: 20px;
}
</style>