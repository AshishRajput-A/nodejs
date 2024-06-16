import User from "../model/user.model.js";

const about = async (req, res) => {
  res.send("i am about page");
};

const createdata = async (req, res) => {
  try {
    const data = new User(req.body);

    const result = await data.save();

    res.status(201).json({
      success: true,
      massage: "insertdata successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      meaage: err.message,
    });
  }
};

const getdata = async (req, res) => {
  try {
    const data = await User.find({});

    res.status(200).send(`<h1>${data} ,total data = ${data.length}</h1>`);
  } catch (error) {
    res.status(400).json({
      success: false,
      meaage: error.message,
    });
  }
};

const updatedata = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateone = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updateone,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deletedata = async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: data,
      message: "Data deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "error in delete data",
    });
  }
};

const getonedata = async (req, res) => {
  try {
    const _id = req.params.id;

    const getone = await User.findById(_id);

    if (getone) {
      res.status(201).send(getone);
    } else {
      res
        .status(501)
        .json({ success: false, message: "objectID data not found. " });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { about, createdata, getdata, updatedata, getonedata, deletedata };
