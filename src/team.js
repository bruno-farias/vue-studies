export class Team {

  constructor(id, name, shield) {
    this.id = id
    this.name = name
    this.shield = shield
    this.point = 0
    this.gp = 0
    this.ga = 0
  }

  updateInfo(points, goalsPro, goalsAgainst) {
    this.point += points
    this.gp += goalsPro
    this.ga += goalsAgainst
  }

  endGame(adversary, goals, goalsAdversary) {
    if (goals === goalsAdversary) {
      this.updateInfo(1, goals, goalsAdversary)
      adversary.updateInfo(1, goals, goalsAdversary)
    } else if (goals > goalsAdversary) {
      this.updateInfo(3, goals, goalsAdversary)
      adversary.updateInfo(0, goalsAdversary, goals)
    } else {
      this.updateInfo(0, goals, goalsAdversary)
      adversary.updateInfo(3, goalsAdversary, goals)
    }
  }

}
