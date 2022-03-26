<template>
  <ion-toolbar color="warning">
    <ion-title>Articles</ion-title>
  </ion-toolbar>

  <!-- <ion-toolbar color="warning">
    <ion-title>
      <span>Articles</span>
    </ion-title>
  </ion-toolbar> -->
  <ion-content>
    <div class="borderBottom">
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <div>
            <img src="../assets/images/img1.jpg" alt="img1" />
          </div>
        </ion-slide>
        <ion-slide>
          <div>
            <img src="../assets/images/img2.jpg" alt="img2" />
          </div>
        </ion-slide>
        <ion-slide>
          <div>
            <img src="../assets/images/img3.jpg" alt="img3" />
          </div>
        </ion-slide>
      </ion-slides>
    </div>
    <ion-list>
      <ion-list-header class="ion-margin-bottom">
        <ion-label color="dark">
          <h4 class="news-title">News Articles</h4>
          <p class="pStyle">Discover news article here!</p>
        </ion-label>
      </ion-list-header>
      <ion-item
        href="https://www.theguardian.com/world/2020/aug/24/we-want-a-true-democracy-students-lead-thailands-protest-movement"
        lines="none"
      >
        <ion-thumbnail class="thumb-nail" slot="start">
          <img class="img-nail" src="../assets/images/img1.jpg" alt="img1" />
        </ion-thumbnail>
        <ion-label>
          <h4 class="h-nail">'We want a true democracy'</h4>
          <ion-text class="p-nail" color="medium">
            <p>
              Every morning when the national anthem plays out in Thai schools.
            </p>
          </ion-text>
          <span class="red">
            <ion-icon name="thumbs-down"></ion-icon>
            red
          </span>
        </ion-label>
      </ion-item>
      <ion-item href="https://voicetv.co.th/read/OSS8CprpB" lines="none">
        <ion-thumbnail class="thumb-nail" slot="start">
          <img class="img-nail" src="../assets/images/img3.jpg" alt="img3" />
        </ion-thumbnail>
        <ion-label>
          <h4 class="h-nail">'We want a true democracy'</h4>
          <ion-text class="p-nail" color="medium">
            <p>
              Every morning when the national anthem plays out in Thai schools.
            </p>
          </ion-text>
          <span class="yellow">
            <ion-icon name="thumbs-down"></ion-icon>
            yellow
          </span>
        </ion-label>
      </ion-item>
      <ion-item href="https://voicetv.co.th/read/59cnifudZ" lines="none">
        <ion-thumbnail class="thumb-nail" slot="start">
          <img class="img-nail" src="../assets/images/img2.jpg" alt="img2" />
        </ion-thumbnail>
        <ion-label>
          <h4 class="h-nail">'We want a true democracy'</h4>
          <ion-text class="p-nail" color="medium">
            <p>
              Every morning when the national anthem plays out in Thai schools.
            </p>
          </ion-text>
          <span class="neutral">
            <ion-icon name="thumbs-up"></ion-icon>
            neutral
          </span>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { IonSlides, IonSlide } from "@ionic/vue";
import { defineComponent } from "vue";
import { IonIcon } from "@ionic/vue";
import { addIcons } from "ionicons";
import { thumbsDown, thumbsUp } from "ionicons/icons";

export default defineComponent({
  components: { IonSlides, IonSlide, IonIcon },
  setup() {
    const slideOpts = {
      sildesPreView: 1.1,
      initialSlide: 1,
      speed: 400,
    };
    return { slideOpts };
  },
  created() {
    addIcons({
      "thumbs-down": thumbsDown,
      "thumbs-up": thumbsUp,
    });
  },
});

</script>

<style>
ion-slides {
  height: 30vh;
  div {
    border-radius: 2px;
    height: 20vh;
    width: 94%;
    margin: auto;
  }
}
.borderBottom {
  border-bottom: 1.5vh solid var("ion-color-light-contrast-rgb");
}
ion-label {
  font-weight: bold !important;
  font-size: 9rem;
}
.news-title {
  font-weight: bold !important;
  font-size: 9rem;
}
.p-nail {
  font-size: 0.5rem;
  font-weight: normal;
}

.p-title {
  font-weight: normal;
  font-size: 1.2rem;
}
.thumb-nail {
  height: 16vh;
  width: 25vw;
}
.h-nail {
  font-weight: 1800px !important;
  font-size: 1rem;
}
.img-nail {
  border-radius: 5px;
  height: 100%;
  width: 100%;
}
.pStyle {
  padding-bottom: 0.5vh;
  font-size: 0.82rem !important;
}
.red {
  font-weight: normal;
  color: red;
  font-size: 0.82rem !important;
}
.yellow {
  font-weight: normal;
  color: #fad02c;
  font-size: 0.82rem !important;
}
.neutral {
  font-weight: normal;
  color: green;
  font-size: 0.82rem !important;
}

ion-slides {
  --bullet-background: white !important;
  --bullet-background-active: #f2cd53 !important;
}
/* ion-slides {
  --bullet-background: red;
  --bullet-background-active: rebeccapurple;
} */
</style>
