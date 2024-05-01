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

    </layout-padrao>
</template>

<script>
import{IonItem, IonLabel, IonList, IonImg, IonThumbnail} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonThumbnail,IonImg },

    computed: {
        contatos() {
            return this.$store.getters.retornarContatos;            
        }
    }
 });

</script>

<style scoped>
ion-thumbnail {
    padding-right: 1rem;
}

</style>