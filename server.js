const express = require('express');
const cors = require('cors'); // CORS 추가
const app = express();

app.use(cors()); // 모든 요청에 대해 CORS 허용
app.use(express.json({ limit: '50mb' }));

const images = [];

app.post('/upload', (req, res) => {
    const { screenshot, random } = req.body;
    images.push({ screenshot, random });
    res.status(201).json({ message: '이미지 저장 성공' });
});

app.get('/images', (req, res) => {
    res.json(images);
});

app.listen(3000, () => {
    console.log('서버가 http://localhost:3000에서 실행 중');
});
