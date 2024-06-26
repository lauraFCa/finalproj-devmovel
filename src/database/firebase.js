import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebaseConfigFile from './firebaseConfig.json';


/**
 * O arquivo fornece a configuracao e a instancia do Firebase para serem utilizadas em um aplicativo React Native 
 * A configuracao inclui as credenciais da aplicacao Firebase e a inicializacao do aplicativo e do Firestore
*/



/**
 *  A instancia inicializada do aplicativo Firebase
 */
const app = initializeApp(firebaseConfigFile);

/**
 * A instancia do Firestore associada ao aplicativo Firebase
 */
const db = getFirestore(app);

/**
 * A instancia do Storage associada ao aplicativo Firebase
 */
const storage = getStorage(app, "gs://devmovem-final.appspot.com");

export { db, storage };