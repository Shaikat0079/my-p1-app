// export default function Todo({task,isDone}){
//     return (
//         <div>
//             <ul>
//                 <li>Task: {task} </li>
//                 <li>Task: {task} </li>
//                 <li>Task: {task} </li>
//             </ul>
//         </div>
//     )
// }

// export default function Todo({ task, isDone, time = 0 }) {
//     if (isDone)
//         return (
//             <ul>
//                 <li>Done: {task} Duration: {time}</li>
//             </ul>
//         )

//     return (
//         <ol>
//             <li>Do Now: {task}</li>
//         </ol>
//     )

// }

// export default function Todo({ task, isDone, time = 0 }) {
//     return isDone || <li>Not Done: {task} time: {time}</li>
// }

// export default function Todo({task,isDone}){
//     let listItem;
//     if(isDone){
//         listItem = <li>Done: {task}</li>
//     }else{
//         listItem = <li>Pending: {task}</li>
//     }

//     return listItem
// }