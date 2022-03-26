<template>
    <ion-page>  
    <ion-content >
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide>

            <div class="holder"> 
                
                <img class="img7" src="../assets/images/img7.png" alt="img7" />
      
                <ion-card class="card">
                    <ion-card-header>
                    <ion-card-title class="title"> Article </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        Click Article in order to access our news, where bias dectection as has been applied.
                    </ion-card-content>
                </ion-card>
            </div>
            </ion-slide>
            <ion-slide>
                <div class="holder"> 
             
                <img class="img5" src="../assets/images/img5.jpg" alt="img5"/>

                <ion-card class="card">
                    <ion-card-header>
                    <ion-card-title class="title"> Give your Opinion </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        User are able to "Rate" on the bias in the news by clicking ...
                    </ion-card-content>
                </ion-card>
                </div>
            </ion-slide>
            <ion-slide>
            <div class="holder"> 
             
                <img class="img8" src="../assets/images/img8.png" alt="img8"/>

                <ion-card class="card">
                    <ion-card-header>
                    <ion-card-title class="title"> Alter your Profile </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        Changing your profile information in your setting.
                    </ion-card-content>
                </ion-card>
                </div>
            </ion-slide>
        </ion-slides>
    </ion-content> 
    </ion-page> 

</template>

<script>

import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  }
});
</script> 

<style scoped>

ion-slides {
  --bullet-background: rgb(77, 77, 77) !important;
  --bullet-background-active: #f2cd53 !important;
  height: 650px;
  
}
img {
 height: 100%;
 width: 100%;
 object-fit: contain;
}

.img5 {
 height:290px;
 width: 350px;
}

.holder{
    width:95%;    
    display:block;
    margin: 0 auto;
}

</style>