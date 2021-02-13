const defaultstate = {
  login: false,
  user: '',
  token: '',
  name: '',
  qrcode: '',
  verivic: '',
  role: '',
  number: '',
  kode: '',
  saldo: '',
  image: '',
  email: '',
  age: '',
  address: '',
};

const userData = (state = defaultstate, action) => {
  switch (action.type) {
    case 'SET_ID':
      return {...state, login: true, user: action.payload};
    case 'SET_USER':
      return {...state, login: true, token: action.payload};
    case 'SET_NAME':
      return {...state, login: true, name: action.payload};
    case 'SET_QRCODE':
      return {...state, login: true, qrcode: action.payload};
    case 'SET_VERIVIC':
      return {...state, login: true, verivic: action.payload};
    case 'SET_ROLE':
      return {...state, login: true, role: action.payload};
    case 'SET_KODE':
      return {...state, login: true, kode: action.payload};
    case 'SET_SALDO':
      return {...state, login: true, saldo: action.payload};
    case 'SET_IMAGE':
      return {...state, login: true, image: action.payload};
    case 'SET_EMAIL':
      return {...state, login: true, email: action.payload};
    case 'SET_ADDRESS':
      return {...state, login: true, address: action.payload};
    case 'SET_AGE':
      return {...state, login: true, age: action.payload};
    case 'SET_NUMBER':
      return {...state, number: action.payload};
    default:
      return state;
  }
};

export default userData;
