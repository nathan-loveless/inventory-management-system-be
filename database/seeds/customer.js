exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("customers").insert([
        {
          id: 1,
          empId: "2",
          companyName: "White Clover Markets",
          address: "1029 - 12th Ave. S.",
          city: "Seattle",
          state: "WA",
          zipcode: "98124",
        },
        {
          id: 2,
          empId: "10",
          companyName: "Split Rail Beer & Ale",
          address: "P.O. Box 555",
          city: "Lander",
          state: "Wyoming",
          zipcode: "82520",
        },
        {
          id: 3,
          empId: "10",
          companyName: "Rattlesnake Canyon Grocery",
          address: "2817 Milton Dr.",
          city: "Albuquerque",
          state: "New Mexico",
          zipcode: "87110",
        },
        {
          id: 4,
          empId: "8",
          companyName: "Save-a-lot Markets",
          address: "187 Suffolk Ln.",
          city: "Boise",
          state: "Idaho",
          zipcode: "83720",
        },
        {
          id: 5,
          empId: "7",
          companyName: "Great Lakes Food Market",
          address: "2732 Baker Blvd.",
          city: "Eugene",
          state: "Oregon",
          zipcode: "97403",
        },
        {
          id: 6,
          empId: "7",
          companyName: "The Big Cheese",
          address: "89 Jefferson Way Suite 2",
          city: "Portland",
          state: "Oregon",
          zipcode: "97201",
        },
        {
          id: 7,
          empId: "9",
          companyName: "Let's Stop N Shop",
          address: "87 Polk St. Suite 5",
          city: "San Francisco",
          state: "California",
          zipcode: "94117",
        },
        {
          id: 8,
          empId: "8",
          companyName: "Lonesome Pine Restaurant",
          address: "89 Chiaroscuro Rd.",
          city: "Portland",
          state: "Oregon",
          zipcode: "97219",
        },
        {
          id: 9,
          empId: "9",
          companyName: "The Cracker Box",
          address: "55 Grizzly Peak Rd.",
          city: "Butte",
          state: "Montanna",
          zipcode: "59801",
        },
        {
          id: 10,
          empId: "9",
          companyName: "Lazy K Kountry Store",
          address: "12 Orchestra Terrace",
          city: "Walla Walla",
          state: "Washington",
          zipcode: "99362",
        },
      ]);
    });
};
