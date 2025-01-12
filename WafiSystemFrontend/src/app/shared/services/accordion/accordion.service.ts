import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {
  accordionComponent,
  accordionContent,
} from '../../models/accordion.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccordionService {
  accordionContent: BehaviorSubject<accordionContent> =
    new BehaviorSubject<accordionContent>(new accordionContent());
  clickOnAccordionHeader: EventEmitter<accordionComponent> =
    new EventEmitter<accordionComponent>();
  deleteAccordionItem: EventEmitter<any> = new EventEmitter<any>();
  constructor(private _httpClient: HttpClient) {}
  // update
  updateAccordionContent(content: accordionContent) {
    this.accordionContent.next(content);
  }
  // get
  getAccordionContent(): Observable<accordionContent> {
    return this.accordionContent.asObservable();
  }
  updateDeleteAccordionItem(id: any) {
    this.deleteAccordionItem.next(id);
  }
  // get
  getDeleteAccordionItem(): Observable<any> {
    return this.deleteAccordionItem.asObservable();
  }
  resetAccordionContentComponentList() {
    this.accordionContent.value.accordionComponentList = [];
    this.accordionContent.next(this.accordionContent.value);
  }
}
