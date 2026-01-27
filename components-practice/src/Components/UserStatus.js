

function UserStatus({isOnline}) {

    const condition = isOnline ? "Status: Online" : "Status: Offline";

    return (
        <h3>{condition}</h3>
    );
}
export default UserStatus;