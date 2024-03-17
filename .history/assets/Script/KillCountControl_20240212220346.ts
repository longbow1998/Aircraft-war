import { _decorator, Component, Label } from "cc"
const { ccclass, property } = _decorator

@ccclass("KillCountControl")
export default class KillCountControl extends Component {
  @property
  killCountLabel: Label | null = null
  private killCount: number = 0
  start() {
    this.updateKillCountDisplay()
  }
  increaseKillCount() {
    console.log("increaseKillCount")
    //  增加击杀数
    this.killCount++
    // 更新显示
    this.updateKillCountDisplay()
  }
  updateKillCountDisplay() {
    // 更新击杀数
    if (this.killCountLabel) {
      this.killCountLabel.string = "击毁: " + this.killCount.toString()
      console.log(this.killCountLabel.string)
      console.log(this.killCount)
      this.node.getComponent(Label).string =
        "击毁: " + this.killCount.toString()
    }
  }
}
