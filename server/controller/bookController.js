const book = require("../model/book");
const appGet = async (req, res) => {
  try {
    const getData = await book.find(req.query);
    res.send(getData);
    console.log(req.query);
  } catch (error) {
    console.log(error);
  }
};
const appRemove = async (req, res) => {
  try {
    console.log(req.params);
    const deleteData = await book.deleteOne(req.params);
    res.send("Book data is deleted");
  } catch (error) {
    console.log(error);
  }
};
const appPut = async (req, res) => {
  try {
    const { version, released_data, book_name } = req.body;
    const checkifBookexist = await book.findOne({ book_name });
    if (checkifBookexist) {
      if (checkifBookexist.version !== version) {
        const updateBook = await book.updateOne({book_name},{ version , released_data});
      }
    }
    res.send("updated");
  } catch (error) {
    console.log(error);
  }
};

const appPost = async (req, res) => {
  try {
    const { book_name, book_author, book_publication, released_data, version } =
      req.body;
    const checkifBookexist = await book.find({ book_name });
    if (checkifBookexist) {
      res.send("Book already exist");
    } else {
      let bookData = new book({
        book_name,
        book_author,
        book_publication,
        released_data,
        version,
      });
      let result = await bookData.save();
      res.send("running successfully");
    }
    // console.log(result);
  } catch (error) {
    console.log(error);
  }

  // res.json(result)
};
module.exports = {
  appGet,
  appRemove,
  appPut,
  appPost,
};
