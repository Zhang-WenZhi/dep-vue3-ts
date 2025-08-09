<template>
    <!-- 分割线容器 - 确保分割线居中 -->
    <div :style="dividerContainerStyle">
      <a-divider :style="titleStyle" orientation="left" orientation-margin="0px">
        <h3>
            <MenuUnfoldOutlined /> 数据分析&人工智能&爬虫
        </h3>
    </a-divider>
    </div>
    <!-- 外层容器确保整体居中 -->
    <div :style="cardContainerStyle">
      <a-space :size="[8, 16]" wrap :style="spaceStyle">
        <template v-for="_i in 20" :key="_i">
            <a-card :style="getCardStyle(_i)" :body-style="{ padding: 0, overflow: 'hidden' }">
                <a href='https://github.com/' target='_blank'>
                    <a-typography-text :level="3" :style="{ color: '#e81e33', fontWeight: 'bold' }">
                        【学习 Julia】
                    </a-typography-text>
                    <a-flex justify="space-between">
                        <a-space>
                            <img alt="avatar"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABklBMVEUAAABkMyF5PnXKPDPIOzKUWLGlMCiVWLGUV7A3liWTV7A4mCY3liU2lCSQVayKUaW3Ni0ufx9+SpYlaBg4lybJOzPIOzLEOTHDOTDAOC+/OC/BODAziyIvgx83lybIOzKTVq/HOzKSVq83lSWQVaw1kiSPVKuPVKs1kSTBODA0jyONU6g0jiONU6i/OC80jiM3mCWOVKqIUKMwgh/KPDM4lyY4lyaUV7HKOzM3lybLOzI4mCaUV7GTV7CSVq83lSXHOzI2lCWRVq6TV7A2lCTFOjGRVa3FOjE2kyU1kCSKUaU0kCOMUqc0jiONVKk0jSMziyIzjCKFT5+CTJyxNCzLPDPKPDOUV7GQVKzIOzI3lSU3lSXHOzLJOzI2kyU3lSXFOjE2kyTEOTGQVaw2kyWTV7DIOzI3lyXFOjG6Ny7AODC8Ny8zjSOKUaS7Ny63NS2SVq44mCbGOzLJPDORVa3HOzLFOjE2kyWRVq3EOjGOVKqMU6i+ODC7Ny6IUKKETp4xhSGzNSyVWLI4mCbLPDPKPDNvJa+0AAAAgnRSTlMAAgX63PcJ/eTa0/7Tk4swFgwLBPzsyX54UTgeHgjoz8m+vLp8dXJtbWJiVU1FPisdHBcQ/vr28fDv4ODe18PAubGtopyYlIiEXVxWSj46NiIYFRIQ/vTu5dXLx8Oyq6KOh4WEf35+cXBdRjQwKSkZwLysppqakIl3cmlPSCUkExMRR2ulQQAAAutJREFUWMPN1eVf20AYwPEn1EPdhQJ1oS0tDHd3hjNgGwyXAXPXJPu/R7K0n0bueh1v+L7m+YW7XC/woDnac9mzs2yu3QH/oykda+5i77ibRxIr9T89bWarmBKdUJf2MTcr0Rh7DHVYMrMKpqU6ns/PKwvE/8NqjFW11wREqFkWweICEi+bUYE+skW8YJEsFMkOmNEBE8ku5LrRAfcCQSDBYhwTBCy4wH7tTXA9xwVi4XsGXtcOUPu4wJiL5BhgWKC2bCMmkCY7yUh9JD/p8Bg6MEJ0O865UfONaSDxawQV2F0FIrk+9fnuBSBDJbpUFzDrAkJhi9qrnHQAMcdHxW+6y1LXl8G1YJZdJXNhqM/KsdldWb1pluzbpreHQnY9iIpzk3umgYGB3cls5SZzrpVKHU5QZQ98iOz09+9EDgL28uvoLBabip3lS+TnojVKDw4OvZpu6wC5W3+LhhNpWj7fgsJaqlXHiHR0vATVGgJeTsIbaJCdjcVhRoKer/oL/eEWJ7Pl00uekNxmZHRWZ2V+RsMpaGb0VfNxHaNgmBYLlI+fVxb8FJSl+HllwfpvFd96OVWeAoiWjYwqXRvc+R3hEEY3xJc/ziC08q8z8wgV0GRA0KZjUFIA+lEOaVQv7OA4gzS8DgUPOuC54gPXRnSgZxF8m+jAn4ywAgODZoU3HMYhH/jEYEShBRd4yx+FaVxgELS4wDP+pEzgAk/uH3iKC7yHO1ZcgIYpXMDPB77gAuOQ0aDnNQE+kNeh5w1J+I7ZBG2ID3TQ6IDRBhRmDVMU1NiEiQaAoAd5koMgsBmRJznP3ycHqMBM+UaJowLvhBslhDiM3lDlQo6qzw9dg6CgVd3BIFTYaNUdzIPoUqsyfwlVlmmV+a9QUZCfx83IFUjYogb5dZaXfNf8/ZLH++0gs54ckjz+qARSNz5vr3A7Pur1+m5AxY/48LZBOH49rUc2UNoIXpyfnp5fBDcAwWmbT52cJOeX1+EB+QtZ8fgdBYwXowAAAABJRU5ErkJggg=="
                                :style="imgStyle" />
                            <a-flex :style="{ padding: '10px' }">
                                <a-typography>
                                    <a-typography-text :level="3">
                                        Julia 是一个面向科学计算的高性能动态高级程序设计语言
                                    </a-typography-text>
                                </a-typography>
                            </a-flex>
                        </a-space>
                    </a-flex>
                </a>
            </a-card>
        </template>
    </a-space>
    </div>
    

