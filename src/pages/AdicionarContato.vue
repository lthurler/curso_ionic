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
import { Filesystem, Directory } from '@capacitor/filesystem';
import { IonButton } from '@ionic/vue';

export default {

components: { IonButton },

data() {
return {
nome: '',
tel: '',
foto: '',
fileUri: '',
fileName: ''
}
},

methods: {

    async onFileSelected(event) {
        const file = event.target.files[0];
        const reader = new FileReader();


        reader.onload = async () => {
        const fileUri = reader.result;
        const id = this.$store.getters.retornarContatos.length + 1;
        const fileName = `${id}.jpg`;
        const folderName = '/src/img';

        this.fileUri = fileUri;
        this.fileName = fileName;
        this.foto = `${folderName}/${fileName}`;
        };

        reader.readAsDataURL(file);
    },

    async savePhoto() {
        try {
            const foto = this.foto;
            const fileUri = this.fileUri;

            if (!fileUri) {
            throw new Error('File URI is empty');
            }

            const response = await fetch(fileUri);
            if (!response.ok) {
            throw new Error('Failed to fetch file');
            }

            const blob = await response.blob();
            if (!blob || blob.size === 0) {
            throw new Error('Blob is empty');
            }

            await Filesystem.mkdir({
            path: foto.substring(0, foto.lastIndexOf('/')),
            directory: Directory.Data,
            recursive: true
            });

            await Filesystem.writeFile({
                path: foto,
                data: blob,
                directory: Directory.Data
            });

        } catch (error) {
            console.error('erro ao salvar a foto', error);
        }   
    },

    async salvarContato() {
        const contato = {
            id: this.$store.getters.retornarContatos.length + 1,
            nome: this.nome,
            foto: this.foto,
            telefone: this.tel
        }

        this.$store.getters.salvarContato(contato);

        await this.savePhoto();

        this.nome = '';
        this.tel = '';
        this.foto = '';
        this.fileUri = '';
        this.fileName = '';
        this.$router.push('/home');
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