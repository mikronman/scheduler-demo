import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

  panelOpenState = false;
  special = [
    {
      "title": `Other Instructions`,
      "body": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet aliquam sapien, ut fermentum justo. Curabitur nec neque id nisi accumsan rutrum. Integer elementum nisi sed tortor ullamcorper commodo. Ut maximus porttitor condimentum. Maecenas aliquam interdum bibendum. Integer malesuada congue ipsum, vitae dapibus elit facilisis a. Quisque pharetra rhoncus luctus.`
    },
    {
      "title": `Line 0010`,
      "body": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet aliquam sapien, ut fermentum justo. Curabitur nec neque id nisi accumsan rutrum. Integer elementum nisi sed tortor ullamcorper commodo. Ut maximus porttitor condimentum. Maecenas aliquam interdum bibendum. Integer malesuada congue ipsum, vitae dapibus elit facilisis a. Quisque pharetra rhoncus luctus.`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
