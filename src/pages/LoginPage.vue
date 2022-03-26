<template>

  <!-- <base-layout page-title="All Memories"> -->
  <ion-page> 
    <ion-content color="dark"> 

      <div class="specialDiv">
        <ion-icon name="person-circle-outline"
        style="font-size: 120px;
        color: white;
        padding-bottom: -10px;"></ion-icon>
      </div>

      <!-- <ion-icon
      name="arrow-back"
      style="font-size: 24px; color: green"
      />

      <ion-icon ios="ios-person-add" md="md-person-add"></ion-icon> -->

      <ion-grid>
        <ion-row color="primary" justify-content-center>
          <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
            <div text-center>
              <h3 class="head">Login to your Account</h3>
            </div>
            <div padding>
              <ion-item>
                <ion-input 
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  font-family="Georgia"
                ></ion-input>
              </ion-item>
              <ion-item>
                <ion-input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                ></ion-input>
              </ion-item>
              <ion-item>
                <ion-input
                  name="confirm"
                  type="password"
                  placeholder="Password again"
                  required
                ></ion-input>
              </ion-item>
            </div>
            <div padding>
              <ion-button size="large" type="submit" expand="block" font-family="Georgia">Login</ion-button
              >
            </div> 
            <div  class="router">
              <router-link to="/regisPage">Sign up</router-link>
            </div> 
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page> 
  <!-- </base-layout> -->
</template>

<script>

import { IonIcon } from '@ionic/vue';
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';

import {
  IonGrid,
  IonButton,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonContent,
  IonPage

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
    IonIcon,
    IonPage
  },

  created() {
    addIcons({
      'person-circle-outline': personCircleOutline,
    });
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
  --background: #ffc738;
  --color: rgb(255, 255, 255);
}

ion-button {
  --background: #ae8d47;
  padding-top: 10px;
  
}
</style>