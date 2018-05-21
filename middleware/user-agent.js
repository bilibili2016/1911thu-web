/**
 * 检查用户浏览器是否可用
 *
 * @param {Object} context
 */
export default function (context) {
  // TODO 检查用户浏览器是否可用
  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
}
