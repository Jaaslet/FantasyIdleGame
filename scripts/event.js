var eventFunctions = {};
var currentEvent = undefined;

function newEvent(name, description, type, eventData)
{
    var result =
    {
        name: name,
        description: description,
        unlocked: false,
        
        onClick: function()
        {
            if (type === 'combat')
            {
                $('#currentEvent').html(
                    '<div class="enemy-stats">hp: <span id="enemy-hp">' + eventData.hp + '</span></div>' +
                    '<div class="enemy-stats">def: <span id="enemy-def">' + eventData.def + '</span></div>' +
                    '<div class="enemy-stats">atk: <span id="enemy-atk">' + eventData.atk + '</span></div>'
                );
            }
            
            currentEvent = type;
        },
        
        
        getUI: function()
        {
            if (this.unlocked)
            {
                eventFunctions[this.name] = this;
                return (
                    '<div class="event">' +
                        '<button class="event-button" onclick="eventFunctions[\'' + this.name + '\'].onClick()">' +
                            '<h3>' + this.name + '</h3>' +
                            '<p>' + this.description + '</p>' +
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