

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
