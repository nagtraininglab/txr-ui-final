import React, { useState } from 'react';

const TxrForm = () => {

    const [form, setForm] = useState({})
    const [message, setMessage] = useState('')


    const handleChange = (field, e) => {
        setForm({ ...form, [field]: e.target.value })
    }

    const handleForm = e => {
        e.preventDefault();

        fetch("http://transferservice-env.eba-i2izuujj.us-east-1.elasticbeanstalk.com/api/txr", {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setMessage(data.message)
            })

    }
    const renderMssage = () => {
        if (message) {
            return (
                <div className="alert alert-danger">
                    {message}
                </div>
            )
        }
    }
    return (

        <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
                <div className="card">
                    <div className="card-header">Tranfer Form</div>
                    <div className="card-body">
                        <form onSubmit={e => handleForm(e)}>
                            <div className="form-group">
                                <label>From Account:</label>
                                <input onChange={e => handleChange('fromAccNumber', e)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>To Account:</label>
                                <input onChange={e => handleChange('toAccNumber', e)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Amount:</label>
                                <input onChange={e => handleChange('amount', e)} className="form-control" />
                            </div>
                            <button className="btn btn-sm btn-dark">Txr</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
                {renderMssage()}
            </div>
        </div>

    );
};

export default TxrForm;