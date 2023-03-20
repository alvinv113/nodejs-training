const post = (req, res, next) => {
  const { book_name, book_author, book_publication, released_data, version } =
    req.body;
  if (
    !book_name ||
    !book_author ||
    !book_publication ||
    !released_data ||
    !version
  ) {
    res.send("Invalid Book details !");
  } else {
    next();
  }
};

const remove = (req, res, next) => {
  const { book_name, book_author } = req.body;
  if (!book_name || !book_author) {
    res.send("Details dosesn exist");
  } else {
    next();
  }
};

const update = (req, res, next) => {
  const { version } = req.body;
  if (!version) {
    res.send("version is not valid");
  } else {
    next();
  }
};

module.exports = {
  post,
  update,
  remove,
};
