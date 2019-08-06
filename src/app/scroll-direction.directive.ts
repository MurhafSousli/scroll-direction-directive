import { OnInit, OnDestroy, Directive, ElementRef, NgZone, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { map, tap, filter, distinctUntilChanged, pluck, pairwise, auditTime } from 'rxjs/operators';

enum ScrollDirection { Up, Down }

@Directive({
  selector: '[scrollDirection]'
})
export class ScrollDirectionDirective implements OnInit, OnDestroy {

  @Input() threshold = 5;
  @Input() auditTime = 200;
  @Output() scrolledUp = new EventEmitter();
  @Output() scrolledDown = new EventEmitter();
  private subscription = Subscription.EMPTY;

  constructor(private el: ElementRef, private zone: NgZone) {
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => this.subscription = this.scrollDirection().subscribe());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private scrollDirection(): Observable<any> {
    return fromEvent(this.el.nativeElement, 'scroll', { passive: true }).pipe(
      tap((e: any) => e.stopPropagation()),
      auditTime(this.auditTime),
      pluck('target', 'scrollTop'),
      pairwise(),
      filter(([prev, curr]) => prev !== curr),
      filter(([prev, curr]) => Math.abs((curr as number) - (prev as number)) > this.threshold),
      map(([prev, curr]) => prev > curr ? ScrollDirection.Up : ScrollDirection.Down),
      distinctUntilChanged(),
      tap((direction: ScrollDirection) => {
        this.zone.run(() => {
          if (direction === ScrollDirection.Up) {
            this.scrolledUp.emit();
          } else {
            this.scrolledDown.emit();
          }
        });
      })
    );
  }
}
