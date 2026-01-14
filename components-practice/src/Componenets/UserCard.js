import UserInfo from "./UserInfo";
import UserLocation from "./UserLocation";

function UserCard({name, age, city}) {

return (
    <>
    <UserInfo name={name} age={age}/>
    <UserLocation city={city}/>
    </>
);
}

export default UserCard;
    