import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WelcomeMessageComp } from './pages/mainSide/welcomeMessage/welcome-message.components';
import { AboutComponents } from './pages/mainSide/About/about.components';
import { ResumeComponents } from './pages/mainSide/Resume/resume.components';
import { WorksComponents } from './pages/mainSide/Works/works.components';
import { ContactComponents } from './pages/mainSide/Contact/contact.components';

export const AppRoutes: Routes = [{ 
    path: '', 
    redirectTo: '/welcome', 
    pathMatch: 'full' 
},{
    path: '',
    component: WelcomeMessageComp
}, {
    path: 'welcome',
    component: WelcomeMessageComp
}, {
    path: 'about',
    component: AboutComponents
}, {
    path: 'resume',
    component: ResumeComponents
}, {
    path: 'works',
    component: WorksComponents
}, {
    path: 'contact',
    component: ContactComponents
}];

export const routers: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
