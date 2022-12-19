const Message = require("../models/message");
const Subscriber = require("../models/subscribe");

const addMessage = async (req, res) => {
  const { email, name, phone: testPhone, subject, message } = req.body;
  const phone = parseInt(testPhone);

  try {
    await Message.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // if the subscriber is already exist
    const isExist = await Subscriber.findOne({ name, email });
    if (!isExist) await Subscriber.create({ name, email, phone });
    else await Subscriber.updateOne({ email, name }, { $set: { phone } });

    res
      .status(200)
      .send(`<script>window.location.pathname = "/thanks"</script>`);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .send(`<script>window.location.pathname = "/error"</script>`);
  }
};

const getMessages = async (req, res) => {
  const filters = req.query;

  try {
    const emails = await Message.find(filters, {
      _id: 0,
      __v: 0,
      updatedAt: 0,
    });

    res.status(200).json({ msg: "All Messages are Here 😃", data: emails });
  } catch (err) {
    res.status(400).json({ msg: "Error happened" });
  }
};

module.exports = { addMessage, getMessages };
