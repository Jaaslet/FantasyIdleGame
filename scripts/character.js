class Character
{
    unlocked = false;
    
    constructor(divId, name, baseAtk, baseDef, baseHp)
    {
        this.divId = divId;
        this.name = name;
        this.baseAtk = baseAtk;
        this.baseDef = baseDef;
        this.baseHp = baseHp;
    }
    
        
    getAtk() { if (this.unlocked) return this.baseAtk; else return 0; }
    getDef() { if (this.unlocked) return this.baseDef; else return 0; }
    getHp() { if (this.unlocked) return this.baseHp; else return 0; }
        
    updateUI    ()
    {
        if (this.unlocked)
        {
            $('#characters').append(
                '<div id="' + this.divId + '" class="character">' +
                    '<h3 class="character-name">' + this.name + '</h3>' +
                    '<div class="character-stats">' +
                        '<div class="character-atk">Akt:<br/>' + this.getAtk() + '</div>' +
                        '<div class="character-def">Def:<br/>' + this.getDef() + '</div>' +
                        '<div class="character-hp">Hp:<br/>' + this.getHp() + '</div>' +
                    '</div>' +
                '</div>'
            )
        }
    }
}