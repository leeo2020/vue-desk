## vue-cli

#### 1.环境

> 1. <font color=Hotpink>node -v 12+</font>
> 2. <font color=Hotpink>npm -v</font>
> 3. <font color=Hotpink>淘宝镜像：npm install -g cnpm --registry=https://registry.npm.taobao.org </font>
> 4. <font color=Hotpink>cnpm i @vue/cli -g</font>

#### 2.项目初始化和运行
> 1. <font color=Hotpink>vue create vue-study</font>
> 2. <font color=Hotpink>npm run serve 运行项目</font>
>>  <font color=Hotpink>修改package.json  "start":"npm run serve"</font>
>>  <font color=Hotpink>npm run build 项目上线、测试(编译成浏览器可执行代码)</font>

#### 3.项目结构
> 1. <font color=Hotpink>readme 说明文件</font>
> 2. <font color=Hotpink>package.json 项目描述和配置文件</font>
> > <font color=Hotpink>记录 package.json中包的具体版本和来源</font>
> > <font color=Hotpink>srcipt:运行命令</font>
> > <font color=Hotpink>dependencies:项目运行依赖包</font>
> > <font color=Hotpink>devDependencies:项目开发依赖包</font>
> 3. <font color=Hotpink>gitignore 忽略文件和文件夹</font>
> 4. <font color=Hotpink>node_modules 包文件夹</font>
> 5. <font color=Hotpink>src源代码文件夹</font>
> > <font color=Hotpink>assets 静态资源</font>
>
> 6. <font color=Hotpink>public 静态资源服务器</font>

## 2. vue-router 路由
单页应用，一切皆组件
多页应用，多个网页跳转
#### 1. 安装使用
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)
export default new VueRouter({
routes:{
path:'/home',component:Home
}
})
// 配置选项mode:默认"hash"，"history"
// 配置选项routes{path:'',component:组件名}
```
#### 2. 动态路由匹配
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from './music/Detail.vue'
Vue.use(VueRouter)
const routes=new VueRouter({
path:'/music/:id',
component:Detail
})
//动态段用冒号:表示
```
#### 3.声明式路由和和函数式路由：
```vue
<router-link on=""><router-link> //声明式路由 on表示跳转
<router-view></router-view> //编译后将会显示在
```
```js
this.router.history.push(para)//para写path,组件名，路由别名,路由名{}都可以
```
#### 4. 嵌套路由
```js
const routers = [{
    path: '/',
    component: Home,
   	children:{
    path: '/a',
    component: A,
   }
}
new VueRouter({
routers
})
```
```vue
<template>
<router-view></router-view>
</template>
```
#### 5. 路由视图容器命名 <router-view> 默认 name='default'
```vue
<router-view name="xxx"></router-view>
```
```js
// component:Home
components:{
        // default:Home,
        xxx:Home
    },
```
#### 6.路由别名 alias eg:'/u'
```js
alias:'/u',
```
```vue
<router-link to="/u"></router-link>
```
```js
this.$router.history.push('/u') //可以后退查看原网页
this.$router.push('/u')
this.$router.replace('/u') //不能后退查看原网页
```
#### 7.路由命名 ：给当前路由规则命名， name 写成对象格式

```js
name:'me',
```
```vue
<router-link to='{name:"me"}'></router-link>
```
```js
this.$router.history.push({name:"me"})
```

#### 8. 路由懒加载 和异步组件

好处：避免首次加载载荷太大，网页卡屏卡顿，路由请求时再加载

```js
//使用箭头函数导入Vue组件
const Home=()=>import('./Home.vue')
//或者VueRouter内配置
component:()=>import('./Home.vue')
//异步组件
Vue.component('async-qq',(resolve,,reject)=>{
    setTimeOut(()=>{
        resolve({
            template:``,
            method:{}
        })
    },2000)
})
```
#### 9.使用exact,exact-active-class template模版精准匹配

## 4. vuex 状态管理,Vue 状态管理终极方案
#### 1.安装和使用

```bash
cnpm i -S vuex
```
```js
import Vuex from 'vuex'
Vue.use(Vuex)
```
#### 2.流程图示
![avatar](F:\Common\HTML5\ReactVue\day12vue\vuex.png)
#### 3.各部分组成和实现
##### 1. state:定义数据，所有需要被共享或缓存的数据都存储于此，页面中通过this.$store.state来访问
##### 2. getters:数据处理，相当于vue中的computed属性
##### 3. mutations:专门更新state数据
##### 4. actions:负责与后端api打交道
##### 5. modules:子模块
```js
//index.js 
import {fetchQmusic} from './'   //导入fetch音乐的方法
export default {
	state:{
	 songList:[]
	},
	mutations:{
		getSongList(state, payload) {
            state.songList = payload
        }
	},
	actions:{ //后端接口
		getMusic(store,payload){
			fetchMusic(payload).then(res=>{
				store.commit('getSongList',res.song.list)
			})
		}
	}
}
```
```js
//music.js
const music={//modules 大项目分模块
    state:{},
    getters{},
    mutations{},
    actions{}
}
export default music

//index.js
import music from './music'
export default {
	modules:{
   	 	music
	}
}
```

