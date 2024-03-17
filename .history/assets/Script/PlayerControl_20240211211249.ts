import {
  _decorator,
  Component,
  EventTouch,
  Prefab,
  instantiate,
  director,
  view,
  Vec3
} from "cc"
const { ccclass, property } = _decorator

// import EnemyControl from "./EnemyControl"

@ccclass("PlayerControl")
export default class PlayerControl extends Component {
  @property(Prefab)
  bulletPre: Prefab | null = null
  isDie = false
  start() {
    if (this.isDie) false
    //    // 移动
    this.node.on("touch-move", this.onTouchMove, this)
    //    // 攻击,计时器
    this.schedule(() => {
      // 创建子弹
      let bullet = instantiate(this.bulletPre)
      // 设置父物体
      bullet.setParent(this.node.parent)
      // 设置子弹位置
      let pos = this.node.position.clone()
      console.log(pos)
      pos.y += 60
      bullet.position = pos
      // 获取屏幕中心位置
      // let screenSize = view.getVisibleSize()
      // let screenCenter = new Vec3(screenSize.width / 2, screenSize.height / 2)
      // 设置子弹位置为屏幕中心
      // bullet.position = screenCenter
    }, 0.5)
    //    // 开启碰撞检测
    // cc.director.getCollisionManager().enabled = true
  }

  onTouchMove(event: EventTouch) {
    // 获取触摸点在世界坐标系中的位置
    let location = event.getUILocation()
    // 将触摸点的位置转换为本地坐标系中的位置
    if (location) {
      // 设置节点的位置为触摸点的本地坐标
      this.node.setPosition(location.x, location.y)
    }
  }

  onDestroy() {
    this.node.off("touch-move", this.onTouchMove, this)
  }
  update(dt) {}
  //  // 死亡
  die() {
    // this.isDie = true
    // cc.loader.loadRes("hero1_die", cc.SpriteFrame, (err, res) => {
    // this.node.getComponent(cc.Sprite).spriteFrame = res
    // })
    // cc.loader.loadRes("sound/player_die.mp3", cc.AudioClip, (res, clip) => {
    //      // 播放
    // let audioId: number = cc.audioEngine.playMusic(clip, false)
    // })
    // cc.find("Canvas/scene/reload").active = true
    //    // cc.director.pause();
    // setTimeout(() => {
    // this.node.destroy()
    //      // this.node.active = false
    // }, 300)
  }
  onCollisionEnter(other) {
    //    // 如果碰到敌人,销毁自己,让敌人死亡
    // if (other.tag === 1) {
    //      // 销毁敌人
    // other.getComponent(EnemyControl).die()
    //      // 销毁自己
    // this.die()
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
// export default class PlayerControl extends cc.Component {
//   @property(cc.Prefab)
//   bulletPre: cc.Prefab = null
//
//   isDie = false
//
//   start() {
//     if (this.isDie) false
//     // 移动
//     this.node.on(cc.Node.EventType.TOUCH_MOVE, event => {
//       this.node.setPosition(event.getLocation())
//     })
//     // 攻击,计时器
//     this.schedule(() => {
//       // 创建子弹
//       let bullet = cc.instantiate(this.bulletPre)
//       // 设置父物体
//       bullet.setParent(cc.director.getScene())
//       // 设置子弹位置
//       bullet.x = this.node.x
//       bullet.y = this.node.y + 60
//     }, 0.5)
//     // 开启碰撞检测
//     cc.director.getCollisionManager().enabled = true
//   }
//
//   update(dt) {}
//   // 死亡
//   die() {
//     this.isDie = true
//     cc.loader.loadRes("hero1_die", cc.SpriteFrame, (err, res) => {
//       this.node.getComponent(cc.Sprite).spriteFrame = res
//     })
//     cc.loader.loadRes("sound/player_die.mp3", cc.AudioClip, (res, clip) => {
//       // 播放
//       let audioId: number = cc.audioEngine.playMusic(clip, false)
//     })
//     cc.find("Canvas/scene/reload").active = true
//     // cc.director.pause();
//     setTimeout(() => {
//       this.node.destroy()
//       // this.node.active = false
//     }, 300)
//   }
//
//   onCollisionEnter(other) {
//     // 如果碰到敌人,销毁自己,让敌人死亡
//     if (other.tag === 1) {
//       // 销毁敌人
//       other.getComponent(EnemyControl).die()
//       // 销毁自己
//       this.die()
//     }
//   }
// }
