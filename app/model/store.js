
import mongoose from "mongoose";

const StoreSchema = mongoose.Schema({
    
    

    storeName: {
        type:String,
     
    },
    owner: {
        type:String,
    
    },
    address: {
        type:String,

    },

    mobile: {
        type:String,

    },

    

},{

    timestamps: true,

});



export default mongoose.models.Store || mongoose.model('Store', StoreSchema);