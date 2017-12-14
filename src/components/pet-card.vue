<template>
    <div class="card">
	  <div class="card-header"><b>{{pet.title}}</b></div>
	  <div class="card-content">
	    <div class="card-content-inner">{{pet.description}}</div>
	    <img v-if="pet.image != '' "v-bind:src="pet.image" width="100" height="auto" />
	  </div>
	  <div class="card-footer">	  	
  			<f7-button v-if="(searched == 'true')" v-bind:href="'/searched/'+pet['.key']" round><small>Szczegóły</small></f7-button>
  			<f7-button v-if="(searched == 'false')" v-bind:href="'/pet/'+pet['.key']" round><small>Szczegóły</small></f7-button>
  			
  			<!-- <f7-button round><small>Edytuj</small></f7-button>		 -->
	  </div>
	</div>     
</template>

<script>
export default {
	name: 'pet-card',
	props: ['pet', 'searched'],
	data: function(){
		return {			
		}
	},
	methods: {
	},
	mounted: function(){
		console.log("EEEEEEEEEE");
		console.log(this.pet)
		console.log(this.searched)
	}

}
</script>

<style scoped>
  .card-content{
  	max-height: 150px;
  	min-height: 150px;
  }
</style>