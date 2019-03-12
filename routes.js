const routes = require('next-routes')

module.exports = routes()
    .add('about')
    .add('help')
    .add('contact')
    .add('privacy')
    .add('user')
    .add('edit')
    .add('nearby')
    .add('search')
    .add('intro')
    .add('city')
    .add('trucks')
    .add('food-truck-catering')
    .add('success', '/order/:success')

    .add('info', '/info/:slug')
    .add('info-page', '/info/page/:page')
    .add('pairing', '/pairing/:state/:city')

    .add('events', '/event/:state/:city')
    .add('event', '/event/:slug')

    .add('breweries', '/brewery/:state/:city')
    .add('brewery', '/brewery/:slug')

    .add('brewery-type', '/brewery-type/:value')

    .add('truck-detail-redirect', '/truck/:state/:city')
    .add('truck-redirect', '/truck/:state/:city')
    .add('food-truck', '/food-truck/:state/:city/all')
    .add('truck', '/food-truck/:slug', 'truck')

    .add('cuisine-redirect', '/cuisine/:value')
    .add('cuisines', '/food-truck/:state/:city/cuisines')
    .add('cuisine', '/food-truck/:state/:city/:value')
  

    .add('cities', '/co')
    .add('city-detail', '/food-truck/:state/:city')
    .add('city-detail-redirect', '/:state/:city')
