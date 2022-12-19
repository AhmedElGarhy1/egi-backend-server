const egiKey = process.env.EGI_KEY;
const devKey = process.env.DEV_KEY;

function authAdmin(req, res, next) {
  const { authorization } = req.headers;

  try {
    const key = authorization.slice(7).toLowerCase();

    if (!key || (key !== egiKey && key !== devKey)) throw Error("error");

    next();
  } catch (err) {
    res.status(401).json({
      status: 401,
      msg: "Sorry but who are you?! you need to have a valid key",
    });
  }
}

module.exports = { authAdmin };
