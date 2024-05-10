export default function POverFive({id, task, completed, priority}){

    if(priority > 5){
        return(
            <div>
          <div>id : {id}</div>
          <div>task : {task}</div>
          <div>completed : {completed.toString()}</div>
          <div>priority : {priority}</div>
          <div>-------------------</div>
            </div>
        )
    }
    else return;
    
}