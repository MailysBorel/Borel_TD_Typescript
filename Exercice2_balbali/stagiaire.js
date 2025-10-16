"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
// 1) Définition de la classe Stagiaire
class Stagiaire {
    _nom; // Nom du stagiaire
    _notes; // Tableau contenant les notes du stagiaire
    constructor(nom, notes) {
        this._nom = nom; // Initialisation du nom
        this._notes = notes; // Initialisation des notes
    }
    // 2) Getters et Setters
    // Getter pour le nom : permet de récupérer le nom du stagiaire
    get nom() {
        return this._nom; // Retourne la valeur de la propriété privée _nom
    }
    // Setter pour le nom : permet de modifier le nom du stagiaire
    set nom(nom) {
        this._nom = nom; // Met à jour la propriété privée _nom avec la nouvelle valeur
    }
    // Getter pour les notes : permet de récupérer le tableau de notes
    get notes() {
        return this._notes; // Retourne le tableau de notes
    }
    // Setter pour les notes : permet de remplacer le tableau de notes par un nouveau tableau
    set notes(notes) {
        this._notes = notes; // Met à jour la propriété privée _notes
    }
    // 3) Méthode pour calculer la moyenne des notes
    calculerMoyenne() {
        // Si aucune note n'est présente, on retourne 0 pour éviter une division par zéro
        if (this._notes.length === 0)
            return 0;
        // reduce permet de faire la somme de toutes les notes
        const somme = this._notes.reduce((acc, note) => acc + note, 0);
        // On divise la somme par le nombre de notes pour obtenir la moyenne
        return somme / this._notes.length;
    }
    // 4) Méthode pour trouver la note maximale
    trouverMax() {
        // Si le tableau est vide, retourne 0
        if (this._notes.length === 0)
            return 0;
        // Math.max(...this._notes) utilise le spread operator pour passer toutes les notes comme arguments
        return Math.max(...this._notes);
    }
    // Méthode pour trouver la note minimale
    trouverMin() {
        // Si le tableau est vide, retourne 0
        if (this._notes.length === 0)
            return 0;
        return Math.min(...this._notes);
    }
}
exports.Stagiaire = Stagiaire;
//# sourceMappingURL=stagiaire.js.map