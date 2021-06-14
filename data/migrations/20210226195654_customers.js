
exports.up = function(knex) {
    return knex.schema.createTable("customers", (tbl) => {
        tbl.increments().notNullable();
        tbl.string("firstName");
        tbl.string("lastName");
        tbl.string("email").unique();
        tbl.bigInteger("phoneNumber");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("customers");
};
