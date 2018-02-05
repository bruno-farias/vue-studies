export default {
  template: `     
    <div>     
      <h3>Times na classificaçao Libertadores</h3>
      <table class="table table-striped">
        <thead>
        <th>Nome</th>
    
        </thead>
        <tbody>
        <tr v-for="team in teamsLibertadores">
          <td>
            <img :src="team.shield" alt="" style="width: 30px;">
            <strong>{{team.name}}</strong>
          </td>

        </tr>
        </tbody>
      </table> 
      <h3>Times na zona de rebaixamento</h3>
      <table class="table table-striped">
        <thead>
        <th>Nome</th>
    
        </thead>
        <tbody>
        <tr v-for="team in teamsDemoted">
          <td>
            <img :src="team.shield" alt="" style="width: 30px;">
            <strong>{{team.name}}</strong>
          </td>

        </tr>
        </tbody>
      </table>
    </div>    
  `,
  computed: {
    teamsLibertadores() {
      return this.$store.getters.teamsLibertadores
    },
    teamsDemoted() {
      return this.$store.getters.teamsDemoted
    }

  }
}
