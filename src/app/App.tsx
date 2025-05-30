import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/router';
import {
    getUserInited, initAuthData,
} from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import Loader from '@/shared/ui/Loader/Loader';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

function App() {
    const { theme } = useTheme();
    console.log('🚀 ~ App ~ theme:', theme);

    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

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
