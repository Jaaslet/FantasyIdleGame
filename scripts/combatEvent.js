class CombatEvent extends Event
{    
    constructor(name, description, atk, def, hp, rewards)
    {
        super(name, description);
        this.hp = hp;
        this.def = def;
        this.atk = atk;
        this.rewards = rewards;
    }
    
    
    onClick()
    {
        $('#currentEvent').html(
            '<div class="enemy-stats">atk: <span id="enemy-atk">' + this.atk + '</span></div>' +
            '<div class="enemy-stats">def: <span id="enemy-def">' + this.def + '</span></div>' +
            '<div class="enemy-stats">hp: <span id="enemy-hp">' + this.hp + '</span>/' + this.hp + '</div>'
        );
        currentEvent = this;
        this.currentHp = this.hp;
    }
    
    doTick()
    {
        var playerAtk = Object.values(characters).reduce((total, c) => total + c.getAtk(), 0);
        var playerDef = Object.values(characters).reduce((total, c) => total + c.getDef(), 0);
        
        var damageToEnemy = playerAtk - this.def;
        if (damageToEnemy < 0)
            damageToEnemy = 0;
        
        this.currentHp = this.currentHp - damageToEnemy
        
        if (this.currentHp <= 0)
        {
            this.rewards.giveRewards();
            this.currentHp = this.hp;
        }
        
        $('#enemy-hp').html(this.currentHp);
    }
}