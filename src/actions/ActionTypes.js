const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const CANCEL = 'CANCEL';

const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL, CREATE, UPDATE, DELETE].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}
//DEFAULT ACTIONS
export const GENERAL_ACTION = 'GENERAL_ACTION';

export const NO_INTERNET = 'NO_INTERNET';

//NETWORK DEFAULT ACTION
export const NETWORK_INFO = 'NETWORK_INFO';

export const NEAR_BY_RESTAURANTS = createRequestTypes('NEAR_BY_RESTAURANTS');
export const LOGOUT = 'LOGOUT';
