export default {
  template: `     
      <div>
        <form class="form-inline">
          <div class="form-group">
            <input type="text" class="form-control" v-model="newGame.home.goals" @keyup.enter="endGame">
            <label class="control-label" v-if="newGame.home.team">
              {{newGame.home.team.name}}
              <img :src="newGame.home.team.shield" style="height: 30px; width: 30px;">
            </label>
          </div>
          <span>X</span>
          <div class="form-group">
            <label class="control-label">
              <img :src="newGame.visitor.team.shield" style="height: 30px; width: 30px;" v-if="newGame.visitor.team">
              {{newGame.visitor.team.name}}
            </label>
            <input type="text" class="form-control" v-model="newGame.visitor.goals">
          </div>
          <button type="button" class="btn btn-primary" @click="endGame">Fim de jogo</button>
        </form>
      </div>
  `,
  data() {
    return {
      newGame: {
        home: {
          team: null,
          goals: 0
        },
        visitor: {
          team: null,
          goals: 0
        }
      },
    }
  },
  methods: {
    endGame() {
      let adversary = this.newGame.visitor.team
      let goals = this.newGame.home.goals
      let goalsAdversary = this.newGame.visitor.goals
      this.newGame.home.team.endGame(adversary, goals, goalsAdversary)
      this.showView('table')

    },
    createNewGame() {
      let indexHome = Math.floor(Math.random() * 20),
        indexVisitor = Math.floor(Math.random() * 20)

      if (indexHome === indexVisitor) {
        indexVisitor = Math.floor(Math.random() * 20)
      }

      this.newGame.home.team = this.teams[indexHome]
      this.newGame.home.goals = 0

      this.newGame.visitor.team = this.teams[indexVisitor]
      this.newGame.visitor.goals = 0

      this.showView('newGame')
    }
  },
  computed: {
    teamsFiltered() {
      let collection = _.orderBy(this.teams, this.order.keys, this.order.sort)
      return _.filter(collection, item => {
        return item.name.indexOf(this.filter) >= 0
      })
    },

  }
}
