<template>
    <ion-page>
        <ion-button  
        id="present-alert"
        color="danger"
        expand="full"        
        >Excluir</ion-button>

        <ion-alert
        trigger="present-alert"
        header="Deseja mesmo excluir esse contato?" 
        :buttons="this.alertButtons"        
        ></ion-alert>
    </ion-page>
</template>


<script>
import { IonButton, IonAlert } from '@ionic/vue';

export default {
    components: { IonButton, IonAlert },

    props: ['contatoId'],

    data() {
        return {
            alertButtons:  [
            {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
                this.$router.push('/home');
            },
            },
            {
            text: 'OK',
            role: 'confirm',
            handler: () => {
                return this.$store.getters.excluirContato(this.contatoId);
            },
            },
            ],
        }
    }
}

</script>


<style scoped>

</style>