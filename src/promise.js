'use strict'

/**
 * _state内部有4种状态
 * 0 - pending
 * 1 - fulfilled(_value)
 * 2 - rejected(_value)
 * 3 - 接收另外一个promise返回的状态(链式调用)
 */
function noop () {}

var LAST_ERROR = null
var IS_ERROR = {}

function tryCallTwo (fn, a, b) {
  try {
    return fn(a, b)
  } catch (error) {
    LAST_ERROR = error
    return IS_ERROR
  }
}

/**
 * Promise是一个构造函数
 * 传入的参数为一个可执行函数
 */
function Promise (executor) {
  // 判断Promise的调用情况, 是否用new操作符来调用Promise
  if (typeof this !== 'object') {
    throw new TypeError('Promise must be constructed via new')
  }
  // 判断传入参数是否为函数
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor is not a function')
  }

  if (fn === noop) return

  this._state = 0 // 初始化的状态
  this._value = null // 传递的值
  // 调用函数
  handleDoExecutor(executor, this)
}

/**
 * 处理fulfilled状态
 */
function resolve (promise, value) {

}

/**
 * 处理rejected状态
 */
function reject (promise, reason) {

}

/**
 * 处理可执行函数
 */
function handleDoExecutor (fn, promise) {
  // 定义一个执行结果的状态
  var done = false
  // 执行fn,传入reslove和reject两个参数
  var promiseRes = tryCallTwo(fn, function (value) {
    if (done) return
    done = true
    resolve(promise, value)
  }, function (reason) {
    if (done) return
    done = true
    reject(promise, reason)
  })

  // 函数内部执行出错，捕获错误后继续执行状态的传递和变更
  if (!done && promiseRes === IS_ERROR) {
    done = true
    reject(promise, LAST_ERROR)
  }
}

module.exports = Promise
