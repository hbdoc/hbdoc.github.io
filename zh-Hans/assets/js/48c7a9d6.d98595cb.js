"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5151],{7130:s=>{s.exports=JSON.parse('{"blogPosts":[{"id":"Mysql\u8fde\u63a5\u6b21\u6570\u8fc7\u591a","metadata":{"permalink":"/zh-Hans/blog/Mysql\u8fde\u63a5\u6b21\u6570\u8fc7\u591a","source":"@site/blog/2023-03-07-Mysql\u8fde\u63a5\u6b21\u6570\u8fc7\u591a.md","title":"Mysql\u8fde\u63a5\u6b21\u6570\u8fc7\u591a","description":"\u4e00\u3001\u53d1\u73b0\u95ee\u9898","date":"2023-03-07T00:00:00.000Z","formattedDate":"2023\u5e743\u67087\u65e5","tags":[{"label":"mysql","permalink":"/zh-Hans/blog/tags/mysql"},{"label":"sql","permalink":"/zh-Hans/blog/tags/sql"},{"label":"docusaurus","permalink":"/zh-Hans/blog/tags/docusaurus"}],"readingTime":0.55,"hasTruncateMarker":false,"authors":[{"name":"Hbdoc","title":"\u54c8\u6bd4\u6587\u6863","url":"https:/hbdoc.github.io","imageURL":"/img/logo.svg","key":"\u5927\u8c61"}],"frontMatter":{"slug":"Mysql\u8fde\u63a5\u6b21\u6570\u8fc7\u591a","title":"Mysql\u8fde\u63a5\u6b21\u6570\u8fc7\u591a","authors":["\u5927\u8c61"],"tags":["mysql","sql","docusaurus"]}},"content":"#### \u4e00\u3001\u53d1\u73b0\u95ee\u9898\\r\\n\\r\\n![Docusaurus Plushie](img%5C8dcff919d488e530f60099102a365f3.png)\\r\\n\\r\\n\u6b64\u65f6\u5df2\u7ecf\u4e0d\u80fd\u6253\u5f00Mysql\u5ba2\u6237\u7aef\u8fde\u63a5\u6570\u636e\u5e93\u4e86\u3002\\r\\n\\r\\n#### \u4e8c\u3001\u6c38\u4e45\u4fee\u6539\\r\\n\\r\\n\u627e\u5230Linux \u670d\u52a1\u5668\u4e2dMysql \u4e2d my.cnf\u6587\u4ef6\uff0c\u6253\u5f00\u5e76\u5728[mysqld]\u4e0b\u9762\u6dfb\u52a0\u4e00\u6761\u6570\u636e\\r\\n\\r\\n`max_connections=1000` \\r\\n\\r\\n\u8bbe\u7f6e\u5b8c\u6210\u540e\u91cd\u542fmysql\u5373\u53ef\u3002\\r\\n\\r\\n####  \u4e09\u3001\u4e34\u65f6\u4fee\u6539\\r\\n\\r\\n1. \u53ef\u4ee5\u4f7f\u7528`show variables like \'%max_connections%\';`\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u7684\u8fde\u63a5\u6570\u636e\\r\\n2. \u67e5\u770b\u8fde\u63a5\u60c5\u51b5`show processlist;`\\r\\n3. \u8bbe\u7f6e`set GLOBAL max_connections = 1000;`"}]}')}}]);