<template>
    <base-layout page-title="All Memories">
            <ion-list>
                <ion-item router-link="/memories/1">A trip in Mountains</ion-item>
                <ion-item router-link="/memories/1">Surfing the sea</ion-item>
                <ion-item>Dinner</ion-item>
            </ion-list>
    </base-layout>
</template>

<script>
import { IonList, IonItem } from '@ionic/vue'; 

export default {
    components: {
        IonList,
        IonItem
    }
}
</script>

<style>

</style>