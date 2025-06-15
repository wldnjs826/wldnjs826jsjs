// messages.js
// localStorage에서 메시지 불러오기 및 표시

document.addEventListener('DOMContentLoaded', function() {
    const messagesList = document.getElementById('messages-list');
    // 연락처 메시지는 'contact_messages'라는 key로 저장한다고 가정
    const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');

    if (messages.length === 0) {
        messagesList.innerHTML = '<p>저장된 메시지가 없습니다.</p>';
        return;
    }

    messagesList.innerHTML = messages.map(msg => `
        <div class="message-card">
            <strong>이름:</strong> ${msg.name}<br>
            <strong>이메일:</strong> ${msg.email}<br>
            <strong>메시지:</strong> <pre>${msg.message}</pre>
            <span style="font-size:0.8em;color:#888;">${msg.date ? msg.date : ''}</span>
        </div>
    `).join('');
}); 