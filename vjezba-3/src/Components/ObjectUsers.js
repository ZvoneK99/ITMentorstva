

function ObjectUsers() {
    const USERS = [
        { id: 1, name: "Zvone", email: "zvone@gmail.com" },
        { id: 2, name: "Gabi", email: "gabi@gmail.com" }
    ];

    return (
        <>
            {USERS.map((user => (
                <>
                    <h1 key={user.id}>{user.name}</h1>
                    <p key={user.id}>{user.email}</p>
                </>
            )))}
        </>
    );
}

export default ObjectUsers;