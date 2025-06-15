console.log('Loading guestbook translations...');

const translations = {
    ko: {
        nav: {
            home: "홈",
            about: "소개",
            skills: "기술",
            projects: "프로젝트",
            contact: "연락처",
            guestbook: "방명록",
            certificates: "자격증"
        },
        guestbook: {
            title: "방명록",
            writeMessage: "메시지 작성",
            recentMessages: "최근 메시지",
            form: {
                name: "이름",
                email: "이메일",
                message: "메시지를 입력해주세요",
                submit: "작성하기"
            },
            messageCard: {
                postedOn: "작성일",
                by: "작성자"
            },
            success: "메시지가 성공적으로 등록되었습니다",
            error: "메시지 등록 중 오류가 발생했습니다"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            guestbook: "Guestbook",
            certificates: "Certificates"
        },
        guestbook: {
            title: "Guestbook",
            writeMessage: "Write a Message",
            recentMessages: "Recent Messages",
            form: {
                name: "Name",
                email: "Email",
                message: "Enter your message",
                submit: "Submit"
            },
            messageCard: {
                postedOn: "Posted on",
                by: "by"
            },
            success: "Message posted successfully",
            error: "Error posting message"
        }
    }
}; 

// Make translations available globally
window.guestbookTranslations = translations;
console.log('Guestbook translations loaded:', Object.keys(translations)); 