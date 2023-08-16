import dbConn from "@/config/db";
import ContactModel from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req:any, res:any) {
    try{
        // const {name, email, phone, message} = await req.body;
        const {name, email, phone, message} = await req.json();
        await dbConn();

        const data = await ContactModel.create({name, email, phone, message});

        return NextResponse.json({
            success: true,
            message: "Your response has been submitted",
            data
        })

    }catch(e){
        return NextResponse.json({
            success: false,
            message: "An error occured while submitting your response",
            e
        })
    }
} 