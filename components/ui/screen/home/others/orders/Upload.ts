

import { v4 as uuidv4 } from 'uuid'; // Make sure to import uuid
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../../security/firebaseConfig';
import * as ImagePicker from 'expo-image-picker'



export const pickAndUploadImages = async (): Promise<string[]> => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync ();


if (!permissionResult.granted){
    alert('permission to acces gallery is required');
    return[];
}

const result = await ImagePicker.launchImageLibraryAsync({

    mediaTypes:ImagePicker.MediaTypeOptions.Images,
    allowsEditing:true,
    quality:1,
    allowsMultipleSelection:true,


});

if (result.canceled || !result.assets){
    return[];
}
const imageUrls :string[]=[];

for (const imageAsset of result.assets){
    const response =await fetch(imageAsset.uri);
    const blob = await response.blob();
    const filename=`uploads/${uuidv4()}`;
    const fileRef = ref(storage,filename);


  await uploadBytes(fileRef,blob);
  const uri = await getDownloadURL(fileRef);
  imageUrls.push(uri);

}    
return (imageUrls);








    }
