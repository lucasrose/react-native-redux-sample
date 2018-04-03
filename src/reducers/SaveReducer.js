// example reducer

const initialState = {
	saved: false
}

export const saveReducer = (state = initialState, action) => {
	switch(action.type){
		case 'SET_SAVED_TRUE':
			return Object.assign({}, state, {
				saved: true
			});
		case 'SET_SAVED_FALSE':
			return Object.assign({}, state, {
				saved:false
			});
		default:
			return state;
	}
}