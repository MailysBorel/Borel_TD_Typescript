// Importation de la classe Adresse pour l’utiliser dans Personne
import { Adresse } from "./Adresse";

// Classe représentant une personne
export class Personne {
  // Attributs privés
  private nom: string;
  private sexe: string; // Doit être "M" ou "F"
  private adresses: Adresse[];

  // Constructeur pour initialiser les attributs
  constructor(nom: string, sexe: string, adresses: Adresse[] = []) {
    this.nom = nom;
    this.sexe = sexe;
    this.adresses = adresses;
  }

  // ----- Getters -----
  public getNom(): string {
    return this.nom;
  }

  public getSexe(): string {
    return this.sexe;
  }

  public getAdresses(): Adresse[] {
    return this.adresses;
  }

  // ----- Setters -----
  public setNom(nom: string): void {
    this.nom = nom;
  }

  // Vérifie que le sexe est bien "M" ou "F" avant de modifier
  public setSexe(sexe: string): void {
    if (sexe === "M" || sexe === "F") {
      this.sexe = sexe;
    } else {
      throw new Error("Le sexe doit être 'M' ou 'F'.");
    }
  }

  public setAdresses(adresses: Adresse[]): void {
    this.adresses = adresses;
  }

  // Méthode pour ajouter une adresse à la personne
  public addAdresse(adresse: Adresse): void {
    this.adresses.push(adresse);
  }
}
