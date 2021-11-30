
// ==UserScript==
// @name        Reconstruct Classic Watch8 YouTube Layout Fixed
// @version 1.0.2
// @description  A revised and (almost) fixed version of the "simple script that seeks to reconstruct the classic watch7 layout on YouTube." (though it's actually watch8)
// @author syndiate
// @require https://unpkg.com/vue@2.6.12/dist/vue.js
// @require https://unpkg.com/xfetch-js@0.5.0/dist/xfetch.min.js
// @match *://*.youtube.com/*
// @match *://*.youtu.be/*
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM.getValue
// @grant GM.setValue
// @grant GM_setValue
// @grant GM_registerMenuCommand
// @grant unsafeWindow
// @run-at document-start
// @license MIT
// ==/UserScript==

//original script by daylin (aka theundeadwolf0)

function reconstruct() {
try {
// Define watch template (we inject information into this later):
let watchTemplate = [ `<div id="watch-header" class="yt-card yt-card-has-padding">
      <div id="watch7-headline" class="clearfix">
       <span class="standalone-collection-badge-renderer-text">
   <a href="https://www.youtube.com/feed/trending" class=" yt-uix-sessionlink      spf-link " id="trending-indicator" data-sessionlink="ei=e408W9SXItaT-gOTs5D4Dg">numberplaceholder on Trending for Gaming</a>
<a href="hashtagoneurlplaceholder" class=" yt-uix-sessionlink " id="hashtag-one" data-url="hashtagoneurlplaceholder" data-sessionlink="ei=cYMsXIz9F5SNkgb1grH4Cg">hashtagoneplaceholder</a>
<a href="hashtagtwourlplaceholder" class=" yt-uix-sessionlink " id="hashtag-two" data-url="hashtagtwourlplaceholder" data-sessionlink="ei=cYMsXIz9F5SNkgb1grH4Cg">hashtagtwoplaceholder</a>
<a href="hashtagthreeurlplaceholder" class=" yt-uix-sessionlink " id="hashtag-three" data-url="hashtagthreeurlplaceholder" data-sessionlink="ei=cYMsXIz9F5SNkgb1grH4Cg">hashtagthreeplaceholder</a>
</span>
    <div id="watch-headline-title">
      <h1 class="watch-title-container">

<span id="watch-privacy-icon" class="yt-uix-tooltip yt-uix-tooltip-reverse unlisted" title="This video is unlisted. Only those with the link can see it." tabindex="0">
      <span class="privacy-icon yt-sprite"></span>
    </span>

  <span id="eow-title" class="watch-title" dir="ltr" title="videotitleplaceholder">

videotitleplaceholder

</span>

      </h1>
    </div>
  </div>

    <div id="watch7-user-header" class=" spf-link ">  <a class="yt-user-photo g-hovercard yt-uix-sessionlink      spf-link " data-ytid="UC38IQsAvIsxxjztdMZQtwHA" data-sessionlink="itct=CDQQ4TkiEwjbqYnt7c_TAhWE1X4KHRV5BiEo-B0" href="channellinkiniconplaceholder">
      <span class="video-thumb  yt-thumb yt-thumb-48 g-hovercard" data-ytid="UC38IQsAvIsxxjztdMZQtwHA">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img data-ytimg="1" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-thumb="channeliconplaceholder" alt="channelnameplaceholder" id="youtube-channel-icon" width="48" height="48" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>

  </a>
  <div class="yt-user-info" id="yt-user-info-stuff">
    <a class="g-hovercard yt-uix-sessionlink       spf-link " data-ytid="UC38IQsAvIsxxjztdMZQtwHA" data-sessionlink="itct=CDQQ4TkiEwjbqYnt7c_TAhWE1X4KHRV5BiEo-B0" id="channel-name-stuff" href="channellinkplaceholder">channelnameplaceholder</a>

      <span aria-label="Verified" class="yt-channel-title-icon-verified yt-uix-tooltip yt-sprite" data-tooltip-text="Verified"></span>
  </div>
<span id="watch7-subscription-container"><span class=" yt-uix-button-subscription-container"><span class="unsubscribe-confirmation-overlay-container">
  <div class="yt-uix-overlay " data-overlay-style="primary" data-overlay-shape="tiny">

        <div class="yt-dialog hid ">
    <div class="yt-dialog-base">
      <span class="yt-dialog-align"></span>
      <div class="yt-dialog-fg" role="dialog">
        <div class="yt-dialog-fg-content">
          <div class="yt-dialog-loading">
              <div class="yt-dialog-waiting-content">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

          </div>
          <div class="yt-dialog-content">
              <div class="unsubscribe-confirmation-overlay-content-container">
    <div class="unsubscribe-confirmation-overlay-content">
      <div class="unsubscribe-confirmation-message">
        Unsubscribe from RickAstleyVEVO?
      </div>
    </div>

    <div class="yt-uix-overlay-actions">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-overlay-close" type="button" onclick=";return false;"><span class="yt-uix-button-content">Cancel</span></button>
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary overlay-confirmation-unsubscribe-button yt-uix-overlay-close" type="button" onclick=";return false;"><span class="yt-uix-button-content">Unsubscribe</span></button>
    </div>
  </div>

          </div>
          <div class="yt-dialog-working">
              <div class="yt-dialog-working-overlay"></div>
  <div class="yt-dialog-working-bubble">
    <div class="yt-dialog-waiting-content">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
        Working...
    </span>
  </p>

      </div>
  </div>

          </div>
        </div>
        <div class="yt-dialog-focus-trap" tabindex="0"></div>
      </div>
    </div>
  </div>


  </div>

</span><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-subscribe-branded yt-uix-button-has-icon no-icon-markup yt-uix-subscription-button yt-can-buffer" type="button" onclick=";return false;" aria-busy="false" aria-live="polite" data-subscribed-timestamp="0" data-show-unsub-confirm-dialog="true" data-clicktracking="itct=CDUQmysiEwjbqYnt7c_TAhWE1X4KHRV5BiEo-B0yBXdhdGNo" data-href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;hl=en&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Fcontinue_action%3DQUFFLUhqbTA2MXc1eFBLdTE2Z1dSTWROMzJOQW5wQXB2Z3xBQ3Jtc0ttWEdOOEx0QWc0QkZPcjQ4SzRRNVRkMjBKNXo3OXBaNnVkY0YtZUR1SlI0U1BuaFZQQXdmdVN4ZmRuV3BqTHhEUTR6bzdNalF3bDNYRlZxOU9kdHVicTkzb2hELXZrTUVPVGhYd1FKYzFwVkpxWWU3ZzRTOFl3MWVQVENELXdQOUxGX2w4aHA0U3JpcjB2RmwyUDRON3BaempkUTN6Y05feGZ6ZS1IbGtUXzc2Y1NUdi1NS3FSTE51SERaNFBpTlRnaDF4N0dZUXRvaThYc1pCcnAxenRHd19UUXN3%26feature%3Dsubscribe%26app%3Ddesktop%26next%3D%252Fchannel%252FUC38IQsAvIsxxjztdMZQtwHA%26hl%3Den%26action_handle_signin%3Dtrue" data-channel-external-id="UC38IQsAvIsxxjztdMZQtwHA" data-show-unsub-confirm-time-frame="always" data-style-type="branded"><span class="yt-uix-button-content"><span class="subscribe-label" aria-label="Subscribe">Subscribe</span><span class="subscribed-label" aria-label="Unsubscribe">Subscribed</span><span class="unsubscribe-label" aria-label="Unsubscribe">Unsubscribe</span></span></button><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon yt-uix-subscription-preferences-button" type="button" onclick=";return false;" aria-role="button" aria-busy="false" aria-label="Subscription preferences" aria-live="polite" data-channel-external-id="UC38IQsAvIsxxjztdMZQtwHA"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-subscription-preferences yt-sprite"></span></span></button><span class="yt-subscription-button-subscriber-count-branded-horizontal yt-subscriber-count" id="subscriber-watch-count" tabindex="0" title="subscribecountplaceholder" aria-label="subscribecountplaceholder">subscribecountplaceholder</span><span class="yt-subscription-button-subscriber-count-branded-horizontal yt-short-subscriber-count" tabindex="0" title="subscribecountplaceholder" aria-label="subscribecountplaceholder">subscribecountplaceholder</span>  <span class="subscription-preferences-overlay-container">

  <div class="yt-uix-overlay " data-overlay-style="primary" data-overlay-shape="tiny">

        <div class="yt-dialog hid ">
    <div class="yt-dialog-base">
      <span class="yt-dialog-align"></span>
      <div class="yt-dialog-fg" role="dialog">
        <div class="yt-dialog-fg-content">
          <div class="yt-dialog-loading">
              <div class="yt-dialog-waiting-content">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

          </div>
          <div class="yt-dialog-content">
              <div class="subscription-preferences-overlay-content-container">
    <div class="subscription-preferences-overlay-loading ">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

    </div>
    <div class="subscription-preferences-overlay-content">
    </div>
  </div>

          </div>
          <div class="yt-dialog-working">
              <div class="yt-dialog-working-overlay"></div>
  <div class="yt-dialog-working-bubble">
    <div class="yt-dialog-waiting-content">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
        Working...
    </span>
  </p>

      </div>
  </div>

          </div>
        </div>
        <div class="yt-dialog-focus-trap" tabindex="0"></div>
      </div>
    </div>
  </div>


  </div>

  </span>
</span></span></div>
    <div id="watch8-action-buttons" class="watch-action-buttons clearfix"><div id="watch8-secondary-actions" class="watch-secondary-actions yt-uix-button-group" data-button-toggle-group="optional">    <span class="yt-uix-clickcard">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup yt-uix-clickcard-target addto-button pause-resume-autoplay yt-uix-tooltip" type="button" onclick=";return false;" title="Add to" data-position="bottomleft" data-orientation="vertical"><span class="yt-uix-button-content">Add to</span></button>
        <div class="signin-clickcard yt-uix-clickcard-content">
    <h3 class="signin-clickcard-header">Want to watch this again later?</h3>
    <div class="signin-clickcard-message">
      Sign in to add this video to a playlist.
    </div>
    <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;hl=en&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26app%3Ddesktop%26hl%3Den%26next%3D%252Fwatch%253Fv%253DdQw4w9WgXcQ" class="yt-uix-button  signin-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=CsYHWdv8MISr-wOV8pmIAg"><span class="yt-uix-button-content">Sign in</span></a>
  </div>

    </span>
  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup pause-resume-autoplay action-panel-trigger action-panel-trigger-share   yt-uix-tooltip" type="button" onclick=";return false;" title="Share
" data-trigger-for="action-panel-share" data-button-toggle="true"><span class="yt-uix-button-content">Share
</span></button>
<div class="yt-uix-menu ">  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup pause-resume-autoplay yt-uix-menu-trigger yt-uix-tooltip" type="button" onclick=";return false;" role="button" aria-pressed="false" aria-label="Action menu." title="More actions" id="action-panel-overflow-button" aria-haspopup="true"><span class="yt-uix-button-content">More</span></button>
<div class="yt-uix-menu-content yt-ui-menu-content yt-uix-menu-content-hidden" role="menu"><ul id="action-panel-overflow-menu">  <li>
      <span class="yt-uix-clickcard" data-card-class="report-card">
          <button type="button" class="yt-ui-menu-item has-icon action-panel-trigger action-panel-trigger-report report-button yt-uix-clickcard-target" data-position="topright" data-orientation="horizontal">
    <span class="yt-ui-menu-item-label">Report</span>
  </button>

          <div class="signin-clickcard yt-uix-clickcard-content">
    <h3 class="signin-clickcard-header">Need to report the video?</h3>
    <div class="signin-clickcard-message">
      Sign in to report inappropriate content.
    </div>
    <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;hl=en&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26app%3Ddesktop%26hl%3Den%26next%3D%252Fwatch%253Fv%253DdQw4w9WgXcQ" class="yt-uix-button  signin-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=CsYHWdv8MISr-wOV8pmIAg"><span class="yt-uix-button-content">Sign in</span></a>
  </div>

      </span>
  </li>
  <li>
        <button type="button" class="yt-ui-menu-item has-icon yt-uix-menu-close-on-select action-panel-trigger action-panel-trigger-stats" data-trigger-for="action-panel-stats">
    <span class="yt-ui-menu-item-label">Statistics</span>
  </button>

  </li>
  <a href="https://www.youtube.com/timedtext_video?bl=watch&amp;v=dQw4w9WgXcQ&amp;ref=wt&amp;auto=yes" class="yt-ui-menu-item has-icon action-panel-trigger-translate" rel="nofollow">
    <span class="yt-ui-menu-item-label">Add translations</span>
  </a>
</ul></div></div></div><div id="watch8-sentiment-actions"><div id="watch7-views-info"><div class="watch-view-count">viewcountplaceholder</div>
  <div class="video-extras-sparkbars">
    <div class="video-extras-sparkbar-likes" style="width: 0%"></div>
    <div class="video-extras-sparkbar-dislikes" style="width: 100%"></div>
  </div>
</div>




  <span class="like-button-renderer " data-button-toggle-group="optional">
    <span class="yt-uix-clickcard">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup like-button-renderer-like-button like-button-renderer-like-button-unclicked yt-uix-clickcard-target   yt-uix-tooltip" type="button" onclick=";return false;" aria-label="like this video along with 1,924,213 other people" title="I like this" data-position="bottomright" data-force-position="true" data-orientation="vertical"><span class="yt-uix-button-content" id="like-count">likecountplaceholder</span></button>
          <div class="signin-clickcard yt-uix-clickcard-content">
    <h3 class="signin-clickcard-header">Like this video?</h3>
    <div class="signin-clickcard-message">
      Sign in to make your opinion count.
    </div>
    <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;hl=en&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26app%3Ddesktop%26hl%3Den%26next%3D%252Fwatch%253Fv%253DdQw4w9WgXcQ" class="yt-uix-button  signin-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=CsYHWdv8MISr-wOV8pmIAg"><span class="yt-uix-button-content">Sign in</span></a>
  </div>

    </span>
    <span class="yt-uix-clickcard">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup like-button-renderer-like-button like-button-renderer-like-button-clicked yt-uix-button-toggled  hid yt-uix-tooltip" type="button" onclick=";return false;" aria-label="like this video along with 1,924,213 other people" title="Unlike" data-position="bottomright" data-force-position="true" data-orientation="vertical"><span class="yt-uix-button-content">1,924,214</span></button>
    </span>
    <span class="yt-uix-clickcard">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup like-button-renderer-dislike-button like-button-renderer-dislike-button-unclicked yt-uix-clickcard-target   yt-uix-tooltip" type="button" onclick=";return false;" aria-label="dislike this video along with 92,738 other people" title="I dislike this" data-position="bottomright" data-force-position="true" data-orientation="vertical"><span class="yt-uix-button-content" id="dislike-count">dislikecountplaceholder</span></button>
          <div class="signin-clickcard yt-uix-clickcard-content">
    <h3 class="signin-clickcard-header">Don't like this video?</h3>
    <div class="signin-clickcard-message">
      Sign in to make your opinion count.
    </div>
    <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;hl=en&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3D__FEATURE__%26app%3Ddesktop%26hl%3Den%26next%3D%252Fwatch%253Fv%253DdQw4w9WgXcQ" class="yt-uix-button  signin-button yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=CsYHWdv8MISr-wOV8pmIAg"><span class="yt-uix-button-content">Sign in</span></a>
  </div>

    </span>
    <span class="yt-uix-clickcard">
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup like-button-renderer-dislike-button like-button-renderer-dislike-button-clicked yt-uix-button-toggled  hid yt-uix-tooltip" type="button" onclick=";return false;" aria-label="dislike this video along with 92,738 other people" title="I dislike this" data-position="bottomright" data-force-position="true" data-orientation="vertical"><span class="yt-uix-button-content">92,739</span></button>
    </span>
  </span>
</div></div>
  </div>`, /* --------DESCRIPTION BOX------- */
 `<div id="action-panel-details" class="action-panel-content yt-uix-expander yt-card yt-card-has-padding yt-uix-expander-collapsed"><div id="watch-description" class="yt-uix-button-panel"><div id="watch-description-content"><div id="watch-description-clip"><div id="watch-uploader-info"><strong class="watch-time-text">uploadtype uploaddateplaceholder</strong></div><div id="watch-description-text" class=""><p id="eow-description" class="">descriptionplaceholder</p></div>  <div id="watch-description-extras">
    <ul class="watch-extras-section">
            <li class="watch-meta-item yt-uix-expander-body">
    <h4 class="title">
      Category
    </h4>
    <ul class="content watch-info-tag-list">
        <li><a class="g-hovercard yt-uix-sessionlink      spf-link " data-ytid="UC-9-kyTW8ZkZNDHQJ6FgpwQ" data-sessionlink="ei=CsYHWdv8MISr-wOV8pmIAg" href="categorylinkplaceholder">categorynameplaceholder</a></li>
    </ul>
  </li>

            <li class="watch-meta-item yt-uix-expander-body">
    <h4 class="title">
      License
    </h4>
    <ul class="content watch-info-tag-list">
        <li>licenseplaceholder</li>
    </ul>
  </li>

    </ul>
  </div>
</div></div></div>  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-collapsed-body yt-uix-gen204" type="button" onclick=";return false;" data-gen204="feature=watch-show-more-metadata"><span class="yt-uix-button-content">Show more</span></button>
  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-body" type="button" onclick=";return false;"><span class="yt-uix-button-content">Show less</span></button>
</div>`];

//Inject template

function injectTemplate() {
    document.getElementById("clarify-box").outerHTML = document.getElementById("clarify-box").outerHTML + watchTemplate[0];
    document.getElementById("watch-header").outerHTML = document.getElementById("watch-header").outerHTML + watchTemplate[1];
    injectInfo();
}

var checkExist = setInterval(function() {
   if (document.getElementById('owner-sub-count')) {
      clearInterval(checkExist);
      injectTemplate();
   }
}, 400);

function injectInfo() {
    // For some reason, this doesn't work correctly if only ran once, hence the loop.
    var i;
    for (i = 0; i < 1; i++) {
        document.getElementById("watch-header").innerHTML = document.getElementById("watch-header").innerHTML.replace("viewcountplaceholder", document.getElementsByClassName("view-count style-scope ytd-video-view-count-renderer")[0].innerHTML); // viewcount
        document.getElementById("watch-header").innerHTML = document.getElementById("watch-header").innerHTML.replace("videotitleplaceholder", document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].innerText  ); // video name
        document.getElementById("eow-title").innerHTML = document.getElementById("eow-title").innerHTML.replace("videotitleplaceholder", document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].innerText); //title fix
        document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploaddateplaceholder", document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML); //publication date
        if (window.location.href.search("youtube.com/watch?") != "-1") {
        document.getElementById("channel-name-stuff").innerHTML = document.getElementById("channel-name-stuff").innerHTML.replace("channelnameplaceholder", document.getElementsByClassName("style-scope ytd-video-owner-renderer")[2].children[0].children[0].children[0].children[0].children[0].innerHTML); //channel name
        }
        document.getElementById("subscriber-watch-count").innerHTML = document.getElementById("subscriber-watch-count").innerHTML.replace("subscribecountplaceholder", document.getElementById("owner-sub-count").innerHTML.replace(" subscribers", "")); //subscriber count
        document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("descriptionplaceholder", document.getElementsByClassName("content style-scope ytd-video-secondary-info-renderer")[0].innerHTML); //description
        document.getElementById("eow-description").innerHTML = document.getElementById("eow-description").innerHTML.replace(new RegExp('\r?\n','g'), '<br />'); //description fix
                    if (document.getElementById("menu-container").children[0].children[0].children[0].children[0].children[0].children[1].ariaLabel == undefined) {
            document.getElementById("like-count").innerHTML = document.getElementById("like-count").innerHTML.replace("likecountplaceholder", "");
            document.getElementById("dislike-count").innerHTML = document.getElementById("dislike-count").innerHTML.replace("dislikecountplaceholder", "");
        } else {
        document.getElementById("like-count").innerHTML = document.getElementById("like-count").innerHTML.replace("likecountplaceholder", document.getElementById("menu-container").children[0].children[0].children[0].children[0].children[0].children[1].ariaLabel.replace(" likes", "")); //like count
        document.getElementById("dislike-count").innerHTML = document.getElementById("dislike-count").innerHTML.replace("dislikecountplaceholder", document.getElementById("menu-container").children[0].children[0].children[0].children[1].children[0].children[1].ariaLabel.replace(" dislikes", "")); //dislike count
        }
                    // minor i18n fixes
        document.getElementById("subscriber-watch-count").innerHTML = document.getElementById("subscriber-watch-count").innerHTML.replace("1 subscriber", "1"); // subscriber count
        document.getElementById("subscriber-watch-count").innerHTML = document.getElementById("subscriber-watch-count").innerHTML.replace("No subscribers", "0");
        document.getElementById("like-count").innerHTML = document.getElementById("like-count").innerHTML.replace("1 like", "1");
        document.getElementById("like-count").innerHTML = document.getElementById("like-count").innerHTML.replace("No", "0");
        document.getElementById("dislike-count").innerHTML = document.getElementById("dislike-count").innerHTML.replace("1 dislike", "1");
        document.getElementById("dislike-count").innerHTML = document.getElementById("dislike-count").innerHTML.replace("No", "0");
        var uploadType;
        // description box

        if (document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.search("Premiered ") != "-1") {
            if (document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.search(" hours ago") != "-1") {
                uploadType = "7";
            } else if (document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.search(" minutes ago") != "-1") {
                uploadType = "7";
            } else {
            uploadType = "2";
            }
        } else if (document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.search("Started streaming") != "-1") {
            if (document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.search("minutes ago") != "-1") {
            uploadType = "6";
            } else if (document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.search("hours ago") != "-1") {
            uploadType = "6";
            } else {
                uploadType = "3";
            }
        } else if (document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.search("Streamed live on") != "-1") {
            uploadType = "4";
        } else if (document.getElementById("info-contents").children[0].children[0].children[4].children[0] != undefined) {
            uploadType = "5";
        } else if (document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.search("Scheduled for") != "-1") {
            uploadType = "8";
        } else {
            uploadType = "0";
        }
        if (uploadType == "2") {
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploadtype", "Premiered on "); // upload type
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploaddateplaceholder", document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.replace("Premiered ", ""));
        }
        if (uploadType == "0") {
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploaddateplaceholder", document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML); // upload date
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploadtype", "Published on "); // upload type
        }
        if (uploadType == "3") {
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploaddateplaceholder", document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.replace("Started streaming ", "")); // upload date
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploadtype", "Started streaming on "); // upload type
    }
        if (uploadType == "4") {
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploaddateplaceholder", document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.replace("Streamed live on ", "")); // upload date
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploadtype", "Streamed live on "); // upload type
        }
        if (uploadType == "5") {
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploaddateplaceholder", document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML); // upload date
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploadtype", "Uploaded on "); // upload type
        }
        if (uploadType == "6") {
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploaddateplaceholder", document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.replace("Started streaming ", "")); // upload date
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploadtype", "Started streaming "); // upload type
        }
        if (uploadType == "7") {
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploaddateplaceholder", document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.replace("Premiered ", "")); // upload date
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploadtype", "Premiered "); // upload type
        }
        if (uploadType == "8") {
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploaddateplaceholder", document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.replace("Scheduled for ", "")); // upload date
            document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploadtype", "Scheduled for "); // upload type
        }

        if (document.getElementsByClassName("watch-time-text")[0].innerHTML.search("Uploaded on  Streamed live") != "-1") {
            document.getElementsByClassName("watch-time-text")[0].innerHTML = document.getElementsByClassName("watch-time-text")[0].innerHTML.replace("Uploaded on  Streamed live", "Streamed live  ");
        }

        if (document.getElementsByClassName("watch-time-text")[0].innerHTML.search("Uploaded on  Started streaming") != "-1") {
            document.getElementsByClassName("watch-time-text")[0].innerHTML = document.getElementsByClassName("watch-time-text")[0].innerHTML.replace("Uploaded on  Started streaming", "Started streaming  ");
        }

        if (document.getElementsByClassName("watch-time-text")[0].innerHTML.search("Uploaded on  Streamed live on") != "-1") {
            document.getElementsByClassName("watch-time-text")[0].innerHTML = document.getElementsByClassName("watch-time-text")[0].innerHTML.replace("Uploaded on  Streamed live on", "Streamed live on  ");
        }




}

if (document.getElementById("subscriber-watch-count").innerHTML == "<!--css-build:shady-->") {
    document.getElementById("subscriber-watch-count").remove();
    document.getElementsByClassName("yt-subscription-button-subscriber-count-branded-horizontal yt-short-subscriber-count")[0].remove();
}

    //var corejs = document.createElement("script");
    //corejs.src = "https://s.ytimg.com/yts/jsbin/www-core-vflsvjhLF/www-core.js";
    //document.getElementById("watch-header").appendChild(corejs);

            var trending;
        // trending indicator
        if (document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].innerHTML.search("ON TRENDING") != "-1") {
            trending = "1";
        } else {
            trending = "0";
        }
        if (trending == "1") {
            document.getElementById("trending-indicator").innerHTML = document.getElementById("trending-indicator").innerHTML.replace("numberplaceholder", document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].children[0].innerHTML.replace(" ON TRENDING", "")); //trending thingy
            document.getElementById("trending-indicator").innerHTML = document.getElementById("trending-indicator").innerHTML.replace(" for Gaming", ""); //gaming removal
            document.getElementById("hashtag-one").remove(); //remove the first hashtag, since trending overrides hashtags showing
            document.getElementById("hashtag-two").remove(); //remove second hashtag
            document.getElementById("hashtag-three").remove(); //remove third hashtag

                if (document.getElementById("trending-indicator").innerHTML.search("FOR GAMING") != "-1") {
               document.getElementById("trending-indicator").innerHTML = document.getElementById("trending-indicator").innerHTML.replace(" FOR GAMING", "");
               document.getElementById("trending-indicator").innerHTML += " for Gaming";
               document.getElementById("trending-indicator").setAttribute("href", "https://www.youtube.com/gaming");
    }
        }
        if (trending == "0") {
            document.getElementById("trending-indicator").remove();
                        // this adds or removes hashtags depending on whether they exist or not
            if (document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].innerHTML.search("/hashtag/") == "-1") {
            document.getElementById("hashtag-one").remove(); //remove first hashtag
            document.getElementById("hashtag-two").remove(); //remove second hashtag
            document.getElementById("hashtag-three").remove(); //remove third hashtag
            } else {
                document.getElementById("hashtag-one").innerHTML = document.getElementById("hashtag-one").innerHTML.replace("hashtagoneplaceholder", document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].children[0].innerHTML);
                document.getElementById("hashtag-one").setAttribute("href", document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].children[0].getAttribute("href"));

                if (document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].children[2] == undefined) {
                   document.getElementById("hashtag-two").remove();
                } else {
                    document.getElementById("hashtag-two").innerHTML = document.getElementById("hashtag-two").innerHTML.replace("hashtagtwoplaceholder", document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].children[2].innerHTML);
                    document.getElementById("hashtag-two").setAttribute("href", document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].children[2].getAttribute("href"));
                }

                if (document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].children[4] == undefined) {
                    document.getElementById("hashtag-three").remove();
                } else {
                    document.getElementById("hashtag-three").innerHTML = document.getElementById("hashtag-three").innerHTML.replace("hashtagthreeplaceholder", document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].children[4].innerHTML);
                    document.getElementById("hashtag-three").setAttribute("href", document.getElementsByClassName("super-title style-scope ytd-video-primary-info-renderer")[0].children[4].getAttribute("href"));
                }
            }
        }




    // Remove verification icon if the channel isn't verified
    if (document.getElementsByClassName("style-scope ytd-video-owner-renderer")[3].children[1].getAttribute("hidden") == "") {
        document.getElementsByClassName("yt-user-info")[0].children[1].outerHTML = "";
    }
    // Calculate likebar ratio
    if (document.getElementById("menu-container").children[0].children[0].children[0].children[0].children[0].children[1].ariaLabel == undefined) {
        document.getElementsByClassName("video-extras-sparkbars")[0].remove();
    } else {
        document.getElementsByClassName("video-extras-sparkbar-likes")[0].setAttribute("style", document.getElementById("like-bar").getAttribute("style"));
    document.getElementsByClassName("video-extras-sparkbar-dislikes")[0].setAttribute("style", ("width: " + (100 - document.getElementById("like-bar").getAttribute("style").replace("width: ", "").replace("%;", "")) + "%;"));
    }
    // For some reason, the channel icon fails to load unless it is first loaded on the new layout; wait for that
    var ceci = setInterval(function() {
        if (document.querySelector("ytd-video-owner-renderer.ytd-video-secondary-info-renderer > a:nth-child(1) > yt-img-shadow:nth-child(1) > img:nth-child(1)").src) {
            clearInterval(ceci);
            loadChannelIcon();
        }
    }, 100);

    var ceci2 = setInterval(function() {
        if (document.getElementsByClassName("style-scope ytd-video-owner-renderer")[2].children[0].children[0].children[0].children[0].children[0].getAttribute("href")) {
            clearInterval(ceci2);
            loadChannelLinkOnName();
        }
    }, 100);

    function doNothing() {}




            function getLikeButtonStatus() {
       if (document.getElementById("menu-container").children[0].children[0].children[0].children[0].getAttribute("class").search("style-default-active") == -1) {
           document.getElementsByClassName("like-button-renderer-like-button")[0].setAttribute("class", (document.getElementsByClassName("like-button-renderer-like-button")[0].getAttribute("class").replace("yt-uix-button-toggled", "")))
       } else {
           document.getElementsByClassName("like-button-renderer-like-button")[0].setAttribute("class", (document.getElementsByClassName("like-button-renderer-like-button")[0].getAttribute("class") + " yt-uix-button-toggled"))
       }
       if (document.getElementById("menu-container").children[0].children[0].children[0].children[1].getAttribute("class").search("style-default-active") == -1) {
            document.getElementsByClassName("like-button-renderer-dislike-button")[0].setAttribute("class", (document.getElementsByClassName("like-button-renderer-dislike-button")[0].getAttribute("class").replace("yt-uix-button-toggled", "")))
       } else {
            document.getElementsByClassName("like-button-renderer-dislike-button")[0].setAttribute("class", (document.getElementsByClassName("like-button-renderer-dislike-button")[0].getAttribute("class") + " yt-uix-button-toggled"))
       }
    }

    function loadChannelIcon() {
		console.log("Called loadChannelIcon()");
        document.getElementById("youtube-channel-icon").setAttribute("src", document.querySelector("ytd-video-owner-renderer.ytd-video-secondary-info-renderer > a:nth-child(1) > yt-img-shadow:nth-child(1) > img:nth-child(1)").src);
        document.getElementsByClassName("yt-user-photo g-hovercard yt-uix-sessionlink      spf-link ")[0].setAttribute("href", document.querySelector("ytd-video-owner-renderer.ytd-video-secondary-info-renderer > a:nth-child(1)").href);
    }
    function loadChannelLinkOnName() {
        document.getElementById("channel-name-stuff").setAttribute("href", document.getElementsByClassName("style-scope ytd-video-owner-renderer")[2].children[0].children[0].children[0].children[0].children[0].getAttribute("href"));
    }

    // Get subscribe status
    function getButtonStatus() {
        // subscribe button
        if (document.getElementsByClassName("style-scope ytd-subscribe-button-renderer")[0].getAttribute("subscribed") == "") {
            document.getElementsByClassName("yt-uix-button-subscription-container")[0].children[1].setAttribute("class", document.getElementsByClassName("yt-uix-button-subscription-container")[0].children[1].getAttribute("class").replace("yt-uix-button-subscribe-branded", "yt-uix-button-subscribed-branded"));
        }
        if (document.getElementsByClassName("style-scope ytd-subscribe-button-renderer")[0].children[0].innerText.toLowerCase() == "subscribe") {
            document.getElementsByClassName("yt-uix-button-subscription-container")[0].children[1].setAttribute("class", document.getElementsByClassName("yt-uix-button-subscription-container")[0].children[1].getAttribute("class").replace("yt-uix-button-subscribed-branded", "yt-uix-button-subscribe-branded"));
       }
       // like buttons
       getLikeButtonStatus();
    }
        getButtonStatus();
    window.setInterval(function() {
        getButtonStatus();
     }, 5);

    function getLikeButtonCountAfterButtonClick() {
        if (document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.search("Started streaming") == "-1") {
        document.getElementById("like-count").innerHTML = document.getElementById("menu-container").children[0].children[0].children[0].children[0].children[0].children[1].ariaLabel.replace(" likes", "");
        document.getElementById("like-count").innerHTML = document.getElementById("like-count").innerHTML.replace("1 like", "1");
        } else {
        document.getElementById("like-count").innerHTML = document.getElementById("menu-container").children[0].children[0].children[0].children[0].children[0].children[1].innerHTML;
        }
    }

    function getDislikeButtonCountAfterButtonClick() {
        if (document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML.search("Started streaming") == "-1") {
        document.getElementById("dislike-count").innerHTML = document.getElementById("menu-container").children[0].children[0].children[0].children[1].children[0].children[1].ariaLabel.replace(" dislikes", "");
        document.getElementById("dislike-count").innerHTML = document.getElementById("dislike-count").innerHTML.replace("1 dislike", "1");
        } else {
            document.getElementById("dislike-count").inenrHTML = document.getElementById("menu-container").children[0].children[0].children[0].children[1].children[0].children[1].innerHTML;
        }
        }

    // Working buttons
    document.getElementsByClassName("yt-uix-subscription-button")[0].onclick = function() {
        document.getElementsByClassName("yt-uix-subscription-button")[0].blur();
        document.getElementsByClassName("ytd-subscribe-button-renderer")[0].click();
    }
    document.getElementsByClassName("like-button-renderer-like-button")[0].onclick = function() {
        document.getElementsByClassName("like-button-renderer-like-button")[0].blur();
        document.getElementById("menu-container").children[0].children[0].children[0].children[0].click();
        getLikeButtonStatus();
        getLikeButtonCountAfterButtonClick();
    }
    document.getElementsByClassName("like-button-renderer-dislike-button")[0].onclick = function() {
        document.getElementsByClassName("like-button-renderer-dislike-button")[0].blur();
        document.getElementById("menu-container").children[0].children[0].children[0].children[1].click();
        getLikeButtonStatus();
        getDislikeButtonCountAfterButtonClick();
    }

	document.getElementsByClassName("addto-button")[0].onclick = function() {
        document.getElementsByClassName("addto-button")[0].blur();
        for (var k = 0; k < document.getElementById("menu-container").querySelector("div#top-level-buttons-computed.top-level-buttons").children.length; k++) {

if (document.getElementById("menu-container").children[0].children[0].children[0].children[k].innerText == "Save") {

document.getElementById("menu-container").children[0].children[0].children[0].children[k].click();

break;

}

        }

	}
    document.getElementsByClassName("action-panel-trigger-share")[0].onclick = function() {
        if (document.getElementsByClassName("action-panel-trigger-share")[0].getAttribute("class").search("yt-uix-menu-trigger-selected yt-uix-button-toggled") == "-1") {
        document.getElementsByClassName("action-panel-trigger-share")[0].blur();
        document.getElementsByClassName("action-panel-trigger-share")[0].setAttribute("class", document.getElementsByClassName("action-panel-trigger-share")[0].getAttribute("class") + " yt-uix-menu-trigger-selected yt-uix-button-toggled")
        let shareBox = [ `<div id="watch-action-panels" class="watch-action-panels yt-uix-button-panel yt-card yt-card-has-padding">
      <div id="action-panel-share" class="action-panel-content" data-panel-loaded="true">
      <div id="watch-actions-share-loading">
    <div class="share-panel">
    <div class="yt-uix-tabs"> <span class="yt-uix-button-group" data-button-toggle-group="share-panels"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text share-panel-services yt-uix-button-toggled yt-card-title" type="button" onclick=";return false;" data-button-toggle="true"><span class="yt-uix-button-content">Share</span></button><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text share-panel-embed yt-card-title" type="button" onclick=";return false;" data-button-toggle="true"><span class="yt-uix-button-content">Embed</span></button><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text share-panel-email yt-card-title" type="button" onclick=";return false;" data-button-toggle="true"><span class="yt-uix-button-content">Email</span></button> </span>
    </div>
    <div class="share-panel-show-loading hid">
        <p class="yt-spinner "> <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span> <span class="yt-spinner-message">Loading...    </span> </p>
    </div>
    <div class="share-panel-services-container">
        <div id="share-services-container" class="clearfix">
            <div class="share-panel-services ">
                <ul class="share-group ytg-box">
                    <li> <button title="Share to Facebook. Opens in a new window." data-toolttip-text="Share to Facebook. Opens in a new window." onclick="yt.window.popup(" http:="" www.facebook.com="" dialog="" share?app_id="87741124305\\&amp;href=https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;display=popup\\&amp;redirect_uri=https://www.youtube.com/facebook_redirect" ",="" {\&#39;height\&#39;:="" 560,\&#39;width\&#39;:="" 530,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=FACEBOOK\\&amp;share_source=watch\\&amp;id=10\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="FACEBOOK" class="yt-uix-tooltip share-service-button share-facebook-icon" data-tooltip-text="Share to Facebook. Opens in a new window." aria-labelledby="yt-uix-tooltip58-arialabel">      <span class="share-service-icon share-service-icon-facebook yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to Twitter. Opens in a new window." data-toolttip-text="Share to Twitter. Opens in a new window." onclick="yt.window.popup(" http:="" twitter.com="" intent="" tweet?url="https%3A//youtu.be/nchHcCWWtkk\\&amp;text=Olympic%20athletes%20return%20to%20Canada\\&amp;via=YouTube\\&amp;related=YouTube,YouTubeTrends,YTCreators" ",="" {\&#39;height\&#39;:="" 420,\&#39;width\&#39;:="" 550,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=TWITTER\\&amp;share_source=watch\\&amp;id=31\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="TWITTER" class="yt-uix-tooltip share-service-button share-twitter-icon" data-tooltip-text="Share to Twitter. Opens in a new window." aria-labelledby="yt-uix-tooltip57-arialabel">      <span class="share-service-icon share-service-icon-twitter yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to Google+. Opens in a new window." data-toolttip-text="Share to Google+. Opens in a new window." onclick="yt.window.popup(" https:="" plus.google.com="" share?url="https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;source=yt\\&amp;hl=en\\&amp;soc-platform=1\\&amp;soc-app=130" ",="" {\&#39;height\&#39;:="" 620,\&#39;width\&#39;:="" 400,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=GOOGLEPLUS\\&amp;share_source=watch\\&amp;id=43\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="GOOGLEPLUS" class="yt-uix-tooltip share-service-button share-googleplus-icon" data-tooltip-text="Share to Google+. Opens in a new window." aria-labelledby="yt-uix-tooltip56-arialabel">      <span class="share-service-icon share-service-icon-googleplus yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to Blogger. Opens in a new window." data-toolttip-text="Share to Blogger. Opens in a new window." onclick="yt.window.popup(" http:="" www.blogger.com="" blog-this.g?n="Olympic%20athletes%20return%20to%20Canada\\&amp;source=youtube\\&amp;b=%3Ciframe%20width%3D%22480%22%20height%3D%22270%22%20src%3D%22https%3A//www.youtube.com/embed/nchHcCWWtkk%22%20frameborder%3D%220%22%20allowfullscreen%3E%3C/iframe%3E\\&amp;eurl=https%3A//i.ytimg.com/vi/nchHcCWWtkk/hqdefault.jpg" ",="" {\&#39;height\&#39;:="" 468,\&#39;width\&#39;:="" 768,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=BLOGGER\\&amp;share_source=watch\\&amp;id=34\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="BLOGGER" class="yt-uix-tooltip share-service-button share-blogger-icon" data-tooltip-text="Share to Blogger. Opens in a new window." aria-labelledby="yt-uix-tooltip55-arialabel">      <span class="share-service-icon share-service-icon-blogger yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to reddit. Opens in a new window." data-toolttip-text="Share to reddit. Opens in a new window." onclick="yt.window.popup(" http:="" reddit.com="" submit?url="https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;title=Olympic%20athletes%20return%20to%20Canada" ",="" {\&#39;height\&#39;:="" 650,\&#39;width\&#39;:="" 1024,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=REDDIT\\&amp;share_source=watch\\&amp;id=4\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="REDDIT" class="yt-uix-tooltip share-service-button share-reddit-icon" data-tooltip-text="Share to reddit. Opens in a new window." aria-labelledby="yt-uix-tooltip54-arialabel">      <span class="share-service-icon share-service-icon-reddit yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to Tumblr. Opens in a new window." data-toolttip-text="Share to Tumblr. Opens in a new window." onclick="yt.window.popup(" http:="" www.tumblr.com="" share="" video?embed="https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;caption=Olympic%20athletes%20return%20to%20Canada" ",="" {\&#39;height\&#39;:="" 650,\&#39;width\&#39;:="" 1024,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=TUMBLR\\&amp;share_source=watch\\&amp;id=40\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="TUMBLR" class="yt-uix-tooltip share-service-button share-tumblr-icon" data-tooltip-text="Share to Tumblr. Opens in a new window." aria-labelledby="yt-uix-tooltip53-arialabel">      <span class="share-service-icon share-service-icon-tumblr yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to Pinterest. Opens in a new window." data-toolttip-text="Share to Pinterest. Opens in a new window." onclick="yt.window.popup(" http:="" pinterest.com="" pin="" create="" button="" ?url="https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;description=Olympic%20athletes%20return%20to%20Canada\\&amp;is_video=true\\&amp;media=https%3A//i.ytimg.com/vi/nchHcCWWtkk/hqdefault.jpg" ",="" {\&#39;height\&#39;:="" 650,\&#39;width\&#39;:="" 1024,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=PINTEREST\\&amp;share_source=watch\\&amp;id=45\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="PINTEREST" class="yt-uix-tooltip share-service-button share-pinterest-icon" data-tooltip-text="Share to Pinterest. Opens in a new window." aria-labelledby="yt-uix-tooltip52-arialabel">      <span class="share-service-icon share-service-icon-pinterest yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to ВКонтакте. Opens in a new window." data-toolttip-text="Share to ВКонтакте. Opens in a new window." onclick="yt.window.popup(" http:="" vkontakte.ru="" share.php?url="https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare" ",="" {\&#39;height\&#39;:="" 650,\&#39;width\&#39;:="" 1024,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=VKONTAKTE\\&amp;share_source=watch\\&amp;id=36\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="VKONTAKTE" class="yt-uix-tooltip share-service-button share-vkontakte-icon" data-tooltip-text="Share to ВКонтакте. Opens in a new window." aria-labelledby="yt-uix-tooltip51-arialabel">      <span class="share-service-icon share-service-icon-vkontakte yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to LinkedIn. Opens in a new window." data-toolttip-text="Share to LinkedIn. Opens in a new window." onclick="yt.window.popup(" http:="" www.linkedin.com="" sharearticle?url="https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;title=Olympic%20athletes%20return%20to%20Canada\\&amp;summary=Canada%27s%20Olympians%20were%20met%20by%20media%20and%20fans%20when%20they%20stepped%20into%20the%20arrivals%20hall%20at%20Toronto%27s%20Pearson%20airport%2C%20after%20a%20long%20flight%20from%20Rio.%20%0AClick%20here%20for%20the%20full%20story%3A%20http%3A//www.cbc.ca/news/canada/olympic-team-arrives-1.3731883%0A%C2%BB%C2%BB%C2%BB%20Subscribe%20to%20The%20National%20to%20watch%20more%20videos%20here%3A%20%20%20https%3A//www.youtube.com/user/CBCTheNational%3Fsub_...\\&amp;source=Youtube" ",="" {\&#39;height\&#39;:="" 650,\&#39;width\&#39;:="" 1024,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=LINKEDIN\\&amp;share_source=watch\\&amp;id=42\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="LINKEDIN" class="yt-uix-tooltip share-service-button share-linkedin-icon" data-tooltip-text="Share to LinkedIn. Opens in a new window." aria-labelledby="yt-uix-tooltip47-arialabel">      <span class="share-service-icon share-service-icon-linkedin yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to StumbleUpon. Opens in a new window." data-toolttip-text="Share to StumbleUpon. Opens in a new window." onclick="yt.window.popup(" http:="" www.stumbleupon.com="" submit?url="https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;title=Olympic%20athletes%20return%20to%20Canada" ",="" {\&#39;height\&#39;:="" 650,\&#39;width\&#39;:="" 1024,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=STUMBLEUPON\\&amp;share_source=watch\\&amp;id=5\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="STUMBLEUPON" class="yt-uix-tooltip share-service-button share-stumbleupon-icon" data-tooltip-text="Share to StumbleUpon. Opens in a new window." aria-labelledby="yt-uix-tooltip46-arialabel">      <span class="share-service-icon share-service-icon-stumbleupon yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to Одноклассники. Opens in a new window." data-toolttip-text="Share to Одноклассники. Opens in a new window." onclick="yt.window.popup(" http:="" www.odnoklassniki.ru="" dk?st.cmd="addShare\\&amp;st.noresize=on\\&amp;st._surl=https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare" ",="" {\&#39;height\&#39;:="" 650,\&#39;width\&#39;:="" 1024,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=ODNOKLASSNIKI\\&amp;share_source=watch\\&amp;id=39\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="ODNOKLASSNIKI" class="yt-uix-tooltip share-service-button share-odnoklassniki-icon" data-tooltip-text="Share to Одноклассники. Opens in a new window." aria-labelledby="yt-uix-tooltip50-arialabel">      <span class="share-service-icon share-service-icon-odnoklassniki yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to LiveJournal. Opens in a new window." data-toolttip-text="Share to LiveJournal. Opens in a new window." onclick="yt.window.popup(" http:="" www.livejournal.com="" update.bml?url="https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;subject=Olympic%20athletes%20return%20to%20Canada" ",="" {\&#39;height\&#39;:="" 650,\&#39;width\&#39;:="" 1024,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=LIVEJOURNAL\\&amp;share_source=watch\\&amp;id=38\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="LIVEJOURNAL" class="yt-uix-tooltip share-service-button share-livejournal-icon" data-tooltip-text="Share to LiveJournal. Opens in a new window." aria-labelledby="yt-uix-tooltip49-arialabel">      <span class="share-service-icon share-service-icon-livejournal yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                    <li> <button title="Share to Digg. Opens in a new window." data-toolttip-text="Share to Digg. Opens in a new window." onclick="yt.window.popup(" http:="" digg.com="" submit?url="https%3A//www.youtube.com/watch%3Fv%3DnchHcCWWtkk%26feature%3Dshare" ",="" {\&#39;height\&#39;:="" 650,\&#39;width\&#39;:="" 1024,\&#39;scrollbars\&#39;:="" true});yt.net.ping.send("="" sharing_services?relative_url="%2Fwatch%3Fv%3DnchHcCWWtkk%26feature%3Dshare\\&amp;v=nchHcCWWtkk\\&amp;name=DIGG\\&amp;share_source=watch\\&amp;id=1\\&amp;feature=share\\&amp;vertical=1" ");return="" false;"="" data-service-name="DIGG" class="yt-uix-tooltip share-service-button share-digg-icon" data-tooltip-text="Share to Digg. Opens in a new window." aria-labelledby="yt-uix-tooltip48-arialabel">      <span class="share-service-icon share-service-icon-digg yt-sprite"></span>      <span class="share-service-checkmark yt-sprite"></span>    </button> </li>
                </ul>
            </div>
        </div>
        <div class="share-panel-url-container share-panel-reverse"> <span class="share-panel-url-input-container yt-uix-form-input-container yt-uix-form-input-text-container  yt-uix-form-input-non-empty"><input class="yt-uix-form-input-text share-panel-url" name="share_url" value="https://youtu.be/videoidplaceholder" data-video-id="videoidplaceholder" title="Share link"></span> <span class="share-panel-start-at-container ">        <label>          <span class="yt-uix-form-input-checkbox-container">            <input class="share-panel-start-at" type="checkbox">            <span class="yt-uix-form-input-checkbox-element"></span> </span>Start at: </label> <input type="text" value="0:00" title="Video start time" class="yt-uix-form-input-text share-panel-start-at-time"> </span>
        </div>
    </div>
    <div class="share-panel-embed-container hid">
        <div class="action-panel-loading">Loading... </div>
    </div>
    <div class="share-panel-email-container hid" data-disabled="true"> <strong><a href="https://accounts.google.com\/ServiceLogin?uilel=3\&amp;hl=en\&amp;passive=true\&amp;service=youtube\&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Ffeature%3Demail%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DnchHcCWWtkk%2526feature%253Dshare_email%26action_handle_signin%3Dtrue%26app%3Ddesktop">Sign in</a> now!</strong> </div>
</div>
  </div>
  <div id="watch-actions-share-panel"></div>

  </div>

        <div id="action-panel-transcript" class="action-panel-content hid">
    <div id="watch-actions-transcript-loading">
      <div class="action-panel-loading">
          <p class="yt-spinner ">
        <span title="Loading icon" class="yt-spinner-img  yt-sprite"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

      </div>
    </div>
      <div id="watch-actions-transcript" class="hid">
    <h2 class="yt-card-title">
Transcript
    </h2>
      <div id="caption-line-template" class="hid">
    <!--
    <div class="caption-line-time">
      <div class="caption-line-start">__start__</div>
    </div>
    <div class="editable-line-text">
      <span class="editable-line-text-original">__original__</span>
      <label class="editable-line-text-current hid">__current__</label>
      <textarea class="editable-line-text-input hid">__input__</textarea>
    </div>
    -->
  </div>



    <div id="watch-transcript-container" class="yt-scrollbar">
      <div id="watch-transcript-not-found" class="hid">
The interactive transcript could not be loaded.
      </div>


    </div>
  </div>

  </div>

      <div id="action-panel-stats" class="action-panel-content hid">
    <div class="action-panel-loading">
        <p class="yt-spinner ">
        <span title="Loading icon" class="yt-spinner-img  yt-sprite"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

    </div>
  </div>

      <div id="action-panel-report" class="action-panel-content hid" data-auth-required="true">
    <div class="action-panel-loading">
        <p class="yt-spinner ">
        <span title="Loading icon" class="yt-spinner-img  yt-sprite"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

    </div>
  </div>


  <div id="action-panel-rental-required" class="action-panel-content hid">
      <div id="watch-actions-rental-required">
    <strong>Rating is available when the video has been rented.</strong>
  </div>

  </div>

  <div id="action-panel-error" class="action-panel-content hid">
    <div class="action-panel-error">
      This feature is not available right now. Please try again later.
    </div>
  </div>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup yt-uix-button-opacity yt-uix-close" type="button" onclick=";return false;" aria-label="Close" id="action-panel-dismiss" data-close-parent-id="watch8-action-panels"></button>
  </div>` ];
        var descriptionelement = document.getElementById("action-panel-details");
        descriptionelement.insertAdjacentHTML('beforebegin', shareBox);
            var locationhref = location.href;
            document.getElementsByClassName("share-panel-services-container")[0].innerHTML = document.getElementsByClassName("share-panel-services-container")[0].innerHTML.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""))
            document.getElementsByClassName("share-group ytg-box")[0].children[0].children[0].onclick = function() {
                var facebookshare = "http://www.facebook.com/dialog/share?app_id=87741124305&href=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare&display=popup&redirect_uri=https://www.youtube.com/facebook_redirect";
                var facebooksharefix = facebookshare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var facebookpopup = window.open(facebooksharefix, "_blank");
                facebookpopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[1].children[0].onclick = function() {
                var twittershare = "http://twitter.com/intent/tweet?url=https%3A//youtu.be/videoidplaceholder&text=titleplaceholder&via=YouTube&related=YouTube,YouTubeTrends,YTCreators";
                var twittersharefix = twittershare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var twittersharefixtwo = twittersharefix.replace("titleplaceholder", document.getElementById("eow-title").innerText);
                var twittersharepopup = window.open(twittersharefixtwo, "_blank");
                twittersharepopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[2].children[0].onclick = function() {
                var googleplusshare = "https://plus.google.com/share?url=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare&source=yt&hl=en&soc-platform=1&soc-app=130";
                var googleplussharefix = googleplusshare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var googlepluspopup = window.open(googleplussharefix, "_blank");
                googlepluspopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[3].children[0].onclick = function() {
                var bloggershare = "http://www.blogger.com/blog-this.g?n=titleplaceholder&source=youtube&b=%3Ciframe%20width%3D%22480%22%20height%3D%22270%22%20src%3D%22https%3A//www.youtube.com/embed/videoidplaceholder%22%20frameborder%3D%220%22%20allowfullscreen%3E%3C/iframe%3E&eurl=https%3A//i.ytimg.com/vi/videothumbnailidplaceholder/hqdefault.jpg";
                var bloggersharefix = bloggershare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var bloggersharefixtwo = bloggersharefix.replace("videothumbnailidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var bloggersharefixthree = bloggersharefixtwo.replace("titleplaceholder", document.getElementById("eow-title").innerText);
                var bloggerpopup = window.open(bloggersharefixthree, "_blank");
                bloggerpopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[4].children[0].onclick = function() {
                var redditshare = "http://reddit.com/submit?url=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare&title=titleplaceholder";
                var redditsharefix = redditshare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var redditsharefixtwo = redditsharefix.replace("titleplaceholder", document.getElementById("eow-title").innerText);
                var redditpopup = window.open(redditsharefixtwo, "_blank");
                redditpopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[5].children[0].onclick = function() {
                var tumblrshare = "http://www.tumblr.com/share/video?embed=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare&caption=titleplaceholder";
                var tumblrsharefix = tumblrshare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var tumblrsharefixtwo = tumblrsharefix.replace("titleplaceholder", document.getElementById("eow-title").innerText);
                var tumblrpopup = window.open(tumblrsharefixtwo, "_blank");
                tumblrpopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[6].children[0].onclick = function() {
                var pinterestshare = "http://pinterest.com/pin/create/button/?url=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare&description=titleplaceholder&is_video=true&media=https%3A//i.ytimg.com/vi/videothumbnailidplaceholder/hqdefault.jpg";
                var pinterestsharefix = pinterestshare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var pinterestsharefixtwo = pinterestsharefix.replace("titleplaceholder", document.getElementById("eow-title").innerText);
                var pinterestsharefixthree = pinterestsharefixtwo.replace("videothumbnailidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var pinterestpopup = window.open(pinterestsharefixthree, "_blank");
                pinterestpopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[7].children[0].onclick = function() {
                var vkontakteshare = "http://vkontakte.ru/share.php?url=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare";
                var vkontaktesharefix = vkontakteshare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var vkontaktesharepopup = window.open(vkontakteshare, "_blank");
                vkontaktesharepopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[8].children[0].onclick = function() {
                var linkedinshare = "http://www.linkedin.com/shareArticle?url=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare&title=titleplaceholder&summary=descriptionplaceholder&source=Youtube";
                var linkedinsharefix = linkedinshare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var linkedinsharefixtwo = linkedinsharefix.replace("titleplaceholder", document.getElementById("eow-title").innerText);
                var linkedinsharefixthree = linkedinsharefixtwo.replace("descriptionplaceholder", document.getElementById("eow-description").innerText);
                var linkedinpopup = window.open(linkedinsharefixthree, "_blank");
                linkedinpopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[9].children[0].onclick = function() {
                var stumbleupon = "http://www.stumbleupon.com/submit?url=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare&title=titleplaceholder";
                var stumbleuponfix = stumbleupon.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var stumbleuponfixtwo = stumbleuponfix.replace("titleplaceholder", document.getElementById("eow-title").innerText);
                var stumbleuponpopup = window.open(stumbleuponfixtwo, "_blank");
                stumbleuponpopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[10].children[0].onclick = function() {
                var russianplatformthatnooneevenknowsorcaresabout = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.noresize=on&st._surl=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare";
                var russianplatformthatnooneevenknowsorcaresaboutfix = russianplatformthatnooneevenknowsorcaresabout.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var russianplatformthatnooneevenknowsorcaresaboutpopup = window.open(russianplatformthatnooneevenknowsorcaresaboutfix, "_blank");
                russianplatformthatnooneevenknowsorcaresaboutpopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[11].children[0].onclick = function() {
                var livejournalshare = "http://www.livejournal.com/update.bml?url=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare&subject=titleplaceholder";
                var livejournalsharefix = livejournalshare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var livejournalsharefixtwo = livejournalsharefix.replace("titleplaceholder", document.getElementById("eow-title").innerText);
                var livejournalpopup = window.open(livejournalsharefixtwo, "_blank");
                livejournalpopup.focus();
            }
            document.getElementsByClassName("share-group ytg-box")[0].children[12].children[0].onclick = function() {
                var diggshare = "http://digg.com/submit?url=https%3A//www.youtube.com/watch%3Fv%3Dvideoidplaceholder%26feature%3Dshare";
                var diggsharefix = diggshare.replace("videoidplaceholder", locationhref.replace("https://www.youtube.com/watch?v=", ""));
                var diggsharepopup = window.open(diggsharefix, "_blank");
                diggsharepopup.focus();
            }
            document.getElementById("action-panel-dismiss").onclick = function() {
                document.getElementById("action-panel-dismiss").blur();
                document.getElementsByClassName("action-panel-trigger-share")[0].setAttribute("class", document.getElementsByClassName("action-panel-trigger-share")[0].getAttribute("class").replace(" yt-uix-menu-trigger-selected yt-uix-button-toggled"))
                document.getElementById("watch-action-panels").remove();
            }

            document.getElementById("watch-actions-share-loading").children[0].children[0].children[0].children[1].onclick = function() {
                if (document.getElementById("watch-actions-share-loading").children[0].children[0].children[0].children[1].getAttribute("class").search("yt-uix-button-toggled") == "-1") {
                    document.getElementById("watch-actions-share-loading").children[0].children[0].children[0].children[1].blur();
                    document.getElementById("watch-action-panels").remove();
                    let shareBoxEmbed = [ `<div id="watch-action-panels" class="watch-action-panels yt-uix-button-panel yt-card yt-card-has-padding">
      <div id="action-panel-share" class="action-panel-content" data-panel-loaded="true">
      <div id="watch-actions-share-loading">
    <div class="share-panel">
    <div class="yt-uix-tabs"> <span class="yt-uix-button-group" data-button-toggle-group="share-panels"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text share-panel-services yt-card-title" type="button" onclick=";return false;" data-button-toggle="true"><span class="yt-uix-button-content">Share</span></button><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text share-panel-embed  yt-uix-button-toggled yt-card-title" type="button" onclick=";return false;" data-button-toggle="true"><span class="yt-uix-button-content">Embed</span></button><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text share-panel-email yt-card-title" type="button" onclick=";return false;" data-button-toggle="true"><span class="yt-uix-button-content">Email</span></button> </span>
    </div>
    <div class="share-panel-show-loading hid">
        <p class="yt-spinner "> <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span> <span class="yt-spinner-message">Loading...    </span> </p>
    </div>
<div class="yt-uix-expander" tabindex="0"> <span class=" yt-uix-form-input-container yt-uix-form-input-text-container "><input class="yt-uix-form-input-text share-embed-code" title="Embed code" dir="ltr"></span>
    <div class="yt-uix-expander-body">
        <div id="share-preview" class="share-embed-options"> <span>Preview:</span>
            <div id="video-preview"></div>
  <iframe src="https://www.youtube.com/embed/videoidplaceholder" allowfullscreen="" width="__width__" height="__height__" frameborder="0"></iframe>
        </div>
        <div class="share-embed-options"> <label for="embed-layout-options">Video size:</label> <span class="yt-uix-form-input-select "><span class="yt-uix-form-input-select-content"><span class="yt-uix-form-input-select-arrow yt-sprite"></span><span class="yt-uix-form-input-select-value"></span></span><select class="yt-uix-form-input-select-element " id="embed-layout-options">    <option value="default" data-width="560" data-height="315">560 × 315</option>    <option value="hd720" data-width="1280" data-height="720">1280 × 720</option>    <option value="large" data-width="853" data-height="480">853 × 480</option>    <option value="medium" data-width="640" data-height="360">640 × 360</option>  <option value="custom">Custom size</option></select></span> <span id="share-embed-customize" class="hid">            <input type="text" class="yt-uix-form-input-text share-embed-size-custom-width" maxlength="4">            ×            <input type="text" class="yt-uix-form-input-text share-embed-size-custom-height" maxlength="4">          </span> </div>
        <ul class="share-embed-options">
            <li> <label>              <input type="checkbox" class="share-embed-option" name="show-related" checked="">Show suggested videos when the video finishes            </label> </li>
            <li> <label>            <input type="checkbox" class="share-embed-option" name="show-controls" checked="">Show player controls          </label> </li>
            <li> <label>            <input type="checkbox" class="share-embed-option" name="show-info" checked="">Show video title and player actions          </label> </li>
            <li> <label>            <input type="checkbox" class="share-embed-option" name="delayed-cookies">Enable privacy-enhanced mode            [<a href="http://www.google.com/support/youtube/bin/answer.py?answer=171780&amp;expand=PrivacyEnhancedMode#privacy" target="_blank">?</a>]          </label> </li>
            <li>
                <p class="share-panel-embed-legal">By displaying YouTube videos on your site, you are agreeing to the <a href="https://developers.google.com/youtube/terms">YouTube API terms of service.</a></p>
            </li>
        </ul>
    </div> <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-collapsed-body yt-uix-gen204" type="button" onclick=";return false;"><span class="yt-uix-button-content">Show more</span></button> <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-body" type="button" onclick=";return false;"><span class="yt-uix-button-content">Show less</span></button> </div>
</div></div></div></div>`];
                    var videoid = locationhref.replace("https://www.youtube.com/watch?v=", "");
                    descriptionelement.insertAdjacentHTML('beforebegin', shareBoxEmbed);
                    document.getElementsByTagName("iframe")[0].setAttribute("src", document.getElementsByTagName("iframe")[0].getAttribute("src").replace("videoidplaceholder", location.href.replace("https://www.youtube.com/watch?v=", "")));
                    document.getElementsByClassName('yt-uix-form-input-text share-embed-code')[0].value += '<iframe src="https://www.youtube.com/embed/videoidplaceholder" allowfullscreen="" width="__width__" height="__height__" frameborder="0"></iframe>';
                    document.getElementById("embed-layout-options").children[0].onclick = function() {

                    }


                } else if (document.getElementById("watch-actions-share-loading").children[0].children[0].children[0].children[1].getAttribute("class").search("yt-uix-button-toggled") != "-1") {
                    doNothing();
                }

            }


        } else if (document.getElementsByClassName("action-panel-trigger-share")[0].getAttribute("class").search("yt-uix-menu-trigger-selected yt-uix-button-toggled") != "-1") {
        document.getElementsByClassName("action-panel-trigger-share")[0].blur();
        document.getElementsByClassName("action-panel-trigger-share")[0].setAttribute("class", document.getElementsByClassName("action-panel-trigger-share")[0].getAttribute("class").replace(" yt-uix-menu-trigger-selected yt-uix-button-toggled"))
            document.getElementById("watch-action-panels").remove();
        }

        getLikeButtonStatus();
    }
    // - description "show more"
    document.getElementsByClassName("yt-uix-expander-collapsed-body")[0].onclick = function() {
        document.getElementsByClassName("yt-uix-expander-collapsed-body")[0].blur();
        document.getElementById("action-panel-details").setAttribute("class", document.getElementById("action-panel-details").getAttribute("class").replace(" yt-uix-expander-collapsed", ""))
    }
    document.getElementsByClassName("yt-uix-expander-body")[2].onclick = function() {
        document.getElementsByClassName("yt-uix-expander-body")[2].blur();
        document.getElementById("action-panel-details").setAttribute("class", document.getElementById("action-panel-details").getAttribute("class") + " yt-uix-expander-collapsed")
    }

    // More button
    //document.getElementsByClassName("yt-uix-button-content")[6].onclick = function() {
    document.getElementById("action-panel-overflow-button").onclick = function() {
        if (document.getElementById("action-panel-overflow-button").getAttribute("class").search("yt-uix-menu-trigger-selected yt-uix-button-toggled yt-uix-more-button-context-menu-open-opened") == "-1") {
        document.getElementById("action-panel-overflow-button").blur();
        document.getElementById("action-panel-overflow-button").setAttribute("class", document.getElementById("action-panel-overflow-button").getAttribute("class") + " yt-uix-menu-trigger-selected yt-uix-button-toggled yt-uix-more-button-context-menu-open-opened")
        document.getElementsByClassName("yt-uix-menu-content yt-ui-menu-content yt-uix-menu-content-hidden")[0].setAttribute("class", document.getElementsByClassName("yt-uix-menu-content yt-ui-menu-content yt-uix-menu-content-hidden")[0].getAttribute("class").replace("-hidden", ""))
        } else if (document.getElementById("action-panel-overflow-button").getAttribute("class").search("yt-uix-menu-trigger-selected yt-uix-button-toggled yt-uix-more-button-context-menu-open-opened") != "-1") {
            //document.getElementsByClassName("yt-uix-more-button-context-menu-open-opened")[0].onclick = function() {
        document.getElementById("action-panel-overflow-button").blur();
        document.getElementById("action-panel-overflow-button").setAttribute("class", document.getElementById("action-panel-overflow-button").getAttribute("class").replace(" yt-uix-menu-trigger-selected yt-uix-button-toggled yt-uix-more-button-context-menu-open-opened"))
        document.getElementsByClassName("yt-uix-menu-content yt-ui-menu-content yt-uix-menu-content")[0].setAttribute("class", "yt-uix-menu-content yt-ui-menu-content yt-uix-menu-content-hidden")
        }
  }


    // Notifications
    document.getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon yt-uix-subscription-preferences-button")[0].onclick = function() {
        document.getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon yt-uix-subscription-preferences-button")[0].blur();
        document.getElementById("notification-preference-button").children[0].children[0].children[0].children[0].click();
    }

    if (document.getElementById("info-contents").children[0].children[0].children[4].children[0] != undefined) {
        if (document.getElementById("info-contents").children[0].children[0].children[4].children[0].innerHTML.search("Unlisted") != "-1") {
            document.getElementById("watch-privacy-icon").setAttribute("class", "yt-uix-tooltip yt-uix-tooltip-reverse unlisted");
        } else if (document.getElementById("info-contents").children[0].children[0].children[4].children[0].innerHTML.search("Private") != "-1") {
            document.getElementById("watch-privacy-icon").setAttribute("class", "yt-uix-tooltip yt-uix-tooltip-reverse private");
            document.getElementById("watch-privacy-icon").setAttribute("title", "This video is private. Only you can see it.");
        } else {
            document.getElementById("watch-privacy-icon").remove();
        }
    } else if (document.getElementById("info-contents").children[0].children[0].children[4].children[0] == undefined) {
        document.getElementById("watch-privacy-icon").remove();
    }


}
}
catch(err) {
    var uselessVariable = 0;
}
}

    // check if URL changes; reset if so.
window.addEventListener('load', function () {
    console.log('load');
});

window.addEventListener('yt-page-data-updated', function () {
    resetWatch7();
});


reconstruct();

function resetWatch7() {
    var i;
    for (i = 0; i < 200; i++) {
        document.getElementById("watch-header").outerHTML = "";
        document.getElementById("action-panel-details").outerHTML = "";
        reconstruct();
    }
}
// check if URL changes; reset if so.
window.addEventListener('load', function () {
    var checkLoadState;
    checkLoadState++;
    if (checkLoadState == 1) {
        window.location.reload();
        checkLoadState = 0;
    }
    console.log('load');
});


window.addEventListener('yt-page-data-updated', function () {
    resetWatch7();
});

function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

var storedText;

fetch('https://raw.githubusercontent.com/randomperson189/Reconstruct-Classic-Watch8-Layout/trying-to-fix/watch_page.css')
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done();
    });
  });

function done() {
  addStyle(storedText);

    console.log(storedText);
}

function reconstructVideoShelf() {
    try {
        let videoShelf = [ `<div id="watch7-sidebar" class="watch-sidebar">
            <div id="placeholder-playlist" class="watch-playlist player-height hid" style="display: none;"></div>



  <div id="watch7-sidebar-contents" class="watch-sidebar-gutter   yt-card yt-card-has-padding    yt-uix-expander yt-uix-expander-collapsed">
      <div id="watch7-sidebar-offer">

      </div>

    <div id="watch7-sidebar-ads">
              <div id="watch-channel-brand-div" class="">
      <div id="watch-channel-brand-div-text">
Advertisement
      </div>
      <div id="google_companion_ad_div">
      </div>
    </div>


    </div>
    <div id="watch7-sidebar-modules">
            <div class="watch-sidebar-section">
    <div class="autoplay-bar">
      <div class="checkbox-on-off">
       <label for="autoplay-checkbox">Autoplay</label>
       <span class="autoplay-hovercard yt-uix-hovercard">
          <span class="autoplay-info-icon yt-uix-button-opacity yt-uix-hovercard-target yt-sprite" data-orientation="vertical" data-position="topright"></span>
<span class="yt-uix-hovercard-content">When autoplay is enabled, a suggested video will automatically play next.</span>        </span>
          <span class="yt-uix-checkbox-on-off ">
<input id="autoplay-checkbox" class="" type="checkbox" name="" checked=""><label for="autoplay-checkbox" id="autoplay-checkbox-label"><span class="checked"></span><span class="toggle"></span><span class="unchecked"></span></label>  </span>

      </div>
      <h4 class="watch-sidebar-head">
        Up next
      </h4>
        <div class="watch-sidebar-body">
    <ul class="video-list">
        <li class="video-list-item related-list-item">


    <div class="content-wrapper">
    <a href="videoonelinkplaceholder" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CDEQpDAYACITCLPAoLuumtoCFV3afgoddTQHpij4HTIHYXV0b25hdkjEu4GtvZiOhnU" title="videoonetitleattributeplaceholder" rel=" spf-prefetch nofollow" data-visibility-tracking="CDEQpDAYACITCLPAoLuumtoCFV3afgoddTQHpij4HUDe7vO217rdmnY=">
  <span dir="ltr" class="title" aria-describedby="description-id-424167">
    videoonetitleplaceholder
  </span>
  <span class="accessible-description" id="description-id-424167">
     - Duration: videoonedurationattributeplaceholder.
  </span>
  <span class="stat attribution"><span class="">videoonecreatorplaceholder</span></span>
  <span class="stat view-count">videooneviewsplaceholder</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="videoonelinkplaceholder" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CDEQpDAYACITCLPAoLuumtoCFV3afgoddTQHpij4HTIHYXV0b25hdkjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CDEQpDAYACITCLPAoLuumtoCFV3afgoddTQHpij4HUDe7vO217rdmnY=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="djV11Xbc914"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="videoonethumbnailplaceholder"><span class="video-time">videonedurationplaceholder</span></span></a>



  <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip" type="button" onclick=";return false;" title="Watch later" role="button" data-video-ids="djV11Xbc914" data-button-menu-id="shared-addto-watch-later-login"><span class="yt-uix-button-arrow yt-sprite"></span></button>
  <span class="thumb-menu dark-overflow-action-menu video-actions">
    <button aria-haspopup="true" onclick=";return false;" class="yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty" type="button" aria-expanded="false"><span class="yt-uix-button-arrow yt-sprite"></span><ul class="watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid"><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item" data-action="play-next" onclick=";return false;" data-video-ids="djV11Xbc914"><span class="addto-watch-queue-menu-text">Play next</span></li><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item" data-action="play-now" onclick=";return false;" data-video-ids="djV11Xbc914"><span class="addto-watch-queue-menu-text">Play now</span></li></ul></button>
  </span>
  <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip" type="button" onclick=";return false;" title="Queue" data-style="tv-queue" data-video-ids="djV11Xbc914"></button>
</div>


        </li>
    </ul>
  </div>

    </div>
  </div>


          <div class="watch-sidebar-section">
      <hr class="watch-sidebar-separation-line">
    <div class="watch-sidebar-body">
      <ul id="watch-related" class="video-list">
          <li class="video-list-item related-list-item  show-video-time related-list-item-compact-radio"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&amp;list=RDdQw4w9WgXcQ" class="related-playlist yt-pl-thumb-link spf-link mix-playlist resumable-list yt-uix-sessionlink" data-sessionlink="itct=CC4QozAYASITCLPAoLuumtoCFV3afgoddTQHpij4HTIKbGlzdF9vdGhlckjEu4GtvZiOhnU" rel="spf-prefetch" data-visibility-tracking="CC4QozAYASITCLPAoLuumtoCFV3afgoddTQHpij4HQ==" data-secondary-video-url="/watch?v=djV11Xbc914&amp;list=RDdQw4w9WgXcQ">  <span class=" yt-mix-thumb yt-pl-thumb">

    <span class="video-thumb  yt-thumb yt-thumb-168">
    <span class="yt-thumb-default">
      <span class="yt-thumb-clip">

  <img alt="" aria-hidden="true" width="168" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLBf45ycDkHw60O072DkeCeAw0TV-w" data-ytimg="1">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>


    <span class="sidebar">
      <span class="yt-pl-sidebar-content yt-valign">
        <span class="yt-valign-container">
            <span class="formatted-video-count-label">
      <b>50+</b> videos
  </span>

            <span class="yt-pl-icon yt-pl-icon-mix yt-sprite"></span>
        </span>
      </span>
    </span>

      <span class="yt-pl-thumb-overlay">
        <span class="yt-pl-thumb-overlay-content">
          <span class="play-icon yt-sprite"></span>
          <span class="yt-pl-thumb-overlay-text">
Play all
          </span>
        </span>
      </span>

        <span class="yt-pl-watch-queue-overlay">
      <span class="thumb-menu dark-overflow-action-menu video-actions">
    <button aria-haspopup="true" onclick=";return false;" class="yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty" type="button" aria-expanded="false"><span class="yt-uix-button-arrow yt-sprite"></span><ul class="watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid"><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item" data-action="play-now" onclick=";return false;" data-video-ids="dQw4w9WgXcQ" data-list-id="RDdQw4w9WgXcQ"><span class="addto-watch-queue-menu-text">Play now</span></li></ul></button>
  </span>

      <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip" type="button" onclick=";return false;" title="Queue" data-style="tv-queue" data-video-ids="dQw4w9WgXcQ" data-list-id="RDdQw4w9WgXcQ"></button>

  </span>

  </span>
<span dir="ltr" class="title" title="Mix - Rick Astley - Never Gonna Give You Up (Video)">Mix - Rick Astley - Never Gonna Give You Up (Video)</span><span class="stat attribution">YouTube</span></a></li><li class="video-list-item related-list-item related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=yPYZpwSpKmA" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CC0QpDAYAiITCLPAoLuumtoCFV3afgoddTQHpij4HTIGcmVsbWZ1SMS7ga29mI6GdQ" title="Rick Astley - Together Forever (Video)" rel=" spf-prefetch nofollow" data-visibility-tracking="CC0QpDAYAiITCLPAoLuumtoCFV3afgoddTQHpij4HUDg1KSl8LSG-8gB">
  <span dir="ltr" class="title" aria-describedby="description-id-72533">
    Rick Astley - Together Forever (Video)
  </span>
  <span class="accessible-description" id="description-id-72533">
     - Duration: 3:25.
  </span>
  <span class="stat attribution"><span class="">RickAstleyVEVO</span></span>
  <span class="stat view-count">50,934,019 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=yPYZpwSpKmA" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CC0QpDAYAiITCLPAoLuumtoCFV3afgoddTQHpij4HTIGcmVsbWZ1SMS7ga29mI6GdQ" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CC0QpDAYAiITCLPAoLuumtoCFV3afgoddTQHpij4HUDg1KSl8LSG-8gB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="yPYZpwSpKmA"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/yPYZpwSpKmA/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLA6g5QWF95TcEexTR3bbxVUIgeZBA"><span class="video-time">3:25</span></span></a>



  <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip" type="button" onclick=";return false;" title="Watch later" role="button" data-video-ids="yPYZpwSpKmA" data-button-menu-id="shared-addto-watch-later-login"><span class="yt-uix-button-arrow yt-sprite"></span></button>
  <span class="thumb-menu dark-overflow-action-menu video-actions">
    <button aria-haspopup="true" onclick=";return false;" class="yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty" type="button" aria-expanded="false"><span class="yt-uix-button-arrow yt-sprite"></span><ul class="watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid"><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item" data-action="play-next" onclick=";return false;" data-video-ids="yPYZpwSpKmA"><span class="addto-watch-queue-menu-text">Play next</span></li><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item" data-action="play-now" onclick=";return false;" data-video-ids="yPYZpwSpKmA"><span class="addto-watch-queue-menu-text">Play now</span></li></ul></button>
  </span>
  <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip" type="button" onclick=";return false;" title="Queue" data-style="tv-queue" data-video-ids="yPYZpwSpKmA"></button>
</div>

</li><li class="video-list-item related-list-item related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=pIgZ7gMze7A" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCwQpDAYAyITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Wham! - Wake Me Up Before You Go-Go (Official Video)" rel=" spf-prefetch nofollow" data-visibility-tracking="CCwQpDAYAyITCLPAoLuumtoCFV3afgoddTQHpij4HUCw982Z4L2GxKQB">
  <span dir="ltr" class="title" aria-describedby="description-id-616308">
    Wham! - Wake Me Up Before You Go-Go (Official Video)
  </span>
  <span class="accessible-description" id="description-id-616308">
     - Duration: 3:51.
  </span>
  <span class="stat attribution"><span class="">WhamVEVO</span></span>
  <span class="stat view-count">203,894,507 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=pIgZ7gMze7A" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCwQpDAYAyITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCwQpDAYAyITCLPAoLuumtoCFV3afgoddTQHpij4HUCw982Z4L2GxKQB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="pIgZ7gMze7A"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/pIgZ7gMze7A/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLDX5U0l77KSIhS3GpqiDqOs8dNQdg"><span class="video-time">3:51</span></span></a>



  <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip" type="button" onclick=";return false;" title="Watch later" role="button" data-video-ids="pIgZ7gMze7A" data-button-menu-id="shared-addto-watch-later-login"><span class="yt-uix-button-arrow yt-sprite"></span></button>
  <span class="thumb-menu dark-overflow-action-menu video-actions">
    <button aria-haspopup="true" onclick=";return false;" class="yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty" type="button" aria-expanded="false"><span class="yt-uix-button-arrow yt-sprite"></span><ul class="watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid"><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item" data-action="play-next" onclick=";return false;" data-video-ids="pIgZ7gMze7A"><span class="addto-watch-queue-menu-text">Play next</span></li><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item" data-action="play-now" onclick=";return false;" data-video-ids="pIgZ7gMze7A"><span class="addto-watch-queue-menu-text">Play now</span></li></ul></button>
  </span>
  <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip" type="button" onclick=";return false;" title="Queue" data-style="tv-queue" data-video-ids="pIgZ7gMze7A"></button>
</div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=Gs069dndIYk" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCsQpDAYBCITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Earth, Wind &amp; Fire - September" rel=" spf-prefetch nofollow" data-visibility-tracking="CCsQpDAYBCITCLPAoLuumtoCFV3afgoddTQHpij4HUCJw_TO3d7O5ho=">
  <span dir="ltr" class="title" aria-describedby="description-id-377931">
    Earth, Wind &amp; Fire - September
  </span>
  <span class="accessible-description" id="description-id-377931">
     - Duration: 3:36.
  </span>
  <span class="stat attribution"><span class="">EarthWindandFireVEVO</span></span>
  <span class="stat view-count">184,944,193 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=Gs069dndIYk" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCsQpDAYBCITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCsQpDAYBCITCLPAoLuumtoCFV3afgoddTQHpij4HUCJw_TO3d7O5ho=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="Gs069dndIYk"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/Gs069dndIYk/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLDTw3KGaMo5R5nQAeyvQSF6BrGenQ"><span class="video-time">3:36</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=FTQbiNvZqaY" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCoQpDAYBSITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Toto - Africa (Video)" rel=" spf-prefetch nofollow" data-visibility-tracking="CCoQpDAYBSITCLPAoLuumtoCFV3afgoddTQHpij4HUCm0-bejfGGmhU=">
  <span dir="ltr" class="title" aria-describedby="description-id-474305">
    Toto - Africa (Video)
  </span>
  <span class="accessible-description" id="description-id-474305">
     - Duration: 4:35.
  </span>
  <span class="stat attribution"><span class="">TotoVEVO</span></span>
  <span class="stat view-count">299,066,133 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=FTQbiNvZqaY" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCoQpDAYBSITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCoQpDAYBSITCLPAoLuumtoCFV3afgoddTQHpij4HUCm0-bejfGGmhU=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="FTQbiNvZqaY"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/FTQbiNvZqaY/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLC_5Ni2mOPN-OAyVwpS_66BzHpXtw"><span class="video-time">4:35</span></span></a>

  </div>

</li><li class="video-list-item related-list-item related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=I_izvAbhExY" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCkQpDAYBiITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Bee Gees - Stayin' Alive (1977)" rel=" spf-prefetch nofollow" data-visibility-tracking="CCkQpDAYBiITCLPAoLuumtoCFV3afgoddTQHpij4HUCWpoS3wPes_CM=">
  <span dir="ltr" class="title" aria-describedby="description-id-713622">
    Bee Gees - Stayin' Alive (1977)
  </span>
  <span class="accessible-description" id="description-id-713622">
     - Duration: 4:03.
  </span>
  <span class="stat attribution"><span class="">beegees</span></span>
  <span class="stat view-count">239,574,675 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=I_izvAbhExY" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCkQpDAYBiITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCkQpDAYBiITCLPAoLuumtoCFV3afgoddTQHpij4HUCWpoS3wPes_CM=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="I_izvAbhExY"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/I_izvAbhExY/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLCZ5-aXMM07G1BpozLAcM_IeuVazA"><span class="video-time">4:03</span></span></a>



  <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip" type="button" onclick=";return false;" title="Watch later" role="button" data-video-ids="I_izvAbhExY" data-button-menu-id="shared-addto-watch-later-login"><span class="yt-uix-button-arrow yt-sprite"></span></button>
  <span class="thumb-menu dark-overflow-action-menu video-actions">
    <button aria-haspopup="true" onclick=";return false;" class="yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty" type="button" aria-expanded="false"><span class="yt-uix-button-arrow yt-sprite"></span><ul class="watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid"><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item" data-action="play-next" onclick=";return false;" data-video-ids="I_izvAbhExY"><span class="addto-watch-queue-menu-text">Play next</span></li><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item" data-action="play-now" onclick=";return false;" data-video-ids="I_izvAbhExY"><span class="addto-watch-queue-menu-text">Play now</span></li></ul></button>
  </span>
  <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip" type="button" onclick=";return false;" title="Queue" data-style="tv-queue" data-video-ids="I_izvAbhExY"></button>
</div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=oRdxUFDoQe0" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCgQpDAYByITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Michael Jackson - Beat It (Official Video)" rel=" spf-prefetch nofollow" data-visibility-tracking="CCgQpDAYByITCLPAoLuumtoCFV3afgoddTQHpij4HUDtg6GHharci6EB">
  <span dir="ltr" class="title" aria-describedby="description-id-531831">
    Michael Jackson - Beat It (Official Video)
  </span>
  <span class="accessible-description" id="description-id-531831">
     - Duration: 4:59.
  </span>
  <span class="stat attribution"><span class="">michaeljacksonVEVO</span></span>
  <span class="stat view-count">338,719,998 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=oRdxUFDoQe0" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCgQpDAYByITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCgQpDAYByITCLPAoLuumtoCFV3afgoddTQHpij4HUDtg6GHharci6EB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="oRdxUFDoQe0"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/oRdxUFDoQe0/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLB_AOvmBsQAKM9go0z94R7qRh-QsQ"><span class="video-time">4:59</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=V1bFr2SWP1I" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCcQpDAYCCITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="OFFICIAL Somewhere over the Rainbow - Israel &quot;IZ&quot; Kamakawiwoʻole" rel=" spf-prefetch nofollow" data-visibility-tracking="CCcQpDAYCCITCLPAoLuumtoCFV3afgoddTQHpij4HUDS_tik9rWxq1c=">
  <span dir="ltr" class="title" aria-describedby="description-id-557686">
    OFFICIAL Somewhere over the Rainbow - Israel "IZ" Kamakawiwoʻole
  </span>
  <span class="accessible-description" id="description-id-557686">
     - Duration: 3:48.
  </span>
  <span class="stat attribution"><span class="">Mountain Apple Company Inc</span></span>
  <span class="stat view-count">468,050,439 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=V1bFr2SWP1I" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCcQpDAYCCITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCcQpDAYCCITCLPAoLuumtoCFV3afgoddTQHpij4HUDS_tik9rWxq1c=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="V1bFr2SWP1I"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/V1bFr2SWP1I/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLCIIDk8fCaoADRqo1q9LEebNCWJSg"><span class="video-time">3:48</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=PIb6AZdTr-A" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCYQpDAYCSITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Cyndi Lauper - Girls Just Want To Have Fun (Official Video)" rel=" spf-prefetch nofollow" data-visibility-tracking="CCYQpDAYCSITCLPAoLuumtoCFV3afgoddTQHpij4HUDg3866mcC-wzw=">
  <span dir="ltr" class="title" aria-describedby="description-id-231927">
    Cyndi Lauper - Girls Just Want To Have Fun (Official Video)
  </span>
  <span class="accessible-description" id="description-id-231927">
     - Duration: 4:26.
  </span>
  <span class="stat attribution"><span class="">CyndiLauperVEVO</span></span>
  <span class="stat view-count">534,129,542 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=PIb6AZdTr-A" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCYQpDAYCSITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCYQpDAYCSITCLPAoLuumtoCFV3afgoddTQHpij4HUDg3866mcC-wzw=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="PIb6AZdTr-A"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/PIb6AZdTr-A/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLBGF30lRfAaHE6BwcKZfIKLQCHrSw"><span class="video-time">4:26</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=eH3giaIzONA" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCUQpDAYCiITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Whitney Houston - I Wanna Dance With Somebody" rel=" spf-prefetch nofollow" data-visibility-tracking="CCUQpDAYCiITCLPAoLuumtoCFV3afgoddTQHpij4HUDQ8cyRmpH4vng=">
  <span dir="ltr" class="title" aria-describedby="description-id-424609">
    Whitney Houston - I Wanna Dance With Somebody
  </span>
  <span class="accessible-description" id="description-id-424609">
     - Duration: 5:15.
  </span>
  <span class="stat attribution"><span class="">whitneyhoustonVEVO</span></span>
  <span class="stat view-count">111,056,251 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=eH3giaIzONA" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCUQpDAYCiITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCUQpDAYCiITCLPAoLuumtoCFV3afgoddTQHpij4HUDQ8cyRmpH4vng=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="eH3giaIzONA"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/eH3giaIzONA/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLDgiqH5fcygxeUyeHeBR9mgTuSgUg"><span class="video-time">5:15</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=Zi_XLOBDo_Y" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCQQpDAYCyITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Michael Jackson - Billie Jean (Official Video)" rel=" spf-prefetch nofollow" data-visibility-tracking="CCQQpDAYCyITCLPAoLuumtoCFV3afgoddTQHpij4HUD2x46CzuX1l2Y=">
  <span dir="ltr" class="title" aria-describedby="description-id-289394">
    Michael Jackson - Billie Jean (Official Video)
  </span>
  <span class="accessible-description" id="description-id-289394">
     - Duration: 4:56.
  </span>
  <span class="stat attribution"><span class="">michaeljacksonVEVO</span></span>
  <span class="stat view-count">400,502,157 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=Zi_XLOBDo_Y" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCQQpDAYCyITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCQQpDAYCyITCLPAoLuumtoCFV3afgoddTQHpij4HUD2x46CzuX1l2Y=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="Zi_XLOBDo_Y"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/Zi_XLOBDo_Y/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLDGccPK3S3jpLtnoRnU23gT-dNM5g"><span class="video-time">4:56</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=4fndeDfaWCg" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCMQpDAYDCITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Backstreet Boys - I Want It That Way" rel=" spf-prefetch nofollow" data-visibility-tracking="CCMQpDAYDCITCLPAoLuumtoCFV3afgoddTQHpij4HUCosOm-g6_3_OEB">
  <span dir="ltr" class="title" aria-describedby="description-id-794781">
    Backstreet Boys - I Want It That Way
  </span>
  <span class="accessible-description" id="description-id-794781">
     - Duration: 3:40.
  </span>
  <span class="stat attribution"><span class="">Backstreet Boys</span></span>
  <span class="stat view-count">441,332,730 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=4fndeDfaWCg" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCMQpDAYDCITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCMQpDAYDCITCLPAoLuumtoCFV3afgoddTQHpij4HUCosOm-g6_3_OEB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="4fndeDfaWCg"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/4fndeDfaWCg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLBDFc1Wy-4gOPj698kspzVo8TewJg"><span class="video-time">3:40</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=rY0WxgSXdEE" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCIQpDAYDSITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Queen - Another One Bites the Dust (Official Video)" rel=" spf-prefetch nofollow" data-visibility-tracking="CCIQpDAYDSITCLPAoLuumtoCFV3afgoddTQHpij4HUDB6N2k4NjFxq0B">
  <span dir="ltr" class="title" aria-describedby="description-id-639467">
    Queen - Another One Bites the Dust (Official Video)
  </span>
  <span class="accessible-description" id="description-id-639467">
     - Duration: 3:43.
  </span>
  <span class="stat attribution"><span class="">Queen Official</span></span>
  <span class="stat view-count">182,717,728 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=rY0WxgSXdEE" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCIQpDAYDSITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCIQpDAYDSITCLPAoLuumtoCFV3afgoddTQHpij4HUDB6N2k4NjFxq0B" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="rY0WxgSXdEE"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/rY0WxgSXdEE/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLDun2H7eP23mREBwPNYWCPG9i66Ng"><span class="video-time">3:43</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=fJ9rUzIMcZQ" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCEQpDAYDiITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Queen - Bohemian Rhapsody (Official Video)" rel=" spf-prefetch nofollow" data-visibility-tracking="CCEQpDAYDiITCLPAoLuumtoCFV3afgoddTQHpij4HUCU47GQs-raz3w=">
  <span dir="ltr" class="title" aria-describedby="description-id-651505">
    Queen - Bohemian Rhapsody (Official Video)
  </span>
  <span class="accessible-description" id="description-id-651505">
     - Duration: 6:07.
  </span>
  <span class="stat attribution"><span class="">Queen Official</span></span>
  <span class="stat view-count">521,616,363 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=fJ9rUzIMcZQ" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCEQpDAYDiITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCEQpDAYDiITCLPAoLuumtoCFV3afgoddTQHpij4HUCU47GQs-raz3w=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="fJ9rUzIMcZQ"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLBvxyTxhdmz_MRvSZRYP9QZkqXrUQ"><span class="video-time">6:07</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=JmcA9LIIXWw" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CCAQpDAYDyITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Culture Club - Karma Chameleon" rel=" spf-prefetch nofollow" data-visibility-tracking="CCAQpDAYDyITCLPAoLuumtoCFV3afgoddTQHpij4HUDsuqGQy57AsyY=">
  <span dir="ltr" class="title" aria-describedby="description-id-741191">
    Culture Club - Karma Chameleon
  </span>
  <span class="accessible-description" id="description-id-741191">
     - Duration: 3:56.
  </span>
  <span class="stat attribution"><span class="">CultureClubVEVO</span></span>
  <span class="stat view-count">330,920,565 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=JmcA9LIIXWw" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CCAQpDAYDyITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CCAQpDAYDyITCLPAoLuumtoCFV3afgoddTQHpij4HUDsuqGQy57AsyY=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="JmcA9LIIXWw"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/JmcA9LIIXWw/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLCslxLRg-cdUSqAOo8hZy2xAV1h4A"><span class="video-time">3:56</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=9jK-NcRmVcw" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CB8QpDAYECITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Europe - The Final Countdown (Official Video)" rel=" spf-prefetch nofollow" data-visibility-tracking="CB8QpDAYECITCLPAoLuumtoCFV3afgoddTQHpij4HUDMq5mj3MavmfYB">
  <span dir="ltr" class="title" aria-describedby="description-id-876630">
    Europe - The Final Countdown (Official Video)
  </span>
  <span class="accessible-description" id="description-id-876630">
     - Duration: 4:56.
  </span>
  <span class="stat attribution"><span class="">EuropeVEVO</span></span>
  <span class="stat view-count">444,462,265 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=9jK-NcRmVcw" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CB8QpDAYECITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CB8QpDAYECITCLPAoLuumtoCFV3afgoddTQHpij4HUDMq5mj3MavmfYB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="9jK-NcRmVcw"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/9jK-NcRmVcw/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLBOBOvxxY6gWFyje6Mt4vUi9Vo_yQ"><span class="video-time">4:56</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=PGNiXGX2nLU" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CB4QpDAYESITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Dead Or Alive - You Spin Me Round (Like a Record)" rel=" spf-prefetch nofollow" data-visibility-tracking="CB4QpDAYESITCLPAoLuumtoCFV3afgoddTQHpij4HUC1udqvxsvYsTw=">
  <span dir="ltr" class="title" aria-describedby="description-id-396476">
    Dead Or Alive - You Spin Me Round (Like a Record)
  </span>
  <span class="accessible-description" id="description-id-396476">
     - Duration: 3:17.
  </span>
  <span class="stat attribution"><span class="">DeadOrAliveVEVO</span></span>
  <span class="stat view-count">81,575,642 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=PGNiXGX2nLU" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CB4QpDAYESITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CB4QpDAYESITCLPAoLuumtoCFV3afgoddTQHpij4HUC1udqvxsvYsTw=" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="PGNiXGX2nLU"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/PGNiXGX2nLU/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLB580GyOglCLT4KU5ff5bymxbG76g"><span class="video-time">3:17</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=qeMFqkcPYcg" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CB0QpDAYEiITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Eurythmics - Sweet Dreams (Are Made Of This) (Official Video)" rel=" spf-prefetch nofollow" data-visibility-tracking="CB0QpDAYEiITCLPAoLuumtoCFV3afgoddTQHpij4HUDIw724pLXB8akB">
  <span dir="ltr" class="title" aria-describedby="description-id-823355">
    Eurythmics - Sweet Dreams (Are Made Of This) (Official Video)
  </span>
  <span class="accessible-description" id="description-id-823355">
     - Duration: 3:35.
  </span>
  <span class="stat attribution"><span class="">EurythmicsVEVO</span></span>
  <span class="stat view-count">204,987,134 views</span>
</a>
  </div>
  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=qeMFqkcPYcg" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CB0QpDAYEiITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CB0QpDAYEiITCLPAoLuumtoCFV3afgoddTQHpij4HUDIw724pLXB8akB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="qeMFqkcPYcg"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/qeMFqkcPYcg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLAZ08AiptkLILh-SIZWc-Tr-oNS1A"><span class="video-time">3:35</span></span></a>

  </div>

</li><li class="video-list-item related-list-item  show-video-time related-list-item-compact-video">

    <div class="content-wrapper">
    <a href="https://www.youtube.com/watch?v=lDK9QqIzhwk" class=" content-link spf-link  yt-uix-sessionlink      spf-link " data-sessionlink="itct=CBwQpDAYEyITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" title="Bon Jovi - Livin' On A Prayer" rel=" spf-prefetch nofollow" data-visibility-tracking="CBwQpDAYEyITCLPAoLuumtoCFV3afgoddTQHpij4HUCJjs6RqqivmZQB">
  <span dir="ltr" class="title" aria-describedby="description-id-395191">
    Bon Jovi - Livin' On A Prayer
  </span>
  <span class="accessible-description" id="description-id-395191">
     - Duration: 4:09.
  </span>
  <span class="stat attribution"><span class="">BonJoviVEVO</span></span>
  <span class="stat view-count">427,772,622 views</span>
</a>
  </div>

  <div class="thumb-wrapper">

    <a href="https://www.youtube.com/watch?v=lDK9QqIzhwk" class="thumb-link spf-link yt-uix-sessionlink" data-sessionlink="itct=CBwQpDAYEyITCLPAoLuumtoCFV3afgoddTQHpij4HTIHcmVsYXRlZEjEu4GtvZiOhnU" rel=" spf-prefetch nofollow" tabindex="-1" data-visibility-tracking="CBwQpDAYEyITCLPAoLuumtoCFV3afgoddTQHpij4HUCJjs6RqqivmZQB" aria-hidden="true"><span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related" tabindex="0" data-vid="lDK9QqIzhwk"><img alt="" aria-hidden="true" width="168" style="top: 0px" height="94" src="https://i.ytimg.com/vi/lDK9QqIzhwk/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLAMcrYeC56yRDEu4dl8THA6a9TG1A"><span class="video-time">4:09</span></span></a>

  </div>

</li>
                <div id="watch-more-related" class="hid">
    <li id="watch-more-related-loading">
Loading more suggestions...
    </li>
  </div>
  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander" type="button" onclick=";return false;" id="watch-more-related-button" data-button-action="yt.www.watch.related.loadMore" data-continuation="CBQSJhILZFF3NHc5V2dYY1HAAQDIAQDgAQGiAg0o____________AUAAGAAq0QEI3u7ztte63Zp2COTB1M2NrNKG6AEI4NSkpfC0hvvIAQiw982Z4L2GxKQBCInD9M7d3s7mGgim0-bejfGGmhUIlqaEt8D3rPwjCO2DoYeFqtyLoQEI0v7YpPa1satXCODfzrqZwL7DPAjQ8cyRmpH4vngI9seOgs7l9ZdmCKiw6b6Dr_f84QEIwejdpODYxcatAQiU47GQs-raz3wI7LqhkMuewLMmCMyrmaPcxq-Z9gEItbnar8bL2LE8CMjDvbiktcHxqQEIiY7Okaqor5mUAQ%3D%3D"><span class="yt-uix-button-content">Show more</span></button>

      </ul>
    </div>
  </div>

    </div>
  </div>

      </div>`];
    }
    catch(err) {
        var variable = "0";
    }
}

        //function injectVideoShelfTemplate() {
    //document.getElementById("secondary").outerHTML = document.getElementById("related").outerHTML + videoShelf[0];
    //document.getElementById("watch7-sidebar").outerHTML = document.getElementById("watch7-sidebar").outerHTML + videoShelf[1];
    //injectVideoShelfInfo();
//}

//var checkVideoShelfExist = setInterval(function() {
   //if (document.getElementById('related')) {
      //clearInterval(checkVideoShelfExist);
      //injectVideoShelfTemplate();
   //}
//}, 400);

//function injectVideoShelfInfo() {
    // For some reason, this doesn't work correctly if only ran once, hence the loop.
    //var i;
//for (i = 0; i < 1; i++) {
        //document.getElementsByClassName("content-wrapper")[0].children[0].setAttribute("href",  document.getElementsByClassName("style-scope ytd-watch-next-secondary-results-renderer")[0].children[0].children[0].children[0].children[0].children[0].getAttribute("href")); // viewcount
        //document.getElementsByClassName("content-wrapper")[0].children[0].setAttribute("title", document.getElementById("related").children[1].children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[1].innerHTML);
        //document.getElementsByClassName("content-wrapper")[0].children[1].innerHTML = document.getElementsByClassName("content-wrapper")[0].children[1].innerHTML.replace("videoonetitleplaceholder", document.getElementById("related").children[1].children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[1].innerHTML);
        //document.getElementsByClassName("content-wrapper")[0].children[2].innerHTML = document.getElementsByClassName("content-wrapper")[0].children[2].innerHTML.replace("videoonedurationattributeplaceholder", document.getElementById("related").children[1].children[1].children[0].children[0].children[0].children[0].children[1].children[0].children[1].innerHTML);
        //document.getElementsByClassName("content-wrapper")[0].children[3].innerHTML = document.getElementsByClassName("content-wrapper")[0].children[3].innerHTML.replace("videoonecreatorplaceholder", document.getElementById("related").children[1].children[1].children[0].children[0].children[1].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerHTML);

        //document.getElementById("watch-header").innerHTML = document.getElementById("watch-header").innerHTML.replace("videotitleplaceholder", document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].innerText); // video name
        //document.getElementById("eow-title").innerHTML = document.getElementById("eow-title").innerHTML.replace("videotitleplaceholder", document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].innerText); //title fix
//        //document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("uploaddateplaceholder", document.querySelector('#info-text #info-strings yt-formatted-string').innerHTML); //publication date
        //if (window.location.href.search("youtube.com/watch?") != "-1") {
        //document.getElementById("channel-name-stuff").innerHTML = document.getElementById("channel-name-stuff").innerHTML.replace("channelnameplaceholder", document.getElementsByClassName("style-scope ytd-video-owner-renderer")[2].children[0].children[0].children[0].children[0].children[0].innerHTML); //channel name
        //}
        //document.getElementById("subscriber-watch-count").innerHTML = document.getElementById("subscriber-watch-count").innerHTML.replace("subscribecountplaceholder", document.getElementById("owner-sub-count").innerHTML.replace(" subscribers", "")); //subscriber count
        //document.getElementById("action-panel-details").innerHTML = document.getElementById("action-panel-details").innerHTML.replace("descriptionplaceholder", document.getElementsByClassName("content style-scope ytd-video-secondary-info-renderer")[0].innerHTML); //description
        //document.getElementById("eow-description").innerHTML = document.getElementById("eow-description").innerHTML.replace(new RegExp('\r?\n','g'), '<br />'); //description fix
                    //if (document.getElementById("menu-container").children[0].children[0].children[0].children[0].children[0].children[1].ariaLabel == undefined) {
            //document.getElementById("like-count").innerHTML = document.getElementById("like-count").innerHTML.replace("likecountplaceholder", "");
            //document.getElementById("dislike-count").innerHTML = document.getElementById("dislike-count").innerHTML.replace("dislikecountplaceholder", "");
        //} else {
        //document.getElementById("like-count").innerHTML = document.getElementById("like-count").innerHTML.replace("likecountplaceholder", document.getElementById("menu-container").children[0].children[0].children[0].children[0].children[0].children[1].ariaLabel.replace(" likes", "")); //like count
        //document.getElementById("dislike-count").innerHTML = document.getElementById("dislike-count").innerHTML.replace("dislikecountplaceholder", document.getElementById("menu-container").children[0].children[0].children[0].children[1].children[0].children[1].ariaLabel.replace(" dislikes", "")); //dislike count
        //}
                    // minor i18n fixes
        //document.getElementById("subscriber-watch-count").innerHTML = document.getElementById("subscriber-watch-count").innerHTML.replace("1 subscriber", "1"); // subscriber count
        //document.getElementById("subscriber-watch-count").innerHTML = document.getElementById("subscriber-watch-count").innerHTML.replace("No subscribers", "0");
        //document.getElementById("like-count").innerHTML = document.getElementById("like-count").innerHTML.replace("1 like", "1");
        //document.getElementById("like-count").innerHTML = document.getElementById("like-count").innerHTML.replace("No ", "0");
        //document.getElementById("dislike-count").innerHTML = document.getElementById("dislike-count").innerHTML.replace("1 dislike", "1");
        //document.getElementById("dislike-count").innerHTML = document.getElementById("dislike-count").innerHTML.replace("No ", "0");




//}
        //}
//}
    //catch(err) {
        //var variable = 0;
    //}
//}