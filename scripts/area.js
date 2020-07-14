function newArea(divId, name, events)
{
    var result =
    {
        divId: divId,
        name: name,
        unlocked: false,
        
        events: events,
        
        
        updateUI: function()
        {
            if (this.unlocked)
            {
                $('#areas').append(
                    '<div id="' + divId + '" class="area">' +
                        '<h1 class="area-name">' + this.name + '</h1>' +
                        '<div class="events">' +
                            this.events.reduce((result, e) => result + e.GetUI(), '') +
                        '</div>' +
                    '</div>'
                )
            }
        }
    };
    
    return result;
}