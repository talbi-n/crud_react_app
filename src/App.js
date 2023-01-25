import React, { useEffect, useState } from "react";
import Items_list from "./component/Items_list";
import Form_add from "./component/Form_add";
function App() {
  const [items, setItems] = useState({
    cources: [
      { name: "HTML" },
      { name: "JAVA" },
      { name: "CSS" }],
    courrent: ''
  })
  const { cources } = items;
  const number_of_items = items.cources.length;
  const listCources = number_of_items > 0 ? (cources.map((item, index) => { return <Items_list update_item={update_item} delete_item={delete_item} key={index} index={index} details={item} /> })) : <p className="ml-4 text-light"> no cources available</p>
  //function add item
  function add(e, name) {
    e.preventDefault();
    let courses_i = items.cources;
    courses_i.push({ name: name })
    setItems({ cources: courses_i })
  }
  //function delete item
  function delete_item(e, index) {
    e.preventDefault();
    let courses_i = items.cources;
    courses_i.splice(index, 1);
    setItems({ cources: courses_i })

  }
  function update_item(e, index, name) {
    e.preventDefault();
    let courses_i = items.cources;
    courses_i[index].name = name
    setItems({ cources: courses_i })
  }
  return (
    <div className="container">
      <div className="card  mb-5 mt-5 mx-auto bg-dark text-secondary-emphasis" style={{ width: "60rem" }}>
        <div className="card-body">
          <h5 className="card-title text-white-50">CRUD App </h5>
          <p className="card-text text-white-50 ">Some quick example in react with  CRUD .</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <Form_add add={add} /></li>

          {listCources}
        </ul>

      </div>

    </div>
  );
}

export default App;
