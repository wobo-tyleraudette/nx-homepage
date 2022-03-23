import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import { config } from './config';
import { Logger } from '@nestjs/common';

export const getSecrets = async () => {
  const kvUrl = `https://${process.env['NX_AZURE_KV_NAME']}.vault.azure.net`;
  const credential = new DefaultAzureCredential({
    managedIdentityClientId: process.env.NX_MANAGED_IDENTITY_CLIENT_ID,
  });

  const client = new SecretClient(kvUrl, credential);
  // find missing secrets
  const secretsToFetch = Object.entries(config).reduce((acc, [key, value]) => {
    if (!value) {
      const secretName = key.replace(/_/g, '-');
      acc.push({ key, secretName });
    }
    return acc;
  }, []);

  // get missing secrets from key vault
  const secretPromises = secretsToFetch.map(async (secret) => {
    const val = await client.getSecret(secret.secretName);
    return { key: secret.key, value: val.value };
  });
  const secrets = await Promise.allSettled(secretPromises);

  // set missing values
  secrets.forEach((secret) => {
    if (secret.status === 'rejected') {
      Logger.log(`error fetching secret: ${secret} from ${kvUrl}`);
    }
    if (secret.status === 'fulfilled') {
      process.env[`NX_${secret.value.key}`] = secret.value.value;
    }
  });
};
