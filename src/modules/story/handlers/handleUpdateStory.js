const Story = require("../dbSchema");
const updateStory = require("../domain/updateStory");

/**
 * This is a handler for finding story
 * @param {*} req
 * @param {*} res
 */
const handleUpdateStory = async (req, res) => {
  const { id } = req.params;
  const update = updateStory(req.body)
  const story = await Story.findByIdAndUpdate(id,update);

  // Sending Story
  res.status(200).json({
    data: story,
    error: { code: null, message: null },
  });
};

module.exports = handleUpdateStory;
