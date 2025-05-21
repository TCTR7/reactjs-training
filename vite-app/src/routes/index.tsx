import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';
import User from '../pages/User';
import UserDetail from '../pages/UserDetail';

const AppRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/user' element={<User />}>
                    <Route path=':id' element={<UserDetail />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default AppRouters;