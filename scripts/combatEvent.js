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
        if (playerinfo.currentHp === 0)
            return;
        
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
        var damageToEnemy = playerinfo.atk - this.def;
        if (damageToEnemy < 0)
            damageToEnemy = 0;
        
        var damageToPlayer = this.atk - playerinfo.def;
        if (damageToPlayer < 0)
            damageToPlayer = 0;
        
        this.currentHp = this.currentHp - damageToEnemy;
        playerinfo.currentHp = playerinfo.currentHp - damageToPlayer;
        
        if (this.currentHp <= 0)
        {
            this.rewards.giveRewards();
            this.currentHp = this.hp;
        }
        
        if (playerinfo.currentHp <=0)
        {
            playerinfo.currentHp = 0;
            currentEvent = undefined;
            $('#currentEvent').html('');
        }
        
        $('#enemy-hp').html(this.currentHp);
        $('#playerinfo-hp-amount').html(playerinfo.currentHp);
    }
}