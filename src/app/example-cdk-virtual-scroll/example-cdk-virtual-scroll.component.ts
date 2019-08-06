import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example-cdk-virtual-scroll',
  templateUrl: './example-cdk-virtual-scroll.component.html',
  styleUrls: ['./example-cdk-virtual-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleCdkVirtualScrollComponent {

  flag = true;
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

}
