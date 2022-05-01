import React from 'react';
import "./EmploeersAddForm.css";

const EmploeersAddForm = () => {
  return (
    <div className="app-add-form">
            <h3>Add new employees</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="What his name?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary ?" />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
  )
}

export default EmploeersAddForm