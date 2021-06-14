const db = require("../../data/db-config");

function findCustomers() {
    return db("customers").select("*");
};

function deleteCustomer(id) {
    return db("customers").where({id}).delete();
};
async function addCustomer(customer) {
    try {
      const [id] = await db("customers").insert(customer, "id");
  
      return findCustomerById(id);
    } catch (error) {
      throw error;
    }
  }
  
  function findCustomerById(id) {
    return db("customers").where({ id }).select();
  }

module.exports = {
    findCustomerById,
    addCustomer,
    findCustomers,
    deleteCustomer
}