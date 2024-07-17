const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const fs = require('fs');

const app = express();
const upload = multer();

app.use(express.static('public'));

app.post('/submit', upload.none(), (req, res) => {
    const formData = req.body;

    const filePath = 'data.xlsx';
    let workbook;

    if (fs.existsSync(filePath)) {
        workbook = XLSX.readFile(filePath);
    } else {
        workbook = XLSX.utils.book_new();
    }

    const sheetName = 'Sheet1';
    let worksheet;

    if (workbook.SheetNames.includes(sheetName)) {
        worksheet = workbook.Sheets[sheetName];
    } else {
        worksheet = XLSX.utils.aoa_to_sheet([Object.keys(formData)]);
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    }

    const newRow = Object.values(formData);
    XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

    XLSX.writeFile(workbook, filePath);

    res.json({ result: 'success' });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
