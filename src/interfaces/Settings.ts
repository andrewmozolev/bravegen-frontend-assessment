import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SettingMenuCategory = {
  category: string;
  items: SettingItem[];
};

export type SettingItem = {
  name: string;
  icon: IconDefinition;
  route: string;
  disabled?: boolean;
};
