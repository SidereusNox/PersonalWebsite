module.exports.get = async function(req, res, next){
    console.log(req);
    res.json("Server running...");
}