exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "nathansl2003",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Nathan",
          lastName: "Loveless",
          address: "150 Main Street Apt. 22",
          city: "Montpelier",
          state: "Vermont",
          zipcode: "05663",
          email: "nathansl2003@cmail.com",
          status: "active",
          role: "admin",
        },
        {
          id: 2,
          username: "jsmith",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Jane",
          lastName: "Smith",
          address: "2235 Darwin Ln.",
          city: "Omaha",
          state: "Nebraska",
          zipcode: "34106",
          email: "jsmith@cmail.com",
          status: "active",
          role: "execute",
        },
        {
          id: 3,
          username: "dharvey",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Doug",
          lastName: "Harvey",
          address: "33 Short Ave.",
          city: "Puyallup",
          state: "Washington",
          zipcode: "65195",
          email: "dharvey@cmail.com",
          status: "inactive",
          role: "none",
        },
        {
          id: 4,
          username: "jallen",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Jill",
          lastName: "Allen",
          address: "96 Lovers Ln.",
          city: "Riverton",
          state: "Vermont",
          zipcode: "05410",
          email: "jallen@cmail.com",
          status: "inactive",
          role: "none",
        },
        {
          id: 5,
          username: "jmiller",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Jake",
          lastName: "Miller",
          address: "144 Rt. 76",
          city: "Tuscon",
          state: "Arizona",
          zipcode: "33150",
          email: "jmiller@cmail.com",
          status: "inactive",
          role: "none",
        },
        {
          id: 6,
          username: "rcross",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Robert",
          lastName: "Cross",
          address: "15 Circle Ct.",
          city: "Ludlow",
          state: "Massachusetts",
          zipcode: "14193",
          email: "rcross@cmail.com",
          status: "inactive",
          role: "none",
        },
        {
          id: 7,
          username: "rmason",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Roger",
          lastName: "Mason",
          address: "1315 Manhatten Ave. Suite 305",
          city: "New York",
          state: "New York",
          zipcode: "55610",
          email: "rmason@cmail.com",
          status: "active",
          role: "execute",
        },
        {
          id: 8,
          username: "asmithfield",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Anita",
          lastName: "Smithfield",
          address: "1005 Grey Lake Dr.",
          city: "Lansing",
          state: "Michigan",
          zipcode: "91706",
          email: "asmithfield@cmail.com",
          status: "active",
          role: "read",
        },
        {
          id: 9,
          username: "bcarson",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Ben",
          lastName: "Carson",
          address: "4961 Rupert St.",
          city: "Boston",
          state: "Massachusetts",
          zipcode: "14161",
          email: "bcarson@cmail.com",
          status: "active",
          role: "execute",
        },
        {
          id: 10,
          username: "krucker",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Kim",
          lastName: "Rucker",
          address: "55 Juniper Ave.",
          city: "Boise",
          state: "Idaho",
          zipcode: "29931",
          email: "krucker@cmail.com",
          status: "active",
          role: "read",
        },
      ]);
    });
};

// $2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy
