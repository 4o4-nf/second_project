const catagory = require("../models/catagory");
const Catagory = require("../models/catagory");

exports.getCatagoryById = (req, res, next, id) => {
  Catagory.findById(id).exec((err, cate) => {
    if (err) {
      return res.status(400).json({
        error: "Catagory cannot find in DB",
      });
    }
    req.catagory = cate;
    next();
  });
};

exports.createCtagory = (req, res) => {
  const catagory = new Catagory(req.body);
  catagory.save((err, catagory) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save catagory in DB",
      });
    }
    res.json({catagory});
  });
};

exports.getCatagory = (req, res) => {
  return res.json(catagory)
}

exports.getAllCatagory = (req, res) => {
  Catagory.find().exec((err, items) => {
    if(err){
      return res.status(400).json({
        error: "No catagories found"
      })
    }
    res.json(items);
  })
}

//Updata catagory
exports.updateCtagory = (req, res) => {
  const catagory = req.catagory;
  catagory.name = req.body.name;

  catagory.save((err  , updataCatagory) => {
    if(err){
      return res.status(400).json({
        error: "Your catagory is updated"
      })
    }
    res.json(updataCatagory);
  })
}

//Remove catagory
exports.removeCtagory = (req, res) => {
  const catagory = req.catagory;

  catagory.remove((err, catagory) => {
    if(err){
      return res.status(400).json({
        error: "Failed to delete this catagory"
      })
    }
    res.json({
      message: `${catagory}` + "is successfull deleted"
    })
  })
}

