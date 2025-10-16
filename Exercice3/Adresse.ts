// Classe représentant une adresse postale
export class Adresse {
  // Attributs privés (encapsulation)
  private rue: string;
  private ville: string;
  private codePostal: string;

  // Constructeur pour initialiser une adresse
  constructor(rue: string, ville: string, codePostal: string) {
    this.rue = rue;
    this.ville = ville;
    this.codePostal = codePostal;
  }

  // ----- Getters -----
  // Retourne la rue
  public getRue(): string {
    return this.rue;
  }

  // Retourne la ville
  public getVille(): string {
    return this.ville;
  }

  // Retourne le code postal
  public getCodePostal(): string {
    return this.codePostal;
  }

  // ----- Setters -----
  // Modifie la rue
  public setRue(rue: string): void {
    this.rue = rue;
  }

  // Modifie la ville
  public setVille(ville: string): void {
    this.ville = ville;
  }

  // Modifie le code postal
  public setCodePostal(codePostal: string): void {
    this.codePostal = codePostal;
  }
}
