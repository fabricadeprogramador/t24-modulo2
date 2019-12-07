<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col cols="6">
                    <validation-provider name="nome" rules="required" v-slot="{ errors }">
                        <v-text-field 
                            v-model="client.name" 
                            outlined 
                            :error-messages="errors[0]"
                            label="Nome do cliente"
                            >
                        </v-text-field>
                        <!-- <span> {{ errors[0] }} </span> -->
                    </validation-provider>
                </v-col>
                <v-col cols="4">
                    <validation-provider name="email" rules="required|email" v-slot="{ errors }">
                        <v-text-field 
                            v-model="client.email" 
                            outlined 
                            :error-messages="errors[0]"
                            label="Email do cliente"
                            >
                        </v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="2">
                    <validation-provider name="CPF" rules="required" v-slot="{ errors }">
                        <v-text-field 
                            v-model="client.cpf" 
                            outlined 
                            type="number" 
                            label="CPF do cliente"
                            :error-messages="errors[0]"
                            >
                        </v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="2">
                    <validation-provider name="CEP" rules="required" v-slot="{ errors }">
                        <v-text-field 
                            :loading="findingAddress"  
                            @input="findAddress" 
                            v-model="client.address.cep" 
                            outlined 
                            type="number" 
                            label="CEP do cliente"
                            :error-messages="errors[0]"
                            >
                        </v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="4">
                    <validation-provider name="logradouro" rules="required" v-slot="{ errors }">
                        <v-text-field 
                            :disabled="addressLock" 
                            v-model="client.address.street" 
                            outlined 
                            label="Logradouro" 
                            hint="Ex: Rua, Avenida, etc"
                            :error-messages="errors[0]"
                            >
                        </v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="3">
                    <validation-provider name="bairro" rules="required" v-slot="{ errors }">
                        <v-text-field 
                            :disabled="addressLock" 
                            v-model="client.address.neighborhood" 
                            outlined 
                            label="Bairro"
                            :error-messages="errors[0]"
                            >
                        </v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="3">
                    <validation-provider name="cidade" rules="required" v-slot="{ errors }">
                        <v-text-field 
                            :disabled="addressLock" 
                            v-model="client.address.city" 
                            outlined 
                            label="Cidade"
                            :error-messages="errors[0]"
                            >
                        </v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="3">
                    <validation-provider name="estado" rules="required" v-slot="{ errors }">
                        <v-text-field 
                            :disabled="addressLock" 
                            v-model="client.address.state" 
                            outlined 
                            label="Estado"
                            :error-messages="errors[0]"
                            >
                            </v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="2">
                    <validation-provider name="número res." rules="required" v-slot="{ errors }">
                        <v-text-field 
                            :disabled="addressLock" 
                            v-model="client.address.number" 
                            outlined 
                            type="number" 
                            label="Número"
                            :error-messages="errors[0]"
                            >
                            </v-text-field>
                    </validation-provider>
                </v-col>
            </v-row>
            <v-row class="px-3">
                <v-btn color="success" @click="save" :loading="saving" :disabled="saving">Salvar</v-btn>
                <v-btn text color="error" @click="clean">Cancelar</v-btn>
            </v-row>
        </v-form>
        <intersecting-circles-spinner
            :animation-duration="1200"
            :size="70"
            color="blue"
            />
    </v-container>
</template>
<script>

import Axios from 'axios'
import { IntersectingCirclesSpinner } from 'epic-spinners'

export default {
    components: {
        IntersectingCirclesSpinner
    },
    data: () => ({
        client: {
            address: {}
        },
        addressLock: true,
        findingAddress: false,
        saving: false
    }),
    methods: {
        clean() {
            this.client = {}
        },
        async findAddress() {
            if(this.client.address.cep && this.client.address.cep.length == 8) {
                this.findingAddress = true
                // Requisição HTTP GET (assíncrono)
                let resp = await Axios.get(`https://viacep.com.br/ws/${this.client.address.cep}/json`)

                this.client.address.street = resp.data.logradouro
                this.client.address.neighborhood = resp.data.bairro
                this.client.address.city = resp.data.localidade
                this.client.address.state = resp.data.uf
                this.addressLock = false
                this.findingAddress = false
            }
        },
        async save() {
            // disparar a ação showSnackbar do Vuex

            try {
                this.saving = true
                await Axios.post('http://localhost:3000/clients', this.client)
                this.$store.dispatch('showSuccessSnackbar', 'Salvo com sucesso!')
                this.client = { address: {} }
            } catch (error) {
                console.log(`Erro ao salvar cliente: ${error}`)
                this.$store.dispatch('showErrorSnackbar', 'Erro ao salvar')
            } finally {
                this.saving = false
            }

        }
    }
}
</script>