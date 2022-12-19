const Subscriber = require("../models/subscribe");

const addSubscriber = async (req, res) => {
  const { email, name } = req.body;
  try {
    const isExist = await Subscriber.findOne({ email, name });
    if (isExist)
      return res.status(200).json({ msg: "You're already a subscriber 💝" });

    await Subscriber.create({ name, email });
    res.status(200).json({ msg: "Now, You're a Subscriber 💝" });
  } catch (err) {
    res.status(400).json({ msg: "Sorry we couldn't subscribe you" });
  }
};

const getSubscribers = async (req, res) => {
  const filters = req.query;

  try {
    const subscribers = await Subscriber.find(filters, {
      _id: 0,
      __v: 0,
      updatedAt: 0,
    });

    res
      .status(200)
      .json({ msg: "All Messages are Here 😃", data: subscribers });
  } catch (err) {
    res.status(400).json({ msg: "Error happened" });
  }
};

module.exports = { addSubscriber, getSubscribers };
