import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { delay } from 'q';
import { Hero } from '../hero';
export class AppInMemoryApi implements InMemoryDbService {
  createDb() {
    let hero: Hero = 
      {
        id: 1,
        name: 'Superman'

      }
      
    return {hero};
  }
}
