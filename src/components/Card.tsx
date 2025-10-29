import type { DentistInterface } from "../types/dentits";

export default function Card(dentist: DentistInterface) {
  return (
    <div>
      <div>
        <img src={dentist?.image} alt={dentist.name} />
      </div>
      <h1>{dentist.name}</h1>
      <p>{dentist.specialty}</p>
      <p>{dentist.rating}</p>
    </div>
  );
}
