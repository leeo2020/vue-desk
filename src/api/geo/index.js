import fetch from '@/utils/fetch'

export function fetchGeoLists() {
	return fetch({
		url: '/geo/list',
		method: 'GET',
	})
}
export function fetchProvinceLists() {
	return fetch({
		url: '/geo/province',
		method: 'GET',
	})
}
export function fetchCityLists() {
	return fetch({
		url: '/geo/city',
		method: 'GET',
	})
}
export function fetchCountyLists() {
	return fetch({
		url: '/geo/county',
		method: 'GET',
	})
}

export default {
	fetchGeoLists,
	fetchProvinceLists,
	fetchCityLists,
	fetchCountyLists,
}
