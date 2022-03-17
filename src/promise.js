'use strict'

/**
 * state内部有4种状态
 * 0 - pending
 * 1 - fulfilled
 * 2 - rejected
 * 3 - 接收另外一个promise返回的状态(链式调用)
 */

module.exports = Promise

/**
 * Promise是一个构造函数
 * 传入的参数为一个可执行函数
 */
function Promise (excutor) {
  // 判断Promise的调用情况, 是否用new操作符来调用Promise
  if (typeof this !== 'object') {
    throw new TypeError('Promise must be constructed via new')
  }
  // 判断传入参数是否为函数
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor is not a function')
  }
}
