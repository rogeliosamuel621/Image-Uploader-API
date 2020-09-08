const crypto = require('crypto');

function GenerateAPIKey() {
  const API_KEY = crypto.randomBytes(64).toString('hex');

  console.log(API_KEY);
}

GenerateAPIKey();
