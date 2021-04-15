import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from "../app/components/user/user.component";
import { HomepageComponent } from "../app/components/user/homepage/homepage.component";
import { SearchDetailsComponent } from "../app/components/user/search-details/search-details.component";


const routes: Routes = [

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
