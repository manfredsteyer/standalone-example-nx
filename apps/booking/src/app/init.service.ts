import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class InitService {
    init(): void {
        console.log('Initializing stuff ...');
    }
    
}