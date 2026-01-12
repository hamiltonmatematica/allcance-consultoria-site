
export interface ServiceDetail {
  title: string;
  description?: string;
  subItems?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  expandedDetails?: ServiceDetail[];
}

export interface Client {
  name: string;
  location: string;
}
