const Todos = (state=[],action) => {

switch(action.type) {

	case 'ADD-TODO' :
		return [...state, action.payload];
	default :
		return state;
	}
return state
}

export default Todos