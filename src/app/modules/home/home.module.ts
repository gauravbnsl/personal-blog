import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BlogCardComponent } from './../../components/blog-card/blog-card.component';
import { TimelineWidgetComponent } from './../../components/timeline-widget/timeline-widget.component'
@NgModule({
  declarations: [HomeComponent, BlogCardComponent, TimelineWidgetComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
