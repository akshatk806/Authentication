const User=require('../models/users');     // User is a model

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

// Sign-up
module.exports.create=function(request,response){
    if(request.body.password!=request.body.cpassword){
        return response.redirect('back');
    }
    User.findOne({username:request.body.username},function(err,user){      //in case of findMany() user is javascript object(collections) ,and in case of find() the user is javascript array of objects(collection of documents) 
        if(err){
            console.log("Error in finding user in signing up");
            return;
        }
        if(!user){
            User.create(request.body,function(err,user){
                if(err){
                    console.log("Error in creating the user while signing up:",err);
                    return;
                }
                return response.redirect('/users/sign-in')
            })
        }
        else{
            console.log("User Already exist")
            console.log(user)        // the user which is finded in filter object
            return response.redirect('/users/sign-in');
        }
    })
}