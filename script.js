// 네비게이션 바 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--nav-background)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// 타이핑 효과
const typingText = document.querySelector('.hero h1');
const text = typingText.textContent;
typingText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// 페이지 로드 시 타이핑 효과 시작
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Intersection Observer for animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

// Observe elements with animation classes
document.querySelectorAll('.fade-in, .slide-in').forEach(element => {
    animationObserver.observe(element);
});

// Header scroll observer
const headerObserver = new IntersectionObserver((entries) => {
    const header = document.querySelector('header');
    if (!entries[0].isIntersecting) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Observe the top of the page
const topSection = document.querySelector('#top');
if (topSection) {
    headerObserver.observe(topSection);
}

// 스크롤 애니메이션
const scrollAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.project-card').forEach(card => {
    scrollAnimationObserver.observe(card);
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const elementAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('skill-card')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// 스킬 카드 애니메이션
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    elementAnimationObserver.observe(card);
});

// 프로젝트 카드 애니메이션
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    elementAnimationObserver.observe(card);
});

// 마우스 움직임에 따른 패럴랙스 효과
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.skill-card, .project-card');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const moveX = (x - 0.5) * 20;
            const moveY = (y - 0.5) * 20;
            card.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});

// 컨택트 폼 제출
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // 입력값 가져오기
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        // 기존 메시지 불러오기
        const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
        // 새 메시지 추가
        messages.push({ name, email, message, date: new Date().toLocaleString() });
        // 저장
        localStorage.setItem('contact_messages', JSON.stringify(messages));
        // 폼 초기화
        contactForm.reset();
        alert('메시지가 성공적으로 저장되었습니다!');
    });
}

// 스크롤 프로그레스 바
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// 스크롤 시 요소 페이드인
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';
    elementAnimationObserver.observe(element);
});

// 소셜 링크 호버 효과
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) rotate(0)';
    });
});

// DOM 요소 선택
const projectGrid = document.querySelector('.project-grid');
const prevButton = document.querySelector('.scroll-btn.prev');
const nextButton = document.querySelector('.scroll-btn.next');
const scrollDots = document.querySelectorAll('.scroll-dot');

// 프로젝트 카드 너비 계산
function getCardWidth() {
    const card = document.querySelector('.project-card');
    if (!card) return 0;
    
    const style = window.getComputedStyle(card);
    const width = card.offsetWidth;
    const marginRight = parseInt(style.marginRight) || 0;
    const marginLeft = parseInt(style.marginLeft) || 0;
    
    return width + marginRight + marginLeft;
}

// 버튼 상태 업데이트
function updateButtonStates() {
    const isAtStart = projectGrid.scrollLeft <= 0;
    const isAtEnd = projectGrid.scrollLeft >= (projectGrid.scrollWidth - projectGrid.clientWidth - 1);
    
    prevButton.classList.toggle('disabled', isAtStart);
    nextButton.classList.toggle('disabled', isAtEnd);
    
    // 현재 활성화된 카드 인덱스 계산
    const cardWidth = getCardWidth();
    const currentIndex = Math.round(projectGrid.scrollLeft / cardWidth);
    const totalCards = document.querySelectorAll('.project-card').length;
    
    // 스크롤 닷 업데이트
    scrollDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// 스크롤 함수
function scrollToCard(direction) {
    const cardWidth = getCardWidth();
    const currentScroll = projectGrid.scrollLeft;
    let targetScroll;

    if (direction === 'prev') {
        targetScroll = currentScroll - cardWidth;
    } else {
        targetScroll = currentScroll + cardWidth;
    }

    projectGrid.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });
}

// 이벤트 리스너
if (prevButton) {
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToCard('prev');
    });
}

if (nextButton) {
    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToCard('next');
    });
}

// 스크롤 이벤트
let scrollTimeout;
projectGrid.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateButtonStates, 100);
});

// 창 크기 변경 이벤트
window.addEventListener('resize', () => {
    updateButtonStates();
});

// 초기 상태 설정
document.addEventListener('DOMContentLoaded', () => {
    updateButtonStates();
});

// 터치 스와이프 지원
let touchStartX = 0;
let touchEndX = 0;

projectGrid.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

projectGrid.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && !nextButton.classList.contains('disabled')) {
            scrollToCard('next');
        } else if (diff < 0 && !prevButton.classList.contains('disabled')) {
            scrollToCard('prev');
        }
    }
}

