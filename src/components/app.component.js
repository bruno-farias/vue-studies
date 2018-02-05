import TeamListComponent from './team-list.component'
import TeamNewGameComponent from './team-new-game.component'
import TeamClassificationComponent from './classification-list.component'

export default {
  components: {
    'team-list': TeamListComponent,
    'team-new-game': TeamNewGameComponent,
    'team-classification': TeamClassificationComponent
  },
  template: `   
    <div>
      <h3>Campeonato Brasileiro - Série A - 2018</h3>
      <br>
      <br>
      <div v-show="view == 'table'">
        <team-list></team-list>
      </div>
      <div v-show="view == 'newGame'">
        <team-new-game></team-new-game>
      </div>
      <div v-show="view == 'classification'">
        <team-classification></team-classification>
      </div>
    </div>
  `,
  computed: {
    view() {
      return this.$store.state.view
    }
  }
}
