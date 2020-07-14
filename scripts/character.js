

function newCharacter(divId, name, baseAtk, baseDef, baseHp)
{
    var result =
    {
        divId: divId,
        name: name,
        unlocked: false,
        
        baseAtk: baseAtk,
        baseDef: baseDef,
        baseHp: baseHp,
        
        getAtk: function() { if (this.unlocked) return baseAtk; else return 0; },
        getDef: function() { if (this.unlocked) return baseDef; else return 0; },
        getHp: function() { if (this.unlocked) return baseHp; else return 0; },
        
        updateUI: function()
        {
            if (this.unlocked)
            {
                $('#characters').append(
                    '<div id="' + divId + '" class="character">' +
                        '<h3 class="character-name">' + name + '</h3>' +
                        '<div class="character-stats">' +
                            '<div class="character-atk">Akt:<br/>' + this.getAtk() + '</div>' +
                            '<div class="character-def">Def:<br/>' + this.getDef() + '</div>' +
                            '<div class="character-hp">Hp:<br/>' + this.getHp() + '</div>' +
                        '</div>' +
                    '</div>'
                )
            }
        }
    };
    
    return result;
}