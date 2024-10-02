import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = JSON.parse(await readContacts());
    return contacts.length;
  } catch (error) {
    return error;
  }
};

console.log(await countContacts());
