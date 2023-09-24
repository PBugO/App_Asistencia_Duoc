// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  //Creamos 'firebase' e ingresamos el codigo que nos entrego
  //Firebase para linkearlo a nuestro proyecto.
  firebase: {
    apiKey: "AIzaSyChzXwpcJdnTCt_Eri0BSJfFEtWUiSbywM",
    authDomain: "asistencia-duoc-fbe3e.firebaseapp.com",
    projectId: "asistencia-duoc-fbe3e",
    storageBucket: "asistencia-duoc-fbe3e.appspot.com",
    messagingSenderId: "214119806316",
    appId: "1:214119806316:web:f1e0f08766b6a3477eaf49"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
