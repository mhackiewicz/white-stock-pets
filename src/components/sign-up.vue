<template>
	<f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Rejestracja</f7-login-screen-title>
            <f7-list form>
              <f7-list-item>
                <f7-label>Email</f7-label>
                <f7-input name="email" v-model="email" placeholder="email" type="text"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input name="password" v-model="password" type="password" placeholder="Password"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button title="Zarejestruj" v-on:click="signUp"></f7-list-button>   
              <f7-list-button color="blue" title="Zamknij" v-on:click="close"></f7-list-button>           
              <f7-list-label>
                <p>Jeśli masz jeszcze konta, <a v-on:click="showLogin"> zaloguj się.</a></p>
              </f7-list-label>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>	
</template>

<script>
    import firebase from 'firebase'

	export default {
		name: 'signUp',
		data: function(){
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signUp: function(){
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
					(user) => {						
						this.close();
						var myApp = new Framework7();
						console.log(myApp.router)
						//myApp.router.load();
					},
					(err) => {
						alert('Oops. '+err.message)
					}
				)
			},
			close: function(){
				var myApp = new Framework7();
				myApp.closeModal();
			},
			showLogin: function(){
				var myApp = new Framework7();
				myApp.loginScreen('#login-screen');
			}
		}
	}
</script>

<style scoped>
 .signUp {
 	margin-top:40px; 	
 }
 input {
 	margin: 10px 0;
 	width: 20%;
 	padding: 15px; 	
 }
 button {
 	margin-top: 20px;
 	width: 10%;
 	cursor: pointer;
 }
 span {
 	display: block;
 	margin-top: 20px;
 	font-size: 11px;
 }

</style>