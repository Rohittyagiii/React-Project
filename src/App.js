 import React from "react";
 import GoalList from "./components/GoalList"
 import NewGoal from "./components/NewGoal";
 import "./App.css";

function App() { 
  const courseGoals = [
    {id:'cg1', text:'Finish the Course'},
    {id:'cg2', text:'Learn all about the Course Main Topic'},
    {id:'cg3', text:'Help other students in the Course Q&A'},
  ]
   
    const addNewGaolHandler = (newGoal) =>{
        courseGoals.push(newGoal);
        console.log(courseGoals);
        
    }
  return (
  <div className="course-goals"> 
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGaolHandler}/>
    <GoalList goals={courseGoals}/>
  </div>
);
}

export default App;
