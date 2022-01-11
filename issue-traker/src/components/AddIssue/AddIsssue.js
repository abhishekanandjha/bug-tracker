import React from "react";
import "./AddIssue.css";

function AddIssue() {

  return (
    <div className="add-issue">
        <form>
          <label>
            Discription
            <input type="text" placeholder="Description of issue..."/>
            </label>
            <label>
              Assign To
              <select name="forDev" id="forDev">
                <option value="Ron">Ron</option>
                <option value="Morten">Morten</option>
                <option value="Sera">Sera</option>
                <option value="Divyansh">Divyansh</option>
              </select>
            </label>
            <label>
              Priority
              <select name="priority" id="priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </label>
            <button type="submit">
              Add
            </button>
        </form>
      
    </div>
  );
}

export default AddIssue;
