
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Experience =()=>{

    let[company, pickCompany]= useState("");
    let[project, pickProject]= useState("");
    let[experience, pickExperience]= useState("");
    let[skill, pickSkill]= useState("");

    let dispatch =useDispatch();
    const save =()=>{
        let expinfo={company:company, project:project, experience:experience, skill:skill};
        let dispatchData = {details:expinfo, type:"addexp"};
        dispatch(dispatchData);
        pickCompany(""); pickProject(""); pickExperience(""); pickSkill("");
    }
    let allExpdetails = useSelector(state =>state.Explist);

    const deleteExp = (index)=>{
        let expinfo = {expindex:index, type:"removeexp"};
        dispatch(expinfo);
    }
    return(
        <section className="container">
            <h2 className="text-center text-danger m-4"> Experience Details : {allExpdetails.length}</h2>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div className="m-3"> Total No. Of Company Worked : </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="number" className="m-3" value={company} onChange={obj=>pickCompany(obj.target.value)}/></div>
                </div>
                <div className="col-lg-3"></div>
            </div>                  
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div className="m-3">  Total Project Worked :  </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="number" className="m-3" value={project} onChange={obj=>pickProject(obj.target.value)}/></div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div className="m-3">  Total Years Of Experience :  </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="number" className="m-3" value={experience} onChange={obj=>pickExperience(obj.target.value)}/></div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div className="m-3">  Technical Skills :   </div>
                </div>
                <div className="col-lg-3">
                    <div><input type="text" className="m-3" value={skill} onChange={obj=>pickSkill(obj.target.value)}/></div>
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
                                <th> Company Name </th>
                                <th> Project </th>
                                <th> Experience </th>
                                <th> Skills </th>
                                <th> Action </th>
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
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={deleteExp.bind(this,index)}>Delete</button>
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
      /*  <section className="container">
            <h2 className="text-center text-danger m-4">Basic Details : {allbasic.length} </h2>
            
            
            
            

            
        </section>*/
    )
    
}

export default Experience;

