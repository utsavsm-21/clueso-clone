const bcrypt = require("bcrypt");
const User = require("./src/models/User");       // <-- exact path
const sequelize = require("./src/config/db");   // <-- your Sequelize instance

async function createUser() {
  try {
    await sequelize.sync();  // ensure tables exist

    const hashedPassword = await bcrypt.hash("password123", 10);

    await User.create({
      name: "Test User",
      email: "ullas@gmail.com",
      password: hashedPassword
    });

    console.log("User created successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createUser();
