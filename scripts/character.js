var characterIdCounter = 0;

class Character
{
    unlocked = false;
    xp = 0;
    
    constructor(divId, name, baseAtk, baseDef, baseHp)
    {
        this.divId = divId;
        this.name = name;
        this.baseAtk = baseAtk;
        this.baseDef = baseDef;
        this.baseHp = baseHp;
        this.id = characterIdCounter++;
    }
    
        
    getAtk() { if (this.unlocked) return this.baseAtk; else return 0; }
    getDef() { if (this.unlocked) return this.baseDef; else return 0; }
    getHp() { if (this.unlocked) return this.baseHp; else return 0; }
    
    addXp(amount)
    {
        if (!this.unlocked)
            return;
        
        this.xp += amount;
    }
        
    updateUI()
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
    
    save(characterSaveObject)
    {
        characterSaveObject[this.id] = { xp: this.xp, unlocked: this.unlocked };
    }
    
    load(characterSaveObject)
    {
        var charObj = characterSaveObject[this.id];
        if (charObj === undefined)
            return;
        
        this.xp = charObj.xp;
        this.unlocked = charObj.unlocked;
    }
}