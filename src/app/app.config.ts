import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
     provideFirebaseApp(() => initializeApp({
      "projectId":"archivos-firebase",
      "appId":"1:557766879766:web:62954e365f6f6196692337",
      "databaseURL":"https://archivos-firebase-default-rtdb.firebaseio.com",
      "storageBucket":"archivos-firebase.appspot.com",
      "apiKey":"AIzaSyDCBgiR0q0R80I0cQFdH3VBDpMGPhCEXtI",
      "authDomain":"archivos-firebase.firebaseapp.com",
      "messagingSenderId":"557766879766",
      "measurementId":"G-R522KQSXCG"})),
       provideFirestore(() => getFirestore())]
};
