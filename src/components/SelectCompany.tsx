import { useEffect, type ComponentType } from 'react';
import { useQuery } from 'react-query';
import { useAppStore } from '../common/appStore';
import { useAuth } from '../common/auth';
import { QUERY_KEYS } from '../common/constants';
import { httpClient } from '../common/httpClient';
import { type Permission } from '../common/types';
import { Select } from './core/Select';

export const SelectCompany: ComponentType = () => {
  const auth = useAuth();
  const isNormalUser = auth.user !== null && !auth.user.is_root;
  const companies = useQuery({
    queryKey: [QUERY_KEYS.PERMISSIONS_COMPANIES],
    queryFn: async () => {
      const permissions = await httpClient.fetch<Permission[]>('/permissions');
      return permissions.map((permission) => permission.company);
    },
    enabled: isNormalUser,
  });
  const appStore = useAppStore();

  useEffect(() => {
    if (companies.data && companies.data.length > 0 && appStore.selectedCompany === null) {
      appStore.mergeState({ selectedCompany: companies.data[0] });
    }
  }, [companies.data, appStore.selectedCompany]);

  if (!isNormalUser || !companies.data) {
    return null;
  }

  return (
    <Select
      items={companies.data}
      value={appStore.selectedCompany}
      onChange={(company) => appStore.mergeState({ selectedCompany: company })}
    />
  );
};
