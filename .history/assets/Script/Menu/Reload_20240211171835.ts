import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator

@ccclass('Reload')
export default class Reload extends Component {
  start() {
        // this.node.active = false
        // this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
        // cc.director.loadScene(cc.director.getScene().name)
        // })
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Reload extends cc.Component {
//   start() {
//     this.node.active = false
//     this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
//       cc.director.loadScene(cc.director.getScene().name)
//     })
//   }
// }
