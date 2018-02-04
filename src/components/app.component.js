import TeamListComponent from './team-list.component'
import TeamNewGame from './team-new-game.component'


export default {
  components : {
    'team-list': TeamListComponent,
    'team-new-game': TeamNewGame
  },
  template: `   
    <div>
      <h3>Campeonato Brasileiro - Série A - 2018</h3>
      <br>
      <br>
      <div v-if="view == 'table'">
        <team-list></team-list>
      </div>
      <div v-if="view == 'newGame'">
        <team-new-game></team-new-game>
      </div>
    </div>
  `,
  data() {
    return {
      view: 'newGame'
    }
  },
  methods: {
    showView(view) {
      this.view = view
    }
  }
}
