
const Basiclist =(state=[], action)=>{
    let basicdata = Object.assign([] , state);
    if(action.type === "addbasic")
    {
        basicdata.push(action.details);
    }
    if(action.type === "removebasic")
    {
        basicdata.splice(action.basicindex, 1);
    }
    return basicdata;
}
export default Basiclist;