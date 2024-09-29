import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
    const formattedData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, formattedData, 'utf8');
    console.log('Contacts have been written successfully.');
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
