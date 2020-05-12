<template>
     <div class="text-center">
         <v-dialog max-width="600" v-model="dialog">
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
                    <v-form class="px-3" ref="form">
                        <v-text-field label="Title" v-model="title" prepend-icon="mdi-google-play" :rules="inputRules">

                        </v-text-field>
                        <v-textarea label="Information" v-model="content" prepend-icon="mdi-grease-pencil" :rules="inputRules">

                        </v-textarea>

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
                    </v-form>
                </v-card-text>
                
               
                
                <v-divider></v-divider>

                <v-card-actions class="d-flex justify-end mx-5">
               <v-btn
                    
                    class="warning"
                    small
                    @click="clear"
                >
                    Clear
                </v-btn>

                <v-btn
                    
                    class="success"
                    small
                    @click="submit"
                    :loading="buttonLoading"
                >
                    Add Project
                </v-btn>
                </v-card-actions>
            </v-card>   
         </v-dialog>    
     </div>
</template>

<script>

import { format } from 'date-fns'
import db from '@/fb'

export default {
    data(){
        return{
            title:"",
            content:"",
            due:null,
            date: new Date().toISOString().substr(0, 10),
            menu2: false,

            inputRules:[
                v => v.trim().length!=0 || 'Empty Fields'
            ],

            buttonLoading:false,
            dialog:false,
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                this.buttonLoading = true;

            //console.log(this.title, this.content,this.date);
            const Project = {
                title: this.title,
                content: this.content,
                due:format(new Date(this.date), 'EEEE, MMMM do yyyy'),
                status:'ongoing',
                person: 'Arif Faysal'
            }

            db.collection('Project').add(Project).then(()=>{
                console.log('Added to DB');
                this.buttonLoading = false;
                this.clear();
                this.dialog=false;
                this.$emit('projectAdded');
            })
            // console.log(format(new Date(this.date), 'EEEE, MMMM do yyyy'));
           }
           // console.log(this.$refs.form.validate());
        },
        clear () {
        this.$refs.form.reset()
        this.title = ''
        this.content = ''
      },
    },
    computed:{
        // formattedDate(){
        //     return this.due ? format(this.due, 'Do MMM YYYY') : ''
        // }
    }
}
</script>