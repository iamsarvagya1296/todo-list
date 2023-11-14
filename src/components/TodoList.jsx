import { useState, useEffect } from "react";

function TodoList() {
  // create array of task then list it in the tbody
  // const arr = ["reading","writing","running" , "gaming"]

  const [task, setTask] = useState(JSON.parse(localStorage.getItem("todo-list")) || []);
  const [taskInput, setTaskInput] = useState("");
  const [isEdit, setEdit] = useState(false)
  const [editId,setEditId] = useState(null)

  const handleEditClick = (ele,id) => {
    setEdit(true)
    setEditId(id)
    setTaskInput(ele)
    // console.log(id);
  };

  const handleDeleteClick = (id) => {
    let arr = task.filter((ele, index) => {
      return index !== id;
    });
    setTask(arr);
  };

  const handleChange = (e) => {
    // [m , mo , moh , mohi, mohit]
    // [mohit]
    // setTask([...task,e.target.value])  - wrong
    setTaskInput(e.target.value);
  };
 
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(task));
  }, [task])

  const handleAddClick = (e) => {
    if(isEdit) {
       let arr =  task.map((ele,index)=>{
            if(index === editId ){
                ele=taskInput
            }
            return ele
        })

        setTask(arr)
        setTaskInput("")
        setEditId(null)
        setEdit(false)

    }else{
        setTask([...task, taskInput]);
        setTaskInput("");
    }
    
    
  };

  //  input = d
  // task = [d]
  //do
  // task = [d,do]
  // task = [do]

  const showTask = task.map((ele, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{ele}</td>
        <td>
          <button
            className=" bg-blue-500 text-white px-2"
            onClick={() => handleEditClick(ele,index)}
          >
            {" "}
            Edit
          </button>
          <button
            className="bg-green-500 text-white px-2 ml-1"
            onClick={() => handleDeleteClick(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  // [
  //   <tr>
  //     <td>1</td>
  //     <td>Mohit</td>
  //     <td><button className=' bg-blue-500 text-white px-2 ' > Edit</button>
  //     <button className='bg-green-500 text-white px-2 ml-1'>Delete</button></td>
  //     </tr>,
  //     <tr>
  //     <td>1</td>
  //     <td>Mohit</td>
  //     <td><button className=' bg-blue-500 text-white px-2 ' > Edit</button>
  //     <button className='bg-green-500 text-white px-2 ml-1'>Delete</button></td>
  //     </tr>,
  //     <tr>
  //     <td>1</td>
  //     <td>Mohit</td>
  //     <td><button className=' bg-blue-500 text-white px-2 ' > Edit</button>
  //     <button className='bg-green-500 text-white px-2 ml-1'>Delete</button></td>
  //     </tr>
  // ]

  return (
    <div className="w-full h-screen flex justify-center p-10 bg-blue-400">
      <div className="w-[400px]">
        <input
          type="text"
          value={taskInput}
          placeholder="Enter Task here"
          onChange={handleChange}
          className="w-full p-4 text-center outline-none"
        />
        <button onClick={handleAddClick}>Add</button>
        <div className="">
          <table className="w-full mt-5 bg-white p-2 ">
            <thead className="border-b-2 text-center ">
              <tr>
                <td>Sno.</td>
                <td>Task</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* <tr>
     <td>1</td>
     <td>Have to do</td>
      <td><button className=' bg-blue-500 text-white px-2 '>Edit</button>
     <button className='bg-green-500 text-white px-2 ml-1'>Delete</button></td>
     </tr>

     <tr>
     <td>2</td>
     <td>2nd task</td>
     <td><button className=' bg-blue-500 text-white px-2' > Edit</button>
     <button className='bg-green-500 text-white px-2 ml-1'>Delete</button></td>
     </tr>

     <tr>
     <td>3</td>
     <td>3rd task</td>
     <td><button className=' bg-blue-500 text-white px-2 ' > Edit</button>
     <button className='bg-green-500 text-white px-2 ml-1'>Delete</button></td>
     </tr> */}

              {showTask}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
