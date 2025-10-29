export interface DentistInterface {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  clinicName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: 53233;
  };
  phone: string;
  email: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
  };
  rating: number;
  acceptingNewPatients: boolean;
  image?: string;
}
