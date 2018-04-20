let root = ''
const pro = process.env.NODE_ENV === 'production'
const mock = process.env.MOCK
if (pro) {
  root = '/api'
} else {
  // root = '/testapi'
  root = '/devapi'
}
let path = (inf = null, n) => {
  let result = ''
  if (pro) {
    result = root + inf
  } else {
    switch (mock) {
    case 'local':
      console.warn('本地mock数据模式')
      result = root + '/local' + inf
      break
    case 'cross':
      console.warn('远程mock数据模式')
      result = root + '/cross' + inf
      break
    case 'mixin':
      if (n) {
        result = root + '/local' + inf
      } else {
        result = root + '/cross' + inf
        // result = root + '/cross/api' + inf
      }
      break
    }
  }
  return result
}
/*
corss  请求远端
local  请求本地mock Json 文件

example:
export const ILOGIN = root + login
*/

let demo = '/demo'
export const IDEMO = path(demo, true)

export const IRECORD = path('/word/record', true)
export const IList = path('/word/list', true)
export const IMESSAGE = path('/word/message', true)
export const IPASSWORD = path('/word/password', true)
export const IARTICLE = path('/word/article', true)