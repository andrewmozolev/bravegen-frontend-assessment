import KafkaImage from '../assets/Kafka.png';
import MeasurablImage from '../assets/Measurabl.png';
import PowerBIImage from '../assets/PowerBI.png';
import QuickSightImage from '../assets/QuickSight.png';
import TableauImage from '../assets/Tableau.png';
import ZapierImage from '../assets/Zapier.png';
import { IntegrationType } from '../interfaces/Integrations';

export const getIntegrationIcon = (integration: IntegrationType) => {
  switch (integration) {
    case 'Amazon QuickSight':
      return QuickSightImage;
    case 'Kafka':
      return KafkaImage;
    case 'Power BI':
      return PowerBIImage;
    case 'Zapier':
      return ZapierImage;
    case 'Tableau':
      return TableauImage;
    case 'Measurabl':
      return MeasurablImage;
    default:
      return '';
  }
};
