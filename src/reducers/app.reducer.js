export const SET_LOADING = "APP/SET_LOADING";

export const setLoading = isLoading => ({
  type: SET_LOADING,
  payload: isLoading
})

const initialState = {
  isLoading: false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default reducers;
