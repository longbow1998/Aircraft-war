import { _decorator, Component, AudioSource, find } from "cc"
import TimeCountControl from "./TimeCountControl"
const { ccclass, property, type } = _decorator

@ccclass("EnemyControl")
export default class EnemyControl extends Component {
  isDie = false
  player: AudioSource | null = null
  time: number = null

  @type(TimeCountControl)
  start() {
    // this.time = find("Canvas/scene/timeCount").getComponent(
    //   "TimeCountControl"
    // ).time

    console.log(
      (
        find("Canvas/scene/timeCount").getComponent(
          "TimeCountControl"
        ) as TimeCountControl
      ).time
    )
    // console.log(time)
    // this.player = this.getComponent(cc.AudioSource)
  }
  // update(dt) {
  //       if (this.isDie) {
  //       return
  //       }
  //       const pos = this.node.position.clone()
  //       this.node.y -= 300 * (1 + this.time / 10) * dt
  //       if (this.node.y < -850) {
  //       this.node.destroy()
  //       }
  // }
  //  // 死亡
  die() {
    // this.isDie = true
    // cc.loader.loadRes("img/enemy0_die", cc.SpriteFrame, (err, res) => {
    // this.node.getComponent(cc.Sprite).spriteFrame = res
    // })
    // this.player.play()
    //    // 加载音频
    // setTimeout(() => {
    // this.node.destroy()
    // }, 300)
    //    // 更新击杀数
    // const killCount = cc
    // .find("Canvas/scene/killCount")
    // .getComponent("KillCountControl")
    // killCount.increaseKillCount()
  }
}

/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
//
// @ccclass
// export default class EnemyControl extends cc.Component {
//   isDie = false
//   player: cc.AudioSource = null
//   time: number = null
//
//   start() {
//     this.time = cc
//       .find("Canvas/scene/timeCount")
//       .getComponent("TimeCountControl").time
//     this.player = this.getComponent(cc.AudioSource)
//   }
//
//   update(dt) {
//     if (this.isDie) {
//       return
//     }
//     this.node.y -= 300 * (1 + this.time / 10) * dt
//     if (this.node.y < -850) {
//       this.node.destroy()
//     }
//   }
//
//   // 死亡
//   die() {
//     this.isDie = true
//     cc.loader.loadRes("img/enemy0_die", cc.SpriteFrame, (err, res) => {
//       this.node.getComponent(cc.Sprite).spriteFrame = res
//     })
//     this.player.play()
//     // 加载音频
//     setTimeout(() => {
//       this.node.destroy()
//     }, 300)
//     // 更新击杀数
//     const killCount = cc
//       .find("Canvas/scene/killCount")
//       .getComponent("KillCountControl")
//     killCount.increaseKillCount()
//   }
// }
