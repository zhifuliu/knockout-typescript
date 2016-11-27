# knockout-typescript
knockout和typescript 官方文档已经有两者联合使用的说明，本工程将实验官方的文档，按照流程新建工程并将两者合并，将有三个分支，master、knockout、typescript，其中 master 是合并两者的实验。一直没有机会看这两者的最新版本了，借机好好看看学学

## 备注
刚才按照 typescript 官方文档走了下 gulp 和 knockout 流程，typescript 已经实现了很多，并不像一年多前使用的那样，很多依赖需要一个 .d.ts 文件，不用definitions 文件夹和 referenes.d.ts 文件（目前走完流程是这样），官方文档走完 knockout 流程，离一个单页面应用只差一个路由管理（可使用 crossroads、hasher 来实现）,其他的细节可上网找资料，比如 require 一个 html 等，可使用 require-text 来实现。
