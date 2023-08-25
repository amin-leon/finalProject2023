import  express  from "express";
const router = express.Router()
import  issueController from '../controllers/issueController'


router.post('/new-issue', issueController.sendIssue);
router.delete('/deleteIssue/:id', issueController.deleteIssue);
router.patch('/working_on_issue/:id', issueController.leaderIsWorkingOnIssue);
router.get('/singleIssue/:id', issueController.getSingleIssue);// Get individual issue for more check details
router.get('/staff/:id', issueController.getAllIssues_for_a_staff);// Get individual issue for more check details
router.post('/singleIssue/addComment/:id', issueController.newComment);// Get individual issue for more check details



export default  router