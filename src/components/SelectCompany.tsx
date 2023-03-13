import { type ComponentType } from 'react';
import { useQuery } from 'react-query';
import { useAppStore } from '../common/appStore';
import { useAuth } from '../common/auth';
import { httpClient } from '../common/httpClient';
import { type Permission } from '../common/types';
import { Select } from './Select';

export const SelectCompany: ComponentType = () => {
  const auth = useAuth();
  const isNormalUser = auth.user !== null && !auth.user.is_root;
  const permissions = useQuery({
    queryKey: ['permissions'],
    queryFn: () => httpClient.fetch<Permission[]>('/permissions'),
    enabled: isNormalUser,
  });
  const appStore = useAppStore();

  if (!isNormalUser || !permissions.data) {
    return null;
  }

  return (
    <Select
      title="Select company"
      items={permissions.data.map((permission) => permission.company)}
      value={appStore.selectedCompany}
      onChange={(company) => appStore.mergeState({ selectedCompany: company })}
    />
  );
};
