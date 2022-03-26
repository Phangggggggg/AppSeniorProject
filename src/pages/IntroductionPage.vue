<template>

    <ion-page> 
        <ion-content color="warning"> 

            <div class="specialDiv">
                <ion-card-subtitle>
                        <ion-icon name="search-circle"
                        style="font-size: 120px;
                        color: white;
                        padding-bottom: -10px;"></ion-icon>
                </ion-card-subtitle>
            </div>

            <div class="holder"> 
                <ion-card class="card">
                    <ion-card-header>
                    <ion-card-title class="title"> Introduction </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        Our mobile application called Opinion Zero,  where the meaning tries to encourage  
                        the  non-bias  opinion  toward  political  news  or  information  that  
                        the  public consume from a computer program point of view.  
                        Opinion Zero focuses on two political biases occurring in Thailand as 
                        detection criteria, which are red shirt and yellow shirt. “Opinion Zero” would evaluate,
                        detect, and analyze each news as red shirt favour or yellow shirt favour and those 
                        news will be accessible and displayed on the feed to the users.
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>     
  
</template>

<script> 

import { IonIcon } from '@ionic/vue';
import { addIcons } from 'ionicons';
import { searchCircle } from 'ionicons/icons'; 
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
export default {

    components: {
        IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon},

    created() {
    addIcons({
      'search-circle': searchCircle,
    });
  }

}
</script>

<style scoped>

.specialDiv {
  text-align: center;
  padding-top: 80px;
  padding-bottom: -30px;
}
.intro {
    text-align: center;
    background-color: lightgrey;
    width: 350px;
    /* border: 10px solid rgb(250, 250, 250); */
    padding: 10px;
    margin: 11px;
        
}
.title {
    font-weight: bold;
}
.card {
     text-align: center;

}
.holder{
    width:95%;    
    display:block;
    margin: 0 auto;
}

</style>>
