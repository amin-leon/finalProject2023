"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _Issue = _interopRequireDefault(require("../models/Issue"));
var _Notification = _interopRequireDefault(require("../models/Notification"));
var _Comment = _interopRequireDefault(require("../models/Comment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Create an issue
var sendIssue = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, title, description, category, status, priority, submittedBy, assignedTo, newIssue, notificationContent, newNotification;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, description = _req$body.description, category = _req$body.category, status = _req$body.status, priority = _req$body.priority, submittedBy = _req$body.submittedBy, assignedTo = _req$body.assignedTo; // Assuming the request body contains the data for the Issue document
          _context.prev = 1;
          newIssue = new _Issue["default"]({
            title: title,
            description: description,
            category: category,
            status: status,
            priority: priority,
            submittedBy: submittedBy,
            assignedTo: assignedTo
          }); // Save the new Issue document to the database
          _context.next = 5;
          return newIssue.save();
        case 5:
          // Send notification to the Leader
          notificationContent = "You have been assigned to handle a new issue: ".concat(title);
          newNotification = new _Notification["default"]({
            recipient: assignedTo,
            // Assign the staff member(s) to the notification recipient
            issue: newIssue._id,
            // Associate the notification with the newly created issue
            content: notificationContent
          });
          _context.next = 9;
          return newNotification.save();
        case 9:
          // Send a response back to the user indicating successful issue creation
          res.status(201).json({
            message: 'Issue created successfully!'
          });
          _context.next = 16;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          console.error('Error creating issue:', _context.t0);
          res.status(500).json({
            error: 'Something went wrong!'
          });
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 12]]);
  }));
  return function sendIssue(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Staff or Leader is working on Issue
// so he can do that by updating the status of issue and comment on an issue

var getSingleIssue = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var issueId, isIssueAvailable;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          issueId = req.params.id;
          _context2.next = 3;
          return _Issue["default"].findOne({
            _id: issueId
          });
        case 3:
          isIssueAvailable = _context2.sent;
          if (isIssueAvailable) {
            res.json({
              SingleIssue: isIssueAvailable
            });
          } else {
            res.json({
              Message: "Issue not found"
            });
          }
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getSingleIssue(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Get all issue relatedto a single staff

var getAllIssues_for_a_staff = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var assignedTo, isIssueAvailable;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          assignedTo = req.params.id;
          _context3.next = 3;
          return _Issue["default"].find({
            assignedTo: assignedTo
          });
        case 3:
          isIssueAvailable = _context3.sent;
          if (isIssueAvailable) {
            res.json({
              SingleIssue: isIssueAvailable
            });
          } else {
            res.json({
              Message: "Issue not found"
            });
          }
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getAllIssues_for_a_staff(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var leaderIsWorkingOnIssue = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body2, status, comments, issueId, findIssue, _newComment, updateDone, notificationContent, newNotification;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body2 = req.body, status = _req$body2.status, comments = _req$body2.comments;
          issueId = req.params.id; // Search id corresponding to the issueId provided
          _context4.next = 5;
          return _Issue["default"].findOne({
            _id: issueId
          });
        case 5:
          findIssue = _context4.sent;
          if (!findIssue) {
            _context4.next = 22;
            break;
          }
          // Create the new comment object
          _newComment = {
            user: findIssue.assignedTo,
            // Assuming user is the ID or username of the user making the comment
            text: comments
          };
          _context4.next = 10;
          return _Issue["default"].findByIdAndUpdate(issueId, {
            $set: {
              status: status
            },
            $push: {
              comments: _newComment
            }
          }, {
            "new": true
          });
        case 10:
          updateDone = _context4.sent;
          if (!updateDone) {
            _context4.next = 19;
            break;
          }
          notificationContent = "There is the changes on submitted issue: ".concat(updateDone.title);
          newNotification = new _Notification["default"]({
            recipient: updateDone.submittedBy,
            // Assign the staff member(s) to the notification recipient
            issue: updateDone._id,
            // Associate the notification with the newly created issue
            content: notificationContent
          });
          _context4.next = 16;
          return newNotification.save();
        case 16:
          res.json({
            Message: "done!"
          });
          _context4.next = 20;
          break;
        case 19:
          res.json({
            Message: "there was an error"
          });
        case 20:
          _context4.next = 23;
          break;
        case 22:
          //
          res.json({
            Message: "Issue Not Found"
          });
        case 23:
          _context4.next = 29;
          break;
        case 25:
          _context4.prev = 25;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.json({
            Message: "Update failed ,,,,,"
          });
        case 29:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 25]]);
  }));
  return function leaderIsWorkingOnIssue(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// series of comments on a single Issue. Both User and Staff
var newComment = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body3, user, comment, issueId, isIssueAvailable;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body3 = req.body, user = _req$body3.user, comment = _req$body3.comment;
          issueId = req.params.id;
          _context5.next = 4;
          return _Issue["default"].findOne({
            _id: issueId
          });
        case 4:
          isIssueAvailable = _context5.sent;
          if (!isIssueAvailable) {
            _context5.next = 15;
            break;
          }
          console.log("User found");
          if (!(!user || !comment)) {
            _context5.next = 11;
            break;
          }
          res.json({
            Message: "Each field must be Filled"
          });
          _context5.next = 13;
          break;
        case 11:
          _context5.next = 13;
          return _Comment["default"].create({
            issue: issueId,
            user: user,
            comment: comment
          }).then(function () {
            res.json({
              Message: "New comment sent"
            });
          })["catch"](function (error) {
            console.log(error);
            res.json({
              Message: "Failed to comment on certain Issue"
            });
          });
        case 13:
          _context5.next = 16;
          break;
        case 15:
          res.json({
            Message: "Issue not Found"
          });
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function newComment(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
module.exports = {
  sendIssue: sendIssue,
  leaderIsWorkingOnIssue: leaderIsWorkingOnIssue,
  getSingleIssue: getSingleIssue,
  getAllIssues_for_a_staff: getAllIssues_for_a_staff,
  newComment: newComment
};