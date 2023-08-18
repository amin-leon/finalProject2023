import Comment from '../models/Comment';
import Issue from '../models/Issue';



const newComment = async(req, res)=>{
   const { user, comment }= req.body;
   const issueId = req.params.id;
   const isIssueAvailable = await Issue.findOne({_id:issueId});
   if(isIssueAvailable){
    console.log("User found")
    if(!user || !comment){
        res.json({Message: "Each field must be Filled"});
    }
    else{
       await Comment.create({
            issueId,
            user,
            comment
        }).then(()=>{
            res.json({Message: "New comment sent"})
        })
        .catch((error)=>{
            console.log(error)
            res.json({Message: "Failed to comment on certain Issue"})
        })
    }
   }
   else{
    res.json({Message: "Issue not Found"})
   }
}

module.exports = newComment