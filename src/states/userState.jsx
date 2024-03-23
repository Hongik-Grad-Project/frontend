import { atom } from 'recoil';

export const isLoggedInState = atom({
    key: 'isLoggedInState',     // 고유한 키
    default: false,             // 기본값은 로그인되지 않은 상태
});

export const nickNameState = atom({
    key: 'nickNameState',
    default: '',
});