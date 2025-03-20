import Badge from '../components/Badge/Badge';
import { SourceType } from '../interfaces/Integrations';

export const getSourceBadge = (type: SourceType) => {
  switch (type) {
    case 'Carbon':
      return <Badge variant="warning">Carbon</Badge>;
    case 'Utility':
      return <Badge variant="info">Utility</Badge>;
    default:
      return '';
  }
};