##### 6 vuex 属性封装

```js
//在vue组件中
import {mapState,mapGetters} from 'vuex'
computed:{
    ...mapState('music',['songList']) //'music':子store, state和getters写在计算属性中
},
methods:{
    ...mapMutations('music',['GetMusic']) //'music':子store,mutations和actions写在方法中
func(){
    this.GetMusic(){} //直接用this.访问
}
}

// debug ,命名空间问题，需要在store下的index.js加入namespaced:true
```

## 5. axios  

HTTP工具，请求数据相当于Vue版本的jQuery.ajax()，基于Promise封装，在客户端，服务端都可以使用
#### 1.安装
```bash
cnpm i -S axios
```
```js
//创建axios实例 axios
import axios from 'axios'
const instance=axios.create({
baseURL:'http://www.sina.com',
timeout:3000,//3000ms超时
headers:{}
})
//创建当前实例的拦截器
//请求拦截器
//在数据发出前作处理，设置header
instance.interceptors.request.use(config=>{
    return config,
  err=>{
    return Promise.reject(err)
    }
})
//响应拦截器
//在接受响应前作数据处理
instance.interceptors.response.use(res=>{//成功的调用
    if(res.status===200)｛//200成功响应
    	if(res.data&&res.data.code===0){//有响应的数据并且成功拿到
    		return res.data.data
    	}else{
    		console.log(‘访问失败)
    	}
    ｝else(){
    	console.log(‘访问失败)
    }，
    err=>{//失败的调用
    return Promise.reject(err)
    }
})
//导出axios实例模块
export default instance

//封装接口以便调用 fetch.js
import fetch from '.axios'
export function fetchQmusic(param){//会有多个模块需要导出不使用default
    return fetch({
        url:'/soso/fcgi-bin/client_search_cp',
        method:'get',
        params //get请求方式的参数
    })
}
```
#### 2. 跨域cors设置

浏览器同源策略：只允许ajax请求协议，域名，domain三者都一样的服务器，解决方式：jsonp，后端cors设置,服务器代理

```bash
touch vue.config.js #在项目根目录下创建此配置文件,通过node服务器访问远程服务器
```
```js
module.exports={
    devServer:{
        proxy:{
            '/soso':{//api
                target:'https://c.y.qq.com' //远程服务器地址,
                ws:true,
                changeOrigin:true  //一定要设置为true 表示允许跨域
            }
        }
    }
}
```
## 6. token 鉴权
```bash
cnpm i -S jsonWebToken
```
token，首次登陆由后端生成返回给前端，客户每次请求只需要携带token就可以，让后端识别用户身份，三部分组成：加密算法+用户信息+密钥，固定长度，安全。

业务逻辑：登陆成功后，将token存入localStorage中

## 7. emementUI
#### 1. 安装
```bash
cnpm i -S element-ui
```
```js  
import ElementUI from 'element-ui'; //main.js
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```
#### 2. 安装sass
```bash
cnpm i -D sass-loader node-sass
```
> 在vue 设置<style lang="scss" scoped></style>	
#### 3. 组件：
>  1. 布局组件LxLayout.vue，将侧边菜单组件LxAside.vue，头部标题栏组件LxHeader，主体内容组件放入LxMain.vue
>2. 公司logo做成图片模块，便于修改更换
>  3. 寻找icon,input ,select, data,button,分页器等标准组件引用，修改样式

## 8. 封装：
#### 1. 封装组件：实现组件复用
```vue
<template>
<div class="lx-cate-select">
  <el-select
    v-model="cate"
    placeholder="请选择品类"
    @change='change'
    :size='size'
    :clearable='clearable'
    filterable
    allow-create
    :remote-method="remoteMethod"
  >
    <el-option
      v-for="item in cateArr"
      :key="item._id"
      :label="item.cate_zh"
      :value="item.cate">
    </el-option>
  </el-select>
</div>
</template>
```

#### 2. 方法封装
```js
//base.js
//数字转译映射 
const codeMapper = (code, map) => {
  return map[code];
};
//数组转译映射
const codeArrayMapper = (codes, map) => {
  return codes.map((el) => {
    return map[el];
  });
};
module.exports = {
  codeMapper,
  codeArrayMapper,
};
```
#### 3. 插件封装
```js
//在main.js引入，Vue.use实现全局注册，在每个组件中都可以使用
import vue from 'vue'
import myToast from './myToast'
//使用vue的extend，以vue文件为基础组件，返回一个可以创建vue组件的特殊构造函数
const ToastConstructor = vue.extend(myToast)
function showToast(text, title) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text: text,
        title: title,
        show: true
      }
    }
  })
  document.body.appendChild(toastDom.$el)
}
function registryToast() {
  vue.prototype.$toast = showToast
}
export default registryToast
```