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