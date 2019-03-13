import { takeEvery } from 'redux-saga/effects'

import { IMAGES } from '../constants'

// worker saga
function* handleImagesLoad() {
    console.log('fetching images from unsplash')
}

// watcher saga
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}

export default rootSaga
