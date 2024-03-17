const { ccclass, property } = cc._decorator

@ccclass
export default class KillCountControl extends cc.Component {
  @property
  killCountLabel: cc.Label = null

  private killCount: number = 0

  start() {
    this.updateKillCountDisplay()
  }

  increaseKillCount() {
    console.log("increaseKillCount")
    // 增加击杀数
    this.killCount++
    // 更新显示
    this.updateKillCountDisplay()
  }

  updateKillCountDisplay() {
    console.log("updateKillCOuntDisPlay")
    // 更新击杀数
    // if (this.killCountLabel) {
    // this.killCountLabel.string = "击毁: " + this.killCount.toString()
    // console.log(this.killCountLabel.string)
    console.log(this.killCount)
    this.node.getComponent(cc.Label).string =
      "击毁: " + this.killCount.toString()
    // }
  }
}
