import { takeEvery, put } from 'redux-saga/effects'

// worker saga
function* workerSaga() {
  console.log('Hey from worker saga')
  yield put({ type: 'ACTION_FROM_WORKER' })
}

// watcher saga
function* rootSaga() {
  yield takeEvery('HELLO', workerSaga)
}

export default rootSaga