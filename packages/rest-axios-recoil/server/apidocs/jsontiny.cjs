const fs = require('fs');
const routes = require('./_routes.json');
const path = require('path');

const regex = /^__(.*__)?$/gim;

const newRoutes = {};
for (const [key, value] of Object.entries(routes)) {
  if (!regex.test(key)) {
    newRoutes[key] = value;
  }
}

fs.writeFileSync(path.join(__dirname, '..', 'routes.json'), JSON.stringify(newRoutes, null, 2));
