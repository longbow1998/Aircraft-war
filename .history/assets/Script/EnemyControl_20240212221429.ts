import {
  _decorator,
  Component,
  AudioSource,
  find,
  loader,
  assetManager,
  SpriteFrame,
  Sprite
} from "cc"
import TimeCountControl from "./TimeCountControl"
import KillCountControl from "./KillCountControl"
const { ccclass } = _decorator

@ccclass("EnemyControl")
export default class EnemyControl extends Component {
  isDie = false
  player: AudioSource | null = null
  time: number = null

  start() {}
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
    loader.loadRes("img/enemy0_die", SpriteFrame, (err, res) => {
      this.node.getComponent(Sprite).spriteFrame = res
    })
    this.player
      .play()(
        // 更新击杀数
        find("Canvas/scene/killCount").getComponent(
          "KillCountControl"
        ) as KillCountControl
      )
      .increaseKillCount()
    setTimeout(() => {
      this.node.destroy()
    }, 300)
  }
}
