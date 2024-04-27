
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Contactlist from "./contactreducer";

const Contact = () =>{
    let[local,pickLocal]=useState("");
    let[permanent,pickPermanent] = useState("");

    let dispatch = useDispatch();
    const save=()=>{
        let contactinfo={local, permanent};
        let dispatchData ={details:contactinfo, type:"addaddress"}
        dispatch(dispatchData);
        pickLocal("");pickPermanent("");
    }
    let allcontact = useSelector(state=>state.Contactlist);
    
    const deletecontact = (index)=>{
        let contactinfo = {contactindex:index, type:"removeaddress"};
        dispatch(contactinfo);
    }
    return(

        <section className="container">
            <h2 className="text-center text-danger m-4"> Address Details : {allcontact.length}</h2>
            <div className="row text-center">
                <div className="col-lg-2"></div>
                <div className="col-lg-4">
                    <textarea placeholder="Local Address" rows="8" cols="50" value={local} onChange={obj=>{pickLocal(obj.target.value)}}></textarea>
                </div>
                <div className="col-lg-4">
                    <textarea placeholder="Permanent Address" rows="8" cols="50" value={permanent} onChange={obj=>{pickPermanent(obj.target.value)}}></textarea>
                </div>
                <div className="col-lg-2"></div>
            </div>
            <div className="row m-5">
                <div className="col-lg-12 text-center">
                    <button className="btn btn-primary" onClick={save}>Save</button>
                </div>
            </div>
            <div className="row m-4">
            <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <table className="table table-bordered text-center">
                        <thead className=" bg-info">
                            <tr>
                                <th> Local Address </th>
                                <th> Permanent Address </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allcontact.map((contact,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{contact.local}</td>
                                            <td>{contact.permanent}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={deletecontact.bind(this,index)}><i class="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-lg-2"></div>
        </section>
    )
}

export default Contact;