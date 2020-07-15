class PropertyEvent extends Event
{
    constructor(name, description)
    {
        super(name, description);
    }
    
    doTick() { }
    
    onClick()
    {
        $('#currentEvent').html(
            '<button onclick="PropertyEvent.rest();">Rest</button>'
        );
        currentEvent = this;
    }
    
    static rest()
    {
        playerinfo.currentHp = playerinfo.hp;
        $('#playerinfo-hp-amount').html(playerinfo.currentHp);
    }
}