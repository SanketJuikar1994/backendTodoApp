var User = require('../schema/user');

module.exports = {
  saveUser: async (data) => {
    console.log('request os a user', data);
    try {
      var user = new User(data);
      return await user.save(data);
    } catch (e) {
      throw new Error('Something went wrong');
    }
  },
  updateTask: async (data) => {
    try {
      var userData = await User.findOne({ _id: data._id });
      var test = await User.updateOne(
        { _id: userData._id },
        {
          $set: data.task,
        }
      );
      return test;
    } catch (e) {
      throw new Error('Something went wrong');
    }
  },
  getTask: async () => {
    try {
      var userData = await User.find();
      return userData;
    } catch (e) {
      throw new Error('Something went wrong');
    }
  },

  DeleteTask: async (data) => {
    try {
      var userData = await User.deleteOne({ _id: data._id });
      return userData;
    } catch (e) {
      throw new Error('Something went wrong');
    }
  },
};
