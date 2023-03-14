"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(a),h=n,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||l;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:1},s="\u5feb\u901f\u5b89\u88c5\u5355\u673a\u7248ES",i={unversionedId:"tutorial-es/es-install",id:"tutorial-es/es-install",title:"\u5feb\u901f\u5b89\u88c5\u5355\u673a\u7248ES",description:"\u670d\u52a1\u89c4\u5212",source:"@site/docs/tutorial-es/es-install.md",sourceDirName:"tutorial-es",slug:"/tutorial-es/es-install",permalink:"/zh-Hans/docs/tutorial-es/es-install",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/zh-Hans/docs/category/elasticsearch"},next:{title:"\u9644\u52a0\u6559\u7a0b",permalink:"/zh-Hans/docs/category/\u9644\u52a0\u6559\u7a0b"}},c={},o=[{value:"\u670d\u52a1\u89c4\u5212",id:"\u670d\u52a1\u89c4\u5212",level:2},{value:"\u5b89\u88c5Elasticsearch\u5e94\u7528",id:"\u5b89\u88c5elasticsearch\u5e94\u7528",level:2},{value:"\u542f\u52a8\u955c\u50cf",id:"\u542f\u52a8\u955c\u50cf",level:2},{value:"\u4fee\u6539\u914d\u7f6e",id:"\u4fee\u6539\u914d\u7f6e",level:2},{value:"\u8bbf\u95eeelasticsearch",id:"\u8bbf\u95eeelasticsearch",level:2}],p={toc:o},u="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5feb\u901f\u5b89\u88c5\u5355\u673a\u7248es"},"\u5feb\u901f\u5b89\u88c5\u5355\u673a\u7248ES"),(0,n.kt)("h2",{id:"\u670d\u52a1\u89c4\u5212"},"\u670d\u52a1\u89c4\u5212"),(0,n.kt)("p",null,"\u4f7f\u7528Docker \u5bb9\u5668\u5b89\u88c5Elasticsearc\uff0cElasticsearch-head\uff0cKibana\u3002Elasticsearch-head\u662f\u4e00\u4e2a\u5f00\u6e90\u7684Elasticsearch\u53ef\u89c6\u5316\u63d2\u4ef6\uff0cKibana\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u6790\u4e0e\u53ef\u89c6\u5316\u5e73\u53f0\uff0c\u8bbe\u8ba1\u51fa\u6765\u7528\u4e8e\u548c",(0,n.kt)("a",{parentName:"p",href:"https://so.csdn.net/so/search?q=Elasticsearch&spm=1001.2101.3001.7020"},"Elasticsearch"),"\u4e00\u8d77\u4f7f\u7528\u7684\u3002\u4f60\u53ef\u4ee5\u7528kibana\u641c\u7d22\u3001\u67e5\u770b\u5b58\u653e\u5728Elasticsearch\u4e2d\u7684\u6570\u636e\u3002 "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Elasticsearch\u7248\u672c7.6.2"),(0,n.kt)("li",{parentName:"ul"},"Kibana \u7248\u672c7.6.2"),(0,n.kt)("li",{parentName:"ul"},"Elasticsearch-head \u7248\u672c Elasticsearch 5.x ")),(0,n.kt)("h2",{id:"\u5b89\u88c5elasticsearch\u5e94\u7528"},"\u5b89\u88c5Elasticsearch\u5e94\u7528"),(0,n.kt)("p",null,"\u4f7f\u7528Docker \u547d\u4ee4\u5b89\u88c5:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull docker.elastic.co/elasticsearch/elasticsearch:7.6.2\n")),(0,n.kt)("p",null,"\u8fd9\u91cc\u4ee5elasticsearch7\u4e3a\u4f8b\uff0c\u53ef\u4ee5\u5230",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/cn/"},"\u5b98\u65b9\u7f51\u7ad9"),"\u4e0b\u8f7d\u3002"),(0,n.kt)("h2",{id:"\u542f\u52a8\u955c\u50cf"},"\u542f\u52a8\u955c\u50cf"),(0,n.kt)("p",null,"\u8fd0\u884c\u670d\u52a1\u5668:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.6.2\n')),(0,n.kt)("p",null,"\u8bf4\u660e\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"discovery.type=single-node"),"\u8bbe\u7f6e\u4e3a\u6307\u5b9a\u8282\u70b9\u4e3a\u5355\u8282\u70b9\u53d1\u73b0\u4ee5\u4fbf\u7ed5\u8fc7ES\u7684\u5f15\u5bfc\u68c0\u67e5\uff0c\u4f7f\u7528docker ps \u67e5\u770b\u4f60\u7684\u5bb9\u5668Id\u3002\u5982\u4e0b\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(5921).Z,width:"1861",height:"244"})),(0,n.kt)("p",null,"\u6b64\u65f6\u4f60\u7684ES\u5df2\u7ecf\u542f\u52a8\u6210\u529f\uff0c\u8bbf\u95ee\u670d\u52a1\u5668",(0,n.kt)("inlineCode",{parentName:"p"},"9200"),"\u7aef\u53e3\u5373\u53ef\u67e5\u770b\u3002"),(0,n.kt)("h2",{id:"\u4fee\u6539\u914d\u7f6e"},"\u4fee\u6539\u914d\u7f6e"),(0,n.kt)("p",null,"\u53ef\u4ee5\u8fdb\u5165\u5bb9\u5668\uff0c\u4fee\u6539",(0,n.kt)("inlineCode",{parentName:"p"},"elasticsearch"),"\u914d\u7f6e\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7f16\u8f91",(0,n.kt)("inlineCode",{parentName:"li"},"vi config/elasticsearch.yml"),"\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u914d\u7f6e\u8282\u70b9\uff0c\u4fee\u6539\u8282\u70b9\u540d\u79f0\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5355\u673a\u7248\u6ca1\u6709\u4fee\u6539\u4e5f\u53ef\u4ee5\u4fdd\u6301\u9ed8\u8ba4\u3002\u5982\u679c\u4e0d\u662f\u751f\u4ea7\u73af\u5883\u9ed8\u8ba4\u662f\u6700\u4f18\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u540e\uff0c\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"docker restart \u5bb9\u5668ID"),"\u91cd\u542f\u5bb9\u5668")),(0,n.kt)("h2",{id:"\u8bbf\u95eeelasticsearch"},"\u8bbf\u95eeelasticsearch"),(0,n.kt)("p",null,"\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"IP:9200 "),"\u8bbf\u95ee\u4f60\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"elasticsearch"),"\u670d\u52a1\u3002\u51fa\u73b0\u5982\u4e0b\u754c\u9762\u8bf4\u660e\u542f\u52a8\u6210\u529f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:a(7756).Z,width:"679",height:"495"})))}d.isMDXComponent=!0},5921:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/docker_ps-b17e6df3887a32cafdffbaf1e0bcc18c.png"},7756:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/es_welcome-4dd3dc6376cb06419f7b8be2c7400982.png"}}]);