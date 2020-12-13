var skins = {
    dark: {
        style: 'text-align: left; background: linear-gradient(#1f1f1f, #2f2f2f); border-radius: 10px; position: relative; user-select: none;',
        radioflocolor: '#cccccc',
        volume: {
            backgroundcolor: '#484848',
            barbackgroundcolor: '#ffffff'
        },
        play: {
            style: 'background: linear-gradient(#bfbfbf, #5f5f5f); border-radius: 50%; margin: 10px 0 0 15px; cursor: pointer;',
            width: 60,
            height: 60,
            polygon: {
                points: '20,10 50,30 20,50',
                style: 'fill: #ffffff'
            },
            rect: {
                width: '30',
                height: '30',
                x: '15',
                y: '15',
                style: 'fill: #ffffff'
            }
        }
    },
    light: {
        style: 'text-align: left; background: linear-gradient(#dfdfdf, #c4c4c4); border-radius: 10px; position: relative; user-select: none;',
        radioflocolor: '#828282',
        volume: {
            backgroundcolor: '#828282',
            barbackgroundcolor: '#ffffff'
        },
        play: {
            style: 'background: linear-gradient(#828282, #5f5f5f); border-radius: 50%; margin: 10px 0 0 15px; cursor: pointer;',
            width: 60,
            height: 60,
            polygon: {
                points: '20,10 50,30 20,50',
                style: 'fill: #ffffff'
            },
            rect: {
                width: '30',
                height: '30',
                x: '15',
                y: '15',
                style: 'fill: #ffffff'
            }
        }
    },
    'windows-light': {
        style: 'text-align: left; background: #e7f0f9; border: 1px solid #b7bbc7; border-radius: 10px; position: relative; user-select: none;',
        radioflocolor: '#173c94',
        volume: {
            backgroundcolor: '#5f91c9',
            barbackgroundcolor: '#173c94'
        },
        play: {
            style: 'background: linear-gradient(#173c94, #49cbfa); border-radius: 50%; margin: 10px 0 0 15px; cursor: pointer;',
            width: 60,
            height: 60,
            polygon: {
                points: '20,10 50,30 20,50',
                style: 'fill: #ffffff'
            },
            rect: {
                width: '30',
                height: '30',
                x: '15',
                y: '15',
                style: 'fill: #ffffff'
            }
        }
    },
    'windows-dark': {
        style: 'text-align: left; background: #3f4143; border-radius: 10px; position: relative; user-select: none;',
        radioflocolor: '#fafafa',
        volume: {
            backgroundcolor: '#2e3043',
            barbackgroundcolor: '#5885c3'
        },
        play: {
            style: 'background: linear-gradient(#173c94, #81a3d1); border-radius: 50%; margin: 10px 0 0 15px; cursor: pointer;',
            width: 60,
            height: 60,
            polygon: {
                points: '20,10 50,30 20,50',
                style: 'fill: #ffffff'
            },
            rect: {
                width: '30',
                height: '30',
                x: '15',
                y: '15',
                style: 'fill: #ffffff'
            }
        }
    },
    winamp: {
        style: 'text-align: left; background: linear-gradient(#38385a, #2b2a3f); border: 1px solid #62616d; border-radius: 10px; position: relative; user-select: none;',
        radioflocolor: '#fafafa',
        volume: {
            backgroundcolor: '#d2601d',
            barbackgroundcolor: '#adb8bf'
        },
        play: {
            style: 'background: linear-gradient(#c6d2db, #aeb6c6); border-radius: 50%; margin: 10px 0 0 15px; cursor: pointer;',
            width: 60,
            height: 60,
            polygon: {
                points: '20,10 50,30 20,50',
                style: 'fill: #4a5264'
            },
            rect: {
                width: '30',
                height: '30',
                x: '15',
                y: '15',
                style: 'fill: #4a5264'
            }
        }
    }
},
underCastPlayer = {
    embed: function(a) {
        var c = document.createElement('style');
        c.type = 'text/css', c.innerHTML = '.marquee { animation: marquee ' + 2 * (parseInt(a.width) / 100) + 's linear infinite; } @keyframes marquee { 0% { text-indent: ' + (parseInt(a.width) / 10 - 10) + 'em } 100% { text-indent: -' + parseInt(a.width) / 10 + 'em } }', document.getElementsByTagName('head')[0].appendChild(c);
        var d = document.getElementById('underCastPlayer'),
            e = skins[a.skin],
            f = document.createElement('audio');
        f.autoplay = a.autoplay || !1, f.src = a.url, d.appendChild(f);
        var g = document.createElement('div');
        g.setAttribute('style', e.style), g.style.width = a.width + 'px' || '250px', g.style.height = '80px', g.addEventListener('contextmenu', function(q) {
            q.preventDefault()
        });
        var h = document.createElement('a');
        h.setAttribute('style', '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-size: 8px; position: absolute; bottom: 4px; right: 15px; text-decoration: none; color: ' + e.radioflocolor + '; font-family: Helvetica, sans-serif;');
        var i = document.createTextNode('Under Cast');
        h.appendChild(i), h.href = 'http://www.undercast.net/', h.target = '_blank', g.appendChild(h);
        var j = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        j.setAttribute('style', e.play.style), j.setAttribute('width', e.play.width + 'px'), j.setAttribute('height', e.play.height + 'px'), j.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink'), g.appendChild(j);
        var k = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        k.setAttribute('points', e.play.polygon.points), k.setAttribute('style', e.play.polygon.style), j.appendChild(k);
        var l = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        l.setAttribute('width', e.play.rect.width + 'px'), l.setAttribute('height', e.play.rect.height + 'px'), l.setAttribute('x', e.play.rect.x + 'px'), l.setAttribute('y', e.play.rect.y + 'px'), l.setAttribute('style', e.play.rect.style), l.style.display = 'none', j.appendChild(l);
        var m = document.createElement('div');
        m.setAttribute('style', 'box-sizing: content-box; background-color: #ffffff; position: absolute; right: 15px; top: 15px; opacity: 0.8; border-radius: 5px; font-size: 11px; font-family: Helvetica, sans-serif; overflow: hidden; white-space: nowrap; cursor: default;'), m.style.width = a.width - e.play.width - 70 + 'px' || '250px', m.style.padding = '7px 10px', m.style.height = '14px', m.innerHTML = a.autoplay ? 'Loading...' : 'Listen to ' + a['station-name'], g.appendChild(m), j.addEventListener('click', function() {
            !1 == f.paused ? f.pause() : f.play()
        }), f.addEventListener('playing', function() {
            l.style.display = 'block', k.style.display = 'none', m.className = 'marquee', m.innerHTML = 'You\'re tuned into ' + a['station-name']
        });
        for (event of['suspend', 'pause']) f.addEventListener(event, function() {
            k.style.display = 'block', l.style.display = 'none', m.className = '', m.innerHTML = 'Paused...'
        });
        var n = document.createElement('div');
        n.setAttribute('style', 'position: absolute; bottom: 18px; right: 15px; cursor: pointer; height: 10px; background-color: ' + e.volume.backgroundcolor + '; border-radius: 5px;'), n.className = 'volume', n.style.width = a.width - e.play.width - 50 + 'px' || '250px', n.innerHTML = '<span style="display:block; height:10px; position:absolute; top:0; left:0; background-color: ' + e.volume.barbackgroundcolor + '; z-index:10; width: 90%; border-radius: 5px;" class="volumeBar"></span>', g.appendChild(n);
        var o = function(q, r) {
                var s = document.getElementsByClassName('volume'),
                    t;
                if (r) t = 100 * r;
                else {
                    var u = q - s[0].getBoundingClientRect().left;
                    t = 100 * u / s[0].offsetWidth
                }
                100 < t && (t = 100), 0 > t && (t = 0);
                var v = document.getElementsByClassName('volumeBar');
                v[0].style.width = t + '%', f.volume = t / 100
            },
            p = !1;
        n.addEventListener('mousedown', function(q) {
            p = !0, f.muted = !1, o(q.pageX)
        }), n.addEventListener('mouseup', function(q) {
            p && (p = !1, o(q.pageX))
        }), n.addEventListener('mousemove', function(q) {
            p && o(q.pageX)
        }), d.parentNode.insertBefore(g, d.nextSibling)
    }
};
