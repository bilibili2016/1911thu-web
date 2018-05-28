/**
 * Mock 请求库
 *
 * 需要编写 mock 请求来进行开发调试、单元测试时，可以参考任一现有的 mock 文件，或阅读详细文档：
 * https://github.com/ctimmerm/axios-mock-adapter
 */
import MockAdapter from 'axios-mock-adapter'
import { registerAuthMock } from './auth'

export function mock (axios) {
  let mock = new MockAdapter(axios)

  registerAuthMock(mock)
}
