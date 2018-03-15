import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/shared/menu.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    host: { 'class': 'd-flex flex-column flex' }
})
export class DashboardComponent implements OnInit {

    constructor(public menu: MenuService) { }

    ngOnInit() {
    }

}
