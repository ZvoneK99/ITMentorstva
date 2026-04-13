
const UserCard = ({ ime, prezime, godine }) => {

    return (<>
        Ime: {ime}<br></br>
        Prezime: {prezime}<br></br>
        Godine: {godine}
    </>);
}

export default UserCard;