<template>
    <div>
        <h1>Página de Clientes</h1>
        <form-client></form-client>
        <list-client></list-client>
    </div>    
</template>
<script>
import FormClient from '@/components/FormClient'
import ListClient from '@/components/ListClient'

export default {
    components: {
        FormClient,
        ListClient
    }
}
</script>