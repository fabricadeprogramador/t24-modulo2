const FormClient = Vue.component('form-client', {
    template: /* html */ `
        <v-form>

            <v-row>

                <v-col>
                    <v-text-field outlined label="Nome do cliente" v-model="client.name"></v-text-field>
                </v-col>

                <v-col>
                    <v-text-field outlined type="email" label="Email do cliente" v-model="client.email"></v-text-field>
                </v-col>

                <v-col>
                    <v-text-field outlined type="number" label="CPF do cliente" v-model="client.cpf"></v-text-field>
                </v-col>
                
            </v-row>
            
            <v-row justify="space-between" class="px-3">
                <v-btn type="button" text color="error" @click="cancel">Cancelar</v-btn>
                <v-btn type="button" color="success" @click="save">Salvar</v-btn>
            </v-row>
        </v-form>
    `,
    props: ['client'],
    methods: {
        save() {
            ClientService.create(this.client)
            this.$emit('saved')
            this.cancel()
        },
        cancel() {
            // emitir evento de "cancelar" para o pai
            this.$emit('cancel')
        }
    }
})