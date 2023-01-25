import React ,{useState} from "react";
function Items_list(props) {
  const [isEdit,setIsEdit]=useState(false);
  const [newValue,setnewValue]=useState("");

  function toggleEdit(){
    
      setIsEdit(!isEdit)
    
    
  }
  function renderCourse() {
    return (
      <li className="list-group-item" >
        {props.details.name}
        <button className="float-right btn btn-danger" onClick={(e) => props.delete_item(e, props.index)}>Delete</button>
        <button className="float-right btn btn-success mr-3" onClick={(e) => toggleEdit()}>Update</button>

      </li>
    )
  }
  function UpdateCourse() {
    return (

      <li className="list-group-item" >
        
        <form className="form-inline">
          <input type="text" className="w-75 mr-5 form-control" placeholder={props.details.name} onChange={(e)=>setnewValue(e.target.value)} />
          <button className="ml-5 btn btn-info"  onClick={(e)=> {console.log("------",e.target.value);props.update_item(e,props.index,newValue);toggleEdit()}}>update</button>

        </form>

      </li>
    )
  }

  return (
    <React.Fragment > 
      {isEdit ? UpdateCourse() :renderCourse() }
    </React.Fragment>
  );
}

export default Items_list;
