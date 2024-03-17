import { _decorator, Component, director } from "cc"
const { ccclass, property } = _decorator

@ccclass("Reload")
export default class Reload extends Component {
  start() {
    this.node.active = false
    this.node.on(Node.EventType.TOUCH_START, function (event) {
      director.loadScene(director.getScene().name)
    })
  }
}
