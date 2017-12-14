<template>
  <f7-page>
    <f7-navbar title="Znalezione" back-link="Back" sliding>
    	<f7-nav-right> 
    	    <f7-button v-if="isLogin" v-on:click="search">Znalazłem</f7-button>           
            <i class="f7-icons" v-on:click="openListMenu">favorites</i>
        </f7-nav-right>
    </f7-navbar>
    <f7-grid no-gutter>
    	<f7-col :width="gridSettings" v-for="pet in pets">
        	<pet-card :pet="pet"  searched="false"></pet-card>
    	</f7-col>       
     </f7-grid>
    
  </f7-page>
</template>

<script>

import petCard from "@/components/pet-card"
import {db} from '@/firebase'
import Firebase from 'firebase'

export default {
    name: 'finded',
	components: {
		'pet-card' : petCard
	},	
	data: function(){
		return {
			gridSettings: 50,
			isLogin: Firebase.auth().currentUser				
		}
	},
	firebase: {
	   pets: {
	   	source: db.ref('pets'),    
      	cancelCallback(err) {
        	console.error(err);
      	}
	   }
	},
	methods: {
		openListMenu: function(){
			var myApp = new Framework7();
			var that = this;
			var buttons = [		       
		        {
		            text: 'One column',
		            bold: true,
		            onClick: function () {                		
                		that.gridSettings = 100;
            		}
		        },
		        {
		            text: 'Two column',
		            bold: true,
		            onClick: function () {                		
                		that.gridSettings =50;
            		}
		        }		      
		    ];
		    myApp.actions(buttons);

		},
		search: function(){			
			this.$router.load({url: '/find-form/'})			
		}
	}
}
</script>

<style scoped>
.navbar-inner .right {
	margin-right: 20px;
}
</style>