



const Edulist=(state=[], action)=>{
    let edudata = Object.assign([] , state);
    if(action.type === "addedu")
    {
        edudata.push(action.details);
    }
    if(action.type === "removeedu")
    {
        edudata.splice(action.eduindex, 1);
    }
    return edudata;
}
export default Edulist;