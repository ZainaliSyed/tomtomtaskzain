import {put, call, takeEvery, take} from 'redux-saga/effects';
import {success, failure} from '../actions/ServiceAction';
import HttpServiceManager from '../services/HttpServiceManager';
import {GENERAL_ACTION} from '../actions/ActionTypes';

function callRequest(
  service,
  payload,
  service_type,
  showHud,
  showMessage,
  showNetworkError,
) {
  return HttpServiceManager.getInstance().request(
    service,
    payload,
    service_type,
    showHud,
    showMessage,
    showNetworkError,
  );
}

function* watchRequest(action) {
  const {
    payload,
    service,
    service_type,
    request_type,
    successCB,
    failureCB,
    showHud,
    showMessage,
    showNetworkError,
    isConcat,
  } = action;
  try {
    const {
      response,
      meta = {},
      message = '',
    } = yield call(
      callRequest,
      service,
      payload,
      service_type,
      showHud,
      showMessage,
      showNetworkError,
    );

    successCB && successCB(response, meta, message);

    if (request_type) {
      yield put(success(request_type, response, meta, message, isConcat));
    }
  } catch (err) {
    failureCB(err);
    yield put(failure(request_type, err));
  }
}

//SECTION End
export default function* root() {
  yield takeEvery(GENERAL_ACTION, watchRequest);
}
