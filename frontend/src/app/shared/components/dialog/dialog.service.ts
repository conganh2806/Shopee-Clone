import { Component, Inject, Injectable, signal } from '@angular/core';
import { DialogConfig } from '@shared/components/dialog/dialog.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public config = signal<DialogConfig | null>(null);

  private resultSubject = new Subject<string>();

  public onClose$ = this.resultSubject.asObservable();

  open(config: DialogConfig) {
    this.config.set(config);
  }

  close(result: string) {
    this.config.set(null);
    this.resultSubject.next(result);
  }
}
