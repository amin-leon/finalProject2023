"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _issueController = _interopRequireDefault(require("../controllers/issueController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post('/newIssue', _issueController["default"].sendIssue);
router.patch('/working_on_issue/:id', _issueController["default"].leaderIsWorkingOnIssue);
router.get('/singleIssue/:id', _issueController["default"].getSingleIssue); // Get individual issue for more check details
router.get('/staff/:id', _issueController["default"].getAllIssues_for_a_staff); // Get individual issue for more check details
router.post('/singleIssue/addComment/:id', _issueController["default"].newComment); // Get individual issue for more check details
var _default = router;
exports["default"] = _default;