import React from 'react';
class ListTask extends React.Component
{
    render()
    {
        return(
            <div className="row text-center">
                <div className="col-md-8">
                    <form className="row text-center">
                        <input className="form-control mt-5 ml-50" style={{width:"350px"}}></input>
                        <button className="btn btn-primary mt-5">ADD TASK</button>
                    </form>
                </div>
                <div className="col-md-4">
                    
                </div>
            </div>
        )
    }
}
export default ListTask;