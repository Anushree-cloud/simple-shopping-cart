import { Gi3DGlasses } from 'react-icons/gi'

export default ({ goToListingPage }) => {
    return (
        <div className="container success">
            <p>Thank You for Shopping with Us!!</p>
            <button onClick={goToListingPage} className="btn">Continue Shopping <Gi3DGlasses/></button>
        </div>
    )
}