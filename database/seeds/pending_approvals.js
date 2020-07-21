exports.seed = function (knex) {
  return knex("pending_approvals")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("pending_approvals").insert([
        {
          id: 1,
          username: "jmoen",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Jack",
          lastName: "Moen",
          address: "19 Jackob St.",
          city: "Johnson",
          state: "Vermont",
          zipcode: "05114",
          email: "jmoen@cmail.com",
          status: "pending",
          role: "none",
        },
        {
          id: 2,
          username: "gcollard",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "George",
          lastName: "Collard",
          address: "505 Rt. 3",
          city: "LaPorte",
          state: "Indiana",
          zipcode: "75547",
          email: "gcollard@cmail.com",
          status: "pending",
          role: "none",
        },
        {
          id: 3,
          username: "mdarby",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Mitch",
          lastName: "Darby",
          address: "196 Blane Ln.",
          city: "Norwalk",
          state: "Ohio",
          zipcode: "47223",
          email: "mdarby@cmail.com",
          status: "pending",
          role: "none",
        },
        {
          id: 4,
          username: "cdaniels",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Charlie",
          lastName: "Daniels",
          address: "44 Tower Ln. Apt. 401",
          city: "Austin",
          state: "Texas",
          zipcode: "38143",
          email: "cdaniels@cmail.com",
          status: "pending",
          role: "none",
        },
        {
          id: 5,
          username: "kreiner",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Keith",
          lastName: "Reiner",
          address: "87 Main St.",
          city: "Wellington",
          state: "Alabama",
          zipcode: "07651",
          email: "kreiner@cmail.com",
          status: "pending",
          role: "none",
        },
        {
          id: 6,
          username: "mrose",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Mary",
          lastName: "Rose",
          address: "1555 Crooked Ct.",
          city: "Ft. Lauderdale",
          state: "Florida",
          zipcode: "00561",
          email: "mrose@cmail.com",
          status: "pending",
          role: "none",
        },
        {
          id: 7,
          username: "njenkins",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Natalie",
          lastName: "Jenkins",
          address: "962 Macon Ave.",
          city: "Portland",
          state: "Oregon",
          zipcode: "66294",
          email: "njenkins@cmail.com",
          status: "pending",
          role: "none",
        },
        {
          id: 8,
          username: "porion",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Pam",
          lastName: "Orion",
          address: "18 Little Stream Rd.",
          city: "Albourgh",
          state: "New York",
          zipcode: "81554",
          email: "porion@cmail.com",
          status: "pending",
          role: "none",
        },
        {
          id: 9,
          username: "schan",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Steven",
          lastName: "Chan",
          address: "88 Plum Ave.",
          city: "Norfolk",
          state: "Virginia",
          zipcode: "40084",
          email: "schan@cmail.com",
          status: "pending",
          role: "none",
        },
        {
          id: 10,
          username: "tbest",
          password:
            "$2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy",
          firstName: "Tom",
          lastName: "Best",
          address: "441 Mondock Rd.",
          city: "Atlanta",
          state: "Georgia",
          zipcode: "50911",
          email: "tbest@cmail.com",
          status: "pending",
          role: "none",
        },
      ]);
    });
};

// $2a$05$Bkke.wlmN2csDslLpF.vSuqJ7LLxQVYAwcTeCp7xdpcLLftMZGrVy
