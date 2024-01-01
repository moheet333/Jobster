const { BadRequestError } = require("../errors/index");

const testUser = async (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Test User. Read Only!");
  }
  next();
};

module.exports = testUser;