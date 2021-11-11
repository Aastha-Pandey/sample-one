const initialState = {
  mobileNumber: undefined,
  password: undefined,
  loginClicked: false,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        mobileNumber: action.data.mobileNumber,
        password: action.data.password,
        loginClicked: action.data.loginClicked,
      };

    default:
      return state;
  }
}
