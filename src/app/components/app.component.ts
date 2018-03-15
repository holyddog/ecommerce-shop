import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { StorageService } from '../services/shared/storage.service';
import { MenuService } from '../services/shared/menu.service';
import { TranslateService } from '../services/shared/translate.service';
import { AuthenService } from '../services/api/authen.service';
import { DialogService } from '../services/shared/dialog.service';

import { environment, Config } from '../../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private title: Title,public dialog: DialogService, private translate: TranslateService, private authenService: AuthenService) { }

    ngOnInit(): void {
        this.title.setTitle(Config.AppName);
        this.authenService.load();

        this.translate.use('th');
    }
}

@Component({
    selector: 'app-layout-root',
    templateUrl: 'app-layout.component.html',
    styleUrls: ['app.component.css']
})
export class AppLayoutComponent implements OnInit {
    env: any = environment;

    menus: any[] = [{
        text: 'Dashboard',
        link: '/shop/dashboard'
    }, {
        text: 'Order',
        link: '/shop/order'
    }, {
        text: 'Product',
        link: '/shop/product'
    }, {
        text: 'Setting',
        link: '/shop/setting',
        children: [{
            text: 'Account',
            link: '/shop/setting/account'
        }, {
            text: 'Address',
            link: '/shop/setting/address'
        }]
    }];

    constructor(private router: Router, public authenService: AuthenService, private menu: MenuService) { }

    ngOnInit(): void {
        for (let m of this.menus) {
            if (this.router.url.indexOf(m.link) > -1) {
                m.toggle = true;
            }
        }
    }

    navigate(link: string, menu: any): void {
        if (link && !menu.children) {
            this.menu.hideMenu();
            this.router.navigate([link]);
        }
        else {
            if (!menu.toggle) {
                menu.toggle = true;
            }
            else {
                menu.toggle = false;
            }
        }
    }

    logOut(): void {
        this.authenService.logOut();
        this.router.navigate(["/login"]);
    }
}