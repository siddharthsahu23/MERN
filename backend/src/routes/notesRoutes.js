import express from "express";
import {controlOfDel, controlOfGet, controlOfPOst, controlOfPut} from "../controllers/notesController.js"
const router = express.Router();

router.get("/", controlOfGet);

router.post("/", controlOfPOst);

router.put("/:id", controlOfPut);

router.delete("/:id", controlOfDel);

export default router;