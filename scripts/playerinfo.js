var playerinfo =
{
    gold: 0,
    currentHp: 0,
    atk: 0,
    def: 0,
    hp: 0,
    income: 0,
    
    updateUI: function()
    {
        this.atk = this.getAtk();
        this.def = this.getDef();
        this.hp = this.getHp();
        this.currentHp = this.getHp();
        $('#playerinfo').html(
            '<div class="character-stats">' +
                '<div id="playerinfo-gold">Gold:<br/><span id="playerinfo-gold-amount">' + this.gold + '</span></div>' +
                '<div id="playerinfo-atk">Atk:<br/><span id="playerinfo-atk-amount">' + this.getAtk() + '</span></div>' +
                '<div id="playerinfo-def">Def:<br/><span id="playerinfo-def-amount">' + this.getDef() + '</span></div>' +
                '<div id="playerinfo-hp">Hp:<br/><span id="playerinfo-hp-amount">' + this.getHp() + '</span>/<span id="playerinfo-hp-total">' + this.getHp() + '</span></div>' +
            '</div>'
        );
    },
    
    getAtk: function() { return Object.values(characters).reduce((total, c) => total + c.getAtk(), 0); },
    getDef: function() { return Object.values(characters).reduce((total, c) => total + c.getDef(), 0); },
    getHp: function() { return Object.values(characters).reduce((total, c) => total + c.getHp(), 0); },
    
    calculateIncome: function() { this.changeGold(this.income) },
    
    changeGold: function(amount)
    {
        this.gold += amount;
        $('#playerinfo-gold-amount').html(this.gold);
    }
}