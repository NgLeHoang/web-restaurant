import {Home,
        About,
        Contact,
        Gallery,
        Menu
        } from '../pages';
import {Appetizers, 
        SpringRolls, 
        FriedRice, 
        Pho,
        NoodleSoup,
        RicePlate,
        RiceVermicelliBowl,
        FamilySize,
        StirFriedNoodle,
        Beverage
        } from '../pages/MenuDetails';
import config from '../config';

const routes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.about, component: About},
    {path: config.routes.contact, component: Contact},
    {path: config.routes.gallery, component: Gallery},
    {path: config.routes.menu, component: Menu},
    {path: config.routes.appetizers, component: Appetizers},
    {path: config.routes.springrolls, component: SpringRolls},
    {path: config.routes.friedrice, component: FriedRice},
    {path: config.routes.pho, component: Pho},
    {path: config.routes.noodlesoup, component: NoodleSoup},
    {path: config.routes.riceplate, component: RicePlate},
    {path: config.routes.ricevermicellibowl, component: RiceVermicelliBowl},
    {path: config.routes.familysize, component: FamilySize},
    {path: config.routes.stirfriednoodle, component: StirFriedNoodle},
    {path: config.routes.beverage, component: Beverage},
];

export default routes;