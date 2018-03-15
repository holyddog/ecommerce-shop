import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/shared/menu.service';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
    host: { 'class': 'd-flex flex-column flex' }
})
export class OrderComponent implements OnInit {

    constructor(public menu: MenuService) { }

    ngOnInit() {
    }

}
