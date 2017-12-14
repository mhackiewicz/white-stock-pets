<template>
  <f7-page>
    <f7-navbar title="Szczegóły" back-link="Back" sliding>    
    	
    </f7-navbar> 
    <f7-block-title><h3><b>{{pet.title}}</b></h3></f7-block-title>
	<f7-block-title>Opis</f7-block-title>
    <f7-block inner> 
    	{{pet.description}} 
    	
    </f7-block>
    <f7-block-title v-if="pet.image != ''">Zdjęcie</f7-block-title>
    <f7-block inner v-if="pet.image != ''"> 
    	<img v-bind:src="pet.image"/>
    </f7-block>
    <f7-block-title v-if="pet.lat != ''">Mapa</f7-block-title>

    <f7-block inner v-if="pet.lat != ''">   
    	  <gmap-map
			  v-bind:center="latLng"
			  :zoom="14"
			  map-type-id="terrain"
			  style="width: 500px; height: 300px"
			>
				<gmap-marker :position="latLng">
      			</gmap-marker>
			</gmap-map>  	
    </f7-block>
    <f7-block-title>Kontakt</f7-block-title>
    <f7-block inner> 
    	<b>{{pet.contact}}</b>
    </f7-block>
    
  </f7-page>
</template>

<script>
import {db} from '@/firebase';


export default {
    name: 'pet-details',	
	data: function(){
		return {
			latLng: {}
		}
	},
	mounted : function() {
		console.log(this.pet);
		console.log(this.$route.params.petId);
		this.latLng = {
			lat: parseFloat(this.pet.lat),
			lng: parseFloat(this.pet.lng)
		}
	},
	firebase() {
	   return {
	   		pet: {
	   			source: db.ref('pets/'+this.$route.params.petId),
	   			asObject: true	   			
	   		} 	   		
	   }
	   
	},
	methods: {
		
	}
}
</script>

<style scoped>

</style>