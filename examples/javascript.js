const logger = require('../dist/index');

// Loggers
logger.debug('Debug Message');
logger.info('Info Message');
logger.error('Error Message');
logger.warn('Warn Message');
logger.log('Log Message');

// Extras
logger.AddColor();
logger.NoColor();
logger.addPrefix();
logger.NoPrefix();