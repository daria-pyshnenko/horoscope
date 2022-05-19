export default {
    namespaced: true,
    state:{
        questions: [
            {
                number: 1,
                question: 'Укажите свой пол',
                answers: ['Мужчина', 'Женщина']
            },
            {
                number: 2,
                question: 'В какое время суток Вы чувствуете себя наиболее комфортно?',
                answers: ['Утро', 'Ночь', 'Вечер', 'День']
            },
            {
                number: 3,
                question: 'Подскажите, мучает ли Вас бессонница последнее время?',
                answers: ['Да', 'Нет', 'Иногда']
            },
            {
                number: 4,
                question: 'Чувствуете ли Вы в последнее время, что вам никак не удается осуществить ваши планы?',
                answers: ['Да', 'Нет', 'Иногда']
            },
            {
                number: 5,
                question: 'Какой Вы видите свою жизнь через 5 лет?',
                answers: ['Брак, семья, дети, дом', 'Путешествия по миру', 'Успешная карьера', 'Всё вместе']
            },
            {
                number: 6,
                question: 'Введите дату своего рождения',
            }
        ],
        chooseBirthday:[
            {
                item:[]
            },
            {
                item:[]
            },
            {
                item: []
            }
        ],
        questionCount: 0,
        userAnswers: [],
    },
    getters:{
        showQuestions(state){
            return state.questionCount <= state.questions.length-1
        },
        questions(state) {
            return state.questions
        },
        questionCount(state) {
            return state.questionCount
        },
        userAnswers(state) {
            return state.userAnswers
        },
        chooseBirthday(state) {
            return state.chooseBirthday
        },
    },
    mutations:{
        increaseQuestCount(state) {
            state.questionCount++
        },
        pushUserAnswers(state, [index, value]){
            state.userAnswers[index] = value;
        },
        getDays(state){
            for(let i=1; i<=31; i++){
                state.chooseBirthday[0].item.push(i)
            }
        },
        getMonths(state){
            for(let i=1; i<=12; i++){
                state.chooseBirthday[1].item.push(i)
            }
        },
        getYears(state){
            for(let i=1950; i<=new Date().getFullYear(); i++){
                state.chooseBirthday[2].item.push(i)
            }
        },
    },
    actions:{
        increaseQuestCount(store) {
            store.commit('increaseQuestCount')
        },
        pushUserAnswers(store,[index, value] ){
            store.commit('pushUserAnswers',[index, value] )
        },
        getDays(store){
            store.commit('getDays')
        },
        getMonths(store){
            store.commit('getMonths')
        },
        getYears(store){
            store.commit('getYears')
        }
    }
}