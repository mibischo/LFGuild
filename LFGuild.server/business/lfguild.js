var Crawler = require("crawler");
var Promise = require("promise");

module.exports = {
    scan: function(language, raidsPerWeek, nrSites, orderBy) {
        var chars = new Array();
        return new Promise(function (resolve, reject) {
            var charCrawler = new Crawler({
                maxConnections: 1000,
                callback: function (error, res, done) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(res.options.parameter1);
                        var $ = res.$;
                        var race = '';
                        var clazz = '';
                        var battletag = '';
                        var languages = '';
                        var transfer = '';
                        var raidsPerWeek = '';
                        var ilvl = '';
                        var mPlus = '';
                        var specs = '';
                        var pveScore = '';
                        var mPlusScore = '';
                        var languageStartIndex = 0;
                        var guild = '';
                        var guildlink = '';
                        var faction = '';
                        var armory = '';

                        if ($('div.primary').children()[4].children[0].children.length > 7) {
                            race = $('div.primary').children()[4].children[0].children[3].next.next.children[0].data.trim();
                            clazz = $('div.primary').children()[4].children[0].children[3].next.next.children[0].next.children[0].data.trim();
                            guild = $('a.guild').children()[0].children[0].data.trim();
                            faction = $('a.guild').attr('class').replace('guild ', '').trim();
                            guildlink = $('a.guild').attr('href').trim();
                        } else {
                            race = $('div.primary').children()[4].children[0].children[2].next.children[0].data.trim();
                            clazz = $('div.primary').children()[4].children[0].children[2].next.children[0].next.children[0].data.trim();
                        }

                        try {
                            if ($('div.primary').children('h2')[0].children[0].data.includes('PvE Score:')) {
                                pveScore = $('div.primary').children('h2')[0].children[0].data.replace('PvE Score: ', '').trim();
                            }
                        } catch(ex) {}

                        try {
                            mPlusScore = $('div.primary').find('div.gearscore')[1].children[1].next.data.replace(': ', '').trim();
                        } catch(ex) {}

                        if ($('span.profileBattletag').length > 0) {
                            battletag = $('span.profileBattletag')[0].children[0].data;	
                            languageStartIndex++;				
                        }

                        try {
                            ilvl = $('div.primary').find('div.gearscore')[2].children[0].data.replace('Item Level: ', '').trim();
                        } catch(ec) {}
                        
                        armory = $('a.armoryLink').attr('href').trim();
                        
                        for (var i=languageStartIndex; i < $('div.language').length; i++) {
                            if ($('div.language')[i].children.length) {
                                var label = $('div.language')[i].children[0].data.trim();
                                if (label == 'Languages:' && $('div.language')[i].children.length > 1) {
                                    languages = $('div.language')[i].children[1].children[0].data.trim();
                                } else if (label == 'Looking for guild:' && $('div.language')[i].children.length > 1) {
                                    transfer = $('div.language')[i].children[1].children[0].data.trim();
                                } else if (label == 'Raids per week:' && $('div.language')[i].children.length > 1) {
                                    raidsPerWeek = $('div.language')[i].children[1].children[0].data.trim();
                                //} else if (label == 'Mythic Plus Dungeons:' && $('div.language')[i].children.length > 1) {
                                //	mPlus = $('div.language')[i].children[1].children[0].data.trim();
                                } else if (label == 'Specs playing:' && $('div.language')[i].children.length > 1) {
                                    specs = $('div.language')[i].children[1].children[0].data.trim();
                                }
                            }
                        }

                        switch(race) {
                            case 'human':
                            case 'dwarf':
                            case 'night elf':
                            case 'gnome':
                            case 'draenei':
                            case 'worgen': {
                                faction = 'alliance';
                            } break;
                            case 'orc':
                            case 'undead':
                            case 'tauren':
                            case 'troll':
                            case 'blood elf':
                            case 'goblin': {
                                faction = 'horde';
                            }
                        }
    
                        var details = {
                            race: race,
                            clazz: clazz,
                            battletag: battletag,
                            languages: languages,
                            transfer: transfer,
                            raidsPerWeek: raidsPerWeek,
                            //mPlus: mPlus,
                            specs: specs,
                            pveScore: pveScore,
                            mPlusScore: mPlusScore,
                            guild: guild,
                            guildlink: guildlink,
                            faction: faction,
                            armory: armory,
                            ilvl: ilvl || chars[res.options.parameter1].ilvl
                        };
    
                        chars[res.options.parameter1] = Object.assign({}, chars[res.options.parameter1], details);
    
                        //console.log(chars[res.options.parameter1]);
                    }
                    done();
                }
            });
            
    
            var listCrawler = new Crawler({
                maxConnections : 10,
                method: "POST",
                form: { ajax: 1 },
                // This will be called for each crawled page
                callback : function (error, res, done) {
                    if(error){
                        console.log(error);
                    }else{
                        var $ = res.$;
                        // $ is Cheerio by default
                        //a lean implementation of core jQuery designed specifically for the server
                    //console.log('cnt: ' + ($('table').children().length - 6));
                    for (var i=6; i < $('table').children().length; i++) {
                        var name = $('table').children()[i].children[0].children[0].children[0].data;
                        var server = $('table').children()[i].children[3].children[0].children[0].children[0].data;
                        var ilvl = $('table').children()[i].children[4].children[0].data;
                        var charlink = $('table').children()[i].children[0].children[0].attribs.href;
                        var timestamp = $('table').children()[i].children[5].children[0].children[0].attribs['data-ts'];
                        var date = new Date(timestamp*1000);
                        chars[name+server] = { name: name, server: server, ilvl: ilvl, charlink: charlink, timestamp: date };
                        charCrawler.queue({ uri: 'https://www.wowprogress.com'+charlink, parameter1: name+server });
                    }
                    
                    //console.log(chars);
                    }
                    done();
                }
            });
    
            let sort = orderBy == 'ts' ? '/sortby.ts' : '';
            let rpw = raidsPerWeek == 0 ? '' : raidsPerWeek;

            listCrawler.queue('https://www.wowprogress.com/gearscore/char_rating/prev/' + 1 +'/lfg.1/raids_week.' + raidsPerWeek + '/lang.' + language + sort);
            for (var i=0; i<=nrSites - 2 ; i++) {
                listCrawler.queue('https://www.wowprogress.com/gearscore/char_rating/next/' + i +'/lfg.1/raids_week.' + raidsPerWeek + '/lang.' + language + sort);
            }
    
            charCrawler.on('drain', function() {
                let ret = new Array();
                for (let key in chars) {
                    ret.push(chars[key]);
                }
    
                resolve(ret);
            });
        });
    }
};


//charCrawler.queue({ uri: 'https://www.wowprogress.com/character/eu/antonidas/Taldriel', parameter1: 'Taldriel EU-Antonidas' });



