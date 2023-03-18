"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6239],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),p=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return t?o.createElement(f,r(r({ref:n},s),{},{components:t})):o.createElement(f,r({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1},r="Hadoop\u96c6\u7fa4\u642d\u5efa",l={unversionedId:"tutorial-hadoop/hadoop\u96c6\u7fa4\u642d\u5efa",id:"tutorial-hadoop/hadoop\u96c6\u7fa4\u642d\u5efa",title:"Hadoop\u96c6\u7fa4\u642d\u5efa",description:"\u670d\u52a1\u89c4\u5212",source:"@site/docs/tutorial-hadoop/hadoop\u96c6\u7fa4\u642d\u5efa.md",sourceDirName:"tutorial-hadoop",slug:"/tutorial-hadoop/hadoop\u96c6\u7fa4\u642d\u5efa",permalink:"/zh-Hans/docs/tutorial-hadoop/hadoop\u96c6\u7fa4\u642d\u5efa",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7ffb\u8bd1\u4f60\u7684\u7ad9\u70b9",permalink:"/zh-Hans/docs/tutorial-extras/translate-your-site"}},d={},p=[{value:"\u670d\u52a1\u89c4\u5212",id:"\u670d\u52a1\u89c4\u5212",level:2},{value:"\u57fa\u7840\u8bbe\u65bd",id:"\u57fa\u7840\u8bbe\u65bd",level:2},{value:"\u914d\u7f6e\u670d\u52a1\u540d",id:"\u914d\u7f6e\u670d\u52a1\u540d",level:2},{value:"\u914d\u7f6eHosts",id:"\u914d\u7f6ehosts",level:2},{value:"\u5173\u95ed\u9632\u706b\u5899",id:"\u5173\u95ed\u9632\u706b\u5899",level:2},{value:"\u914d\u7f6e\u65f6\u95f4\u540c\u6b65",id:"\u914d\u7f6e\u65f6\u95f4\u540c\u6b65",level:2},{value:"\u5b89\u88c5Jdk",id:"\u5b89\u88c5jdk",level:2},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",level:2},{value:"\u914d\u7f6e\u514d\u5bc6\u767b\u5f55",id:"\u914d\u7f6e\u514d\u5bc6\u767b\u5f55",level:2},{value:"\u90e8\u7f72\u914d\u7f6e",id:"\u90e8\u7f72\u914d\u7f6e",level:2},{value:"\u5206\u53d1\u76ee\u5f55",id:"\u5206\u53d1\u76ee\u5f55",level:2},{value:"\u521d\u59cb\u5316\u542f\u52a8",id:"\u521d\u59cb\u5316\u542f\u52a8",level:2},{value:"\u542f\u52a8\u7a0b\u5e8f",id:"\u542f\u52a8\u7a0b\u5e8f",level:2},{value:"\u8bbf\u95ee",id:"\u8bbf\u95ee",level:2}],s={toc:p},u="wrapper";function c(e){let{components:n,...i}=e;return(0,a.kt)(u,(0,o.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hadoop\u96c6\u7fa4\u642d\u5efa"},"Hadoop\u96c6\u7fa4\u642d\u5efa"),(0,a.kt)("h2",{id:"\u670d\u52a1\u89c4\u5212"},"\u670d\u52a1\u89c4\u5212"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51c6\u59073\u4e2a\u8282\u70b9\uff0c\u5206\u522b\u662fnode1\uff0cnode2\uff0cnode3"),(0,a.kt)("li",{parentName:"ul"},"\u89d2\u8272\u5206\u914d\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"node1:namenode"),"  ,",(0,a.kt)("inlineCode",{parentName:"li"},"datanode\uff1anode2.node3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"secondary:node2")),(0,a.kt)("li",{parentName:"ul"},"\u51c6\u5907jdk\u5b89\u88c5\u5305\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"jdk-8u181-linux-x64.rpm")),(0,a.kt)("li",{parentName:"ul"},"\u51c6\u5907Hadoop\u5b89\u88c5\u5305:",(0,a.kt)("inlineCode",{parentName:"li"},"hadoop-2.6.5.tar.gz"))),(0,a.kt)("h2",{id:"\u57fa\u7840\u8bbe\u65bd"},"\u57fa\u7840\u8bbe\u65bd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IP\u53ca\u4e3b\u673a\u540d\u548c\u670d\u52a1\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6ehosts\u6620\u5c04"),(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u540c\u6b65"),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5Jdk"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u514d\u5bc6\u767b\u5f55"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u95ed\u9632\u706b\u5899")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u670d\u52a1\u540d"},"\u914d\u7f6e\u670d\u52a1\u540d"),(0,a.kt)("p",null,"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"vi /etc/systemconfig/network"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Created by anaconda\nNETWORKING=yes\nHOSTNAME=node1\n")),(0,a.kt)("h2",{id:"\u914d\u7f6ehosts"},"\u914d\u7f6eHosts"),(0,a.kt)("p",null,"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"vi /etc/systemconfig/network-scripts/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"192.168.99.6 node1\n192.168.99.7 node2\n192.168.99.8 node3\n")),(0,a.kt)("h2",{id:"\u5173\u95ed\u9632\u706b\u5899"},"\u5173\u95ed\u9632\u706b\u5899"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl stop firewalld && systemctl disable firewalld\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u65f6\u95f4\u540c\u6b65"},"\u914d\u7f6e\u65f6\u95f4\u540c\u6b65"),(0,a.kt)("p",null,"\u6267\u884c\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"yum -y install ntp")," \u5b89\u88c5ntp\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@10 opt]# yum -y install ntp\nLoaded plugins: fastestmirror\nLoading mirror speeds from cached hostfile\n * base: mirrors.aliyun.com\n * extras: mirrors.aliyun.com\n * updates: mirrors.aliyun.com\nbase                                                                                                         | 3.6 kB  00:00:00\nextras                                                                                                       | 2.9 kB  00:00:00\nupdates                                                                                                      | 2.9 kB  00:00:00\nResolving Dependencies\n--\x3e Running transaction check\n---\x3e Package ntp.x86_64 0:4.2.6p5-29.el7.centos.2 will be installed\n--\x3e Processing Dependency: ntpdate = 4.2.6p5-29.el7.centos.2 for package: ntp-4.2.6p5-29.el7.centos.2.x86_64\n--\x3e Processing Dependency: libopts.so.25()(64bit) for package: ntp-4.2.6p5-29.el7.centos.2.x86_64\n--\x3e Running transaction check\n---\x3e Package autogen-libopts.x86_64 0:5.18-5.el7 will be installed\n---\x3e Package ntpdate.x86_64 0:4.2.6p5-29.el7.centos.2 will be installed\n--\x3e Finished Dependency Resolution\n\nDependencies Resolved\n\n====================================================================================================================\n# \u53ea\u662f\u90e8\u5206\u5b89\u88c5\u4fe1\u606f\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u597d",(0,a.kt)("inlineCode",{parentName:"p"},"ntp"),"\u540e,\u9700\u8981\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"vi /etc/ntp.conf"),"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"ntp.conf"),"\u6587\u4ef6\u4e2d\u7684server\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u539f\u6765server \u914d\u7f6e\u6ce8\u91ca\n#server 0.centos.pool.ntp.org iburst\n#server 1.centos.pool.ntp.org iburst\n#server 2.centos.pool.ntp.org iburst\n#server 3.centos.pool.ntp.org iburst\n# \u4fee\u6539aliyun\u65f6\u95f4\u540c\u6b65\u670d\u52a1\nserver ntp1.aliyun.com\nserver ntp2.aliyun.com\nserver ntp3.aliyun.com\n\n")),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl start ntpd")," \u542f\u52a8\u670d\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@10 opt]# systemctl start ntpd\n[root@10 opt]#\n")),(0,a.kt)("h2",{id:"\u5b89\u88c5jdk"},"\u5b89\u88c5Jdk"),(0,a.kt)("p",null,"\u4e0a\u4f20Jdk\u5230\u4f60\u7684\u670d\u52a1\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@10 opt]# ls\njdk-8u181-linux-x64.rpm\n")),(0,a.kt)("p",null,"rpm\u5b89\u88c5Jdk:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@10 opt]# rpm -i jdk-8u181-linux-x64.rpm\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u540e\u5f62\u6210\u8fd9\u6837\u7684\u76ee\u5f55\u5173\u7cfb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@10 java]# ll\ntotal 0\nlrwxrwxrwx. 1 root root  16 Mar 14 23:54 default -> /usr/java/latest\ndrwxr-xr-x. 8 root root 258 Mar 14 23:54 jdk1.8.0_181-amd64\nlrwxrwxrwx. 1 root root  28 Mar 14 23:54 latest -> /usr/java/jdk1.8.0_181-amd64\n[root@10 java]#\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u914d\u7f6eHadoop:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u90fd\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/hosts"),"\u4e0b\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"hosts")),(0,a.kt)("li",{parentName:"ul"},"\u4f20\u8f93\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"scp ./jdk-8u181-linux-x64.rpm  node3:/opt"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"hadoop")),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff1a/etc/profile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export JAVA_HOME=/usr/java/default\nexport HADOOP_HOME=/opt/hadoop-2.6.5\nexport PATH=:$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HADOOP_HOME:sbin\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528scp\u547d\u4ee4\u5c06profile\u53d1\u9001\u5230\u8282\u70b9\u4e0a\u3002\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u5b8c\u540e\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"source /etc/profile "),"\u751f\u6548\u73af\u5883\u53d8\u91cf\u3002"),(0,a.kt)("p",null,"\u5206\u522b\u5728\u6bcf\u53f0\u8282\u70b9\u4e0a\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"jps"),"\u6709\u8fd4\u56de\u5c31\u8868\u793a\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u6210\u529f\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u514d\u5bc6\u767b\u5f55"},"\u914d\u7f6e\u514d\u5bc6\u767b\u5f55"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/r2.6.5/hadoop-project-dist/hadoop-common/SingleCluster.html#Required_Software"},(0,a.kt)("inlineCode",{parentName:"a"},"ssh must be installed and sshd must be running to use the Hadoop scripts that manage remote Hadoop daemons")),"."),(0,a.kt)("p",null,"\u8fdb\u5165root\u76ee\u5f55\u4e0b\uff0c\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"ssh"),"\u524d\u5148\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"ssh localhost")," \u68c0\u67e5\u662f\u5426\u914d\u7f6e\u514d\u5bc6\u767b\u5f55\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus Plushie",src:t(3379).Z,width:"944",height:"202"})),(0,a.kt)("p",null,"\u51fa\u73b0\u5982\u4e0a\u754c\u9762\u8bf4\u660e\u8fd8\u6ca1\u6709\u914d\u7f6e\u514d\u5bc6\u3002"),(0,a.kt)("p",null,"\u6839\u636eHadoop\u5b98\u7f51\u6559\u7a0b\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ssh-keygen -t dsa -P '' -f /root/.ssh/id_dsa"),"\u914d\u7f6e\u514d\u5bc6\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus Plushie",src:t(6518).Z,width:"842",height:"481"})),(0,a.kt)("p",null,"\u51fa\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"id_dsa,id_dsa.pub,known_hosts"),"\u6587\u4ef6\u8bf4\u660e\u914d\u7f6e\u6210\u529f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1678893288517",src:t(2010).Z,width:"660",height:"154"})),(0,a.kt)("p",null,"\u60f3\u54ea\u53f0\u8282\u70b9\u767b\u5f55\u5c31\u9700\u8981\u53d1\u7ed9\u90a3\u53f0\u8282\u70b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u6267\u884c\u547d\u4ee4\ncat id_dsa.pub >> authorized_keys\n")),(0,a.kt)("p",null,"\u5176\u4ed6\u8282\u70b9\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"node2\uff0cnode3")," \u4e5f\u9700\u8981\u914d\u7f6e\u514d\u5bc6\u767b\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u5728node2,node3 \u5206\u522b\u6267\u884c ssh localhost\uff0c\u8ba9\u670d\u52a1\u5668\u81ea\u52a8\u521b\u5efa.ssh\u76ee\u5f55\uff0c\u4e0d\u8981\u624b\u52a8\u521b\u5efa\n  ssh localhost\n# \u5c06\u516c\u94a5\u5206\u53d1\u5230node2,node3\u8282\u70b9\n[root@10 .ssh]# pwd\n/root/.ssh\n[root@10 .ssh]# scp ./id_dsa.pub node2:/root/.ssh/node1.pub \n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node3")," \u4e5f\u662f\u91cd\u590d`",(0,a.kt)("inlineCode",{parentName:"p"},"node2"),"\u64cd\u4f5c\uff0c\u4f46\u662f",(0,a.kt)("inlineCode",{parentName:"p"}," node2:/root/.ssh/"),"\u76ee\u5f55\u540e\u7684\u6587\u4ef6\u7684\u91cd\u65b0\u547d\u540d\u4e0d\u80fd\u91cd\u590d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"scp ./id_dsa.pub node3:/root/.ssh/node1.pub\n")),(0,a.kt)("p",null,"\u516c\u94a5\u5206\u53d1\u597d\u540e\uff0c\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"/root/.ssh"),"\u76ee\u5f55\u4e0b\u5c06\u516c\u94a5\u8ffd\u52a0\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"authorized_keys"),"\uff0c\u8fd9\u4e2a\u6587\u4ef6\u4e00\u5f00\u59cb\u662f\u6ca1\u6709\u7684\uff0c\u6267\u884c\u4e86\u8ffd\u52a0\u540e\u624d\u6709\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u5728node2 \u4e0a\u5c06\u516c\u94a5\u8ffd\u52a0\u5230authorized_keys\ncat ./node1.pub >> authorized_keys\n# \u5728node3 \u4e0a\u5c06\u516c\u94a5\u8ffd\u52a0\u5230authorized_keys\ncat ./node1.pub >> authorized_keys\n")),(0,a.kt)("p",null,"\u5f53\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"ssh node2 , ssh node3"),"\u80fd\u767b\u5f55\u6210\u529f\u8bf4\u660e\u514d\u5bc6\u8bbe\u7f6e\u6210\u529f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@10 .ssh]# ssh node3\nLast login: Fri Mar 17 23:42:23 2023 from 192.168.99.6\n[root@10 ~]#\n")),(0,a.kt)("h2",{id:"\u90e8\u7f72\u914d\u7f6e"},"\u90e8\u7f72\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e3b\u8981\u662f\u914d\u7f6e\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"core-site.xml"),(0,a.kt)("li",{parentName:"ul"},"hdfs-site.xml"),(0,a.kt)("li",{parentName:"ul"},"hadoop-env.sh"),(0,a.kt)("li",{parentName:"ul"},"slaves")),(0,a.kt)("p",null,"hadoop-env.sh\u914d\u7f6e\uff1a"),(0,a.kt)("p",null,"\u53bb\u5230hadoop\u76ee\u5f55\u4e0b\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"vi etc/hadoop/hadoop-env.sh"),"\u6587\u4ef6,\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"export JAVA_HOME"),"\u6539\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export JAVA_HOME=/usr/java/default\n")),(0,a.kt)("p",null,"core-site.xml: "),(0,a.kt)("p",null,"\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"core-site.xml"),"\u4ee5\u4fbf\u5ba2\u6237\u7aef\u80fd\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"namenode"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<configuration>\n    <property>\n        <name>fs.defaultFS</name>\n        <value>hdfs://node1:9000</value>\n    </property>\n</configuration>\n")),(0,a.kt)("p",null,"hdfs-site.xml:"),(0,a.kt)("p",null,"\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs-site.xml"),"\u6587\u4ef6\u8bfb\u5199\u7684\u526f\u672c\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<configuration>\n    <property>\n        <name>dfs.replication</name>\n        <value>2</value>\n    </property>\n    # namenode\u539f\u6570\u636e\u76ee\u5f55\uff0c/var/bigdata/hadoop/local/dfs/nam \u4e0d\u9700\u8981\u521b\u5efa\u4f1a\u81ea\u52a8\u521b\u5efa\n     <property>\n        <name>dfs.namenode.name.dir</name>\n        <value>/var/bigdata/hadoop/full/dfs/name</value>\n    </property>\n    # datanode \u76ee\u5f55\uff0c/var/bigdata/hadoop/full/dfs/data\u4e0d\u9700\u8981\u521b\u5efa\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\n    <property>\n        <name>dfs.datanode.data.dir</name>\n        <value>/var/bigdata/hadoop/full/dfs/data</value>\n    </property>\n    <property>\n        <name>dfs.namenode.secondary.http-address</name>\n        <value>node2:50090</value>\n    </property>\n     <property>\n        <name>dfs.namenode.checkpoint.dir</name>\n        <value>/var/bigdata/hadoop/full/dfs/secondary</value>\n    </property>\n\n\n\n</configuration>\n")),(0,a.kt)("p",null,"slaves:"),(0,a.kt)("p",null,"\u914d\u7f6eslaves\u6587\u4ef6\uff0c\u4ee5\u4fbf\u96c6\u7fa4\u77e5\u9053\u5728\u54ea\u4e2a\u8282\u70b9\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"datanode"),"\u3002\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"vi slaves"),",\u6253\u5f00\u540e\u914d\u7f6e\u8282\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node2\nnode3\n")),(0,a.kt)("h2",{id:"\u5206\u53d1\u76ee\u5f55"},"\u5206\u53d1\u76ee\u5f55"),(0,a.kt)("p",null,"\u914d\u7f6e\u597dhadoop\u4e4b\u540e\uff0c\u5c06\u5176\u5206\u53d1\u5230node2\uff0cnode3\u8282\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"scp -r hadoop-2.6.5 node2:/opt\nscp -r hadoop-2.6.5 node3:/opt\n")),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u542f\u52a8"},"\u521d\u59cb\u5316\u542f\u52a8"),(0,a.kt)("p",null,"\u76f8\u4fe1\u5230\u8fd9\u91cc\u5df2\u7ecf\u914d\u7f6e\u597d\u4e86\uff0c\u90a3\u4e48\u9700\u8981\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs namenode -format"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@10 var]# pwd\n/var\n[root@10 var]# hdfs namenode -format\n")),(0,a.kt)("p",null,"\u5982\u679c\u683c\u5f0f\u5316\u6210\u529f\uff0c\u4f60\u5c06\u4f1a\u770b\u5230\u5982\u4e0b\u76f8\u4fe1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"23/03/15 23:25:46 INFO namenode.NNConf: ACLs enabled? false\n23/03/15 23:25:46 INFO namenode.NNConf: XAttrs enabled? true\n23/03/15 23:25:46 INFO namenode.NNConf: Maximum size of an xattr: 16384\n23/03/15 23:25:46 INFO namenode.FSImage: Allocated new BlockPoolId: BP-881722450-10.0.2.15-1678922746657\n23/03/15 23:25:46 INFO common.Storage: Storage directory /var/bigdata/hadoop/local/dfs/name has been successfully formatted.\n23/03/15 23:25:46 INFO namenode.FSImageFormatProtobuf: Saving image file /var/bigdata/hadoop/local/dfs/name/current/fsimage.ckpt_0000000000000000000 using no compression\n23/03/15 23:25:47 INFO namenode.FSImageFormatProtobuf: Image file /var/bigdata/hadoop/local/dfs/name/current/fsimage.ckpt_0000000000000000000 of size 321 bytes saved in 0 seconds.\n23/03/15 23:25:47 INFO namenode.NNStorageRetentionManager: Going to retain 1 images with txid >= 0\n\n")),(0,a.kt)("p",null,"\u6b64\u65f6\u76ee\u5f55\u4e0b\u4f1a\u770b\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"bigdata"),"\u76ee\u5f55\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus Plushie",src:t(8397).Z,width:"1508",height:"66"})),(0,a.kt)("h2",{id:"\u542f\u52a8\u7a0b\u5e8f"},"\u542f\u52a8\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"./start-dfs.sh"),"\u547d\u4ee4\u542f\u52a8\u3002\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Jps"),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u662f\u5426\u6210\u529f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@localhost sbin]# ./start-dfs.sh\n[root@10 sbin]# start-dfs.sh\nStarting namenodes on [node1]\nnode1: starting namenode, logging to /opt/hadoop-2.6.5/logs/hadoop-root-namenode-10.0.2.15.out\nnode2: starting datanode, logging to /opt/hadoop-2.6.5/logs/hadoop-root-datanode-10.0.2.15.out\nnode3: starting datanode, logging to /opt/hadoop-2.6.5/logs/hadoop-root-datanode-10.0.2.15.out\nlocalhost: starting datanode, logging to /opt/hadoop-2.6.5/logs/hadoop-root-datanode-10.0.2.15.out\nStarting secondary namenodes [node2]\nnode2: starting secondarynamenode, logging to /opt/hadoop-2.6.5/logs/hadoop-root-secondarynamenode-10.0.2.15.out\n[root@10 sbin]# jps\n7996 Jps\n7725 DataNode\n7630 NameNode\n[root@10 sbin]#\n")),(0,a.kt)("h2",{id:"\u8bbf\u95ee"},"\u8bbf\u95ee"),(0,a.kt)("p",null,"\u5148\u4fee\u6539\u672c\u673a\u7535\u8111\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"hosts"),"\u6587\u4ef6\uff0c\u5c06\u8282\u70b9\u914d\u7f6e\u5230hosts\u91cc\u9762\u3002\u8bbf\u95ee\u65f6\u5c31\u53ef\u4ee5\u4f7f\u7528\u8282\u70b9\u540d\u79f0\u6765\u8bbf\u95ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"192.168.99.6 node1\n192.168.99.7 node2\n192.168.99.8 node3\n")),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"http://node1:50070/dfshealth.html#tab-overview"),"\u8bbf\u95ee`",(0,a.kt)("inlineCode",{parentName:"p"},"Hdfs"),"\u3002\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u76f4\u63a5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"IP"),"\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus Plushie",src:t(2434).Z,width:"1223",height:"640"})))}c.isMDXComponent=!0},8397:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"},2434:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/hdfs-7bd0f972f6550a1f1261dac6881ba99f.png"},6518:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/keygen-9d0de84b4e7d2449a873dd513ab15a0b.png"},2010:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/llssh-75722a7447f441c3f10446825d0df624.png"},3379:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sshlocalhost-faacd8821646037a746c0cb08f0298ce.png"}}]);