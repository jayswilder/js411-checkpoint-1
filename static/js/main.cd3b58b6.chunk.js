(this["webpackJsonpmy-music-app"]=this["webpackJsonpmy-music-app"]||[]).push([[0],{15:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(2),r=s.n(n),a=s(9),i=s.n(a),o=(s(15),s(3)),l=s(5),u=s(4);var g=function(e){return Object(c.jsxs)("div",{className:"c-player--controls",children:[Object(c.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong(!1)},children:Object(c.jsx)(l.a,{icon:u.a})}),Object(c.jsx)("button",{className:"play-btn",onClick:function(){return e.setIsPlaying(!e.isPlaying)},children:Object(c.jsx)(l.a,{icon:e.isPlaying?u.c:u.d})}),Object(c.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong()},children:Object(c.jsx)(l.a,{icon:u.b})})]})};var m=function(e){return Object(c.jsxs)("div",{className:"c-player--details",children:[Object(c.jsx)("div",{className:"details-img",children:Object(c.jsx)("img",{src:e.song.img_src,alt:""})}),Object(c.jsx)("h3",{className:"details-title",children:e.song.title}),Object(c.jsx)("h4",{className:"details-artist",children:e.song.artist})]})};var j=function(e){var t=Object(n.useRef)(null),s=Object(n.useState)(!1),r=Object(o.a)(s,2),a=r[0],i=r[1];return Object(n.useEffect)((function(){a?t.current.play():t.current.pause()})),Object(c.jsxs)("div",{className:"c-player",children:[Object(c.jsx)("audio",{src:e.songs[e.currentSongIndex].src,ref:t}),Object(c.jsx)("h4",{children:"Now Playing..."}),Object(c.jsx)(m,{song:e.songs[e.currentSongIndex]}),Object(c.jsx)(g,{isPlaying:a,setIsPlaying:i,SkipSong:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return++t>e.songs.length-1&&(t=0),t})):e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return--t<0&&(t=e.songs.length-1),t}))}}),Object(c.jsxs)("p",{children:["Next up: ",Object(c.jsxs)("span",{children:[e.songs[e.nextSongIndex].title," by ",e.songs[e.nextSongIndex].artist]})]})]})};var b=function(){var e=Object(n.useState)([{title:"Unbreakable",artist:"Andy Ray",img_src:"./images/album-cover.jpg",src:"./music/Unbreakable.mp3"},{title:"Hard Rock",artist:"Andy Ray",img_src:"./images/album-cover.jpg",src:"./music/Hard Rock.mp3"},{title:"Can't Stop Me",artist:"Andy Ray",img_src:"./images/album-cover.jpg",src:"./music/Can't Stop Me.mp3"},{title:"Let's Rock",artist:"Andy Ray",img_src:"./images/album-cover.jpg",src:"./music/Lets Rock.mp3"},{title:"Be Faster",artist:"Andy Ray",img_src:"./images/album-cover.jpg",src:"./music/Be Faster.mp3"},{title:"Fatality Racer",artist:"Andy Ray",img_src:"./images/album-cover.jpg",src:"./music/Fatality Racer.mp3"},{title:"Rage Machine",artist:"Andy Ray",img_src:"./images/album-cover.jpg",src:"./music/Rage Machine.mp3"},{title:"No Way Back",artist:"Andy Ray",img_src:"./images/album-cover.jpg",src:"./music/No Way Back.mp3"},{title:"Time For Action",artist:"Andy Ray",img_src:"./images/album-cover.jpg",src:"./music/Time For Action.mp3"},{title:"Heart of the Warrior",artist:"Andy Ray",img_src:"./images/album-cover.jpg",src:"./music/Heart of the Warrior.mp3"}]),t=Object(o.a)(e,1)[0],s=Object(n.useState)(0),r=Object(o.a)(s,2),a=r[0],i=r[1],l=Object(n.useState)(0),u=Object(o.a)(l,2),g=u[0],m=u[1];return Object(n.useEffect)((function(){m((function(){return a+1>t.length-1?0:a+1}))}),[a]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(j,{currentSongIndex:a,setCurrentSongIndex:i,nextSongIndex:g,songs:t})})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.cd3b58b6.chunk.js.map