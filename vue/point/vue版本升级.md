对Vue版本做升级
1.先手动改动webpack.json中的版本号
vue,还有vue-router
还要注意在
devDependencies中的
vue-template-compiler的版本号一定要和vue的版本号相匹配
不然会报错
2.npm install

3.npm run dev


如果依赖库没有变，那么npm run build 出来的vandor的js包的hash值就不会变。
