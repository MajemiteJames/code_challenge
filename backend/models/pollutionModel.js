import mongoose from "mongoose";

const pollutionSchema = mongoose.Schema(
  {    
    ts: {
      type: Date,
      required: true,
    },
    aqius: {
      type: Number,
      required: true,
    },
    mainus: {
      type: String,
      required: true,
    },
    aqicn: {
      type: Number,
      required: true,
    },
    maincn: {
      type: String,
      required: true,
    },
},
  {
    timestamps: true,
  }
);

const Pollution = mongoose.model("Pollution", pollutionSchema);

export default Pollution;