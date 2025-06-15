// Firebase 구성
const firebaseConfig = {
    apiKey: "AIzaSyBJL5SXlxpuQtYPHvwKGPKPXXXXXXXXXXX", // 실제 Firebase 콘솔에서 받은 키로 교체 필요
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 언어 관련 함수들
function setLanguage(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelector('.lang-text').textContent = lang.toUpperCase() === 'KO' ? 'EN' : 'KO';
    
    // 모든 번역 요소 업데이트
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) element.textContent = translation;
    });

    // placeholder 번역 업데이트
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) element.placeholder = translation;
    });

    // 메시지 시간 표시 업데이트
    updateMessageTimestamps();
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((p, c) => p && p[c], obj);
}

function updateMessageTimestamps() {
    const lang = document.documentElement.getAttribute('data-lang') || 'ko';
    const messages = document.querySelectorAll('.message-timestamp');
    messages.forEach(element => {
        const timestamp = element.getAttribute('data-timestamp');
        if (timestamp) {
            element.textContent = formatTimestamp(timestamp, lang);
        }
    });
}

function formatTimestamp(timestamp, lang) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (lang === 'ko') {
        if (diffInMinutes < 1) return '방금 전';
        if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}시간 전`;
        return `${Math.floor(diffInMinutes / 1440)}일 전`;
    } else {
        if (diffInMinutes < 1) return 'just now';
        if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
        return `${Math.floor(diffInMinutes / 1440)} days ago`;
    }
}

// 메시지 로드 및 표시
async function loadMessages() {
    const messagesList = document.getElementById('messages-list');
    messagesList.innerHTML = '';
    const currentLang = document.documentElement.getAttribute('data-lang');
    
    try {
        const snapshot = await db.collection('guestbook')
            .orderBy('timestamp', 'desc')
            .get();
            
        snapshot.forEach(doc => {
            const data = doc.data();
            const messageElement = document.createElement('div');
            messageElement.className = 'message-card';
            messageElement.innerHTML = `
                <h4>${data.name}</h4>
                <p>${data.message}</p>
                <small>
                    <span data-i18n="guestbook.messageCard.postedOn">${currentLang === 'ko' ? '작성일' : 'Posted on'}</span>: 
                    <span class="message-timestamp" data-timestamp="${data.timestamp?.toMillis()}">${formatTimestamp(data.timestamp?.toMillis(), currentLang)}</span>
                </small>
            `;
            messagesList.appendChild(messageElement);
        });
        
        // 메시지 카드 생성 후 테마 적용
        updateMessageCardsTheme();
    } catch (error) {
        console.error('Error loading messages:', error);
        const errorMessage = currentLang === 'ko' ? 
            '메시지를 불러오는 중 오류가 발생했습니다.' : 
            'An error occurred while loading messages.';
        messagesList.innerHTML = `<p>${errorMessage}</p>`;
    }
}

// 테마 변경 시 메시지 카드 스타일 업데이트
function updateMessageCardsTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    const messageCards = document.querySelectorAll('.message-card');
    messageCards.forEach(card => {
        card.style.backgroundColor = `var(--guestbook-card-bg)`;
        card.style.color = `var(--guestbook-text)`;
    });
}

// 테마 변경 이벤트 리스너 추가
document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    setTimeout(updateMessageCardsTheme, 0);
});

// 언어 토글 이벤트 리스너 추가
document.getElementById('lang-toggle-btn').addEventListener('click', () => {
    const currentLang = document.documentElement.getAttribute('data-lang');
    const newLang = currentLang === 'ko' ? 'en' : 'ko';
    setLanguage(newLang);
    loadMessages(); // 메시지 다시 로드하여 시간 표시 업데이트
});

// 페이지 로드 시 저장된 테마 확인 및 적용
document.addEventListener('DOMContentLoaded', () => {
    console.log('Guestbook page loaded');
    
    // 저장된 테마 적용
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // 저장된 언어 설정 불러오기
    const savedLang = localStorage.getItem('lang') || 'ko';
    console.log('Initializing with saved language:', savedLang);
    setLanguage(savedLang);
    
    // 언어 토글 버튼 이벤트
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    const langText = langToggleBtn.querySelector('.lang-text');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            console.log('Language toggle button clicked');
            const currentLang = document.documentElement.getAttribute('data-lang');
            const newLang = currentLang === 'ko' ? 'en' : 'ko';
            setLanguage(newLang);
            localStorage.setItem('lang', newLang);
            langText.textContent = newLang === 'ko' ? 'EN' : 'KO';
            loadMessages(); // 메시지 다시 로드하여 시간 표시 업데이트
        });
    } else {
        console.error('Language toggle button not found');
    }

    // 폼 제출 이벤트
    const guestbookForm = document.getElementById('guestbook-form');
    if (guestbookForm) {
        guestbookForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const currentLang = document.documentElement.getAttribute('data-lang');
            
            try {
                await db.collection('guestbook').add({
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    message: document.getElementById('message').value,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                
                e.target.reset();
                const successMessage = currentLang === 'ko' ? 
                    window.guestbookTranslations.ko.guestbook.successMessage : 
                    window.guestbookTranslations.en.guestbook.successMessage;
                alert(successMessage);
                loadMessages();
            } catch (error) {
                console.error('Error adding message:', error);
                const errorMessage = currentLang === 'ko' ? 
                    window.guestbookTranslations.ko.guestbook.errorMessage : 
                    window.guestbookTranslations.en.guestbook.errorMessage;
                alert(errorMessage);
            }
        });
    }

    // 초기 메시지 로드
    loadMessages();
}); 