import {
  _decorator,
  Component,
  AudioSource,
  find,
  SpriteFrame,
  Sprite,
  PhysicsSystem2D,
  resources,
  ImageAsset
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
    this.player = this.node.getComponent(AudioSource)
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
    resources.load("img/enemy0_die", ImageAsset, (err, res) => {
      if (err) {
        console.error(err)
        return
      }
      const spriteFrame = SpriteFrame.createWithImage(res)
      console.log(this.node.getComponent(Sprite).spriteFrame)
      this.node.getComponent(Sprite).spriteFrame = spriteFrame
    })
    this.player.play()
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
