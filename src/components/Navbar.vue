<template>
    <div>
        <v-navigation-drawer app  v-model="drawer" dark>
            <!-- src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" -->
              <!-- <v-img alt="Vuetify Logo"
                            class="shrink mr-2"
                            contain
                            
                    src="img/avatar/1.png"
                    transition="scale-transition"
                    width="40">
                </v-img> -->
            <v-list-item>
                <v-list-item-content>
                    <div class="d-flex justify-center">
                        <v-avatar size="150" class="mt-5 mb-4">
                            <v-img src="img/avatar/1.png" transition="scale-transition">

                            </v-img>
                        </v-avatar>    
                        </div>
                    <v-list-item-title class="title d-flex justify-center">
                        Arif Faysal
                    </v-list-item-title>
                    <v-list-item-subtitle class="ml-12">
                         Vuetify Application
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <div class="ma-3">  <Popup></Popup> </div>
                <v-divider></v-divider>
            <v-list-item
            v-for="item in draweritems"
            :key="item.title"
            link :to="item.route"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
        </v-navigation-drawer>

        <!-- <v-toolbar flat app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            
            <v-toolbar-title class="text-uppercase grey--text text-darken-2">
                <span class="font-weight-light">Todo</span>
                <span>Zero</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-avatar size="36" color="indigo">
                <v-icon dark>mdi-account-circle</v-icon>
            </v-avatar>
            <v-btn flat small color="blue-grey lighten-4 ml-2" >
                <span>SignOut</span>
                <v-icon small right>mdi-logout</v-icon>
            </v-btn>
        </v-toolbar> -->
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="indigo--text text--lighten-1">
                Vue Application
                </v-toolbar-title>
                <v-spacer></v-spacer>
                
                <div class="text-center">
                    <v-menu offset-y transition="slide-x-transition" bottom right>
                    <template v-slot:activator="{ on }">
                        <v-btn
                        rounded
                        class="grey darken-2 white--text"
                        small
                        v-on="on"
                        >
                        <v-icon small left>mdi-arrow-down-drop-circle</v-icon>
                        <span>Menu</span> 
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                        v-for="(item, index) in draweritems"
                        :key="index"
                       link :to="item.route"
                        >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    </v-menu>
                </div>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-logout</v-icon>
                </v-btn>
        </v-app-bar>
        
    </div> 

</template>




<script>
import Popup from './Popup'

  export default {
    components:{
        Popup,
    },
    data(){
        return{
            drawer: false,
            draweritems: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard', route:'/' },
                { title: 'Project', icon: 'mdi-checkbox-multiple-blank-outline', route:'/project' },
                { title: 'Team', icon: 'mdi-account-multiple', route:'/team' },
                { title: 'Settings', icon: 'mdi-cog-outline', route:'/settings' },
                { title: 'About', icon: 'mdi-information-outline', route:'/about' },
            ],
        }
    }
  }
</script>