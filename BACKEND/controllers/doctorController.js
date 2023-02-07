import CustomError from "../utils/errorHandler.js";
import {doctorModel} from '../models/doctorSchema.js';

export const DoctorController={

    async doctorpost (req,res,next){
        try{
            const data = await doctormodel.create(req.body);
            res.status(200).json({
                success:true,
                data:data
            })
        }
        catch(err){
            next(new CustomError(err.message,500,"Unable to Create"));
        }
    },
    async doctorfetch(req,res,next){
        try{
            const data = await doctorModel.find({});
            res.send(data);
        }
        catch(err){
            next(new CustomError(err.message,500,"Unable to fetch"));
        }
    },
    
}