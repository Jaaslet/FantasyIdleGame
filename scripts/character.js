

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
        
        getAkt: function() { return baseAtk },
        getDef: function() { return baseDef },
        getHp: function() { return baseHp },
        
        updateUI: function()
        {
            if (this.unlocked)
            {
                $('#characters').append(
                    '<div id="' + divId + '" class="character">' +
                        '<h3 class="character-name">' + name + '</h3>' +
                        '<div class="character-stats"' +
                            '<div class="character-atk">' + this.getAkt() + '</div>' +
                            '<div class="character-def">' + this.getDef() + '</div>' +
                            '<div class="character-hp">' + this.getHp() + '</div>' +
                        '</div>' +
                    '</div>'
                )
            }
        }
    };
    
    return result;
}