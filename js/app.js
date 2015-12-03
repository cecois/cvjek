/* -------------------------------------------------- GLOBALS -----------------------  */

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
window.agent = "mobile";
} else {
window.agent = "desktop";
}

// window.thedomain="trainertothestarsseekingstars.org"
window.thedomain="bitmap-lbones.rhcloud.com"

// agent="mobile"

NProgress.configure({
    parent: '#main'
});

/* -------------------------------------------------- HANDLEBARS START -----------------------  */
Handlebars.registerHelper('debug', function(options) {
    
    if(verbose==true){
        console.log("debug hb:");
        console.log(this);
    }
    return new Handlebars.SafeString("check console");
});

/* -------------------------------------------------- BASEMAPS -----------------------  */
var baselayersdummified = {
    "layers": [{
            "name": "dummy",
            "active": true,
            "source": "localhost",
            "nom": "A Real Dummy",
            "thumb": "offline/dummy-thumb.png",
            "mapis": "dark",
            "definition": {
                "maxZoom": 18,
                "url": "offline/dummy-thumb.png",
                "noWrap": true
            }
        },{
            "name": "dummy",
            "active": false,
            "source": "localhost",
            "nom": "A Real Dummy",
            "thumb": "offline/dummy-thumb.png",
            "mapis": "dark",
            "definition": {
                "maxZoom": 18,
                "url": "offline/dummy-thumb.png",
                "noWrap": true
            }
        }]
}

baselayers=baselayersdummified

appBaseLayers = new BaseLayersCollection(baselayers.layers);
// ...for which we need a menu
// appBaseLayersMenuView = new BaseLayersMenuView({
//     collection: appBaseLayers
// });
// ...and an actual map
appBaseLayersView = new BaseLayersView({
    collection: appBaseLayers
});

/* -------------------------------------------------- QUERY -----------------------  */
window.appQuery = new Query();
window.appQueryView = new QueryView({
    model: appQuery
});
/* -------------------------------------------------- POSTS -----------------------  */
window.appPosts = new PostsCollection();
window.appPostsListView = new PostsListView({
    collection: appPosts
});
window.appPostsActiveView = new PostsActiveView({
    collection: appPosts
});
window.appPostsGeomView = new PostsGeomView({
    collection: appPosts
});


/* -------------------------------------------------- BASEMAP -----------------------  */
window.appBasemap = new Basemap({tileset:"mapquest"});
window.appBasemapView = new BasemapView({
    model: appBasemap
});

/* -------------------------------------------------- AUDIT -----------------------  */
window.appAudit = new Audit();
window.appAuditView = new AuditView({
    model: appAudit
});

/* -------------------------------------------------- STATE -----------------------  */
window.appState = new State({});

/* -------------------------------------------------- ACTIVITY -----------------------  */
window.appActivity = new Activity({});
window.appActivityView = new ActivityView({
    model: appActivity
});

function cwmccallback(r){
	// catch-all callback can debug if we want it to
	console.log("allback sez:");
	console.log(r);
}

// function splitLocation(str){

//     // given one of our stored/index location strings (e.g. "point:66" or "poly:6666")
//     // we bust it up, test its type, return the doctored version for pulling out of cartodb

// var sp=str.split(":");var t = sp[0];var i = sp[1];

// switch(t) {
//     case 'line':
//     var id = i*plierline
//         break;
//     case 'poly':
//     var id = i*plierpoly
//         break;
//     default:
//         var id = i
// }

// return id


// }