//common.js
// 存放一些公用的JS方法

class R {
  // 静态方法：static ，直接用R.search
  static search(name) {
    // 考虑到URL中可能出现中文编码问题，需要转码
    const search = decodeURI(location.search)
    const params = new URLSearchParams(search)
    return params.get(name)
  }
}