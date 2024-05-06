import { createStore } from 'vuex';

const store = createStore({
    state() {
        return  {
            contatos:[
                {
                    id: 1,
                    nome: 'Leandro',
                    foto: '/src/img/leandro.jpg',
                    telefone: '(21) 99999-9999'
                },
                {
                    id: 2,
                    nome: 'Tatiana',
                    foto: '/src/img/tatiana.jpg',
                    telefone: '(21) 99999-9999'
                },
                {
                    id: 3,
                    nome: 'Erik',
                    foto: '/src/img/erik.jpg',
                    telefone: '(21) 99999-9999'
                },
                {
                    id: 4,
                    nome: 'Nivaldo',
                    foto: '/src/img/nivaldo.jpg',
                    telefone: '(21) 99999-9999'
                },
                {
                    id: 5,
                    nome: 'Daniel V.',
                    foto: '/src/img/daniel.jpg',
                    telefone: '(21) 99999-9999'
                },

            ]
            
        }
    },

    getters: {
        retornarContatos(state) {
            return state.contatos;
        },

        encontrarContato: (state) => (id)=> {
            let index = state.contatos.findIndex(contato => contato.id == id);
            
            return state.contatos[index];
        },

        salvarContato: (state) => (contato) => {
            return state.contatos.push(contato);
        },

        excluirContato: (state) => (id) => {
            let index = state.contatos.findIndex(contato => contato.id == id);
            
            return state.contatos.splice(index, 1);

        }

    }
})

export default store;