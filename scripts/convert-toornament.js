// This is a utility script for converting Toornament data to brackets-viewer format
// It's meant to be run in a Node.js environment only

const fs = require('fs');
const { convertData } = require('../dist/brackets-viewer.min.js');

try {
    const fileContent = fs.readFileSync('input/toornament.json', { encoding: 'utf-8' });
    const data = JSON.parse(fileContent);
    
    const result = convertData(data);
    
    fs.writeFileSync('output/db.json', JSON.stringify(result.database, null, 4));
    fs.writeFileSync('output/mappings.json', JSON.stringify(result.mappings, null, 4));
    
    console.log('Conversion completed successfully!');
} catch (error) {
    console.error('Error processing Toornament data:', error);
}