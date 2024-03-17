const { ccclass, property } = cc._decorator

@ccclass
export default class Reload extends cc.Component {
  start() {
    this.node.active = false
    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      cc.director.loadScene(cc.director.getScene().name)
    })
  }
}
