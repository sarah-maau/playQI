const { Tag } = require('../models');

const tagController = {
    tagsPage: async(req, res, next) => {
        try {
            const tags = await Tag.findAll();
            if (!tags) {
                next();
            }
            else {
                res.render('tags', {tags});
            }
            
        } catch (error) {
            console.trace(error);
        }
    },

    tagPage: async(req, res, next) => {
        const id = Number(req.params.id);
        try {
            const tag = await Tag.findByPk(id, {
                include: [
                    {
                        association: 'quizzes', 
                        include: [
                            'author'
                        ]
                    }
                ]
            });
            if(!tag) {
                next();
            }
            else {
                res.render('tag', {tag});
            }
        } catch (error) {
            console.trace(error); 
        }
    }
}

module.exports = tagController;