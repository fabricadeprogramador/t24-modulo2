const Clientes = Vue.component('clientes', {
    template: /* html */ `
        <v-container>
            <form-client @saved="updateList" @cancel="cancel" :client="client"></form-client>
            <list-client ref="list"></list-client>
        </v-container>
    `,
    components: {
        NavBar,
        FormClient,
        ListClient
    },
    data() {
        return {
            title: 'Cadastro de Cliente',
            client: {}
        }
    },
    methods: {
        cancel() {
            this.client = {}
        },
        updateList() {
            // Acessar o component ListClient (filho) e chamar o listAll
            this.$refs.list.listAll()
        }
    }
})