exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("suppliers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("suppliers").insert([
        {
          id: 1,
          name: "Pacific Suppliers",
          code: "PAC",
          address: "4409 Main St.",
          city: "Seattle",
          state: "WA",
          zipcode: "98124",
        },
        {
          id: 2,
          name: "Iron Rock Distribution",
          code: "IRD",
          address: "1905 Sandusky Dr.",
          city: "Sandusky",
          state: "OH",
          zipcode: "64159",
        },
        {
          id: 3,
          name: "IFL International Supplier",
          code: "IIS",
          address: "38 Industrial Dr.",
          city: "Portland",
          state: "OR",
          zipcode: "66912",
        },
        {
          id: 4,
          name: "South Eastern Transit Distribution",
          code: "SET",
          address: "435 J St.",
          city: "Pittsburg",
          state: "PA",
          zipcode: "41159",
        },
        {
          id: 5,
          name: "Northern Lights International",
          code: "NLI",
          address: "7950 Webster Ave.",
          city: "Detroit",
          state: "MI",
          zipcode: "14591",
        },
      ]);
    });
};
