set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

#git push -f git@github.com:rafahell/pwa-vue.git master:gh-pages
git push -u origin master gh-pages

cd -