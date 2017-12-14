<template>
  <f7-page>
    <f7-navbar title="Szukam" back-link="Back" sliding>    	
    </f7-navbar>
    <f7-block-title>Zgłoś "zgubę"</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Tytuł</f7-label>
        <f7-input type="text" v-model="pet.title" placeholder="Tytuł"></f7-input>
      </f7-list-item>
       <f7-list-item>
        <f7-label>Opis</f7-label>
        <f7-input type="textarea" v-model="pet.description" placeholder="Opis"></f7-input>
      </f7-list-item>
  	  <f7-list-item>
  	   <f7-list-item checkbox v-model="saveGps" value="1" title="Zaznacz na mapie" checked ></f7-list-item> 
  	   </f7-list-item>  
  	   <f7-list-item>
        <f7-label>Kontakt</f7-label>
        <f7-input type="text" v-model="pet.contact" placeholder="Kontakt" class="huj"></f7-input>
      </f7-list-item> 
      <f7-list-item>
        <f7-label>Zdjęcie</f7-label>
        <f7-input type="file" v-model="pet.image" v-on:change="filesUpload($event.target.files)"></f7-input>
      </f7-list-item>   	 
     </f7-list>     
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
	   searched: {
	   	source: db.ref('searched'),    
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
				contact: "",
				userId: ""
			},
			saveGps: true
		}
	},
	methods: {		
		save: function() {			
			 var that = this;
			 var myApp = new Framework7();	
			 if (Firebase.auth().currentUser !== null){
			 	that.pet.userId = Firebase.auth().currentUser.uid;
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
			 }else{
			 	myApp.alert('Aby dodac zgłoszenie musisz sie zarejestrowac', 'Błąd');
			 } 		 
			
             
             function doPush(pet){             	    
					that.$firebaseRefs.searched.push(pet,function(error){
						if(error){
							myApp.alert('Błąd zapisu', 'Błąd');
						}else{
							that.$router.load({url: '/searched/'})		
						}
					});
             }
			 
		
		},
		filesUpload: function(files){
			
	        if (!files.length) return;
	       
	        this.getBase64(files[0])


		},
		getBase64: function(file) {
		  var that =this;
		  var reader  = new FileReader();

		  reader.addEventListener("load", function () {		   
		   	that.pet.image = reader.result;
		  }, false);

		  if (file) {
		    reader.readAsDataURL(file);
		  }
		}
	}
}
</script>

<style scoped>

</style>