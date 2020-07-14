var areas = {};

areas[area1Name] = newArea('area1', area1Name,
[
    newEvent(event1Name, 'Killing rats in your home village will earn you some gold', 'combat',
    {
        hp: 16,
        def: 1,
        atk: 6,
    })
]);












areas[area1Name].unlocked = true;
areas[area1Name].events[0].unlocked = true;