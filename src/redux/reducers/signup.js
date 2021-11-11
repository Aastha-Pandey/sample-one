const initialState = {
  name: undefined,
  mobileNumber: undefined,
  password: undefined,
  signupClicked: false,
};

export default function signup(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        name: action.data.name,
        mobileNumber: action.data.mobileNumber,
        password: action.data.password,
        signupClicked: action.data.signupClicked,
      };

    default:
      return state;
  }
}
