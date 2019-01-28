let root = ''
const pro = process.env.NODE_ENV === 'production'
// const mock = process.env.MOCK
const mock = 'cross'
if (pro) {
  root = 'http://www.scdctech.sh.cn'
} else {
  // root = '/testapi'
  // root = '/devapi'
  // root = '/'
  root = 'http://www.scdctech.sh.cn'
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
      // result = root + '/cross' + inf
      result = root + inf
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
export const ILOGIN = path('/scdc/user/login')
export const IRECORD = path('/word/record', true)
// export const IList = path('/word/list', true)
// export const IMESSAGE = path('/word/message', true)
// export const IPASSWORD = path('/word/password', true)
// export const IARTICLE = path('/word/article', true)
// ---------------------------------------
export const ILOGOUT = path('/scdc/user/logout')
export const ILIST = path('/scdc/content/list') // 毒物列表
export const IARTICLE = path('/scdc/content/detail')
export const ICATEGORY = path('/scdc/content/category')
export const IBANNER = path('/scdc/banner')
export const IPASSWORD = path('/scdc/user/update')
export const IUSERNAME = path('/scdc/user/current')
export const IMESSAGE = path('/scdc/comment/add')
export const IWRITEMESSAGE = path('/scdc/content/list') // 毒物列表
export const IADDISCUSS = path('/scdc/comment/add')
export const ISEARCH = path('/scdc/content/search/new')
export const ISEARCHLOG = path('/scdc/user/searchlog')
export const IARTICLEDETAIL = path('/scdc/content/detail')
export const IARTICLEDLIST = path('/scdc/comment/list')