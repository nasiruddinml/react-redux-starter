import Futura from './Futura.woff';
import FuturaBold from './Futura-Bold.woff';
import FuturaLight from './Futura-Light.woff';
import FuturaMedium from './Futura-Medium.woff';

const futuraBold = {
  fontFamily: 'Futura-Bold',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('Futura'),
    local('Futura-Bold'),
    url(${FuturaBold}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const futuraMedium = {
  fontFamily: 'Futura-Medium',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('Futura'),
    local('Futura-Medium'),
    url(${FuturaMedium}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const futuraLight = {
  fontFamily: 'Futura-Light',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('Futura'),
    local('Futura-Light'),
    url(${FuturaLight}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const futura = {
  fontFamily: 'Futura',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('Futura'),
    local('Futura'),
    url(${Futura}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const FuturaFonts = [futuraBold, futuraMedium, futuraLight, futura];

export default FuturaFonts;
