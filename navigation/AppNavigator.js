// 我把import react 删掉了，竟然也没有问题
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import routesObj from './routes';

/**
 * 构建多栈型路由  测试用
 */
let routes = {};
for (let i in routesObj) {
  // 如果真的有重复，直接覆盖
  routes[`${i}`] = createStackNavigator({
      [`${i}Stack`]: routesObj[i].screen
  });
}


/**
 * create 一个 stack 和多个createStackNavigator有没有区别呢
 */

const AppStack = createStackNavigator(routesObj);
export default createAppContainer(createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // ...routes,
    App: AppStack,
  }
));