import { useState } from 'react'

export default ({ goToSuccessPage, goToCartPage, clearAllCartItems }) => {
    const [btnColor, setBtnColor] = useState("black")
    const [input, setInput] = useState({
        error: {
            fname: " ",
            lname: " ",
            phn: " ",
            email: " ",
            address:" "
        },
        data: {},
        isValid: false,
        isEnabled: false
    })

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(input)
        if(input.isValid) {
            console.log(input.isValid)
            clearAllCartItems()
            goToSuccessPage()
        }
    }

    const inputHandling = (event) => {
        let isError = {...input.error}
        let {name, value} = event.target
        let validateEmail = RegExp ("^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)$");
        let validatePhn = RegExp("[0-9]{10}$")

        switch(name)
        {
            case 'fname':
                isError.fname = value.length < 3 ? "Minimum Three Characters Required!" : ""
                break;
            case 'lname':
                isError.lname = value.length < 3 ? "Minimum Three Characters Required!" : ""
                break;
            case 'email':
                isError.email = validateEmail.test(value) ? "" : "Invalid Email!"
                break;
            case 'phn':
                isError.phn = validatePhn.test(value) ? "" : "Invalid Phone Number!"
                break;
            case 'address':
                isError.address = value.length < 10 ? "Minimum Three Characters Required!" : ""
                break;
        }

        const isValid = ( (isError.fname === "") && (isError.lname === "") && (isError.email === "") && (isError.phn === "") && (isError.address === "")) ? true : false
        
        setBtnColor( isValid ? "green" : "black" )
        
        setInput({data : {
            ...input.data,
            [name] : value 
            }, 
            error : isError,
            isValid
        })

        console.log("isValid: ", isValid);
    }

    return (
        <>
            <form onSubmit={submitHandler} className="container form-control">
                <h1>User Details</h1>
                <p>All fields are required*</p>
                <div className="user-name">
                    <div className="form-element">
                        <label htmlFor="fname" className="label">*First Name</label>
                        <input 
                            type="text" 
                            name="fname" 
                            className="form-input fname" 
                            placeholder="Eg. Howard" 
                            onChange={inputHandling} 
                        />
                        <p className="invalid-text">{input.error.fname}</p>
                    </div>
                    <div className="form-element">
                        <label htmlFor="lname" className="label">*Last Name</label>
                        <input 
                            type="text" 
                            name="lname" 
                            className="form-input lname" 
                            placeholder="Eg. Potts" 
                            onChange={inputHandling} 
                        />
                        <p className="invalid-text">{input.error.lname}</p>
                    </div>
                </div>
                <div className="form-element">
                    <label htmlFor="phn" className="label">*Phone No.</label>
                    <input 
                        type="text" 
                        name="phn" 
                        className="form-input phn" 
                        placeholder="Eg. 9876543210" 
                        onChange={inputHandling} 
                    />
                    <p className="invalid-text">{input.error.phn}</p>
                </div>
                <div className="form-element">
                    <label htmlFor="email" className="label">*Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-input email" 
                        placeholder="Eg. tony@stark.com" 
                        onChange={inputHandling} 
                    />
                    <p className="invalid-text">{input.error.email}</p>
                </div>
                <div className="form-element">
                    <label htmlFor="address" className="label">*Shipping Address</label>
                    <input
                        type="text"
                        name="address"
                        className="form-input address" 
                        placeholder="Eg. 177A Bleecker Street, New York City, NY 10012-1406"
                        onChange={inputHandling}
                    />
                    <p className="invalid-text">{input.error.address}</p>
                </div>
                <div className="po-btn-container">
                    <button type='submit' className="btn po-btn" style={{ backgroundColor: btnColor }} >Place Order</button>
                    <button onClick={goToCartPage} className="po-btn btn back-to-cart-btn">Back to Cart</button>
                </div>
            </form>
            
        </>
    )
}