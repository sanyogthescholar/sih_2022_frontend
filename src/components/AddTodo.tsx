import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITicket | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITicket | {}>();

  const handleForm = (e: any): void => {
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
              onChange={handleForm}
              name="site_name"
              id="site_name"
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
            name="visitor_name"
            id="visitor_name"
            placeholder="Enter your Full Name"
            required
          />
        </div>
        <div>
          <input
            onChange={handleForm}
            type="email"
            id="visitor_email"
            name="visitor_email"
            placeholder="Enter your Email"
            required
          ></input>
        </div>

          <div id="box2">
            <select id="visitor_id" className="Id_Selection" onChange={handleForm} name="visitor_id" required
            >
              <option value="" disabled selected>
                {" "}
                Select ID {" "}
              </option>
              <option value="Passport">Passport</option>
              <option value="Pan Card">Pan Card</option>
              <option value="Driving License">Driving License</option>
              <option value="Voter Card">Voter Card</option>
            </select>

        </div>
        <div>
          <input
            onChange={handleForm}
            name="visitor_id_number"
            type="text"
            id="visitor_id_number"
            placeholder="Enter ID number"
            required
          />
        </div>
        <div id="box2">
            <select id="time_slot" onChange={handleForm} className="time_slot" name="time_slot" required
            >
              <option value="" disabled selected>
                {" "}
                Select Time {" "}
              </option>
              <option value="morning">Morning(8am to 11am)</option>
              <option value="afternoon">Afternoon(12pm to 4pm)</option>
              <option value="evening">Evening(5pm to 7pm)</option>
            </select>
          
        </div>
        <div>
           
          <input onChange={handleForm} type="number" min="0" id="num_adults" placeholder="Enter Number of Adults"  required/>
        </div>
        <div>
           
          <input onChange={handleForm} type="number" min="0" id="num_children" placeholder="Enter Number of Children" required/>
        </div>

        <button disabled={formData === undefined ? true : false}><b>Buy</b></button>
      </div>
    </form>
  );
};

export default AddTodo;
