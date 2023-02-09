import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

export default TranslateText = ({ children }) => {
  const { t } = useTranslation();
  return <Text >{t(children)}</Text>;
};

