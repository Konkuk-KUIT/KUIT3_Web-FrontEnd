export default function Completed({ id, task, completed, priority }){
    if(completed == true){
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