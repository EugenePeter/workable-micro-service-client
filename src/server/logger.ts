import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const log_format = printf(({ level, message, label, timestamp }) => `${timestamp} [${label}] ${level}: ${message}`);

export default createLogger({
  level: 'info',
  format: combine(label({ label: 'server' }), timestamp(), log_format),
  transports: [new transports.Console()],
});
