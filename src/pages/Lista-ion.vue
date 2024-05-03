<template>
    <layout-padrao titulo="Meus Contatos">

        <ion-list>

            <ion-item 
                v-for="contato in contatos"
                :key="contato.id"
                :router-link= "`/contato/${contato.id}`"
                class="ion-margin-bottom"            
                >
                <ion-thumbnail>
                    <ion-img alt="imagem contato" :src="contato.foto" />
                </ion-thumbnail>
                <ion-label>
                    {{contato.nome}}
                </ion-label>
                <ion-label>
                    {{contato.telefone}}
                </ion-label>
            </ion-item>

        </ion-list>

        <ion-button expand="full" color="sucess" :router-link="`/addcontato`" aria-label="add"> 
            <ion-icon :icon="add" size="large" aria-hidden="true" color="#ffff"></ion-icon>
        </ion-button>

    </layout-padrao>
</template>

<script>
import { IonItem, IonLabel, IonList, IonImg, IonThumbnail,IonButton,IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonThumbnail, IonImg, IonButton,IonIcon },


    setup() {
        return { add };
    },

    computed: {
        contatos() {
            return this.$store.getters.retornarContatos;            
        }
    }
 });

</script>

<style scoped>



ion-label {
    padding-left: 1rem;
    
}

</style>