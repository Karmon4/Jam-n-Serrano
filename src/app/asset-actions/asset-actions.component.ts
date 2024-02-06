import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-asset-actions',
  standalone: true,
  imports: [],
  templateUrl: './asset-actions.component.html',
  styleUrl: './asset-actions.component.css'
})
export class AssetActionsComponent {

  @Input() asset:any
}
