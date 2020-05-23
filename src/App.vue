<template>
  <v-app style="background:#D1C4E9">
    
    <Navbar />


   <v-content>
     <router-view></router-view>
     </v-content> 
  </v-app>
  
</template>

<script>

import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>