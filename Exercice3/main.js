import { Adresse } from "./Adresse";
import { Personne } from "./Personne";
import { ListePersonnes } from "./ListePersonnes";

const adr1 = new Adresse("12 rue des Fleurs", "Paris", "75000");
const adr2 = new Adresse("5 avenue des Champs", "Lyon", "69000");
const p1 = new Personne("Alice", "F", [adr1]);
const p2 = new Personne("Bob", "M", [adr2]);

const liste = new ListePersonnes([p1, p2]);

console.log(liste.findByNom("Alice")); // → Personne
console.log(liste.findByCodePostal("69000")); // → true
console.log(liste.countPersonneVille("Paris")); // → 1

liste.editPersonneNom("Bob", "Robert");
liste.editPersonneVille("Alice", "Marseille");

console.log(liste.getPersonnes());
