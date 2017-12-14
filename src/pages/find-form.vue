<template>
  <f7-page>
    <f7-navbar title="Znalazłem" back-link="Back" sliding>    	
    </f7-navbar>
    <f7-block-title>Zgłoś znalezisko</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Tytuł</f7-label>
        <f7-input type="text" v-model="pet.title" placeholder="Tytuł"></f7-input>
      </f7-list-item>
       <f7-list-item>
        <f7-label>Opis</f7-label>
        <f7-input type="textarea" v-model="pet.description" placeholder="Opis"></f7-input>
      </f7-list-item>
  	  <f7-list-item checkbox v-model="saveGps" value="1" title="Zaznacz na mapie" checked></f7-list-item>  
  	   <f7-list-item>
        <f7-label>Kontakt</f7-label>
        <f7-input type="text" v-model="pet.contact" placeholder="Kontakt"></f7-input>
      </f7-list-item>   	 
     </f7-list>
      <f7-button raised round v-on:click="takePhoto"><i class="f7-icons">camera</i></f7-button>
      </br/>
      <f7-button raised round color="green" v-on:click="save">Zapisz</f7-button>    
  </f7-page>
</template>

<script>
import {db} from '@/firebase';
import Firebase from 'firebase';

export default {
    name: 'find-form',
	components: {
		
	},
	firebase: {
	   pets: {
	   	source: db.ref('pets'),    
      	cancelCallback(err) {
        	console.error(err);
      	}
	   }
	},
	data: function(){
		return {
			pet: {
				title: "",
				description: "",
				image: "",
				lat: "",
				lng: "",
				status: "new",
				contact: ""
			},
			saveGps: true
		}
	},
	methods: {
		takePhoto: function(){
			var is_webkit = false;
			if (navigator.webkitGetUserMedia) {    
			    is_webkit = true;
			    navigator.webkitGetUserMedia('video', onSuccess, onError);
			}
			function onSuccess(stream) {
			    var output = document.getElementById('output'); //a <VIDEO> element			 
			    output.autoplay = true; //you can set this in your markup as well			 
			    output.src = is_webkit ? window.webkitURL.createObjectURL(stream) : stream;
			}
		},
		save: function() {			
			 var that = this;
			 var myApp = new Framework7();			 
			 if(that.saveGps){
			 	if (navigator.geolocation) {
	        		navigator.geolocation.getCurrentPosition(function(position){
	        			that.pet.lat = position.coords.latitude;
	        			that.pet.lng = position.coords.longitude
	        			doPush(that.pet)
				    });
	    		} 			 	
			 }else{
			 	doPush(that.pet)
			 }
             
             function doPush(pet){
					that.$firebaseRefs.pets.push(pet, function(error){			 			
						if(error){
							myApp.alert('Aby dodac zgłoszenie musisz sie zarejestrowac', 'Błąd');
						}
					});
             }
			 
		
		}
	}
}
</script>

<style scoped>

</style>