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

// Sign-in
module.exports.createSession=function(request,response){
    User.findOne({username:request.body.username},function(err,user){
        if(err){
            console.log("Error in finding user in signing in");
            return
        }
        console.log("Logged in User:",user)
        if(user){
            // User found
            if(user.password!=request.body.password){
                return response.redirect('back');
            }
            response.cookie('user_id',user.id);
            return response.redirect('/users/profile');
        }
        else{
            // User not found
            return response.redirect('back')
        }
    })
}

// Display the profile
module.exports.profile=function(request,response){
    if(request.cookies.user_id){
        User.findById(request.cookies.user_id,function(err,user){
            if(user){
                return response.render('profile',{
                    title:"GGSIPU | Profile",
                    user:user
                })
            }
            else{
                return response.redirect('/users/sign-in')
            }
        })
    }
    else{
        response.redirect('/users/sign-in');
    }
}

// Log out
module.exports.destroySession=function(request,response){
    User.findOne({username:request.body.username},function(err,user){
        if(err){
            console.log("Error in signing out");
            return
        }
        response.clearCookie("user_id");
        response.redirect('/users/sign-in');
    })
}