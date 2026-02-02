import { useState } from "react";


function NameList() {
    let [user, setUser] = useState("");
    let [users, setUsers] = useState([]);

    function EnterUser(e) {
        setUser(e.target.value);
        console.log(user)
    }

    function AddUser() {
        setUsers([
            ...users,
            user
        ])
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Unesite ime" onInput={(e) => EnterUser(e)} />
                <button onClick={AddUser}>Dodaj korisnika u listu</button>
                <hr />
            </div>
            <div>
                <ul>
                    {users.map((u, index) => (
                        <li key={index}>{u}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
export default NameList;