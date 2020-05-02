<template>
    <div>
        <v-navigation-drawer app  v-model="drawer" dark>
            <v-list-item>
                <v-list-item-content>
                    <div class="d-flex justify-center">
                        <v-img alt="Vuetify Logo"
                            class="shrink mr-2"
                            contain
                            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                            transition="scale-transition"
                            width="40"></v-img>
                            
                        </div>
                    <v-list-item-title class="title d-flex justify-center">
                        Vuetify
                    </v-list-item-title>
                    <v-list-item-subtitle class="ml-12">
                         Working Application
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
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
        </v-app-bar>
        
    </div> 

</template>




<script>
  export default {
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