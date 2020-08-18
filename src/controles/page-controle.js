
function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    return res.render("study.html")
}

function pageGiveClasses(req, res){
    return res.render("give-classes.html")
}

module.exports = {pageLanding, pageStudy, pageGiveClasses};