import Issue from '../models/Issue'
import Notification from '../models/Notification'
import Comment from '../models/Comment'
import Attachment from '../models/Attachment'

// Create an issue
const sendIssue = async(req, res)=>{
    const {
      title,
      description,
      category,
      status,
      priority,
      submittedBy,
      assignedTo
    } = req.body; // Assuming the request body contains the data for the Issue document
try {
  const newIssue = new Issue({
      title,
      description,
      category,
      status,
      priority,
      submittedBy,
      assignedTo
  });

  // Save the new Issue document to the database
  await newIssue.save();
  // Send notification to the Leader
  const notificationContent = `You have been assigned to handle a new issue: ${title}`;
   const newNotification = new Notification({
  recipient: assignedTo, // Assign the staff member(s) to the notification recipient
  issue: newIssue._id, // Associate the notification with the newly created issue
  content: notificationContent,
});
await newNotification.save();

// Send a response back to the user indicating successful issue creation
res.status(201).json({ message: 'Issue created successfully!' });
  
} catch (error) {
  console.error('Error creating issue:', error);
  res.status(500).json({ error: 'Something went wrong!' });
}
    
}

// Staff or Leader is working on Issue
// so he can do that by updating the status of issue and comment on an issue

const getSingleIssue = async(req, res)=>{
  const issueId = req.params.id;
  const isIssueAvailable = await Issue.findOne({_id: issueId})
  if(isIssueAvailable)
  {
    res.json({SingleIssue: isIssueAvailable});
  }else{
    res.json({Message: "Issue not found"});
  }
}

// Get all issue relatedto a single staff

const getAllIssues_for_a_staff = async(req, res)=>{
  const assignedTo = req.params.id;
  const isIssueAvailable = await Issue.find({assignedTo: assignedTo})
  if(isIssueAvailable)
  {
    res.json({SingleIssue: isIssueAvailable});
  }else{
    res.json({Message: "Issue not found"});
  }
}

const leaderIsWorkingOnIssue = async(req,res)=>{
try {
      const {status, comments}=req.body;
      const issueId = req.params.id;

      // Search id corresponding to the issueId provided
      const findIssue= await Issue.findOne({_id:issueId});
      if(findIssue){
      

         // Create the new comment object
    const newComment = {
      user: findIssue.assignedTo, // Assuming user is the ID or username of the user making the comment
      text: comments,
    };
  
      const updateDone= await Issue.findByIdAndUpdate(issueId,{$set: { status: status },$push: { comments: newComment }},{ new: true });
      // send notification to the User

        if(updateDone){
          const notificationContent = `There is the changes on submitted issue: ${updateDone.title}`;
          const newNotification = new Notification({
         recipient: updateDone.submittedBy, // Assign the staff member(s) to the notification recipient
         issue: updateDone._id, // Associate the notification with the newly created issue
         content: notificationContent,
       });
       await newNotification.save();
       res.json({Message: "done!"});       
        }else{
          res.json({Message: "there was an error"});
        }
      }
      else{
        //
        res.json({Message:"Issue Not Found"});
      }

    } catch (error) {
      console.log(error);
      res.json({Message:"Update failed ,,,,,"});
    }
}

// series of comments on a single Issue. Both User and Staff
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
           issue: issueId,
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

//delete issue ........................
const deleteIssue = async (req, res)=>{
   try {
    const issueId = req.params.id;
    const issue = await Issue.findById(issueId);
    if(!issue){
      return res.status(404).json({ error: "Issue not found." });
    }
    console.log(issue);
    await Issue.findByIdAndDelete(issueId).then((issue)=>{
      return res.status(200).json({ Data: issue });

    }).catch((error)=>{
      return res.status(404).json({ error: "Try again please." });

    })
    // await Comment.deleteOne(issueId);
    // await Attachment.deleteOne(issueId);

   } catch (error) {
    return res.json({ error: "Delete unsuccessfully."});
   }

}

module.exports = {
    sendIssue,
    leaderIsWorkingOnIssue,
    getSingleIssue,
    getAllIssues_for_a_staff,
    newComment,
    deleteIssue
}