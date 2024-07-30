import * as XLSX from 'xlsx';

// Define styles
const headerStyle = {
    font: { bold: true, sz: 16, color: { rgb: "0000FF" } }, // Blue color and 16px font size
    alignment: { horizontal: 'left' },
};

const titleStyle = {
    font: { sz: 16, color: { rgb: "0000FF" } }, // Blue color and 16px font size
    alignment: { horizontal: 'left' },
};

const valueStyle = {
    font: { sz: 14 }, // 14px font size
    alignment: { horizontal: 'left' },
};

// Convert data to row-oriented format
const transformData = (data) => {
    const transformedData = [];
    data.forEach(item => {
        Object.entries(item).forEach(([key, value]) => {
            transformedData.push({ Title: key, Value: value });
        });
    });
    return transformedData;
};

const ExportToExcel = (data, patientName) => {
    // Transform the data to a row-oriented format
    const rowData = transformData(data);
    
    // Create a new workbook and add a worksheet to it
    const wb = XLSX.utils.book_new();
    
    // Convert data to a worksheet
    const ws = XLSX.utils.json_to_sheet(rowData, { header: ['Title', 'Value'] });

    // Apply styles to the headers and values
    ws['!cols'] = [
        { width: 30 }, // Width for Title column
        { width: 50 }  // Width for Value column
    ];

    // Apply styles to the headers (first row)
    ws['A1'].s = headerStyle;
    ws['B1'].s = headerStyle;

    // Apply styles to the rest of the cells
    for (let R = 1; R <= rowData.length; R++) {
        ws[`A${R + 1}`].s = titleStyle;
        ws[`B${R + 1}`].s = valueStyle;
    }

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Patient Details');

    // Create a binary string of the workbook
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    // Convert the binary string to an array buffer
    const s2ab = (s) => {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buf;
    };

    // Create a Blob and trigger a download with the patient's name in the filename
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${patientName}'s Patient Details.xlsx`; // Filename with patient's name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export default ExportToExcel;
