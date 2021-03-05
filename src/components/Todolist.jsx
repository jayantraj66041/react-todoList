import React, {useState} from 'react';
import Data from '../Data';

const Todolist = () => {
    const [list, setList] = useState(Data);
    const [todo, setTodo] = useState("");
    const insertData = () => {
        // alert(todol);
        let newTodo = [...list, {id:list.length+1, title: todo}];
        setList(newTodo);
        setTodo("");
    }
    const deleteData = (id) => {
        setList(list.filter(x => x.id != id));
    }
    return (
        <div>
        <div className="d-flex my-4 btn-group">
            <input type="text" placeholder="Add your Work" className="form-control form-control-lg" onChange={(e)=>setTodo(e.target.value)} value={todo} autoFocus/>
            <button className="btn btn-success px-4" onClick={()=>insertData()}>Add</button>
        </div>
        <div className="list-group">
            {
                list.map(value => (
                    <div className="list-group-item list-group-item-action">{value.id}) {value.title}
                    <button onClick={()=>deleteData(value.id)} className="float-end btn btn-link text-danger">
                        <i class="bi bi-trash"></i>
                    </button>
                    </div>
                ))
            }
        </div>
        </div>
    );
}
export default Todolist;