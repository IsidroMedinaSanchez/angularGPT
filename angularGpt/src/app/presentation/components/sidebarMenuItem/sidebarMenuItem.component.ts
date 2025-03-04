import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebarMenuItem.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuItemComponent {
  icon = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  path = input.required<string>();
}
