import Vue from 'vue'
import Vuex from 'vuex'
import {Team} from './team'
Vue.use(Vuex)

const state = {
  view: 'table',
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
  ]
}

export default new Vuex.Store({
  state
})
