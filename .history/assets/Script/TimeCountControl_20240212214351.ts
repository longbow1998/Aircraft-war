import { _decorator, Component, Label, find } from "cc"
const { ccclass, property } = _decorator

@ccclass("TimeCountControl")
export default class TimeCountControl extends Component {
  public time: number = 0
  start() {
    this.node.getComponent(Label).string = "游戏时间 :" + this.time.toString()
    this.schedule(() => {
      const isDie = find("Canvas/scene/player")
      console.log(isDie)
      if (!isDie) {
        this.unscheduleAllCallbacks()
        return
      }
      this.time += 1
      this.node.getComponent(Label).string = "游戏时间 :" + this.time.toString()
    }, 1)
    if (this.time >= 50) {
      this.node.emit("more50")
    }
  }
  getTime() {
    return this.time
  }
}
