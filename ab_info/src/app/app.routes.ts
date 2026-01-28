import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
import { Team } from './team/team';
import { Gallery } from './gallery/gallery';
import { Career } from './career/career';

export const routes: Routes = [

    {path:"",component:Home},
    {path:"about",component:AboutUs},
    {path:"team",component:Team},
    {path:"gallery",component:Gallery},
    {path:"career",component:Career},
];
