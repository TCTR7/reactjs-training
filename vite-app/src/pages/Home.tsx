
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const goToAbout = () => {
        navigate("/about");
    }
    return (
        <div>
            <h1>Trang chủ</h1>
            <button onClick={goToAbout}>Về trang About</button>
        </div>
    )
};

export default Home;
