function newEvent(name, description)
{
    var result =
    {
        name: name,
        description: description,
        unlocked: false,
        
        
        getUI: function()
        {
            if (this.unlocked)
            {
                return (
                    '<div class="event">' +
                        '<button class="event-button">' +
                            this.name +
                        '</button>' +
                    '</div>'
                );
            }
            else
                return "";
        }
    };
    
    return result;
}