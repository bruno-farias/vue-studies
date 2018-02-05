import Vue from 'vue'
import './filters'
import AppComponent from './components/app.component'
import store from './store'


require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')


new Vue({
  el: '#app',
  components : {
    'app': AppComponent
  },
  store
})
