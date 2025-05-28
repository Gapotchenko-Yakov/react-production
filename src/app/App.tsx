import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import Loader from '@/shared/ui/Loader/Loader';
import { getUserInited, User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';

function App() {
    const { theme } = useTheme();

    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        const userJson = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        let user: User | undefined;
        if (userJson) {
            user = JSON.parse(userJson);
            setFeatureFlags(user?.features);
        }
        dispatch(userActions.initAuthData(user));
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
