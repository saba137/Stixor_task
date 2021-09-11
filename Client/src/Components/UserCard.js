import {Link} from "react-router-dom";
import Logo from '../Images/logohere.png'
import UserDetails from "./UserDetails";

function UserCard({item}){
    // console.log("item", item)
// console.log(item.firstName)

    return (
        <Link
            to={"/User"}
            className={"card-margin align-left is-row is-card"}
        >
            
            <div className="is-50">
                <div className="image-container">
                    <img className="card-logo" src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="is-50">
                {/* <h3>{item.firstName} - {item.lastName} </h3> */}
                <UserDetails id = {item.id}/>
            </div>
        </Link>
    );
}

export default UserCard
