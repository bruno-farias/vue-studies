import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import {Team} from './team'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  view: 'table',
  teams: []
}

const mutations = {
  'set-teams'(state, teams) {
    state.teams = teams
  },
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

const actions = {
  'set-teams'(context) {
    Vue.http.get('http://localhost:8080/dist/teams.json')
      .then(response => {
        let teams = response.data.map(element => new Team(element.id, element.name, element.shield))
        context.commit('set-teams', teams)
      })
  }
}

export default new Vuex.Store({
  state,
  getters: {
    teamsLibertadores: state => state.teams.slice(0, 6),
    teamsDemoted: state => state.teams.slice(16, 20)
  },
  mutations,
  actions
})
