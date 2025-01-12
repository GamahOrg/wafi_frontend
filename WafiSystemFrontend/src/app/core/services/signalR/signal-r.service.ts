import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Configuration } from '../../configurations/shared.config';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Notification } from 'src/app/shared/models/notification.model';
@Injectable()
export class SignalRService {
  identityHubUrl: string = `${environment.baseURL}/${Configuration.APIs.SignalrHubs.identityHub}`;
  notificationHubUrl: string = `${environment.baseURL}/${Configuration.APIs.SignalrHubs.notificationHub}`;
  connectionIdentityHub: any;
  connectionNotificationHub: any;

  receivedIdentityStatus$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  register$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  unregister$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  NotifyCustomer$: BehaviorSubject<Notification> = new BehaviorSubject<Notification>({} as Notification);

  constructor() { }
  
  public initiateSignalrConnection(): void {
    this.initiateSignalrConnectionForIdentityHub();
    this.initiateSignalrConnectionForNotificationHub();
  }

  private initiateSignalrConnectionForIdentityHub(): void {
    // Establishes a Hub Connection with specified url.
    this.connectionIdentityHub = new signalR.HubConnectionBuilder()
      .withUrl(this.identityHubUrl)
      .withAutomaticReconnect()
      .build();

    this.setSignalrClientMethodsForReceivedIdentityStatus();
    this.setSignalrClientMethodsForRegister();
    this.setSignalrClientMethodsForUnRegister();

    // // When the connection is closed.
    this.connectionIdentityHub.onclose((err?: Error) => {
      if (err) {
        // An error occurs
        this.onConnectionForIdentityHubCloseForError(err);
      } else {
        // No more events to be sent.
        this.onConnectionForIdentityHubClose();
      }
    });
    // Starts the connection.
    this.connectionIdentityHub.start({ withCredentials: false });
  }

  private setSignalrClientMethodsForReceivedIdentityStatus() {
    this.connectionIdentityHub.on("ReceivedIdentityStatus", (message: string) => {
      this.receivedIdentityStatus$.next(message)
    })
  }

  private setSignalrClientMethodsForRegister(): void {
    this.connectionIdentityHub.on("Register", (message: string) => {
      this.register$.next(message)
    })
  }

  private setSignalrClientMethodsForUnRegister(): void {
    this.connectionIdentityHub.on("UnRegister", (message: string) => {
      this.unregister$.next(message)
    })
  }

  private onConnectionForIdentityHubCloseForError(err: Error): void {
    this.receivedIdentityStatus$.error(err);
    this.register$.error(err);
    this.unregister$.error(err);
  }

  private onConnectionForIdentityHubClose(): void {
    this.receivedIdentityStatus$.complete();
    this.register$.complete();
    this.unregister$.complete();
  }

  private initiateSignalrConnectionForNotificationHub(): void {
    // Establishes a Hub Connection with specified url.
    this.connectionNotificationHub = new signalR.HubConnectionBuilder()
      .withUrl(this.notificationHubUrl)
      .withAutomaticReconnect()
      .build();

      this.setSignalrClientMethodsForNotifyCustomer();

    // // When the connection is closed.
    this.connectionNotificationHub.onclose((err?: Error) => {
      if (err) {
        // An error occurs
        this.NotifyCustomer$.error(err);
      } else {
        // No more events to be sent.
        this.NotifyCustomer$.complete();
      }
    });
    // Starts the connection.
    this.connectionNotificationHub.start({ withCredentials: false });
  }

  private setSignalrClientMethodsForNotifyCustomer(): void {
    this.connectionNotificationHub.on("NotifyCustomer", (message: Notification) => {
      this.NotifyCustomer$.next(message)
    })
  }
  
}
