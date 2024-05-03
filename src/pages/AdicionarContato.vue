<template>
    <layout-padrao titulo="Adicionar Contato" linkRetorno="/home">

        <div class="form-container">
        
            <div class="label">
                <label for="nome">Nome:</label>
                <label for="telefone">Telefone:</label>
            </div>
            
            <div class="form">
                <input type="text" id="nome" name="nome" v-model="nome">
                <input type="text" id="tel" name="telefone" v-model="tel">
            </div>
        </div>
            
            <div class="foto">
                <label for="foto" class="file">Selecione a foto:
                    <input type="file" id="foto" name="foto" @change="onFileSelected">

                </label>
            </div>
            
        <div class='botao'>
            <ion-button shape='round' @click="salvarContato">Salvar</ion-button>
        </div>

    </layout-padrao>
</template>


<script>
import { Filesystem } from '@capacitor/filesystem';
import { IonButton } from '@ionic/vue';

export default {
 
    components: { IonButton },

    methods: {

        async onFileSelected(event) {
            const file = event.target.file[0];
            const reader = new FileReader();

            reader.onload = async () => {
                const fileUri = reader.result;
                const fileName = `${this.nome}.jpg`;

                await this.savePhoto(fileUri, fileName);
            };

            reader.readAsDataURL(file);  
        },

        async savePhoto(fileUri, fileName) {
            try {
                const folderName = '/src/img';

                await Filesystem.writeFile({
                    path: `${folderName}/${fileName}`,
                    data: fileUri,
                    // directory: FilesystemDirectory.Data                    
                });

            } catch (error) {
                console.error('erro ao salvar a foto' , error);
            }
        }        
    }
}

</script>

<style scoped>

.form-container {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    gap: 1rem;
    padding: 1rem;
    padding-bottom: 4rem;    
}

.label {
    padding-top:.5rem;
    display: flex;
    flex-direction: column;
    gap: 3.9rem;    
}

.form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.form input {
    height: 2rem;
    border-radius: 20px;
}

.foto {
    display: flex;
    flex-direction: column;
    gap: 2rem;    
    padding: 0 14.5rem 4rem 1rem;
}


.file input[type="file"] {
    display: none; 
}

.file {
    display: inline;    
    overflow: hidden;
    border-radius: 4px;
    background-color: var(--ion-color-primary-shade); 
    color: #fff;
    padding: 10px 20px;
    border: none;
}

.botao {
    display: flex;
    justify-content: center;    
}

ion-button {
    --background: var(--ion-color-success-shade);
    color: #ffffff;
}



</style>