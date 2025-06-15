require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// 이메일 전송을 위한 트랜스포터 설정
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// 컨택트 폼 처리
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // 이메일 옵션 설정
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `포트폴리오 웹사이트 문의 - ${name}`,
            text: `
이름: ${name}
이메일: ${email}
메시지:
${message}
            `,
            html: `
<h3>새로운 문의가 도착했습니다</h3>
<p><strong>이름:</strong> ${name}</p>
<p><strong>이메일:</strong> ${email}</p>
<p><strong>메시지:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // 이메일 전송
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: '메시지가 성공적으로 전송되었습니다.' });
    } catch (error) {
        console.error('이메일 전송 오류:', error);
        res.status(500).json({ message: '메시지 전송에 실패했습니다.' });
    }
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
}); 