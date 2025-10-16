// 1) Définition de la classe Stagiaire
export class Stagiaire {

    private _nom: string;       // Nom du stagiaire
    private _notes: number[];   // Tableau contenant les notes du stagiaire


    constructor(nom: string, notes: number[]) {
        this._nom = nom;      // Initialisation du nom
        this._notes = notes;  // Initialisation des notes
    }

    // 2) Getters et Setters
    // Getter pour le nom : permet de récupérer le nom du stagiaire
    public get nom(): string {
        return this._nom;  // Retourne la valeur de la propriété privée _nom
    }

    // Setter pour le nom : permet de modifier le nom du stagiaire
    public set nom(nom: string) {
        this._nom = nom;   // Met à jour la propriété privée _nom avec la nouvelle valeur
    }

    // Getter pour les notes : permet de récupérer le tableau de notes
    public get notes(): number[] {
        return this._notes;  // Retourne le tableau de notes
    }

    // Setter pour les notes : permet de remplacer le tableau de notes par un nouveau tableau
    public set notes(notes: number[]) {
        this._notes = notes;  // Met à jour la propriété privée _notes
    }

    // 3) Méthode pour calculer la moyenne des notes
    public calculerMoyenne(): number {
        // Si aucune note n'est présente, on retourne 0 pour éviter une division par zéro
        if (this._notes.length === 0) return 0;

        // reduce permet de faire la somme de toutes les notes
        const somme = this._notes.reduce((acc, note) => acc + note, 0);

        // On divise la somme par le nombre de notes pour obtenir la moyenne
        return somme / this._notes.length;
    }

    // 4) Méthode pour trouver la note maximale
    public trouverMax(): number {
        // Si le tableau est vide, retourne 0
        if (this._notes.length === 0) return 0;

        // Math.max(...this._notes) utilise le spread operator pour passer toutes les notes comme arguments
        return Math.max(...this._notes);
    }

    // Méthode pour trouver la note minimale
    public trouverMin(): number {
        // Si le tableau est vide, retourne 0
        if (this._notes.length === 0) return 0;
        return Math.min(...this._notes);
    }
}
