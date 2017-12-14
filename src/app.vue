<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">       
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Menu" sliding></f7-navbar>
                          
            <f7-list>
              <f7-list-item link="/finded/" title="Znalezione" link-view="#main-view" link-close-panel></f7-list-item>             
              <f7-list-item link="/searched/" title="Szukam" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
            <f7-block-title v-if="isLogin">Akcje</f7-block-title>
            
            <f7-list v-if="isLogin">             
              <f7-list-item  link="/find-form/" title="Znalazłem" link-view="#main-view" link-close-panel></f7-list-item>              
              <f7-list-item  link="/search-form/" title="Szukam" link-view="#main-view" link-close-panel></f7-list-item>              
            </f7-list>
          
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>


    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>       
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>WhiteStock Pets</f7-nav-center>    
              <f7-nav-right>
                <f7-button v-if="isLogin" v-on:click="logout">Wyloguj</f7-button>
                <f7-button v-if="!isLogin" v-on:click="openLoginScreen">Zaloguj</f7-button>
              </f7-nav-right>         
            </f7-navbar>
            <!-- Page Content -->
            <f7-block-title>Witaj</f7-block-title>
            <f7-block inner>
              <p>WhiteStock Pets to aplikacja pomagająca w odnalezieniu zaginionego zwierzaka. Dzięki raportom zgłaszanym przez naszych użytkowników możesz zlokalizowac zwierzaka jak równiez zaraportowac "znajdę". Aby móc zgłaszac zagnione zwierzaki zaloguj sie do aplikacji.</p>
              <div class="row">
                <div class="col-33"></div>
                <div class="col-33"> <img src="../static/paw.jpg" width="100" height="100"></div>
                <div class="col-33"></div>
              </div>
              
            </f7-block>
           
          <!--   <f7-block-title>Menu</f7-block-title>
            <f7-list>
              <f7-list-item link="/finded/" title="Znalezione"></f7-list-item>
              <f7-list-item link="/find-form/" title="Znalazłem"></f7-list-item>
              <f7-list-item link="/form/" title="Szukam"></f7-list-item>             
            </f7-list> -->
          
           
            <f7-block v-if="!isLogin">
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-login-screen="#login-screen">Zaloguj się</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-login-screen="#register-screen">Zarejestruj się</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view navbar-fixed>
        <f7-pages>
          <f7-page>
            <f7-navbar title="Popup">
              <f7-nav-right>
                <f7-link close-popup>Close</f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <login></login>
    </f7-login-screen>

     <f7-login-screen id="register-screen">
      <register></register>
    </f7-login-screen>

  </div>
</template>

<script>

import login from "@/components/login"
import register from "@/components/sign-up"
import Firebase from 'firebase'

export default {
  data: function(){
    return {
      isLogin: Firebase.auth().currentUser
    }
  },
  components: {
    'login' : login,
    'register' : register,
  },  
  mounted() {
      var that = this;
      Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          that.isLogin = true;
        } else {
           that.isLogin = false;
          
        }
      });
  }, 
  methods: {
    logout: function(){
      Firebase.auth().signOut();
      return false;
    },
    openLoginScreen: function(e){
      e.preventDefault();
      console.log("!!!!!!!!!!!!");
      var myApp = new Framework7();
      myApp.loginScreen('#login-screen');
    }
  }
}
</script>