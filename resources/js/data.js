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
        "image": "../media/images/games/igra1.jpg",
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
        "name": "FPS",
        "description": "First-person shooter (FPS) is a video game genre centered around gun and other weapon-based combat in a first-person perspective; that is, the player experiences the action through the eyes of the protagonist. The genre shares common traits with other shooter games, which in turn makes it fall under the heading action game. Since the genre's inception, advanced 3D and pseudo-3D graphics have challenged hardware development, and multiplayer gaming has been integral. "
    },
    {
        "id": 2,
        "name": "RTS",
        "description": "In an RTS, the participants position and maneuver units and structures under their control to secure areas of the map and/or destroy their opponents' assets. In a typical RTS, it is possible to create additional units and structures during the course of a game. This is generally limited by a requirement to expend accumulated resources. These resources are in turn garnered by controlling special points on the map and/or possessing certain types of units and structures devoted to this purpose. More specifically, the typical game of the RTS genre features resource gathering, base building, in-game technological development and indirect control of units. The term \"real-time strategy\" was coined by Brett Sperry to market Dune II in the early 1990s."
    },
    {
        "id": 3,
        "name": "MOBA",
        "description": "Multiplayer online battle arena (MOBA), also known as action real-time strategy (ARTS), is a subgenre of strategy video games that originated as a subgenre of real-time strategy, in which a player controls a single character in a team who compete versus another team of players. The objective is to destroy the opposing team's main structure with the assistance of periodically-spawned computer-controlled units that march forward along set paths. Player characters typically have various abilities and advantages that improve over the course of a game and that contribute to a team's overall strategy. MOBA games are a fusion of action games, role-playing games and real-time strategy games, in which players usually do not construct either buildings or units. "
    },
    {
        "id": 4,
        "name": "Platformer",
        "description": "A platform game, or platformer, is a video game genre and subgenre of action games. In a platformer the player controls a character or avatar to jump between suspended platforms and avoid obstacles. Environments often feature uneven terrain requiring jumping and climbing in order to traverse them. The player often has some control over the height and distance of jumps to avoid letting their character fall to their death or miss necessary jumps. The most common unifying element of games of this genre is the jump button, but now there are other alternatives like swiping a touchscreen. Other acrobatic maneuvers may factor into the gameplay as well, such as swinging from objects such as vines or grappling hooks, as in Ristar or Bionic Commando, or bouncing from springboards or trampolines, as in Alpha Waves. These mechanics, even in the context of other genres, are commonly called platforming, a verbification of platform. Games where jumping is automated completely, such as 3D games in The Legend of Zelda series, fall outside of the genre. "
    },
    {
        "id": 5,
        "name": "RPG",
        "description": "A role-playing video game (commonly referred to as simply a role-playing game or an RPG as well as a computer role-playing game or a CRPG) is a video game genre where the player controls the actions of a character (and/or several party members) immersed in some well-defined world. Many role-playing video games have origins in tabletop role-playing games (including Dungeons & Dragons) and use much of the same terminology, settings and game mechanics. Other major similarities with pen-and-paper games include developed story-telling and narrative elements, player character development, complexity, as well as replayability and immersion. The electronic medium removes the necessity for a gamemaster and increases combat resolution speed. RPGs have evolved from simple text-based console-window games into visually rich 3D experiences."
    },
    {
        "id": 6,
        "name": "Fighting",
        "description": "A fighting game is a video game genre based around interpersonal combat between a limited amount of characters in which they fight until they defeat their opponents or the timer expires. The fight matches typically consist of several rounds and take place in an arena, while each character has differing abilities but each is relatively viable to choose. Players must master techniques such as blocking, counter-attacking, and chaining attacks together into \"combos\". Starting in the early 1990s, most fighting games allowed the player to execute special attacks by performing specific input combinations. The fighting game genre is related to but distinct from beat 'em ups, which involve large numbers of enemies against the human player."
    },
    {
        "id": 6,
        "name": "Simulation",
        "description": "A simulation game attempts to copy various activities from real life in the form of a game for various purposes such as training, analysis, or prediction. Usually there are no strictly defined goals in the game, with the player instead allowed to control a character freely. Well-known examples are war games, business games, and role play simulation."
    },
];

