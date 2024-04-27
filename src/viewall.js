
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Viewall =()=>{
    let allbasic = useSelector(state =>state.Basiclist);
    let allcontact = useSelector(state=>state.Contactlist);
    let alledudetails = useSelector(state =>state.Edulist);
    let allExpdetails = useSelector(state =>state.Explist);
    return(
        <section className="container">
        <h2 className="text-center text-danger m-4"> View Details </h2>
            <div className="row text-center">
                <div className="col-lg-5">
                    <h3 className="text-success m-4">Basic Details : {allbasic.length}</h3>
                    <table className="table table-bordered text-center p-3 mt-2 mb-5">
                        <thead className="bg-info">
                            <tr>
                                <th> Sl No.</th>
                                <th> Name </th>
                                <th> Mobile No. </th>
                                <th> Email Id </th>
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
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                    <h3 className="text-center text-success m-4"> Education Details : {alledudetails.length} </h3>
                    <table className="table table-bordered text-center p-3 mt-2">
                        <thead className="bg-info">
                            <tr>
                                <th> Sl No.</th>
                                <th> 10th Mark </th>
                                <th> 12th Mark </th>
                                <th> Graduation Mark </th>
                                <th> Postgraduation Mark </th>
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
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-5">
                    <h3 className="text-center text-success m-4"> Address Details : {allcontact.length} </h3>
                    <table className="table table-bordered text-center p-3 mt-2 mb-5">
                        <thead className=" bg-info">
                            <tr>
                                <th> Local Address </th>
                                <th> Permanent Address </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allcontact.map((contact,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{contact.local}</td>
                                            <td>{contact.permanent}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                    <h3 className="text-center text-success m-4"> Experience Details : {allExpdetails.length}</h3>
                    <table className="table table-bordered text-center p-3 mt-2">
                        <thead className="bg-info">
                            <tr>
                                <th> Sl No.</th>
                                <th> Company Name </th>
                                <th> Project </th>
                                <th> Experience </th>
                                <th> Skills </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allExpdetails.map((exp,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{exp.company}</td>
                                            <td>{exp.project}</td>
                                            <td>{exp.experience}</td>
                                            <td>{exp.skill}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Viewall;