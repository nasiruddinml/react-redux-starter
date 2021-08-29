import OpenSansBold from './OpenSans-Bold.woff';
import OpenSansRegular from './OpenSans-Regular.woff';
import OpenSansSemiBold from './OpenSans-SemiBold.woff';

const opensansBold = {
  fontFamily: 'OpenSans-Bold',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('OpenSans'),
    local('OpenSans-Bold'),
    url(${OpenSansBold}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const opensansSemibold = {
  fontFamily: 'OpenSans-SemiBold',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('OpenSans'),
    local('OpenSans-SemiBold'),
    url(${OpenSansSemiBold}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const opensansRegular = {
  fontFamily: 'OpenSans-Regular',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('OpenSans'),
    local('OpenSans-Regular'),
    url(${OpenSansRegular}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const OpensansFonts = [opensansBold, opensansSemibold, opensansRegular];

export default OpensansFonts;
