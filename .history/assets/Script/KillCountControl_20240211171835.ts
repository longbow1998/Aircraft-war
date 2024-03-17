import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator

@ccclass('KillCountControl')
export default class KillCountControl extends Component {
  @property
  killCountLabel: Label | null = null
  private killCount: number = 0
  start() {
        // this.updateKillCountDisplay()
  }
  increaseKillCount() {
        // console.log("increaseKillCount")
//    // 增加击杀数
        // this.killCount++
//    // 更新显示
        // this.updateKillCountDisplay()
  }
  updateKillCountDisplay() {
        // console.log("updateKillCOuntDisPlay")
//    // 更新击杀数
//    // if (this.killCountLabel) {
//    // this.killCountLabel.string = "击毁: " + this.killCount.toString()
//    // console.log(this.killCountLabel.string)
        // console.log(this.killCount)
        // this.node.getComponent(cc.Label).string =
        // "击毁: " + this.killCount.toString()
//    // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class KillCountControl extends cc.Component {
//   @property
//   killCountLabel: cc.Label = null
// 
//   private killCount: number = 0
// 
//   start() {
//     this.updateKillCountDisplay()
//   }
// 
//   increaseKillCount() {
//     console.log("increaseKillCount")
//     // 增加击杀数
//     this.killCount++
//     // 更新显示
//     this.updateKillCountDisplay()
//   }
// 
//   updateKillCountDisplay() {
//     console.log("updateKillCOuntDisPlay")
//     // 更新击杀数
//     // if (this.killCountLabel) {
//     // this.killCountLabel.string = "击毁: " + this.killCount.toString()
//     // console.log(this.killCountLabel.string)
//     console.log(this.killCount)
//     this.node.getComponent(cc.Label).string =
//       "击毁: " + this.killCount.toString()
//     // }
//   }
// }
