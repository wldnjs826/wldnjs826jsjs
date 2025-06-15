---

# 최지원 포트폴리오

[https://wldnjs826.github.io/](https://wldnjs826.github.io/)

한남대학교 컴퓨터공학과 최지원의 포트폴리오 사이트입니다.
게임 개발, 백엔드, AI, 데이터베이스 등 다양한 프로젝트와 기술 역량을 정리했습니다.

---

## 소개

본 사이트는 Github Pages로 직접 개발 및 배포하였으며,
프로그래밍 실력, 프로젝트 경험, 자격증, 온라인 이력서, 실시간 방명록, 다국어 지원, 그리고 다양한 상호작용 기능이 포함되어 있습니다.

---

## 기술 스택

* Frontend: HTML5, CSS3, JavaScript (ES6+), 반응형 웹, 다크/라이트 테마, FontAwesome
* Backend: Node.js, Express, Nodemailer(이메일 연동), dotenv,
  Firebase(방명록 클라우드 연동 실습)
* 기타: Git & Github, Figma, AWS, Unity, Unreal, Blender 등

---

## 주요 프로젝트

1. 회사 게임 프로젝트
   Unity, C#, Git, Agile 적용. 팀으로 언리얼/Unity 엔진 활용, Git 협업과 애자일 프로젝트 관리 경험
2. 3D 게임 개발 프로젝트(예정)
   Blender 모델링, Unity 연동으로 직접 3D 게임 제작
3. 게임엔진 개발(예정)
   C++, OpenGL/DirectX로 미니 게임엔진 구조 구현 및 실습
4. 고양이와 스프 (확장판)
   Unity, 2D Art, 게임디자인. 멀티플레이/캐릭터 커스터마이즈 등 기능 확장
5. AI 이미지 분류 성능 향상 연구
   TensorFlow, Python 기반. 데이터 전처리/아키텍처 개선, AI 모델의 분류 정확도 향상 연구

---

## 희망 직무

* 백엔드 개발자(서버, API, DB)
* 게임 프로그래머(3D/엔진)
* AI 연구 및 데이터 엔지니어

---

## 추가기능

### 1. 방명록(Guestbook)

방명록 기능을 통해 외부의 피드백을 실시간으로 받을 수 있습니다.
이를 바탕으로 본인의 부족한 점을 파악하고, 개발 역량을 지속적으로 개선하는 자기계발 습관을 기르고 있습니다.

### 2. 자격증

취득 및 준비 중인 각종 IT 관련 자격증 정보를 정리해 기술력을 입증합니다.
자격증 카드별 발급일, 기관, 세부 내역을 명확히 구분하였으며,
자격증, 이력서 PDF 다운로드를 통해 객관적인 실력과 성장 기록을 확인할 수 있습니다.

### 3. 온라인 이력서 다운로드

이력서 PDF를 다운로드하는 기능이 있습니다.
버튼 클릭 시 resume.pdf 파일이 자동으로 내려받아집니다.
(코드 위치: resume.js, 주요 페이지 상단에 버튼 배치)

### 4. 다국어 지원

한/영 다국어를 사이트 전역에 적용하여, 버튼 클릭만으로 즉시 모든 텍스트가 변환됩니다.
(코드 위치: translations.js, script.js, data-i18n 활용)

### 5. 연락처 및 메시지 확인

연락처(Contact) 기능을 통해 개인적인 연락을 받을 수 있습니다.
아래 in 버튼(또는 링크)으로 들어가면 실제로 받은 메시지들을 확인할 수 있습니다.
이를 통해 다양한 네트워킹 및 소통을 경험하고 있습니다.

---

## 파일 구조

```
portfolio-website/
├── images/                  프로젝트/자격증 이미지 등
├── main.html                메인/포트폴리오 페이지
├── style.css                전역 스타일/테마
├── script.js                프론트엔드 동작/애니메이션
├── resume.js                이력서 PDF 다운로드
├── translations.js          다국어 지원
├── guestbook.html           방명록
├── guestbook.js             방명록 클라우드(파이어베이스)
├── certificates.html        자격증
├── server.js                Node.js 백엔드(이메일)
├── package.json             의존성
└── README.md                이 파일
```

---

## 배포 및 접속 주소

* Github Pages 배포:
  [https://wldnjs826.github.io/](https://wldnjs826.github.io/)
* Github Repository:
  [https://github.com/wldnjs826/wldnjsHNU\_JS](https://github.com/wldnjs826/wldnjsHNU_JS)

---

## 실행 및 사용법

* 다크/라이트 테마, 한/영 전환은 상단 버튼으로 바로 적용
* 이력서 PDF, 방명록, 자격증, 프로젝트 카드, 연락처 등 다양한 기능 직접 체험 가능
* 서버는 `npm install` 후 `.env` 세팅, `npm start`
  (방명록 Firebase 기능은 별도 세팅 필요, 기본은 localStorage 방식)

---

## 평가 기준(과제 체크리스트)

* README 작성
* 본인의 스킬 및 기술 소개
* 프로젝트 5개 이상 (수행/예정 모두 표기)
* 희망 직무 구체적 작성
* 추가점수:

  * 이력서 PDF 다운로드 기능
  * 다국어 지원
  * 방명록 실시간 피드백, 자기계발 목적
  * 자격증/백준(BOJ) 실력 입증
  * 연락처 및 메시지 확인 등 다양한 상호작용

---

## 라이선스

MIT License

---

> 본 포트폴리오는 외부 테마를 사용하지 않고 직접 구현하였으며,
> 다양한 실전 기능 구현 및 자기계발 역량 강화에 중점을 두었습니다.

---

