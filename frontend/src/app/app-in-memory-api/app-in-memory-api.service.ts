import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { delay } from 'q';
export class AppInMemoryApi implements InMemoryDbService {
 createDb() {
 let heroes = [
 {
 name: 'Superman',
 description: 'Flies through the air to save damsels in distress.',
 powers: ['flight']
 },
 {
 name: 'Batman',
 description: 'Responds stealthily to rescue citizens of Gotham from crime.',
 powers: ['technology']
 }
 ]
 return {'heroes':heroes};
 }
}
