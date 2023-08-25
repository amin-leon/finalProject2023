import { Router } from "express";
const router = Router();
import  {UserRegistration}  from '../controllers/userController';
import  {getAllUsers}  from "../controllers/userController";
import  {getUserById}  from "../controllers/userController";
import  {updateUserById}  from "../controllers/userController";
import  {deleteUserById}  from "../controllers/userController";

// =====routes for users=========

router.post("/", UserRegistration)
router.get("/all", getAllUsers)
router.get("/all/:id", getUserById)
router.put("/all/:id", updateUserById)
router.delete("/all/:id", deleteUserById)



export default router;
