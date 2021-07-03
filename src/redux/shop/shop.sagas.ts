import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  convertCollectionsSnapShotToMap,
  firestore
} from "../../firebase/firebase.utils";
import { IShopState } from "../../types/state/IShopState";
import { fetchCollectionsFail, fetchCollectionsSuccess } from "./shop.actions";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionsSaga() {
  yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS, fetchCollectionsAsync);
}

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot: Promise<any> = yield collectionRef.get();
    const collectionMap: IShopState["collections"] = yield call(
      convertCollectionsSnapShotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message));
  }
}

export function* shopSagas() {
  yield all([call(fetchCollectionsSaga)]);
}
