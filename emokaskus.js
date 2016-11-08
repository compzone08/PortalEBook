function showsbtext(id,index) {
var bookmarktext=document.getElementById(id);
var sbValues= new Array();
  sbValues[0] = 'Bookmark:';
  sbValues[1] = 'Add to <strong>Digg</strong>';
  sbValues[2] = 'Add to <strong>Delicious</strong>';
  sbValues[3] = 'Add to <strong>Blinklist</strong>';
  sbValues[4] = 'Add to <strong>Yahoo Web</strong>';
  sbValues[5] = 'Add to <strong>Netvouz</strong>';
  sbValues[6] = 'Add to <strong>Ma.gnolia</strong>';
  sbValues[7] = 'Add to <strong>Fark</strong>';
  sbValues[8] = 'Add to <strong>Furl</strong>';
  sbValues[9] = 'Add to <strong>Technorati</strong>';
  sbValues[10] = 'Add to <strong>Simpy</strong>';
  sbValues[11] = 'Add to <strong>Spurl</strong>';
  sbValues[12] = 'Add to <strong>Newsvine</strong>';
  sbValues[13] = 'Add to <strong>Blinkbits</strong>';
  sbValues[14] = 'Add to <strong>Smarkings</strong>';
  sbValues[15] = 'Add to <strong>Segnalo</strong>';
  sbValues[16] = 'Add to <strong>De.lirio.us</strong>';
  sbValues[17] = 'Add to <strong>Reddit</strong>';
  sbValues[18] = 'Add to <strong>Wists</strong>';
  sbValues[19] = 'Add to <strong>Google</strong>';
document.getElementById(bookmarktext.id).innerHTML = sbValues[index];
}


