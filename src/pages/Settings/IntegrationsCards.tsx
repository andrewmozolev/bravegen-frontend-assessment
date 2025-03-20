import KafkaImage from '../../assets/Kafka.png';
import MeasurablImage from '../../assets/Measurabl.png';
import PowerBIImage from '../../assets/PowerBI.png';
import QuickSightImage from '../../assets/QuickSight.png';
import TableauImage from '../../assets/Tableau.png';
import ZapierImage from '../../assets/Zapier.png';
import Card from '../../components/Card/Card';
import AddConnectionModal from '../../components/Modals/AddConnectionModal';
import { useModal } from '../../helpers/hooks/useModal';
import { ConnectionService } from '../../interfaces/Integrations';

const connectionServices: ConnectionService[] = [
  {
    name: 'Amazon QuickSight',
    link: '#',
    description: 'Amazon BI service to create dashboards and interactive visualisations.',
    icon: QuickSightImage,
  },
  {
    name: 'Kafka',
    link: '#',
    description: 'Real-time data streaming, event-driven architectures and messaging systems.',
    icon: KafkaImage,
  },
  {
    name: 'Power BI',
    link: '#',
    description: 'Microsoft BI service to create dashboards and data visualisations.',
    icon: PowerBIImage,
  },
  {
    name: 'Zapier',
    link: '#',
    description: 'Automation tool that connects various apps and services to automate workflows.',
    icon: ZapierImage,
  },
  {
    name: 'Tableau',
    link: '#',
    description: 'BI service that helps seeing and transforming data into actionable insights.',
    icon: TableauImage,
  },
  {
    name: 'Measurabl',
    link: '#',
    description: 'Enable the push and pull of data to and from Measurabl via an API.',
    icon: MeasurablImage,
  },
];

export default function IntegrationConnectionCards() {
  const { openModal } = useModal();

  return (
    <ul className="mr-24 grid grid-cols-3 gap-7">
      {connectionServices.map((service) => (
        <Card
          key={service.name}
          title={service.name}
          description={service.description}
          icon={service.icon}
          buttonText="Add Connection"
          onButtonClick={() => openModal(<AddConnectionModal name={service.name} link={service.link} />)}
        />
      ))}
    </ul>
  );
}
