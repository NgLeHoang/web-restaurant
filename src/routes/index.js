import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Gallery from '../pages/Gallery/Gallery';
import Menu from '../pages/Menu/Menu';
import Home from '../pages/Home/Home';
import config from '../config';

const routes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.about, component: About},
    {path: config.routes.contact, component: Contact},
    {path: config.routes.gallery, component: Gallery},
    {path: config.routes.menu, component: Menu}
];

export default routes;