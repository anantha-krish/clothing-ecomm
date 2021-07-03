import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from "../../firebase/firebase.utils";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
} from "./user.actions";
import { UserActionTypes } from "./user.types";

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

function* signInWithUserAuth(
  userAuth: any,
  displayName?: any
): Generator<any, any, any> {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, {
      displayName,
    });
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.errorMessage));
  }
}

export function* signInWithGoogle(): Generator<any, any, any> {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(signInWithUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error.errorMessage));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: any): Generator<any, any, any> {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(signInWithUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error.errorMessage));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.errorMessage));
  }
}
export function* isUserAuthenticated(): Generator<any, any, any> {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield call(signInWithUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailure(error.errorMessage));
  }
}
export function* signUp({ payload: { email, password, displayName } }: any) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    if (!user) return;

    yield call(signInWithUserAuth, user, displayName);
  } catch (error) {
    yield put(signUpFailure(error.errorMessage));
  }
}
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}
export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
