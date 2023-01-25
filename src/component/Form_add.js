import React, { useEffect, useState } from "react";
function Form_add(props) {
  const [name, setName] = useState('');

  return (
    <form onSubmit={(e)=>{e.preventDefault();name !=""? props.add(e,name):alert("name must not empty")}}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Add New course</label>
    <input type="text" className="form-control" placeholder="name" onChange={(e)=> setName(e.target.value)} />
  </div>
  
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
  );
}

export default Form_add;
