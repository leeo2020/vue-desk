const Home = () =>
  import ('./home/Home.vue')
const Find = () =>
  import ('./home/Find.vue')
const FindNow = () =>
  import ('./home/FindNow.vue')
const FindPast = () =>
  import ('./home/FindPast.vue')
const UserCenter = () =>
  import ('./user/UserCenter.vue')
const Register = () =>
  import ('./user/Register.vue')
const UserLogin = () =>
  import ('./user/UserLogin.vue')
const Music = () =>
  import ('./music/Music.vue')
const Detail = () =>
  import ('./music/MusicDetails.vue')
const Todo = () =>
  import ('./home/Todo')
const GoodList = () =>
  import ('./good/GoodList.vue')
const GoodAdd = () =>
  import ('./good/GoodAdd.vue')
const YouLike = () =>
  import ('./good/YouLike.vue')
const YouChoice = () =>
  import ('./good/YouChoice.vue')
const GoodTable = () =>
  import ('./good/GoodTable.vue')
const GridTable = () =>
  import ('./good/GridTable.vue')
const GoodCase = () =>
  import ('./good/GoodCase.vue')
const ShowTotal = () =>
  import ('./show/ShowTotal')
const BarDemo = () =>
  import ('./show/BarDemo.vue')
const TreeDemo = () =>
  import ('./show/TreeDemo.vue')
const DataVDemo = () =>
  import ('./show/DataVDemo.vue')
const MyTable = () =>
  import ('./show/MyTable.vue')
const UploadMultiply = () =>
  import ('@/pages/show/UploadImgs.vue')
const Live = () =>
  import ('@/pages/vedio/Live.vue')
const routers = [{
    id: 10,
    text: '首页',
    icon: 'el-icon-s-home',
    arr: [{
      id: 1001,
      text: '主页概况',
      path: '/',
      component: Home
    }, {
      id: 1002,
      text: '公司动态',
      path: '/find',
      component: Find,
      children: [{
        path: 't2',
        alias: '/u',
        name: 'past',
        component: FindPast
      }, {
        path: '*',
        component: FindNow,
      }]
    }, {
      id: 1003,
      path: '/store/todo',
      component: Todo,
      text: 'ToDoList'
    }]
  },
  {
    id: 11,
    text: '系统管理',
    icon: 'el-icon-s-setting',
    arr: [{
      id: 1101,
      path: '/user',
      component: UserCenter,
      text: '用户中心'
    }, {
      id: 1102,
      path: '/user/register',
      component: Register,
      text: '用户注册'
    }, {
      id: 1103,
      path: '/user/login',
      component: UserLogin,
      text: '用户登陆'
    }]
  }, {
    id: 12,
    text: '音乐管理',
    icon: 'el-icon-video-play',
    arr: [{
      id: 1201,
      text: '音乐列表',
      path: '/music',
      component: Music
    }, {
      id: 1202,
      text: '音乐详情',
      path: '/detail/:id',
      component: Detail,
      isNotNav: true,
      meta: {
        keepAlive: true
      }
      // beforeEnter: (to, from, next) => {
      //     console.log(to.path,from.path)
      //     if(from.path=="/music"){
      //         next()
      //     }
      //    }
    }]
  }, {
    id: 13,
    text: '商品管理',
    icon: 'el-icon-s-goods',
    arr: [{
      id: 1301,
      text: '商品列表',
      path: '/good/list',
      component: GoodList,
      meta: {
        keepAlive: true
      }
    }, {
      id: 1302,
      text: '商品添加',
      path: '/good/add/0',
      isNotNav: true,
      component: GoodAdd
        // beforeEnter: (to, from, next) => {
        //     console.log(to.path,from.path)
        //     if(from.path=="/good/list"){
        //         next()
        //     }
        //    }
    }, {
      id: 1303,
      text: '商品编辑',
      path: '/good/add/:id',
      isNotNav: true,
      component: GoodAdd
    }, {
      id: 1304,
      text: '商品喜好',
      path: '/good/like',
      component: YouLike,
      meta: {
        keepAlive: true
      }
    }, {
      id: 1305,
      text: '你的选择',
      path: '/good/choice',
      component: YouChoice
    }, {
      id: 1306,
      text: '商品登记',
      path: '/good/table',
      component: GoodTable
    }, {
      id: 1307,
      text: '商品数表',
      path: '/good/grid',
      component: GridTable
    }, {
      id: 1308,
      text: '商品级联',
      path: '/good/case',
      component: GoodCase,
      meta: {
        keepAlive: true
      }
    }]
  },
  {
    id: 14,
    text: '视图',
    icon: 'el-icon-s-home',
    arr: [{
      id: 1401,
      text: '视图总览',
      path: '/show',
      component: ShowTotal
    }, {
      id: 1402,
      text: '柱状图',
      path: '/bar',
      component: BarDemo
    }, {
      id: 1403,
      text: '树结构图',
      path: '/tree',
      component: TreeDemo
    }, {
      id: 1404,
      text: 'DataV',
      path: '/dv',
      component: DataVDemo
    }, {
      id: 1405,
      text: 'MyTable',
      path: '/tb',
      component: MyTable
    }, {
      id: 1406,
      text: '多图上传',
      path: '/um',
      component: UploadMultiply
    }, {
      id: 1407,
      text: 'pdf',
      path: '/pdf',
      component: () =>
        import ('@/pages/show/ShowPdf')
    }]
  }, {
    icon: 'el-icon-s-home',
    id: 15,
    text: '直播',
    arr: [{
      id: 1501,
      text: '直播',
      path: '/lv',
      component: Live
    }]
  }
]
export default routers