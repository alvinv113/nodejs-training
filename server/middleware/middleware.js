const middleware = (req, res, next) => {
  const emailregex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const phone= /^[6-9]\d{9}$/gi
  const email= req.body.email;
  const number= req.body.phone;
  if( !phone.test(number) || !emailregex.test(email)){
      res.send('wrong inputs');
  }
  else{
  next();
  }
};

module.exports = middleware;
