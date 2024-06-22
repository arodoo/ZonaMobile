import React from 'react';
import { GroupsProvider } from '../utilities';

export const ContextProvider = ({ children }) => {
    return (
        <GroupsProvider>
        {children}
        </GroupsProvider>
    )
    }
    