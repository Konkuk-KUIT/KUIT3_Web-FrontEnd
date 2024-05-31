import axios from 'axios';

// axios 인스턴스 생성
const instance = axios.create({
  // json-server
  baseURL: 'http://localhost:8080',

  // 실제 연결
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 어떤 처리를 할 수 있습니다.
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  }
  //   (error) => {
  //     // 응답 에러 처리
  //     throw new Error(' data error');
  //   }
);

export default instance;
