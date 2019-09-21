const ListClient = Vue.component('list-client', {
    template: /* html */ `
        <table>
            <thead>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
            </thead>
            <tbody>
                <tr v-for="c in clients">
                    <td>{{c.name}}</td>
                    <td>{{c.email}}</td>
                    <td>{{c.cpf}}</td>
                    <td>
                        <button @click="goToDetail(c)">Detalhes</button>
                    </td>
                </tr>
            </tbody>
        </table>
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