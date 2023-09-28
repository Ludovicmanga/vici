import { NextFunction } from "express";

export const checkAuthenticated = async (
    req,
    res,
    next: NextFunction,
  ) => {
    
    if (req.isAuthenticated()) {
        next();
    } else {
        console.log('I am not authenticated');
    }
  }