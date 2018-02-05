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
      <a href="" class="btn btn-primary" @click.prevent="showTeamList">Tabela Completa</a>
      <a href="" class="btn btn-primary" @click.prevent="showNewGame">Novo Jogo</a>
      <a href="" class="btn btn-primary" @click.prevent="showClassification">Classificaçao</a>
      <br>
      <br>
      <div v-if="view == 'table'">
        <team-list></team-list>
      </div>
      <div v-if="view == 'newGame'">
        <team-new-game></team-new-game>
      </div>
      <div v-if="view == 'classification'">
        <team-classification></team-classification>
      </div>
    </div>
  `,
  methods: {
    showTeamList() {
      this.$store.commit('show-team-list')
    },
    showNewGame() {
      this.$store.commit('show-team-create')
    },
    showClassification() {
      this.$store.commit('show-classification')
    }
  },
  computed: {
    view() {
      return this.$store.state.view
    }
  }
}
