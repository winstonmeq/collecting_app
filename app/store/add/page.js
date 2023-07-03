
"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [storeName, setstoreName] = useState("");
    const [owner, setowner] = useState("");
    const [address, setaddress] = useState("");
    const [mobile, setmobile] = useState(0);

  const router = useRouter();


      const addStore = async () => {

        setIsLoading(true)

        try {
    
          const payload = {storeName ,owner, address, mobile };
    
          const response = await axios.post(process.env.LOCAL_URL + '/api/store',payload);
    
          router.push('/')

    
        } catch (error) {
    
          setIsLoading(false);
    
        } finally {
    
          setIsLoading(false);
           // Set isLoading to false when the request is completed or encounters an error

        }
      };
    

      if (isLoading) {
        return (
          <div className="flex justify-center min-h-screen">Loading...</div>
        );
      }





  return (
    <div className="flex-row w-full ">
      <div className=" m-4 bg-gray-50 p-4 rounded-lg">
        <form onSubmit={addStore}>
          <div className="grid md:grid-cols-2 md:gap-6">
           
          <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                value={storeName}
                onChange={(e) => setstoreName(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label               
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Store Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                value={owner}
                onChange={(e) => setowner(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label               
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Owner Name
              </label>
            </div>

           
          </div>




          <div className="grid md:grid-cols-2 md:gap-6">
         
          <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
               
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>
            
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
              
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mobile
              </label>
            </div>

          </div>
     

      
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page