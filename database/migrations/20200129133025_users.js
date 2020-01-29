
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();

      tbl.string("username", 80)
        .unique()
        .notNullable();

      tbl.string("password", 80)
        .notNullable();
      
      tbl.string("department", 80)
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
