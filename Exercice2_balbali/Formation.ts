// Importation de la classe Stagiaire depuis un autre fichier
import { Stagiaire } from './stagiaire';

// Définition de la classe Formation
export class Formation {
    // Déclaration des propriétés privées de la classe
    private _intitule: string;       // Intitulé de la formation
    private _nbJours: number;        // Nombre de jours de la formation
    private _stagiaires: Stagiaire[]; // Tableau des stagiaires inscrits à la formation

    // Constructeur de la classe pour initialiser les propriétés
    constructor(intitule: string, nbJours: number, stagiaires: Stagiaire[]) {
        this._intitule = intitule;
        this._nbJours = nbJours;
        this._stagiaires = stagiaires;
    }

    // Getters et Setters pour accéder et modifier les propriétés privées
    public get intitule(): string {
        return this._intitule;
    }

    public set intitule(intitule: string) {
        this._intitule = intitule;
    }

    public get nbJours(): number {
        return this._nbJours;
    }

    public set nbJours(nbJours: number) {
        this._nbJours = nbJours;
    }

    public get stagiaires(): Stagiaire[] {
        return this._stagiaires;
    }

    public set stagiaires(stagiaires: Stagiaire[]) {
        this._stagiaires = stagiaires;
    }

    // 6) Calculer la moyenne générale de la formation
    public calculerMoyenneFormation(): number {
        // Si aucun stagiaire, la moyenne est 0
        if (this._stagiaires.length === 0) return 0;

        // On calcule la somme des moyennes de tous les stagiaires
        const sommeMoyennes = this._stagiaires.reduce(
            (acc, stagiaire) => acc + stagiaire.calculerMoyenne(),
            0
        );

        // On divise par le nombre de stagiaires pour obtenir la moyenne générale
        return sommeMoyennes / this._stagiaires.length;
    }

    // 7) Trouver l’index du stagiaire ayant la meilleure moyenne
    public getIndexMax(): number {
        // Si aucun stagiaire, retourner -1
        if (this._stagiaires.length === 0) return -1;

        let indexMax = 0; // Index du stagiaire avec la meilleure moyenne
        let maxMoyenne = this._stagiaires[0].calculerMoyenne(); // On initialise avec la première moyenne

        // Parcours de tous les stagiaires pour trouver la meilleure moyenne
        for (let i = 1; i < this._stagiaires.length; i++) {
            const moyenneActuelle = this._stagiaires[i].calculerMoyenne();
            if (moyenneActuelle > maxMoyenne) {
                maxMoyenne = moyenneActuelle;
                indexMax = i;
            }
        }

        return indexMax;
    }

    // 8) Afficher le nom du stagiaire ayant la meilleure moyenne
    public afficheNomMax(): void {
        const indexMax = this.getIndexMax();
        if (indexMax !== -1) { 
            const meilleurStagiaire = this._stagiaires[indexMax];
            console.log(
                `Le stagiaire ayant la meilleure moyenne est : ${meilleurStagiaire.nom} avec une moyenne de ${meilleurStagiaire.calculerMoyenne()}`
            );
        } else {
            console.log("Aucun stagiaire dans la formation.");
        }
    }

    // 9) Affiche la note minimale du stagiaire ayant la meilleure moyenne
    public afficheMinStagiaireMax(): void {
        const indexMax = this.getIndexMax();
        if (indexMax !== -1) {
            const meilleurStagiaire = this._stagiaires[indexMax];
            const noteMin = meilleurStagiaire.trouverMin(); // Méthode de la classe Stagiaire pour trouver la note minimale
            console.log(
                `La note minimale du meilleur stagiaire (${meilleurStagiaire.nom}) est : ${noteMin}`
            );
        } else {
            console.log("Aucun stagiaire dans la formation.");
        }
    }

    // 10) Affiche la moyenne d’un stagiaire par son nom
    public trouverMoyenneParNom(nom: string): void {
        // On cherche le stagiaire correspondant au nom donné
        const stagiaire = this._stagiaires.find(s => s.nom === nom);
        if (stagiaire) {
            console.log(`La moyenne de ${nom} est : ${stagiaire.calculerMoyenne()}`);
        } else {
            console.log(`Aucun stagiaire trouvé avec le nom : ${nom}`);
        }
    }
}
