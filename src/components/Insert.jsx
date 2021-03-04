import React from 'react';

const Insert = () => {
    return (
        <form className="d-flex my-4 btn-group">
            <input type="text" placeholder="Add your Work" className="form-control form-control-lg" autoFocus/>
            <button className="btn btn-success px-4">Add</button>
        </form>
    );
}
export default Insert;