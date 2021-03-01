const Post = require('../models/post');
module.exports.create= function(req,res){
	console.log(req.body);
	console.log(req.user._id);
	Post.create({

		content: req.body.content,
		user:req.user._id
		//console.log(req.body.content);

	},function(err,post){
		if(err) console.log(err);
			return res.redirect('back');
	});
}