export const logBuildInfo = () => {
  console.info(`version: %c${VITE_APP_VERSION}`, 'font-weight:bold');
  console.info(`timestamp: %c${VITE_BUILD_TIMESTAMP}`, 'font-weight:bold');
  console.info(`commit: %c${VITE_COMMIT_HASH}`, 'font-weight:bold');
};
