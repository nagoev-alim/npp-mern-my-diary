// 🔳 Custom import
import { configuration } from '../config/index.js';

/**
 * @description Custom error handling
 * @return {object}
 */
export default async (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: configuration.env === 'development' ? err.stack : {},
  });
};
