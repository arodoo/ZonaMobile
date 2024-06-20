import React, { createContext, useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

export const GroupsContext = createContext();

export function GroupsProvider({ children }) {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const groupsCollection = collection(db, 'groups');

        const unsuscribe = onSnapshot(groupsCollection, (snapshot) => {
            const groupList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setGroups(groupList);
        }
        );

        return () => unsuscribe();
    }, []);

    return (
        <GroupsContext.Provider value={groups}>
            {children}
        </GroupsContext.Provider>
    )

}
