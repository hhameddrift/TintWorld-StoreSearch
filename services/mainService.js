const { storeGetter } = require("./getStore");
const { storeGetterCRM } = require("./getStorePostContactCrm");
const { updateContact } = require("./updateContact");
const { getAttributes } = require("./getContact");
const {getConversation} = require("./getConversation")
const {getContact} = require("./getContactCRM")
const {isValid} = require("./isValidContact")




// ------------------------ button_clicked event ------------------
const mainService = async (convoId, authorId) => {
  try {
    // Get contact attributes
    const contactAttributes = await getAttributes(authorId);

    // Get store information
    const orderStatus = await storeGetter(contactAttributes);

    // Update contact attributes with 3 stores information
    await updateContact(authorId, orderStatus);

  } catch (err) {
    console.log("mainService: Store info processing error: ");
    console.log(err);
  }
};
// -------------------- conversation_push event ---------------------
const postContactCRM = async (convoId) => {
  try {
    // retrive full conversation object
    const convoObject = await getConversation(convoId)

    // store contactId from the conversation object
    const contactId = convoObject.data['contactId']

    // get/store contact attributes 
    const contact = await getContact(contactId)

     // get storeId
     const contactAttributes = await getAttributes(authorId);
     const storeIdCrm = await storeGetterCRM(contactAttributes);

    // Validate contact fields
    const validated = isValid(contact, contactId ,storeIdCrm )

    if (!validated.error) {

      const fields = formFields(contact, contactId , storeIdCrm) 

      const postTheData = await postContact(fields)
            console.log(postTheData)
    }

  } catch (err) {
    console.log("mainService: Store info processing error: ");
    console.log(err);
  }
};


module.exports = {
  mainService,
  postContactCRM
};
