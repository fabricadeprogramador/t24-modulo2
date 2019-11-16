<template>
  <v-app>
    <v-app-bar app dark color="blue accent-4">
      <v-toolbar-title class="headline">
        <span>Clientela</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/clientes">Clientes</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
      <v-snackbar
            v-model="snackbar"
            bottom
            :color="color"
            right
            :timeout="0"
            vertical
            >
            {{ text }}
            <v-btn
                dark
                text
                @click="$store.dispatch('closeSnackbar')"
            >
                Fechar
            </v-btn>
        </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    
  }),
  computed: {
    snackbar() {
      return this.$store.state.snackbar.show
    },
    text() {
      return this.$store.state.snackbar.text
    },
    color() {
      return this.$store.state.snackbar.color
    }
  }
};
</script>
