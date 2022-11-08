const formFields = (contact, contactId ,storeIdCrm ) => {
    return  {
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        id: contactId.toString(),
        postal_code: postal_code,
        phone: contact.phone,
        store_id: storeIdCrm
    }
}

module.exports = {
    formFields,
};