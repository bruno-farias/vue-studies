import Vue from 'vue'
import {Team} from './team'
import _ from 'lodash'
import './filters'

require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')


let appComponent = Vue.extend({
  template: `
    <div class="">
    <div class="">
      <h3>Campeonato Brasileiro - Série A - 2018</h3>
      <br>
      <br>
      <div v-if="view == 'table'">
        <a href="" class="btn btn-primary" @click.prevent="createNewGame">Novo Jogo</a>
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
      order: {
        keys: ['points', 'gp', 'ga'],
        sort: ['desc', 'desc', 'asc']
      },
      filter: '',
      columns: ['name', 'points', 'gp', 'ga', 'balance'],
      teams: [
        new Team('Palmeiras', require('./assets/palmeiras_60x60.png')),
        new Team('Flamengo', require('./assets/flamengo_60x60.png')),
        new Team('Atlético-MG', require('./assets/atletico_mg_60x60.png')),
        new Team('Santos', require('./assets/santos_60x60.png')),
        new Team('Botafogo', require('./assets/botafogo_60x60.png')),
        new Team('Atlético-PR', require('./assets/atletico-pr_60x60.png')),
        new Team('Corinthians', require('./assets/corinthians_60x60.png')),
        new Team('Grêmio', require('./assets/gremio_60x60.png')),
        new Team('Fluminense', require('./assets/fluminense_60x60.png')),
        new Team('Ponte Preta', require('./assets/ponte_preta_60x60.png')),
        new Team('Chapecoense', require('./assets/chapecoense_60x60.png')),
        new Team('São Paulo', require('./assets/sao_paulo_60x60.png')),
        new Team('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
        new Team('Sport', require('./assets/sport_60x60.png')),
        new Team('Coritiba', require('./assets/coritiba_60x60.png')),
        new Team('Internacional', require('./assets/internacional_60x60.png')),
        new Team('Vitória', require('./assets/vitoria_60x60.png')),
        new Team('Figueirense', require('./assets/figueirense_60x60.png')),
        new Team('Santa Cruz', require('./assets/santa_cruz_60x60.png')),
        new Team('América-MG', require('./assets/america_mg_60x60.png')),
      ],
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
      view: 'table'
    }
  },
  methods: {
    endGame() {
      let adversary = this.newGame.visitor.team
      let goals = +this.newGame.home.goals
      let goalsAdversary = +this.newGame.visitor.goals
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
    },
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
})


new Vue({
  el: '#app',
  components : {
    'app': appComponent
  }
})
