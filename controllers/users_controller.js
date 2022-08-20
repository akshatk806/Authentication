module.exports.signin=function(request,response){
    return response.render('sign_in',{
        title:"GGSIPU | Sign in"
    })
}

module.exports.signup=function(request,response){
    return response.render('sign_up',{
        title:"GGSIPU | Sign up"
    })
}