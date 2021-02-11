const defaultstate = {
  login: false,
  token: '',
  role: '',
  number: '',
  image: '',
  verivic: '',
  qrcode: '',
  name: '',
};

const userData = (state = defaultstate, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, login: true, user: action.payload};
    case 'SET_NUMBER':
      return {...state, number: action.payload};
    case 'SET_IMGAE':
      return {...state, login: true, image: action.payload};
    case 'SET_NAME':
      return {...state, login: true, name: action.payload};
    case 'SET_QRCODE':
      return {...state, login: true, qrcode: action.payload};
    case 'SET_VERIVIC':
      return {...state, login: true, verivic: action.payload};
    default:
      return state;
  }
};

export default userData;
