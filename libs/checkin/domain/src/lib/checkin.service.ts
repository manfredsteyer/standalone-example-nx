import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CheckinService {
    load(): void {
        console.log('load');
    }
}