import _ from 'lodash'

export default {
  template: `     
    <div>     
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
        <tr v-for="(team, index) in teamsFiltered" :class="{'success' : index < 3 , 'warning' : index >= 3 && index < 6 , 'danger' : index > 15 }">
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
  created() {
    this.$store.dispatch('set-teams')
  },
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
