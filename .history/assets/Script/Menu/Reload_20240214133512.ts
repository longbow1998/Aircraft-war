import { _decorator, Component, director, find, game, Node } from "cc"
const { ccclass, property } = _decorator

@ccclass("Reload")
export default class Reload extends Component {
  start() {
    // this.node.active = false
    this.node.on(Node.EventType.TOUCH_START, function (event) {
      console.log(director.getScene())
      // director.getScene()
      // director.purgeDirector()
      // director.reset()
      // director.loadScene(director.getScene().name)
      // director.pause()
      game.restart()
    })
  }
}
