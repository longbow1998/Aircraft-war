import { _decorator, Component, director, find, game, Node } from "cc"
const { ccclass, property } = _decorator

@ccclass("Reload")
export default class Reload extends Component {
  start() {
    this.node.active = true
    this.node.on(Node.EventType.TOUCH_START, function (event) {
      // director.getScene()
      // director.purgeDirector()
      // director.reset()
      director.loadScene("helloworld")
      // director.pause()
      // game.restart()
    })
  }
}
