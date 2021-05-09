export default {
    namespaced: true,
    state: { list: [] },
    getters: {
        total(state) {
            return state.list.length
        }
    },
    mutations: {
        addTask(state, payload) {
            state.list.push({ id: Date.now(), task: payload })
        },
        delTask(state, payload) {
            state.list.splice(payload, 1)
        },
    }

}