const platforms = [
    {
        "id": 1,
        "url": "https://www.playstation.com/en-us/explore/ps4/",
        "image": "https://etgeekera.files.wordpress.com/2013/11/playstation-4-header.jpg",
        "name": "Playstation 4",
        "description": "The PlayStation 4 (PS4) is an eighth-generation home video game console developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 3 during a press conference on February 20, 2013, it was launched on November 15 in North America, November 29 in Europe, South America and Australia; and February 22, 2014, in Japan. It competes with Microsoft's Xbox One and Nintendo's Wii U and Switch. Moving away from the more complex Cell microarchitecture of its predecessor, the console features an AMD Accelerated Processing Unit (APU) built upon the x86-64 architecture, which can theoretically peak at 1.84 teraflops; AMD stated that it was the \"most powerful\" APU it had developed to date. The PlayStation 4 places an increased emphasis on social interaction and integration with other devices and services, including the ability to play games off-console on PlayStation Vita and other supported devices (\"Remote Play\"), the ability to stream gameplay online or to friends, with them controlling gameplay remotely (\"Share Play\"). The console's controller was also redesigned and improved over the PlayStation 3, with improved buttons and analog sticks, and an integrated touchpad among other changes. The console also supports HDR10 High-dynamic-range video and playback of 4K resolution multimedia. "
    },
    {
        "id": 2,
        "url": "https://www.xbox.com/en-US/",
        "image": "https://cdn.wccftech.com/wp-content/uploads/2015/06/xbox-elite-header.jpg",
        "name": "Xbox",
        "description": "The Xbox is a home video game console and the first installment in the Xbox series of consoles manufactured by Microsoft. It was released on November 15, 2001 in North America, followed by Australia, Europe and Japan in 2002. It was Microsoft's first foray into the gaming console market. It is a sixth generation console, and competed with Sony's PlayStation 2 and Nintendo's GameCube. It was also the first console produced by an American company since the Atari Jaguar ceased production in 1996. Announced in 2000, the Xbox was graphically powerful compared to its rivals, featured an 733 MHz Intel Pentium III processor, a processor that could be found on a standard PC. It was also noted for its PC-like size and weight, and was the first console to feature a built-in hard disk. In November 2002, Microsoft launched Xbox Live, a fee-based online gaming service that enabled subscribers to download new content and connect with other players through a broadband connection. Unlike other online services from Sega and Sony, Xbox Live had support in the original console design through an integrated Ethernet port. The service gave Microsoft an early foothold in online gaming and would help the Xbox become a relevant competitor to other sixth-generation consoles. The popularity of blockbuster titles such as Halo 2 contributed to the popularity of online console gaming, and in particular first-person shooters."
    },
    {
        "id": 3,
        "url": "https://steamcommunity.com/",
        "image": "https://logos-download.com/wp-content/uploads/2016/05/Steam_logo_logotype.png",
        "name": "Steam",
        "description": "Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. Steam offers digital rights management (DRM), matchmaking servers, video streaming, and social networking services. Steam provides the user with installation and automatic updating of games, and community features such as friends lists and groups, cloud saving, and in-game voice and chat functionality. The software provides a freely available application programming interface (API) called Steamworks, which developers can use to integrate many of Steam's functions into their products, including networking, matchmaking, in-game achievements, microtransactions, and support for user-created content through Steam Workshop. Though initially developed for use on Microsoft Windows operating systems, versions for macOS and Linux were later released. Mobile apps with connected functionality with the main software were later released for iOS, Android, and Windows Phone in the 2010s. The platform also offers a small selection of non-video game content, such as design software, anime, and films. "
    },
    {
        "id": 4,
        "url": "https://www.blizzard.com/en-us/",
        "image": "https://bnetcmsus-a.akamaihd.net/cms/blog_header/16/16F22IIKJZWV1502739554193.jpg",
        "name": "Battle.net",
        "description": "Blizzard Battle.net is an Internet-based online gaming, social networking, digital distribution, and digital rights management platform developed by Blizzard Entertainment. Battle.net was launched on December 31, 1996, with the release of Blizzard's action-role-playing video game Diablo. Battle.net was the first online gaming service incorporated directly into the games that make use of it, in contrast to the external interfaces used by the other online services at the time. This feature, along with ease of account creations and the absence of member fees, caused Battle.net to become popular among gamers and became a major selling point for Diablo and subsequent Blizzard games. Since the successful launch of Battle.net, many companies have created online game services mimicking Blizzard's service package and the user interface. "
    },
    {
        "id": 5,
        "url": "https://www.epicgames.com/store/en-US/",
        "image": "https://cdn2.unrealengine.com/UnrealEngine%2FNews%2FAnnouncing+the+Epic+Games+Store%2FEpicGamesStore-1400x788-115627d82416826e240d42891ede4afe7975ba19.jpg",
        "name": "Epic Store",
        "description": "The Epic Games Store is a digital video game storefront operated by Epic Games. It launched in December 2018. The store is available on the web and through Epic Games' launcher application. It does not have features such as achievements or virtual reality headset support. Epic's own games will be exclusively available through its store and the company plans to fund developers to release exclusively through their store. Epic plans to offer one free game every two weeks through 2019."
    }
];