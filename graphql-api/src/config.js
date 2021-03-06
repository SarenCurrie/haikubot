/* What type of db to use:
 * - FAKE
 * - MY_SQL
 * - SQLITE
 */
exports.db = process.env.DB_TYPE;

// MySQL config
exports.mySQLDBName = process.env.MYSQL_DB_NAME || 'haikuDB';
exports.mySQLHost = process.env.MYSQL_HOST;
exports.mySQLUser = process.env.MYSQL_USER;
exports.mySQLPassword = process.env.MYSQL_PASSWORD;

// SQLite config
exports.sqliteDBFile = process.env.SQLITE_DB_FILE || './deploy/db/haikus.db';
