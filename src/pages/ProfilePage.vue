<template>
  <ion-content fullscreen="true">
    <ion-grid class="main-header">
      <div align="center">
        <ion-avatar>
          <img src="../assets/images/profile.png" />
        </ion-avatar>
      </div>
    </ion-grid>

    <ion-row class="ion-padding-horizontal">
      <ion-col size="6">
        <ion-item lines="none" class="ion-text-center">
          <!-- <ion-icon name="water" color="primary"></ion-icon> -->
          <ion-label>
            <p>Username</p>
            Phanggg
          </ion-label>
        </ion-item>
      </ion-col>
      <ion-col size="6">
        <ion-item lines="none" class="ion-text-center">
          <!-- <ion-icon name="trophy" color="primary"></ion-icon> -->
          <ion-label>
            <p>Favourites</p>
            12
          </ion-label>
        </ion-item>
      </ion-col>
    </ion-row>

    <ion-list lines="full">
      <ion-item>
        <ion-label class="info">
          <ion-text>Name</ion-text>
          <p><ion-text color="dark">Pith Laohavirojana</ion-text></p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label class="info">
          <ion-text>Phone</ion-text>
          <p><ion-text color="dark">9999900000</ion-text></p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label class="info">
          <ion-text>Email</ion-text>
          <p><ion-text color="dark">phang@gmail.com</ion-text></p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label class="info">
          <ion-text>Age</ion-text>
          <p><ion-text color="dark">21 years</ion-text></p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label class="info">
          <ion-text>Address</ion-text>
          <p><ion-text color="dark">Thailand</ion-text></p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
export default {};
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: center;
  align-content: center;

  height: 28vh;
  width: 120%;
  background: linear-gradient(
    90deg,
    var(--ion-color-warning) 0%,
    var(--ion-color-warning) 100%
  );
  box-shadow: 0 1px 10px var(--ion-color-light);
  border-radius: 0 0 50% 50%;
  margin-left: -4.5vh;
  margin-top: -5px;
}
div {
  transform: translateY(2vh);
}
ion-avatar {
  width: 15vh;
  height: 15vh;
  margin-bottom: 5px;
}
ion-row {
  margin-top: -60px;
}
ion-item {
  width: 94%;
  margin: auto;
  border: 1px solid var(--ion-color-light);
  box-shadow: 1px var(--ion-color-dark-tint);
  border-radius: 5px;
}
ion-label {
  font-size: 1.8rem;
  font-weight: bold;
}
p {
  font-size: 0.7rem;
}
ion-list {
  margin-top: 6rem;
}
.info {
  font-size: 0.9rem;
}
ion-list,
p {
  margin-top: 5px;
  font-size: 1.2rem;
  font-weight: normal;
}
</style>
