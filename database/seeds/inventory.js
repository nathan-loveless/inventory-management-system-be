exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("inventory")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("inventory").insert([
        {
          id: 1,
          name: "Boston Crab Meat",
          inStock: 18.4,
          price: 123,
        },
        {
          id: 2,
          name: "Grandma's Boysenberry Spread",
          inStock: 120,
          price: 25,
        },
        {
          id: 3,
          name: "Tofu",
          inStock: 235,
          price: 23.25,
        },
        {
          id: 4,
          name: "Steeleye Stout",
          inStock: 20,
          price: 18,
        },
        {
          id: 5,
          name: "Sir Rodney's Scones",
          inStock: 10,
          price: 3,
        },
        {
          id: 6,
          name: "Sir Rodney's Marmalade",
          inStock: 81,
          price: 40,
        },
        {
          id: 7,
          name: "Chai",
          inStock: 39,
          price: 18,
        },
        {
          id: 8,
          name: "Outback Lager",
          inStock: 15,
          price: 15,
        },
        {
          id: 9,
          name: "Northwoods Cranberry Sauce",
          inStock: 6,
          price: 40,
        },
        {
          id: 10,
          name: "Laughing Lumberjack Lager",
          inStock: 52,
          price: 14,
        },
        {
          id: 11,
          name: "Uncle Bob's Organic Dried Pears",
          inStock: 15,
          price: 30,
        },
        {
          id: 12,
          name: "Jack's New England Clam Chowder",
          inStock: 85,
          price: 9.65,
        },
        {
          id: 13,
          name: "Louisiana Fiery Hot Pepper Sauce",
          inStock: 76,
          price: 21.05,
        },
        {
          id: 14,
          name: "Ipoh Coffee",
          inStock: 17,
          price: 46,
        },
        {
          id: 15,
          name: "Aniseed Syrup",
          inStock: 13,
          price: 10,
        },
        {
          id: 16,
          name: "Ravioli Angelo",
          inStock: 36,
          price: 19.5,
        },
        {
          id: 17,
          name: "Vegie-spread",
          inStock: 24,
          price: 43.9,
        },
        {
          id: 18,
          name: "Louisiana Hot Spiced Okra",
          inStock: 4,
          price: 17,
        },
        {
          id: 19,
          name: "Manjimup Dried Apples",
          inStock: 20,
          price: 53,
        },
        {
          id: 20,
          name: "Chef Anton's Gumbo Mix",
          inStock: "25",
          price: 21.35,
        },
      ]);
    });
};
