import React, {useState} from 'react';
import Data from '../Data';

const Todolist = () => {
    const [list, setList] = useState(Data);
    return (
        <div className="list-group">
            {
                list.map(value => (
                    <div className="list-group-item list-group-item-action">{value.id}) {value.title}</div>
                ))
            }
        </div>
    );
}
export default Todolist;