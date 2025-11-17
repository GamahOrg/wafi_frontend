import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NextAndPreviusButtonsService {
nextButtonIsClicked : EventEmitter<null> = new EventEmitter()
saveAsDraftIsClicked : EventEmitter<null> = new EventEmitter()
moveToNextTab : EventEmitter<null> = new EventEmitter()
saveAsDraftBtnIsvisible: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(true)
saveAsDraftBtnText: BehaviorSubject<string>= new BehaviorSubject<string>('حفظ كمسودة')
  constructor() { }
}
