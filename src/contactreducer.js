

const Contactlist=(state=[], action)=>{
    let contactdata = Object.assign([] , state);
    if(action.type === "addaddress")
    {
        contactdata.push(action.details);
    }
    if(action.type === "removeaddress")
    {
        contactdata.splice(action.contactindex, 1);
    }
    return contactdata;
}
export default Contactlist;