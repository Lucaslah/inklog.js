const logger = require('./lib/Logger')

logger.NoColor() // Removes Color

logger.log('Test') // Plain Log

logger.warn('Test') // Warn Log

logger.AddColor() // Adds Color

logger.info('Test') // Info Log

logger.error('Test') // Error Log

logger.debug('Test') // Debug Log