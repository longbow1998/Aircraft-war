import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator

@ccclass('TimeCountControl')
export default class TimeCountControl extends Component {
  time: number = 0
  start() {
        // this.node.getComponent(cc.Label).string =
        // "游戏时间 :" + this.time.toString()
        // this.schedule(() => {
        // const isDie = cc.find("Canvas/scene/player")
        // console.log(isDie)
        // if (!isDie) {
        // this.unscheduleAllCallbacks()
        // return
        // }
        // this.time += 1
        // this.node.getComponent(cc.Label).string =
        // "游戏时间 :" + this.time.toString()
        // }, 1)
        // if (this.time >= 50) {
        // this.node.emit("more50")
        // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class TimeCountControl extends cc.Component {
//   time: number = 0
// 
//   start() {
//     this.node.getComponent(cc.Label).string =
//       "游戏时间 :" + this.time.toString()
//     this.schedule(() => {
//       const isDie = cc.find("Canvas/scene/player")
//       console.log(isDie)
//       if (!isDie) {
//         this.unscheduleAllCallbacks()
//         return
//       }
//       this.time += 1
//       this.node.getComponent(cc.Label).string =
//         "游戏时间 :" + this.time.toString()
//     }, 1)
//     if (this.time >= 50) {
//       this.node.emit("more50")
//     }
//   }
// }
