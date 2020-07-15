var playerinfo =
{
    gold: 0,
    
    createUI: function()
    {
        $('#playerinfo').append(
            '<div class="character-stats">' +
                '<div id="playerinfo-gold">Gold:<br/><span id="playerinfo-gold-amount">' + this.gold + '</span></div>' +
            '</div>'
        );
    },
    
    changeGold: function(amount)
    {
        this.gold += amount;
        $('#playerinfo-gold-amount').html(this.gold);
    }
}