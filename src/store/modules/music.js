import api from '@/api/'
const { jd } = api
const { fetchQMusic } = jd

export default {
	namespaced: true,
	state: {
		songList: [],
	},
	mutations: {
		getSongList(state, payload) {
			state.songList = payload
		},
	},
	actions: {
		getMusic(store, payload) {
			fetchQMusic(payload).then((res) => {
				store.commit('getSongList', res.song.list)
			})
		},
	},
}
