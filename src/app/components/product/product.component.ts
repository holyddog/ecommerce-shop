import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/shared/menu.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    host: { 'class': 'd-flex flex-column flex' }
})
export class ProductComponent implements OnInit {

    constructor(public menu: MenuService) { }

    ngOnInit() {
    }

}
