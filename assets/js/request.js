// request.js
// 存放网络请求相关的代码
class Req {
  // 统一存放 基础路径
  // static baseURL = 'https://serverms.xin88.top/'
  // 仿造$.get(地址，回调函数)
  //  Req.get('video?page=1',data=>{})
  static get(url, callback) {
    // $.get(Req.baseURL + url, callback)
  }
  // POST请求的特点：路径 和 参数 分开传递
  // $.post(地址，参数，回调函数)
  static post(url, params, cb) {
    // callback: 简称cb 回调函数
    $.post(Req.baseURL + url, params, cb)
  }
}