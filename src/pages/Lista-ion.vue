<template>
    <ion-page>

        <ion-header>
            <ion-toolbar color="primary"> 

                <ion-title>
                    <ion-item color="primary">
                        <ion-thumbnail>
                            <img alt="ronin logo" src="/src/img/ronin.jpg" />
                        </ion-thumbnail>
                        <p>Meus Contatos</p>
                    </ion-item>
                    
                </ion-title>
            </ion-toolbar>
        </ion-header>

            <ion-content>
                <ion-list>
                    <ion-item>
                        <ion-label>Leandro</ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-label>Tatiana</ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-label>Erik</ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-label>Nivaldo</ion-label>
                    </ion-item>

                    <ion-item>
                        <ion-label>Daniel V.</ion-label>
                    </ion-item>

                </ion-list>
            </ion-content>
        
    </ion-page>
</template>

<script>
import{IonPage, IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonList, IonToolbar, IonThumbnail } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonPage, IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonList, IonToolbar, IonThumbnail},
  });

</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ion-toolbar{
    text-align: center;
    padding-bottom: 1rem;       
}

ion-title {
    padding-top: 1rem;
    padding-right: .5rem;
    display:flex;
    justify-content: center;
    align-items:center; 
}

ion-thumbnail {
    --size: 3rem;
    --border-radius: 50px;    
}

p {
    padding-left: 10px;
}



</style>