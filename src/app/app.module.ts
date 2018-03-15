import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared.module';

import { AppComponent, AppLayoutComponent } from './components/app.component';

import { AuthenService } from './services/api/authen.service';
import { AuthenGuardService } from './services/api/authen-guard.service';

import { StorageService } from './services/shared/storage.service';
import { MenuService } from './services/shared/menu.service';
import { TranslateService } from './services/shared/translate.service';
import { DialogService } from './services/shared/dialog.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountComponent } from './components/setting/account/account.component';
import { AddressComponent } from './components/setting/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forRoot([
            {
                path: 'shop',
                children: [{
                    path: '',
                    component: AppLayoutComponent,
                    // canActivate: [AuthenGuardService],
                    children: [{
                        path: 'dashboard',
                        component: DashboardComponent
                    }, {
                        path: 'order',
                        component: OrderComponent
                    }, {
                        path: 'product',
                        component: ProductComponent
                    }, {
                        path: 'setting',
                        children: [{
                            path: 'account',
                            component: AccountComponent
                        }, {
                            path: 'address',
                            component: AddressComponent
                        }]
                    }]
                }, {
                    path: 'login',
                    component: LoginComponent
                }]
            }
        ])
    ],
    declarations: [
        AppComponent,
        AppLayoutComponent,
        LoginComponent,
        SignupComponent,
        DashboardComponent,
        AccountComponent,
        AddressComponent,
        OrderComponent,
        ProductComponent
    ],
    providers: [
        AuthenService,
        AuthenGuardService,
        DialogService,
        StorageService, 
        MenuService,  
        TranslateService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
