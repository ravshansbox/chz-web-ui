export const logBuildInfo = () => {
  console.info(`version: %c${VITE_APP_VERSION}`, 'font-weight:bold');
  console.info(
    `timestamp: %c${new Date(VITE_BUILD_TIMESTAMP).toLocaleString()}`,
    'font-weight:bold',
  );
};
