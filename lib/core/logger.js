/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-14 10:37:54
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-17 15:59:45
 * @File Type: 日志定义文件
 * @Describe: 根据功能/模块等定义各个功能/模块的日子处理器，这样必要时可以单独开关局部日志。
 */

import * as loglevel from 'loglevel'

let level = process.env.DEBUG ? 'debug' : 'warn'

/**
 * 任何需要在 pages/ 下面打出的日志都可使用
 */
export const log = loglevel.getLogger('main')
log.setDefaultLevel(level)

/**
 * 任何需要在 store 下面打出的日志都可使用
 */
export const storeLog = loglevel.getLogger('store')
storeLog.setDefaultLevel(level)

export const authLog = loglevel.getLogger('auth')
authLog.setDefaultLevel(level)

export const presenterLog = loglevel.getLogger('presnter')
presenterLog.setDefaultLevel(level)

export const projectLog = loglevel.getLogger('project')
projectLog.setDefaultLevel(level)
