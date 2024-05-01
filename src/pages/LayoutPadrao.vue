<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary"> 

                <ion-buttons slot="start">
                        <ion-back-button :default-href="linkRetorno"></ion-back-button> 
                </ion-buttons>

                <ion-title>
                    <ion-item color="primary">
                        <ion-thumbnail>
                            <ion-img alt="ronin logo" src="/src/img/ronin.jpg" />                            
                        </ion-thumbnail>
                        <p>{{ titulo }}</p>
                    </ion-item>
                </ion-title>
                
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot />
        </ion-content>


    </ion-page>
</template>


<script>
import { IonPage, IonHeader, IonTitle, IonContent, IonItem, IonToolbar, IonThumbnail, IonImg, IonButtons, IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    
    props: ["titulo", "linkRetorno"],  
    
    components: { IonPage, IonHeader, IonTitle, IonContent, IonItem, IonToolbar, IonThumbnail, IonImg, IonButtons, IonBackButton},
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
}

ion-thumbnail {
    --size: 3rem;
    --border-radius: 50px;    
}

p {
    padding-left: 10px;
}

ion-buttons {
    padding-top: 1rem;
}

</style>