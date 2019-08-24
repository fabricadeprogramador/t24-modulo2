const FormClient = Vue.component('form-client', {
    template: /* html */ `
        <form>
            <input type="text" placeholder="Nome do cliente" v-model="client.name">
            <input type="email" placeholder="Email do cliente" v-model="client.email">
            <input type="number" placeholder="CPF do cliente" v-model="client.cpf">
            <button type="button">Salvar</button>
            <button type="button">Cancelar</button>
        </form>
    `,
    data() {
        return {
            client: {}
        }
    }
})