<template>

  <div class="projectclass">
    <h3 class="title grey--text uppercase font-weight-regular">Project-view</h3>
   <v-container class="my-4">
     <p class="grey--text font-weight-medium">All Projects</p>
       <v-layout class="row d-flex ma-2">
           <v-tooltip top>
               <template v-slot:activator="{ on }">
                    <v-btn depressed small color="grey" class="lighten-2 grey--text mr-2" @click="sortProject('title')" v-on="on">
                        <v-icon small left>mdi-folder</v-icon>
                        <span class="text-lowercase">by project</span>
                    </v-btn>
             </template>
                <span>Sort By Project Title</span>
             </v-tooltip>
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn depressed small color="grey" class="lighten-2 grey--text mr-2" @click="sortProject('person')" v-on="on">
                    <v-icon small left>mdi-account</v-icon>
                        <span class="text-lowercase">by user</span>
                    </v-btn>
                    </template>
                <span>Sort By User Name</span>
             </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn depressed small color="grey" class="lighten-2 grey--text mr-2" @click="sortProject('status')" v-on="on">
                        <v-icon small left>mdi-checkbox-marked-outline</v-icon>
                        <span class="text-lowercase">by status</span>
                    </v-btn>
                </template>
                <span>Sort By Status</span>
              </v-tooltip>
            
       </v-layout>   

     <v-card class="px-3 mb-1" flat v-for="project in projects" :key="project.title">
       <v-row :class="`project ${project.status}`">
         <v-col cols="12" sm="12" md="6">
           <div class="caption grey--text">
             Project Title
           </div>
           <div>
              {{ project.title }}
           </div>
         </v-col>
         <v-col cols="6" sm="4" md="2">
           <div class="caption grey--text">
             Person
           </div>
           <div>
             {{ project.person }}
           </div>
         </v-col>
         <v-col cols="6" sm="4" md="2">
           <div class="caption grey--text">
             Due By
           </div>
           <div class="subtitle-2">
              {{ project.due }}
           </div>
         </v-col>
         <v-col cols="12" sm="4" md="2">
           <div class="float-md-right">
              <v-chip small :class="`${project.status} white--text caption ma-2`">{{ project.status }}</v-chip>
           </div>
         </v-col>
       </v-row>
     </v-card>
    
        <div class="mt-5">
          <p class="grey--text font-weight-medium">My Projects</p>
          <v-expansion-panels hover multiple accordion>
            <v-expansion-panel
              v-for="project in myProjects"
              :key="project.title"
            >
              <v-expansion-panel-header>
                <div class="grey--text text--darken-3 subtitle-1">{{ project.title }}</div>
                  <v-spacer></v-spacer>
                  <div>
                    <v-chip small :class="`${project.status} white--text caption ma-2 float-right`">{{ project.status }}</v-chip>
                  </div>
                </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                    <div class="grey--text text--darken-4 mb-1">
                      About:
                    </div>
                    <v-divider></v-divider>
                    <p class="grey--text text--darken-2 mt-2">{{ project.content }}</p>
                  </v-col>
                   <v-col cols="12" xs="12" sm="6" md="4" lg="4">
                    <div class="grey--text text--darken-4 mb-1">
                      By:
                    </div>
                    <v-divider></v-divider>
                    <p class="grey--text text--darken-2 mt-2">{{ project.person }}</p>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="4" lg="4">
                    <div class="grey--text text--darken-4 mb-1">
                      Updated:
                    </div>
                    <v-divider></v-divider>
                    <p class="grey--text text--darken-2 mt-2">{{ project.due }}</p>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
      </div>
   </v-container>
  
  </div>
</template>

<script>
// import { firestore } from 'firebase'; 
import db from '@/fb';

export default {
  
  data(){
    return{
    //  projects: [
    //     { title: 'Design a new website', person: 'Arif Faysal', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    //     { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    //     { title: 'Design Dashboard', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    //     { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    //     { title: 'Create a Vuejs SPA', person: 'Arif Faysal', due: '18th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    //   ]
    projects:[]
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project=>{
        return project.person === 'Arif Faysal'
      })
    }
  },
  methods:{
      sortProject(orderBy){
          this.projects.sort( (a,b)=> a[orderBy] < b[orderBy] ? -1 : 1 )
      }
  },
  created(){
  //  console.log(db.collection('Project'));
    db.collection('Project').onSnapshot( res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if(change.type==='added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style scoped>
.project.ongoing{
  border-left: 4px solid #3cd1c2;
}
.project.complete{
  border-left: 4px solid orange;
}
.project.overdue{
  border-left:
   4px solid tomato;
}
.v-chip.ongoing{
  background:#3cd1c2!important;
}
.v-chip.complete{
  background:orange!important;
}
.v-chip.overdue{
  background: tomato!important;
}
</style>
