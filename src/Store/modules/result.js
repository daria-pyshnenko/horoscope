import axios from "axios";

export default {
    namespaced:true,
    state: {
        processingText:[
                    {sentence:'Анализ введенных данных',
                        ready: false},
                    {sentence:'Коррекция астрологического знака',
                        ready: false},
                    {sentence:'Расчет вариаций ответов',
                        ready: false},
                    {sentence:'Генерация предсказания',
                        ready: false},
                    {sentence: 'Сохранение результата',
                        ready: false},
                    {sentence:'Поиск свободного оператора',
                        ready: false},
                    {sentence:'Начала озвучки и записи аудио-сообщения'}
                ],
                process: true,
                final: false,
                tableArray:{}
            },
        getters: {
            processingText(state){
                return state.processingText
            },
            process(state){
                return state.process
            },
            final(state){
                return state.final
            },
            tableArray(state){
                return state.tableArray
            }
        },
        mutations: {
            ready(state, key){
                state.processingText[key].ready = true;
            },
            changeProcess(state){
                state.process = !state.process;
            },
            changeFinal(state){
                state.final = ! state.final;
            },
            callAndListen(state, data){
                state.tableArray = data.data;
            }
        },
        actions: {
            ready(store, key){
                store.commit('ready', key)
            },
            changeProcess(store){
                store.commit('changeProcess')
            },
            changeFinal(store){
                store.commit('changeFinal')
            },
            callAndListen(store){
                axios.get('https://swapi.dev/api/people/1/?format=json')
                    .then(response => {
                        store.commit('callAndListen', response)
                    })
            }
        }
    }
