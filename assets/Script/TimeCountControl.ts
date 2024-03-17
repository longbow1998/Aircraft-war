const { ccclass, property } = cc._decorator

@ccclass
export default class TimeCountControl extends cc.Component {
  time: number = 0

  start() {
    this.node.getComponent(cc.Label).string =
      "游戏时间 :" + this.time.toString()
    this.schedule(() => {
      const isDie = cc.find("Canvas/scene/player")
      console.log(isDie)
      if (!isDie) {
        this.unscheduleAllCallbacks()
        return
      }
      this.time += 1
      this.node.getComponent(cc.Label).string =
        "游戏时间 :" + this.time.toString()
    }, 1)
    if (this.time >= 50) {
      this.node.emit("more50")
    }
  }
}
