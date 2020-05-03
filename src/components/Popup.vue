<template>
     <div class="text-center">
         <v-dialog max-width="600">
            <template v-slot:activator="{ on }">    
                <v-btn color="success lighten-1" dark v-on="on">
                    Add new project
                </v-btn>
            </template>     

            <v-card>
                <v-card-title
                class="subheadline grey lighten-2"
                primary-title
                >
                Add a New Project
                </v-card-title>

                <v-card-text>
                    <v-form class="px-3">
                        <v-text-field label="Title" v-model="title" prepend-icon="mdi-google-play">

                        </v-text-field>
                        <v-textarea label="Information" v-model="content" prepend-icon="mdi-grease-pencil">

                        </v-textarea>
                    </v-form>
                </v-card-text>
                
                <!-- <v-menu>
                    <v-text-field slot="activator:on" labe="Due Date" prepend-icon="mdi-calendar">
                    </v-text-field>
                    <v-date-picker v-model="due"></v-date-picker>
                </v-menu> -->
                <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="date"
                        label="Date"
                        prepend-icon="mdi-calendar"
                        v-on="on"
                        class="px-4"
                        
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
                
                <v-divider></v-divider>

                <v-card-actions class="d-flex justify-end mx-5">
               
                <v-btn
                    
                    class="success"
                    small
                    @click="submit"
                >
                    Add Project
                </v-btn>
                </v-card-actions>
            </v-card>   
         </v-dialog>    
     </div>
</template>

<script>
export default {
    data(){
        return{
            title:"",
            content:"",
            due:null,
             date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
        }
    },
    methods:{
        submit(){
            console.log(this.title, this.content);
        }
    },
}
</script>