import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, updateDoc, setDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const createGroup = async (groupData, imageUri) => {
    const db = getFirestore();
    const auth = getAuth();

    if (!auth.currentUser) {
        throw new Error('User not authenticated');
    }

    const groupRef = doc(collection(db, 'groups'));
    const imgUrl = await uploadImage(imageUri, groupData.name);
    
    const newGroup = {
        ...groupData,
        imgUrl,
        members: [
            {
                userId: auth.currentUser.uid,
                isAdmin: true,
            }
        ]
    };  

    try {
        await setDoc(groupRef, newGroup);
        return groupRef.id;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const uploadImage = async (uri, groupName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storage = getStorage();
    const storageRef = ref(storage, `groups/${groupName} - ${new Date().getTime()}`);
    await uploadBytes(storageRef, blob);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
};