import KafkaImage from '../../assets/Kafka.png';
import MeasurablImage from '../../assets/Measurabl.png';
import PowerBIImage from '../../assets/PowerBI.png';
import QuickSightImage from '../../assets/QuickSight.png';
import TableauImage from '../../assets/Tableau.png';
import ZapierImage from '../../assets/Zapier.png';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';

export default function Integrations() {
  return (
    <div className="pt-8">
      <h2 className="mb-2.5 text-[22px] font-medium text-gray-900">Choose a Service to Connect</h2>
      <p className="mb-7 text-sm font-normal text-gray-500">Connect BraveGen to other tools you use.</p>
      <ul className="grid max-w-[1162px] grid-cols-3 gap-7">
        <Card
          title="Amazon QuickSight"
          description="Amazon BI service to create dashboards and interactive visualisations."
          icon={QuickSightImage}
          link="#"
          buttonText="Add Connection"
        />
        <Card
          title="Kafka"
          description="Real-time data streaming, event-driven architectures and messaging systems."
          icon={KafkaImage}
          link="#"
          buttonText="Add Connection"
        />
        <Card
          title="Power BI"
          description="Microsoft BI service to create dashboards and data visualisations."
          icon={PowerBIImage}
          link="#"
          buttonText="Add Connection"
        />
        <Card
          title="Zapier"
          description="Automation tool that connects various apps and services to automate workflows."
          icon={ZapierImage}
          link="#"
          buttonText="Add Connection"
        />
        <Card
          title="Tableau"
          description="BI service that helps seeing and transforming data into actionable insights."
          icon={TableauImage}
          link="#"
          buttonText="Add Connection"
        />
        <Card
          title="Measurabl"
          description="Enable the push and pull of data to and from Measurabl via an API."
          icon={MeasurablImage}
          link="#"
          buttonText="Add Connection"
        />
      </ul>

      <div className="my-7 h-[1px] w-full max-w-[1162px] bg-gray-200"></div>

      <h2 className="mb-5 text-[22px] font-medium text-gray-900">Existing Connections</h2>
      <div className="max-w-[423px]">
        <Input placeholder="Integration or Name" />
      </div>
    </div>
  );
}
