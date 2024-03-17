import {
  _decorator,
  Component,
  AudioSource,
  find,
  loader,
  assetManager,
  SpriteFrame,
  Sprite,
  PhysicsSystem2D,
  resources
} from "cc"
import TimeCountControl from "./TimeCountControl"
import KillCountControl from "./KillCountControl"
const { ccclass } = _decorator

@ccclass("EnemyControl")
export default class EnemyControl extends Component {
  isDie = false
  player: AudioSource | null = null
  time: number = null

  start() {
    PhysicsSystem2D.instance.enable = true
  }
  update(dt) {
    if (this.isDie) {
      return
    }
    this.time = (
      find("Canvas/scene/timeCount").getComponent(
        "TimeCountControl"
      ) as TimeCountControl
    ).time
    let pos = this.node.position.clone()
    pos.y -= 300 * (1 + this.time / 10) * dt
    this.node.position = pos
    if (this.node.position.y < -850) {
      this.node.destroy()
    }
  }
  //  // 死亡
  die() {
    this.isDie = true
    // loader.loadRes("img/enemy0_die", SpriteFrame, (err, res) => {
    //   console.log(res)
    //   this.node.getComponent(Sprite).spriteFrame = res
    // })
    resources.load("img/enemy0_die", (err, res) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(res)
      console.log(this.node.getComponent(Sprite).spriteFrame)
      // this.node.getComponent(Sprite).spriteFrame = res as SpriteFrame
    })
    // this.player.play()
    // 更新击杀数
    const killCount = (
      find("Canvas/scene/killCount").getComponent(
        "KillCountControl"
      ) as KillCountControl
    ).increaseKillCount()
    setTimeout(() => {
      this.node.destroy()
    }, 300)
  }
}