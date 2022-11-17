exports.Quizz = (req, res) => {

    res.locals.name = req.body.name;
    res.render('quizz');
};