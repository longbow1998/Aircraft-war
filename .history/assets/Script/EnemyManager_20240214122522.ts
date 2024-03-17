import { _decorator, Component, director, instantiate, Prefab } from "cc"
const { ccclass, property } = _decorator

@ccclass("EnemyManager")
export default class EnemyManager extends Component {
  //  // 敌机预设体
  @property(Prefab)
  enemyPre: Prefab | null = null
  time: number = 0
  start() {
    this.freshen()
    this.schedule(() => {
      this.time += 1
    }, 1)
  }

  createEnemy = () => {
    console.log("createEnemy")
    // 创建敌机
    let enemy = instantiate(this.enemyPre)
    enemy.setParent(this.node.parent)
    let pos = enemy.position.clone()
    pos.y = this.node.position.y
    pos.x = Math.random() * 420 + 30
    enemy.position = pos
    this.freshen()
  }

  freshen() {
    console.log("freshen")
    setTimeout(
      this.createEnemy,
      (2 - this.time / 30) * 1000 <= 500 ? 500 : (2 - this.time / 30) * 1000
    )
  }
}
