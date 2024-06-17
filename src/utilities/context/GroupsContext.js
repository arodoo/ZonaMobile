//Context to get groups
import React, { createContext, useState, useEffect } from 'react';

//import firebase functions
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export const GroupsContext = createContext();

export function GroupsProvider({ children }) {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const groupsCollection = collection(db, 'groups');
        const getGroups = async () => {
            const groupsSnapshot = await getDocs(groupsCollection);
            const groupsList = groupsSnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            setGroups(groupsList);
        }
        getGroups();
    }, []);

    return (
        <GroupsContext.Provider value={groups}>
            {children}
        </GroupsContext.Provider>
    )

}
