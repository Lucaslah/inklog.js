const logger = require('./lib');

logger.NoColor(); // Removes Color

logger.log('Test') // Plain Log

logger.warn('Test') // Warn Log

logger.AddColor() // Adds Color

logger.NoPrefix(); // Remove Prefix

logger.info('Test') // Info Log

logger.error('Test') // Error Log

logger.addPrefix(); // Add Prefix

logger.debug('Test') // Debug Log