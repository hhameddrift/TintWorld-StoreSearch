const { storeGetter } = require("./getStore");
const { updateContact } = require("./updateContact");
const { getAttributes } = require("./getContact");


const mainService = async (convoId, authorId) => {
  try {
    const contactAttributes = await getAttributes(authorId);
    const orderStatus = await storeGetter(contactAttributes);
    await updateContact(authorId, orderStatus);

  } catch (err) {
    console.log("mainService: Store info processing error: ");
    console.log(err);
  }
};

module.exports = {
  mainService,
};