// 마우스 휠 가로 스크롤
projectGrid.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
        e.preventDefault();
        projectGrid.scrollBy({
            left: e.deltaY,
            behavior: 'smooth'
        });
    }
}, { passive: false });

// 프로젝트 네비게이션 기능
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.project-grid');
    const prevBtn = document.querySelector('.project-nav-btn.prev');
    const nextBtn = document.querySelector('.project-nav-btn.next');
    if (grid && prevBtn && nextBtn) {
        const card = grid.querySelector('.project-card');
        const scrollAmount = card ? card.offsetWidth + 32 : 340; // 카드+gap
        prevBtn.addEventListener('click', function() {
            grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', function() {
            grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});

// 테마 토글 기능
document.addEventListener('DOMContentLoaded', () => {
    // 햄버거 메뉴
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 테마 토글 기능
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');
    const root = document.documentElement;

    // 초기 테마 설정
    const savedTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme === 'dark');

    // 테마 토글 버튼 클릭 이벤트
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme === 'dark');
    });

    // 아이콘 업데이트 함수
    function updateThemeIcon(isDark) {
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }

    // 언어 전환 기능
    console.log('Script loaded');

    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (!langToggleBtn) {
        console.error('Language toggle button not found');
    } else {
        console.log('Language toggle button found');
    }

    let currentLang = document.documentElement.getAttribute('data-lang') || 'ko';
    console.log('Initial language:', currentLang);

    // 언어 설정 초기화
    function initializeLanguage() {
        const savedLang = localStorage.getItem('lang') || 'ko';
        console.log('Initializing language:', savedLang);
        setLanguage(savedLang);
    }

    // 언어 설정 및 콘텐츠 업데이트
    function setLanguage(lang) {
        console.log('Setting language to:', lang);
        if (!translations || !translations[lang]) {
            console.error('Translations not found for language:', lang);
            return;
        }

        currentLang = lang;
        document.documentElement.setAttribute('data-lang', lang);
        localStorage.setItem('lang', lang);
        updateContent(lang);
        updateLanguageButton(lang);
    }

    // 언어 버튼 텍스트 업데이트
    function updateLanguageButton(lang) {
        console.log('Updating language button for:', lang);
        const langText = langToggleBtn.querySelector('.lang-text');
        if (!langText) {
            console.error('Language text element not found');
            return;
        }
        langText.textContent = lang === 'ko' ? 'EN' : 'KO';
    }

    // 콘텐츠 업데이트
    function updateContent(lang) {
        console.log('Updating content for language:', lang);
        
        // 일반 텍스트 콘텐츠 업데이트
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            console.log('Updating element with key:', key);
            
            const translation = getNestedTranslation(translations[lang], key);
            if (translation) {
                if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
                console.log('Updated text for key:', key, 'to:', translation);
            } else {
                console.warn('Translation not found for key:', key);
            }
        });

        // placeholder 업데이트
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            console.log('Updating placeholder with key:', key);
            
            const translation = getNestedTranslation(translations[lang], key);
            if (translation) {
                element.placeholder = translation;
                console.log('Updated placeholder for key:', key, 'to:', translation);
            } else {
                console.warn('Translation not found for key:', key);
            }
        });
    }

    // 중첩된 번역 가져오기
    function getNestedTranslation(obj, path) {
        const result = path.split('.').reduce((p, c) => p && p[c], obj);
        if (!result) {
            console.warn('Translation path not found:', path);
        }
        return result;
    }

    // 언어 전환 이벤트 리스너
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            console.log('Language toggle button clicked');
            const newLang = currentLang === 'ko' ? 'en' : 'ko';
            setLanguage(newLang);
        });

        // 초기화
        initializeLanguage();
    }
});

// 현재 활성화된 메뉴 항목 표시
function updateActiveMenuItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // 현재 URL의 해시값 확인
    const currentHash = window.location.hash || '#home';
    
    // 모든 링크에서 active 클래스 제거
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').endsWith(currentHash)) {
            link.classList.add('active');
        }
    });

    // 스크롤 위치에 따른 활성 섹션 확인
    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').endsWith(`#${current}`)) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    updateActiveMenuItem();
});

// 해시 변경 시 실행
window.addEventListener('hashchange', updateActiveMenuItem); 