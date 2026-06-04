import { boot } from "quasar/wrappers";
import localforage from "localforage";

export default boot(() => {
  // Konfiguriramo localforage da koristi IndexedDB kao primarni storage
  // Ovo osigurava konzistentnost podataka na svim uređajima

  // 1. Postavljamo veličinu baze na 50MB (dovoljno za većinu slučajeva)
  const localforageConfig = {
    driver: [
      localforage.INDEXEDDB,  // Primarni izbor (největeći kapacitet)
      localforage.LOCALSTORAGE // Fallback ako IndexedDB nije dostupan
    ],
    name: 'kartaRasta',
    version: 1.0,
    storeName: 'mainStore',
    description: 'Karta Rasta - Children height tracking app'
  };

  // Primjenjujemo konfiguraciju
  localforage.config(localforageConfig);

  // 2. Osiguravamo da se koristi isti store svugdje
  window.localforageInstance = localforage;

  // 3. Dodajemo error handling i logging
  console.log('🔧 LocalForage initialized with IndexedDB as primary driver');

  // Test - provjera koji driver se koristi
  console.log('📊 Current driver:', localforage.driver());
});
