const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'wedding_comments.db');
const db = new Database(dbPath);

function initDatabase() {
  try {
    db.exec(`CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = { db, initDatabase };