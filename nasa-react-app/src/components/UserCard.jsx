
export default function UserCard({ user }) {
    return (
        <div className="userCard">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company?.bs}</p>
            <p>{user.address?.city}</p>
        </div>
    );
}
