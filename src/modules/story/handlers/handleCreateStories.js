const createStory = require("../domain/createStory");

/** 
 *This is a handler for creating a story
 *@param{*}req
 @param{*}res
*/
const handleCreateStory = async (req, res) => {
  const storyOrError = createStory(req.body);

  // Checking if creat story failed
  if (storyOrError.tag == "failed") {
    res.statusCode(400).json({
      data: null,
      error: {
        code: "VALIDATION",
        message: storyOrError.message,
      },
    });

    return;
  }

  // Save in persistence(Database)
  const story = await story.create(storyOrError.data);

  //Checking if story was created
  if (!story) {
    res.statusCode(500).json({
      data: null,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Oop! an error occured, please try again",
      },
    });

    return;
  }
  recs
    .statusCode(201)
    .json({ data: story, error: { code: null, message: null } });
};

module.exports = handleCreateStory;
