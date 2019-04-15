# rn-expo

> 口号：不能够脱离了公司的RN框架就不会写RN了！

## Aim

- escape the limit of company's srn framework
- use more novel react-native version (version 0.57.1) `ps: company's rn version is 0.43.4`


## 关于react-navigation

- 非内部stack中，可以使用navigate跳转
- `createStackNavigator` 代表着创建一个栈，栈内自动提供左侧返回，支持push/pop/goBack
- 在一个`stack`中，无论是navigate和push都是一样的效果，不一样的就是：
  - 使用`navigate`跳转到目标页面，如果目标页面已经在栈中，那么就会出现back效果(中间的route自然全删了)