document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function addSmiley(dummy)
{
  var d = [], i=0, def = ['post-body','entry-content','comment-body'];

  for(i=0;i<def.length;i++)
  {
	var content = document.getElementsByClassName(def[i]);
	for(var j=0;j<content.length;j++)
		d.push(content[j]);
  }

  for(i=0;i<arguments.length;i++)
  {
	var content = document.getElementsByClassName(arguments[i]);
	for(var m=0;m<content.length;m++)
		d.push(content[m]);
  }

  for(var i=0;i<d.length;i++)
  {
     d[i].innerHTML = d[i].innerHTML.replace (/\/gakmau/ig,"<img style='border: 0; padding:0'  src='http://farm2.static.flickr.com/1427/712360170_9c2a21ab5b_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/hai/ig,"<img style='border: 0; padding:0' src='http://farm1.static.flickr.com/148/409434711_7c32198636_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/ketawa/ig,"<img style='border: 0; padding:0'  src='http://farm1.static.flickr.com/158/409434721_0a3ee7ea41_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/omg/ig,"<img style='border: 0; padding:0'  src='http://farm1.static.flickr.com/167/409428414_963eff3677_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/no/ig,"<img style='border: 0; padding:0'  src='http://farm1.static.flickr.com/166/409434720_46d32dda83_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/ingusan/ig,"<img style='border: 0; padding:0'  src='http://farm1.static.flickr.com/176/409434716_15a0125bdf_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/panas/ig,"<img style='border: 0; padding:0'  src='http://farm1.static.flickr.com/171/409428410_64dafd1e42_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/woe/ig,"<img style='border: 0; padding:0'  src='http://farm2.static.flickr.com/1199/698528140_b56f9dabac_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/berguling/ig,"<img style='border: 0; padding:0'  src='http://farm2.static.flickr.com/1173/698474628_19dedfacd5_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/XD/ig,"<img style='border: 0; padding:0'  src='http://farm2.static.flickr.com/1340/698474700_7456a5ef02_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/hehe/ig,"<img style='border: 0; padding:0'  src='http://farm2.static.flickr.com/1178/712360134_b8ebc3161b_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/hipnotis/ig,"<img style='border: 0; padding:0'  src='http://farm2.static.flickr.com/1250/712360148_2611573995_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/sweet/ig,"<img style='border: 0; padding:0'  src='http://farm2.static.flickr.com/1298/712360160_d7dfa9317b_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/bye/ig,"<img style='border: 0; padding:0'  src='http://farm4.static.flickr.com/3051/2556978145_c2ca7f9058_o.gif' height='35'/>")
     d[i].innerHTML = d[i].innerHTML.replace (/\/sedih/ig,"<img style='border: 0; padding:0'  src='http://farm4.static.flickr.com/3190/2556985183_445f43c546_o.gif' height='35'/>")


  d[i].innerHTML = d[i].innerHTML.replace (/\:thumbup/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-jRp4YwqD0xk/U7mJ-dxnYtI/AAAAAAAACPc/8UWS5AoQ6yM/s1600/jempol1.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:2thumbup/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-YNhxRaEDDW0/U7mJ_q30n6I/AAAAAAAACPk/E8wWLk8-TKs/s1600/jempol2.gif' height='40'/>") 
  d[i].innerHTML = d[i].innerHTML.replace (/\:iloveindonesia/ig,"<img style='border: 0; padding:0'  src='http://2.bp.blogspot.com/-hyxsNfLwRaE/U7mJ9s19qrI/AAAAAAAACPU/Iep0Xmum78k/s1600/i-love-indonesia.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:ilovekaskus/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-xDbvKwUWRuE/U7mKaRORE3I/AAAAAAAACRM/nC_UB_ehnKo/s1600/s_sm_ilovekaskus.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:kiss/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-Ye0FwKKfQvU/U7mJoy5hOBI/AAAAAAAACO0/r7NowTv305A/s1600/cewek.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:genit/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-exaIoUH1SvA/U7mKb7-_VDI/AAAAAAAACRU/HGao-DQ9zR0/s1600/s_sm_maho.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:marah/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-vJc7kEXrbkM/U7mKEloe-vI/AAAAAAAACP8/db2fMccUwR0/s1600/marah.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:berduka/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/--K8DFQxBGec/U7mJh3N7VkI/AAAAAAAACOU/c2cp3fP-dnM/s1600/berduka.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:najis/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-_WYbraTCeS0/U7mKKHcVI7I/AAAAAAAACQU/7kPXbNbrvPI/s1600/najis.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:malu/ig,"<img style='border: 0; padding:0'  src='http://2.bp.blogspot.com/-oo6AU4M9e4k/U7mKDb7W-PI/AAAAAAAACP0/Rxu61cVVEkE/s1600/malu.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:ngakak/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-7Djn7sdQMvk/U7mKOV1RwrI/AAAAAAAACQk/UBP19AMbXLY/s1600/ngakak.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:repost/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-k2qcAfmDJGU/U7mKeRsnbsI/AAAAAAAACRc/p2rOdpQNxqo/s1600/s_sm_repost1.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:sup2/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-E-GZfqlmOMg/U7mKs8aJFgI/AAAAAAAACSE/cwPwHV-t8AA/s1600/sundul.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:batabig/ig,"<img style='border: 0; padding:0'  src='http://2.bp.blogspot.com/-XtDi8Lj2lTI/U7mKXUch5lI/AAAAAAAACRE/w5IYxLDGQXc/s1600/s_big_batamerah.gif height='45'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:takut/ig,"<img style='border: 0; padding:0'  src='http://2.bp.blogspot.com/-B5cJC0ZuwNQ/U7mKw-dpBaI/AAAAAAAACSU/c1dRtjoHxKE/s1600/takut.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:ngacir/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-D-Evvcr23_8/U7mKNOH2g0I/AAAAAAAACQc/tvJgpfv859g/s1600/ngacir2.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:shakehand/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-WbzYf1faWLA/U7mKnIUjzkI/AAAAAAAACR0/k8V96czOiJ8/s1600/shakehand2.gif' height='40'/>") 
  d[i].innerHTML = d[i].innerHTML.replace (/\:bingung/ig,"<img style='border: 0; padding:0'  src='http://2.bp.blogspot.com/-IfjLhr8ENwU/U7mJi7Q_a5I/AAAAAAAACOc/6suS1be2KIU/s1600/bingung.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:cekpm/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-jesQB0eLofA/U7mJnTWb_2I/AAAAAAAACOs/2-do-a5TDd8/s1600/cekpm.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:capedeh/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-nVlAntaZs74/U7mJj3ApswI/AAAAAAAACOk/RYNVVbaPjt4/s1600/capede.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:hammer/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-6YdacSLFSIY/U7mJuymKmRI/AAAAAAAACPE/CX2LYUAh710/s1600/hammer.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:peluk/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-pdx5PRhnCFU/U7mKTcaIMGI/AAAAAAAACQ0/fkOn7ydEIjA/s1600/peluk.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:cendol/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-0o6Oda12V-k/U7mKzmPwghI/AAAAAAAACSc/QLrvBQHNDRI/s1600/toastcendol.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:hoax/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-Cv_U1PCe99k/U7mJwxy1i1I/AAAAAAAACPM/sA9plDTkUjQ/s1600/hoax.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:selamat/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-jlV2Fya3J7A/U7mKlOeWnNI/AAAAAAAACRs/6b59zLhCG1U/s1600/selamat.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:matabelo/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-EyqbuwW_lO4/U7mKHYPn9zI/AAAAAAAACQE/M08CUs_QhTU/s1600/matabelo1.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:mewek/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-4KTOL8qUck0/U7mKIkU8vnI/AAAAAAAACQM/uxS5RuXdrn4/s1600/mewek.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:request/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-whevX0zJ3WY/U7mKVk7Z80I/AAAAAAAACQ8/7ias4T6yXVM/s1600/request.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:sorry/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-I6Z604vUAvI/U7mKqZHVSXI/AAAAAAAACR8/ubSltw4sBWo/s1600/sorry.gif' height='45'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:salahkamar/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-AB-QYIp5Wu0/U7mKizlOIuI/AAAAAAAACRk/Anin25Sp9tI/s1600/salah_kamar.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:cool/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-_0Aav1HQryc/U7mJqA013AI/AAAAAAAACO8/_KMRQk508h0/s1600/cool2.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:sup/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-L5Kl9i4Xqwg/U7mKub_wG5I/AAAAAAAACSM/JOddoM2yQKY/s1600/sup.gif' height='45'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:kbgt/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-i8Y9m7kh9GA/U7mKCDQIFJI/AAAAAAAACPs/JBhDERaHpHE/s1600/kbgt.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:nohope/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-xB4Qa6gCZzc/U7mKP0-HbHI/AAAAAAAACQs/aaizuG1rua0/s1600/nohope.gif' height='40'/>")


d[i].innerHTML = d[i].innerHTML.replace (/\:\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\)\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/o:\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/25.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-B/ig,"<img style='border: 0; padding:0'   src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/26.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\=\;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/27.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-c/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/101.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\)\]/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\~X\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-h/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\I-\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/28.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\8-\|/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\L-\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/30.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-\&amp;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/31.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-\$/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/32.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\[-\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/33.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:O\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/34.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\8-\}/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/35.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\&lt;\:\-P/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/36.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\(\:\|/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/37.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\=P\~/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/38.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-\?/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/39.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\#\-O/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/40.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-SS/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/42.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\@-\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/43.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\^O/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/44.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-\&lt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/46.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\&lt;\)\:\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/48.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\o=\&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/73.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\o-\+/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/74.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\(\%\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/75.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\"\&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/9.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\[\-o\&lt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/63.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\$\-\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/64.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-\"/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/65.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/b-\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/16.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/b-\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/66.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\)\&gt;\-/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/67.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\\\:D\//ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/69.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\&gt;\:\//ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/70.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\;\)\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/71.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-\@/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/76.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\^\:\)\^/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/77.gif'>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-j/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/78.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\(\*\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/79.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/o-\&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/72.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\&gt;\-\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/61.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-L/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/62.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\8-x/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/59.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\*\-\:\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/58.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\~O\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/57.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\(\~\~\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/56.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\*\*\=\=/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/55.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\%\%\-/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/54.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\@\}\;\-/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/53.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\~\:\&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/52.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\/\:\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/23.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\&gt;\:\D\&lt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/6.gif' alt='>:-D<'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\&gt;:\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/19.gif'/>")       
d[i].innerHTML = d[i].innerHTML.replace (/\=\)\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='=)'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\=\(\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif' alt='=('/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\(\|\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/51.gif' />")
d[i].innerHTML = d[i].innerHTML.replace (/\:\(\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif' />")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-\*/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif' />")
d[i].innerHTML = d[i].innerHTML.replace (/\:\|/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\;;\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif' />")
d[i].innerHTML = d[i].innerHTML.replace (/\;\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt=';)'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:D/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt=':-D'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-\//ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' alt=':-C'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-T/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif'alt=':-T'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:x/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif'alt=':X'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/15.gif' alt=':>'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\#:-S/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/18.gif' alt='hash :- S'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-S/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/17.gif' alt=':-S'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:o3/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/108.gif' alt=':o3' />")
d[i].innerHTML = d[i].innerHTML.replace (/\8-\&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/105.gif'alt='8-&gt;'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-W/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/45.gif'alt=':-w'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\[-*x/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/68.gif' alt='[-X'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\s*x\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif' alt='X('/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-O/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif' alt=':-O'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\&gt;:P/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='>:P'/>") 
d[i].innerHTML = d[i].innerHTML.replace (/\=D&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/41.gif' alt='=D>'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\s=;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/27.gif' alt='=;>'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-\?\?/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/106.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\%\-\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/107.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\@\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/49.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\P/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif'/>")

    }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(function(){
	addSmiley();
});