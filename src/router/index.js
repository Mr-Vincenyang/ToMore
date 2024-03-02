/*
* 此文件读取所有一级目录并自动注册index.js
*/
import { createRouter, createWebHistory } from 'vue-router';


const routes =  [
  {
    path:"/",
    component: ()=> import("../views/Example/example.vue")
  },
  {
    path:"/diagramExample",
    component: ()=>import("../views/diagramExample/diagramExample.vue")
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
