export default ({ goToSuccessPage }) => {
    const onSubmitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" className="fname" placeholder="Eg. Howard" />
                </div>
                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" className="lname" placeholder="Eg. Potts" />
                </div>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="email" placeholder="Eg. tony@stark.com" />
            </div>
            <div>
                <label htmlFor="address">Shipping Address</label>
                <textarea  name="address" className="address" placeholder="Eg. 177A Bleecker Street, New York City, NY 10012-1406" />
            </div>
            <button onClick={goToSuccessPage}>Place Order</button>
        </form>
    )
}