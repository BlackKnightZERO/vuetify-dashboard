<template>
  <v-app>
    <Navbar></Navbar>
    <v-content class="ma-4 grey lighten-4">
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{
    Navbar,Footer
  },
  data(){
    return{

    }
  }

}
</script>
