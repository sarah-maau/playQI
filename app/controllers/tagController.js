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
    },

    tagAdminPage: async (req, res) => {
        try {
            const id = Number(req.params.id);
            if (id) {
                const tag = await Tag.findByPk(id);
                res.render('updateTagAdmin', {tag});
            }
            else {
                res.render('tagAdmin');
            }    
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    addTag: async (req, res) => {
        try {
            let errors = [];
            const tag = await Tag.findOne({
                where: {
                    name: req.body.tagName
                }
            });
            
            if (tag) {
                errors.push('Ce tag existe déjà');
                res.render('tagAdmin', {errors})
            }
            else {
                const newTag = new Tag({
                name: req.body.tagName
                });
        
                await newTag.save();
                res.redirect('/admin');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    updateTag: async (req, res) => {
        try {
            let errors = [];
            const tag = await Tag.findByPk(req.params.id);
            if (req.body.tagName === '') {
                errors.push('Vous devez donner un nouveau nom');
                res.render('updateTagAdmin', {errors, tag});
            }
            else {
                const existingTag = await Tag.findOne({
                    where: {
                        name: req.body.tagName
                    }
                });
            
                if (existingTag) {
                    errors.push('Ce nom de sujet existe déjà');
                    res.render('updateTagAdmin', {errors, tag});
                }  
                else {      
                    tag.name = req.body.tagName;
                    await tag.save();
                    res.redirect('/tags');
                }
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}

module.exports = tagController;