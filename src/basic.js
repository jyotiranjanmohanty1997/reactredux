
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Basic = () =>{
    let[name, pickName]= useState("");
    let[mobile, pickMobile]= useState("");
    let[email, pickEmail]= useState("");

    let dispatch =useDispatch();
    const save =()=>{
        let basicinfo={name:name, mobile:mobile, email:email};
        let dispatchData = {details:basicinfo, type:"addbasic"};
        dispatch(dispatchData);
        pickName(""); pickMobile(""); pickEmail("");
    }
    let allbasic = useSelector(state =>state.Basiclist);

    const deletebasic = (index)=>{
        let basicinfo = {basicindex:index, type:"removebasic"};
        dispatch(basicinfo);
    }
    return(
        <section className="container">
            <h2 className="text-center text-danger m-4">Basic Details : {allbasic.length} </h2>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-2 text-center">
                    <div className="m-3"> Name : </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="text" className="m-3" onChange={obj=>pickName(obj.target.value)}/></div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-2 text-center">
                    <div className="m-3"> Mobile : </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="number" className="m-3" onChange={obj=>pickMobile(obj.target.value)}/></div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-2 text-center">
                    <div className="m-3"> Email : </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="email" className="m-3" onChange={obj=>pickEmail(obj.target.value)}/></div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="text-center m-4">
                <button className="btn btn-primary" onClick={save}>Save</button>
            </div>

            <div className="row m-5">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <table className="table table-bordered text-center p-3">
                        <thead className="bg-info">
                            <tr>
                                <th> Sl No.</th>
                                <th> Name</th>
                                <th> Mobile No.</th>
                                <th> Email Id</th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allbasic.map((basic,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{basic.name}</td>
                                            <td>{basic.mobile}</td>
                                            <td>{basic.email}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={deletebasic.bind(this,index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </section>
    )
}

export default Basic;