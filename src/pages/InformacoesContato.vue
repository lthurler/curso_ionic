<template>

    <layout-padrao titulo="Informações de Contato" linkRetorno="/home">
        <div>
            <img :src="carregarContato.foto" />
            <h2><strong>{{ carregarContato.nome }}</strong></h2>
            <div id="telefone">
                <img src="../img/call-outline.svg" />
                <h3>{{ carregarContato.telefone }}</h3>
            </div>
        </div>

    </layout-padrao>

    
</template>

<script>
import {  } from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
    components: { },

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


<style scoped>

#titulo p {
    margin-left: 1rem;
}

div {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        
}

img {
    width: 50%;    
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
}

#telefone {
    flex-direction: row;
}

#telefone img{
    width: 2rem;    
    filter: invert(8%) sepia(68%) saturate(4691%) hue-rotate(285deg) brightness(137%) contrast(114%);  
}

h3 {
    padding-left: .5rem;
    padding-bottom: .5rem;
    
}

</style>