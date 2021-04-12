import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  panelOpenState = false;
  terms = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet aliquam sapien, ut fermentum justo. Curabitur nec neque id nisi accumsan rutrum. Integer elementum nisi sed tortor ullamcorper commodo. Ut maximus porttitor condimentum. Maecenas aliquam interdum bibendum. Integer malesuada congue ipsum, vitae dapibus elit facilisis a. Quisque pharetra rhoncus luctus. Nullam ornare libero justo, eu lacinia libero vestibulum ac. Pellentesque ut dictum quam. Nulla iaculis non nisi vel pulvinar. Maecenas nec aliquet erat, sed rhoncus turpis. Sed tempor, dolor sit amet congue scelerisque, libero turpis volutpat justo, suscipit condimentum enim magna id nunc. Duis maximus est a mi blandit, molestie semper nunc mollis. Suspendisse ac hendrerit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`;

  constructor() { }

  ngOnInit(): void {
  }

}
