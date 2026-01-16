import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Calc } from './calc/calc';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Home } from './home/home';
import { Starpattern } from './starpattern/starpattern';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"dashboard",component:Dashboard},
    {path:"calc",component:Calc},
    {path:"star",component:Starpattern},
    {path:"**",component:Pagenotfound}
];
