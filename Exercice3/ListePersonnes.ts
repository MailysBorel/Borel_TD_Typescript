// Importation de la classe Personne
import { Personne } from "./Personne";

// Classe qui contient une liste de personnes et des méthodes pour la gérer
export class ListePersonnes {
  private personnes: Personne[];

  // Constructeur : on peut passer un tableau de personnes à l’initialisation
  constructor(personnes: Personne[] = []) {
    this.personnes = personnes;
  }

  // ----- Getters / Setters -----
  public getPersonnes(): Personne[] {
    return this.personnes;
  }

  public setPersonnes(personnes: Personne[]): void {
    this.personnes = personnes;
  }

  // 3️ Méthode : rechercher une personne par son nom
  // Retourne le premier objet trouvé ou null si personne ne correspond
  public findByNom(s: string): Personne | null {
    const personne = this.personnes.find(p => p.getNom() === s);
    return personne || null;
  }

  // 4️ Méthode : vérifier si au moins une personne a une adresse avec le code postal donné
  // Retourne true si trouvée, sinon false
  public findByCodePostal(cp: string): boolean {
    return this.personnes.some(p =>
      p.getAdresses().some(a => a.getCodePostal() === cp)
    );
  }

  // 5️ Méthode : compter combien de personnes ont au moins une adresse dans une ville donnée
  public countPersonneVille(ville: string): number {
    return this.personnes.filter(p =>
      p.getAdresses().some(a => a.getVille() === ville)
    ).length;
  }

  // 6️ Méthode : modifier le nom d’une personne
  // Remplace oldNom par newNom pour toutes les personnes concernées
  public editPersonneNom(oldNom: string, newNom: string): void {
    this.personnes.forEach(p => {
      if (p.getNom() === oldNom) {
        p.setNom(newNom);
      }
    });
  }

  // 7️ Méthode : modifier la ville de toutes les adresses
  // des personnes ayant le nom donné
  public editPersonneVille(nom: string, newVille: string): void {
    this.personnes.forEach(p => {
      if (p.getNom() === nom) {
        p.getAdresses().forEach(a => a.setVille(newVille));
      }
    });
  }
}
