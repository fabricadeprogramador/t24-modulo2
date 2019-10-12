<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col cols="6">
                    <v-text-field v-model="client.name" outlined label="Nome do cliente"></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field v-model="client.email" outlined label="Email do cliente"></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-text-field v-model="client.cpf" outlined type="number" label="CPF do cliente"></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-text-field :loading="findingAddress"  @input="findAddress" v-model="client.zipCode" outlined type="number" label="CEP do cliente"></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field :disabled="addressLock" v-model="client.street" outlined label="Logradouro" hint="Ex: Rua, Avenida, etc"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field :disabled="addressLock" v-model="client.neighborhood" outlined label="Bairro"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field :disabled="addressLock" v-model="client.city" outlined label="Cidade"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field :disabled="addressLock" v-model="client.state" outlined label="Estado"></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-text-field :disabled="addressLock" v-model="client.number" outlined type="number" label="Número"></v-text-field>
                </v-col>
            </v-row>
            <v-row class="px-3">
                <v-btn color="success">Salvar</v-btn>
                <v-btn text color="error" @click="clean">Cancelar</v-btn>
            </v-row>
        </v-form>
    </v-container>
</template>
<script>

import Axios from 'axios'

export default {
    data: () => ({
        client: {},
        addressLock: true,
        findingAddress: false
    }),
    methods: {
        clean() {
            this.client = {}
        },
        async findAddress() {
            if(this.client.zipCode && this.client.zipCode.length == 8) {
                this.findingAddress = true
                // Requisição HTTP GET (assíncrono)
                let resp = await Axios.get(`https://viacep.com.br/ws/${this.client.zipCode}/json`)

                this.client.street = resp.data.logradouro
                this.client.neighborhood = resp.data.bairro
                this.client.city = resp.data.localidade
                this.client.state = resp.data.uf
                this.addressLock = false
                this.findingAddress = false
            }
        }
    }
}
</script>