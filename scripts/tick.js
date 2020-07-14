function doTick()
{
    resolveEvent();
}

function resolveEvent()
{
    if (currentEvent === undefined)
        return;
    
    if (currentEvent === 'combat')
    {
        var playerAtk = Object.values(characters).reduce((total, c) => total + c.getAtk(), 0);
        var playerDef = Object.values(characters).reduce((total, c) => total + c.getDef(), 0);
        
        var enemyAtk = parseInt($('#enemy-atk').html());
        var enemyDef = parseInt($('#enemy-def').html());
        var enemyHp = parseInt($('#enemy-hp').html());
        
        var damageToEnemy = playerAtk - enemyDef;
        if (damageToEnemy < 0)
            damageToEnemy = 0;
        
        
        $('#enemy-hp').html((enemyHp - damageToEnemy).toString());
    }
}