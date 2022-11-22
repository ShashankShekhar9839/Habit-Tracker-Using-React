import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";

const Habit = ({habit}) => {
  const today=new Date();
  const todayDay=today.getDay();

  //loop for getting habit done count
 
  
  // call use navigate hook from react-router-dom in a navigate varriable 
  const navigate=useNavigate();

  // call use dispatch hook a variable call dispatch
  const dispatch=useDispatch();

  // function call after click delete button on habit list
  const handleDelete=()=>{
    dispatch(deleteHabit(habit.id));
    alert("your habit deleted successfully")
  }

  // this function call after click week view button
  // this function used for set current habit id to localstorage and navigate to weekview page
  const setId=()=>{
    localStorage.setItem("id",habit.id)
    navigate("/week-view");
  }

  
  return (

    // creating card for new habits

    <div className="habit">
      <div className="habit-left">
        <div>
          <h4 style={{textTransform:"capitalize"}}>{habit.name}</h4>
        
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          Detail
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;