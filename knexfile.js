const dotenv = require("dotenv");
const pgConnection = process.env.DATABASE_URL || "postgres://mduvuyuq:5ZXgD2fMF1LdDVNoiHlhAJjlRalSQ6qA@ziggy.db.elephantsql.com:5432/mduvuyuq";

module.exports = {

    development: {
        client: 'pg',
        connection: pgConnection,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: { directory: "./data/migrations" },
        seeds: { directory: "./data/seeds" },
    },
    production: {
      client: 'pg',
      connection: pgConnection,
      migrations: { directory: './data/migrations' },
      seeds: { directory: './data/seeds' },
    },
}
