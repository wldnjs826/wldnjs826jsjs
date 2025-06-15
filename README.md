# 포트폴리오 웹사이트

게임 개발과 AI 연구 프로젝트를 소개하는 포트폴리오 웹사이트입니다.

## 기능

- 반응형 디자인
- 프로젝트 쇼케이스
- 컨택트 폼
- 이메일 통합
- 애니메이션 효과

## 설치 방법

1. 저장소 클론
```bash
git clone <repository-url>
cd portfolio-website
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env` 파일을 생성하고 다음 변수들을 설정하세요:
```
PORT=3000
EMAIL_SERVICE=gmail
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_specific_password
RECIPIENT_EMAIL=your.email@gmail.com
```

- `EMAIL_SERVICE`: 사용할 이메일 서비스 (예: gmail)
- `EMAIL_USER`: 발신 이메일 주소
- `EMAIL_PASS`: 이메일 계정의 앱 비밀번호
- `RECIPIENT_EMAIL`: 문의 메시지를 받을 이메일 주소

4. 서버 실행
```bash
npm start
```

개발 모드로 실행 (자동 재시작):
```bash
npm run dev
```

## 기술 스택

- Frontend:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Font Awesome Icons

- Backend:
  - Node.js
  - Express
  - Nodemailer
  - dotenv

## 프로젝트 구조

```
portfolio-website/
├── images/
│   └── placeholder.svg
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
└── .env
```

## 사용자 정의

1. 프로젝트 이미지: `images/` 디렉토리에 각 프로젝트의 이미지를 추가하세요.
2. 소셜 미디어 링크: `index.html`의 소셜 미디어 링크를 본인의 프로필로 업데이트하세요.
3. 프로젝트 정보: `index.html`의 프로젝트 설명과 기술 스택을 수정하세요.

## 라이선스

MIT License 