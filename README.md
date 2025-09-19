# dep-vue3-ts

## 空.git项目链接远程仓库

```shell
# git init 
# 提示： 使用 'master' 作为初始分支的名称。这个默认分支名称可能会更改。要在新仓库中
# 提示： 配置使用初始分支名，并消除这条警告，请执行：
# 提示：
# 提示：  git config --global init.defaultBranch <名称>
# 提示：
# 提示： 除了 'master' 之外，通常选定的名字有 'main'、'trunk' 和 'development'。
# 提示： 可以通过以下命令重命名刚创建的分支：
# 提示：
# 提示：  git branch -m <name>
git branch -m main
git remote add origin https://github.com/Zhang-WenZhi/dep-vue3-ts.git
git pull origin main:main
git push -u origin main  
# 分支 'main' 设置为跟踪 'origin/main'。
# Everything up-to-date
git branch
# * main
git add .
git commit -m "INIT"
git push --set-upstream origin main
```

## 编译启动

```shell
rm -rf dist && pnpm build
npx serve dist -l 50862 --single
github action vite只能./
```

## 更新依赖

```shell
# 更新所有依赖到最新版本（遵循 package.json 中的版本范围）
pnpm update

# 强制更新所有依赖到最新版本（忽略 package.json 中的版本范围限制）
pnpm update --latest

更新指定依赖：pnpm update <package-name>（如 pnpm update vue）

查看可更新的依赖：pnpm outdated


// useTemplateRef 是 Vue 3.5+ 引入的 API，若项目使用的 Vue 版本低于 3.5，则 TypeScript 无法识别该导出，导致报错。
import { onMounted, withDefaults, useTemplateRef } from 'vue';
// 重启vscode, vscode才生效
```

## git + node  version

```shell
node=v22.14.0 # apple
```

```shell
git init
git commit -m "xxx"
git remote add origin 远程仓库地址
# 示例：git remote add origin https://github.com/你的用户名/仓库名.git
# 首次推送需要指定分支（通常是main或master）
git push -u origin main
# 后续推送可简化为：git push
git pull --set-upstream-to=origin/main main

git checkout -b main
# 全局设置（一次配置，所有仓库生效）
# 全局设置为合并模式
git config --global pull.rebase false
# 或全局设置为变基模式
git config --global pull.rebase true
git pull
#   ######## 输入邮箱账号及生成的个人访问令牌 ########
git push --set-upstream origin main
```