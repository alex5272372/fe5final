const settings = require('../settings');

module.exports = {
    uri: `mongodb+srv://${settings.dbLogin}:${settings.dbPassword}@cluster0-cbtir.gcp.mongodb.net/${settings.dbName}?retryWrites=true&w=majority`,
    db: settings.dbName
};