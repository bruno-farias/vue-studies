import TeamListComponent from './team-list.component'


export default {
  components : {
    'team-list': TeamListComponent
  },
  template: `
    <div class="">
    <div class="">
      <h3>Campeonato Brasileiro - Série A - 2018</h3>
      <br>
      <br>
      <div v-if="view == 'table'">
        <team-list></team-list>
      </div>
      <div v-if="view == 'newGame'">
        <form class="form-inline">
          <div class="form-group">
            <input type="text" class="form-control" v-model="newGame.home.goals" @keyup.enter="endGame">
            <label class="control-label">
              {{newGame.home.team.name}}
              <img :src="newGame.home.team.shield" style="height: 30px; width: 30px;">
            </label>
          </div>
          <span>X</span>
          <div class="form-group">
            <label class="control-label">
              <img :src="newGame.visitor.team.shield" style="height: 30px; width: 30px;">
              {{newGame.visitor.team.name}}
            </label>
            <input type="text" class="form-control" v-model="newGame.visitor.goals">
          </div>
          <button type="button" class="btn btn-primary" @click="endGame">Fim de jogo</button>
        </form>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      view: 'table'
    }
  },
  methods: {
    showView(view) {
      this.view = view
    },
    sortBy(column) {
      this.order.keys = column
      this.order.sort = this.order.sort === 'desc' ? 'asc' : 'desc'
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
