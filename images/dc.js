//CIG DC 0113
var _dc_scd_time = 7200;//5days 432000 500days 43200000
var _dc_pc_kg = 1;//0关 1开
var _dc_scd_host = "scd.dc.cig.com.cn";
var _dc_log_host = "dclog.dc.ctags.cn"; //dclog.cig.com.cn dclog.dc.ctags.cn
	_dc_log_host = "dclog.cig.com.cn";
var _dc_pc_host = "pc.dc.cig.com.cn"; //pc.dc.cig.com.cn pc.dc.ctags.cn
	_dc_pc_host = "pc.dc.ctags.cn";
	
var _dc_ev_host = "http://dclog.dc.ctags.cn";
var _dc_ev_gif = "/_ev.gif";
	_dc_ev_gif = "/_ev.php";
	
var _dc_script=document.getElementsByTagName("script");var _dc_aid = 0;for (i = 0; i < _dc_script.length; i++) {if(_dc_script[i].src.indexOf("dc.js") >1){var _dc_aParams = _dc_script[i].src.split('?');if(_dc_aParams[1]>0 && _dc_aParams[1] <100000){_dc_aid = _dc_aParams[1];}}}
var _dc_r=Math.round(Math.random()*9999);var _dc_scd_flag=0;var _dcv = _dcv || [];_dcv.push(['_setAccount', _dc_aid]);_dcv.push(['_setRand',_dc_r]);_dcv.push(['_trackPageview']);
var _dc_string2='';

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(u(){l 3H="0.4M";l 1G=4J;l 1E=\'1\';l 4m=P 1Z();l M=1Q.47(4m.1M()/4R);l 2L,3a,1W,1T;l 2p=[];l 3X=\'\';l 2W="/3i.4v";l 2C="4X";l 2v=1Q.47(1Q.3d()*3P),L;l Y=\'\';l 1N=1m.2j,N=1m,C="|",2u="[]";l 3c=2D(1N.3f);2i.3J=4Y;2i.3R=4I;2i.4S=\'\';2i.4T=1c(5);4Z=1c(10);g("1q:"==1N.4a){1G="1q://"+1G}A{1G="1l://"+1G}l S="";l 2B=40();l F=3O();4G=F;l 2e=1c(\'4g.2k\',\'4b.2k\',\'4g\',\'2k\',\'1F\',\'4b\',\'3l\');U(i=0;i<2e.B;i++){g(F.J(2e[i])>1){l 2N=F.4E("."+2e[i],"");F=2N.D(2N.5q(".")+1)+"."+2e[i];2S}}l 36=1;l 38=1;l o=P 1c();l m=P 1c();l 3W=P 1c();l 1e=P 1c();l 1d={};1d[\'2l\']=\'\';1d[\'2o\']=\'\';1d[\'5r\']=\'\';1d[\'2n\']=\'\';1d[\'5p.50\']=\'\';l 1u=1N.4D.D(1).1k(\'&\');U(i=0;i<1u.B;i++){l 1p=1u[i].1k(\'=\');U(1D 2X 1d){g(1p[0]==1D&&1p[1]!=\'G\'){1d[1D]=1p[1]}}1p=I}1u=I;g(!1e["2l"]||1e["2l"]==\'G\'){1e["2l"]=\'\'}g(!1e["2o"]||1e["2o"]==\'G\'){1e["2o"]=\'\'}g(!1e["2n"]||1e["2n"]==\'G\'){1e["2n"]=\'\'}o[0]="5A";m[0]="q";o[1]="4k";m[1]="5C";o[2]="4k";m[2]="2g";o[3]="2k.4c";m[3]="p";o[4]="4c";m[4]="p";o[5]="5y";m[5]="1I";o[6]="5v";m[6]="q";o[7]="4y";m[7]="p";o[8]="4y";m[8]="1F";o[9]="51";m[9]="1I";o[10]="4D";m[10]="q";o[11]="59";m[11]="q";o[12]="5g";m[12]="1I";o[13]="5i";m[13]="2g";o[14]="3p";m[14]="2g";o[15]="5f.5e";m[15]="3k";o[16]="5b";m[16]="1I";o[17]="5c";m[17]="1I";o[18]="5d";m[18]="q";o[19]="5l";m[19]="1I";o[20]="5h";m[20]="q";o[21]="5a";m[21]="q";o[22]="53";m[22]="q";o[23]="52";m[23]="q";o[24]="54";m[24]="3n";o[25]="55";m[25]="q";o[26]="58";m[26]="q";o[27]="57";m[27]="3k";o[28]="56";m[28]="q";o[29]="5j";m[29]="k";o[30]="5k";m[30]="q";o[31]="5x";m[31]="5w";o[32]="3p";m[32]="w";o[33]="5z";m[33]="3n";o[34]="5B";m[34]="q";o[35]="5u";m[35]="2g";u 5t(s){l a=F.J(s);l t=a+s.B;3X=a+\' \'+s.B+\' \'+t+\' \'+F.B;g(t==F.B){F=s}A{}}u 5n(){F=N.3j}u 3i(n){l e;V=P 1Z();e=P 1Z(V.1M()-1);e=" 2z="+e.2w()+";";1m.2Q=n+"=;3N=/;"+e+"3j="+F+";";y}u 3Z(c){g(1v(3Y)==\'u\'){y 3Y(c)}A{y 5m(c)}}u E(c){g(1v(41)==\'u\'){y 41(c)}A{y 5o(c)}}u T(n){l 1r=1m.2Q.4j(P 5s("(^| )"+n+"=([^;]*)(;|$)"));g(1r!=I){y 3Z(1r[2])}y I}u Q(n,v,t){l 1L,r;l V=P 1Z();g(t==0){V.2K(V.1M()-1);1L="2z="+V.2w()+";"}A g(t==1){1L=""}A g(t==2){V.2K(V.1M()+3R*10);1L="2z="+V.2w()+";"}A g(t==3){V.2K(V.1M()+3J);1L="2z="+V.2w()+";"}1m.2Q=n+"="+E(v)+";3N=/;"+1L+"3j="+F+";";r=T(n);g(r!=v){3i(n);y 0};y 1}u 2q(3b){l n="4H"+(P 1Z()).1M()+1Q.3d()*3P;l c=1R[n]=P 4U(1,1);c.4V=(c.4W=u(){1R[n]=I});c.49=3b;3b=I;n=I;c=I}u 4Q(n){2v=n}u 4L(n){Y=n;g(!n){38=0}}u 2O(K){l 2A=4A();l 3e=0;g(1v K=="G"||!K||K==""){K=""}A{K=2D(K);K=E(K);3c=K;2A=\'\';3e=1}g(!L){y}l 4K=\'\';l 42=0;l 1H=0,X=0,1O="",O="",3G="",3T="",2f="",1i="";l 2y="";l 1X=0;l p,1Y,1C,1o,4N,4P,t,4O;l 3g=0;S=3A();2f=3V(K);g(K){K="1l://"+K}2y=3w(S);p=S.J("/");1Y=p;g(p<0){p=S.B}t=S.J(F);g((t>-1)&&t+F.B==p){S=""}g(F==2y||F=="."+2y){S=""}g(S){1H=1;g(1Y<0){1O=S;O=""}A{1O=S.1a(0,1Y);O=S.1a(1Y,S.B)}}l 1h=\'\';l 2d=\'\';l 1t=\'\';U(l i=0;i<o.B;i++){g(1O.J("."+o[i]+".")>-1){g(O.J("&"+m[i]+"=")>-1){2d=o[i];1C=O.J("&"+m[i]+"=");1o=O.J("&",1C+1);g(1o<0){1o=O.B}1t=O.1a(1C+m[i].B+2,1o);1t=1t.1a(0,3r)}A g(O.J("?"+m[i]+"=")>-1){2d=o[i];1C=O.J("?"+m[i]+"=");1o=O.J("&",1C+1);g(1o<0){1o=O.B}1t=O.1a(1C+m[i].B+2,1o);1t=1t.1a(0,3r)}g(2d&&1t){1H=2;1h=E(2d)+\'|\'+E(1t)}}}l R=\'\';l 1A=[];U(1D 2X 1d){g(1d[1D].B>0){1A.2Y(E(1D)+\':\'+E(1d[1D]))}}g(1A.B>0){R=1A.3o(\'|\');1H=3}l 1s="",2s=0,z=P 1c(),1g="",2P=0,j=P 1c();g(!1X){1g=T("3K"+L);g(!1g){1X=1}A{j=1g.1k(C);g(T("3S"+L)&&T("2F"+L)){1s=T("2F"+L)}A{1s=""}1i=T("3L"+L);g(!1i){1i=\'\'}z=1s.1k(C);g(j.B<14){1X=1}}}g(1X==1){1g="0"+C+M+C+1H+C+1O+C+O;j=1g.1k(C);z[0]=0;z[1]=0;j[0]=0;j[1]=M;j[2]=0;j[3]=\'\';j[4]=\'\';j[5]=\'\';j[6]=\'\';j[7]=0;j[8]=0;j[9]=0;j[10]=0}g(!z[0]||1P(z[0])<1){z[0]=0;z[1]=0;j[0]=1P(j[0])+1;g(1P(j[0])>1&&1P(j[1])>1)42=M-1P(j[1])}g(1E==\'1\'){z[0]=1P(z[0])+1}j[1]=M;g(1H&&3g==0){j[2]=1H;j[3]=1O;j[4]=O;j[5]=3G;j[6]=3T;z[1]=1;g(X==0){X=2}}g(z[1]==1&&X==0){X=1}g(j[2]==\'3\'&&X!=2){R=T("2U"+L);g(!R||R==\'G\'){R=\'\'}}g(j[2]==\'2\'&&X!=2){1h=T("3M"+L);g(!1h||1h==\'G\'){1h=\'\'}}g(z[0]==1){g(j[0]==1){j[7]=M;1i=E(2f)+2u+E(2B)+2u+E(X)+2u+E(R)}j[9]=j[10];j[10]=M;g(j[2]&&X==2){j[8]=M}g(j[2]==0&&X==0){j[8]=j[7]}}g(!z[1]){z[1]=0}g(!j[0]){j[0]=1}z[2]=3e;z[3]=3c;z[4]=2f;g(!j[2]){j[2]=0}g(!j[3]){j[3]=""}g(!j[4]){j[4]=""}g(!j[5]){j[5]=""}g(!j[6]){j[6]=""}g(!j[7]||j[7]==\'G\'){j[7]=M}g(!j[8]||j[8]==\'G\'){j[8]=M}g(!j[9]||j[9]==\'G\'){j[9]=0}g(!j[10]||j[10]==\'G\'){j[10]=M}g(!j[11]||j[11]==\'G\'){g(!Y){g(4i==0){1w();y}A{Y=46()}}j[11]=Y}A{l 2R=T("45");g(2R<(M-4d)){1w();y}g(Y){j[11]=Y}}j[12]=3g;g(!R||R==\'G\'){R=""}g(!1i||1i==\'G\'){1i=""}1s=z[0]+C+z[1]+C+z[2]+C+z[3]+C+z[4];2s=Q("2F"+L,1s,1);2s=Q("3S"+L,1,3);1g=j[0]+C+j[1]+C+j[2]+C+j[3]+C+j[4]+C+j[5]+C+j[6]+C+j[7]+C+j[8]+C+j[9]+C+j[10]+C+j[11]+C+j[12];1g=1g+C+\'\'+C+\'\';2P=Q("3K"+L,1g,2);6h=Q("3L"+L,1i,2);2r=Q("2U"+L,R,2);3U=Q("3M"+L,1h,2);5E=Q("6g",j[11],2);2r=Q("6m",j[2],2);2r=Q("6l",X,2);2r=Q("6v",R,2);3U=Q("6w",1h,2);g(!2s||!2P){36=0}l H=\'\';H="?6H="+3H+"&6G="+1E+"&6M="+j[11]+"&6F="+L+"&6E="+j[0]+\'.\'+z[0]+"&6z="+j[7]+\'.\'+j[8]+\'.\'+j[9]+\'.\'+j[10]+\'.\'+M+\'.\'+2v+"&6y="+E(2f)+"&6x="+j[2]+"&6A="+X+"&6D="+1i+"&6f="+36+\'|\'+38+\'|\'+4l()+\'|\'+4B()+\'|\'+3Q()+\'|\'+48()+\'|\'+4r()+\'|\'+4x()+\'|\'+3u();H+="&3B="+2A;g(j[2]==1){H+="&6e="+j[3]+"|"+j[4]}g(1E==\'2\'){H+="&5O="+2L+"|"+3a;g(1W){H+="|"+1W}g(1T){H+="|"+1T}}A g(1E==\'3\'){l 1A=[];U(l 2T 2X 2p){1A.2Y(E(2T)+\':\'+E(2p[2T]))}H+="&5U="+1A.3o(\'|\');1G=5T;2W=5M}g(1h){H+="&5F="+1h}g(R){H+="&2U="+R}g(F){H+="&5I="+F}g(z[0]==1){l 5L=Q("5V",M,2);2q(\'1l://69.6a.3l/6b?v=1&6c=\'+j[11]);H+="&5Y="+M}l 1y=\'\';2b{l 2V=T("60");g(2V){H+="&3F="+2V}}2a(1K){1y+=\'3F:\'+1K+\';\'}2b{g(2t||2t!=\'G\'){H+="&65="+2t}}2a(1K){1y+=\'2t:\'+1K+\';\'}l 1z=\'\';1z+="3B="+2A;2b{l 1j=1m.4h(\'4e\');U(i=0;i<1j.B;i++){g(1j[i].1F==\'3z\'||1j[i].1F==\'67\'){1z+="&3C="+E(1j[i].2x);H+="&3C="+E(1j[i].2x)}g(1j[i].1F==\'3v\'||1j[i].1F==\'5N\'){1z+="&3D="+E(1j[i].2x);H+="&3D="+E(1j[i].2x)}}}2a(1K){1y+=\'3z:\'+1K+\';\'}g(1y){H+="&3x="+1y}2q(1G+2W+H);g(1y){1z+="&3x="+1y}g(1z&&5S){2q("1l://"+6i+"/6q.4v?"+1z)}6n=H;z=I;j=I;H=I;K=I}u 1w(){l 1w=1m.6k(\'4f\');1w.6C=\'5K/66\';1w.6L=63;1w.49=(\'1q:\'==1m.2j.4a?\'1q://\':\'1l://\')+61+\'/5X.5Z?t=\'+4d+\'&r=\'+2v;l 37=1m.4h(\'4f\')[0];37.68.5W(1w,37);4i=1;l 2R=Q("45",M,2)}u 5G(k,v){g(k&&v){2p[k]=v}}u 5R(2m,2h){1E=\'3\';2O()}u 5P(2m,2h,2J,2M){1E=\'2\';g(!2m){y}A{2L=E(2m)}g(!2h){y}A{3a=E(2h)}g(2J){1W=E(2J)}A{1W=""}g(2M){1T=E(2M)}A{1T=""}2O()}u 5Q(a){l 1J=\'\';l 2Z=1c();1J=T(a+L);g(!1J||1J==\'G\'){1J=\'\'}2Z=1J.1k(C);y 2Z}u 4A(){l 1B="";g(N.4z){1B=N.4z;1B=1B.1a(0,64);1B=E(1B)}y 1B}46=u(){g(Y==I||Y==\'\'){l c="6J";c="6I";c+=c;c+=c;l b="";U(l i=0;i<13;i++){b+=c.D(1Q.6j(1Q.3d()*62.0),1)}c=I;Y="6o-6t-6u-"+b;y Y}A{y Y}};u 4l(){g(6r.2j!=2G.2j)y 1;y 0}u 4B(){l 2c="";g(2G.1U){2c=1U.4C+"x"+1U.4t}A g(2G.3h){2c=3h.4q.4p.4o().4s().4C+"x"+3h.4q.4p.4o().4s().4t}y 1v(2c)!=\'G\'?2c:\'\'}u 3Q(){l 2E="";g(2G.1U){2E=1U.6p+"-6s"}y 1v(2E)!=\'G\'?2E:\'\'}u 48(){l 2H="";2H=1f.6K()?1:0;y 1v(2H)!=\'G\'?2H:\'\'}u 4r(){l 1V="";g(1f.44){1V=1f.44.4w()}A g(1f.4u){1V=1f.4u.4w()}y 1v(1V)!=\'G\'?1V:\'\'}u 4x(){l 1x=1m.5H.5J.4j(/<4e.*?6d\\s*=\\s*(([a-4n-9\\/\\-]+)|"([a-4n-9\\/\\-]+)").*?>/i);g(1x){1x=1x[2]?1x[2]:1x[3];y 1x.B>15?\'3y-8\':1x}A{y\'3y-8\'}}u 3u(){l f="";g(1f.1S&&1f.1S.B){U(l 1b=0;1b<1f.1S.B;1b++){g(1f.1S[1b].1F.J(\'43 3E\')!=-1){f=1f.1S[1b].3v.1k(\'43 3E \')[1];2S}}}A g(1R.3s){U(l 1b=10;1b>=2;1b--){2b{g(3I("P 3s(\'3q.3q."+1b+"\');")){f=1b+\'.0\';1b=I;2S}}2a(e){}}}y 1v(f)!=\'G\'?f:\'\'}u 6B(b){L=b}u 40(){l a=\'\';a=1N.3f;g(a.D(0,7)=="1l://"){a=a.D(7)}A g(a.D(0,8)=="1q://"){a=a.D(8)}y a}u 3O(){p=2B.J("/");p,d=2B.D(0,p);g(!F){p=d.J(":");g(p>=0){y d.D(0,p)}A{y d}}A{p=d.J(F);g((p>-1)&&(p+F.B==d.B)){y F}y d}}u 2D(p){g(p.B<=7){y p}l t=p;g(p.D(0,7)=="1l://"){t=p.D(7)}A g(p.D(0,8)=="1q://"){t=p.D(8)}y t}u 3V(K){g(!N.Z&&!K){y""}l W=\'\';g(N.Z){g(N.Z.D(0,7)=="1l://"){W=N.Z.D(7)}A g(N.Z.D(0,8)=="1q://"){W=N.Z.D(8)}l 1u=W.D(1).1k(\'&\');U(i=0;i<1u.B;i++){l 1p=1u[i].1k(\'=\');3W[1p[0]]=1p[1];1p=I}1u=I}l z=3m();g(K){g(K==z[3]){W=z[4]}A{W=z[3]}S=2D(1N.3f)}A{g(z[2]==1){W=z[3]}}y W}u 3m(){l 1s=T("2F"+L);l z=1c();g(1s!=I){z=1s.1k(C)}A{z[0]=\'\';z[1]=\'\';z[2]=\'\';z[3]=\'\';z[4]=\'\'}y z}u 3A(){g(!N.Z){y""}l W;g(N.Z.D(0,7)=="1l://"){W=N.Z.D(7)}A g(N.Z.D(0,8)=="1q://"){W=N.Z.D(8)}y W}u 3w(b){g(b.1a(0,7)=="1l://"){b=b.1a(7)}g(b.1a(0,8)=="1q://"){b=b.1a(8)}g(b.J("/")!="-1"){b=b.D(0,b.J("/"))}g(b.J(":")!="-1"){b=b.D(0,b.J(":"))}y b}l 4F=I;u 5D(b,e,h){o[o.B]=b;m[m.B]=e}u 39(1r){2b{l 1n="";U(l i=1,2I=1r.B;i<2I;i++){1n+="\\""+1r[i]+"\\","}g(1n!=""){1n=1n.D(0,1n.B-1)}1n=1r[0]+"("+1n+")";3I(1n);1n=I}2a(e){}}1R[2C].2Y=u(1r){39(1r)};u 3t(){U(l i=0,2I=1R[2C].B;i<2I;i++){39(1R[2C][i])}}3t()})();',62,421,'||||||||||||||||if|||col_data||var|_dc_sk||_dc_se||||||function||||return|cot_data|else|length|_dc_split|substr|_es|_dc_domain|undefined|_dc_string|null|indexOf|virtual_path|did|_dc_now|_dc_dc|_dc_vb|new|_wc|_dc_cad|_dc_r|_rc|for|date|rf|_dc_ts|uid|referrer|||||||||||substring|ii|Array|_arrAdKeys|URLParams|navigator|col|_dc_search|_dc_rff|_dc_dealer_meta|split|http|document|buf|p3|aParam|https|arr|cot|_dc_search_b|aParams|typeof|_dc_scd|char|_dcBtErr|_dc_tdk|aevar|dt|p2|_AdKey|_dct|name|_dc_host|_dc_tp|query|col2|err|exp|getTime|_dlprotocol|_dc_va|parseInt|Math|window|plugins|ev|screen|ul|eo|_dc_init|p1|Date|||||||||||catch|try|sr|_dc_search_a|_dc_arrDomain|_dc_rf|word|elv|this|location|cn|utm_campaign|ecv|utm_medium|utm_source|evar|slog|col_ad|cot_s|XCWEBLOG_ID|_dc_split2|rand|toGMTString|content|_dc_r_domain|expires|_dc_dt|_dc_url|_dc_var|get_ph|sc|dmt|self|je|len|eov|setTime|ec|evv|_dc_t|_trackPageview|col_s|cookie|col_CIGDCSCD|break|kvar|dcad|dcbitautousername|_dc_gif|in|push|col_data2|||||||_dc_cookie|_dc_scd_s|_dc_3_cookie|epush|el|url|ph|random|is_virtual_path|href|isI|java|_dc|domain|kw|net|get_cot_data|keyword|join|zhongsou|ShockwaveFlash|511|ActiveXObject|initPush|dm_fl|description|getDomain|dcbterr|utf|keywords|dm_r|dcdt|dckw|dcdp|Flash|dcbtun|_dc_vc|_dc_jsv|eval|cst|dm|dm_rff|dc_search|path|dm_domain|9999|dm_sc|ct|dmts|_dc_vd|col_search|dm_rf|rfParams|ttt|decodeURIComponent|_ues|dm_url|encodeURIComponent|_dc_bt|Shockwave|language|CIGDCSCD|dm_uid|round|dm_je|src|protocol|org|yahoo|_dc_scd_time|meta|script|com|getElementsByTagName|_dc_scd_flag|match|baidu|dm_if|_dc_date|z0|getDefaultToolkit|Toolkit|awt|dm_ul|getScreenSize|height|browserLanguage|gif|toLowerCase|dm_cs|3721|title|dm_dt|dm_sr|width|search|replace|ecol|_dc_this_domain|t_|63072E6|_dc_log_host|_dcacc|_setUid|027|p4|t1|p5|_setRand|1000|_transvar|_setvars|Image|onload|onerror|_dcv|18E5|_transvars|mc_id|sogou|youdao|etao|soku|mbalib|easou|youboy|makepolo|163|so|netscape|cnn|ask|vnet|114|aol|bing|tom|b2b|51sole|lycos|unescape|_delDomainName|escape|WT|lastIndexOf|utm_content|RegExp|_setDomainName|roboo|live|key|114chn|soso|jqw|google|258|wd|_addOrganic|col_CIGDCID|dcse|_setVar|documentElement|dcd|innerHTML|text|col_CIGDCJZMP|_dc_ev_gif|Description|dce|_trackEvent|getC|_trackVar|_dc_pc_kg|_dc_ev_host|dcev|CIGDCJZMP|insertBefore|scd|dcjzmp|php|username|_dc_scd_host||true||dcxc_id|javascript|Keywords|parentNode|cm|gtags|pixel|cig_id|charset|dcr|dcc|CIGDCID|col_rff|_dc_pc_host|floor|createElement|CIGDCTS|CIGDCTP|_dc_string2|000|colorDepth|_pc|top|bit|000000|0000000|CIGDCAD|CIGDCSE|dctp|dcrf|dcvt|dcts|_setAccount|type|dcrff|dcv|dcac|dct|JSv|0123456789001234567890abcdef|0123456789001234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ|javaEnabled|async|dcu'.split('|'),0,{}));