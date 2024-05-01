<template>

    <layout-padrao titulo="Informações de Contato" linkRetorno="/home">
        <div style="display: flex">
            <img :src="carregarContato.foto" />
            <h2>{{ carregarContato.nome }}</h2>
        </div>
        <h3>telefone: {{ carregarContato.telefone }}</h3>

    </layout-padrao>

    
</template>

<script>
import { } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {},

    data() {
        return {
            contatoId: this.$route.params.id
        }
    },

    computed: {
        carregarContato() {
            return this.$store.getters.encontrarContato(this.contatoId)
        }
    }

  });
</script>