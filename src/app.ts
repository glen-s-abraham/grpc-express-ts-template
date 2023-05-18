import express from "express";
import 'express-async-errors'
import {json} from 'body-parser';



import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());


app.all('*',async (req,res,next)=>{
    throw new NotFoundError()
});
app.use(errorHandler)


export {app};

