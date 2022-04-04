import { getSecrets } from './secrets';
import { DefaultAzureCredential } from '@azure/identity';
import { Logger } from '@nestjs/common';
import * as secrets from '@azure/keyvault-secrets';

jest.mock('@azure/identity');
const mockCreds = new DefaultAzureCredential({});

describe('callMyFunction function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set secrets', async () => {
    const mockClient = jest
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .spyOn(secrets as any, 'SecretClient')
      .mockImplementation(() => {
        return {
          getSecret: jest.fn().mockResolvedValue({
            value: 'testVal',
            name: 'testname',
            properties: {
              vaultUrl: 'url',
            },
          } as secrets.KeyVaultSecret),
        };
      });

    new secrets.SecretClient('', mockCreds);

    await getSecrets({ HOMEPAGE_APP_URL: '' });
    expect(mockClient).toHaveBeenCalled();
    expect(process.env.NX_HOMEPAGE_APP_URL).toBe('testVal');
  });

  it('should log errors', async () => {
    jest.spyOn(Logger, 'log');

    const mockClient = jest
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .spyOn(secrets as any, 'SecretClient')
      .mockImplementation(() => {
        return {
          getSecret: jest.fn(),
        };
      });

    new secrets.SecretClient('', mockCreds);

    await getSecrets({ HOMEPAGE_APP_URL: '' });
    expect(mockClient).toHaveBeenCalled();
    expect(Logger.log).toHaveBeenCalled();
  });
});
