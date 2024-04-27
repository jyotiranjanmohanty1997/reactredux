



const Explist=(state=[], action)=>{
    let expdata = Object.assign([] , state);
    if(action.type === "addexp")
    {
        expdata.push(action.details);
    }
    if(action.type === "removeexp")
    {
        expdata.splice(action.expindex, 1);
    }
    return expdata;
}
export default Explist;