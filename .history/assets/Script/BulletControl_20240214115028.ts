import {
  _decorator,
  Component,
  PhysicsSystem2D,
  Node,
  Collider2D,
  Contact2DType
} from "cc"
const { ccclass, property } = _decorator
import EnemyControl from "./EnemyControl"

@ccclass("BulletControl")
export default class BulletControl extends Component {
  @property
  speed: number = 800

  start() {
    PhysicsSystem2D.instance.enable = true
    let collider = this.getComponent(Collider2D)
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
      collider.on(Contact2DType.END_CONTACT, this.onEndContact, this)
    }
  }

  onBeginContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {
    // 只在两个碰撞体开始接触时被调用一次
    console.log("onBeginContact")
  }
  onEndContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {
    // 只在两个碰撞体结束接触时被调用一次
    console.log("onEndContact")
  }

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
    console.log(other)
    // 如果碰到敌人,销毁自己,让敌人死亡
    if (other.tag === 1) {
      // 销毁敌人
      other.getComponent(EnemyControl).die()
      // 销毁自己
      this.node.destroy()
    }
  }

  onload() {}

  // onDisable() {
  //   // 取消监听碰撞开始事件
  //   this.node.off(Node.EventType.COLLISION_ENTER, this.onCollisionEnter, this)
  //   // 取消监听碰撞结束事件
  //   this.node.off(Node.EventType.COLLISION_EXIT, this.onCollisionExit, this)
  // }

  onCollisionExit(event) {
    // 碰撞结束时触发的逻辑
    console.log("碰撞结束")
  }
}
