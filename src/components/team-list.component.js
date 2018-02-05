import _ from 'lodash'
import event from '../event'

export default {
  template: `     
    <div>
      <a href="" class="btn btn-primary" @click.prevent="showNewGame">Novo Jogo</a>
      <br>
      <br>
      <input type="text" class="form-control" v-model="filter">
      <br>
      <br>
      <table class="table table-striped">
        <thead>
        <th v-for="column in columns">
          <a @click.prevent="sortBy(column)">{{column | ucWords}}</a>
        </th>
    
        </thead>
        <tbody>
        <tr v-for="team in teamsFiltered">
          <td>
            <img :src="team.shield" alt="" style="width: 30px;">
            <strong>{{team.name}}</strong></td>
          <td>{{team.point}}</td>
          <td>{{team.gp}}</td>
          <td>{{team.ga}}</td>
          <td>{{team | balance}}</td>
        </tr>
        </tbody>
      </table> 
    </div>    
  `,
  data() {
    return {
      order: {
        keys: ['points', 'gp', 'ga'],
        sort: ['desc', 'desc', 'asc']
      },
      filter: '',
      columns: ['name', 'points', 'gp', 'ga', 'balance'],
    }
  },
  methods: {
    showNewGame() {
      event.$emit('show-new-game')
      event.$emit('get-teams', this.teams)
    },
    sortBy(column) {
      this.order.keys = column
      this.order.sort = this.order.sort === 'desc' ? 'asc' : 'desc'
    }
  },
  computed: {
    teams() {
      return this.$store.state.teams
    },
    teamsFiltered() {
      let collection = _.orderBy(this.teams, this.order.keys, this.order.sort)
      return _.filter(collection, item => {
        return item.name.indexOf(this.filter) >= 0
      })
    },

  }
}
