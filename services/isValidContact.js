const Joi = require("joi");
const { isNullOrUndefined } = require("util");

const schema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  id: Joi.string(),
  store_id: Joi.string().required(),
  store_location: Joi.string().required(),
  crm_qualifier: Joi.boolean().valid(true),
}).options({ stripUnknown: true });

const isValid = (contact, contactId , storeIdCrm) => {
    debugger
  if (contact.crm_qualifier === true) {
      debugger
    console.log(schema.validate(contact));
    debugger
    return schema.validate(contact);
    debugger
  } else if (contact.crm_qualifier === false ||contact.crm_qualifier === isNullOrUndefined) {
      debugger
    console.log("The contact " + contactId + " is not qualified to be sent to CRM.");
    return {error: true,};
  } else {
    console.log("Contact " + contactId + " could not be validated. Please ensure all required fields are present.");
    return {error: true,};
  }
};

module.exports = {
  isValid,
};