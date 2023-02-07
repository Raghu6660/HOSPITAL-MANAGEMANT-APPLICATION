import CustomError from "../utils/errorHandler.js";
import {adminModel} from '../models/adminSchema.js';
export const AdminController={

    async adminpost (req,res,next){
        try{
            const data = await adminmodel.create(req.body);
            res.status(200).json({
                success:true,
                data:data
            })
        }
        catch(err){
            next(new CustomError(err.message,500,"Unable to Create"));
        }
    },
    async adminfetch(req,res,next){
        try{
            const data = await adminModel.find({});
            res.json({ data });
        }
        catch(err){
            next(new CustomError(err.message,500,"Unable to fetch"));
        }
    },
    
}