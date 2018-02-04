import Vue from 'vue'

Vue.filter('balance', team =>  team.gp - team.ga)

Vue.filter('ucWords', value => value.charAt(0).toUpperCase() + value.slice(1))
