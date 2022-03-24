import swaggerAutogen from 'swagger-autogen';


const doc = {
    info: {
      title: 'API Desafio 2 RocketSeat',
      description: 'Challenge',
    },
    host: 'localhost:3333',
    schemes: ['http'],
  };
  
  const outputFile = './swagger.json';
  const endpointsFiles = ['./src/index.ts'];
  
  /* NOTE: if you use the express Router, you must pass in the 
     'endpointsFiles' only the root file where the route starts,
     such as index.js, app.js, routes.js, ... */
  
  swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
      await import('./src/server');
  });
