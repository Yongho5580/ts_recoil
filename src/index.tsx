import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom';
import App from './App';
import "./color.scss"


// 이외에 필요한 스타일 파일이 있다면 import 해주세요.

ReactDOM.render(
  <StrictMode>
      <RecoilRoot> {/* RecoilRoot provider를 이용하여 recoil을 사용가능하도록 설정해줍니다. */}
        <Router>
          <App />
        </Router>
      </RecoilRoot>
    </StrictMode>,
  document.getElementById('root')
);


