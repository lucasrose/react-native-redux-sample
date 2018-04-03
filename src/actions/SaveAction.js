export const savePage = () => {
	return (dispatch, getState) =>{
		const state = getState();

		dispatch({
			type: 'SET_SAVED_TRUE'
		})
	}
}

export const resetPage = () => {
	return (dispatch, getState) =>{
		const state = getState();

		dispatch({
			type: 'SET_SAVED_FALSE'
		})
	}
}