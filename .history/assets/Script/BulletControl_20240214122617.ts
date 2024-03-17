import {
  _decorator,
  Component,
  PhysicsSystem2D,
  Collider2D,
  Contact2DType,
  IPhysics2DContact
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
    }
  }

  onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
    // 如果碰到敌人,销毁自己,让敌人死亡
    if (otherCollider.tag === 1) {
      // 销毁敌人
      otherCollider.getComponent(EnemyControl).die()
      // 销毁自己
      this.node.destroy()
    }
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
}
