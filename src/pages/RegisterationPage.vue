<template>

  <ion-page> 
    <ion-content color="warning">

        <div class="specialDiv">
            Register 
        </div>  
    
        <ion-grid>
            <ion-row color="primary" justify-content-center>
                <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
                    <div text-center>
                        <h3 class="head">Create your account <ion-icon name="create-outline" style="font-size: 25px;" ></ion-icon> </h3>
                    </div>
                    <div padding>
                        <ion-item>
                            <ion-input  name="name" type="text" placeholder="Name" ngModel required></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input name="email" type="email" placeholder="your@email.com" ngModel required></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input name="password" type="password" placeholder="Password" ngModel required></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input name="confirm" type="password" placeholder="Password again" ngModel required></ion-input>
                        </ion-item>
                    </div>
                    <div padding>
                      <ion-button  @click="ToLogin()" size="large" type="submit" expand="full">Register</ion-button>
                    </div>
                    <div  class="router">
                      <router-link to="/loginPage">Sign in</router-link>
                    </div> 
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
  </ion-page> 
</template>

<script>

import { IonIcon } from '@ionic/vue';
import { addIcons } from 'ionicons';
import { createOutline } from 'ionicons/icons'; 

import {
  IonGrid,
  IonButton,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonContent,
  IonPage,

} from "@ionic/vue";
export default {
  components: {
    IonGrid,
    IonButton,
    IonRow,
    IonCol,
    IonItem,
    IonInput,
    IonContent,
    IonPage,
    IonIcon

  },
  
  created() {
    addIcons({
      'create-outline': createOutline,
    });
  },
  methods: {
    ToLogin(){
      this.$router.push('/loginPage'); 
      }
    }
};
</script>

<style scoped>

.specialDiv {

  font-size:3em;
  text-align: center;
  padding-top: 100px;
  font-family: 'Georgia';

}
.router{
  text-align: center;
  padding-top: 10px;
}

.head{ 
  text-align: center;
  padding-bottom: 10px;
  font-family: 'Georgia';
}

ion-item {
  --background: #fefefe;
  --color: rgb(0, 0, 0);
}

ion-button {
  --background: #a2967b;
    padding-top: 10px;
  
}
</style>