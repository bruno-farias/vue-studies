import Vue from 'vue'
import Vuex from 'vuex'
import {Team} from './team'
Vue.use(Vuex)

const state = {
  view: 'table',
  teams: [
    new Team(1, 'Palmeiras', require('./assets/palmeiras_60x60.png')),
    new Team(2, 'Flamengo', require('./assets/flamengo_60x60.png')),
    new Team(3, 'Atlético-MG', require('./assets/atletico_mg_60x60.png')),
    new Team(4, 'Santos', require('./assets/santos_60x60.png')),
    new Team(5, 'Botafogo', require('./assets/botafogo_60x60.png')),
    new Team(6, 'Atlético-PR', require('./assets/atletico-pr_60x60.png')),
    new Team(7, 'Corinthians', require('./assets/corinthians_60x60.png')),
    new Team(8, 'Grêmio', require('./assets/gremio_60x60.png')),
    new Team(9, 'Fluminense', require('./assets/fluminense_60x60.png')),
    new Team(10, 'Ponte Preta', require('./assets/ponte_preta_60x60.png')),
    new Team(11, 'Chapecoense', require('./assets/chapecoense_60x60.png')),
    new Team(12, 'São Paulo', require('./assets/sao_paulo_60x60.png')),
    new Team(13, 'Cruzeiro', require('./assets/cruzeiro_60x60.png')),
    new Team(14, 'Sport', require('./assets/sport_60x60.png')),
    new Team(15, 'Coritiba', require('./assets/coritiba_60x60.png')),
    new Team(16, 'Internacional', require('./assets/internacional_60x60.png')),
    new Team(17, 'Vitória', require('./assets/vitoria_60x60.png')),
    new Team(18, 'Figueirense', require('./assets/figueirense_60x60.png')),
    new Team(19, 'Santa Cruz', require('./assets/santa_cruz_60x60.png')),
    new Team(20, 'América-MG', require('./assets/america_mg_60x60.png')),
  ]
}

const mutations = {
  update(state, team) {
    let index = state.teams.findIndex(element => team.id == element.id)
    if (index != -1) {
      state.teams[index] = team
    }
  },
  'show-team-list'(state) {
    state.view = 'table'
  },
  'show-team-create'(state) {
    state.view = 'newGame'
  },
  'show-classification'(state) {
    state.view = 'classification'
  }
}

export default new Vuex.Store({
  state,
  getters: {
    teamsLibertadores: state => state.teams.slice(0, 6),
    teamsDemoted: state => state.teams.slice(16, 20)
  },
  mutations
})
