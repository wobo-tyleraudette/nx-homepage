// load secrets on runtime from window
const location =
  process.env.NODE_ENV === 'development' ? process.env : window.__env__;

export const config = {
  HOMEPAGE_APP_URL: location['NX_HOMEPAGE_APP_URL'] || '',
  HOMEPAGE_API_URL: location['NX_HOMEPAGE_API_URL'] || '',
  WB_API_URL: location['NX_NODEJS_CREDENTIAL_WB_API_URL'] || '',
  KEY_VAULT_URL: `https://${location['NX_AZURE_KV_NAME']}.vault.azure.net`,
  WINDOW_TEST: window.__env__.test,
  NX_PROXY_URI: location['NX_PROXY_URI'] || '',
  NX_CLIENT_ID: location['NX_CLIENT_ID'] || '',
  NX_AUTH_ENDPOINT: location['NX_AUTH_ENDPOINT'] || '',
  NX_WB_BASE_URL: location['NX_WB_BASE_URL'] || '',
};
