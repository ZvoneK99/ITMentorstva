import UserHeader from './UserHeader'
import UserContact from './UserContact';
import UserStatus from './UserStatus';

function UserProfile({userName, email, city, isOnline}) {

    return (
        <>
        <UserHeader userName={userName}/>
        <UserContact email={email} city={city}/>
        <UserStatus isOnline={isOnline}/>
        </>

    );
}
export default UserProfile;