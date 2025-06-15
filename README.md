# 최지원 포트폴리오 (20252240)

웹사이트: https://wldnjs826.github.io/
깃허브: https://github.com/wldnjs826/wldnjs826.github.io

프로그래밍, 게임 개발, AI 연구 프로젝트를 소개하고 온라인 이력서·자격증·방명록·다국어 등 다양한 웹 기술과 기능을 갖춘 개인 포트폴리오 웹사이트입니다.

---

## 소개

**이름 / 학번 / 소속**  
최지원 (20252240) · 한남대학교 컴퓨터공학과 재학

**관심 분야**  
- 백엔드 개발 (서버·API·DB 설계)  
- 게임 프로그래밍 (3D·엔진)  
- AI 연구 (딥러닝·컴퓨터 비전)

---

## 기술 스택

**Frontend**  
HTML5, CSS3, JavaScript (ES6+), 반응형 웹, 다크/라이트 테마, i18next, FontAwesome

**Backend**  
Node.js, Express, Firebase, Nodemailer, dotenv

**기타 도구**  
Git · GitHub · AWS · Figma · Unity · Unreal · Blender

**개발 도구**  
VSCode · Chrome DevTools · LiveServer

---

## 주요 프로젝트

1. 회사 게임 프로젝트  
   - Unity · C# · Git · Agile 협업 경험

2. 3D 게임 개발 프로젝트 (예정)  
   - Blender 모델링 → Unity 연동

3. 게임 엔진 개발 (예정)  
   - C++ · OpenGL/DirectX 기반 미니 엔진 구현

4. 고양이와 스프 (확장판)  
   - Unity · 2D 아트 · 멀티플레이어 기능 추가

5. AI 이미지 분류 성능 향상 연구  
   - TensorFlow · Python · 데이터 전처리 및 모델 개선

※ 프로젝트가 없을 경우 “(예정)”으로 표기

---

## 희망 직무

- 백엔드 개발자 (서버·API·DB 설계)  
- 게임 프로그래머 (3D·엔진)  
- AI 연구원 · 데이터 엔지니어

---

## 추가 기능 및 이력

### 1. 이력서 다운로드
#### 설명
버튼 클릭 시 PDF 이력서를 즉시 다운로드
#### 코드 위치
resume.js, 메인 HTML(index.html 등) 내 <a download> 태그
#### 코드 설명
``` resumeDownloadBtn.addEventListener('click', () => {
  const resumePath = 'assets/resume.pdf';
  const link = document.createElement('a');
  link.href = resumePath;
  link.download = '최지원_이력서.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
```


### 2. 방명록
#### 설명
방문자가 메시지를 남기고 확인할 수 있는 실시간 방명록 기능 (localStorage·Firebase 지원)
#### 코드 위치
guestbook.html, guestbook.js
#### 코드 설명

```
// Firebase 초기화
const db = firebase.database().ref('guestbook');
// 메시지 전송
function postMessage(name, message) {
  db.push({ name, message, timestamp: Date.now() });
}
// 메시지 수신 및 렌더링
db.on('child_added', snapshot => {
  const entry = snapshot.val();
  renderEntry(entry.name, entry.message, entry.timestamp);
});
```

### 3. 백준 연동
#### 설명
Baekjoon Online Judge API를 사용해 해결한 문제 수와 랭킹 프로필을 표시
#### 코드 위치
baekjoon.html, baekjoon.js
#### 코드 설명

```
fetch(`https://solved.ac/api/v3/user/show?handle=${userHandle}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('solved-count').textContent = data.solvedCount;
    document.getElementById('rank').textContent = data.rank;
  });

```

### 4. 다국어 지원
#### 설명
i18next 라이브러리 기반으로 전체 텍스트를 한국어/영어로 전환하는 토글
#### 코드 위치
translations.js, script.js
#### 코드 설명
```
i18next.init({ lng: 'ko', resources })
  .then(() => updateContent());
languageToggleBtn.addEventListener('click', () => {
  const newLang = i18next.language === 'ko' ? 'en' : 'ko';
  i18next.changeLanguage(newLang).then(() => updateContent());
});

```

### 5. 다크/라이트 모드 토글
#### 설명
사용자의 시스템 선호도 또는 버튼 클릭으로 테마를 전환하고 설정을 로컬에 저장
#### 코드 위치
theme-toggle.js, theme.css
#### 코드 설명
```
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
toggleBtn.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

```
### 6. 연락처 폼
#### 설명
이메일 및 SNS 링크 외에 간단한 문의 메시지를 전송하는 폼 (Formspree 연동)
#### 코드 위치
contact.html, contact.js
#### 코드 설명
```
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  fetch(formspreeEndpoint, {
    method: 'POST',
    body: new FormData(contactForm)
  }).then(() => alert('메시지를 전송했습니다.'));
});
```
### 7. 자격증 섹션
#### 설명
취득 완료 및 예정 자격증을 카드 형식으로 시각화하여 표시
#### 코드 위치
certificates.html, cert.css
#### 코드 설명
##### html
```
<div class="certificate-card" data-issue="2025-06">
  <h3>정보처리기사</h3>
  <p>발급 예정: 2025-06</p>
</div>
```
##### css
```
.certificate-card {
  display: grid;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```
---

## 파일 구조
portfolio-website/

├── index.html

├── about.html

├── skills.html

├── projects.html

├── contact.html

├── guestbook.html

├── certificates.html

├── baekjoon.html

├── style.css

├── theme.css

├── script.js

├── resume.js

├── translations.js

├── guestbook.js

├── contact.js

├── baekjoon.js

├── theme-toggle.js

├── cert.css

├── assets/

│ ├── resume.pdf

│ └── images/

├── server.js

├── package.json

└── README.md

---

## 배포 정보

- GitHub Pages: https://wldnjs826.github.io/  
- GitHub Repository: https://github.com/wldnjs826/wldnjsHNU_JS  

---

## 라이선스

MIT License  
자세한 내용은 [LICENSE](LICENSE) 파일 참조

---
