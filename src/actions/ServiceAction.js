import {GENERAL_ACTION, NO_INTERNET} from './ActionTypes';
import {isNetworkReachable, isConnected} from 'react-native-reachability-popup';

callback = () => {};

Request = {
  url: String, //Service url
  method: String, //Web Service type 'post,get,put,delete....'
  data: Object, //Paramter for request
  actionType: Object,
};

export function request(
  types, //Action Type
  service, //Service url
  service_type, //Web Service type 'post,get,put,delete....'
  data, //Paramter for request
  showHud, //Show spinner
  successCB = callback,
  failureCB = callback,
  showMessage = true, //Show message on top
  showNetworkError = true,
  referencedReducer, // key to edit isFetching of reducer
  isConcat = false,
) {
  if (!isNetworkReachable() && !isConnected()) {
    return {
      type: NO_INTERNET,
    };
  }
  return {
    payload: data,
    service,
    service_type,
    type: GENERAL_ACTION,
    request_type: types,
    showHud,
    successCB,
    failureCB,
    showMessage,
    showNetworkError,
    referencedReducer, // key to edit isFetching of reducer
    isConcat,
  };
}

export function success(type, data, meta, message, isConcat) {
  return {
    data,
    type: type.SUCCESS,
    meta,
    isConcat,
  };
}

export function failure(types, errorMessage) {
  return {
    errorMessage,
    type: types.FAILURE,
  };
}
