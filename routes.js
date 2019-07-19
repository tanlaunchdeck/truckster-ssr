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

    .add('trucks')
    .add('truck-owner')

    .add('food-truck-catering')
    .add('success', '/order/:success')
    
    .add('info-detail', '/info/:slug')
    .add('info', '/info/page/:page')
    .add('pairing', '/pairing/:state/:city')

    .add('events', '/event/:state/:city')
    .add('event', '/event/:slug')

    .add('brewery-detail', '/brewery/:slug')
    .add('brewery')
    .add('brewery-type', '/brewery-type/:value')
    .add('food-trucks')

    .add('truck-detail-redirect', '/truck/:state/:city')
    .add('truck-redirect', '/truck/:state/:city')
    
    .add('truck', '/food-truck/:slug', 'truck')
    .add('cuisine-redirect', '/cuisine/:value')
    .add('cuisines', '/food-truck/:state/:city/cuisines')
    .add('food-truck', '/food-truck/:state/:city/all')
  
    .add('city-detail', '/food-truck/:state/:city')
    .add('city-detail-redirect', '/:state/:city')
    .add('cuisine', '/food-truck/:state/:city/:value')

