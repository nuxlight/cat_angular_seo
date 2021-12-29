import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatCardComponent } from './cat-card/cat-card.component';

@NgModule({
  declarations: [CatCardComponent],
  imports: [CommonModule],
  exports: [CatCardComponent],
})
export class SharedModule {}