</template>

<script setup lang="ts">
import { MenuUnfoldOutlined } from '@ant-design/icons-vue';
import type { CSSProperties } from 'vue';


// 扩展更多柔和色调的基础色，打造丰富配色库 
const baseColorPool = [
  '#e8f4f8', '#fcefee', '#fdf6e3', '#e6f7f3', '#f9f0ff',
  '#eef5f8', '#fdf2f2', '#fff9e6', '#d9f9f0', '#f5e6ff',
  '#d6f3f8', '#fce2e2', '#fff5d1', '#c8f7e9', '#f2d9ff',
  '#c3eaf2', '#fadada', '#fff2bf', '#b3f5e5', '#ebc8ff'
];
// 生成随机渐变背景样式的工具函数
const getRandomGradientStyle = () => {
  // 随机选起始色
  const startColor = baseColorPool[Math.floor(Math.random() * baseColorPool.length)]; 
  // 随机选结束色（可重复选，强化随机性）
  const endColor = baseColorPool[Math.floor(Math.random() * baseColorPool.length)]; 
  // 随机选渐变方向（增加角度多样性）
  const gradientAngle = `${Math.floor(Math.random() * 360)}deg`; 

  return {
    width: '250px',
    height: '100px',
    // 线性渐变背景，方向和颜色随机
    background: `linear-gradient(${gradientAngle}, ${startColor}, ${endColor})`, 
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', // 更细腻的阴影
    transition: 'all 0.3s ease', // 过渡让交互更丝滑
    cursor: 'pointer',
    // 悬停时微变样式，增强交互反馈
    '&:hover': { 
      transform: 'scale(1.02)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }
  } as CSSProperties;
};
// 循环渲染时，为每个卡片生成独立的随机渐变样式
const getCardStyle = (index: number) => {
  // 每次调用重新生成随机样式，确保每张卡片背景独特
  return getRandomGradientStyle(); 
};

// const cardStyle: CSSProperties = {
//     width: '250px',
//     height: '100px',
// };
const imgStyle: CSSProperties = {
    display: 'block',
    width: '36px',
    height: '36px',
};

// 分割线容器样式 - 确保分割线居中
const dividerContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    padding: '16px 0', // 与上下内容保持间距
    width: '100%'
};

const cardContainerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0',
  width: '100%' // 占满父容器宽度，为居中提供基础
};
// a-space样式：控制卡片排列的核心样式
const spaceStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center', // 卡片行内居中
    flexWrap: 'wrap',         // 自动换行
    maxWidth: '1200px',       // 限制最大宽度，避免卡片过宽
    width: '100%',            // 响应式宽度
    padding: '0 16px'         // 左右留白，避免边缘紧贴
};

const titleStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center', // 卡片行内居中
    flexWrap: 'wrap',         // 自动换行
};

</script>