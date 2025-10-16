"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const stagiaire_1 = require("./stagiaire");
const formation_1 = require("./formation");
class Main {
    static main() {
        console.log("Début du programme");
        const stagiaire1 = new stagiaire_1.Stagiaire("Doe", [12, 14, 16]);
        const stagiaire2 = new stagiaire_1.Stagiaire("Smith", [10, 15, 13]);
        const stagiaire3 = new stagiaire_1.Stagiaire("Johnson", [18, 17, 19]);
        const stagiaires = [stagiaire1, stagiaire2, stagiaire3];
        const formation1 = new formation_1.Formation("TypeScript", 5, stagiaires);
        console.log(`Moyenne de la formation : ${formation1.calculerMoyenneFormation().toFixed(2)}`);
        console.log("Informations de la formation");
        console.log(`Type de la formation : ${formation1.intitule}`);
        console.log(`Durée de la formation : ${formation1.nbJours} jours`);
        console.log(`Nombre de stagiaires : ${formation1.stagiaires.length}`);
        console.log("\nListe des stagiaires :");
        formation1.stagiaires.forEach((stagiaire) => {
            console.log(`Nom: ${stagiaire.nom}, Moyenne: ${stagiaire.calculerMoyenne().toFixed(2)}`);
            console.log("Maximum des notes : " + stagiaire.trouverMax());
            console.log("Minimum des notes : " + stagiaire.trouverMin());
            console.log("-".repeat(30));
        });
        console.log("\nStatistiques de la formation :");
        console.log("=".repeat(50));
        console.log(`Meilleur stagiaire : ${formation1.afficherNomMax()}`);
        console.log(`Sa note minimale : ${formation1.afficherMinMax()}`);
        console.log(`Moyenne de Doe : ${formation1.trouverMoyenneParNom("Doe")}`);
    }
}
exports.Main = Main;
// Appel du programme
Main.main();
//# sourceMappingURL=main.js.map