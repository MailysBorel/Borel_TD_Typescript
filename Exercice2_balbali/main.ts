import { Formation } from "./Formation";
import { Stagiaire } from "./Stagiaire";

class Main {
    public static main(): void {
        console.log("Début du programme");
        const Stagiaire1: Stagiaire = new Stagiaire("Doe", [12, 14, 16]);
        const Stagiaire2: Stagiaire = new Stagiaire("Smith", [10, 15, 13]);
        const stagiaire3: Stagiaire = new Stagiaire("Johnson", [18, 17, 19]);
        const Stagiaires: Stagiaire[] = [Stagiaire1, Stagiaire2, stagiaire3];
        const formation: Formation = new Formation("TypeScript",5, Stagiaires);
        console.log(`Moyenne de la formation ${formation.calculeMoyenneFormation()}`);
        console.log("informations de la formation :");
        console.log(`Type: ${formation.intitule}`);
        console.log(`Durée: ${formation.nbrjour} jours`);
        console.log(`Nombre de stagiaires: ${formation.Stagiaire.length}`);

        //afficher la liste des stagiaires
        console.log("Liste des stagiaires :");
        formation.Stagiaire.forEach((Stagiaires) => {
            console.log(`Nom: ${Stagiaires.nom}, 
                Notes: ${Stagiaires.notes}, 
                Moyenne: ${Stagiaires.calculerMoyenne()}, 
                Max: ${Stagiaires.trouverMax()}, 
                Min: ${Stagiaires.trouverMin()}`);
        });
    }
}