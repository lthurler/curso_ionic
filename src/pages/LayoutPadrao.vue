<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                
                <div id="bt">
                    <ion-back-button :default-href="linkRetorno"></ion-back-button>
                    <!-- <ion-button :router-link="`/home`" aria-label="back">
                        <ion-icon :icon="arrowBackOutline" size="large" aria-hidden="true" color="#ffff"></ion-icon>
                    </ion-button> -->
                <!-- <ion-buttons slot="start">
                        <ion-back-button :default-href="linkRetorno"></ion-back-button> 
                </ion-buttons> -->

                <ion-title>
                    <div id="titulo">
                        <ion-thumbnail>
                            <ion-img alt="ronin logo" src="/src/img/ronin.jpg" />                            
                        </ion-thumbnail>
                        <p>{{ titulo }}</p>
                    </div>                   
                </ion-title>
                </div>                
                
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot />
        </ion-content>


    </ion-page>
</template>


<script>
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonThumbnail, IonImg, IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    
    props: ["titulo", "linkRetorno"],  
    
    components: { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonThumbnail, IonImg, IonBackButton},
    

  });
</script>


<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}

ion-page {
    background-color: #000000;
}

ion-header {
    margin-bottom: 1rem;
}

ion-toolbar{
    display: flex;
    padding-bottom: 1rem;              
}

#bt {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

ion-title {    
    padding-top: 1rem;              
}

#titulo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

p {
    padding-left: 10px;
}

ion-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
}

ion-back-button {
    padding-top: .5rem;
}

</style>