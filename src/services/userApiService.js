import db from "../models";

const getAllUser = async () => {
  try {
    let users = await db.User.findAll({
      attributes: ["id", "username", "email"],
      include: { model: db.Group, attributes: ["name", "description"] },
    });

    if (users) {
      console.log("check User: ", users);

      return {
        EM: "get data success",
        EC: 0,
        DT: users,
      };
    } else {
      return {
        EM: "not found users",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "something wrong with services",
      EC: 1,
      DT: [],
    };
  }
};

const createNewUser = () => {};

const updateUser = () => {};

const deleteAUser = async (id) => {
  try {
    let user = await db.User.findOne({
      where: { id: id },
    });

    if (user) {
      await user.destroy();
      return {
        EM: "Delete user success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "user not found",
        EC: 1,
        DT: [],
      };
    }
  } catch (error) {
    console.log("check error: ", error);
    return {
      EM: "error from userApiService",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteAUser,
};
