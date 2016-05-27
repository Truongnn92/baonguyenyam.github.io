export class Export2CSV {
    static generateCSV(header, data, filename) {
        let json2csv = require('json2csv');
        json2csv({ data: data, fields: header }, function (err, csv) {
            if (err) {
                console.log('Error while generating csv', err);
            }
            let dataUrl = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
            let hiddenElement = document.createElement('a');
            hiddenElement.setAttribute('href', dataUrl);
            hiddenElement.setAttribute('target', '_blank');
            hiddenElement.setAttribute('download', filename + '.csv');
            hiddenElement.click();
        });
    }
}