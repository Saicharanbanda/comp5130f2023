const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function detectFormats(input) {
  // Regular expressions for email, phone, and URL detection
  const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
  const phoneRegex = /(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}/g;
  const urlRegex = /https?:\/\/(www\.)?[\w\.-]+\.\w+/g;

  const emails = input.match(emailRegex);
  const phones = input.match(phoneRegex);
  const urls = input.match(urlRegex);

  const results = {};

  if (emails) {
    results.emails = emails;
  }

  if (phones) {
    results.phones = phones;
  }

  if (urls) {
    results.urls = urls;
  }

  return results;
}

rl.question('Enter text: ', (input) => {
  const formatResults = detectFormats(input);
  if (formatResults.emails) {
    console.log('Email:True');
    rl.close();
  } else {
    console.log('Email:False');
  }
  if (formatResults.phones) {
    console.log('Phone numbers:True');
  } else {
    console.log('phone numbers:False');
  }
  if (formatResults.urls) {
    console.log('url:True');
  } else {
    console.log('url:False');
  }
  rl.close();
});
