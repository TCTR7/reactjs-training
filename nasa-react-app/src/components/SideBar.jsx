import { useUsers } from "../hooks/useUsers";
import UserCard from "./UserCard";

export default function SideBar({ handleToggleModal }) {
  const { users, loading, error } = useUsers();

  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContent">
        {loading && <p>Loading...</p>}
        {error && <p className="error">Error: {error}</p>}
        {!loading && !error && users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
