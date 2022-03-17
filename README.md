## Promise A+规范相关

### Promise的状态
一个promise包含三种特定的状态：`pending`, `fulfilled`, `rejected`
1. 在`pending`阶段时，promise的状态要么变成`fulfilled`，要么就是`rejected`
2. 在`fulfilled`阶段时，状态凝固，同时会返回一个`value`不变的值
3. 在`rejected`阶段时，状态凝固，同时会返回一个`reason`不变的值

### then方法
一个promise必须提供一个`then`方法，用于向下传递当前的值，接收两个参数：
```js
promise.then(onFulfilled, onRejected)
```
1. `onFulfilled`和`onRejected`两个都是可选项，如果不是函数类型，则忽略
2. `onFulfilled`如果是一个函数，当promise的状态变更为`fulfilled`时会被调用，`value`作为它的第一个参数，不能被多次调用
3. `onRejected`如果是一个函数，当promise的状态变更为`rejected`时会被调用，`reason`作为它的第一个参数，不能被多次调用
4. `then`方法返回一个新的promise
