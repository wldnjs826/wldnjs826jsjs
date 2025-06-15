console.log('Loading translations...');

const translations = {
    ko: {
        // 네비게이션
        nav: {
            home: "홈",
            about: "소개",
            skills: "기술",
            projects: "프로젝트",
            contact: "연락처",
            guestbook: "방명록",
            certificates: "자격증"
        },
        // 홈 섹션
        home: {
            greeting: "안녕하세요",
            intro: "저는",
            name: "최지원입니다",
            description: "20252240 한남대학교 컴퓨터공학과 최지원입니다.",
            cta: "연락하기"
        },
        // 소개 섹션
        about: {
            title: "소개",
            description: "저는 백엔드 개발에 열정을 가진 개발자입니다. 서버 아키텍처와 데이터베이스 설계에 깊은 관심을 가지고 있으며, 효율적이고 안정적인 서버 시스템 구축을 목표로 하고 있습니다. Java, Python과 같은 백엔드 기술 스택을 지속적으로 학습하며, 클라우드 환경에서의 서버 운영 및 API 개발에 전문성을 키워나가고 있습니다."
        },
        // 프로젝트 섹션
        projects: {
            title: "프로젝트",
            project1: {
                title: "회사 게임프로젝트",
                description: "친구들과 함께 게임 개발 환경에서 진행한 팀 프로젝트입니다. 언리얼 엔진을 활용하여 게임을 개발하고, Git을 통한 버전 관리와 Agile 방법론을 적용한 프로젝트 관리 경험을 쌓았습니다."
            },
            project2: {
                title: "3D 게임 개발 프로젝트(예정)",
                description: "Blender를 사용하여 직접 3D 모델을 제작하고, Unity 엔진과 연동하여 개성 있는 게임을 개발했습니다. 3D 모델링부터 게임 개발까지 전체 제작 과정을 경험했습니다."
            },
            project3: {
                title: "게임엔진 개발(예정)",
                description: "언리얼 엔진과 유니티의 기본 구조를 분석하고, C++을 사용하여 직접 게임엔진을 구현했습니다. 렌더링 시스템, 물리 엔진, 에셋 관리 등 게임엔진의 핵심 기능을 개발했습니다."
            },
            project4: {
                title: "고양이와 스프 (확장판)",
                description: "귀여운 고양이 캐릭터와 함께하는 요리 시뮬레이션 게임의 확장판입니다. 새로운 레시피, 캐릭터 커스터마이징, 멀티플레이어 기능을 추가하여 게임성을 향상시켰습니다."
            },
            project5: {
                title: "AI 이미지 분류 성능 향상 연구",
                description: "텐서플로우를 활용하여 이미지 분류 AI 모델의 성능을 향상시키는 연구를 진행했습니다. 데이터 전처리 최적화, 모델 아키텍처 개선, 학습 파라미터 튜닝을 통해 분류 정확도를 개선했습니다."
            },
            viewProject: "프로젝트 보기",
            sourceCode: "소스 코드"
        },
        // 연락처 섹션
        contact: {
            title: "연락처",
            name: "이름",
            email: "이메일",
            message: "메시지",
            send: "보내기"
        },
        certificates: {
            title: "자격증",
            issueDate: "발급일",
            issuedBy: "발급기관",
            // 자격증 목록
            cert1: {
                name: "정보처리기사 (예정)",
                date: "2025년",
                org: "한국산업인력공단"
            },
            cert2: {
                name: "SQL 개발자(SQLD) (예정)",
                date: "2025년",
                org: "한국데이터산업진흥원"
            },
            cert3: {
                name: "컴퓨터활용능력 1급",
                date: "2025년",
                org: "대한상공회의소"
            }
            // 추가 자격증은 여기에 추가
        },
        guestbook: {
            title: "방명록",
            nameLabel: "이름",
            namePlaceholder: "이름을 입력하세요",
            messageLabel: "메시지",
            messagePlaceholder: "메시지를 입력하세요",
            submitButton: "등록하기",
            loadingText: "로딩 중...",
            errorMessage: "오류가 발생했습니다. 다시 시도해주세요.",
            emptyMessage: "아직 메시지가 없습니다.",
            timeAgo: {
                now: "방금 전",
                minutes: "분 전",
                hours: "시간 전",
                days: "일 전"
            }
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            guestbook: "Guestbook",
            certificates: "Certificates"
        },
        // Home section
        home: {
            greeting: "Hello",
            intro: "I am",
            name: "Jiwon Choi",
            description: "Computer Science student at Hannam University, Student ID: 20252240",
            cta: "Contact Me"
        },
        // About section
        about: {
            title: "About Me",
            description: "I am a passionate backend developer with a deep interest in server architecture and database design. My goal is to build efficient and stable server systems. I continuously learn backend technology stacks like Java and Python, while developing expertise in cloud server operations and API development."
        },
        // Projects section
        projects: {
            title: "Projects",
            project1: {
                title: "Company Game Project",
                description: "A team project developed with friends in a game development environment. We developed the game using Unreal Engine, gaining experience in version control with Git and project management using Agile methodology."
            },
            project2: {
                title: "3D Game Development Project (Planned)",
                description: "Created 3D models using Blender and developed a unique game by integrating with Unity Engine. Experienced the entire production process from 3D modeling to game development."
            },
            project3: {
                title: "Game Engine Development (Planned)",
                description: "Analyzed the basic structure of Unreal Engine and Unity, then implemented a game engine using C++. Developed core features including rendering system, physics engine, and asset management."
            },
            project4: {
                title: "Cats and Soup (Extended Version)",
                description: "An extended version of a cooking simulation game featuring cute cat characters. Enhanced gameplay by adding new recipes, character customization, and multiplayer features."
            },
            project5: {
                title: "AI Image Classification Performance Enhancement Research",
                description: "Conducted research to improve the performance of AI image classification models using TensorFlow. Enhanced classification accuracy through data preprocessing optimization, model architecture improvements, and learning parameter tuning."
            },
            viewProject: "View Project",
            sourceCode: "Source Code"
        },
        // Contact section
        contact: {
            title: "Contact",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send"
        },
        certificates: {
            title: "Certificates",
            issueDate: "Issue Date",
            issuedBy: "Issued By",
            // Certificate list
            cert1: {
                name: "Engineer Information Processing (Expected)",
                date: "2025",
                org: "Human Resources Development Service of Korea"
            },
            cert2: {
                name: "SQL Developer (SQLD) (Expected)",
                date: "2025",
                org: "Korea Data Agency"
            },
            cert3: {
                name: "Computer Specialist Level 1",
                date: "2025",
                org: "Korea Chamber of Commerce and Industry"
            }
            // Add more certificates here
        },
        guestbook: {
            title: "Guestbook",
            nameLabel: "Name",
            namePlaceholder: "Enter your name",
            messageLabel: "Message",
            messagePlaceholder: "Enter your message",
            submitButton: "Submit",
            loadingText: "Loading...",
            errorMessage: "An error occurred. Please try again.",
            emptyMessage: "No messages yet.",
            timeAgo: {
                now: "just now",
                minutes: "minutes ago",
                hours: "hours ago",
                days: "days ago"
            }
        }
    }
}; 

// Make translations available globally
window.translations = translations;
console.log('Translations loaded:', Object.keys(translations)); 