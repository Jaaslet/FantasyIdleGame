var areas = {};

areas[area1Name] = new Area('area1', area1Name,
[
    new PropertyEvent(area1event1Name, 'This is your home', 'property1',
    [
        new PropertyEventUpgrade(10, 1, 'Build spare bedroom', 'You can rent out this room for money', undefined),
        new PropertyEventUpgrade(100, 4, 'Build second floor', 'More rooms to rent out', undefined),
        new PropertyEventUpgrade(500, 10, 'Turn house into small inn', 'Make a living out of this renting out', 'My inn'),
        new PropertyEventUpgrade(5000, 30, 'Build inn bigger', 'Even more rooms to rent out', undefined)
    ]),
    new CombatEvent(area1event2Name, 'Killing rats in your home village will earn you some gold', 6, 1, 16,
        new Rewards(1, 1, undefined)
    ),
    new ShopEvent(area1event3Name, 'Recruit people',
    [
        new ShopEventItem('Recruit ' + character2Name, '', 20,
            new Rewards(undefined, undefined, character2Name)
        )
    ])
]);












areas[area1Name].unlocked = true;
areas[area1Name].events[0].unlocked = true;
areas[area1Name].events[1].unlocked = true;
areas[area1Name].events[2].unlocked = true;