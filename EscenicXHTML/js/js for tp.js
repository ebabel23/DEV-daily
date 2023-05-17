var refurl = document.referrer;
var url = new URL(refurl);
  var domain = 'https://' + url.hostname;
var variolink = domain + '[%% Link %%]';
  var target = '[%% Link-Ziel %%]';


$plusLink.click((e) => {
    e.preventDefault();
    if (target == 'blank') {
      window.open(variolink + '?tpcc=[%% Tracking_Variant %%]_subscribe-banner-sticky-bottom-mobile', target);
  } else if (target == 'parent') {
      [%% Link-Ziel %%].window.location.href=variolink + '?tpcc=[%% Tracking_Variant %%]_subscribe-banner-sticky-bottom-mobile';
  } else {
      parent.window.location.href=variolink + '?tpcc=[%% Tracking_Variant %%]_modal_subscribe-banner-sticky-bottom-mobile';
  }          
});

if (condition) {
    if (target == 'blank') {
    window.open(variolink + '?tpcc=[%% Tracking_Variant %%]_subscribe-banner-sticky-bottom-mobile', target);
} else if (target == 'parent') {
    [%% Link-Ziel %%].window.location.href=variolink + '?tpcc=[%% Tracking_Variant %%]_subscribe-banner-sticky-bottom-mobile';
} else {
    parent.window.location.href=variolink + '?tpcc=[%% Tracking_Variant %%]_modal_subscribe-banner-sticky-bottom-mobile';
}  
    
} else {
    if (target == 'blank') {
        window.open(variolink + '?tpcc=[%% Tracking_Variant %%]_subscribe-banner-sticky-bottom-mobile', target);
    } else if (target == 'parent') {
        [%% Link-Ziel %%].window.location.href=variolink + '?tpcc=[%% Tracking_Variant %%]_subscribe-banner-sticky-bottom-mobile';
    } else {
        parent.window.location.href=variolink + '?tpcc=[%% Tracking_Variant %%]_modal_subscribe-banner-sticky-bottom-mobile';
    }  
}
var l = getElementById("hom")

