import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root',
})

export class StorageService {

  private storage: Storage | null = null;

  constructor(private storageS: Storage) {
   // this.init();
  }

  // async init() {
  //   // If using, define drivers here: await this.storage.defineDriver(/*...*/);
  //   const storage = await this.storage.create();
  //   this.storage = storage;
  // }

  // Create and expose methods that users of this service can
  // call, for example:
  async store(key: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await this.storage?.set(key, encryptedValue);
  }
  async set(key: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await this.storage?.set(key, encryptedValue);
  }
  // call, for example:
  async get(key: any) {
    const ret = this.storage?.get(key);

    if (!ret) {return false;}
    return JSON.parse(unescape(atob(await ret)));
  }

  async removeStorageItem(key: string) {
    await this.storage.remove(key);
  }
  async remove(key: string) {
    await this.storage.remove(key);
  }

  // Clear storage
  async clear() {
    await this.storage.clear();
  }
}
