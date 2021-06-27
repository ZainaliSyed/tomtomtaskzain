import {LOAD} from 'redux-storage';
import {take, fork, select, put} from 'redux-saga/effects';

function* watchReduxLoadFromDisk() {
  while (true) {
    yield take(LOAD);
    try {
    } catch (err) {}
  }
}

export default function* root() {
  yield fork(watchReduxLoadFromDisk);
}
