import { _decorator, Component } from "cc"
const { ccclass, property } = _decorator

import EnemyControl from "./EnemyControl"

@ccclass("BulletControl")
export default class BulletControl extends Component {
  @property
  speed: number = 800
  start() {}
  update(dt) {
    //    // 移动
    const pos = this.node.position.clone()
    pos.y += this.speed * dt
    this.node.position = pos
    //    // 出屏幕销毁
    if (this.node.position.y > 820) {
      this.node.destroy()
    }
  }
  onCollisionEnter(other) {
    //    // 如果碰到敌人,销毁自己,让敌人死亡
    // if (other.tag === 1) {
    //      // 销毁敌人
    // other.getComponent(EnemyControl).die()
    //      // 销毁自己
    // this.node.destroy()
    // }
  }
}

/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// import EnemyControl from "./EnemyControl"
//
// const { ccclass, property } = cc._decorator
//
// @ccclass
// export default class BulletControl extends cc.Component {
//   @property
//   speed: number = 800
//   start() {}
//
//   update(dt) {
//     // 移动
//     this.node.y += this.speed * dt
//     // 出屏幕销毁
//     if (this.node.y > 820) {
//       this.node.destroy()
//     }
//   }
//
//   onCollisionEnter(other) {
//     // 如果碰到敌人,销毁自己,让敌人死亡
//     if (other.tag === 1) {
//       // 销毁敌人
//       other.getComponent(EnemyControl).die()
//       // 销毁自己
//       this.node.destroy()
//     }
//   }
// }
