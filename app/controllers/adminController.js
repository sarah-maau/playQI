const { Tag, Quiz } = require('../models');

const adminController = {
  adminPage: async (req, res) => {
    try {
      const tags = await Tag.findAll();
      const quizzes = await Quiz.findAll();

      res.render('admin', {tags, quizzes});
    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  }
};

module.exports = adminController;
