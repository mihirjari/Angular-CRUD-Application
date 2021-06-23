const aboutPage = function(req, res){

    res.render("about", {title: "The Music Store - About"});  
}

module.exports = {aboutPage};