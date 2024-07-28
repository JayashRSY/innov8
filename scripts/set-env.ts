import { writeFileSync } from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `
export const environment = {
  production: true,
  apiKey: '${process.env['API_KEY']}',
  spreadsheetId: '${process.env['SPREADSHEET_ID']}',
};
`;

try {
    writeFileSync(targetPath, envConfigFile);
    console.log(`Environment variables written to ${targetPath}`);
} catch (err) {
    console.error(`Error writing environment variables to ${targetPath}`, err);
}
