<template>	
	 <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Logowanie</f7-login-screen-title>
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
              <f7-list-button title="Zaloguj" v-on:click="signIn"></f7-list-button>   
               <f7-list-button color="blue" title="Zamknij" v-on:click="close"></f7-list-button>           
              <f7-list-label>
                <p>Jeśli nie masz jeszcze konta, <a v-on:click="showRegistration"> zarejestruj się.</a></p>
              </f7-list-label>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
</template>

<script>
	import firebase from 'firebase'

	export default {
		name: 'login',
		data: function(){
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signIn: function() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
					(user) => {						
						this.close();
						var myApp = new Framework7();            
      					// var mainView = myApp.addView('.view-main');
      					// mainView.router.load({reload:true});
					},
					(err) => {
						alert('Oops. '+err.message)
						//this.close();
					}
				)
			},
			close: function(){
				var myApp = new Framework7();
				myApp.closeModal();
			},
			showRegistration: function() {
				var myApp = new Framework7();
				myApp.loginScreen('#register-screen');
				
			}
			
		}
	}
</script>


<style scoped>
 .login {
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
 p {
 	margin-top: 40px;
 	font-size: 13px;
 }
 p a {
 	text-decoration: underline;
 	cursor: pointer;
 }

</style>