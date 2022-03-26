<template>

    <ion-page> 

         <ion-content> 
            <img src="assets/chick-chick.png" class="center">
            <h1> OPINION-ZERO </h1>
         </ion-content>

    </ion-page> 

</template>

<script>
import { IonPage } from '@ionic/vue' 

export default {

    components: {

        IonPage,
   
    },

}
</script>

<style>

h1{ 
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
  font-family: 'Georgia';
}

h3{ 
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
  font-family: 'Kanit', sans-serif;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-top: 130px;
}

</style>