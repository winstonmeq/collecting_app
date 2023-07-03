

import Store from "@/app/model/store";
import { NextResponse } from "next/server";
import { connectToDB } from "@/app/connection/database";

export async function GET(request) {

  try {


    await connectToDB();

    const getdata = await Store.find({}).exec();

    return NextResponse.json(getdata)
    
    //return new Response(JSON.stringify(getdata))
     

  } catch (error) {
  
   return new Response('GET Error nih pre!');

  } 
}



export async function POST(request) {

  try {


    const { storeName, owner, address, mobile} = await request.json();

    console.log('check POST data kung naka abot sa api',{storeName, owner, address, mobile})


    await connectToDB();

    const addStore = new Store(
            {

            storeName:storeName,
            owner:owner , 
            address: address,
            mobile:mobile, 
            }        
        )
    
    await addStore.save();

    
    console.log('Store successfully added to database')

    return new Response(JSON.stringify('Store post Success'))
    

  } catch (error) {
  
   return new Response('store POST Error!');

  } 
}

