<script src="//cdn.jsdelivr.net/npm/phaser@3.17.0/dist/phaser.js"></script><body style="margin: 0px; padding: 0px; height: 100%; overflow: hidden"><script type="text/javascript">var age={battle:3,substitute:2,step:{play:0.00,subvert_harmless:0.01,subvert_mindless:0.02,subvert_traitorous:0.03,subvert_cave_in:0.04,flash:0.05,haunt:0.06,sacrifice:0.07,purify:0.08,buy:0.09,substitute_out:0.10,substitute_in:0.11,},advance:function(){},set_minor:function(minor){},end:function(){},major:function(){},minor:function(){},first_turn:function(){return age.is_first_turn},setup:function(){},}
age.major=function(){return Math.floor(age.cur);}
age.minor=function(){let inv_step=Math.round(1.0/age.step.incr);return Math.round(inv_step*(age.cur%1))/inv_step;}
age.advance=function(){if(age.cur==age.battle){age.cur=0;age.is_first_turn=false;}else{age.cur+=age.step.incr;if(age.minor()>age.step.end){age.cur=Math.ceil(age.cur);}}}
age.set_minor=function(minor){age.cur=age.major()+minor;}
age.end=function(){age.cur=age.major()+age.step.end+age.step.incr;}
age.setup=function(){age.cur=0;age.is_first_turn=true;}
age.step.incr=0.01;age.step.end=age.step.substitute_in;var env={physics:null,preload:function(phasers_this){},setup:function(){},add:{image:function(coords,name){},sprite:function(coords,name){},},place:function(sprite,coords){},to_front:function(sprite){},nowhere:{x:2000,y:2000},scene:{x:3440,y:1080},window:{x:1920,y:1080},background:null,}
env.preload=function(phasers_this){env.physics=phasers_this;env.physics.load.image('background','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Background.png');env.physics.load.image('ref sheet','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Reference%20Sheet.png');env.physics.load.spritesheet('full cards','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Full%20Cards.png',{frameWidth:500,frameHeight:700});env.physics.load.spritesheet('half cards','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Card%20Sprites.png',{frameWidth:210,frameHeight:160});env.physics.load.image('log button','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Log%20Button.png');env.physics.load.image('help button','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Help%20Button.png');env.physics.load.image('restart button','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Restart%20Button.png');env.physics.load.spritesheet('action buttons','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Action%20Buttons.png',{frameWidth:200,frameHeight:75});env.physics.load.spritesheet('camera','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Camera%20Toggles.png',{frameWidth:75,frameHeight:175});env.physics.load.spritesheet('tutorial buttons','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Tutorial%20Buttons.png',{frameWidth:200,frameHeight:75});env.physics.load.spritesheet('age text','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Age%20Text.png',{frameWidth:300,frameHeight:120});env.physics.load.spritesheet('delta','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Delta.png',{frameWidth:100,frameHeight:67});env.physics.load.spritesheet('numbers','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Numbers.png',{frameWidth:50,frameHeight:67});env.physics.load.spritesheet('victory','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Victory%20Screen.png',{frameWidth:1100,frameHeight:650});env.physics.load.spritesheet('main instructions','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Main%20Instructions.png',{frameWidth:1100,frameHeight:650});env.physics.load.spritesheet('first buy instructions','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/First%20Buy%20Instructions.png',{frameWidth:412.5,frameHeight:250});env.physics.load.spritesheet('later buy instructions','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Later%20buy%20instructions.png',{frameWidth:1100,frameHeight:650});env.physics.load.spritesheet('final instructions','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Final%20Instructions.png',{frameWidth:650,frameHeight:300});env.physics.load.spritesheet('vertical shaders','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Vertical%20Shaders.png',{frameWidth:300,frameHeight:1000});env.physics.load.image('horizontal shader','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Horizontal%20Shader.png');env.physics.load.image('play arrow','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Play%20arrow.png');env.physics.load.image('buy arrow','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Buy%20arrow.png');env.physics.load.image('ref arrow','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Ref%20arrow.png');env.physics.load.image('log arrow','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Log%20arrow.png');env.physics.load.image('explanation arrow','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Explanation%20arrow.png');env.physics.load.image('top card arrow','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Top%20card%20arrow.png');env.physics.load.spritesheet('camera arrow','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/Camera%20arrows.png',{frameWidth:700,frameHeight:500});env.physics.load.image('main symbol','https://raw.githubusercontent.com/lakes-legendaries/titans-of-eden-assets/master/TitansOfEden.png');}
env.setup=function(){let mid_pt={x:env.scene.x/2,y:env.scene.y/2}
env.background=env.add.image(mid_pt,'background');}
env.add.image=function(coords,name){return env.physics.add.image(coords.x,coords.y,name);}
env.add.sprite=function(coords,name){return env.physics.physics.add.sprite(coords.x,coords.y,name);}
env.place=function(sprite,coords){if(sprite.body!=null){sprite.body.reset(coords.x,coords.y);}else{sprite.x=coords.x;sprite.y=coords.y;}}
env.to_front=function(sprite){env.physics.children.bringToTop(sprite);}
var math={rand:function(int_roof){},col_max:function(mat,col){},dist:function(a,b){},sum:function(arr){},shuffle:function(in_array){},contains:function(arr,val){},index_of:function(arr,val){},last:function(arr){},max_index:function(arr){},add_coords:function(a,b){},add:function(a,b){},subtract:function(a,b){},}
math.rand=function(int_roof){let result=Math.floor(Math.random()*int_roof);return result==int_roof?result-1:result;}
math.col_max=function(mat,col){let out=mat[0][col];for(let g=1;g<mat.length;g++){if(mat[g][col]<out){continue;}
out=mat[g][col];}
return out;}
math.dist=function(a,b){return Phaser.Math.Distance.Between(a.x,a.y,b.x,b.y);}
math.sum=function(arr){let out=0;for(let g=0;g<arr.length;g++){out+=arr[g];}
return out;}
math.shuffle=function(in_array){len=in_array.length;been_chosen=new Array(len).fill(false);out_array=new Array(len);for(let g=0;g<len;g++){let index;do{index=math.rand(len);}while(been_chosen[index]);out_array[g]=in_array[index];been_chosen[index]=true;}
return out_array;}
math.contains=function(arr,val){for(let g=0;g<arr.length;g++){if(arr[g]==val){return true;}}
return false;}
math.index_of=function(arr,val){for(let g=0;g<arr.length;g++){if(arr[g]==val){return g;}}
return null;}
math.last=function(arr){if(arr.length==0){return null;}
return arr[arr.length-1];}
math.max_index=function(arr){if(arr.length==0){return null;}
let index=0;for(let g=1;g<arr.length;g++){if(arr[index]<arr[g]){index=g;}}
return index;}
math.add_coords=function(a,b){return{x:a.x+b.x,y:a.y+b.y};}
math.add=function(a,b){let out=Array(a.length).fill(0);for(let g=0;g<a.length;g++){out[g]=a[g]+b[g];}
return out;}
math.subtract=function(a,b){let out=Array(a.length).fill(0);for(let g=0;g<a.length;g++){out[g]=a[g]-b[g];}
return out;}
var player={you:0,opp:1,none:2,num:2,}
Object.freeze(player);var abilities={bolster_enemies:0,bolster_fire:1,bolster_ice:2,bolster_rivals:3,bolster_rock:4,bolster_sky:5,discard:6,draw:7,energy:8,energy_evanesce:9,flash:10,haunt:11,protect:12,purify:13,sacrifice:14,substitute:15,subvert_cave_in:16,subvert_harmless:17,subvert_mindless:18,subvert_traitorous:19,summon:20,num:21,first_subvert:function(){return abilities.subvert_cave_in;},last_subvert:function(){return abilities.subvert_traitorous;},num_subvert:function(){return abilities.last_subvert()-abilities.first_subvert()+1;},from_age:function(minor_age){},to_text:function(ability){},}
abilities.from_age=function(minor_age){switch(minor_age==null?age.minor():minor_age){case age.step.play:return abilities.summon;case age.step.subvert_harmless:return abilities.subvert_harmless;case age.step.subvert_mindless:return abilities.subvert_mindless;case age.step.subvert_traitorous:return abilities.subvert_traitorous;case age.step.subvert_cave_in:return abilities.subvert_cave_in;case age.step.flash:return abilities.flash;case age.step.haunt:return abilities.haunt;case age.step.sacrifice:return abilities.sacrifice;case age.step.purify:return abilities.purify;case age.step.buy:return abilities.energy_evanesce;case age.step.substitute_out:return abilities.substitute;case age.step.substitute_in:return abilities.substitute;}
return null;}
abilities.to_text=function(ability){switch(ability){case abilities.bolster_enemies:return "Bolster: Enemeies";case abilities.bolster_fire:return "Bolster: Fire";case abilities.bolster_ice:return "Bolster: Ice";case abilities.bolster_rivals:return "Bolster: Rivals";case abilities.bolster_rock:return "Bolster: Rock";case abilities.bolster_sky:return "Bolster: Sky";case abilities.discard:return "Discard";case abilities.draw:return "Draw";case abilities.energy:return "Energy";case abilities.energy_evanesce:return "Energy: Evanesce";case abilities.flash:return "Flash";case abilities.haunt:return "Haunt";case abilities.protect:return "Protect";case abilities.purify:return "Purify";case abilities.sacrifice:return "Sacrifice";case abilities.substitute:return "Substitute";case abilities.subvert_cave_in:return "Subvert: Cave In";case abilities.subvert_harmless:return "Subvert: Harmless";case abilities.subvert_mindless:return "Subvert: Mindless";case abilities.subvert_traitorous:return "Subvert: Traitorous";case abilities.summon:return "Summon";}
return null;}
Object.freeze(abilities);var camera={get_x0:function(){},get_xmax:function(){},get_midpt:function(){},reset:function(){},toggle:function(){},setup:function(){},update:function(){},at_left:function(){return camera.to_x==camera.left},to_right:function(){camera.to_x=camera.right;},active:function(){},}
camera.get_x0=function(){return env.physics.cameras.main.scrollX;}
camera.get_xmax=function(){return env.physics.cameras.main.scrollX+env.physics.cameras.main.width;}
camera.get_midpt=function(){return env.physics.cameras.main.scrollX+env.physics.cameras.main.width/2;}
camera.reset=function(){camera.to_x=camera.left;}
camera.toggle=function(){camera.to_x=camera.to_x==camera.left?camera.right:camera.left;}
camera.setup=function(){camera.to_x=camera.left;camera.button=env.add.sprite(camera.button_pos,'camera');camera.button.setInteractive();camera.button.on('pointerdown',()=>{camera.toggle()});}
camera.update=function(){let dist=camera.to_x-env.physics.cameras.main.scrollX;if(dist==0){return;}
if(Math.abs(dist)<camera.speed){env.physics.cameras.main.scrollX=camera.to_x;return;}
env.physics.cameras.main.scrollX+=(dist>0?1:-1)*camera.speed;camera.button.setFrame(camera.to_x==camera.right?camera.button_frame.to_left:camera.button_frame.to_right);}
camera.active=function(){return camera.to_x!=env.physics.cameras.main.scrollX;}
camera.left=0;camera.right=env.scene.x-env.window.x;camera.speed=30;camera.button_frame={to_right:0,to_left:1};camera.button_pos={x:1872.5,y:980};var log={setup:function(){},text:function(){},add:function(str){},last:function(){},cut:function(){},active:false,event:{battle:0,buy:1,decline:2,decline_buy:3,discard:4,draw:5,flash:6,haunt:7,new_age:8,play:9,protect:10,purify:11,sacrifice:12,shuffle_discard:13,shuffle_draw:14,shuffle_traitorous:15,substitute:16,subvert_cave_in:17,subvert_harmless:18,subvert_mindless:19,subvert_traitorous:20,summon:21,surge:22,},unhide:function(){},}
log.setup=function(){log.button=env.add.image(log.button_pos,'log button');log.button.setInteractive();log.button.on('pointerdown',()=>{log.active=!log.active;});log.history=["[color=purple][u]Age 1[/u][/color]"]
log.add({event:log.event.new_age,age:0});log.active=false;}
log.text=function(){let str="";for(let g=0;g<log.history.length;g++){let elem=log.history[g];if(elem.hide){continue;}
if(typeof elem=='string'){continue;}
switch(elem.event){case log.event.flash:case log.event.purify:case log.event.sacrifice:case log.event.shuffle_discard:case log.event.substitute:case log.event.subvert_harmless:case log.event.subvert_mindless:case log.event.subvert_traitorous:case log.event.subvert_cave_in:case log.event.summon:while(g+1<log.history.length&&elem.event==log.history[g+1].event&&elem.person==log.history[g+1].person){if(!Array.isArray(elem.card_num)){elem.card_num=[elem.card_num];}
elem.card_num.push(log.history[g+1].card_num);if(elem.card_num2!=null){if(!Array.isArray(elem.card_num2)){elem.card_num2=[elem.card_num2];}
elem.card_num2.push(log.history[g+1].card_num2);}
if(elem.event==log.event.shuffle_discard&&log.history[g+1].count==-1){elem.count=-1;}
log.history.splice(g+1,1);}
break;}
switch(elem.event){case log.event.battle:{switch(elem.person){case null:str+="The battle was fought to a draw.";break;default:str+=log.subject(elem.person)+" won the battle, ";str+=elem.capture?"capturing":"destroying";str+=" 1 of "+log.possessive_noun(+(!elem.person))+" temples.";break;}
break;}
case log.event.buy:{str+=log.subject(elem.person)+" used "+log.ability("Energy")+" to awaken "+log.card(elem.card_num)+".";break;}
case log.event.decline:{str+=log.subject(elem.person)+" chose to not use "+log.ability(elem.ability);break;}
case log.event.decline_buy:{str+=log.subject(elem.person)+" chose to not awaken a card.";break;}
case log.event.discard:{str+=log.subject(elem.person)+" used "+log.ability("Discard")+" to force "+log.direct_object(+(!elem.person))+" to discard "+elem.count.toString()+" randomly-chosen cards.";break;}
case log.event.draw:{str+=log.subject(elem.person)+" used "+log.ability("Draw")+" to draw "+elem.count.toString()+" cards.";break;}
case log.event.flash:{str+=log.subject(elem.person)+" used "+log.ability("Flash")+" to play "+log.card(elem.card_num)+".";break;}
case log.event.haunt:{str+=log.subject(elem.person)+" used "+log.ability("Haunt")+" to force "+log.direct_object(+(!elem.person))+" to gain "+elem.count.toString()+" "+log.card("Ghost"+(elem.count>1?"s":""))+" into play ("+log.ability("Subverted")+"with "+log.subv("Harmless")+").";break;}
case log.event.new_age:{let name;if(elem.age==age.battle){name="End Of Turn";}else{name="Age "+(elem.age+1).toString();}
str+="[color=purple][u]"+name+"[/u][/color]";break;}
case log.event.play:{str+=log.subject(elem.person)+" played "+log.card(elem.card_num)+".";break;}
case log.event.protect:{str+=log.subject(elem.person)+" blocked "+log.possessive_noun(+(!elem.person))+" "+log.ability(elem.ability)+" with "+log.ability("Protect")+".";break;}
case log.event.purify:{str+=log.subject(elem.person)+" used "+log.ability("Purify")+" to remove all "+log.subv("subversions")+" from "+log.card(elem.card_num)+".";break;}
case log.event.sacrifice:{str+=log.subject(elem.person)+" used "+log.ability("Sacrifice")+" to permanently remove "+log.possessive(elem.person)+" "+log.card(elem.card_num)+" from the game.";break;}
case log.event.shuffle_discard:{str+=log.subject(elem.person)+" discarded ";if(elem.count==-1){str+=log.possessive(elem.person)+" entire hand.";}else{str+=log.card(elem.card_num)+".";}
break;}
case log.event.shuffle_draw:{str+=log.subject(elem.person)+" drew "+elem.count.toString()+" cards for next turn.";break;}
case log.event.shuffle_traitorous:{str+=log.card(elem.card_num)+" had "+log.subv("Traitorous")+" removed from it, returning it to "+log.possessive_noun(elem.person)+" deck.";break;}
case log.event.substitute:{str+=log.subject(elem.person)+" used "+log.ability("Substitute")+" to replace "+log.card(elem.card_num)+" with "+log.card(elem.card_num2)+".";break;}
case log.event.subvert_cave_in:{str+=log.subject(elem.person)+" used "+log.ability("Subvert: Cave In")+" to attach "+log.subv("Harmless & Mindless")+" to "+log.possessive_noun(+(!elem.person))+" "+log.card(elem.card_num)+".";break;}
case log.event.subvert_harmless:{str+=log.subject(elem.person)+" used "+log.ability("Subvert: Harmless")+" to attach "+log.subv("Harmless")+" to "+log.possessive_noun(+(!elem.person))+" "+log.card(elem.card_num)+".";break;}
case log.event.subvert_mindless:{str+=log.subject(elem.person)+" used "+log.ability("Subvert: Mindless")+" to attach "+log.subv("Mindless")+" to "+log.possessive_noun(+(!elem.person))+" "+log.card(elem.card_num)+".";break;}
case log.event.subvert_traitorous:{str+=log.subject(elem.person)+" used "+log.ability("Subvert: Traitorous")+" to attach "+log.subv("Traitorous")+" to "+log.possessive_noun(+(!elem.person))+" "+log.card(elem.card_num)+".";break;}
case log.event.summon:{str+=log.subject(elem.person)+" used "+log.ability("Summon")+" to play "+log.card(elem.card_num)+".";break;}
case log.event.surge:{str+=log.subject(elem.person)+" used "+log.ability("Surge")+" to draw a new hand.";break;}}
str+="\n";}
{let cmd='[/color]';let punct=',.()!?';for(let c=0;c+cmd.length<str.length;c++){if(!str.substring(c,c+cmd.length).localeCompare(cmd)){for(let p of punct){if(str[c+cmd.length]==p){str=str.substring(0,c)+p+str.substring(c,c+cmd.length)+str.substring(c+cmd.length+1,str.length);}}}}}
return str;}
log.last=function(){return log.history[log.history.length-1];}
log.add=function(obj){log.history.push(obj);while(log.history.length>log.record_length){log.cut();}}
log.cut=function(){log.history.splice(0,1);}
log.unhide=function(){for(let g=0;g<log.history.length;g++){if(log.history[g].hide){log.history[g].hide=false;}}}
log.button_pos={x:1582,y:146};log.record_length=20;log.subject=function(person){return "[color=red]"+(person==player.you?"You":"Karen")+"[/color]";}
log.direct_object=function(person){return "[color=red]"+(person==player.you?"you":"Karen")+"[/color]";}
log.possessive=function(person){return "[color=red]"+(person==player.you?"your":"her")+"[/color]";}
log.possessive_noun=function(person){return "[color=red]"+(person==player.you?"your":"Karen's")+"[/color]";}
log.ability=function(ability){return "[color=green]"+ability+"[/color]";}
log.card=function(card_num){if(Array.isArray(card_num)){let name="";for(let g=0;g<card_num.length;g++){name+=log.card(card_num[g]);if(g+1==card_num.length){continue;}
if(card_num.length>2){name+=",";}
if(g+2==card_num.length){name+=" and";}
name+=" ";}
return name;}
{let name;if(typeof card_num=='string'){name=card_num;}else{name=card.num2str(card_num);}
return "[color=blue]"+name+"[/color]";}}
log.subv=function(subv){return "[color=teal]"+subv+"[/color]";}
var touch={using:function(){},}
touch.using=function(){return env.physics.input.pointer1.active;}
var zone={hand:0,play:1,deck:2,disc:3,buy_top:4,buy_other:5,contains:function(person,place,card_num){},find:function(card_num){},get:function(person,place,position){},get_last:function(person,place){},get_rand:function(person,place){},count:function(person,place){},dest:function(person,place,pos_in_seq){},buy_pos:function(row,col,count,pos){},add:function(person,place,card_num){},change:function(person,place,card_num){},remove:function(card_num){},shuffle:function(){},setup:function(){},}
zone.contains=function(person,place,card_num){return math.contains(zone.contents[person][place],card_num);}
zone.find=function(card_num){let person,place,index;for(person=0;person<=player.num;person++){for(place=0;place<zone.num;place++){index=math.index_of(zone.contents[person][place],card_num);if(index!=null){return{person:person,place:place,index:index};}}
if(index!=null){break;}}
return null;}
zone.get=function(person,place,position){if(position==null){return zone.contents[person][place];}
return zone.contents[person][place][position];}
zone.get_last=function(person,place){return math.last(zone.contents[person][place]);}
zone.get_rand=function(person,place){return zone.contents[person][place][math.rand(zone.count(person,place))];}
zone.count=function(person,place){return zone.contents[person][place].length;}
zone.dest=function(person,place,pos_in_seq){let count=zone.count(person,place);let coords=zone.coords[person][place];if(pos_in_seq==null){pos_in_seq=zone.count(person,place);}
if(coords.x0+(count-1)*coords.xspace>coords.xmax||coords.xmax+(count-1)*coords.xspace<coords.x0){x=coords.x0+pos_in_seq*(coords.xmax-coords.x0)/(count-1);}else{x=coords.x0+pos_in_seq*coords.xspace;}
if(coords.y0+(count-1)*coords.yspace>coords.ymax||coords.ymax+(count-1)*coords.yspace<coords.y0){y=coords.y0+pos_in_seq*(coords.ymax-coords.y0)/(count-1);}else{y=coords.y0+pos_in_seq*coords.yspace;}
return{x:x,y:y}}
zone.buy_pos=function(row,col,pos,count){let x0=zone.coords.buy.x0+row*zone.coords.buy.x_space;let y0=zone.coords.buy.y0+col*zone.coords.buy.y_space;let offset=pos*zone.coords.buy.breadth/(count-1);return{x:x0+offset,y:y0+offset};}
zone.add=function(person,place,card_num){zone.contents[person][place].push(card_num);}
zone.change=function(person,place,card_num){zone.remove(card_num);zone.add(person,place,card_num);}
zone.remove=function(card_num){let cur=zone.find(card_num);zone.contents[cur.person][cur.place].splice(cur.index,1);}
zone.shuffle=function(){for(let person=0;person<player.num;person++){zone.contents[person][zone.deck]=math.shuffle(zone.contents[person][zone.deck]);}}
zone.setup=function(){zone.contents=[];for(person=0;person<=player.num;person++){zone.contents[person]=[];for(place=0;place<zone.num;place++){zone.contents[person][place]=[];}}}
zone.contents=[]
zone.num=6;zone.coords=[[],[]]
zone.coords[player.you][zone.hand]={x0:130,xmax:1050,xspace:175,y0:980,ymax:980,yspace:0}
zone.coords[player.opp][zone.hand]={x0:130,xmax:1050,xspace:175,y0:100,ymax:100,yspace:0}
zone.coords[player.you][zone.play]={x0:150,xmax:1000,xspace:230,y0:730,ymax:730,yspace:0}
zone.coords[player.opp][zone.play]={x0:150,xmax:1000,xspace:230,y0:350,ymax:350,yspace:0}
zone.coords[player.you][zone.deck]={x0:1225,xmax:1275,xspace:5,y0:730,ymax:780,yspace:5}
zone.coords[player.opp][zone.deck]={x0:1275,xmax:1225,xspace:-5,y0:350,ymax:300,yspace:-5}
zone.coords[player.you][zone.disc]={x0:1500,xmax:1500,xspace:0,y0:730,ymax:780,yspace:10}
zone.coords[player.opp][zone.disc]={x0:1500,xmax:1500,xspace:0,y0:300,ymax:350,yspace:10}
zone.coords.buy={x0:2045,y0:135,breadth:60,x_space:300,y_space:250}
var subv={reset:function(subv_card_num,type){},type:{harmless:0,mindless:1,traitorous:2,num:3,cave_in:3,},to_ability:function(type){},to_age:function(type){},to_text:function(type){return abilities.to_text(subv.to_ability(type));},to_event:function(type){},from_ability:function(ability){},from_age:function(step){},num:30,offset:function(pos_in_seq,num_attached){},next:function(type){},setup:function(){},}
subv.reset=function(subv_card_num,type){if(subv_card_num!=null){env.place(subv[subv_card_num][type],env.nowhere);return;}
subv.attached=Array(subv.type.num).fill(-1);for(let s=0;s<subv.num;s++){for(let type=0;type<subv.type.num;type++){subv.reset(s,type);}}}
subv.offset=function(pos_in_seq,num_attached){if(pos_in_seq==null){pos_in_seq=0;}
if(num_attached==null){num_attached=1;}
return{x:(pos_in_seq+1)/num_attached*10,y:-(pos_in_seq+1)/num_attached*50,};}
subv.to_ability=function(type){switch(type){case subv.type.harmless:return abilities.subvert_harmless;case subv.type.mindless:return abilities.subvert_mindless;case subv.type.traitorous:return abilities.subvert_traitorous;case subv.type.cave_in:return abilities.subvert_cave_in;}
return null;}
subv.to_age=function(type){switch(type){case subv.type.harmless:return age.step.subvert_harmless;case subv.type.mindless:return age.step.subvert_mindless;case subv.type.traitorous:return age.step.subvert_traitorous;case subv.type.cave_in:return age.step.subvert_cave_in;}
return null;}
subv.to_event=function(type){switch(type){case subv.type.harmless:return log.event.subvert_harmless;case subv.type.mindless:return log.event.subvert_mindless;case subv.type.traitorous:return log.event.subvert_traitorous;case subv.type.cave_in:return log.event.subvert_cave_in;}
return null;}
subv.from_ability=function(ability){switch(ability){case abilities.subvert_harmless:return subv.type.harmless;case abilities.subvert_mindless:return subv.type.mindless;case abilities.subvert_traitorous:return subv.type.traitorous;case abilities.subvert_cave_in:return subv.type.cave_in;}
return null;}
subv.from_age=function(step){switch(step){case age.step.subvert_harmless:return subv.type.harmless;case age.step.subvert_mindless:return subv.type.mindless;case age.step.subvert_traitorous:return subv.type.traitorous;case age.step.subvert_cave_in:return subv.type.cave_in;}
return null;}
subv.next=function(type){return++subv.attached[type];}
subv.setup=function(){for(let s=0;s<subv.num;s++){subv[s]=[];}
for(let type=subv.type.num-1;type>=0;type--){for(let s=0;s<subv.num;s++){subv[s][type]=env.add.sprite(env.nowhere,'half cards');subv[s][type].setFrame(1+type);subv[s][type].setInteractive();env.to_front(subv[s][type]);}}
subv.reset();}
var ref={setup:function(){},show:function(){},hide:function(){},active:function(){return ref.sheet.visible;},}
ref.setup=function(){ref.button=env.add.image(ref.button_pos,'help button');ref.button.setInteractive();ref.button.on('pointerdown',()=>{ref.toggle()});ref.sheet=env.add.image(ref.sheet_pos_L,'ref sheet');ref.sheet.visible=false;}
ref.show=function(){ref.sheet.visible=true;env.to_front(ref.sheet);env.place(ref.sheet,camera.at_left()?ref.sheet_pos_L:ref.sheet_pos_R);}
ref.hide=function(){ref.sheet.visible=false;}
ref.button_pos={x:1582,y:54};ref.sheet_pos_L={x:1350,y:540};ref.sheet_pos_R={x:3150,y:540};ref.toggle=function(){if(ref.sheet.visible){ref.hide();}
else{ref.show();}}
var card={coords:function(card_num){},num:108,count:function(name){},num_subv:function(card_num){},ordinal:{monk:0,wizard:16,traveler:24,ghost:32,buy0:44,},name:{monk:0,wizard:1,traveler:2,ghost:3,nikolai_the_cursed:4,zodiac_the_eternal:5,jace_winters_firstborn:6,akari_timeless_fighter:7,winds_howl:8,living_volcano:9,return_of_the_frost_giants:10,spine_splitter:11,aurora_draco:12,smoldering_dragon:13,frostbreath:14,caverns_defender:15,madness_of_1000_stars:16,final_judgment:17,hell_frozen_over:18,what_lies_beneath:19,num:20,buy0:4,},elem:{forest:0,sky:1,fire:2,ice:3,rock:4,desert:5,none:6,},species:{dweller:0,warrior:1,beast:2,dragon:3,titan:4,},num2str:function(card_num){return card.name2str(card[card_num].name);},name2str:function(name){},play:function(card_num){},discard:function(card_num){},discard:function(){},setup:function(){},}
card.coords=function(card_num){let obj=card[card_num].sprite;return{x:obj.x,y:obj.y}}
card.count=function(name){if(name==card.name.monk){return 16;}
if(name==card.name.wizard){return 8;}
if(name==card.name.traveler){return 8;}
if(name==card.name.ghost){return 12;}
return 4;}
card.num_subv=function(card_num){let out=0;for(let type=0;type<subv.type.num;type++){out+=+(card[card_num].subv[type]!=null);}
return out;}
card.name2str=function(name){switch(name){case card.name.monk:return "Monk";case card.name.wizard:return "Wizard";case card.name.traveler:return "Traveler";case card.name.ghost:return "Ghost";case card.name.nikolai_the_cursed:return "Nikolai, The Cursed";case card.name.zodiac_the_eternal:return "Zodiac, The Eternal";case card.name.jace_winters_firstborn:return "Jace, Winter's Firstborn";case card.name.akari_timeless_fighter:return "Akari, Timeless Fighter";case card.name.winds_howl:return "Wind's Howl";case card.name.living_volcano:return "Living Volcano";case card.name.return_of_the_frost_giants:return "Return Of The Frost Giants";case card.name.spine_splitter:return "Spine Splitter";case card.name.aurora_draco:return "Aurora Draco";case card.name.smoldering_dragon:return "Smoldering Dragon";case card.name.frostbreath:return "Frostbreath";case card.name.caverns_defender:return "Cavern's Defender";case card.name.madness_of_1000_stars:return "Madness Of 1,000 Stars";case card.name.final_judgment:return "Final Judgment";case card.name.hell_frozen_over:return "Hell, Frozen Over";case card.name.what_lies_beneath:return "What Lies Beneath";}
return null;}
card.play=function(card_num){card[card_num].active=card[card_num].abilities.slice();}
card.discard=function(card_num){if(card_num==null){for(let card_num=0;card_num<card.num;card_num++){card.discard(card_num);}
return;}
for(let type=0;type<subv.type.num;type++){if(card[card_num].subv[type]==null){continue;}
subv.reset(card[card_num].subv[type],type);card[card_num].subv[type]=null;}
card[card_num].active=Array(abilities.num).fill(0);}
card.setup=function(){for(let card_num=0;card_num<card.num;card_num++){card[card_num]=card.props(card_num);card[card_num].sprite=env.add.sprite(env.nowhere,'half cards');card[card_num].sprite.setFrame(card[card_num].sprite_frame);}
for(let card_num=0;card_num<card.ordinal.traveler;card_num++){let person=+(card_num<card.count(card.name.monk)/2||(card_num>=card.ordinal.wizard&&card_num<card.ordinal.wizard+card.count(card.name.wizard)/2));zone.add(person,zone.deck,card_num);}
let has_wizard,monk_count;do{zone.shuffle();has_wizard=false;for(let d=7;d<12;d++){let card_num=zone.get(player.opp,zone.deck,d);if(card[card_num].name==card.name.wizard){has_wizard=true;break;}}
monk_count=0;for(let d=7;d<12;d++){let card_num=zone.get(player.you,zone.deck,d);if(card[card_num].name==card.name.monk){monk_count++;}}}while(!has_wizard||monk_count<3);for(let person=0;person<player.num;person++){for(let d=0;d<zone.count(person,zone.deck);d++){let card_num=zone.get(person,zone.deck,d);let sprite=card[card_num].sprite;sprite.setFrame(0);env.place(sprite,zone.dest(person,zone.deck,d));env.to_front(sprite);}}
card.place(card.name.buy0,card.ordinal.buy0);card.place(card.name.ghost,card.ordinal.ghost,4,0);card.place(card.name.traveler,card.ordinal.traveler,4,1);}
card.place=function(first_card_name,first_card_ordinal,row,col){let count=card.count(first_card_name);let limit=first_card_ordinal==card.ordinal.buy0?card.num:first_card_ordinal+count;for(let card_num=first_card_ordinal;card_num<limit;card_num++){crow=row;ccol=col;if(crow==null){crow=Math.floor(((card_num-first_card_ordinal)%Math.pow(count,2))/count);}
if(ccol==null){ccol=Math.floor((card_num-first_card_ordinal)/Math.pow(count,2));}
let pos=(card_num-first_card_ordinal)%count;let coords=zone.buy_pos(crow,ccol,pos,count);let place=(card_num-first_card_ordinal)%count==count-1?zone.buy_top:zone.buy_other;env.place(card[card_num].sprite,coords);env.to_front(card[card_num].sprite);zone.add(player.none,place,card_num);}}
card.props=function(card_num){let cur_card={};cur_card.abilities=Array(abilities.num).fill(0);cur_card.active=Array(abilities.num).fill(0);cur_card.subv=[];cur_card.subv[subv.type.harmless]=null;cur_card.subv[subv.type.mindless]=null;cur_card.subv[subv.type.traitorous]=null;cur_card.age_played=null;cur_card.ai_subvertible=false;if(card_num<card.ordinal.wizard){cur_card.name=card.name.monk;cur_card.elem=card.elem.forest;cur_card.spec=card.species.dweller;cur_card.power=0;cur_card.cost=0;cur_card.abilities[abilities.energy]=1;}else if(card_num<card.ordinal.traveler){cur_card.name=card.name.wizard;cur_card.elem=card.elem.forest;cur_card.spec=card.species.dweller;cur_card.power=1;cur_card.cost=0;}else if(card_num<card.ordinal.ghost){cur_card.name=card.name.traveler;cur_card.elem=card.elem.forest;cur_card.spec=card.species.dweller;cur_card.power=1;cur_card.cost=2;cur_card.abilities[abilities.energy]=2;}else if(card_num<card.ordinal.buy0){cur_card.name=card.name.ghost;cur_card.elem=card.elem.desert;cur_card.spec=card.species.dweller;cur_card.power=-1;cur_card.cost=1;}else if(card_num<48){cur_card.name=card.name.nikolai_the_cursed;cur_card.elem=card.elem.sky;cur_card.spec=card.species.warrior;cur_card.power=0;cur_card.cost=1;cur_card.abilities[abilities.summon]=1;}else if(card_num<52){cur_card.name=card.name.zodiac_the_eternal;cur_card.elem=card.elem.fire;cur_card.spec=card.species.warrior;cur_card.power=2;cur_card.cost=1;cur_card.abilities[abilities.purify]=1;}else if(card_num<56){cur_card.name=card.name.jace_winters_firstborn;cur_card.elem=card.elem.ice;cur_card.spec=card.species.warrior;cur_card.power=1;cur_card.cost=1;cur_card.abilities[abilities.subvert_harmless]=1;}else if(card_num<60){cur_card.name=card.name.akari_timeless_fighter;cur_card.elem=card.elem.rock;cur_card.spec=card.species.warrior;cur_card.power=2;cur_card.cost=1;cur_card.abilities[abilities.draw]=2;}else if(card_num<64){cur_card.name=card.name.winds_howl;cur_card.elem=card.elem.sky;cur_card.spec=card.species.beast;cur_card.power=-1;cur_card.cost=2;cur_card.abilities[abilities.flash]=2;}else if(card_num<68){cur_card.name=card.name.living_volcano;cur_card.elem=card.elem.fire;cur_card.spec=card.species.beast;cur_card.power=0;cur_card.cost=2;cur_card.abilities[abilities.flash]=1;cur_card.abilities[abilities.discard]=2;}else if(card_num<72){cur_card.name=card.name.return_of_the_frost_giants;cur_card.elem=card.elem.ice;cur_card.spec=card.species.beast;cur_card.power=0;cur_card.cost=2;cur_card.abilities[abilities.flash]=1;cur_card.abilities[abilities.substitute]=1;}else if(card_num<76){cur_card.name=card.name.spine_splitter;cur_card.elem=card.elem.rock;cur_card.spec=card.species.beast;cur_card.power=0;cur_card.cost=2;cur_card.abilities[abilities.flash]=1;cur_card.abilities[abilities.sacrifice]=2;}else if(card_num<80){cur_card.name=card.name.aurora_draco;cur_card.elem=card.elem.sky;cur_card.spec=card.species.dragon;cur_card.power=1;cur_card.cost=3;cur_card.abilities[abilities.haunt]=2;cur_card.abilities[abilities.bolster_fire]=1;}else if(card_num<84){cur_card.name=card.name.smoldering_dragon;cur_card.elem=card.elem.fire;cur_card.spec=card.species.dragon;cur_card.power=3;cur_card.cost=3;cur_card.abilities[abilities.protect]=1;cur_card.abilities[abilities.bolster_ice]=1;}else if(card_num<88){cur_card.name=card.name.frostbreath;cur_card.elem=card.elem.ice;cur_card.spec=card.species.dragon;cur_card.power=2;cur_card.cost=3;cur_card.abilities[abilities.subvert_mindless]=1;cur_card.abilities[abilities.bolster_rock]=1;}else if(card_num<92){cur_card.name=card.name.caverns_defender;cur_card.elem=card.elem.rock;cur_card.spec=card.species.dragon;cur_card.power=3;cur_card.cost=3;cur_card.abilities[abilities.subvert_cave_in]=1;cur_card.abilities[abilities.bolster_sky]=1;}else if(card_num<96){cur_card.name=card.name.madness_of_1000_stars;cur_card.elem=card.elem.sky;cur_card.spec=card.species.titan;cur_card.power=1;cur_card.cost=4;cur_card.abilities[abilities.energy_evanesce]=4;}else if(card_num<100){cur_card.name=card.name.final_judgment;cur_card.elem=card.elem.fire;cur_card.spec=card.species.titan;cur_card.power=2;cur_card.cost=4;cur_card.abilities[abilities.discard]=card.num;}else if(card_num<104){cur_card.name=card.name.hell_frozen_over;cur_card.elem=card.elem.ice;cur_card.spec=card.species.titan;cur_card.power=1;cur_card.cost=4;cur_card.abilities[abilities.subvert_traitorous]=1;}else if(card_num<108){cur_card.name=card.name.what_lies_beneath;cur_card.elem=card.elem.rock;cur_card.spec=card.species.titan;cur_card.power=0;cur_card.cost=4;cur_card.abilities[abilities.bolster_rivals]=1;}
cur_card.sprite_frame=cur_card.name+4;return cur_card;}
var move={fade_in:function(obj,root,offset){},fade_out:function(card_num){},add_pause:function(pause_len){},card:function(person,place,card_num,props){},combine_zone:function(person,source,dest){},organize:function(person,place,props){},in_progress:function(){},fading:function(){},setup:function(){},update:function(){},default_speed:3000,queue_off:false,all_faceup:false,}
move.fade_in=function(obj,root,offset){move.queue.push({fade:obj,out:false,root:root,offset:offset});}
move.fade_out=function(card_num){move.queue.push({fade:card_num,out:true});}
move.add_pause=function(pause_len){if(pause_len>0){move.queue.push({pause:pause_len});}}
move.card=function(person,place,card_num,props){if(props==null){props={};}
if(props.card_num==null){props.card_num=card_num;}
if(props.destination==null){props.destination=zone.dest(person,place);}
if(props.flip_facedown==null){props.flip_facedown=place!=zone.disc;}
if(props.flip_faceup==null){props.flip_faceup=place==zone.disc||(person==player.you&&place==zone.hand);}
props=move.get_default_props(props);if(move.all_faceup){props.flip_faceup=true;}
move.queue.push(Object.assign({},props));if(place==zone.play){let dest=props.destination;props.bring_to_front=false;for(let type=0,pos=0;type<subv.type.num;type++){let subv_card_num=card[card_num].subv[type];if(subv_card_num==null){continue;}
props.card_num=subv[subv_card_num][type];props.destination=math.add_coords(dest,subv.offset(pos++,card.num_subv(card_num)));move.queue.push(Object.assign({},props));}}else if(place==zone.disc){card.discard(card_num);}
if(!props.skip_move&&person!=null&&place!=null){zone.change(person,place,card_num)}}
move.combine_zone=function(person,source,dest){if(person==null){for(let person=0;person<player.num;person++){move.combine_zone(person,source,dest);}
return;}
while(zone.count(person,source)>0){let card_num=zone.get_last(person,source);move.card(person,dest,card_num,{simultaneous:true});}
move.organize(person,dest);}
move.organize=function(person,place,props){if(person==null){for(let person=0;person<player.num;person++){move.organize(person,place,props);}
return;}
move.add_pause(1);if(props==null){props={};}
if(props.bring_to_front==null){props.bring_to_front=false;}
if(props.flip_facedown==null){props.flip_facedown=false;}
if(props.flip_faceup==null){props.flip_faceup=false;}
if(props.simultaneous==null){props.simultaneous=true;}
props=move.get_default_props(props);for(let d=0;d<zone.count(person,place);d++){props.card_num=zone.get(person,place,d);props.destination=zone.dest(person,place,d);move.card(null,place,props.card_num,props);}
move.add_pause(1);}
move.in_progress=function(){return move.queue.length>0;}
move.fading=function(){return move.in_progress?move.queue[0].fade!=null:false;}
move.setup=function(){move.queue=[]
move.prev_dist=[];}
move.get_default_props=function(props){if(props==null){props={}}
if(props.bring_to_front==null){props.bring_to_front=true;}
if(props.flip_facedown==null){props.flip_facedown=true;}
if(props.flip_faceup==null){props.flip_faceup=true;}
if(props.move_speed==null){props.move_speed=move.default_speed;}
if(props.simultaneous==null){props.simultaneous=false;}
if(props.skip_move==null){props.skip_move=false;}
return props;}
move.process_pause=function(){if(move.queue[0].pause!=null){if(move.queue[0].pause--==0){move.queue.shift();}
return true;}
return false;}
move.process_fade=function(){let props=move.queue[0];let card_num=props.fade;if(card_num!=null){let is_card=!isNaN(card_num);let sprite=is_card?card[card_num].sprite:card_num;let fading_out=props.out;if(is_card&&fading_out&&sprite.frame.name==0){sprite.setFrame(card[card_num].sprite_frame);env.to_front(sprite);move.queue.unshift({pause:30});return;}
if(!fading_out){let dest=math.add_coords(card[props.root].sprite,props.offset);if(dest.x!=sprite.x||dest.y!=sprite.y){env.place(sprite,dest);sprite.alpha=0;}}
sprite.alpha+=(fading_out?-1:1)*0.05;let done=fading_out?sprite.alpha<=0:sprite.alpha>=1;if(done){if(fading_out){env.place(sprite,env.nowhere);}
move.queue.shift();}
return true;}
return false;}
move.start=function(queue_position=0){if(queue_position>=move.queue.length){return;}
if(move.prev_dist.length>0){return;}
let props=move.queue[queue_position];if(props.pause!=null){return;}
if(props.fade!=null){return;}
let sprite;let is_card=!isNaN(props.card_num);if(is_card){sprite=card[props.card_num].sprite;}else{sprite=props.card_num;}
if(props.bring_to_front){env.to_front(sprite);}
if(props.flip_facedown&&is_card){sprite.setFrame(0);}
if(props.simultaneous){move.start(queue_position+1);}
if(!props.skip_move){env.physics.physics.moveTo(sprite,props.destination.x,props.destination.y,props.move_speed);move.prev_dist[queue_position]=math.dist({x:sprite.x,y:sprite.y},props.destination);}else{move.prev_dist[queue_position]=0;}}
move.finish=function(queue_position=0){if(queue_position>=move.queue.length){return;}
if(move.prev_dist.length==0){return;}
let props=move.queue[queue_position];if(props.pause!=null){return;}
if(props.fade!=null){return;}
if(props.simultaneous){move.finish(queue_position+1);}
let sprite;let is_card=!isNaN(props.card_num);if(is_card){sprite=card[props.card_num].sprite;}else{sprite=props.card_num;}
let cur_dist=math.dist(sprite,props.destination);let at_endpt=cur_dist==0;let past_endpt=cur_dist>move.prev_dist[queue_position];if(at_endpt||past_endpt||props.skip_move){if(!props.skip_move){env.place(sprite,props.destination);}
if(props.flip_faceup&&is_card){sprite.setFrame(card[props.card_num].sprite_frame);}
move.prev_dist[queue_position]=0;}else{move.prev_dist[queue_position]=cur_dist;}}
move.clean_up=function(){if(move.prev_dist.length==0){return;}
if(math.sum(move.prev_dist)!=0){return;}
for(let g=0;g<move.prev_dist.length;g++){move.queue.shift();}
move.prev_dist=[];}
move.update=function(){if(move.queue_off){move.queue=[];}
if(move.queue.length==0){return;}
if(move.process_pause()){return;}
if(move.process_fade()){return;}
if(move.prev_dist.length==0){move.start();}else{move.finish();move.clean_up();}}
var stats={setup:function(){},update:function(){},queue_update:function(){},winner:function(){},capture:function(){},card_power:function(card_num){},temples:function(person){return stats.num.temples[person];},power:function(person){return stats.num.power[person];},num_surges:function(person){return stats.num.surges[person];},use_surge:function(person){stats.num.surges[person]--;},count:function(person,ability){},energy:function(person){},decrement:function(person,ability,num_times){},game_over:function(){return stats.temples(player.you)==0||stats.temples(player.opp)==0;},}
stats.setup=function(){stats.num={temples:[3,3],surges:[2,2],power:[0,0],}
stats.perform_update=false;stats.sprites={ages:env.add.sprite(stats.position.ages,'age text'),temples:[],surges:[],power:[[],[]],delta:[],};for(let person=0;person<player.num;person++){stats.sprites.temples[person]=env.add.sprite(stats.position.temples[person],'numbers');stats.sprites.surges[person]=env.add.sprite(stats.position.surges[person],'numbers');stats.sprites.delta[person]=env.add.sprite(stats.position.delta[person],'delta');for(let digit=0;digit<stats.position.power[person].length;digit++){stats.sprites.power[person][digit]=env.add.sprite(stats.position.power[person][digit],'numbers');}
stats.sprites.temples[person].setFrame(3);stats.sprites.surges[person].setFrame(2);stats.sprites.delta[person].setFrame(2);stats.sprites.power[person][0].setFrame(0);for(let digit=1;digit<stats.position.power[person].length;digit++){stats.sprites.power[person][digit].setFrame(11);}}}
stats.update=function(){if(!stats.perform_update||move.in_progress()){return;}
stats.perform_update=false;stats.sprites.ages.setFrame(age.major());for(let person=0;person<player.num;person++){stats.sprites.temples[person].setFrame(stats.num.temples[person]);}
for(let person=0;person<player.num;person++){stats.sprites.surges[person].setFrame(stats.num.surges[person]);}
stats.update_power();for(let person=0;person<player.num;person++){let sprite=stats.sprites.power[person];for(let digit=0;digit<stats.sprites.power[person].length;digit++){sprite[digit].setFrame(11);}
let power=stats.num.power[person];let use_minus_sign=power<0;let use_double_digits=power>=10||power<=-10;if(use_minus_sign){sprite[0].setFrame(10);}
if(use_double_digits){sprite[+use_minus_sign].setFrame(Math.floor(Math.abs(power)/10));sprite[+use_minus_sign+1].setFrame(Math.abs(power)%10);}else{sprite[+use_minus_sign].setFrame(Math.abs(power));}}
if(age.major()==age.battle){let winner=stats.winner();if(winner!=null){let loser=+(winner==0);stats.num.temples[loser]--;stats.sprites.delta[loser].setFrame(0);if(stats.capture()){stats.num.temples[winner]++;stats.sprites.delta[winner].setFrame(1);}}}else{for(let person=0;person<player.num;person++){stats.sprites.delta[person].setFrame(2);}}}
stats.queue_update=function(){stats.perform_update=true;}
stats.capture=function(){let winner=stats.winner();if(winner==null){return false;}
return stats.num.temples[winner]==1;}
stats.winner=function(){stats.update_power();let dif=stats.num.power[player.you]-stats.num.power[player.opp];if(dif>=2){return player.you;}
if(dif<=-2){return player.opp;}
return null;}
stats.card_power=function(card_num){let power=card[card_num].subv[subv.type.harmless]==null?card[card_num].power:0;if(card[card_num].subv[subv.type.mindless]==null){let person=zone.find(card_num).person;let ability=[abilities.bolster_sky,abilities.bolster_fire,abilities.bolster_ice,abilities.bolster_rock,abilities.bolster_rivals];let elem=[card.elem.sky,card.elem.fire,card.elem.ice,card.elem.rock,null];for(let a=0;a<ability.length;a++){if(!card[card_num].active[ability[a]]){continue;}
let add=stats.num_played_of_elem(+(!person),elem[a]);if(elem[a]==null&&add>6){add=6;}
power+=add;}}
return power;}
stats.count=function(person,ability){let count=0;for(let card_num of zone.get(person,zone.play)){if(card[card_num].subv[subv.type.mindless]!=null){continue;}
count+=card[card_num].active[ability];}
return count;}
stats.energy=function(person){return stats.count(person,abilities.energy)+stats.count(person,abilities.energy_evanesce);}
stats.decrement=function(person,ability,num_times){let num_decremented=0;for(let card_num of zone.get(person,zone.play)){num_active=card[card_num].active[ability];for(let a=0;a<num_active&&(num_times==-1||num_decremented<num_times);a++,num_decremented++){card[card_num].active[ability]--;}}}
stats.position={temples:[],surges:[],power:[[],[]],delta:[]}
stats.position.ages={x:1760,y:340}
stats.position.temples[player.you]={x:1460,y:912};stats.position.temples[player.opp]={x:1460,y:34};stats.position.surges[player.you]={x:1460,y:979};stats.position.surges[player.opp]={x:1460,y:101};stats.position.delta[player.you]={x:1518,y:912};stats.position.delta[player.opp]={x:1518,y:32};stats.position.power[player.you][0]={x:1460,y:1046};stats.position.power[player.you][1]={x:1495,y:1046};stats.position.power[player.you][2]={x:1530,y:1046};stats.position.power[player.opp][0]={x:1460,y:168};stats.position.power[player.opp][1]={x:1495,y:168};stats.position.power[player.opp][2]={x:1530,y:168};stats.num_played_of_elem=function(person,elem){let num=0;for(let d=0;d<zone.count(person,zone.play);d++){let card_num=zone.get(person,zone.play,d);if(elem==null||card[card_num].elem==elem){num++;}}
return num;}
stats.update_power=function(){for(let person=0;person<player.num;person++){stats.num.power[person]=0;for(let card_num of zone.get(person,zone.play)){if(card[card_num].subv[subv.type.harmless]!=null){continue;}
stats.num.power[person]+=card[card_num].power;}
let ability=[abilities.bolster_sky,abilities.bolster_fire,abilities.bolster_ice,abilities.bolster_rock,abilities.bolster_rivals];let elem=[card.elem.sky,card.elem.fire,card.elem.ice,card.elem.rock,null];for(let a=0;a<ability.length;a++){let count=stats.count(person,ability[a]);if(count==0){continue;}
let add=stats.num_played_of_elem(+(!person),elem[a]);if(elem[a]==null&&add>6){add=6;}
stats.num.power[person]+=count*add;}}}
var tut={setup:function(){},update:function(){},start:function(){},stage:{cur:0,off:0,main:1,play:2,buy:3,battle:4,},active:function(){return tut.stage.cur!=tut.stage.off},block_instr:false,block_full:false,block_button:false,forced_input:null,}
tut.setup=function(){tut.stage.cur=tut.stage.off;tut.block_instr=false;tut.block_full=false;tut.block_button=false;tut.forced_input=null;for(let b=0;b<2;b++){tut.button[b]=env.add.sprite(env.nowhere,'tutorial buttons').setInteractive();tut.button[b].on('pointerdown',()=>{tut.button.click(b)});}}
tut.update=function(){if(tut.active()&&tut.main.visible){env.to_front(tut.main);env.to_front(tut.button[0]);env.to_front(tut.button[1]);}}
tut.start=function(){tut.stage.cur=tut.stage.main;tut.main=env.add.sprite(tut.pos.main,'main instructions');tut.button[0].setFrame(tut.button.frame.blank);tut.button[1].setFrame(tut.button.frame.next);for(let b=0;b<2;b++){env.place(tut.button[b],tut.pos.main.button[b]);env.to_front(tut.button[b]);}
tut.arrow[tut.arrow.frame.play]=env.add.image(tut.pos.arrow[tut.arrow.frame.play],'play arrow');tut.arrow[tut.arrow.frame.camera]=env.add.image(tut.pos.arrow[tut.arrow.frame.camera],'camera arrow');tut.arrow[tut.arrow.frame.buy]=env.add.image(tut.pos.arrow[tut.arrow.frame.buy],'buy arrow');tut.arrow[tut.arrow.frame.ref]=env.add.image(tut.pos.arrow[tut.arrow.frame.ref],'ref arrow');tut.arrow[tut.arrow.frame.log]=env.add.image(tut.pos.arrow[tut.arrow.frame.log],'log arrow');tut.arrow[tut.arrow.frame.explanation]=env.add.image(tut.pos.arrow[tut.arrow.frame.explanation],'explanation arrow');tut.arrow[tut.arrow.frame.top_card]=env.add.image(tut.pos.arrow[tut.arrow.frame.top_card],'top card arrow');for(let a=0;a<tut.arrow.num;a++){tut.arrow[a].visible=false;}
tut.first_buy=env.add.sprite(tut.pos.first_buy,'first buy instructions').setVisible(false);tut.later_buys=env.add.sprite(tut.pos.later_buys,'later buy instructions').setVisible(false);tut.final_instr=env.add.sprite(tut.pos.final_instr,'final instructions').setVisible(false);tut.v_shade=env.add.sprite(env.nowhere,'vertical shaders');tut.h_shade=env.add.image(env.nowhere,'horizontal shader');tut.block_instr=true;tut.block_full=true;}
tut.button={frame:{prev:0,next:1,play:2,restart:3,got_it:4,blank:5,}}
tut.arrow={frame:{play:0,camera:1,buy:2,ref:3,log:4,explanation:5,top_card:6,},num:7,}
tut.pos={main:{x:815,y:540,button:[{x:615,y:855},{x:1015,y:855},],},play_offset:{x:0,y:-150},buy_offset:{x:-300,y:0},first_buy:{x:3125,y:540,button:{x:3260,y:660}},later_buys:{x:2865,y:540,button:{x:3200,y:840}},shader:{sky:2075,fire:2375,ice:2675,rock:2975,non_elem:3275,warrior:165,beast:415,dragon:665,titan:915,default_x:2524,default_y:540,},battle:{x:1350,y:540,button:{x:1730,y:855},},final_instr:{x:365,y:540,button:{x:525,y:685},},end:{x:675,y:685},arrow:[env.nowhere,{x:1675,y:825},env.nowhere,{x:1350,y:235},{x:1582,y:385},{x:1415,y:540},{x:1250,y:600},],}
tut.main_stop=5;tut.first_buy_stop=14;tut.show_play_arrow=function(){let play_choice=zone.get_last(player.you,zone.deck);for(let d=0;d<zone.count(player.you,zone.hand);d++){let card_num=zone.get(player.you,zone.hand,d);if(card[card_num].name==card.name.monk){play_choice=card_num;break;}}
let coords=math.add_coords(card[play_choice].sprite,tut.pos.play_offset);tut.arrow[tut.arrow.frame.play].visible=true;env.place(tut.arrow[tut.arrow.frame.play],coords);env.to_front(tut.arrow[tut.arrow.frame.play]);tut.forced_input=play_choice;}
tut.play=function(){tut.stage.cur=tut.stage.play;if(age.major()==0){tut.show_play_arrow();}
tut.arrow[tut.arrow.frame.camera].visible=false;tut.arrow[tut.arrow.frame.buy].visible=false;tut.first_buy.setVisible(false);tut.later_buys.setVisible(false);switch(age.major()){case 1:tut.main.setFrame(6).setVisible(true);tut.button[0].setFrame(tut.button.frame.got_it).setVisible(true);env.to_front(tut.main);env.to_front(tut.button[0]);env.place(tut.button[0],tut.pos.main.button[1]);break;case 2:tut.main.setFrame(7).setVisible(true);tut.button[0].setFrame(tut.button.frame.got_it).setVisible(true);env.to_front(tut.main);env.to_front(tut.button[0]);env.place(tut.button[0],tut.pos.main.button[1]);break;}
tut.block_full=age.major()!=0;}
tut.buy=function(){tut.stage.cur=tut.stage.buy;tut.arrow[tut.arrow.frame.play].visible=false;tut.arrow[tut.arrow.frame.camera].setVisible(true).setFrame(age.major());env.to_front(tut.arrow[tut.arrow.frame.camera]);camera.button.on('pointerdown',()=>{tut.arrow[tut.arrow.frame.camera].visible=false});switch(age.major()){case 0:tut.first_buy.setVisible(true);env.place(tut.button[0],tut.pos.first_buy.button);break;case 2:tut.later_buys.setFrame(1);case 1:tut.later_buys.setVisible(true);env.place(tut.button[0],tut.pos.later_buys.button);break;}
tut.button[0].setVisible(true).setFrame(tut.button.frame.got_it);env.to_front(tut.button[0]);tut.block_full=true;}
tut.battle=function(){tut.stage.cur=tut.stage.battle;tut.arrow[tut.arrow.frame.play].visible=false;tut.arrow[tut.arrow.frame.camera].visible=false;tut.arrow[tut.arrow.frame.buy].visible=false;tut.main.setVisible(true).setFrame(8);env.to_front(tut.main);env.place(tut.main,tut.pos.battle);env.place(tut.button[0],tut.pos.battle.button);env.to_front(tut.button[0]);tut.button[0].setFrame(tut.button.frame.got_it).setVisible(true);tut.block_button=true;tut.block_full=true;}
tut.button.click=function(b){switch(tut.stage.cur){case tut.stage.main:{let cur_frame=tut.main.frame.name;if(b==0){if(cur_frame>0){tut.main.setFrame(cur_frame-1);tut.button[1].setFrame(tut.button.frame.next);if(cur_frame-1==0){tut.button[0].setFrame(tut.button.frame.blank);}}}else{if(cur_frame==tut.main_stop){tut.main.visible=false;tut.button[0].visible=false;tut.button[1].visible=false;tut.play();}else{tut.main.setFrame(cur_frame+1);tut.button[0].setFrame(tut.button.frame.prev);if(cur_frame+1==tut.main_stop){tut.button[1].setFrame(tut.button.frame.play);}}}
break;}
case tut.stage.play:tut.main.visible=false;tut.button[0].visible=false;tut.show_play_arrow();tut.block_full=false;break;case tut.stage.buy:switch(age.major()){case 0:let cur_frame=tut.first_buy.frame.name;if(cur_frame<tut.first_buy_stop){tut.first_buy.setFrame(cur_frame+1);}else{tut.first_buy.setVisible(false);tut.button[0].setVisible(false);tut.block_full=false;let card_num=59;let coords=math.add_coords(card[card_num].sprite,tut.pos.buy_offset);tut.arrow[tut.arrow.frame.buy].visible=true;env.place(tut.arrow[tut.arrow.frame.buy],coords);env.to_front(tut.arrow[tut.arrow.frame.buy]);tut.forced_input=card_num;}
tut.v_shade.visible=false;tut.h_shade.visible=false;switch(tut.first_buy.frame.name){case 2:env.place(tut.v_shade,{x:tut.pos.shader.sky,y:tut.pos.shader.default_y});tut.v_shade.setFrame(0).setVisible(true);break;case 3:env.place(tut.v_shade,{x:tut.pos.shader.fire,y:tut.pos.shader.default_y});tut.v_shade.setFrame(1).setVisible(true);break;case 4:env.place(tut.v_shade,{x:tut.pos.shader.ice,y:tut.pos.shader.default_y});tut.v_shade.setFrame(2).setVisible(true);break;case 5:env.place(tut.v_shade,{x:tut.pos.shader.rock,y:tut.pos.shader.default_y});tut.v_shade.setFrame(3).setVisible(true);break;case 7:env.place(tut.h_shade,{x:tut.pos.shader.default_x,y:tut.pos.shader.warrior});tut.h_shade.setVisible(true);break;case 8:env.place(tut.h_shade,{x:tut.pos.shader.default_x,y:tut.pos.shader.beast});tut.h_shade.setVisible(true);break;case 9:env.place(tut.h_shade,{x:tut.pos.shader.default_x,y:tut.pos.shader.dragon});tut.h_shade.setVisible(true);break;case 10:env.place(tut.h_shade,{x:tut.pos.shader.default_x,y:tut.pos.shader.titan});tut.h_shade.setVisible(true);break;case 11:env.place(tut.v_shade,{x:tut.pos.shader.non_elem,y:tut.pos.shader.default_y});tut.v_shade.setFrame(4).setVisible(true);break;}
env.to_front(tut.first_buy);env.to_front(tut.button[0]);break;case 1:{tut.later_buys.visible=false;tut.button[0].visible=false;tut.block_full=false;let card_num=71;let coords=math.add_coords(card[card_num].sprite,tut.pos.buy_offset);tut.arrow[tut.arrow.frame.buy].visible=true;env.place(tut.arrow[tut.arrow.frame.buy],coords);env.to_front(tut.arrow[tut.arrow.frame.buy]);tut.forced_input=card_num;break;}
case 2:{tut.later_buys.visible=false;tut.button[0].visible=false;tut.block_full=false;let card_num=83;let coords=math.add_coords(card[card_num].sprite,tut.pos.buy_offset);tut.arrow[tut.arrow.frame.buy].visible=true;env.place(tut.arrow[tut.arrow.frame.buy],coords);env.to_front(tut.arrow[tut.arrow.frame.buy]);tut.forced_input=card_num;break;}}
break;case tut.stage.battle:{if(tut.main.visible){let cur_frame=tut.main.frame.name;if(cur_frame==8){tut.main.setFrame(cur_frame+1);tut.block_button=false;}else{tut.main.setVisible(false);tut.block_full=false;tut.final_instr.setVisible(true);env.to_front(tut.final_instr);env.place(tut.button[0],tut.pos.final_instr.button);env.to_front(tut.button[0]);}}else{let cur_frame=tut.final_instr.frame.name;if(cur_frame==4){env.physics.scene.restart();return;}
tut.final_instr.setFrame(cur_frame+1);if(cur_frame==3){tut.button[0].setFrame(tut.button.frame.restart);}
switch(cur_frame){case 0:{let sprite=tut.arrow[tut.arrow.frame.top_card];sprite.setVisible(true);env.to_front(sprite);break;}
case 1:{tut.arrow[tut.arrow.frame.top_card].setVisible(false);{let sprite=tut.arrow[tut.arrow.frame.ref];sprite.setVisible(true);env.to_front(sprite);}
{let sprite=tut.arrow[tut.arrow.frame.log];sprite.setVisible(true);env.to_front(sprite);}
break;}
case 2:{tut.arrow[tut.arrow.frame.ref].setVisible(false);tut.arrow[tut.arrow.frame.log].setVisible(false);let sprite=tut.arrow[tut.arrow.frame.explanation];sprite.setVisible(true);env.to_front(sprite);tut.block_instr=false;break;}
case 3:{tut.arrow[tut.arrow.frame.explanation].setVisible(false);break;}}}
break;}}}
var full_card={setup:function(){},update:function(){},hide:function(){},showing:[-1,-1],showing_subv:null,active:function(){return full_card[0].visible;},game_over:false,}
full_card.setup=function(){full_card[0]=env.add.sprite(full_card.pos,'full cards');full_card[1]=env.add.sprite(full_card.pos,'full cards');full_card[2]=env.add.sprite(full_card.pos,'full cards');for(let card_num=0;card_num<card.num;card_num++){card[card_num].sprite.on('pointerover',()=>{if(!touch.using()){full_card.show(card_num);}});card[card_num].sprite.on('pointerout',()=>{if(!full_card.touch){full_card.hide();}});card[card_num].sprite.on('pointerdown',()=>{full_card.show(card_num)});}
for(let s=0;s<subv.num;s++){for(let type=0;type<subv.type.num;type++){subv[s][type].on('pointerover',()=>{if(!touch.using()){full_card.show(s,type)}});subv[s][type].on('pointerout',()=>{if(!full_card.touch){full_card.hide()}});subv[s][type].on('pointerdown',()=>{full_card.show(s,type)});}}
env.background.setInteractive().on('pointerdown',()=>{full_card.hide()});tut.button[0].setInteractive().on('pointerdown',()=>{full_card.hide()});tut.button[1].setInteractive().on('pointerdown',()=>{full_card.hide()});full_card.hide();full_card.game_over=false;}
full_card.update=function(){for(let c=2;c>=0;c--){if(!full_card[c].visible){continue;}
env.to_front(full_card[c]);}}
full_card.hide=function(){full_card[0].visible=false;full_card[1].visible=false;full_card[2].visible=false;full_card.showing=[-1,-1];full_card.showing_subv=null;ref.hide();log.active=false;}
full_card.pos={x:200,y:env.window.y/2,ymindist:300,xoffset:350,from_edge:300,from_instr_box:700,sub_offset:{x:410,y:262,from_edge:300}}
full_card.show_associated_subversion=function(subversion,sprite_num=1){if(subversion==abilities.subvert_cave_in){full_card.show_associated_subversion(abilities.subvert_harmless,1);full_card.show_associated_subversion(abilities.subvert_mindless,2);return;}
full_card[sprite_num].x=full_card[0].x+full_card.pos.sub_offset.x;full_card[sprite_num].y=full_card[0].y+(sprite_num==1?-1:1)*full_card.pos.sub_offset.y;full_card[sprite_num].setFrame(subversion-abilities.subvert_cave_in).setScale(0.75);full_card[sprite_num].visible=true;env.to_front(full_card[sprite_num]);}
full_card.show=function(card_num,subversion_frame){if(tut.block_full){return;}
if(camera.active()){return;}
if(full_card.game_over&&(zone.find(card_num).place==zone.buy_top||zone.find(card_num).place==zone.buy_other)){return;}
full_card.touch=touch.using();let frame_num;let is_subv=subversion_frame!=null;if(!is_subv){if(card[card_num].sprite.frame.name!=0){frame_num=card[card_num].sprite_frame;}else if(zone.get_last(player.you,zone.deck)==card_num||zone.find(card_num).place==zone.play){frame_num=0;}else{return;}}else{frame_num=1+subversion_frame;}
full_card[1].visible=false;full_card[2].visible=false;ref.hide();log.active=false;let half_coords=!is_subv?card[card_num].sprite:subv[card_num][subversion_frame];full_card[0].x=half_coords.x;let has_subv=card[card_num].abilities[abilities.subvert_cave_in]>0||card[card_num].abilities[abilities.subvert_harmless]>0||card[card_num].abilities[abilities.subvert_mindless]>0||card[card_num].abilities[abilities.subvert_traitorous]>0;if(Math.abs(half_coords.y-full_card.pos.y)<full_card.pos.ymindist){let sign=half_coords.x<camera.get_midpt()?1:-1;if(tut.active()&&tut.stage.cur==tut.stage.buy&&card[card_num].elem==card.elem.ice){sign=1;}
full_card[0].x+=sign*full_card.pos.xoffset;if(sign==-1&&has_subv){full_card[0].x-=full_card.pos.xoffset;}}
{let x_min=camera.get_x0()+full_card.pos.from_edge;let x_max=camera.get_xmax()-full_card.pos.from_edge
if(!camera.at_left()){x_min=camera.get_x0()+full_card.pos.from_instr_box;}
if(full_card[0].x<x_min){full_card[0].x=x_min;}
if(full_card[0].x>x_max){full_card[0].x=x_max;}}
if(frame_num!=0&&!tut.block_instr){for(let ability=abilities.subvert_cave_in;ability<=abilities.subvert_traitorous;ability++){if(card[card_num].abilities[ability]>0){full_card.show_associated_subversion(ability);}}}
full_card[0].setFrame(frame_num);full_card[0].visible=true;env.to_front(full_card[0]);full_card.showing[0]=full_card.showing[1];full_card.showing[1]=!is_subv?card_num:-1;full_card.showing_subv=subversion_frame;}
var instr={preload:function(){},setup:function(){},update:function(){},pause:false,num_sub:0,game_over:false,}
instr.preload=function(){let url='https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js';env.physics.load.plugin('rexbbcodetextplugin',url,true);}
instr.setup=function(){instr.beginning=true;instr.last_message="";instr.text=env.physics.add.rexBBCodeText(instr.pos.x,instr.pos.y,"",instr.format).setOrigin(0.5,0);ref.button.on('pointerdown',()=>{log.active=false;});log.button.on('pointerdown',()=>{ref.hide();});instr.show_surge=false;instr.game_over=false;instr.jace_read=false;}
instr.update=function(){if(log.active){while(true){instr.show(log.text(),false,16);if(instr.text.height>instr.max_height){log.cut();}else{break;}}
return;}
if(ref.active()){instr.show("[u][color=purple]Ability Timing[/color][/u]\nWhen there are multiple abilities in play that have not yet been activated, first activate the ability among them that has the highest priority (as listed on the Reference Sheet). This may force you to backtrack on the priority stack as additional cards are played, like in this example:\n\nYou play a card with [color=green]Flash[/color] (priority 5) at the same time your opponent plays a card with [color=green]Haunt[/color] (priority 6). Then, you use [color=green]Flash[/color] to play a card with [color=green]Mimic[/color] (priority 4). Next, your [color=green]Mimic[/color] activates (before your opponent's [color=green]Haunt,[/color] even though your opponent played the card with [color=green]Haunt[/color] before you played the card with [color=green]Mimic[/color]).\n\nIt doesn’t matter what order cards were played in: All that matters is which ability has the highest priority.");return;}
if(tut.block_instr){instr.show("");return;}
if(full_card.active()){instr.hover_text(full_card.showing[1],full_card.showing_subv);return;}
if(tut.active()){instr.show("");return;}
if(instr.beginning&&age.major()==0&&age.minor()==0){instr.show("Welcome to the online demo for Titans of Eden, an upcoming tabletop card game that will launch on KickStarter in 2021.\n\nFirst time playing? Click the Tutorial button below.\n\nTo start the game, play a card. Your opponent will play a card at the same time you do.");return;}else{instr.beginning=false;}
if(move.in_progress()){instr.show("");return;}
if(age.major()<age.battle){switch(age.minor()){case age.step.play:{let str="It's the ";switch(age.major()){case 0:str+="1st";break;case 1:str+="2nd";break;case 2:str+="3rd";break;}
str+=" Age.\n\n";let sum_count=stats.count(player.you,abilities.summon);if(sum_count>0){str+="Because you have ";if(sum_count>1){str+=sum_count+" ";}
str+="[color=blue]Summon[/color]";if(sum_count>1){str+=" abilities";}
str+=", you get to play "+(sum_count+1)+" cards.\n\nOnce all cards have been selected, all cards will be flipped up simultaneously.";}else{str+="Play a card facedown. You can play from your hand, or the top card of your deck.\n\nOnce you and your opponent have each selected a card, both cards will be flipped faceup simultaneously.";if(age.major()==0&&stats.temples(player.you)<3&&stats.num_surges(player.you)>0){str+="\n\n[color=purple][u]Surge[/u][/color]\nIf you don't like the hand you drew, you can use [color=green]Surge[/color] to discard it and draw a new one. (You can do this twice per game, only after you've lost a temple.)";}}
instr.show(str);break;}
case age.step.subvert_harmless:{let sub_count=stats.count(player.you,abilities.subvert_harmless);instr.show("[u][color=purple]Subvert[/u][/color]\nChoose "+sub_count+" of your opponent's cards to [color=green]Subvert[/color] with [color=teal]Harmless.[/color] The card you choose will have 0 base power for the rest of the turn. (It can still gain power through [color=green]Bolster.[/color])");break;}
case age.step.subvert_mindless:{let sub_count=stats.count(player.you,abilities.subvert_mindless);instr.show("[u][color=purple]Subvert[/u][/color]\nChoose "+sub_count+" of your opponent's cards to [color=green]Subvert[/color] with [color=teal]Mindless.[/color] The card you choose will have no abilities for the rest of the turn. (This ability cannot cancel another [color=green]Subvert[/color] ability, because all [color=green]Subvert[/color] abilities activate and are resolved simultaneously.)");break;}
case age.step.subvert_traitorous:{let sub_count=stats.count(player.you,abilities.subvert_traitorous);instr.show("[u][color=purple]Subvert[/u][/color]\nChoose "+sub_count+" of your opponent's cards to [color=green]Subvert[/color] with [color=teal]Traitorous.[/color] The card you choose will be yours to control for the rest of the turn. (Before taking control of that card, your opponent will get to use any [color=green]Subvert[/color] abilities on that card, because all [color=green]Subvert[/color] abilities activate and are resolved simultaneously.)");break;}
case age.step.subvert_cave_in:{let sub_count=stats.count(player.you,abilities.subvert_cave_in);instr.show("[u][color=purple]Subvert[/u][/color]\nYou may choose to [color=green]Subvert[/color] "+sub_count+" of your opponent's cards that were played this age with both [color=teal]Harmless[/color] and [color=teal]Mindless,[/color] which will cause the chosen card to have 0 power and no abilities for the rest of the turn. However, if you choose to use this ability, you must discard your [color=blue]Cavern's Defender[/color] from play.\n\n(This ability cannot cancel another [color=green]Subvert[/color] ability, because all [color=green]Subvert[/color] abilities activate and are resolved simultaneously.)\n\nIf you don't want to use [color=green]Subvert: Cave In,[/color] click the button below.");break;}
case age.step.flash:{let flash_count=stats.count(player.you,abilities.flash);instr.show("[u][color=purple]Flash[/u][/color]\nPlay "+flash_count+" additional card"+(flash_count>1?"s":"")+" now.");break;}
case age.step.sacrifice:{let sac_count=stats.count(player.you,abilities.sacrifice);instr.show("[u][color=purple]Sacrifice[/u][/color]\nYou may permanently remove "+sac_count+" card"+(sac_count>1?"s":"")+" in your hand from the game.\n\nIf you don't want to use  [color=green]Sacrifice,[/color] click the button below.\n\nWe recommend first removing your Wizards from your hand, and then your Monks. (This will cause you to draw your better cards more often.)");break;}
case age.step.purify:{let purify_count=stats.count(player.you,abilities.purify);instr.show("[u][color=purple]Purify[/u][/color]\nYou may remove all subversions from any "+purify_count+" card"+(purify_count>1?"s":"")+".\n\nIf you don't want to use [color=green]Purify,[/color] click the button below.");break;}
case age.step.buy:{let energy=stats.energy(player.you);let str="[u][color=purple]Awakening[/u][/color]\nYou may use your [color=green]Energy[/color] abilities to awaken a card from the ritual piles. The card you awaken will be added to your discard, and then shuffled into your deck at the end of the turn.\n\nYou have [color=green]"+energy+" Energy.[/color]\n\nIf you don't want to awaken a card, click the button below."
if(energy>4){str+="\n\nEven though you have more than 4 [color=green]Energy,[/color] you can still only buy 1 card.";}
instr.show(str);break;}
case age.step.substitute_out:{let str="[u][color=purple]Substitute Out[/u][/color]\nYou may discard "+instr.num_sub+" card";if(instr.num_sub>1){str+="s";}
str+=" from play. If you do, you may play 1 card";if(instr.num_sub>1){str+=" for each card discarded";}
str+=".\n\nNow abilities (i.e. any ability that starts with the word Now) will not activate on the card";if(instr.num_sub>1){str+="s";}
str+=" you play.\n\nIf you don't want to use [color=green]Substitute,[/color] click the button below."
instr.show(str);break;}
case age.step.substitute_in:{instr.show("[u][color=purple]Substitute In[/u][/color]\nPlay a card (to replace the card you just [color=green]Substituted[/color] out of play). You can play from your hand, or the top card of your deck.\n\nNow abilities (i.e. any ability that starts with the word Now) will not activate on the card you play.");break;}}}else{let winner=stats.winner();let capture=stats.capture();let str="";if(winner==player.you){str+="[color=purple]You win the battle![/color]\n\n"+(capture?"Capture":"Destroy")+" 1 of your opponent's temples.";}else if(winner==player.opp){str+="[color=purple]You lose the battle.[/color]\n\nYour opponent "+(capture?"captures":"destroys")+" 1 of your temples.";}else{str+="[color=purple]The battle is fought to a draw.[/color]";}
if(!instr.game_over){str+="\n\nDiscard any cards from your hand. Then, we'll shuffle all your cards together, and you'll draw until you have 6 cards in your hand.\n\nOnce you have finished discarding, click Next Turn, below. Or, to discard all of the cards in your hand and go on to the next turn, click Discard All, below.";}
instr.show(str);}}
instr.pos={x:1770,y:415}
instr.max_height=450;instr.format={backgroundColor:null,fontFamily:"Roboto Black",fontSize:"22px",color:"black",align:"center",underline:{color:"purple",thickness:2,offset:5,},wrap:{mode:'word',width:250,},stroke:'black',strokeThickness:2,}
instr.show=function(str,do_shrinking=true,font_size=22,force=false){if(!instr.last_message.localeCompare(str)&&!force){return;}
instr.last_message=str;instr.text.setText(str);instr.text.setFontSize(font_size.toString()+"px");if(do_shrinking&&instr.text.height>instr.max_height){instr.show(str,do_shrinking,font_size-0.5,true);}}
instr.hover_text=function(card_num,subversion_frame){if(subversion_frame!=null){let str;switch(subversion_frame){case subv.type.harmless:str="[color=teal]Harmless[/color] reduces the subverted card's base power to 0 for the rest of the turn. (It’s as if the power printed on the card is 0.)\n\nThe subverted card can still gain power through [color=green]Bolster.[/color]";break;case subv.type.mindless:str="[color=teal]Mindless[/color] removes all abilities from the subverted card for the rest of the turn.";break;case subv.type.traitorous:str="[color=teal]Traitorous[/color] lets you gain control of an opponent's card for the rest of the turn. (That card behaves as if it was 1 of your cards you played this turn.)";break;}
instr.show(str);return;}
if(card[card_num].sprite.frame.name==0){return;}
let str;switch(card[card_num].name){case card.name.monk:str="[color=blue]Monks[/color] have 0 power and the [color=green]Energy[/color] ability, which lets you awaken cards. (Whenever you awaken a card, it gets added to your discard pile, and then shuffled into your deck at the end of the turn.)\n\n[color=blue]Monks[/color] won't help you in battle, but they'll let you add elemental cards with powerful abilties to your deck.";break;case card.name.wizard:str="[color=blue]Wizards[/color] have 1 power and no abilities.\n\nThey'll help you in battle, but they're not strong enough to win this war themselves.";if(age.first_turn()){str+="\n\n[color=red]We [i]highly[/i] recommend that you only play Monks on your first turn.[/color]";}
break;case card.name.traveler:str="[color=blue]Travelers[/color] give you 2 [color=green]Energy[/color] each age, which lets you awaken better and more costly cards than you could with [color=blue]Monks[/color] alone.\n\nAdditionally, [color=blue]Travelers[/color] have 1 power, so they contribute to the fight (instead of idly standing by).";break;case card.name.ghost:str="[color=blue]Ghosts[/color] have negative power and no abilities. Don’t buy [color=blue]Ghosts[/color]: They’re bad. They’re only in the game so you can make your opponent gain them (with the [color=green]Haunt[/color] ability.";break;case card.name.nikolai_the_cursed:str="[color=blue]Nikolai, The Cursed[/color] has [color=green]Summon[/color], which lets you play 2 cards, instead of 1, each age.\n\nSo, if you play [color=blue]Nikolai, The Cursed[/color] during the 1st Age, then you get to play 2 cards, simultaneously, during each of the 2nd and 3rd Ages. (On the other hand, if you play [color=blue]Nikolai, The Cursed[/color] during the 3rd Age, it has no effect.)\n\n[color=blue]Nikolai, The Cursed[/color] has 0 power, but this is more than made up for by its awesome [color=green]Summon[/color] ability.";break;case card.name.zodiac_the_eternal:str="";if(!instr.jace_read||age.first_turn()){str+="(If this is your first game, you should read [color=blue]Jace, Winter's Firstborn[/color] before reading this card. [color=blue]Jace[/color] is the Ice Warrior, located one card to the right of this card.)\n\n";}
str+="[color=blue]Zodiac, The Eternal[/color] lets you respond to your opponent’s [color=green]Subvert[/color] abilities with vengeance and fury. When you play [color=blue]Zodiac, The Eternal,[/color] you get to remove all [color=teal]subversions[/color] from any 1 card.\n\nSo, if your opponent makes your card [color=teal]Harmless[/color] (with [color=blue]Jace, Winter's Firstborn[/color]), you can turn right around and remove that [color=teal]subversion.[/color] With 2 power, [color=blue]Zodiac, The Eternal[/color] is a force to be reckoned with.";break;case card.name.jace_winters_firstborn:str="[color=blue]Jace, Winter's Firstborn[/color] has [color=green]Subvert: Harmless,[/color] which lets you attach the [color=teal]Harmless Subversion[/color] to any 1 of your opponent's cards.\n[color=teal]Subversions[/color] are effects that temporarily modify cards – they stay attached to a card until the end of the turn.\n\nThe [color=teal]Harmless Subversion[/color] reduces a card's base power to 0 for the rest of the turn. (It’s as if the power printed on the card is 0.) So, if you play this card, you'll have 1 power [color=blue](Jace's)[/color], and your opponent will have 0. That’s a pretty good trade-off for you.";instr.jace_read=true;break;case card.name.akari_timeless_fighter:str="[color=blue]Akari, Timeless Fighter[/color] lets you [color=green]Draw[/color] 2 cards at the start of each age, before any cards are played.\n\nIf you play [color=blue]Akari, Timeless Fighter[/color] during the 1st Age, you’ll draw 2 cards at the start of the 2nd and 3rd Ages. However, if you play [color=blue]Akari, Timeless Fighter[/color] during the 3rd Age, this ability will have no effect.\n\n[color=blue]Akari[/color] has a lot of power, and helps you find the other powerful cards in your deck.";break;case card.name.winds_howl:str="[color=blue]Wind's Howl[/color] has [color=green]Flash 2,[/color] which lets you play 2 additional cards right after you play it.\n\nIf you and your opponent both play cards with [color=green]Flash,[/color] then you and your opponent play all additional cards simultaneously. If any of the additional cards you play have [color=green]Flash,[/color] you repeat this process.\n\nBe careful with [color=blue]Wind's Howl[/color]: It has negative power, which you'll need to make up for with the cards you play.";break;case card.name.living_volcano:str="[color=blue]Living Volcano[/color] has [color=green]Flash,[/color] which lets you play 1 additional card right after you play it. It also has [color=green]Discard 2,[/color] which forces your opponent to discard 2 random cards at the start of each age (limiting what they are able to play).";break;case card.name.return_of_the_frost_giants:str="[color=blue]Return of the Frost Giants[/color] has [color=green]Flash,[/color] which lets you play 1 additional card right after you play it. It also has [color=green]Substitute,[/color] which lets you replace 1 card you have in play with another 1 of your cards right before the battle. (Now abilities (which are abilities that start with the word Now) don't activate on replacement cards.)\n\n[color=green]Substitute[/color] lets you play a [color=blue]Monk[/color] to buy cards with, then replace it before battle with a more powerful card.";break;case card.name.spine_splitter:str="[color=blue]Spine Splitter[/color] has [color=green]Flash,[/color] which lets you play 1 additional card right after you play it. It also has [color=green]Sacrifice 2,[/color] which lets you permanently remove 2 cards in your hand from the game.\n\nThis is extremely powerful ability because it lets you remove your low-value cards from your deck, making it so that you'll draw your high-value cards more often.\n\nWe recommend removing [color=blue]Wizards[/color] first, and then [color=blue]Monks.[/color]";break;case card.name.aurora_draco:str="[color=blue]Aurora Draco[/color] has [color=green]Haunt 2[/color], which forces your opponent to gain 2 [color=blue]Ghosts[/color] into play. These [color=blue]Ghosts[/color] will be [color=green]Subverted[/color] with [color=teal]Harmless[/color] – they have 0 power this turn. At the end of the turn, they'll get shuffled into your opponent’s deck, which is where they'll start to wreak their havoc: Your opponent might draw these [color=blue]Ghosts[/color] (instead of better cards), and might even accidently play 1 of them from the top of their deck.\n\n[color=blue]Aurora Draco[/color] has [color=green]Bolter: Fire,[/color] which gives it +1 power for each fire card your opponent has in play.";break;case card.name.smoldering_dragon:str="[color=blue]Smoldering Dragon[/color] has [color=green]Protect[/color], which saves your cards from being [color=green]Subverted[/color] and you from being [color=green]Haunted[/color] this age.\n\n[color=green]Protect[/color] does not work retro-actively: All [color=teal]subversions[/color] that have already been attached this turn remain attached.\n\n[color=green]Protect[/color] does not last the whole turn: It wears off at the end of the age [color=blue]Smoldering Dragon[/color] is played.\n\n[color=blue]Smoldering Dragon[/color] has [color=green]Bolter: Ice,[/color] which gives it +1 power for each ice card your opponent has in play.";break;case card.name.frostbreath:str="[color=blue]Frostbreath[/color] has [color=green]Subvert: Mindless[/color], which lets you attach [color=teal]Mindless[/color] to an opponent’s card. [color=teal]Mindless[/color] removes all abilities on the subverted card, including [color=green]Bolster[/color] and [color=green]Energy[/color].\n\n[color=blue]Frostbreath[/color] has [color=green]Bolter: Rock,[/color] which gives it +1 power for each rock card your opponent has in play.";break;case card.name.caverns_defender:str="When you play [color=blue]Cavern’s Defender[/color], you get to choose: 1) Do nothing, or 2) Discard [color=blue]Cavern's Defender[/color] from play and attach [color=teal]Harmless[/color] and [color=teal]Mindless[/color] to an opponent's card played this age. ([color=teal]Harmless[/color] and [color=teal]Mindless[/color] remove all power and abilities from a card.)\n\nThe choice is yours: Do you want [color=blue]Cavern's Defender's[/color] power, or do you want to cancel out an opponent's card?\n\n[color=blue]Cavern's Defender has [color=green]Bolter: Sky,[/color] which gives it +1 power for each sky card your opponent has in play.";break;case card.name.madness_of_1000_stars:str="[color=blue]Madness Of 1,000 Stars[/color] is the titan that just keeps giving: When you play it, you get [color=green]4 Energy[/color] this age (and only this age -- not every age). So, whenever you play [color=blue]Madness Of 1,000 Stars,[/color] you can get another titan.";break;case card.name.final_judgment:str="[color=blue]Final Judgment[/color] makes your opponent [color=green]Discard[/color] all of the cards in their hand. For the rest of the turn, they'll be forced to play random cards from the top of their deck.";break;case card.name.hell_frozen_over:str="[color=blue]Hell, Frozen Over[/color] lets you attach [color=teal]Traitorous[/color] to an opponent's card, which gives you control over that card for the rest of the turn. (You get to use its power and abilities.)";break;case card.name.what_lies_beneath:str="[color=blue]What Lies Beneath[/color] is one of the most powerful cards in this game. It gets +1 power for each card your opponent has in play, for up to 6 total power.";break;}
let loc=zone.find(card_num);if(loc.place==zone.play){str+="\n\n[color=orangered]Current Power: "+stats.card_power(card_num).toString()+"[/color]";}
instr.show(str);}
var actions={buy:function(person,card_num){},draw:function(person,num_cards){},discard:function(person,card_num,props){},discard_rand:function(person,num_cards){},haunt:function(person,num_times){},play:function(person,card_num){},purify:function(card_num){},reveal_played:function(){},sacrifice:function(card_num){},subvert:function(card_num,type){},surge:function(person){},just_played:Array(card.num).fill(false),}
actions.buy=function(person,card_num){move.card(person,zone.disc,card_num);if(card[card_num].name==card[card_num-1].name){zone.change(player.none,zone.buy_top,card_num-1);}
move.organize(person,zone.disc);log.add({event:log.event.buy,person:person,card_num:card_num});}
actions.draw=function(person,num_cards){if(num_cards<=0){return;}
move.organize(person,zone.hand);let c;for(c=0;c<num_cards&&zone.count(person,zone.deck)>0;c++){let card_num=zone.get_last(person,zone.deck);move.card(person,zone.hand,card_num);}
move.organize(person,zone.hand);if(age.major()>0&&c>0){if(age.major()==age.battle){log.add({event:log.event.shuffle_draw,person:person,count:c});}else{log.add({event:log.event.draw,person:person,count:c});}}}
actions.discard=function(person,card_num,props){let is_traitorous=card[card_num].subv[subv.type.traitorous]!=null;card.discard(card_num);move.card(is_traitorous?+(!person):person,zone.disc,card_num,props);}
actions.discard_rand=function(person,num_cards){if(num_cards<=0){return;}
let c;for(c=0;c<num_cards&&zone.count(person,zone.hand)>0;c++){let card_num=zone.get_rand(person,zone.hand);move.card(person,zone.disc,card_num);}
if(c>0){log.add({event:log.event.discard,person:+(!person),count:c});}}
actions.haunt=function(person,num_times){if(num_times==0){return;}
if(stats.count(person,abilities.protect)>0){log.add({event:log.event.protect,person:+(!person),ability:"Haunt"});return;}
let card_num;for(card_num=card.ordinal.ghost+card.count(card.name.ghost)-1;card_num>=card.ordinal.ghost&&!zone.contains(player.none,zone.buy_top,card_num);card_num--){}
let num_haunted;for(num_haunted=0;num_haunted<num_times&&card_num>=card.ordinal.ghost;card_num--,num_haunted++){actions.subvert(card_num,subv.type.harmless,true);move.card(person,zone.play,card_num,{flip_facedown:false,simultaneous:true});if(card_num-1>=card.ordinal.ghost){zone.change(player.none,zone.buy_top,card_num-1);}}
log.add({event:log.event.haunt,person:+(!person),count:num_haunted});move.organize(person,zone.play);}
actions.play=function(person,card_num){move.card(person,zone.play,card_num);move.organize(person,zone.play);actions.just_played[card_num]=true;full_card.hide();card[card_num].age_played=age.major();}
actions.purify=function(card_num,person){for(let type=0;type<subv.type.num;type++){let subv_card_num=card[card_num].subv[type];if(subv_card_num==null){continue;}
move.fade_out(subv[subv_card_num][type]);card[card_num].subv[type]=null;if(type==subv.type.traitorous){let loc=zone.find(card_num);zone.change(+(!loc.person),zone.play,card_num);move.organize(+(!loc.person),zone.play);}}
if(person!=null){log.add({event:log.event.purify,person:person,card_num:card_num});}}
actions.reveal_played=function(){let any_revealed=false;move.add_pause(10);for(let person=0;person<player.num;person++){let num_played=0;for(let card_num of zone.get(person,zone.play)){if(actions.just_played[card_num]){move.card(person,zone.play,card_num,{flip_faceup:true,flip_facedown:false,skip_move:true,simultaneous:true});card.play(card_num);actions.just_played[card_num]=false;any_revealed=true;num_played++;log.unhide();if(age.minor()==age.step.play&&num_played==1){log.add({event:log.event.play,person:person,card_num:card_num});}else if(age.minor()!=age.step.substitute_in){log.add({event:age.minor()==age.step.play?log.event.summon:log.event.flash,person:person,card_num:card_num});}}}}
move.add_pause(1);stats.update();return any_revealed;}
actions.sacrifice=function(card_num){log.add({event:log.event.sacrifice,person:zone.find(card_num).person,card_num:card_num});move.fade_out(card_num);zone.remove(card_num);}
actions.subvert=function(card_num,type,skip_fade){if(card[card_num].subv[type]!=null){return;}
subv_card_num=subv.next(type);card[card_num].subv[type]=subv_card_num;let sprite=subv[subv_card_num][type];let count=card.num_subv(card_num);let offset=subv.offset(count-1,count);let dest=math.add_coords(card[card_num].sprite,offset);sprite.visible=true;sprite.alpha=1;env.place(sprite,dest);let person=zone.find(card_num).person;if(skip_fade==null||!skip_fade){sprite.alpha=0;move.organize(person,zone.play);move.fade_in(sprite,card_num,offset);move.organize(person,zone.play);}
if(type==subv.type.traitorous){let loc=zone.find(card_num);zone.change(+(!loc.person),zone.play,card_num);move.organize(+(!person),zone.play);}}
actions.surge=function(person){move.combine_zone(person,zone.hand,zone.disc);actions.draw(person,6);stats.use_surge(person);if(person==player.you){age.set_minor(-age.step.incr);controller.advance();}
log.add({event:log.event.surge,person:person});}
var ai={process_ability:function(ability,num_cards){},end_of_turn:function(){},surge:function(){},}
ai.process_ability=function(ability,num_cards){switch(ability){case abilities.summon:ai.play(1+num_cards);break;case abilities.energy_evanesce:ai.buy();break;case abilities.flash:ai.play(num_cards);break;case abilities.purify:ai.purify(num_cards);break;case abilities.sacrifice:ai.sacrifice(num_cards);break;case abilities.substitute:ai.substitute(num_cards);break;case abilities.subvert_cave_in:case abilities.subvert_harmless:case abilities.subvert_mindless:case abilities.subvert_traitorous:ai.subvert(num_cards,subv.from_ability(ability));break;}}
ai.end_of_turn=function(){ai.discard();}
ai.surge=function(){if(age.major()!=0){return;}
if(stats.temples(player.opp)>=2){return;}
if(stats.num_surges(player.opp)==0){return;}
if(ai.num_elemental_in_hand()>=3){return;}
actions.surge(player.opp);ai.surge();}
ai.play=function(num_cards){}
ai.buy=function(){}
ai.discard=function(){}
ai.purify=function(num_cards){}
ai.sacrifice=function(num_cards){}
ai.substitute=function(num_cards){}
ai.subvert=function(num_cards,type){}
ai.num_in=function(person,place,name){let count=0;for(let card_num of zone.get(person,place)){if(card[card_num].name==name&&!actions.just_played[card_num]){count++;}}
return count;}
ai.play_from_hand=function(name){for(let card_num of zone.get(player.opp,zone.hand)){if(card[card_num].name==name){actions.play(player.opp,card_num);return true;}}
return false;}
ai.play_random=function(){if(zone.count(player.opp,zone.deck)>0){actions.play(player.opp,zone.get_last(player.opp,zone.deck));}else{actions.play(player.opp,zone.get_rand(player.opp,zone.hand));}}
ai.num_elemental_in_hand=function(){let num_elemental=0;for(let card_num of zone.get(player.opp,zone.hand)){let is_forest=card[card_num].elem==card.elem.forest;let is_desert=card[card_num].elem==card.elem.desert;if(!is_forest&&!is_desert){num_elemental++;}}
return num_elemental;}
ai.play=function(num_cards){if(num_cards!=null){let num_played;for(num_played=0;num_played<num_cards;num_played++){let any_hand=zone.count(player.opp,zone.hand)>0;let any_deck=zone.count(player.opp,zone.deck)>0;if(!any_hand&&!any_deck){break;}
ai.play();}
if(num_played>0){move.organize(player.opp,zone.play);}
return;}
if(age.first_turn()){let play_wizard=ai.num_in(player.you,zone.play,card.name.wizard)>ai.num_in(player.opp,zone.play,card.name.wizard);if(tut.active()&&age.major()==2){play_wizard=true;}
if(play_wizard){if(ai.play_from_hand(card.name.wizard)){return;}}else{if(ai.play_from_hand(card.name.monk)){return;}}
ai.play_random();return;}
if(Math.random()<0.90&&ai.play_from_hand(card.name.winds_howl)){return;}
if(Math.random()<0.90&&ai.play_from_hand(card.name.living_volcano)){return;}
if(Math.random()<0.90&&ai.play_from_hand(card.name.return_of_the_frost_giants)){return;}
if(Math.random()<0.90&&ai.play_from_hand(card.name.spine_splitter)){return;}
if(stats.temples(player.opp)==1&&age.major()>0){let choice=null;for(let card_num of zone.get(player.opp,zone.hand)){if(choice==null||stats.card_power(card_num)>stats.card_power(choice)){choice=card_num;}}
if(choice==null||stats.card_power(choice)<2){ai.play_random();}else{actions.play(player.opp,choice);}
return;}
if(Math.random()<0.90&&age.major()==0&&ai.play_from_hand(card.name.nikolai_the_cursed)){return;}
if(Math.random()<0.90&&ai.purify_choice()!=null&&ai.play_from_hand(card.name.zodiac_the_eternal)){return;}
{let choice=ai.subvert_choice(subv.type.harmless);if(Math.random()<0.90&&choice!=null&&stats.card_power(choice)>=2&&ai.play_from_hand(card.name.zodiac_the_eternal)){return;}}
if(Math.random()<0.90&&stats.temples(player.opp)>=2&&ai.play_from_hand(card.name.madness_of_1000_stars)){return;}
if(Math.random()<0.90&&stats.temples(player.opp)>=2&&ai.play_from_hand(card.name.traveler)){return;}
if(Math.random()<0.90&&stats.temples(player.opp)>=2&&stats.energy(player.opp)==3&&ai.play_from_hand(card.name.monk)){return;}
if(Math.random()<0.75&&stats.temples(player.opp)>=2&&stats.energy(player.opp)==2&&ai.play_from_hand(card.name.monk)){return;}
if(Math.random()<0.75&&stats.temples(player.opp)==3&&stats.energy(player.opp)==1&&age.major()==1&&ai.play_from_hand(card.name.monk)){return;}
if(Math.random()<0.50&&stats.temples(player.opp)==3&&stats.energy(player.opp)==0&&age.major()==0&&ai.play_from_hand(card.name.monk)){return;}
if(Math.random()<0.80&&ai.play_from_hand(card.name.final_judgment)){return;}
if(Math.random()<0.80&&ai.play_from_hand(card.name.hell_frozen_over)){return;}
if(Math.random()<0.90&&age.major()<=1&&ai.num_elemental_in_hand()<=2&&ai.play_from_hand(card.name.akari_timeless_fighter)){return;}
if(Math.random()<0.60&&age.major()<=1&&ai.num_elemental_in_hand()<=3&&ai.play_from_hand(card.name.akari_timeless_fighter)){return;}
if(Math.random()<0.50&&ai.play_from_hand(card.name.what_lies_beneath)){return;}
if(Math.random()<0.95&&age.major()==2&&ai.play_from_hand(card.name.what_lies_beneath)){return;}
if(Math.random()<0.90&&ai.play_from_hand(card.name.smoldering_dragon)){return;}
if(Math.random()<0.90&&ai.num_in(player.none,zone.buy_top,card.name.ghost)&&ai.play_from_hand(card.name.aurora_draco)){return;}
if(Math.random()<0.90&&stats.count(player.you,abilities.purify)==0&&stats.count(player.you,abilities.protect)==0&&ai.play_from_hand(card.name.frostbreath)){return;}
if(Math.random()<0.90&&ai.play_from_hand(card.name.caverns_defender)){return;}
if(Math.random()<0.90&&stats.temples(player.opp)<=2&&ai.play_from_hand(card.name.akari_timeless_fighter)){return;}
if(Math.random()<0.90&&stats.temples(player.opp)<=2&&ai.play_from_hand(card.name.zodiac_the_eternal)){return;}
if(Math.random()<0.90&&stats.temples(player.opp)<=2&&ai.play_from_hand(card.name.jace_winters_firstborn)){return;}
if(Math.random()<0.90&&stats.temples(player.opp)==3&&age.major()==0&&ai.play_from_hand(card.name.monk)){return;}
ai.play_random();return;}
ai.num_owned_named=function(person,name){let count=0;for(let z=0;z<4;z++){for(let card_num of zone.get(person,z)){if(card[card_num].name==name){count++;}}}
return count;}
ai.num_owned_elem=function(person,elem){let count=0;for(let z=0;z<4;z++){for(let card_num of zone.get(person,z)){if(card[card_num].elem==elem){count++;}}}
return count;}
ai.from_list_get_named=function(candidates,name){for(let card_num of candidates){if(card[card_num].name==name){return card_num;}}
return null;}
ai.buy_choice=function(){for(let energy=stats.count(player.opp,abilities.energy)+stats.count(player.opp,abilities.energy_evanesce);energy>0;energy--){let candidates=[];for(let card_num of zone.get(player.none,zone.buy_top)){if(card[card_num].name==card.name.ghost){continue;}
if(card[card_num].cost==energy){candidates.push(card_num);}}
if(candidates.length==0){continue;}
if(energy==1){let zodiac=ai.from_list_get_named(candidates,card.name.zodiac_the_eternal);let opp_pure=ai.num_owned_named(player.opp,card.name.zodiac_the_eternal)>0;let you_subv=ai.num_owned_named(player.you,card.name.jace_winters_firstborn)>0||ai.num_owned_named(player.you,card.name.frostbreath)>0||ai.num_owned_named(player.you,card.name.hell_frozen_over)>0;if(zodiac!=null&&!opp_pure&&you_subv){return zodiac;}}
if(!age.first_turn()&&energy==3){let sdragon=ai.from_list_get_named(candidates,card.name.smoldering_dragon);let opp_pure=ai.num_owned_named(player.opp,card.name.smoldering_dragon)>0;let you_subv=ai.num_owned_named(player.you,card.name.frostbreath)>0||ai.num_owned_named(player.you,card.name.hell_frozen_over)>0;if(sdragon!=null&&!opp_pure&&you_subv){return sdragon;}}
if(energy==1||energy==4){return math.shuffle(candidates)[0];}
if(energy==2){let traveler=ai.from_list_get_named(candidates,card.name.traveler);if(Math.random()>0.50&&traveler!=null&&ai.num_owned_named(player.opp,card.name.traveler)==0){return traveler;}else{return math.shuffle(candidates)[0];}}
if(energy==3){let count=Array(4).fill(0);for(let elem=0;elem<4;elem++){count[elem]=ai.num_owned_elem(player.you,card.elem.sky+elem);}
for(let elem=0;elem<4;elem++){let mf_elem=math.max_index(count);if(count[mf_elem]==1){return math.shuffle(candidates)[0];}
let name;switch(mf_elem){case 0:name=card.name.caverns_defender;break;case 1:name=card.name.aurora_draco;break;case 2:name=card.name.smoldering_dragon;break;case 3:name=card.name.frostbreath;break;}
let choice=ai.from_list_get_named(candidates,name);if(choice==null){count[elem]=0;continue;}
return choice;}}}
return null;}
ai.buy=function(){let choice=ai.buy_choice();if(choice!=null){actions.buy(player.opp,choice);}else if(stats.energy(player.opp)>0){log.add({event:log.event.decline_buy,person:player.opp});}}
ai.discard=function(){let count=0,max=zone.count(player.opp,zone.hand);for(let d=zone.count(player.opp,zone.hand)-1;d>=0;d--){let card_num=zone.get(player.opp,zone.hand,d);if(card[card_num].elem==card.elem.forest||card[card_num].elem==card.elem.desert){actions.discard(player.opp,card_num,{simultaneous:true});log.add({event:log.event.shuffle_discard,person:player.opp,card_num:card_num});count++;}}
if(count==max){log.add({event:log.event.shuffle_discard,person:player.opp,count:-1});}
move.add_pause(1);}
ai.purify_choice=function(){for(let card_num of zone.get(player.you,zone.play)){if(card[card_num].subv[subv.type.traitorous]!=null){if(stats.card_power(card_num)>0||card[card_num].name==card.name.what_lies_beneath){return card_num;}}}
{let power=1,choice=null;for(let card_num of zone.get(player.opp,zone.play)){if(card[card_num].subv[subv.type.harmless]!=null&&card[card_num].power>power){choice=card_num;power=card[card_num].power;}}
if(choice!=null){return choice;}}
for(let card_num of zone.get(player.opp,zone.play)){if(card[card_num].subv[subv.type.mindless]!=null&&math.sum(card[card_num].active)>0){return card_num;}}
for(let card_num of zone.get(player.you,zone.play)){if(card[card_num].subv[subv.type.harmless]!=null&&card[card_num].power<0){return card_num;}}
for(let card_num of zone.get(player.opp,zone.play)){if(card[card_num].subv[subv.type.harmless]!=null&&card[card_num].power>0){return card_num;}}
for(let card_num of zone.get(player.you,zone.play)){if(card[card_num].subv[subv.type.traitorous]!=null){if(stats.card_power(card_num)>=0){return card_num;}}}
return null;}
ai.purify=function(num_cards){for(let c=0;c<num_cards;c++){let choice=ai.purify_choice();if(choice!=null){actions.purify(choice,player.opp);}else{break;}}}
ai.sacrifice=function(num_cards){for(let x=0;x<num_cards;x++){let sacked=false;let choice=[card.name.ghost,card.name.wizard,card.name.monk];for(let c=0;c<choice.length&&!sacked;c++){for(let card_num of zone.get(player.opp,zone.hand)){if(card[card_num].name==choice[c]){actions.sacrifice(card_num);sacked=true;break;}}}}}
ai.substitute=function(num_cards){if(age.major()!=age.substitute){return;}
for(let x=0;x<num_cards;x++){let in_choice=null;for(let card_num of zone.get(player.opp,zone.hand)){if(in_choice==null||stats.card_power(card_num)>stats.card_power(in_choice)){in_choice=card_num;}}
let out_choice=null;for(let card_num of zone.get(player.opp,zone.play)){if(out_choice==null||stats.card_power(card_num)<stats.card_power(out_choice)){out_choice=card_num;}}
let from_hand=in_choice!=null&&out_choice!=null&&stats.card_power(in_choice)>stats.card_power(out_choice);let from_deck=!from_hand&&out_choice!=null&&zone.count(player.opp,zone.deck)>0&&stats.card_power(out_choice)<2;if(!from_hand&&!from_deck){log.add({event:log.event.decline,person:player.opp,ability:"Substitute"});return;}
if(from_hand){actions.discard(player.opp,out_choice);actions.play(player.opp,in_choice);log.add({event:log.event.substitute,person:player.opp,card_num:out_choice,card_num2:in_choice});}else{in_choice=zone.get_last(player.opp,zone.deck);actions.discard(player.opp,out_choice);actions.play(player.opp,in_choice);log.add({event:log.event.substitute,person:player.opp,card_num:out_choice,card_num2:in_choice});}}}
ai.subvertible=function(name,type){for(let card_num of zone.get(player.you,zone.play)){if(!card[card_num].ai_subvertible){continue;}
if(actions.just_played[card_num]){continue;}
if(type!=subv.type.cave_in){if(card[card_num].subv[type]!=null){continue;}}else{if(card[card_num].subv[subv.type.harmless]!=null&&card[card_num].subv[subv.type.mindless]!=null){continue;}}
if(card[card_num].name==name){return card_num;}}
return null;}
ai.subvert_choice=function(type){let choice;if(type==subv.type.cave_in){if(stats.count(player.you,abilities.purify)>0){return null;}
if(age.major()+1<age.battle&&(choice=ai.subvertible(card.name.final_judgment,subv.type.mindless))!=null){for(let card_num of zone.get(player.opp,zone.hand)){if(card[card_num].elem!=card.elem.forest&&card[card_num].elem!=card.elem.desert){return choice;}}}
return null;}
if((choice=ai.subvertible(card.name.zodiac_the_eternal,type))!=null&&card[choice].age_played==age.major()){return choice;}
if((choice=ai.subvertible(card.name.what_lies_beneath,type))!=null){return choice;}
if(age.major()+1<age.battle&&(choice=ai.subvertible(card.name.final_judgment,type))!=null){for(let card_num of zone.get(player.opp,zone.hand)){if(card[card_num].elem!=card.elem.forest&&card[card_num].elem!=card.elem.desert){return choice;}}}
if((choice=ai.subvertible(card.name.madness_of_1000_stars,type))!=null&&card[choice].age_played==age.major()){return choice;}
if(age.major()==0&&(choice=ai.subvertible(card.name.nikolai_the_cursed,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.aurora_draco,type))!=null&&card[choice].age_played==age.major()){return choice;}
if((choice=ai.subvertible(card.name.aurora_draco,type))!=null&&stats.num_played_of_elem(player.opp,card.elem.fire)>=2){return choice;}
if((choice=ai.subvertible(card.name.smoldering_dragon,type))!=null&&stats.num_played_of_elem(player.opp,card.elem.ice)>=2){return choice;}
if((choice=ai.subvertible(card.name.frostbreath,type))!=null&&stats.num_played_of_elem(player.opp,card.elem.rock)>=2){return choice;}
if((choice=ai.subvertible(card.name.caverns_defender,type))!=null&&stats.num_played_of_elem(player.opp,card.elem.sky)>=2){return choice;}
if(stats.temples(player.opp)>1&&(choice=ai.subvertible(card.name.traveler,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.winds_howl,type))!=null&&card[choice].active[abilities.flash]>0){return choice;}
if((choice=ai.subvertible(card.name.spine_splitter,type))!=null&&card[choice].active[abilities.sacrifice]>0){return choice;}
if((choice=ai.subvertible(card.name.return_of_the_frost_giants,type))!=null&&card[choice].active[abilities.flash]>0){return choice;}
if((choice=ai.subvertible(card.name.living_volcano,type))!=null&&card[choice].active[abilities.flash]>0){return choice;}
if((choice=ai.subvertible(card.name.return_of_the_frost_giants,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.living_volcano,type))!=null){return choice;}
if(age.major()+1<age.battle&&(choice=ai.subvertible(card.name.akari_timeless_fighter,type))!=null){return choice;}
if(type==subv.type.traitorous){if((choice=ai.subvertible(card.name.smoldering_dragon,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.caverns_defender,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.frostbreath,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.zodiac_the_eternal,type))!=null){return choice;}}
if((choice=ai.subvertible(card.name.aurora_draco,type))!=null&&stats.num_played_of_elem(player.opp,card.elem.fire)>=1){return choice;}
if((choice=ai.subvertible(card.name.smoldering_dragon,type))!=null&&stats.num_played_of_elem(player.opp,card.elem.ice)>=1){return choice;}
if((choice=ai.subvertible(card.name.frostbreath,type))!=null&&stats.num_played_of_elem(player.opp,card.elem.rock)>=1){return choice;}
if((choice=ai.subvertible(card.name.caverns_defender,type))!=null&&stats.num_played_of_elem(player.opp,card.elem.sky)>=1){return choice;}
if(age.major()==1&&(choice=ai.subvertible(card.name.nikolai_the_cursed,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.traveler,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.aurora_draco,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.hell_frozen_over,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.madness_of_1000_stars,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.jace_winters_firstborn,type))!=null){return choice;}
if((choice=ai.subvertible(card.name.monk,type))!=null){return choice;}
for(let card_num of zone.get(player.you,zone.play)){if(ai.subvertible(card[card_num].name)){return card_num;}}
return null;}
ai.subvert=function(num_cards,type){if(num_cards<=0){return;}
if(stats.count(player.you,abilities.protect)>0){log.add({event:log.event.protect,person:player.you,ability:subv.to_text(type)});return;}
for(let c=0;c<num_cards;c++){switch(type){case subv.type.harmless:{let choice=null;for(let card_num of zone.get(player.you,zone.play)){if(card[card_num].subv[type]!=null){continue;}
if(!card[card_num].ai_subvertible){continue;}
if(choice==null){choice=card_num;}else if(card[card_num].power>card[choice].power){choice=card_num;}}
if(choice==null){return;}
log.add({event:log.event.subvert_harmless,person:player.opp,card_num:choice});actions.subvert(choice,subv.type.harmless);break;}
case subv.type.mindless:case subv.type.traitorous:case subv.type.cave_in:{let choice=ai.subvert_choice(type);if(choice==null){if(type==subv.type.cave_in){log.add({event:log.event.decline,person:player.opp,ability:"Subvert: Cave In"});}
return;}
if(type==subv.type.cave_in){actions.subvert(choice,subv.type.mindless);actions.subvert(choice,subv.type.harmless);}else{actions.subvert(choice,type);}
log.add({event:subv.to_event(type),person:player.opp,card_num:choice});break;}}}}
var loading={preload:function(){},setup:function(){},update:function(){},done:false,}
loading.preload=function(){loading.background=env.physics.add.graphics();loading.progressBox=env.physics.add.graphics();loading.progressBar=env.physics.add.graphics();loading.background.fillStyle(0x000000,1);loading.background.fillRect(0,0,env.window.x,env.window.y);loading.progressBox.fillStyle(0xFFFFFF,1);loading.progressBox.fillRect(env.window.x/2-160,env.window.y/2-10+150,320,50);env.physics.load.on('progress',function(value){loading.progressBar.clear();loading.progressBar.fillStyle(0x000000,1);loading.progressBar.fillRect(env.window.x/2-300/2,env.window.y/2+150,300*value,30);});loading.counter=0;}
loading.setup=function(){if(loading.done){return;}
loading.main_symbol=env.add.image({x:env.window.x/2,y:env.window.y/2-200},'main symbol');loading.main_symbol.setScale(0.33).setAlpha(0);env.to_front(loading.background);env.to_front(loading.progressBox);env.to_front(loading.progressBar);env.to_front(loading.main_symbol);}
loading.update=function(){if(!loading.done){let cur_alpha=loading.main_symbol.alpha;if(loading.counter==0){if(cur_alpha<1){loading.main_symbol.setAlpha(cur_alpha+0.05);}else{loading.counter++}}else if(loading.counter++>=40){if(cur_alpha>0){loading.background.setAlpha(cur_alpha-0.05);loading.progressBox.setAlpha(cur_alpha-0.05);loading.progressBar.setAlpha(cur_alpha-0.05);loading.main_symbol.setAlpha(cur_alpha-0.05);}else{loading.background.destroy();loading.progressBox.destroy();loading.progressBar.destroy();loading.main_symbol.destroy();loading.done=true;}}}}
var controller={setup:function(){},update:function(){},advance:function(){},hand_size0:6,top_clicked:null,bot_clicked:null,game_over:null,}
controller.setup=function(){controller.summon_used=0;controller.substitute_used=0;controller.substitute_limit=0;controller.opp_subversions=[];for(let person=0;person<player.num;person++){actions.draw(person,controller.hand_size0);}
controller.top_clicked=false;controller.bot_clicked=false;controller.game_over=false;}
controller.update=function(){if(!controller.game_over&&stats.game_over()){controller.end_of_game();return;}}
controller.advance=function(){if(age.major()<age.battle){let ability_stats=controller.ability_stats();if(controller.top_clicked&&age.minor()==age.step.substitute_out){controller.substitute_limit=0;}
if(age.minor()==age.step.subvert_cave_in&&!controller.top_clicked&&ability_stats.count>0&&ability_stats.conditions_met){for(let d=zone.count(player.you,zone.play)-1;d>=0;d--){let card_num=zone.get(player.you,zone.play,d);if(card[card_num].name!=card.name.caverns_defender){continue;}
actions.discard(player.you,card_num);break;}}
if(!controller.top_clicked&&ability_stats.conditions_met){switch(age.minor()){case age.step.play:if(controller.summon_used++<stats.count(player.you,abilities.summon)){return;}
break;case age.step.subvert_harmless:case age.step.subvert_mindless:case age.step.subvert_traitorous:case age.step.subvert_cave_in:case age.step.flash:case age.step.sacrifice:case age.step.purify:stats.decrement(player.you,ability_stats.ability,1);if(stats.count(player.you,ability_stats.ability)>0){return;}
break;case age.step.substitute_in:if(++controller.substitute_used<controller.substitute_limit){age.set_minor(age.step.substitute_out);return;}
break;}}
switch(age.minor()){case age.step.play:case age.step.flash:case age.step.haunt:case age.step.sacrifice:case age.step.purify:case age.step.buy:case age.step.substitute_in:ai.process_ability(ability_stats.ability,stats.count(player.opp,ability_stats.ability));break;case age.step.subvert_cave_in:for(let a=0;a<abilities.num_subvert();a++){ai.process_ability(abilities.first_subvert()+a,controller.opp_subversions[a]);}
break;case age.step.subvert_harmless:case age.step.subvert_mindless:case age.step.subvert_traitorous:case age.step.substitute_out:break;}
switch(age.minor()){case age.step.subvert_harmless:case age.step.subvert_mindless:case age.step.subvert_traitorous:case age.step.subvert_cave_in:case age.step.flash:case age.step.haunt:case age.step.sacrifice:case age.step.purify:case age.step.buy:for(let person=0;person<player.num;person++){stats.decrement(person,ability_stats.ability,-1);}
break;}
let any_revealed=false;switch(age.minor()){case age.step.play:case age.step.flash:case age.step.substitute_in:any_revealed=actions.reveal_played();break;}
if(age.minor()==age.step.flash&&any_revealed){age.set_minor(age.step.play);}}else{controller.end_of_turn();}
camera.reset();age.advance();stats.queue_update();button.queue_update();full_card.hide();skip_ahead=age.minor()==age.step.substitute_in&&controller.top_clicked;controller.top_clicked=false;controller.bot_clicked=false;if(age.minor()==age.step.play){log.add({event:log.event.new_age,age:age.major()});if(age.major()==age.battle){log.add({event:log.event.battle,person:stats.winner(),capture:stats.capture()});}}
if(age.major()<age.battle){let ability_stats=controller.ability_stats();if(age.minor()==age.step.play){controller.summon_used=0;controller.substitute_used=0;controller.substitute_limit=0;for(let person=0;person<player.num;person++){actions.draw(person,stats.count(person,abilities.draw));actions.discard_rand(person,stats.count(+(!person),abilities.discard));}
for(let person=0;person<player.num;person++){stats.decrement(person,abilities.protect,-1);}
ai.surge();}
switch(age.minor()){case age.step.subvert_harmless:for(let a=0;a<abilities.num_subvert();a++){let ability=abilities.first_subvert()+a;controller.opp_subversions[a]=stats.count(player.opp,ability);stats.decrement(player.opp,ability,-1);}
for(let card_num=0;card_num<card.num;card_num++){card[card_num].ai_subvertible=zone.contains(player.you,zone.play,card_num);}
break;case age.step.substitute_out:if(age.major()==age.substitute&&controller.substitute_limit==0){controller.substitute_limit=ability_stats.count;instr.num_sub=controller.substitute_limit;}
break;}
if(age.minor()==age.step.haunt){for(let person=0;person<player.num;person++){actions.haunt(+(!person),stats.count(person,abilities.haunt));}}
if(ability_stats.count>0&&stats.count(player.opp,abilities.protect)){switch(age.minor()){case age.step.subvert_harmless:log.add({event:log.event.protect,person:player.opp,ability:"Subvert: Harmless"});break;case age.step.subvert_mindless:log.add({event:log.event.protect,person:player.opp,ability:"Subvert: Mindless"});break;case age.step.subvert_traitorous:log.add({event:log.event.protect,person:player.opp,ability:"Subvert: Traitorous"});break;case age.step.subvert_cave_in:log.add({event:log.event.protect,person:player.opp,ability:"Subvert: Cave In"});break;}}
if(!ability_stats.conditions_met||skip_ahead){controller.advance();}}
if(tut.active()){if(age.major()==age.battle){tut.battle();}else if(age.minor()==age.step.play){tut.play();}else if(age.minor()==age.step.buy){tut.buy();}}}
controller.victory_loc={x:2675,y:540};controller.restart_loc={x:2675,y:850};controller.ability_stats=function(){let ability=abilities.from_age();let count=age.minor()==age.step.buy?stats.energy(player.you):stats.count(player.you,ability);let conditions_met=false;switch(age.minor()){case age.step.play:case age.step.flash:conditions_met=zone.count(player.you,zone.deck)+zone.count(player.you,zone.hand)>0;break;case age.step.subvert_harmless:case age.step.subvert_mindless:case age.step.subvert_traitorous:if(stats.count(player.opp,abilities.protect)>0){conditions_met=false;break;}
conditions_met=controller.any_opp_cards_in_play_not_subverted_with(ability);break;case age.step.subvert_cave_in:if(stats.count(player.opp,abilities.protect)>0){conditions_met=false;break;}
conditions_met=controller.any_opp_cards_in_play_not_subverted_with(abilities.subvert_harmless)||controller.any_opp_cards_in_play_not_subverted_with(abilities.subvert_mindless);break;case age.step.haunt:conditions_met=false;break;case age.step.sacrifice:conditions_met=zone.count(player.you,zone.hand)>0;break;case age.step.purify:conditions_met=false;for(let person=0;person<player.num&&!conditions_met;person++){for(let d=0;d<zone.count(person,zone.play);d++){let card_num=zone.get(person,zone.play,d);if(card.num_subv(card_num)>0){conditions_met=true;break;}}}
break;case age.step.buy:conditions_met=zone.count(player.none,zone.buy_top)>0;break;case age.step.substitute_out:conditions_met=age.major()==age.substitute&&zone.count(player.you,zone.play)>0;break;case age.step.substitute_in:conditions_met=age.major()==age.substitute&&(zone.count(player.you,zone.deck)+zone.count(player.you,zone.hand)>0)&&!controller.top_clicked;break;}
switch(age.minor()){case age.step.subvert_harmless:case age.step.subvert_mindless:case age.step.subvert_traitorous:case age.step.subvert_cave_in:case age.step.flash:case age.step.haunt:case age.step.sacrifice:case age.step.purify:case age.step.buy:case age.step.substitute_out:conditions_met=conditions_met&&count>0;break;case age.step.substitute_in:conditions_met=conditions_met&&controller.substitute_used<controller.substitute_limit;break;case age.step.play:break;}
return{ability:ability,count:count,conditions_met:conditions_met};}
controller.any_opp_cards_in_play_not_subverted_with=function(ability){for(let card_num of zone.get(player.opp,zone.play)){let type=subv.from_ability(ability);if(card[card_num].subv[type]==null){return true;}}
return false;}
controller.end_of_turn=function(){for(let person=0;person<player.num;person++){for(let d=0;d<zone.count(person,zone.play);d++){let card_num=zone.get(person,zone.play,d);let subv_card_num=card[card_num].subv[subv.type.traitorous];if(subv_card_num==null){continue;}
actions.purify(card_num,null);log.add({event:log.event.shuffle_traitorous,person:+(!person),card_num:card_num});}}
subv.reset();card.discard();ai.end_of_turn();for(let s=0;s<subv.num;s++){for(let type=0;type<subv.type.num;type++){subv[s][type].visible=false;}}
move.combine_zone(null,zone.play,zone.disc);move.combine_zone(null,zone.disc,zone.deck);zone.shuffle();move.organize(null,zone.deck,{bring_to_front:true,simultaneous:false});move.organize(null,zone.hand);for(let person=0;person<player.num;person++){actions.draw(person,controller.hand_size0-zone.count(person,zone.hand));}}
controller.end_of_game=function(){camera.to_right();controller.game_over=true;instr.game_over=true;full_card.game_over=true;controller.victory_screen=env.add.sprite(controller.victory_loc,'victory');controller.victory_screen.setFrame(stats.temples(player.you)==0?1:0);controller.restart_button=env.add.image(controller.restart_loc,'restart button');controller.restart_button.setInteractive();controller.restart_button.on('pointerdown',()=>{game.setup();});}
var button={setup:function(){},update:function(){},queue_update:function(){},}
button.setup=function(){button.top=env.add.sprite(button.position.top,"action buttons");button.top.setInteractive();button.top.on('pointerdown',()=>{button.click.top()});button.top.setFrame(button.frame.tutorial);button.bot=env.add.sprite(button.position.bot,"action buttons");button.bot.setInteractive();button.bot.on('pointerdown',()=>{button.click.bot()});button.bot.setFrame(button.frame.blank);}
button.update=function(){if(!button.perform_update||move.in_progress()||tut.block_button){return;}
button.perform_update=false;if(age.major()<age.battle){switch(age.minor()){case age.step.play:let allow_surge=age.major()==0&&stats.temples(player.you)<3&&stats.num_surges(player.you)>0;button.top.setFrame(!allow_surge?button.frame.blank:button.frame.surge);break;case age.step.subvert_cave_in:button.top.setFrame(button.frame.dont_subvert);break;case age.step.sacrifice:button.top.setFrame(button.frame.dont_sacrifice);break;case age.step.purify:button.top.setFrame(button.frame.dont_purify);break;case age.step.buy:button.top.setFrame(tut.active()?button.frame.blank:button.frame.dont_buy);break;case age.step.substitute_out:button.top.setFrame(button.frame.dont_substitute);break;default:button.top.setFrame(button.frame.blank);break;}
button.bot.setFrame(button.frame.blank);}else{button.top.setFrame(tut.active()?button.frame.blank:button.frame.next_turn);button.bot.setFrame(button.frame.discard_all);}}
button.queue_update=function(){button.perform_update=true;}
button.frame={tutorial:0,surge:1,next_turn:2,discard_all:3,dont_buy:4,dont_subvert:5,dont_sacrifice:6,dont_purify:7,dont_substitute:8,blank:9,}
button.position={top:{x:1730,y:934},bot:{x:1730,y:1026},}
button.perform_update=false;button.click={top:function(force=false){if(controller.bot_clicked||controller.top_clicked){return;}
if(button.perform_update){return;}
if(controller.game_over){return;}
if(button.top.frame.name==button.frame.tutorial){button.top.setFrame(button.frame.blank);tut.start();return;}
if(tut.active()){return;}
if(button.top.frame.name==button.frame.blank){return;}
if(!force&&move.in_progress()){return;}
switch(button.top.frame.name){case button.frame.dont_buy:log.add({event:log.event.decline_buy,person:player.you});break;case button.frame.dont_subvert:log.add({event:log.event.decline,person:player.you,ability:"Subvert: Cave In"});break;case button.frame.dont_sacrifice:log.add({event:log.event.decline,person:player.you,ability:"Sacrifice"});break;case button.frame.dont_purify:log.add({event:log.event.decline,person:player.you,ability:"Purify"});break;case button.frame.dont_substitute:log.add({event:log.event.decline,person:player.you,ability:"Substitute"});break;}
log.active=false;if(button.top.frame.name==button.frame.surge){actions.surge(player.you);button.update();return;}
controller.top_clicked=true;controller.advance();},bot:function(force=false){if(controller.bot_clicked||controller.top_clicked){return;}
if(button.perform_update){return;}
if(controller.game_over){return;}
if(tut.active()){return;}
if(button.bot.frame.name==button.frame.blank){return;}
controller.bot_clicked=true;log.add({event:log.event.shuffle_discard,person:player.you,count:-1});log.active=false;move.combine_zone(player.you,zone.hand,zone.disc);controller.advance();full_card.hide();},}
var input={setup:function(){},using_touch:function(){},}
input.setup=function(){for(let card_num=0;card_num<card.num;card_num++){card[card_num].sprite.setInteractive();card[card_num].sprite.on('pointerdown',()=>{input.select(card_num)});}}
input.last_touch=-1;input.select=function(card_num){if(move.in_progress()&&!move.fading()){return false;}
if(controller.game_over){return;}
if(touch.using()&&full_card.showing[0]!=card_num){return false;}
if(tut.forced_input!=null){if(tut.forced_input==card_num){tut.forced_input=null;}else{return false;}}
let loc=zone.find(card_num);if(loc==null){return false;}
if(age.major()<age.battle){switch(age.minor()){case age.step.play:case age.step.flash:case age.step.substitute_in:{if(loc.person!=player.you){return false;}
if(loc.place!=zone.hand&&zone.get_last(player.you,zone.deck)!=card_num){return false;}
actions.play(player.you,card_num);if(age.minor()==age.step.substitute_in){log.add({event:log.event.substitute,card_num:input.subbed_out,card_num2:card_num,hide:true})}
break;}
case age.step.subvert_harmless:case age.step.subvert_mindless:case age.step.subvert_traitorous:case age.step.subvert_cave_in:{if(loc.person!=player.opp||loc.place!=zone.play){return false;}
if(age.minor()==age.step.subvert_cave_in&&card[card_num].age_played!=age.major()){return false;}
switch(age.minor()){case age.step.subvert_harmless:if(card[card_num].subv[subv.type.harmless]!=null){return false;}
break;case age.step.subvert_mindless:if(card[card_num].subv[subv.type.mindless]!=null){return false;}
break;case age.step.subvert_traitorous:if(card[card_num].subv[subv.type.traitorous]!=null){return false;}
break;case age.step.subvert_cave_in:if(card[card_num].subv[subv.type.harmless]!=null&&card[card_num].subv[subv.type.mindless]!=null){return false;}
break;}
switch(age.minor()){case age.step.subvert_harmless:actions.subvert(card_num,subv.type.harmless);break;case age.step.subvert_mindless:actions.subvert(card_num,subv.type.mindless);break;case age.step.subvert_traitorous:actions.subvert(card_num,subv.type.traitorous);break;case age.step.subvert_cave_in:actions.subvert(card_num,subv.type.mindless);actions.subvert(card_num,subv.type.harmless);break;}
log.add({event:subv.to_event(subv.from_age(age.minor())),person:player.you,card_num:card_num});break;}
case age.step.sacrifice:{if(loc.person!=player.you||loc.place!=zone.hand){return false;}
actions.sacrifice(card_num);break;}
case age.step.purify:{if(loc.place!=zone.play||card.num_subv(card_num)==0){return false;}
actions.purify(card_num,player.you);break;}
case age.step.buy:{if(loc.person!=player.none){return false;}
if(loc.place!=zone.buy_top){return false;}
if(stats.energy(player.you)<card[card_num].cost){return false;}
if(card[card_num].name==card.name.zodiac_the_eternal){instr.jace_read=true;}
actions.buy(player.you,card_num);break;}
case age.step.substitute_out:{if(loc.person!=player.you||loc.place!=zone.play){return false;}
input.subbed_out=card_num;actions.discard(player.you,card_num);break;}}
controller.advance();}else{if(tut.active()){return false;}
if(loc.person!=player.you||loc.place!=zone.hand){return false;}
log.add({event:log.event.shuffle_discard,person:player.you,count:1,card_num:card_num});actions.discard(player.you,card_num);}
full_card.hide();return true;}
var debug={all_faceup:false,play_self:false,queue_off:true,up_energy:true,update:function(){},}
debug.setup=function(){if(debug.all_faceup){move.all_faceup=true;move.organize(player.opp,zone.hand);move.organize(player.opp,zone.deck);move.organize(player.you,zone.deck);}
if(debug.play_self){move.default_speed=10E3;move.queue_off=debug.queue_off;if(debug.up_energy){for(let card_num=0;card_num<card.ordinal.traveler;card_num++){card[card_num].abilities[abilities.energy]=math.rand(3);}}
console.log("Game "+ ++debug.game_num);}}
debug.update=function(){if(debug.play_self&&!move.in_progress()){if(!controller.game_over){if((age.first_turn()&&age.major()<age.battle)||math.rand(10)>0){for(let g=0;g<100;g++){let choice,is_forest,is_desert;do{choice=math.rand(card.num);is_forest=card[choice].elem==card.elem.forest;is_desert=card[choice].elem==card.elem.desert;}while((is_forest||is_desert)&&math.rand(10)>0);if(input.select(choice)){break;}}}else{if(Math.random()>0.5){button.click.top();}else{button.click.bot();}}
if(math.rand(100)==0){log.active=!log.active;}}else{game.setup();}}}
debug.game_num=0;var game={phaser:null,preload:function(){},setup:function(){},update:function(){},config:null,}
game.preload=function(){env.preload(this);instr.preload();loading.preload();}
game.setup=function(){age.setup();env.setup();camera.setup();log.setup();zone.setup();subv.setup();ref.setup();card.setup();move.setup();stats.setup();tut.setup();full_card.setup();instr.setup();controller.setup();button.setup();input.setup();debug.setup();loading.setup();}
game.update=function(){loading.update();if(!loading.done){return;}
camera.update();move.update();stats.update();tut.update();full_card.update();instr.update();controller.update();button.update();debug.update();}
game.config={type:Phaser.AUTO,width:env.window.x,height:env.window.y,physics:{default:'arcade'},scene:{preload:game.preload,create:game.setup,update:game.update},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,}}
game.phaser=new Phaser.Game(game.config);</script></body>