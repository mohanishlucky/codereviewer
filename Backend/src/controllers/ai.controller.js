const aiService=require("../services/ai.service")

module.exports.getReview=async(req,res)=>{
    // const prompt=req.query.prompt; //use when get
  const code=req.body.code;  // use post
    if(!code){
        return res.status(400).send("Prompt is required");
    }

    const response=await aiService(code);

    res.send(response);
}