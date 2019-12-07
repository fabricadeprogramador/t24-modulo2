<template>
    <div>
        <h2>Clientes cadastrados</h2>
        <v-data-table
            :items="clients"
            :headers="headers">
        </v-data-table>
    </div>
</template>
<script>
import Axios from 'axios'

export default {
    
    data: () => ({
        clients: [],
        headers: [
            {
                text: 'Nome',
                value: 'name',
                sortable: true
            },
            {
                text: 'Email',
                value: 'email',
                sortable: true
            },
            {
                text: 'CPF',
                value: 'cpf',
                sortable: true
            }
        ]
    }),

    async created() {
        // Requisição para a API
        try {
            let resp = await Axios.get('http://localhost:3000/clients')
            this.clients = resp.data
        } catch(error) {
            alert("Algo de errado não está certo")
            console.log(`Erro ao buscar clientes: ${error}`)
        }
        
    }

}
</script>