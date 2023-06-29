interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
  }

export interface Room extends SanityBody {
    _type: 'room';
    name: string;
    title: string,
    image: Image[];
    slug: {
        current: string;
    };
    country: string;
    city: string;
    price: number;
    size: number;
    person: number;
    description: string; 
    phone: number;
    email: string;
    wifi: string;
    adresse: string;
  }