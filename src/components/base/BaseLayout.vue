<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title> {{ pageTitle }} </ion-title> 
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot></slot>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonBackButton, IonButtons ,IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue'; 

export default {
    props: ["pageTitle", "pageDefaultBackLink"],
    components: {
        IonPage, 
        IonHeader,
        IonToolbar, 
        IonTitle, 
        IonContent,
        IonBackButton,
        IonButtons
    }
}
</script>

<style>

</style>