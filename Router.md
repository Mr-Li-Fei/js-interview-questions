# 记录vue-router的总结学习
# vue-router 有几个钩子函数
***
  beforeEach  全局前置守卫
  afterEach 全局后置守卫
  beforeEnter 路由独享守卫
  beforeRouteEnter  进入组件守卫 ， 没有this, 可通过next(vm => {}),  vm就是实例
  beforeRouteUpdate  组件更新守卫  
  beforeRouteLeave  组件离开守卫
***
# 组件响应路由动态参数的变化
***
  1. 通过watch 监听 $route
  2. beforeRouteLeave 
***
# 路由传参
***
  1. 通过params传值, 
     const myCompon = {template:"<div>hansome</div>"};
     const routes = [
         {
             path:'/app/:id'
             name: 'compoent',
             component: MyCompon
         }
     ]

     <router-view to="/app/feli">
     <router-view :to="{path: '/app/feli'}">
     <router-view :to="{name: 'component', params:{id:feli}}">

     this.$route.push('/app/feli');
     this.$route.push({path:'/app/feli'});
     this.$route.push({name:'component', params:{id:'feli}});

     组件内通过 this.$route..params.id 获取
2. 通过query 传参
     <router-view to="/app/feli?name=Lee">
     <router-view :to="{path: '/app/feli?name=Lee'}">
     <router-view :to="{name: 'component', params:{id:feli}, query:{name: 'Lee'}}">

     this.$route.push('/app/feli');
     this.$route.push({path:'/app/feli'});
     this.$route.push({name:'component', params:{id:'feli}});

     组件内通过 this.$route..query.name 获取

3. 刷新页面 query 不会丢失， params会丢失参数， 但是在路由配置中，加入就不会丢失了  path:'/app/:id'
     
***