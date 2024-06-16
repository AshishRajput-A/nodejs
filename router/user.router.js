import express from "express";
import {
  about,
  createdata,
  getdata,
  getonedata,
  updatedata,
  deletedata,
} from "../controller/user.controller.js";

const router = express.Router();

router.get("/about", about);

router.post("/create", createdata);

router.get("/getdata", getdata);

router.get("/getbyid/:id", getonedata);

router.patch("/update/:id", updatedata);

router.delete("/delete/:id", deletedata);

export default router;
