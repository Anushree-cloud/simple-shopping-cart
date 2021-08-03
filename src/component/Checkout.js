import { useState } from 'react'

export default ({ goToSuccessPage }) => {
    const [input, setInput] = useState({
        error: {
            fname: "",
            lname: "",
            phn: "",
            email: "", 
        }
    })

    const submitHandler = (e) => {
        e.preventDefault()
        alert('Product(s) Purchased')
    }

    const inputHandling = (event) => {
        let isError = {...input.error}
        let {name, value} = event.target
        let validateEmail = RegExp ("^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)$");
        let validatePhn = RegExp("[0-9]{10}$")

        switch(name)
        {
            case 'fname':
                isError.fname = value.length < 3 ? "Minimum Three Characters Required" : ""
                break;
            case 'lname':
                isError.lname = value.length < 3 ? "Minimum Three Characters Required" : ""
                break;
            case 'email':
                isError.email = validateEmail.test(value) ? "" : "Invalid Email"
                break;
            case 'phn':
                isError.phn = validatePhn.test(value) ? "" : "Invalid Phone No."
                break;
        }

        setInput({...input, [name] : value, error : isError})
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" className="fname" placeholder="Eg. Howard" onChange={inputHandling} />
                    <p>{input.error.fname}</p>
                </div>
                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" className="lname" placeholder="Eg. Potts" onChange={inputHandling} />
                    <p>{input.error.lname}</p>
                </div>
            </div>
            <div>
                <label htmlFor="phn">Phone No.</label>
                <input type="text" name="phn" className="phn" placeholder="Eg. 9876543210" onChange={inputHandling} />
                <p>{input.error.phn}</p>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="email" placeholder="Eg. tony@stark.com" onChange={inputHandling} />
                <p>{input.error.email}</p>
            </div>
            <div>
                <label htmlFor="address">Shipping Address</label>
                <textarea  name="address" className="address" placeholder="Eg. 177A Bleecker Street, New York City, NY 10012-1406" />
            </div>
            <button type='submit' onClick={goToSuccessPage}>Place Order</button>
        </form>
    )
}