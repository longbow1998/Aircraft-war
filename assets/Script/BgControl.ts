const { ccclass, property } = cc._decorator

@ccclass
export default class BgControl extends cc.Component {
  update(dt) {
    // 移动
    // 遍历子物体(背景)
    for (const bgNode of this.node.children) {
      // 移动 帧->秒
      bgNode.y -= 50 * dt
      if (bgNode.y < -852) {
        bgNode.y += 852 * 2
      }
    }
  }
}
