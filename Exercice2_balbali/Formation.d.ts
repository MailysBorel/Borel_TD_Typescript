import { Stagiaire } from './stagiaire';
export declare class Formation {
    private _intitule;
    private _nbJours;
    private _stagiaires;
    constructor(intitule: string, nbJours: number, stagiaires: Stagiaire[]);
    get intitule(): string;
    set intitule(intitule: string);
    get nbJours(): number;
    set nbJours(nbJours: number);
    get stagiaires(): Stagiaire[];
    set stagiaires(stagiaires: Stagiaire[]);
    calculerMoyenneFormation(): number;
    getIndexMax(): number;
    afficheNomMax(): void;
    afficheMinStagiaireMax(): void;
    trouverMoyenneParNom(nom: string): void;
}
//# sourceMappingURL=Formation.d.ts.map