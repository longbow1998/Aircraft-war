import { _decorator, Component } from "cc"
const { ccclass, property } = _decorator

@ccclass("Helloworld")
export default class Helloworld extends Component {
  onLoad() {
    //    /**开启碰撞检测 */
    //    // cc.director.getCollisionManager().enabled = true
    //    /**开启物理系统 */
    // cc.director.getPhysicsManager().enabled = true
  }
  start() {
    // this.getRBody()
    // this.handleKeyDown()
    // this.handleTouch()
    //    // this.event()
  }
  update() {}
  //  /**获取刚体 */
  getRBody() {
    // let rBody = this.getComponent(cc.RigidBody)
    //    // rBody.applyForce(cc.v2(1000, 0), cc.v2(0, 0), true)
    //    // 施加力
    //    // rBody.applyForceToCenter(cc.v2(-1000000, 0), true)
    //    // 设置速度
    // rBody.linearVelocity = cc.v2(50, 0)
  }
  setVelocity(x: number, y: number) {
    // console.log("setVelocity")
    // const rBody = this.getComponent(cc.RigidBody)
    //    // rBody.applyForceToCenter(cc.v2(x, y), true)
    // rBody.linearVelocity = cc.v2(x, y)
  }
  //  /**监听键盘按下 */
  handleKeyDown() {
    // console.log("handleKeyDown")
    // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, () =>
    // this.handleKeyWDown(event)
    // )
  }
  //  /**监听触摸按下 */
  handleTouch() {
    // this.node.on(cc.Node.EventType.TOUCH_START, event => {
    // console.log("触摸按下" + event.getID() + event.getLocation())
    //      // 触发自定义事件
    // this.node.emit("触发自定义事件event")
    // })
  }
  //  /**监听event事件 */
  event() {
    // this.node.on("event", () => console.log("event"))
  }
  //  /**监听按下的是哪个键 */
  handleKeyWDown(event) {
    // console.log("handleKeyWDown")
    // if (event.keyCode === cc.macro.KEY.w) {
    // console.log("按下w")
    //      // this.move(0, 100)
    // this.setVelocity(0, 50)
    // } else if (event.keyCode === cc.macro.KEY.a) {
    // console.log("按下a")
    //      // this.move(-100, 0)
    // this.setVelocity(-50, 0)
    // } else if (event.keyCode === cc.macro.KEY.d) {
    // console.log("按下d")
    //      // this.move(100, 0)
    // this.setVelocity(30, 0)
    // }
  }
  //  /**坐标移动 */
  move(x: number, y: number) {
    // console.log("move")
    // const node = this.node
    // const currentPosition = node.position
    // const newPosition = cc.v2(currentPosition.x + x, currentPosition.y + y)
    //    // 节点的位置属性的类型是 cc.Vec3，即使在二维项目中也是如此.
    // node.position = cc.v3(newPosition.x, newPosition.y, 0)
  }
  //  /**产生碰撞 */
  onCollisionEnter() {
    // console.log("碰撞了")
  }
  //  /**开始碰撞 */
  onBeginContact(contact, self, other) {
    //    // 得到碰撞点
    // let points = contact.getWorldManifold().points
    //    // 法线
    // let normal = contact.getWorldManifold().normal
    // console.log(points, normal)
    // console.log("发生碰撞")
  }
  //  /**结束碰撞 */
  onEndContact() {
    // console.log("结束碰撞")
  }
  //  /**射线 */
  rayCast() {
    // let results = cc.director
    // .getPhysicsManager()
    // .rayCast(
    // this.node.getPosition(),
    // cc.v2(this.node.x, this.node.y + 100),
    // cc.RayCastType.Closest
    // )
    // for (const element of results) {
    // let res = element
    //      // 射线碰到的碰撞器
    //      // res.collider
    //      // 射线碰到的点
    //      // res.point
    //      // 射线碰到的法线
    //      // res.normal
    // }
  }
}
