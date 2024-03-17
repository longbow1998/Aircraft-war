const { ccclass, property } = cc._decorator

@ccclass
export default class EnemyManager extends cc.Component {
  // 敌机预设体
  @property(cc.Prefab)
  enemyPre: cc.Prefab = null

  time: number = 0

  start() {
    this.freshen()
    this.schedule(() => {
      this.time += 1
    }, 1)
  }

  createEnemy = () => {
    // 创建敌机
    let enemy = cc.instantiate(this.enemyPre)
    enemy.setParent(cc.director.getScene())
    enemy.y = this.node.y
    enemy.x = Math.random() * 420 + 30
    this.freshen()
  }
  freshen() {
    setTimeout(
      this.createEnemy,
      (2 - this.time / 30) * 1000 <= 500 ? 500 : (2 - this.time / 30) * 1000
    )
  }

  // update (dt) {}
}
