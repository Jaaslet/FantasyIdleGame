class Area
{
    unlocked = false;
    
    constructor(divId, name, events)
    {
        this.divId = divId;
        this.name = name;
        this.events = events;
    }
        
        
    updateUI()
    {
        if (this.unlocked)
        {
            $('#areas').append(
                '<div id="' + this.divId + '" class="area">' +
                    '<h1 class="area-name">' + this.name + '</h1>' +
                    '<div class="events">' +
                        this.events.reduce((result, e) => result + e.getUI(), '') +
                    '</div>' +
                '</div>'
            );
        }
    }
}