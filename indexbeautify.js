//this version is i think more faster and half the size of first edit

function mousemaster(e){
    var el = $(e), mouseX=window.innerWidth/2, mouseY=window.innerHeight/2;
    var frames, timeout, once = true;
    var circle = { 
        x:window.innerWidth/2, 
        y:window.innerHeight/2, 
        w: el.outerWidth(), 
        h: el.outerHeight(), 
        update:function(){
            l = this.x-this.w/2; 
            t = this.y-this.h/2; 
            el.css({'transform':'translate3d('+l+'px,'+t+'px, 0)' }); 
        }
    }

    $(window).mousemove (function(e){
        if(once){
            frames = setInterval(function(){
                circle.x = lerp (circle.x, mouseX, 0.18);
                circle.y = lerp (circle.y, mouseY, 0.18);
                circle.update() 
            },1000/60)
            once = false
        }
        mouseX = e.clientX;
        mouseY = e.clientY;
        clearTimeout(timeout);
        timeout = setTimeout(function(){clearInterval(frames); once = true;}, 500);
    })

    //linear interpolation solves the unknown number lies on the line  between the two known number
    function lerp (start, end, amt){
        return (1-amt)*start+amt*end
    }
}

mousemaster('#circleSlow')

const popup = [['a', 'Link'], ['.card', 'See all']]

for(let i = 0; i < popup.length;i++){
    $(popup[i][0]).mouseenter(function(){
        $('.textPopup').text(popup[i][1]).css('transform', 'scale(4.5) translateX(-10px)')
        gonetimeout = setTimeout(function(){
          $('.textPopup').css('transform', 'scale(0)')
        },1000)
    }).mouseleave(function(){
        clearTimeout(gonetimeout)
        $('.textPopup').css('transform', 'scale(0)')
    });
}

$('#nameHighlight').mouseenter(function(){
    $('.profile').css({'transform': 'scale(22)'})
}).mouseleave(function(){
    $('.profile').css({'transform': 'scale(0) rotate(-180deg)'})
});

/*
client.on('guildMemberAdd', (member) => {
    const guild = client.guilds.cache.get('879082192733614181');
    const guildHangout = client.guilds.cache.get('875433254411460608');
    const embed = { 
        color: 0xf72585, 
        title: "Welcome :heart_eyes:", 
        image: 'https://cdn.discordapp.com/attachments/876167358237012028/882231019720286238/Desktop_-_2.png',
        description: `Welcome <@${member.id}> to **CodeCraft**! You are the ${guild.memberCount.toLocaleString()}`,
        fields: [
            {
                name: `Say hi in ${member.guild.channels.cache.get(guildHangout).toString()}`,
            },
            {
                name: `Thanks for joining! Now take a seat, and chat!`,
            },
        ],
        footer: {
        icon_url: 'https://cdn.discordapp.com/attachments/876178876089384991/881835680983052298/CodeCraft.png',
        text: 'Join CodeCraft!',} }
        const channel = member.guild.channels.cache.get(guild);
        channel.send({ embeds: [embed] });
    });
    */