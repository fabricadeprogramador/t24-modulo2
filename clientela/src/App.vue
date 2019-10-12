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
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>
