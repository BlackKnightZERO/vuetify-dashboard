<template>

  <div class="dashboardclass">
    <h3 class="title grey--text uppercase font-weight-regular">Dashboard-view</h3>
    
   <v-container class="my-4">

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

   </v-container>
  
  </div>
</template>

<script>

export default {
  
  data(){
    return{
     projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
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
