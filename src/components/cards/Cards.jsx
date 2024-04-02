import Receipes from "./receipes/Receipes"
import Chef from "./cheff/Chef"
// import PaginationComponent from "./PaginationComponent"

const Cards = () => {
  return (
    <div className="container">
        <div className="row">
        <div className="col-8 col-md-8 col-sm-12">
            <Receipes/>
        </div>
        <div className="col-4 col-md-4 col-sm-12">
            <Chef/>
        </div>
        </div>
    </div>
  )
}

export default Cards
