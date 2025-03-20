export type IntegrationType = 'Amazon QuickSight' | 'Kafka' | 'Power BI' | 'Zapier' | 'Tableau' | 'Measurabl';

export type SourceType = 'Carbon' | 'Utility';

export type Integration = {
  id: string;
  integration: IntegrationType;
  name: string;
  nameUrl: string;
  source: SourceType;
  entity: string;
  interval: string;
  connectorUrl: string;
  instructionsUrl: string;
};

export type ConnectionService = {
  name: string;
  link: string;
  description: string;
  icon: string;
};
