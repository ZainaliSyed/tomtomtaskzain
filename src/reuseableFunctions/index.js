import _ from 'lodash';

import {store} from '../store';
import {request} from '../actions/ServiceAction';

const callback = response => global.log({response});

const dispatchApi = (
  action, //Action Type
  api, //Service url
  method, //Web Service type 'post,get,put,delete....'
  payload, //Paramter for request
  loader = true, //Show spinner
  cbSuccess,
  cbFailure,
  message = true, //Show message on on top
  networkError = true, //Show network error
  actionBase,
  isConcat,
) => {
  store.dispatch(
    request(
      action,
      api,
      method,
      payload,
      loader,
      cbSuccess,
      cbFailure,
      message,
      networkError,
      actionBase,
      isConcat,
    ),
  );
};

export {dispatchApi};
