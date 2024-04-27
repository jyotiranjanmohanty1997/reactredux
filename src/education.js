

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Education = () =>{
    let[tenth, pickTenth]= useState("");
    let[twelth, pickTwelth]= useState("");
    let[graduation, pickGraduation]= useState("");
    let[postgraduation,pickPostgraduation]= useState("");

    let dispatch =useDispatch();
    const save =()=>{
        let eduinfo={edu1:tenth, edu2:twelth, edu3:graduation, edu4:postgraduation};
        let dispatchData = {details:eduinfo, type:"addedu"};
        dispatch(dispatchData);
        pickTenth(""); pickTwelth(""); pickGraduation(""); pickPostgraduation("");
    }
    let alledudetails = useSelector(state =>state.Edulist);

    const deleteEdu = (index)=>{
        let eduinfo = {eduindex:index, type:"removeedu"};
        dispatch(eduinfo);
    }
    return(
        <section className="container">
            <h2 className="text-center text-danger m-4"> Education Details : {alledudetails.length} </h2>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div className="m-3"> 10th Marks : </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="number" className="m-3" value={tenth} onChange={obj=>pickTenth(obj.target.value)}/></div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div className="m-3"> 12th Marks : </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="number" className="m-3" value={twelth} onChange={obj=>pickTwelth(obj.target.value)}/></div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div className="m-3"> Graduation Marks : </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="number" className="m-3" value={graduation} onChange={obj=>pickGraduation(obj.target.value)}/></div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div className="m-3"> Post Graduation Marks : </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="number" className="m-3" value={postgraduation} onChange={obj=>pickPostgraduation(obj.target.value)}/></div>
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
                                <th> 10th Mark </th>
                                <th> 12th Mark </th>
                                <th> Graduation Mark </th>
                                <th> Postgraduation Mark </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alledudetails.map((edu,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{edu.edu1}</td>
                                            <td>{edu.edu2}</td>
                                            <td>{edu.edu3}</td>
                                            <td>{edu.edu4}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={deleteEdu.bind(this,index)}>Delete</button>
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

export default Education;