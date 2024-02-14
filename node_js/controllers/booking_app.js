const User = require('../models/user');


exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const emailAdd = req.body.emailAdd;
  const phoneNo = req.body.phoneNo;
 
  // const product = new User(null, name, emailAdd, description, phoneNo);
  User.create({
    name:name,
    emailAdd:emailAdd,
    phoneNo:phoneNo
   
  })  
   .then((users) => {
    return res.status(200).json({
      status: true,
      data: users,
    });
  })
  .catch((err) => {
    return res.status(500).json({
      status: false,
      error: err,
    });
  });
 
};


exports.postEditUser = (req, res, next) => {

  const id = req.body.id;

  const name = req.body.name;
  const emailAdd = req.body.emailAdd;
  const phoneNo = req.body.phoneNo;
  
  // const product = new User(id, name, emailAdd, description, phoneNo);

  User.update({
    name:name,
    emailAdd:emailAdd,
    phoneNo:phoneNo
  
  }, { where: { id: id } })
    .then((users) => {
    return res.status(200).json({
      status: true,
      data: users,
    });
  })
  .catch((err) => {
    return res.status(500).json({
      status: false,
      error: err,
    });
  });

};

exports.postDeleteUser = (req, res, next) => {
  const id = req.body.id;
  User.findByPk(id)
  .then((users) => {
    return res.status(200).json({
      status: true,
      data: users,
    });
  })
  .catch((err) => {
    return res.status(500).json({
      status: false,
      error: err,
    });
  });
   
};
exports.getUsers = (req, res, next) => {
  User.findAll()   
  .then((users) => {
    return res.status(200).json({
      status: true,
      data: users,
    });
  })
  .catch((err) => {
    return res.status(500).json({
      status: false,
      error: err,
    });
  });
};
