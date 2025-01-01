import React, { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import Loader from 'shared/ui/Loader/Loader';
import Modal from 'shared/ui/Modal/Modal';
import Button from 'shared/ui/Button/Button';

function App() {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <Button onClick={() => setIsOpen(true)}>Modal Toggle</Button>
                <Modal isOpen={isOpen}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis id dolorem vitae perspiciatis labore ut,
                    at illo odit nostrum itaque inventore culpa maxime,
                    similique incidunt eveniet minus libero, quo beatae?
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
