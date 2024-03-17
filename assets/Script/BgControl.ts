import { _decorator, Component, Vec3, view } from "cc"
const { ccclass, property } = _decorator

@ccclass("BgControl")
export default class BgControl extends Component {
  start() {
    //    // 移动
    //    // 遍历子物体(背景)
    this.schedule(this.moveBackground, 0)
  }

  update(dt) {
    this.moveBackground(dt)
  }

  moveBackground(dt) {
    for (const bgNode of this.node.children) {
      let pos = bgNode.position.clone()
      pos.y -= 50 * dt
      bgNode.position = pos

      let screenSize = view.getVisibleSize()
      if (pos.y < -screenSize.height) {
        pos.y += screenSize.height * 2
        bgNode.position = pos
      }
    }
  }
}
