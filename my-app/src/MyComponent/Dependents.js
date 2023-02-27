import React, { useState } from 'react'

export default function Dependents() {
  let [array,setArray]=useState([])
  let [inputdata, setInputdata]=useState({fullname:"", rel:"", date:"", occ:""})
  let [index, setIndex]=useState()
  
  

  function data(e){
    setInputdata({...inputdata,[e.target.name]:e.target.value})
  }

let{fullname,rel,date,occ}=inputdata;
function addinputdata(){
   setArray([...array,{fullname,rel,date,occ}])
   //console.log(inputdata)
   setInputdata({fullname:"", rel:"", date:"", occ:""})
}
//console.log(array,"total array")


//delete row
function deletedata(i){
   console.log(i, "this row want to delete")
   let total=[...array]
   total.splice(i,1)
   setArray(total)
  }

// updating data
//function updatedata(i){
  //let {fullname,rel,date,occ}=array[i]
  //setInputdata({fullname,rel,date,occ})
  //setBolin(true)
//}


  return (
    
<>
<h4 className='text-left p-3'><i>Dependents</i></h4>
      
<div className='container-fluid p-3'>
<button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">+NEW</button>
   
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-white" id="exampleModalLabel">Add FamilyInfo Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="fullname" class="col-form-label">Full Name</label>
            <input type="text" name="fullname" value={inputdata.fullname || ""} class="form-control" id="school" onChange={data} />
            <label for="rel" class="col-form-label">Relationship</label>
            <input type="text" name="rel"  value={inputdata.rel || ""} class="form-control" id="degree"  onChange={data}/>
            <label for="date" class="col-form-label">DOB</label>
            <input type="date" name="date"  value={inputdata.date || ""} class="form-control" id="grade"  onChange={data} />
            <label for="occ" class="col-form-label">Occupation</label>
            <input type="text" name="occ" value={inputdata.occ || ""} class="form-control" id="poy"  onChange={data} />
          </div>
        </form>
      </div>
      <div class="modal-footer shadow-lg bg-dark">
        <button type="reset" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
        <button type="submit" onClick={addinputdata} class="btn btn-outline-light">Submit</button>
      </div>
    </div>
  </div>
</div>        
</div>

<div className='container-fluid'>
<div class="table-responsive">
  <table class="table table-bordered">
  <thead className='text-center'>
    <tr>
      <th scope="col">Full Name</th>
      <th scope="col">Relationship</th>
      <th scope="col">DOB</th>
      <th scope="col">Occupation</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
    {
      array && array.map( 
        (item,i)=>{
        return(
          <tr key={i}>
            <td>{item.fullname}</td>
            <td>{item.rel}</td>
            <td>{item.date}</td>
            <td>{item.occ}</td>
            <td><button class="btn btn-outline-dark">Update</button></td>
            <td><button onClick={() => deletedata(i)} class="btn btn-outline-dark">Delete</button></td>
          </tr>
        )
       }
      )
    }
 
  </thead>
  </table>
</div>
</div>

    </>
    
      )
}
