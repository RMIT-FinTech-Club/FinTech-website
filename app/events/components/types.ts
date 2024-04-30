export interface Event {
    id: number;
    name: string;
    dateTime: string;
    type: 'Offline' | 'Online' | 'Hybrid';
    location: string;
    imageUrl: string;
  }
  