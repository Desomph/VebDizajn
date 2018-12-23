const news = [
    {
        "id": 1,
        "image": "https://www.rocketlabusa.com/assets/Uploads/Trevor-Launch-7.jpg",
        "title": "Are you ready to rock?",
        "body": "We've recently launched our new website, make sure to check out all the parts! Homepage will be our new \"news\" page."
    },
    {
        "id": 2,
        "image": "https://static.highsnobiety.com/wp-content/uploads/2016/10/28100651/nintendo-switch-innovation-051-480x320.jpg",
        "title": "Check out the newest consoles!",
        "body": "Sony is currently keeping tight-lipped when it comes to specific plans for the PS5: but we know that a PlayStation 5 release date will definitely one day exist, thanks to Sony Interactive Entertainment's President and CEO Shawn Layden confirming as much in an interview with Golem.de. In addition, Sony president Kenichiro Yoshida confirmed the company is working on a next-generation console in an interview with the Financial Times."
    },
    {
        "id": 3,
        "image": "https://i.ytimg.com/vi/OKCL2sF0cBE/maxresdefault.jpg",
        "title": "Blizzard shares dropped substantialy.",
        "body": "Activision Blizzard shares plunged 10 percent in after-hours trading after reporting its third straight quarterly decline in monthly active users. The video game company, which owns the Call of Duty and World of Warcraft franchises, reported 345 million monthly active users, down from 352 million in the previous quarter. "
    },
    {
        "id": 4,
        "image": "https://s3.dexerto.com/thumbnails/_thumbnailLarge/Is-fallout-76-down-november-21.jpg",
        "title": "New Fallout game backlash..",
        "body": "Bethesda is continuing its apology tour of sorts for Fallout 76's rough state on launch, and this time you don't need to have spent a lot to receive compensation. The developer is promising a free copy of Fallout Classics Collection (1, 2 and Tactics) on PC for everyone who has logged into the full Fallout 76 in 2018, whether they played on a computer or console. You should have access to your freebie in early January, Bethesda said."
    },
    {
        "id": 5,
        "image": "https://cdn2.unrealengine.com/UnrealEngine%2FNews%2FAnnouncing+the+Epic+Games+Store%2FEpicGamesStore-1400x788-115627d82416826e240d42891ede4afe7975ba19.jpg",
        "title": "New platform launched, Epic Games going forward!",
        "body": "Right now there’s a small cluster of games available, including Hades, a new title from Supergiant Games that is in “early access” for $19.99, and Epic’s own Fortnite and Unreal Tournament, both of which are free. But Epic is saying that’s there’s a lot more to come. In particular, the store will offer a free game every two weeks, starting with Subnautica from December 14-17 and Super Meat Boy from December 28 until January 10."
    },
];

const games = [
    {
        "id": 1,
        "url": "https://worldofwarcraft.com/en-us/",
        "image": "../media/images/games/igra1.png",
        "name": "World of Warcraft",
        "description": "World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment. It is the fourth released game set in the Warcraft fantasy universe."
    },
    {
        "id": 2,
        "url": "https://heroesofthestorm.com/en-us/",
        "image": "../media/images/games/igra7.jpg",
        "name": "Heroes of the Storm",
        "description": "Heroes of the Storm is a multiplayer online battle arena video game developed and published by Blizzard Entertainment for Microsoft Windows and macOS, which released on June 2, 2015."
    },
    {
        "id": 3,
        "url": "https://us.diablo3.com/en/",
        "image": "../media/images/games/igra5.jpg",
        "name": "Diablo III",
        "description": "Diablo III is a dungeon crawler action role-playing video game. It is the third installment in the Diablo franchise and was released on May 15, 2012 for Microsoft Windows and macOS."
    },
    {
        "id": 4,
        "url": "https://us.diablo3.com/en/",
        "image": "../media/images/games/igra4.jpeg",
        "name": "Diablo III - Reaper of Souls",
        "description": "Diablo III: Reaper of Souls is the first expansion pack for the action role-playing video game Diablo III. It was revealed at Gamescom 2013."
    },
    {
        "id": 5,
        "url": "https://starcraft2.com/en-us/",
        "image": "../media/images/games/igra3.jpg",
        "name": "Starcraft II",
        "description": "StarCraft II is a military science fiction real-time strategy video game developed and published by Blizzard Entertainment. It was released worldwide in July 2010 for Microsoft Windows and Mac OS X."
    },
    {
        "id": 6,
        "url": "https://playoverwatch.com/en-us/",
        "image": "../media/images/games/igra2.jpg",
        "name": "Overwatch",
        "description": "Overwatch is a team-based multiplayer first-person shooter video game developed and published by Blizzard Entertainment, which released on May 24, 2016 for PlayStation 4, Xbox One, and Windows. Described as a \"hero shooter\"."
    },
    {
        "id": 7,
        "url": "https://www.epicgames.com/fortnite/en-US/home",
        "image": "../media/images/games/igra10.jpg",
        "name": "Fortnite",
        "description": "Fortnite is an online video game first released in 2017 and developed by Epic Games. It is available as separate software packages having different game modes that otherwise share the same general gameplay and game engine."
    },
    {
        "id": 8,
        "url": "https://playhearthstone.com/en-us/",
        "image": "../media/images/games/igra8.jpg",
        "name": "Hearthstone",
        "description": "Hearthstone, originally Hearthstone: Heroes of Warcraft, is a free-to-play online collectible card video game."
    },
    {
        "id": 9,
        "url": "https://starcraft.com/en-us/",
        "image": "../media/images/games/igra6.jpg",
        "name": "Starcraft - Remastered",
        "description": "StarCraft: Remastered is a remastered edition of the 1998 real-time strategy video game StarCraft and its expansion Brood War, which was released on August 14, 2017."
    },
    {
        "id": 10,
        "url": "http://blog.dota2.com/?l=english",
        "image": "../media/images/games/igra9.jpg",
        "name": "Dota 2",
        "description": "Dota 2 is a free-to-play multiplayer online battle arena (MOBA) video game developed and published by Valve Corporation. The game is the stand-alone sequel to Defense of the Ancients (DotA)."
    },
];

const genres = [
    {
        "id": 1,
        "name": "",
        "description": ""
    },
    {
        "id": 2,
        "name": "",
        "description": ""
    },
    {
        "id": 3,
        "name": "",
        "description": ""
    },
    {
        "id": 4,
        "name": "",
        "description": ""
    },
];

const platforms = [
    {
        "id": 1,
        "image": "",
        "name": "",
        "description": ""
    },
    {
        "id": 2,
        "image": "",
        "name": "",
        "description": ""
    },
    {
        "id": 3,
        "image": "",
        "name": "",
        "description": ""
    },
    {
        "id": 4,
        "image": "",
        "name": "",
        "description": ""
    },
    {
        "id": 5,
        "image": "",
        "name": "",
        "description": ""
    }
];

const software = [
    {
        "id": 1,
        "image": "",
        "name": "",
        "description": ""
    },
    {
        "id": 2,
        "image": "",
        "name": "",
        "description": ""
    },
    {
        "id": 3,
        "image": "",
        "name": "",
        "description": ""
    },
    {
        "id": 4,
        "image": "",
        "name": "",
        "description": ""
    },
    {
        "id": 5,
        "image": "",
        "name": "",
        "description": ""
    },
];