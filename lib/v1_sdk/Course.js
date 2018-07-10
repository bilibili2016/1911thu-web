import http from '../common/HTTP'
import { store as persistStore } from '~/lib/core/store'
// import { authLog } from '~/lib/core/logger'
class Course {
  constructor() {
    this.http = http
  }
}
export default new Course()
