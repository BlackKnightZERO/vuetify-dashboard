<template>
    <div class="teamclass">
        <h3 class="title grey--text uppercase font-weight-regular">Team-view</h3>

        <v-container class="my-5">
            <v-row>
                <v-col xs="12" sm="6" md="4" lg="3" v-for="member in team" :key="member.name">
                    <v-card flat class="text-center">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src="member.img" alt="">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading"> {{ member.name }} </div>
                            <div class="grey--text"> {{ member.designation }} </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-row class="d-flex justify-center">
                                <v-col cols="3">
                                    <v-btn icon color="blue lighten-2">
                                    <v-icon>mdi-message</v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn icon color="grey darken-3">
                                    <v-icon>mdi-phone</v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn icon color="green lighten-2">
                                    <v-icon>mdi-map-marker</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-col>
                
            </v-row>    
            
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            team:[
                {name: "Arif Faysal", designation: "Web Applicatopn Developer", img:"img/avatar/1.png"},
                {name: "Al Mamun", designation: "Senior Web Designer", img:"img/avatar/2.jpg"},
                {name: "Habibur Rahman Shabu", designation: "Data Scientist", img:"img/avatar/3.png"},
                {name: "Linshacha", designation: "Illustrator", img:"img/avatar/4.png"},
                {name: "Neko Meow", designation: "Android Developer", img:"img/avatar/5.jpg"},
            ],
        }
    }
}
</script>