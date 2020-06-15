class Dialog{
  constructor() {
    this.time = 3000
  }
  static title(){
    return 'aaaaaaaa'
  }
  show() {
    console.log('show');
  }
  hide() {
    console.log('hide');
  }
}


/**
 * 导出
 * 1.exports.xxx=xxx
 * 2.module.exports = xxx
 * 3.module.exports = {xxx:xxx}
 */
module.exports = {
  Dialog
}