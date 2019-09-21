const Clientes = Vue.component('clientes', {
    template: /* html */ `
        <div>
            <h1>{{title}}</h1>

            <form-client @saved="updateList" @cancel="cancel" :client="client"></form-client>

            <list-client ref="list"></list-client>
        </div>
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