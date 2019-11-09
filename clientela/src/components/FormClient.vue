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
                            v-model="client.zipCode" 
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
                            v-model="client.street" 
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
                            v-model="client.neighborhood" 
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
                            v-model="client.city" 
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
                            v-model="client.state" 
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
                            v-model="client.number" 
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