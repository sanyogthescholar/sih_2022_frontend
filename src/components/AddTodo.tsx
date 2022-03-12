import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveTodo(e, formData)}>
      <div id="form">
          <h1 id="form-heading">Book Tickets</h1>
        <div>
          {/* <h3>Select the Heritage Site:</h3> */}

          <div id="box">
            <select
              name="monumentsnheritagesite"
              id="mnh "
              placeholder="Select"
              required
            >
              <option value="" disabled selected>
                {" "}
                Select the Heritage Site{" "}
              </option>
              <option value="taj_mahal">Taj Mahal</option>
              <option value="red_fort">Red Fort</option>

              <option value="Sun_Temple_Konark">Sun Temple Konark</option>
              <option value="">Jantar Mantar</option>
            </select>
          </div>
        </div>
        <div>
          <input
            onChange={handleForm}
            type="text"
            id="name"
            placeholder="Enter your Full Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            required
          ></input>
        </div>
        
          
          <div id="box2">
            <select className="Id_Selection" name="identityType" required
            >
              <option value="" disabled selected>
                {" "}
                Select Id {" "}
              </option>
              <option value="Passport">Passport</option>
              <option value="Pan Card">Pan Card</option>
              <option value="Driving License">Driving License</option>
              <option value="Voter Card">Voter Card</option>
            </select>
          
        </div>
        <div>
          <input
            type="text"
            id="no_of_children"
            placeholder="Enter Id number"
            required
          />
        </div>
        <div>
           
          <input type="text" id="no_of_adults" placeholder="Enter Number of Adults"  required/>
        </div>
        <div>
           
          <input type="text" id="no_of_children" placeholder="Enter Number of Children" required/>
        </div>

        <button disabled={formData === undefined ? true : false}><b>Buy</b></button>
      </div>
    </form>
  );
};

export default AddTodo;
