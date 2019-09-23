const ListClient = Vue.component('list-client', {
    template: /* html */ `
        <v-simple-table class="mt-5">
            <thead>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Ações</th>
            </thead>
            <tbody>
                <tr v-for="c in clients">
                    <td>{{c.name}}</td>
                    <td>{{c.email}}</td>
                    <td>{{c.cpf}}</td>
                    <td>
                        <v-btn fab icon small color="info" @click="goToDetail(c)">
                            <v-icon>mdi-eye</v-icon>
                        </v-btn>
                        <v-btn fab icon small color="error">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    `,
    data() {
        return {
            clients: []
        }
    },
    methods: {
        listAll() {
            this.clients = ClientService.findAll()
        },
        goToDetail(client) {
            // muda de rota programaticamente (VueRouter)
            // $route $router
            this.$router.push({ name: 'detalhe', params: client })
        }
    },
    created() {
        this.listAll()
    }
})