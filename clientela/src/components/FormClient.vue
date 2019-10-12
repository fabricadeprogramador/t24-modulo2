<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col>
                    <v-text-field outlined label="Nome do cliente"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field outlined label="Email do cliente"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field outlined type="number" label="CPF do cliente"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field outlined type="number" label="CEP do cliente"></v-text-field>
                </v-col>
            </v-row>
            <v-row class="px-3">
                <v-btn text color="error">Cancelar</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="success">Salvar</v-btn>
            </v-row>
        </v-form>
    </v-container>
</template>