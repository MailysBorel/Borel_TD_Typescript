"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
// Importation de la classe Stagiaire depuis un autre fichier
const stagiaire_1 = require("./stagiaire");
// Définition de la classe Formation
class Formation {
    // Déclaration des propriétés privées de la classe
    _intitule; // Intitulé de la formation
    _nbJours; // Nombre de jours de la formation
    _stagiaires; // Tableau des stagiaires inscrits à la formation
    // Constructeur de la classe pour initialiser les propriétés
    constructor(intitule, nbJours, stagiaires) {
        this._intitule = intitule;
        this._nbJours = nbJours;
        this._stagiaires = stagiaires;
    }
    // Getters et Setters pour accéder et modifier les propriétés privées
    get intitule() {
        return this._intitule;
    }
    set intitule(intitule) {
        this._intitule = intitule;
    }
    get nbJours() {
        return this._nbJours;
    }
    set nbJours(nbJours) {
        this._nbJours = nbJours;
    }
    get stagiaires() {
        return this._stagiaires;
    }
    set stagiaires(stagiaires) {
        this._stagiaires = stagiaires;
    }
    // 6) Calculer la moyenne générale de la formation
    calculerMoyenneFormation() {
        // Si aucun stagiaire, la moyenne est 0
        if (this._stagiaires.length === 0)
            return 0;
        // On calcule la somme des moyennes de tous les stagiaires
        const sommeMoyennes = this._stagiaires.reduce((acc, stagiaire) => acc + stagiaire.calculerMoyenne(), 0);
        // On divise par le nombre de stagiaires pour obtenir la moyenne générale
        return sommeMoyennes / this._stagiaires.length;
    }
    // 7) Trouver l’index du stagiaire ayant la meilleure moyenne
    getIndexMax() {
        // Si aucun stagiaire, retourner -1
        if (this._stagiaires.length === 0)
            return -1;
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
    afficheNomMax() {
        const indexMax = this.getIndexMax();
        if (indexMax !== -1) {
            const meilleurStagiaire = this._stagiaires[indexMax];
            console.log(`Le stagiaire ayant la meilleure moyenne est : ${meilleurStagiaire.nom} avec une moyenne de ${meilleurStagiaire.calculerMoyenne()}`);
        }
        else {
            console.log("Aucun stagiaire dans la formation.");
        }
    }
    // 9) Affiche la note minimale du stagiaire ayant la meilleure moyenne
    afficheMinStagiaireMax() {
        const indexMax = this.getIndexMax();
        if (indexMax !== -1) {
            const meilleurStagiaire = this._stagiaires[indexMax];
            const noteMin = meilleurStagiaire.trouverMin(); // Méthode de la classe Stagiaire pour trouver la note minimale
            console.log(`La note minimale du meilleur stagiaire (${meilleurStagiaire.nom}) est : ${noteMin}`);
        }
        else {
            console.log("Aucun stagiaire dans la formation.");
        }
    }
    // 10) Affiche la moyenne d’un stagiaire par son nom
    trouverMoyenneParNom(nom) {
        // On cherche le stagiaire correspondant au nom donné
        const stagiaire = this._stagiaires.find(s => s.nom === nom);
        if (stagiaire) {
            console.log(`La moyenne de ${nom} est : ${stagiaire.calculerMoyenne()}`);
        }
        else {
            console.log(`Aucun stagiaire trouvé avec le nom : ${nom}`);
        }
    }
}
exports.Formation = Formation;
//# sourceMappingURL=Formation.js.map