var playerinfo =
{
    gold: 0,
    
    createUI: function()
    {
        $('#playerinfo').append(
            '<div class="character-stats">' +
                '<div id="playerinfo-gold">Gold:<br/>' + this.gold + '</div>' +
            '</div>'
        );
    }
}