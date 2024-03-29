import { _decorator, Component, Label } from "cc"
const { ccclass, property } = _decorator

@ccclass("KillCountControl")
export default class KillCountControl extends Component {
  killCount: number = 0
  start() {
    this.updateKillCountDisplay()
  }
  increaseKillCount() {
    //  增加击杀数
    this.killCount++
    // 更新显示
    this.updateKillCountDisplay()
  }
  updateKillCountDisplay() {
    // 更新击杀数
    this.node.getComponent(Label).string = "击毁: " + this.killCount.toString()
  }
}
