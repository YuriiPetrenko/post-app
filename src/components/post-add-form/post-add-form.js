import React from 'react';
import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
         return (
                  <div className="bottom-panel d-flex">
                           <input
                           type="text"
                           placeholder="Write something"
                           className="form-control new-post-label"
                           />
                           <button 
                           type="submit"
                           className="btn btn-outline-socondary"
                           onClick={()=>onAdd('Added')}
                           >
                           Add</button>
                  </div>
         )
}

export default PostAddForm;