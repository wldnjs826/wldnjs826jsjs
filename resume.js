document.addEventListener('DOMContentLoaded', () => {
    const resumeDownloadBtn = document.getElementById('resume-download-btn');
    
    resumeDownloadBtn.addEventListener('click', () => {
        // 이력서 PDF 파일 경로
        const resumePath = 'resume.pdf';
        
        // 다운로드 링크 생성
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = '최지원_이력서.pdf';
        
        // 링크 클릭 이벤트 발생
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}); 