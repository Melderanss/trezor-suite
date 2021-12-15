import React, { createContext } from 'react';
import { useInView } from 'react-intersection-observer';

import AppNavigationPanelInner from './components/AppNavigationPanelInner';

type AppNavigationPanelCtxProps = {
    children?: React.ReactNode;
    inView: boolean;
};

const AppNavigationPanelCtx = createContext(true);

const AppNavigationPanelProvider = ({ children, inView }: AppNavigationPanelCtxProps) => (
    <AppNavigationPanelCtx.Provider value={inView}>{children}</AppNavigationPanelCtx.Provider>
);

interface Props {
    title: React.ReactNode;
    titleContent?: React.ReactNode;
    maxWidth: 'small' | 'default';
    children?: React.ReactNode;
    navigation?: React.ReactNode;
}

export const useInViewProp = () => React.useContext(AppNavigationPanelCtx);

const AppNavigationPanel = ({ title, titleContent, maxWidth, navigation, children }: Props) => {
    const { ref, inView } = useInView({
        delay: 100,
        initialInView: false,
    });

    return (
        <AppNavigationPanelInner
            ref={ref}
            title={title}
            titleContent={titleContent}
            maxWidth={maxWidth}
            navigation={
                <AppNavigationPanelProvider inView={inView}>
                    {navigation}
                </AppNavigationPanelProvider>
            }
        >
            {children}
        </AppNavigationPanelInner>
    );
};

export default AppNavigationPanel;
