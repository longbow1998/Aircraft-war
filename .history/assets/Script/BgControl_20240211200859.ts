import { _decorator, Component } from "cc"
const { ccclass, property } = _decorator

@ccclass("BgControl")
export default class BgControl extends Component {
  start() {
    //    // 移动
    //    // 遍历子物体(背景)
    console.log("123")
    this.schedule(this.moveBackground, 1)
  }

  moveBackground() {
    console.log("调用")
    for (const bgNode of this.node.children) {
      let pos = bgNode.position.clone()
      pos.y -= 50
      bgNode.position = pos

      if (pos.y < -852) {
        pos.y += 852 * 2
        bgNode.position = pos
      }
    }
  }
}

/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
//
// @ccclass
// export default class BgControl extends cc.Component {
//   update(dt) {
//     // 移动
//     // 遍历子物体(背景)
//     for (const bgNode of this.node.children) {
//       // 移动 帧->秒
//       bgNode.y -= 50 * dt
//       if (bgNode.y < -852) {
//         bgNode.y += 852 * 2
//       }
//     }
//   }
// }
