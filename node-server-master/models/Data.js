import mongoose from "mongoose";

 const dataSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      subpage:{
        banner:{
          type:String,
          required:true,
        },
        back:{
          type:String,
          required:true,
        },
        title:{
          type:String,
          required:true,
        },
        text:{
          type:String,
          required:true,
        },
        text2:{
          type:String,
          required:true,
        },
      },

      subimg:{
        img:{
          type:[String],
          required:true,
        },
        text:{
          type:[String],
          required:true,
        },
      },
       text:{
        type:String,
        required:true,
      },
 })

 const Data = mongoose.model("data", dataSchema);

 export default Data;
