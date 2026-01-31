// ==UserScript==
// @name         MP3 Player Pro
// @namespace    https://i-ali.ir/
// @version      1.0.0
// @license      GNU AGPLv3
// @description  A lightweight browser-based audio controller that lets you drag-and-drop music files into any tab for instant playback, featuring synchronized lyrics with real-time multi-language translations.
// @author       AliAshori
// @icon         data:image/png;base64,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
// @match        file:///*.mp3
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// @connect      *
// @resource     JQUERY https://code.jquery.com/jquery-3.6.0.min.js
// @resource     JQUERYUI https://code.jquery.com/ui/1.13.2/jquery-ui.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove autoplay and initialize app
    function removeAutoplay() {
        // Remove autoplay from any video/audio elements
        const mediaElements = document.querySelectorAll('video, audio');
        mediaElements.forEach(el => {
            el.removeAttribute('autoplay');
            el.pause();
        });
    }

    // Delay initialization
    setTimeout(removeAutoplay, 20);

    // Inject jQuery
    const jquery = document.createElement('script');
    jquery.textContent = GM_getResourceText('JQUERY');
    document.head.appendChild(jquery);

    // Inject jQuery UI after jQuery
    const jqueryUI = document.createElement('script');
    jqueryUI.textContent = GM_getResourceText('JQUERYUI');
    document.head.appendChild(jqueryUI);

    // Wait for the page to load
    $(document).ready(function() {
        // Create the viewer interface
        const html = `
    <div id="mp3ViewerContainer" style="
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 8px;
        right: 8px;
        left: 8px;
        bottom: auto;
        width: -moz-available;
        background: #0f0f0f;
        border: 1px solid #303030;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        padding: 10px;
        z-index: 9999;
        font-family: Ink Free, sans-serif;
        text-align: center;
    ">
        <!-- Change file input to allow multiple files -->
        <input type="file" id="fileInput" accept="audio/*,audio/mpeg,.mp3,.m4a,.flac,.wav,.ogg,.aac,.webm,.opus" style="display: none;" multiple />

                <h3 style="margin-top: 0; color: #666;">🎵 MP3 Player Pro</h3>
                <div id="dropArea" style="
                    background: #181818;
                    border: 2px dashed #797979;
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    margin-bottom: 15px;
                    align-content: center;
                    cursor: pointer;
                    transition: all 0.3s;
                ">
                    <p style="margin: 0; color: #797979; font-size: 18px; text-transform: capitalize;">Drop MP3 file here or click to browse</p>
                </div>

                <div id="status" style="
                    text-align: center;
                    margin: 6px 0;
                    min-height: 20px;
                    color: #666;
                    font-size: 16px;
                    text-transform: capitalize;
                ">Ready to load MP3 files</div>

                <div id="mainPlayerContainer" style="display: none;">
                    <audio id="audioPlayer" controls style="width: 100%; margin-bottom: 8px;" autoplay=""></audio>

                    <!-- Add Next/Previous buttons in your HTML (inside #mainPlayerContainer, after <audio ...>) -->
                    <div style="margin-bottom:10px;">
                        <button id="prevBtn" style="margin-right:10px;">⏮️ Prev</button>
                        <button id="playBtn" style="margin-right:10px;">▶️ Play</button>
                        <button id="nextBtn" style="margin-right:10px;">⏭️ Next</button>
                        <button id="loopBtn" style="margin-right:10px;">🔁 Loop: Off</button>
                        <button id="repeatBtn" style="margin-right:10px;">🔃 Repeat: Off</button>
                        <button id="shuffleBtn" style="margin-right:10px;">🔀 Auto Shuffle</button>
                    </div>
                </div>

                <div id="playerContainer" style="display: none;">

                    <div id="metadata" style="
                        height: 100%;
                        background: #272727;
                        padding: 10px 15px 8px 15px;
                        border-radius: 12px;
                        /*display: block ruby;
                        display: inline-block;*/
                        float: left;
                    ">
                        <img id="albumArt" style="
                            width: 320px;
                            max-width: 100%;
                            max-height: 100%;
                            display: block;
                            /*margin: 0 auto 15px;*/
                            border-radius: 12px;
                            float: left;
                            display: none;
                        " />
                        <div id="trackInfo" style="
                        display: inline-block;
                        position: relative;
                        text-align: left;
                        left: 6px;
                        bottom: 2px;
                        font-size: 22px;
                        float: left;
                        color: #e3e3e3;
                        line-height: 1.8;
                        align-self: stretch;
                        align-content: center;
                        padding-left: 18px;
                        overflow: scroll;
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
                        font-weight: bold;
                        "></div>
                    </div>

                    <!-- TABS: Playlist + Lyrics(Translation) -->
                    <div id="tabsWrapper" style="background:#222; margin-top:0; text-align:left;">
                        <div id="tabsHeader" style="display:flex; gap:0; margin-bottom:8px;">
                            <button id="tabPlaylist" class="tabBtn" style="padding:5px 32px; background:#404040; border:none; color:#fff; border-radius:0;">🎶 Playlist</button>
                            <button id="tabTranslation" class="tabBtn" style="padding:5px 32px; background:#303030; border:none; color:#fff; border-radius:0;">📝 Lyrics</button>
                            <button id="tabSOON" class="tabBtn" style="padding:5px 32px; background:#303030; border:none; color:#fff; border-radius:0;">🔮 SOON</button>
                        </div>

                        <!-- Playlist pane (kept id for existing logic) -->
                        <div id="playlistContainer" style="
                        margin-top:0;
                        text-align:left;
                        overflow-y:auto;
                        background:#222;
                        border-radius:12px;
                        padding:10px;
                        overflow-x: hidden;
                        ">
                            <div id="dropToPlaylist" style="
                                background: #181818;
                                border: 2px dashed #444;
                                border-radius: 5px;
                                padding: 10px;
                                text-align: center;
                                margin-bottom: 15px;
                                color: #888;
                                cursor: pointer;
                                transition: 0.3s;
                                text-transform: capitalize;
                            ">
                                Drop MP3 files here to add to playlist
                            </div>

                            <!-- Add this search box -->
                            <input type="text" id="playlistSearch" placeholder="Search playlist..." style="width:98%;margin-bottom:8px;padding:4px 8px;border-radius:4px;border:1px solid #444;background:#181818;color:#ccc;font-size:15px;">

                            <div style="color:#aaa; margin-bottom:5px;">
                                <button id="savePlaylistBtn" style="padding: 2px 14px; float: right;">💾 Save Playlist</button>
                                <input type="file" id="loadPlaylistInput" accept=".json" style="display:none;">
                                <button id="loadPlaylistBtn" style="padding: 2px 14px; float: right;">📂 Load Playlist</button>
                            </div>

                            <div style="color:#aaa; margin-bottom:8px;">🎶Playlist:</div>
                            <ul id="playlist" style="list-style:none; padding:0; margin:0;"></ul>
                        </div>

                        <!-- Translation pane (Lyrics OR Translation Music) -->
                        <div id="translationContainer" style="display:none; overflow-y:auto; background:#222; border-radius:5px; padding:8px;">
                            <div style="margin-bottom:8px; color: #bbb; font-family: sans-serif;">
                                <button id="fetchLyricsBtn" style="padding:6px 12px; background:#404040; color:#fff; border:none; border-radius:4px; cursor:pointer; font-family: Ink Free, sans-serif;">🎙️ Fetch Lyrics</button>
                                <button id="translationSettingsBtn" title="Lyrics Settings" style="padding:6px 6px; background:#404040; color:#fff; border:none; border-radius:4px; cursor:pointer; font-family: Ink Free, sans-serif;margin-left: 6px;">⚙️</button>
                                <button id="translationLyricsBtn" style="padding:6px 6px; background:#404040; color:#fff; border:none; border-radius:4px; cursor:pointer; font-family: Ink Free, sans-serif;margin-left: 4px;">🌐</button>

                                <span style="margin: 0 10px;">|</span>

                                <!-- Manual search will be inserted here by JavaScript -->
                                <button id="manualLyricsSearchBtn" style="margin: 0 -10px 0 0; padding: 4.5px 6px 6.5px 0px; background: #555; color: #fff; border: none; border-radius: 3px; cursor: pointer; font-family: Ink Free, sans-serif;">🔎</button>
                                <input type="text" id="manualLyricsInput"
                                       placeholder="Enter artist & song..."
                                       style="flex:1; padding:6px; background:#333; color:#fff; border:1px solid #555; border-radius:4px; outline:none; font-size:13px; font-family: Ink Free, sans-serif;">

                                <span id="lyricsStatus" style="color:#aaa; font-size:14px; margin-left:8px; font-family: Ink Free, sans-serif;">No lyrics loaded</span>

                                <!-- Clear Lyrics -->
                                <button id="clearLyricsBtn" style="padding:6px 6px; background:#553030; color:#fff; border:none; border-radius:4px; cursor:pointer; float:right;">🗑️</button>
                            </div>

                            <div id="lyricsContainer" style="overflow-y:auto; padding:6px 0; background:#151515; border-radius:6px; border:1px solid #2a2a2a; color:#ddd; font-size:14px; line-height:1.6;">
                                <div id="lyricsInner" style="text-align:center; white-space:pre-wrap; line-height:1.3;">No lyrics to display</div>
                            </div>

                        </div>

                    </div>

                </div>

                <button id="closeBtn" style="
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    background: none;
                    border: none;
                    font-size: 16px;
                    cursor: pointer;
                    color: #999;
                ">×</button>
            </div>

<style>
#mainPlayerContainer audio {
    width: 80% !important;
    align-self: center;
    align-content: center;
}
@media (max-width: 991px) {
  #dropArea {
    padding: 80px !important;
  }
  #metadata #albumArt {
    width: 380px !important;
  }
  #playerContainer #metadata {
    flex: 1 1 40% !important;
    height: 46% !important;
  }
  /*#playerContainer #playlistContainer {
    max-height:500px !important;
  }*/
  #trackInfo {
    height: 450px !important;
    align-self: center !important;
  }
}
@media (min-width: 1920px) {
  #metadata #albumArt {
    width: 380px !important; /* Full width of the viewport */
  }
  /*#playerContainer #playlistContainer {
    max-height:380px !important;
  }*/
}
@media (min-width: 2120px) {
  #metadata #albumArt {
    width: 500px !important; /* Full width of the viewport */
  }
  #dropArea {
    height: 120px !important;
  }
  /*#playerContainer #playlistContainer {
    max-height:500px !important;
  }*/
}
/* Insert the following CSS into the existing <style> block (or append to it) */
@media (min-width: 901px) {
  /* Make player area two columns: metadata left, tabs right */
  #playerContainer {
    display: flex;
    flex-direction: row !important;
    gap: 16px;
    overflow: clip !important;
  }

  /* Left column: metadata */
  #playerContainer #metadata {
    flex: 0 0 50%;
    max-width: 50%;
    min-width: 280px;
    box-sizing: border-box;
    float: none !important;
    margin-right: 0;
    margin-bottom: 0;
  }

  /* Ensure album art & trackInfo stack nicely inside left column */
  #playerContainer #metadata #albumArt {
    float: none !important;
    display: block;
    margin: 0;
    width: 100%;
    max-width: 380px;
    height: auto;
    object-fit: cover;
    align-content: center;
    align-self: center;
  }
  #playerContainer #metadata #trackInfo {
    display: block;
    width: 100%;
    font-size: 18px;
  }

  /* Right column: tabs and playlist/lyrics */
  #tabsWrapper {
    flex: 1 1 62% !important;
    max-width: 62%;
    min-width: 360px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }

  /* Make tabs panes fill right column and scroll internally */
  #tabsWrapper #playlistContainer,
  #tabsWrapper #translationContainer {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    padding-left: 8px;
  }

  /* Slight visual tweaks to keep controls aligned */
  #mainPlayerContainer audio {
    width: 80% !important;
  }

  /* Prevent dropArea / header from stretching awkwardly inside row layout */
  #mp3ViewerContainer > h3,
  #mp3ViewerContainer > #dropArea,
  #mp3ViewerContainer > #status {
    flex: 0 0 auto;
  }

  #lyricsStatus {
    display: inline-block;
    width: auto;
  }

}

#playerContainer #metadata {
    display: flex !important;
    margin-bottom: 10px !important;
    border: 2px solid #515151;
}
#mp3ViewerContainer {
    transform: translate(0, 0);
    will-change: transform;
    /*user-select: none;*/
}
#prevBtn, #playBtn, #nextBtn, #loopBtn, #repeatBtn, #shuffleBtn, #savePlaylistBtn, #loadPlaylistBtn {
  font-family: Ink Free, sans-serif;
  background-color: #404040;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 4px 2px;
  cursor: pointer;
}
/* Button hover animation */
#prevBtn:hover::before, #playBtn:hover::before, #nextBtn:hover::before,
#loopBtn:hover::before, #repeatBtn:hover::before, #shuffleBtn:hover::before, #savePlaylistBtn::before, #loadPlaylistBtn::before {
    left: 100%;
}

/* Button hover state */
#prevBtn:hover, #playBtn:hover, #nextBtn:hover,
#loopBtn:hover, #repeatBtn:hover, #shuffleBtn:hover, #savePlaylistBtn:hover, #loadPlaylistBtn:hover, #fetchLyricsBtn:hover, #translationSettingsBtn:hover, #translationLyricsBtn:hover, #closeLyricsModal:hover, #clearLyricsBtn:hover, #translationSettingsCancel:hover, #translationSettingsSave:hover  {
    background-color: #505050;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: all 0.5s !important;
}

#playlistSearch {
  font-family: Ink Free, sans-serif;
  outline: none;
}
#playlistSearch:focus {
  border-color: #09508e !important;
}
#playlist li .removeTrackBtn {
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  color: #ff4c4c;
  border: none;
  font-size: 14px;
  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}
#playlist li .removeTrackBtn:hover {
    opacity: 1;
    color: #ff0000;
}
#metadata #albumArt {
    transition: all 0.5s ease;
    /*filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.4)) contrast(1.1);*/
    cursor: move;
    object-fit: cover;
    align-content: center;
    align-self: center;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
}
#albumArt:hover {
  transform: rotate(-3deg) scale(0.95);
  /*filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.4)) contrast(1.8) blur(1px) !important;*/
}
/*
#metadata #trackInfo {
  transition: all 0.5s ease;
}
#metadata #trackInfo:hover {
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.4)) brightness(1.8) !important;
  transform: rotate(3deg) scale(0.95);
}
*/
#trackInfo div {
  transition: all 0.5s ease;
}
#trackInfo div:hover {
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.4)) brightness(1.8) !important;
  transform: rotate(3deg) scale(0.95);
}

/* Add these CSS rules at the end of the existing <style> block (or merge into it) */
#tabsHeader {
    display: flex;
    gap: 0;
    margin: 0; /* pull header to container edges */
    background: linear-gradient(180deg, #0e0e0e, #151515);
    border-radius: 14px 14px 0 0;
    border: 1px solid #303030;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
#tabPlaylist {
    border-radius: 12px 0 0 0 !important;
}
#tabSOON {
    border-radius: 0 12px 0 0 !important;
    border-right: none !important;
}
.tabBtn {
    width: calc(100% / 3);
    font-family: Ink Free, sans-serif;
    background: transparent;
    color: #c9c9c9;
    border: none;
    border-right: solid #535353 1px !important;
    padding: 0;
    border-radius: 0;
    cursor: pointer;
    transition: transform .16s ease, box-shadow .16s ease, background .16s ease;
    font-size: 14px;
    outline: none;
}
.tabBtn:hover {
    background: #262626 !important;
    color: #e5e5e5 !important;
    transform: translateY(0px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.35);
}
.tabBtn.active {
    background: #003360 !important;
    color: #fff;
    transform: translateY(0px);
}
/* Small bottom indicator on active tab */
.tabBtn.active::after {
  content: '';
  display: block;
  position: absolute;
  height: 3px;
  border-radius: 3px;
  margin-top: 6px;
  width: 78%;
  background: linear-gradient(90deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05));
  bottom: 0;
  left: calc(100% / 8);
}
/* Make playlist/translation panes align nicely under the header */
#playlistContainer, #translationContainer {
    margin-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding-top: 10px;
}
/* Make playlist/translation stick to bottom and be scrollable */
#mainPlayerContainer {
    /* make player a column flex so tabs/panes can expand and scroll */
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
}
#playerContainer {
    /* make player a column flex so tabs/panes can expand and scroll */
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0; /* important: allow children to shrink and scroll */
    overflow: hidden;
}
#tabsWrapper {
    flex: 1 1 100%;
    margin-top: auto;      /* push tabs area to bottom of the viewer */
    display: flex;
    flex-direction: column;
    min-height: 0;
    border-radius: 12px;
}
#tabsHeader {
    flex: 0 0 auto;
}
#playlistContainer, #translationContainer {
    /* let panes fill remaining space and scroll internally */
    flex: 1 1 auto;
    min-height: 0; /* critical for overflow to work inside flex */
    overflow-y: auto;
    max-height: none;
}
/* ensure player/metadata don't expand unexpectedly */
/* (previous rule replaced by new #playerContainer settings) */
#mp3ViewerContainer > h3,
#mp3ViewerContainer > #dropArea,
#mp3ViewerContainer > #status {
    flex: 0 0 auto;
}

</style>
        `;

        // Add the HTML to the page
        $('body').append(html);

        // --- App font control: default + inject overriding CSS that can be changed via settings ---
       let appFont = '"Ink Free", "Segoe UI", Roboto, Arial, sans-serif';
       if (!$('#appFontStyles').length) {
           $('head').append(`
               <style id="appFontStyles">
                   /* Force the selected font across the whole UI (override inline styles) */
                   #mp3ViewerContainer, #mp3ViewerContainer * {
                       font-family: var(--app-font-family, "Ink Free, sans-serif") !important;
                   }
               </style>
           `);
       }
       // apply initial font
       try { $('#mp3ViewerContainer').css('--app-font-family', appFont); } catch (e) { /* ignore */ }

        // Get DOM elements
        const $dropArea = $('#dropArea');
        const $fileInput = $('#fileInput');
        const $audioPlayer = $('#audioPlayer');
        const $albumArt = $('#albumArt');
        const $trackInfo = $('#trackInfo');
        const $mainPlayerContainer = $('#mainPlayerContainer');
        const $playerContainer = $('#playerContainer');
        const $status = $('#status');
        const $closeBtn = $('#closeBtn');
        const $viewerContainer = $('#mp3ViewerContainer');

        // New tab elements
        const $tabPlaylist = $('#tabPlaylist');
        const $tabTranslation = $('#tabTranslation');
        const $translationContainer = $('#translationContainer');

        /* Drop area fade/collapse controls: small UI + API to control manually */
        if (!$('#dropAreaFadeStyles').length) {
            $('head').append(`
                <style id="dropAreaFadeStyles">
                    /* Collapsed / faded state */
                    #dropArea {
                        transition: all .30s cubic-bezier(.2,.8,.2,1);
                        position: relative;
                        overflow: visible;
                    }
                    #dropArea.droparea-collapsed {
                        opacity: 1.0;
                        padding: 8px 12px !important;
                        height: auto !important;
                        border-width: 1px !important;
                        box-shadow: none !important;
                    }
                    /* Controls inside drop area */
                    #dropArea .droparea-controls {
                        position: absolute;
                        top: 6px;
                        right: 8px;
                        z-index: 5;
                        display: flex;
                        gap:6px;
                        align-items: center;
                    }
                    #dropArea .droparea-controls button {
                        background: rgba(0,0,0,0.45);
                        color: #ddd;
                        border: 1px solid rgba(255,255,255,0.06);
                        padding: 4px 8px;
                        border-radius: 6px;
                        cursor: pointer;
                        font-size: 12px;
                        font-family: Ink Free, sans-serif;
                    }
                    #dropArea .droparea-controls input[type="range"] {
                        width: 110px;
                        height: 10px;
                        accent-color: #003360;
                        background: rgba(255,255,255,0.04);
                        border-radius: 4px;
                    }
                    /* Small label */
                    #dropArea .droparea-fade-label {
                        color: #bbb;
                        font-size: 12px;
                        margin-left:4px;
                    }
                </style>
            `);
        }

        // Add controls markup if not present
        if ($dropArea.find('.droparea-controls').length === 0) {
            $dropArea.append(`
                <div class="droparea-controls" aria-hidden="false">
                    <button id="addUrlBtn" title="Add URL(s)">🔗Add URL</button>
                    <button id="dropAreaToggle" title="Toggle compact/fade">⇳</button>
                    <input id="dropAreaFadeRange" type="range" min="0" max="100" value="100" title="Fade level (0 = invisible, 100 = opaque)">
                    <span class="droparea-fade-label" id="dropAreaFadeLabel">100%</span>
                </div>
            `);
        }

        const $dropAreaToggle = $('#dropAreaToggle');
        const $dropAreaFadeRange = $('#dropAreaFadeRange');
        const $dropAreaFadeLabel = $('#dropAreaFadeLabel');
        const $addUrlBtn = $('#addUrlBtn');

        // internal state
        let dropAreaCollapsed = false;
        let dropAreaFadeLevel = parseInt($dropAreaFadeRange.val(), 10) / 100.0; // 0..1

        // Apply computed visual state (opacity + compact padding)
        function applyDropAreaVisual(level) {
            // level is 0..1 where 1 = fully opaque/expanded, 0 = fully transparent/minimal
            level = Math.max(0, Math.min(1, level));
            dropAreaFadeLevel = level;

            // Opacity
            $dropArea.css('opacity', String(level));

            // Tweak padding to make the area more compact as it fades
            // keep a minimum padding of 6px, max original ~20-30px
            const basePad = 10; // px minimum
            const maxExtra = 30; // additional px when fully opaque
            const pad = Math.round(basePad + maxExtra * level);
            $dropArea.css('padding', `${pad}px`);

            // toggle class for an overall collapsed styling (for border/box-shadow)
            if (level < 0.5) {
                $dropArea.addClass('droparea-collapsed');
            } else {
                $dropArea.removeClass('droparea-collapsed');
            }

            // update slider label
            $dropAreaFadeLabel.text(Math.round(level * 100) + '%');
        }

        // Public API: set fade level 0..1
        window.setDropAreaFade = function(level) {
            applyDropAreaVisual(Number(level));
        };

        // Public API: toggle collapse (remember current fade level)
        window.toggleDropAreaCollapsed = function() {
            dropAreaCollapsed = !dropAreaCollapsed;
            if (dropAreaCollapsed) {
                // collapse to a compact faded state but preserve last fade setting
                applyDropAreaVisual(0.18);
                $dropAreaFadeRange.val(18);
            } else {
                // restore to last or default
                applyDropAreaVisual(1.0);
                $dropAreaFadeRange.val(100);
            }
        };

        // --- helper to move viewer to bottom (used when adding tracks) ---
        function setViewerBottom(px = 8, animate = true) {
            if (!$viewerContainer || !$viewerContainer.length) return;
            const value = (typeof px === 'number') ? `${px}px` : String(px);
            if (animate && typeof $viewerContainer.animate === 'function') {
                $viewerContainer.stop(true).animate({ bottom: value }, 180);
            } else {
                $viewerContainer.css('bottom', value);
            }
        }

        // Wire UI controls
        $dropAreaToggle.off('click').on('click', function(e) {
            e.stopPropagation();
            window.toggleDropAreaCollapsed();
        });

        // Add URL(s) modal button
        $addUrlBtn.off('click').on('click', function(e) {
            e.stopPropagation();
            showAddUrlModal();
        });

        // Create and show modal to add URL(s)
        function showAddUrlModal() {
            let $modal = $('#addUrlModal');
            if ($modal.length === 0) {
                $modal = $(`
                    <div id="addUrlModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:1000001; align-items:center; justify-content:center;">
                        <div style="max-width:820px; width:92%; margin:16px auto auto auto; background:#222; color:#eee; padding:16px; border-radius:8px;">
                            <h3 style="margin:0 0 8px 0;">Add Track URL(s)</h3>
                            <div style="font-size:13px; color:#bbb; margin-bottom:8px;">
                                Paste one URL or local path per line. Supported schemes: http(s)://, file:/// or Windows paths like C:\path\to\file.mp3
                            </div>
                            <textarea id="addUrlTextarea" style="width:98%; height:160px; background:#111; color:#fff; border:1px solid #444; border-radius:6px; padding:8px;"></textarea>
                            <div style="text-align:right; margin-top:10px;">
                                <button id="addUrlCancel" style="margin-right:8px; padding:6px 12px; background:#555; color:#fff; border:none; border-radius:4px; cursor:pointer;">Cancel</button>
                                <button id="addUrlConfirm" style="padding:6px 12px; background:#0073e6; color:#fff; border:none; border-radius:4px; cursor:pointer;">Add to Playlist</button>
                            </div>
                        </div>
                    </div>
                `);
                $('body').append($modal);

                $('#addUrlCancel').on('click', function() { $('#addUrlModal').hide(); });
                $('#addUrlConfirm').on('click', function() {
                    const text = $('#addUrlTextarea').val() || '';
                    const lines = text.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
                    if (!lines.length) {
                        updateStatus('No URLs provided', 'error');
                        return;
                    }

                    const added = [];
                    lines.forEach(raw => {
                        let src = raw;
                        if (/^[a-zA-Z]:\\/.test(raw)) {
                            src = 'file:///' + raw.replace(/\\/g, '/');
                        } else if (/^\/[^\/]/.test(raw) && !/^https?:\/\//i.test(raw) && !/^file:\/\//i.test(raw)) {
                            src = 'file://' + raw;
                        }

                        let name = raw;
                        try {
                            const u = new URL(src);
                            name = decodeURIComponent(u.pathname.split('/').pop() || u.hostname || raw);
                        } catch (e) {
                            const parts = raw.split(/[\/\\]/);
                            name = parts[parts.length - 1] || raw;
                        }

                        added.push({ name: name, src: src });
                    });

                    // Remember if playlist was empty so we can auto-play the first added URL
                    const wasEmpty = playlist.length === 0;
                    playlist.push(...added);
                    renderPlaylist();
                    updateStatus(`${added.length} URL(s) added to playlist`);
                    setViewerBottom(8);

                    // If playlist was empty before, start playing the first newly added URL
                    if (wasEmpty && playlist.length) {
                        currentTrackIndex = playlist.indexOf(added[0]);
                        if (currentTrackIndex < 0) currentTrackIndex = 0;
                        playTrack(currentTrackIndex);
                    }

                    $('#addUrlModal').hide();
                });
            }
            $('#addUrlTextarea').val('');
            $('#addUrlModal').show();
        }

        $dropAreaFadeRange.off('input').on('input', function(e) {
            const v = parseInt(this.value, 10);
            const level = v / 100.0;
            applyDropAreaVisual(level);
        });

        // initialize to current default
        applyDropAreaVisual(dropAreaFadeLevel);

        // Tab switching logic (use classes so CSS controls appearance)
        function activatePlaylistTab() {
            $('#playlistContainer').show();
            $translationContainer.hide();
            $tabPlaylist.addClass('active').attr('aria-pressed', 'true');
            $tabTranslation.removeClass('active').attr('aria-pressed', 'false');
        }
        function activateTranslationTab() {
            $('#playlistContainer').hide();
            $translationContainer.show();
            $tabTranslation.addClass('active').attr('aria-pressed', 'true');
            $tabPlaylist.removeClass('active').attr('aria-pressed', 'false');
        }
        $tabPlaylist.on('click', activatePlaylistTab);
        $tabTranslation.on('click', activateTranslationTab);
        // default
        activatePlaylistTab();

        // SOON tab alert
        $('#tabSOON').on('click', function() {
            alert('This feature is coming soon!');
        });

        // Set up event listeners
        $dropArea.on('click', function() {
            $fileInput.trigger('click');
        });

        $fileInput.on('change', handleFileSelection);

        $closeBtn.on('click', function() {
            $viewerContainer.remove();
        });

        // Set up drag and drop in dropToPlaylist
        $('#dropToPlaylist').on('click', function() {
            $fileInput.trigger('click');
        });
        $('#playlistContainer').on('dragenter dragover dragleave drop', preventDefaults);
        $('#playlistContainer').on('dragenter dragover', highlightDropToPlaylist);
        $('#playlistContainer').on('dragleave drop', unhighlightDropToPlaylist);
        $('#playlistContainer').on('drop', handlePlaylistDrop);

        // Set up drag and drop
        $(document).on('dragenter dragover dragleave drop', preventDefaults);
        $(document).on('dragenter dragover', highlightDropArea);
        $(document).on('dragleave drop', unhighlightDropArea);
        $(document).on('drop', handleDroppedFiles);

        // Prevent default drag behaviors
        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        // Highlight the drop area
        function highlightDropArea() {
            $dropArea.css({
                'border-color': '#272727',
                'border': '2px dashed rgb(22, 81, 144)',
                'background-color': '#333'
            });
        }
        function highlightDropToPlaylist() {
            $('#dropToPlaylist').css({
                'border-color': '#272727',
                'border': '2px dashed rgb(22, 81, 144)',
                'background-color': '#333'
            });
        }

        // Remove highlight from drop area
        function unhighlightDropArea() {
            $dropArea.css({
                'border-color': '#aaa',
                'background-color': '#181818'
            });
        }
        function unhighlightDropToPlaylist() {
            $('#dropToPlaylist').css({
                'border-color': '#aaa',
                'background-color': '#181818'
            });
        }

        // Handle files selected via file input
        function handleFileSelection(event) {
            const files = Array.from(event.target.files).filter(isMP3File);
            if (!files.length) return;
            playlist = files;
            currentTrackIndex = 0;
            playTrack(currentTrackIndex);

            // after adding a track move the viewer to bottom:8px
            setViewerBottom(8);
        }

        // Handle files dropped onto the page
        function handleDroppedFiles(e) {
            const dt = e.originalEvent.dataTransfer;
            const files = Array.from(dt.files).filter(isMP3File);
            if (files.length > 0) {
                playlist = files;
                currentTrackIndex = 0;
                playTrack(currentTrackIndex);

                // after adding a track move the viewer to bottom:8px
                setViewerBottom(8);
            }
        }
        function handlePlaylistDrop(e) {
            const dt = e.originalEvent.dataTransfer;
            const files = Array.from(dt.files).filter(isMP3File);
            if (files.length > 0) {
                playlist.push(...files);
                renderPlaylist();
                updateStatus(`${files.length} file(s) added to playlist`);

                // after adding a track move the viewer to bottom:8px
                setViewerBottom(8);
            }
        }

        // Check if a file is a supported audio file (keeps backward compatibility)
        function isAudioFile(file) {
            if (!file) return false;
            const name = (file.name || '').toLowerCase();
            const type = (file.type || '').toLowerCase();
            const extensions = ['.mp3', '.m4a', '.mp4', '.flac', '.wav', '.ogg', '.opus', '.aac', '.webm'];
            const extMatch = extensions.some(ext => name.endsWith(ext));
            const mimeMatch = /^audio\/.+/.test(type);
            return mimeMatch || extMatch;
        }

        // Keep old name for compatibility with existing calls
        function isMP3File(file) { return isAudioFile(file); }

        // Update status message
        function updateStatus(message, type = 'info') {
            $status.text(message).css('color', type === 'error' ? '#d9534f' : '#5bc0de');
        }

        // Extract metadata from MP3 file and optionally cache album art for playlist
        function extractMetadata(file, filename, onExtracted) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const tags = parseID3Tags(e.target.result);

                    // Always revoke previous album art URL before creating a new one
                    const prevUrl = playlistAlbumArts.get(file);
                    if (prevUrl) {
                        URL.revokeObjectURL(prevUrl);
                    }

                    if (tags.image && tags.image.data) {
                        const blob = new Blob([tags.image.data], { type: tags.image.format });
                        const url = URL.createObjectURL(blob);
                        playlistAlbumArts.set(file, url);
                    } else {
                        playlistAlbumArts.set(file, null);
                    }

                    // store tags for later (lyrics fetch / display)
                    playlistTags.set(file, tags || {});

                    if (typeof onExtracted === 'function') onExtracted();
                } catch (error) {
                    const prevUrl = playlistAlbumArts.get(file);
                    if (prevUrl) {
                        URL.revokeObjectURL(prevUrl);
                    }
                    playlistAlbumArts.set(file, null);
                    playlistTags.set(file, {});
                    if (typeof onExtracted === 'function') onExtracted();
                }
            };
            reader.onerror = function() {
                const prevUrl = playlistAlbumArts.get(file);
                if (prevUrl) {
                    URL.revokeObjectURL(prevUrl);
                }
                playlistAlbumArts.set(file, null);
                playlistTags.set(file, {});
                if (typeof onExtracted === 'function') onExtracted();
            };
            reader.readAsArrayBuffer(file);
        }

        // --- New: extract metadata for src-only playlist items (remote or file:/// URLs) ---
        async function fetchArrayBufferWithRange(url, rangeHeader) {
            // Try native fetch first (works for CORS-enabled HTTP(S) endpoints)
            try {
                const headers = {};
                if (rangeHeader) headers['Range'] = rangeHeader;
                const resp = await fetch(url, { method: 'GET', cache: 'no-cache', headers: headers });
                // Accept 200 (full) or 206 (partial content)
                if (resp && (resp.ok || resp.status === 206)) {
                    return await resp.arrayBuffer();
                }
            } catch (e) {
                // fetch may fail on file:// or due to CORS
                console.warn('fetch range failed, will try GM_xmlhttpRequest fallback for', url, e);
            }

            // Fallback: use GM_xmlhttpRequest when available (bypasses CORS/file:// issues in userscripts)
            if (typeof GM_xmlhttpRequest === 'function') {
                return new Promise((resolve) => {
                    try {
                        const tryRequest = (withRange) => {
                            const headers = {};
                            if (withRange && rangeHeader) headers['Range'] = rangeHeader;

                            GM_xmlhttpRequest({
                                method: 'GET',
                                url: url,
                                headers: headers,
                                responseType: 'arraybuffer',
                                timeout: 30000,
                                onload(res) {
                                    try {
                                        const status = res.status || 0;
                                        // 200 OK or 206 Partial Content -> good
                                        if ((status >= 200 && status < 300) || status === 206) {
                                            const arr = res.response;
                                            if (arr && arr.byteLength) {
                                                resolve(arr);
                                                return;
                                            }
                                        }
                                        // If server replied 405/416 for Range request, retry without Range once
                                        if (withRange && (status === 405 || status === 416 || status >= 400)) {
                                            // retry without Range header
                                            tryRequest(false);
                                            return;
                                        }
                                        resolve(null);
                                    } catch (err) {
                                        console.warn('GM onload parse error', err);
                                        resolve(null);
                                    }
                                },
                                onerror(err) {
                                    console.warn('GM_xmlhttpRequest error for', url, err);
                                    resolve(null);
                                },
                                ontimeout() {
                                    console.warn('GM_xmlhttpRequest timeout for', url);
                                    resolve(null);
                                }
                            });
                        };

                        // First attempt: if caller asked for range, try with range; otherwise do full GET
                        tryRequest(!!rangeHeader);
                    } catch (err) {
                        console.warn('GM_xmlhttpRequest thrown', err);
                        resolve(null);
                    }
                });
            }

            // No method succeeded
            return null;
        }

        // New helper: download entire file via GM_xmlhttpRequest and return a Blob (bypasses CORS)
        async function gmDownloadToBlob(url) {
            if (typeof GM_xmlhttpRequest !== 'function') return null;
            return new Promise((resolve) => {
                try {
                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: url,
                        responseType: 'arraybuffer',
                        timeout: 60000,
                        onload(res) {
                            try {
                                const status = res.status || 0;
                                if (status >= 200 && status < 300 && res.response) {
                                    const blob = new Blob([res.response]);
                                    resolve(blob);
                                    return;
                                }
                            } catch (e) { /* ignore parse error */ }
                            resolve(null);
                        },
                        onerror() { resolve(null); },
                        ontimeout() { resolve(null); }
                    });
                } catch (e) {
                    console.warn('gmDownloadToBlob error', e);
                    resolve(null);
                }
            });
        }

        // Parse ID3v1 tags from a 128-byte ArrayBuffer tail
        function parseID3v1(arrayBuffer) {
            try {
                const dv = new DataView(arrayBuffer);
                // Expect 'TAG' in first 3 bytes
                const tag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2));
                if (tag !== 'TAG') return null;
                function readString(off, len) {
                    const bytes = new Uint8Array(arrayBuffer, off, len);
                    return new TextDecoder('iso-8859-1').decode(bytes).replace(/\0/g, '').trim();
                }
                return {
                    title: readString(3, 30),
                    artist: readString(33, 30),
                    album: readString(63, 30),
                    year: readString(93, 4),
                    comment: readString(97, 30)
                };
            } catch (e) { return null; }
        }

        // Try to extract metadata from a src URL (uses ranged fetches to limit download).
        async function extractMetadataFromSrc(item, onExtracted) {
            if (!item || !item.src) { if (typeof onExtracted === 'function') onExtracted(); return; }
            // avoid duplicate work
            const prev = playlistAlbumArts.get(item);
            if (prev !== undefined) { if (typeof onExtracted === 'function') onExtracted(); return; }
            // mark as pending
            playlistAlbumArts.set(item, null);
            playlistTags.set(item, {});

            try {
                // First 10 bytes to check for ID3v2 header
                const headBuf = await fetchArrayBufferWithRange(item.src, 'bytes=0-9');
                if (headBuf && headBuf.byteLength >= 10) {
                    const dvHead = new DataView(headBuf);
                    if (String.fromCharCode(dvHead.getUint8(0), dvHead.getUint8(1), dvHead.getUint8(2)) === 'ID3') {
                        // determine tag size (synchsafe at offset 6)
                        const tagSize = getID3TagSize(dvHead, 6);
                        const total = 10 + tagSize;
                        // fetch full tag block
                        const fullBuf = await fetchArrayBufferWithRange(item.src, `bytes=0-${Math.max(0, total - 1)}`);
                        if (fullBuf) {
                            const tags = parseID3Tags(fullBuf) || {};
                            // store tags
                            playlistTags.set(item, tags);
                            if (tags.image && tags.image.data) {
                                const blob = new Blob([tags.image.data], { type: tags.image.format });
                                const url = URL.createObjectURL(blob);
                                playlistAlbumArts.set(item, url);
                            } else {
                                playlistAlbumArts.set(item, null);
                            }
                            if (typeof onExtracted === 'function') onExtracted();
                            return;
                        }
                    }
                }

                // Try ID3v1 at file end (last 128 bytes)
                const tailBuf = await fetchArrayBufferWithRange(item.src, 'bytes=-128');
                if (tailBuf && tailBuf.byteLength >= 128) {
                    const id3v1 = parseID3v1(tailBuf);
                    if (id3v1) {
                        playlistTags.set(item, id3v1);
                        playlistAlbumArts.set(item, null);
                        if (typeof onExtracted === 'function') onExtracted();
                        return;
                    }
                }

                // No tags found
                playlistTags.set(item, {});
                playlistAlbumArts.set(item, null);
            } catch (err) {
                console.warn('extractMetadataFromSrc failed for', item.src, err);
                playlistTags.set(item, {});
                playlistAlbumArts.set(item, null);
            } finally {
                if (typeof onExtracted === 'function') onExtracted();
            }
        }

        // --- End new src metadata extraction helpers ---

        // Parse ID3 tags from array buffer
        function parseID3Tags(arrayBuffer) {
            const dataView = new DataView(arrayBuffer);
            let offset = 0;
            const tags = {};

            // Check for ID3 header
            if (!hasID3Header(dataView)) {
                return tags; // No ID3 tag found
            }

            // Get ID3 tag size
            const tagSize = getID3TagSize(dataView, 6);
            offset += 10; // Skip ID3 header

            // Look for frames within the ID3 tag
            while (offset < 10 + tagSize) {
                const frameHeader = getFrameHeader(dataView, offset);

                if (!frameHeader) break; // Padding or end of tags

                const frameSize = dataView.getUint32(offset + 4);
                offset += 10; // Skip frame header

                // Process different frame types
                processFrame(frameHeader, dataView, offset, frameSize, arrayBuffer, tags);

                offset += frameSize;
            }

            return tags;
        }

        // Check for ID3 header
        function hasID3Header(dataView) {
            return String.fromCharCode(dataView.getUint8(0),
                                     dataView.getUint8(1),
                                     dataView.getUint8(2)) === 'ID3';
        }

        // Get ID3 tag size
        function getID3TagSize(dataView, offset) {
            // ID3 tag size is stored as a 32-bit synchsafe integer
            let size = 0;
            for (let i = 0; i < 4; i++) {
                size = size * 128 + dataView.getUint8(offset + i);
            }
            return size;
        }

        // Get frame header
        function getFrameHeader(dataView, offset) {
            return String.fromCharCode(
                dataView.getUint8(offset),
                dataView.getUint8(offset + 1),
                dataView.getUint8(offset + 2),
                dataView.getUint8(offset + 3)
            );
        }

        // Process different frame types
        function processFrame(frameHeader, dataView, offset, size, arrayBuffer, tags) {
            switch (frameHeader) {
                case 'APIC':
                    tags.image = parseAlbumArtFrame(dataView, offset, size, arrayBuffer);
                    break;
                case 'TIT2':
                    tags.title = parseTextFrame(dataView, offset, size);
                    break;
                case 'TPE1':
                    tags.artist = parseTextFrame(dataView, offset, size);
                    break;
                case 'TALB':
                    tags.album = parseTextFrame(dataView, offset, size);
                    break;
                case 'TYER':
                    tags.year = parseTextFrame(dataView, offset, size);
                    break;
                case 'TPE2':
                    tags.albumArtist = parseTextFrame(dataView, offset, size);
                    break;
                case 'TRCK':
                    tags.trackNumber = parseTextFrame(dataView, offset, size);
                    break;
            }
        }

        // Parse album art frame
        function parseAlbumArtFrame(dataView, offset, size, arrayBuffer) {
            let pos = offset;

            // Read text encoding (1 byte)
            const encoding = dataView.getUint8(pos);
            pos += 1;

            // Extract MIME type (null-terminated string, always ISO-8859-1)
            const mimeType = extractNullTerminatedString(dataView, pos, arrayBuffer);
            pos += mimeType.length + 1;

            // Skip picture type (1 byte)
            pos += 1;

            // Extract description (encoding-dependent null-terminated string)
            let descEnd = pos;
            if (encoding === 0 || encoding === 3) {
                // ISO-8859-1 or UTF-8: null-terminated with 0x00
                while (descEnd < offset + size && dataView.getUint8(descEnd) !== 0) {
                    descEnd++;
                }
                descEnd++; // Skip null terminator
            } else if (encoding === 1 || encoding === 2) {
                // UTF-16 or UTF-16BE: null-terminated with 0x00 0x00
                while (descEnd + 1 < offset + size) {
                    if (dataView.getUint8(descEnd) === 0 && dataView.getUint8(descEnd + 1) === 0) {
                        descEnd += 2;
                        break;
                    }
                    descEnd += 2;
                }
            } else {
                // Fallback: treat as ISO-8859-1
                while (descEnd < offset + size && dataView.getUint8(descEnd) !== 0) {
                    descEnd++;
                }
                descEnd++;
            }
            pos = descEnd;

            // Extract image data
            const imageData = new Uint8Array(arrayBuffer, pos, offset + size - pos);

            // Determine image format
            let format = 'image/jpeg'; // default
            if (mimeType.includes('png')) format = 'image/png';
            if (mimeType.includes('gif')) format = 'image/gif';

            return {
                data: imageData,
                format: format
            };
        }

        // Extract null-terminated string
        function extractNullTerminatedString(dataView, offset, arrayBuffer) {
            let end = offset;
            while (dataView.getUint8(end) !== 0 && end < dataView.byteLength) {
                end++;
            }
            return String.fromCharCode.apply(null,
                new Uint8Array(arrayBuffer, offset, end - offset));
        }

        // Parse text frame
        function parseTextFrame(dataView, offset, size) {
            if (size < 1) return '';

            const encoding = dataView.getUint8(offset); // First byte indicates encoding
            const textBytes = new Uint8Array(dataView.buffer, offset + 1, size - 1);

            let decoder;

            switch (encoding) {
                case 0: // ISO-8859-1
                    decoder = new TextDecoder('iso-8859-1');
                    break;
                case 1: // UTF-16 with BOM
                    decoder = new TextDecoder('utf-16');
                    break;
                case 2: // UTF-16BE without BOM
                    decoder = new TextDecoder('utf-16be');
                    break;
                case 3: // UTF-8
                    decoder = new TextDecoder('utf-8');
                    break;
                default:
                    decoder = new TextDecoder('utf-8'); // fallback
            }

            return decoder.decode(textBytes).replace(/\0/g, ''); // remove nulls
        }

        // Display metadata
        function displayMetadata(tags, filename) {
            // Extract filename without extension
            const fileNameWithoutExt = filename.replace(/\.mp3$/i, '');
            // store tags for current track (in case displayMetadata is called directly)
            const currentFile = playlist[currentTrackIndex];
            if (currentFile) playlistTags.set(currentFile, tags || {});

            // Ensure CSS for blurred/dark cover-background exists (only once)
            if (!$('#metadataBgStyles').length) {
                $('head').append(`
                    <style id="metadataBgStyles">
                        /* metadata container: host for blurred background via pseudo-element */
                        #metadata { position: relative; z-index: 0; overflow: clip; }
                        /* blurred background (uses CSS variable --metadata-bg set dynamically) */
                        #metadata::before {
                            content: '';
                            position: absolute;
                            inset: 0;
                            background-image: var(--metadata-bg, none);
                            background-size: cover;
                            background-position: center;
                            transform: scale(1.06);
                            filter: blur(14px) brightness(1) contrast(130%) saturate(140%);
                            transition: opacity .3s ease, filter .3s ease;
                            z-index: -2;
                            opacity: 1;
                        }
                        /* dark overlay to keep foreground readable */
                        #metadata::after {
                            content: '';
                            position: absolute;
                            inset: 0;
                            background: linear-gradient(rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33));
                            z-index: -1;
                            pointer-events: none;
                        }
                        /* keep actual artwork and text above pseudo-elements */
                        #metadata > img, #metadata > #trackInfo { position: relative; z-index: 1; }
                    </style>
                `);
            }

            const $metadata = $('#metadata');

            // Clean up any previously created object URL used for the metadata background
            const prevBg = $metadata.data('bgUrl');
            if (prevBg) {
                try { URL.revokeObjectURL(prevBg); } catch (e) { /* ignore */ }
                $metadata.removeData('bgUrl');
            }

            // Display album art if available and set blurred background
            if (tags.image && tags.image.data) {
                const blob = new Blob([tags.image.data], { type: tags.image.format });
                const url = URL.createObjectURL(blob);

                // album cover <img>
                $albumArt.off('load error')
                    .on('load', function() { $(this).show(); })
                    .on('error', function() { $(this).hide(); })
                    .attr('src', url);

                // set CSS custom property used by ::before for blurred/dark background
                // wrap url in quotes to be safe with paths
                $metadata.css('--metadata-bg', `url("${url}")`);
                // remember URL so we can revoke it later
                $metadata.data('bgUrl', url);
            } else {
                $albumArt.hide();
                $metadata.css('--metadata-bg', 'none');
            }

            // Use the Media Session API for metadata
            let artworkUrl = '';
            let artworkFormat = '';

            if (tags.image && tags.image.data) {
                const blob = new Blob([tags.image.data], { type: tags.image.format });
                artworkUrl = URL.createObjectURL(blob);
                artworkFormat = tags.image.format;
            }

            navigator.mediaSession.metadata = new MediaMetadata({
                title: tags.title || fileNameWithoutExt,
                artist: tags.artist,
                album: tags.album,
                artwork: [
                                 {
                                     //src: artworkUrl, // NOT WORKING
                                     src: 'https://github.com/aliashori78/MP3-Player-Pro/blob/9ecdc18985504a6a3889234b61739a79ef14fe38/Assets/Album1.jpg' || artworkUrl,
                                     //    https://github.com/aliashori78/MP3-Player-Pro/blob/9ecdc18985504a6a3889234b61739a79ef14fe38/Assets/Album2.jpg
                                     sizes: 'any',
                                     type: artworkFormat
                                 }
                             ]
            });
            //console.log('MY DEBUG: ' + tags.image.data);
            //console.log('MediaSession.metadata =', navigator.mediaSession.metadata);

            // Display other metadata
            let infoHTML = '';
            infoHTML += `<div><strong>Filename:</strong> ${fileNameWithoutExt}</div>`;
            if (tags.title) infoHTML += `<div><strong>Title:</strong> ${tags.title}</div>`;
            if (tags.artist) infoHTML += `<div><strong>Artist:</strong> ${tags.artist}</div>`;
            if (tags.album) infoHTML += `<div><strong>Album:</strong> ${tags.album}</div>`;
            if (tags.albumArtist) infoHTML += `<div><strong>Album Artist:</strong> ${tags.albumArtist}</div>`;
            if (tags.year) infoHTML += `<div><strong>Year:</strong> ${tags.year}</div>`;
            if (tags.trackNumber) infoHTML += `<div><strong>Track:</strong> ${tags.trackNumber}</div>`;

            if (tags.title && tags.artist) infoHTML += `<div><strong>Full Name:</strong> ${tags.artist} - ${tags.title}</div>`;

            $trackInfo.html(infoHTML || '<div>No metadata available</div>');
        }

        // --- NEW: visualizer (bottom equalizer) inside #metadata ---
        if (!$('#visualizerCanvas').length) {
            $('#metadata').append('<canvas id="visualizerCanvas" style="position:absolute;width:100%;height:80px;display:block;margin-top:8px;bottom:0;left:0;z-index:99;"></canvas>');
            $('head').append('<style id="visualizerStyles">#metadata{position:relative}#visualizerCanvas{background:transparent;display:block}</style>');
        }

        // Visualizer configuration (exposed to settings)
        let visualizerEnabled = true;
        let colorEnabled = false;
        let visualizerStyle = 'bars'; // 'bars' | 'waveform' | 'radial'
        let visualizerColor = '#66ccff';
        let visualizerHeight = 40;
        let visualizerSensitivity = 1.0;
        // number of bars to draw when style === 'bars' (user configurable)
        let visualizerBarCount = 80;

        let audioCtx, analyser, sourceNode, dataArray, bufferLength, rafId;
        const canvas = document.getElementById('visualizerCanvas');
        const canvasCtx = canvas ? canvas.getContext('2d') : null;

        function ensureCanvasSize() {
            if (!canvas) return;
            const dpr = window.devicePixelRatio || 1;
            const w = canvas.clientWidth || canvas.width || document.getElementById('metadata').clientWidth;
            const h = Math.max(10, visualizerHeight);
            canvas.style.height = h + 'px';
            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        // Convert hex to rgba with alpha
        function hexToRGBA(hex, alpha = 1) {
            if (!hex) return `rgba(102,204,255,${alpha})`;
            const m = hex.replace('#','');
            const bigint = parseInt(m.length === 3 ? m.split('').map(c => c+c).join('') : m, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return `rgba(${r},${g},${b},${alpha})`;
        }

        // Return a color string based on intensity (0..1). Respects colorEnabled.
       function getColorForIntensity(intensity, alpha = 1) {
           intensity = Math.max(0, Math.min(1, intensity));
           if (colorEnabled) return hexToRGBA(visualizerColor, alpha);

           // map intensity to a pleasant HSL range (blue -> cyan -> yellow -> red)
           const hue = 220 - Math.round(intensity * 200); // ~220 -> 20
           const lightness = 30 + Math.round(intensity * 40); // 30% -> 70%
           return `hsla(${hue}, 85%, ${lightness}%, ${alpha})`;
       }

        function setupAnalyzer() {
            if (!visualizerEnabled) return;
            if (!canvasCtx || (!window.AudioContext && !window.webkitAudioContext)) return;
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (!analyser) {
                analyser = audioCtx.createAnalyser();
                analyser.fftSize = 1024; // better resolution for waveform and radial
                bufferLength = analyser.frequencyBinCount;
                dataArray = new Uint8Array(bufferLength);
            }

            // Create source node once (creating multiple MediaElementSource throws)
            if (!sourceNode && $audioPlayer && $audioPlayer[0]) {
                try {
                    sourceNode = audioCtx.createMediaElementSource($audioPlayer[0]);
                    sourceNode.connect(analyser);
                    analyser.connect(audioCtx.destination);
                } catch (e) {
                    // ignore if already connected / not allowed
                    console.warn('Visualizer: createMediaElementSource failed', e);
                }
            }

            ensureCanvasSize();
            startDrawing();
        }

        function clearCanvas() {
            if (!canvasCtx) return;
            canvasCtx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        }

        function drawBars(freqArray) {
            const w = canvas.clientWidth;
            const h = canvas.clientHeight;
            canvasCtx.clearRect(0, 0, w, h);

            // Determine desired bars:
            // use configured visualizerBarCount when provided, otherwise derive from width.
            const desiredBars = Number.isFinite(visualizerBarCount) ? Math.max(4, Math.min(128, visualizerBarCount)) : Math.min(64, Math.max(8, Math.floor(w / 8)));
            // Do not exceed the number of frequency bins
            const bars = Math.max(4, Math.min(desiredBars, freqArray.length));
            const step = Math.max(1, Math.floor(freqArray.length / bars));
            const barWidth = Math.max(2, (w / bars) * 0.9);
            let x = 0;
            for (let i = 0; i < bars; i++) {
                const idx = i * step;
                // average a small range to avoid noisy single-bin zeros at high freq
                let sum = 0, count = 0;
                for (let j = idx; j < Math.min(freqArray.length, idx + step); j++) {
                    sum += (freqArray[j] || 0);
                    count++;
                }
                const avg = count ? (sum / count) : 0;
                // apply sensitivity and clamp
                const v = Math.min(1, (avg / 255) * visualizerSensitivity);
                const barHeight = v * h;

                // gradient using dynamic color when enabled
                const grad = canvasCtx.createLinearGradient(0, h, 0, h - barHeight);
                grad.addColorStop(0, getColorForIntensity(v, 0.18));
                grad.addColorStop(0.4, getColorForIntensity(v, 0.45));
                grad.addColorStop(1, getColorForIntensity(v, 0.98));
                canvasCtx.fillStyle = grad;
                canvasCtx.fillRect(x, h - barHeight, barWidth, barHeight);
                x += barWidth + 2;
            }
        }

        function drawWaveform(timeArray) {
            const w = canvas.clientWidth;
            const h = canvas.clientHeight;
            canvasCtx.clearRect(0, 0, w, h);

            canvasCtx.lineWidth = 2;
            canvasCtx.strokeStyle = hexToRGBA(visualizerColor, 0.95);
            canvasCtx.beginPath();

            const sliceWidth = w / timeArray.length;
            let x = 0;
            for (let i = 0; i < timeArray.length; i++) {
                // apply sensitivity (and clamp)
                const raw = timeArray[i] / 128.0; // ~0..2
                const v = Math.min(2, raw * visualizerSensitivity);
                const y = (v * h) / 2;
                if (i === 0) {
                    canvasCtx.moveTo(x, y);
                } else {
                    canvasCtx.lineTo(x, y);
                }
                x += sliceWidth;
            }
            canvasCtx.lineTo(w, h / 2);
            canvasCtx.stroke();
        }

        function drawRadial(freqArray) {
            const w = canvas.clientWidth;
            const h = canvas.clientHeight;
            canvasCtx.clearRect(0, 0, w, h);

            const cx = w / 2;
            const cy = h / 2;
            const radius = Math.min(cx, cy) * 0.35;
            const bars = Math.min(64, Math.max(12, Math.floor(Math.sqrt(freqArray.length) * 2)));
            const step = Math.max(1, Math.floor(freqArray.length / bars));

            for (let i = 0; i < bars; i++) {
                const idx = i * step;
                // average a small range
                let sum = 0, count = 0;
                for (let j = idx; j < Math.min(freqArray.length, idx + step); j++) { sum += (freqArray[j] || 0); count++; }
                const avg = count ? (sum / count) : 0;
                const v = Math.min(1, (avg / 255) * visualizerSensitivity);
                const barLen = v * Math.min(w, h) * 0.45;
                const angle = (i / bars) * Math.PI * 2;
                const x1 = cx + Math.cos(angle) * radius;
                const y1 = cy + Math.sin(angle) * radius;
                const x2 = cx + Math.cos(angle) * (radius + barLen);
                const y2 = cy + Math.sin(angle) * (radius + barLen);

                canvasCtx.strokeStyle = getColorForIntensity(v, 0.95);
                canvasCtx.lineWidth = Math.max(2, Math.round((barLen / Math.max(w,h)) * 6));
                canvasCtx.beginPath();
                canvasCtx.moveTo(x1, y1);
                canvasCtx.lineTo(x2, y2);
                canvasCtx.stroke();
            }
        }

        function startDrawing() {
            if (!canvas || !canvasCtx || !analyser) return;
            cancelAnimationFrame(rafId);

            ensureCanvasSize();

            function draw() {
                rafId = requestAnimationFrame(draw);

                if (!visualizerEnabled) {
                    // if disabled, just clear and stop
                    clearCanvas();
                    cancelAnimationFrame(rafId);
                    rafId = null;
                    return;
                }

                if (visualizerStyle === 'waveform') {
                    const timeData = new Uint8Array(analyser.fftSize);
                    analyser.getByteTimeDomainData(timeData);
                    drawWaveform(timeData);
                } else {
                    // default to bars/radial use frequency data
                    const freqData = new Uint8Array(analyser.frequencyBinCount);
                    analyser.getByteFrequencyData(freqData);
                    if (visualizerStyle === 'radial') {
                        drawRadial(freqData);
                    } else {
                        drawBars(freqData);
                    }
                }
            }
            draw();
        }

        function renderSilence() {
            if (!canvas || !canvasCtx) return;
            ensureCanvasSize();
            // draw minimal baseline state (empty bars or flat waveform)
            if (visualizerStyle === 'waveform') {
                // flat line
                canvasCtx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
                canvasCtx.lineWidth = 2;
                canvasCtx.strokeStyle = hexToRGBA(visualizerColor, 0.12);
                canvasCtx.beginPath();
                canvasCtx.moveTo(0, canvas.clientHeight / 2);
                canvasCtx.lineTo(canvas.clientWidth, canvas.clientHeight / 2);
                canvasCtx.stroke();
            } else {
                // small faded bars at height 0
                const w = canvas.clientWidth;
                const h = canvas.clientHeight;
                canvasCtx.clearRect(0, 0, w, h);
                const bars = 16;
                const barWidth = Math.max(2, (w / bars) * 0.9);
                let x = 0;
                for (let i = 0; i < bars; i++) {
                    const grad = canvasCtx.createLinearGradient(0, h, 0, h - 1);
                    grad.addColorStop(0, hexToRGBA(visualizerColor, 0.05));
                    grad.addColorStop(1, hexToRGBA(visualizerColor, 0.08));
                    canvasCtx.fillStyle = grad;
                    canvasCtx.fillRect(x, h - 2, barWidth, 2);
                    x += barWidth + 2;
                }
            }
        }

        // Ensure context is resumed on user gesture / play and analyzer is set up
        function ensureAudioContext() {
            try { if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume(); } catch (e) {}
            if (visualizerEnabled) setupAnalyzer();
        }

        $audioPlayer.on('play', function() {
            ensureAudioContext();
            // restart drawing if previously stopped
            if (visualizerEnabled && analyser && !rafId) startDrawing();
        });

        // When player is paused or ended, render silence (0)
        $audioPlayer.on('pause ended', function() {
            if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
            renderSilence();
            $('#playBtn').text('▶️ Play');
        });

        $viewerContainer.on('click', ensureAudioContext);
        $(window).on('resize', function() { if (analyser) startDrawing(); });

        // Optional: allow toggling visualizer programmatically
        function applyVisualizerSettings() {
            ensureCanvasSize();
            if (visualizerEnabled) {
                setupAnalyzer();
            } else {
                if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
                clearCanvas();
            }
        }
        // Initialize default visualizer state
        applyVisualizerSettings();

        /*
        *
        * Add lyrics handling and lrclib fetching (START)
        *
        */

        // Parse simple LRC text into [{time, text}]
        function parseLRC(lrcText) {
            const lines = lrcText.split(/\r?\n/);
            const entries = [];
            const timeRegex = /\[(\d+):(\d{2})(?:\.(\d{1,3}))?\]/g;

            for (const line of lines) {
                // Reset regex lastIndex
                timeRegex.lastIndex = 0;
                const texts = line.replace(/\[.*?\]/g, '').trim();

                let match;
                while ((match = timeRegex.exec(line)) !== null) {
                    const min = parseInt(match[1], 10);
                    const sec = parseInt(match[2], 10);
                    const ms = match[3] ? parseInt(match[3].padEnd(3, '0'), 10) : 0;
                    const t = min * 60 + sec + ms / 1000;
                    entries.push({ time: t, text: texts });
                }
            }

            // Sort by time
            entries.sort((a, b) => a.time - b.time);
            return entries;
        }

        // Fetch search results from lrclib.net
        async function searchLyricsOnLrclib(query) {
            const encodedQuery = encodeURIComponent(query);
            const url = `https://lrclib.net/api/search?q=${encodedQuery}`;

            try {
                const resp = await fetch(url, {
                    cache: 'no-cache',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (!resp.ok) {
                    throw new Error(`HTTP ${resp.status}`);
                }

                const contentType = resp.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    throw new Error('Response is not JSON');
                }

                const data = await resp.json();

                // Handle different response structures
                if (Array.isArray(data)) {
                    return data;
                } else if (data && data.data && Array.isArray(data.data)) {
                    return data.data;
                } else if (data && Array.isArray(data.results)) {
                    return data.results;
                } else {
                    console.log('Unexpected API response:', data);
                    return [];
                }
            } catch (e) {
                console.error('Search error:', e);
                $('#lyricsStatus').text('Search failed: ' + e.message);
                return [];
            }
        }

        // Fetch specific lyrics by ID or from URL
        async function fetchLyricsById(item) {
            try {
                let lrcUrl = null;

                // Check different possible URL fields
                if (item.syncedLyrics) {
                    return item.syncedLyrics;
                }

                // If no direct syncedLyrics, try to fetch from API endpoint
                if (item.id) {
                    const detailsUrl = `https://lrclib.net/api/get/${item.id}`;
                    const detailsResp = await fetch(detailsUrl);
                    if (detailsResp.ok) {
                        const details = await detailsResp.json();
                        if (details.syncedLyrics) {
                            return details.syncedLyrics;
                        }
                    }
                }

                return null;
            } catch (e) {
                console.error('Fetch error:', e);
                return null;
            }
        }

        // Display search results in a modal
        function showSearchResults(results) {
            if (!results || results.length === 0) {
                $('#lyricsStatus').text('No results found');
                return;
            }

            // Create or update results modal
            let $modal = $('#lyricsSearchModal');
            if ($modal.length === 0) {
                $modal = $(`
                    <div id="lyricsSearchModal" class="modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:999999;">
                        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); background:#2a2a2a; padding:20px; border-radius:8px; max-width:500px; width:90%; max-height:80vh; overflow-y:auto;">
                            <h3 style="margin-top:0; color:#fff;">Select Lyrics</h3>
                            <button id="closeLyricsModal" style="width:100%; text-align:center; padding:8px 15px; background:#666; color:#fff; border:none; border-radius:4px; cursor:pointer;">Close</button>
                            <div id="lyricsResultsList"></div>
                        </div>
                    </div>
                `);
                $('body').append($modal);

                $('#closeLyricsModal').on('click', function() {
                    $('#lyricsSearchModal').hide();
                });
            }

            const $list = $('#lyricsResultsList').empty();

            results.forEach((item, index) => {
                const hasSynced = item.syncedLyrics ? '<span style="color: green;">✓ Synced</span>' : '<span style="color: red;">✗ No sync</span>';
                const duration = item.duration ? `${Math.floor(item.duration / 60)}:${Math.floor(item.duration % 60).toString().padStart(2, '0')}` : 'Unknown';

                const $result = $(`
                    <div class="lyrics-result" style="padding:10px; margin:5px 0; background:#3a3a3a; border-radius:4px; cursor:pointer;">
                        <div style="font-weight:bold; color:#fff;">${item.trackName || item.name}</div>
                        <div style="color:#ccc; font-size:0.9em;">${item.artistName}</div>
                        <div style="color:#aaa; font-size:0.8em;">
                            ${item.albumName ? `Album: ${item.albumName} • ` : ''}
                            Duration: ${duration} • ${hasSynced}
                        </div>
                    </div>
                `);

                $result.on('click', async function() {
                    $('#lyricsStatus').text(`Loading "${item.trackName}"...`);
                    $('#lyricsSearchModal').hide();

                    const lrcText = await fetchLyricsById(item);
                    if (lrcText) {
                        const entries = parseLRC(lrcText);
                        currentLrcEntries = entries;
                        currentLrcIndex = -1;
                        renderLyrics(entries);
                        $('#lyricsStatus').text(`Loaded: ${item.trackName} - ${item.artistName}`);
                    } else {
                        $('#lyricsStatus').text('Could not load lyrics for this selection');
                    }
                });

                $list.append($result);
            });

            $modal.show();
        }

        // Render lyrics in the container
        // Render lyrics in the container
        function renderLyrics(entries) {
            const $inner = $('#lyricsInner').empty();
            if (!entries || !entries.length) {
                $inner.html('<div style="color:#888; padding:20px; text-align:center;">No lyrics to display</div>');
                $('#lyricsStatus').text('No lyrics loaded');
                return;
            }

            // small helper to safely create text nodes
            function textNode(str) {
                return document.createTextNode(str == null ? '' : String(str));
            }

            entries.forEach((e, i) => {
                const $line = $('<div/>', {
                    class: 'lrc-line',
                    'data-idx': i,
                    'data-time': e.time,
                    css: {
                        padding: '4px 6px',
                        margin: '8px 0',
                        lineheight: '1.2',
                        background: '#151515',
                        color: '#bbb',
                        transition: 'color .18s, font-weight .18s',
                        fontSize: '22px',
                        textAlign: 'center',
                        fontFamily: 'Dana',
                        cursor: 'pointer' // make it obvious it's clickable
                    }
                });

                const $orig = $('<div/>', { class: 'lrc-original' }).append(textNode(e.text || '—'));
                const $trans = $('<div/>', {
                    class: 'lrc-translation',
                    'data-for': i,
                    css: {
                        color: '#cfcfcf',
                        fontSize: '18px',
                        textAlign: 'center',
                        display: 'none' // hidden until requested
                    }
                });

                // click -> seek audio to this line's time and play (also sync highlight)
                $line.on('click', function(evt) {
                    // prefer reading time from data attribute (string) and fallback to entry
                    const tAttr = $(this).attr('data-time');
                    const t = Number.isFinite(Number(tAttr)) ? parseFloat(tAttr) : (typeof e.time === 'number' ? e.time : NaN);
                    if (!Number.isFinite(t)) return;
                    try {
                        const audioEl = ($audioPlayer && $audioPlayer[0]) ? $audioPlayer[0] : document.getElementById('audioPlayer');
                        // small offset guard to avoid being exactly at end
                        const seekTo = Math.max(0, Math.min(t, (isFinite(audioEl.duration) ? audioEl.duration : t)));
                        audioEl.currentTime = seekTo;
                        // start playback if paused
                        if (audioEl.paused) audioEl.play().catch(()=>{ /* ignore play errors */ });
                        // update highlight immediately
                        syncLyricsToTime(seekTo);
                        //$('#lyricsStatus').text(`Seeking to ${formatTime(seekTo)}`); // Seeking to 0:17 for the click in line
                    } catch (err) {
                        console.error('Seek error:', err);
                    }
                });

                $line.append($orig, $trans);
                $inner.append($line);
            });
            $('#lyricsStatus').text(`Lyrics loaded (${entries.length} lines)`);
        }

        // small helper to display time nicely (mm:ss)
        function formatTime(sec) {
            if (!Number.isFinite(sec)) return '0:00';
            const m = Math.floor(sec / 60);
            const s = Math.floor(sec % 60).toString().padStart(2, '0');
            return `${m}:${s}`;
        }

        // Clear/disable lyrics button handler
        // Replaced inline logic with the shared clearLyricsAction() above
        $('#clearLyricsBtn').off('click').on('click', function() {
            clearLyricsAction();
        });

        // Optional: Add toggle functionality to clear button (double duty)
        // keep existing toggle behavior for dblclick
        $('#clearLyricsBtn').off('dblclick').on('dblclick', function() {
            toggleLyricsSync();
        });

        // Add a function to disable lyrics sync (optional toggle feature)
        function toggleLyricsSync() {
            if ($audioPlayer.data('lyricsEnabled') !== false) {
                // Disable sync
                $audioPlayer.data('lyricsEnabled', false);
                $('#clearLyricsBtn').text('🗑️ Enable Sync');
                $('#lyricsStatus').text('Lyrics sync disabled');
            } else {
                // Enable sync
                $audioPlayer.data('lyricsEnabled', true);
                $('#clearLyricsBtn').text('🗑️');
                $('#lyricsStatus').text('Lyrics sync enabled');
            }
        }

        // Sync highlight on audio timeupdate
        let currentLrcEntries = [];
        let currentLrcIndex = -1;

        function syncLyricsToTime(time) {
            // Check if sync is disabled
            if ($audioPlayer.data('lyricsEnabled') === false) return;

            if (!currentLrcEntries.length) return;

            // Binary search for current line
            let lo = 0, hi = currentLrcEntries.length - 1, best = -1;
            while (lo <= hi) {
                const mid = (lo + hi) >> 1;
                if (currentLrcEntries[mid].time <= time) {
                    best = mid;
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }

            if (best !== currentLrcIndex) {
                currentLrcIndex = best;
                $('#lyricsInner .lrc-line').css({ color: '#888', 'font-weight': 'normal', 'background-color': 'transparent' });
                if (best >= 0) {
                    const $line = $(`#lyricsInner .lrc-line[data-idx="${best}"]`);
                    $line.css({ color: '#fff', 'font-weight': '700', 'background-color': '#ffffff17' });

                    // scrollIntoView
                    const lineEl = $line[0];
                    if (lineEl) {
                        // Smooth scroll to position
                        setTimeout(() => {
                            lineEl.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                                inline: 'nearest'
                            });
                        }, 10);
                    }
                }
            }
        }

        // Auto-search based on current track metadata
        $('#fetchLyricsBtn').off('click').on('click', async function() {
            const file = playlist[currentTrackIndex];
            let tags = file ? playlistTags.get(file) : null;
            if (!tags) tags = {};

            const artist = tags.artist || tags.albumArtist || '';
            const title = tags.title || (file && file.name ? file.name.replace(/\.mp3$/i, '') : '');

            if (!title) {
                $('#lyricsStatus').text('No title available for search');
                return;
            }

            $('#lyricsStatus').text('Searching...');

            const query = (artist ? artist + ' ' : '') + title;
            const results = await searchLyricsOnLrclib(query);

            if (results.length > 0) {
                showSearchResults(results);
                $('#lyricsStatus').text(`Found ${results.length} results`);
            } else {
                $('#lyricsStatus').text('No lyrics found. Try manual search.');
            }
        });

        // Manual search button handler
        $('#manualLyricsSearchBtn').off('click').on('click', async function() {
            const query = $('#manualLyricsInput').val().trim();
            if (!query) {
                $('#lyricsStatus').text('Please enter search text');
                return;
            }

            $('#lyricsStatus').text(`Searching for "${query}"...`);

            const results = await searchLyricsOnLrclib(query);

            if (results.length > 0) {
                showSearchResults(results);
                $('#lyricsStatus').text(`Found ${results.length} results for "${query}"`);
            } else {
                $('#lyricsStatus').text(`No results found for "${query}"`);
            }
        });

        // Add Enter key support for manual search input
        $(document).on('keypress', '#manualLyricsInput', function(e) {
            if (e.which === 13) { // Enter key
                $('#manualLyricsSearchBtn').click();
            }
        });

        // Attach to audio timeupdate for live sync
        $audioPlayer.on('timeupdate', function() {
            syncLyricsToTime(this.currentTime);
        });

        // Add manual search button to HTML (if not exists)
        /*if (!$('#manualLyricsSearchBtn').length) {
            $('#fetchLyricsBtn').after(
                '<button id="manualLyricsSearchBtn" style="margin-left: 5px; padding: 5px 10px; background: #555; color: #fff; border: none; border-radius: 3px; cursor: pointer;">Manual Search</button>'
            );
        }*/

        // Add styles for modal and results
        if (!$('#lyricsStyles').length) {
            $('head').append(`
                <style id="lyricsStyles">
                    .lyrics-result:hover {
                        background: #4a4a4a !important;
                    }
                    .modal {
                        display: none;
                    }
                    #lyricsContainer {
                        overflow-y: auto;
                        padding: 10px;
                        background: rgba(0,0,0,0.2);
                        border-radius: 4px;
                    }
                    #lyricsStatus {
                        display: inline-block;
                        width: 280px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-bottom: -5px;
                    }
                </style>
            `);
        }

        // Optional: Add toggle functionality to clear button (double duty)
        $('#clearLyricsBtn').on('dblclick', function() {
            toggleLyricsSync();
        });


        // --- Translation feature: translate each lyric line to Persian or ... on demand ---
        // User-configurable defaults
        const TRANSLATION_DELIM = '\n<<<LINE>>>\n'; // unique delimiter to preserve line boundaries

        // Constants for OpenRouter (Get this from https://hf.co/settings/tokens)
        let hfToken = 'YOUR_HF_API_KEY_HERE';
        let hfModel = 'meta-llama/Llama-3.3-70B-Instruct'; // Any other model from https://huggingface.co/docs/inference-providers/en/index

        // Constants for OpenRouter (any other model from https://openrouter.ai/settings/keys)
        let OPENROUTER_API_KEY = 'YOUR_OPENROUTER_API_KEY_HERE';
        let OPENROUTER_MODEL = 'deepseek/deepseek-r1-0528:free'; // Any other model from https://openrouter.ai/models

        // User-configurable Google translate target language (ISO code, e.g. "fa", "en")
        let googleTargetLang = 'fa';

        // Default kept as "Persian (Farsi)" for backward compatibility
        let aiPromptLanguage = 'Persian (Farsi)';

        // Default instruction text (editable) built from aiPromptLanguage
        let translationInstructionDefault =
            `Translate the following lyrics into fluent, natural ${aiPromptLanguage}. Preserve meaning and punctuation. Return the translation with each original line corresponding to the same number of lines, and separate lines using the exact token <<<LINE>>>.`;
        // Cache for translations for current lyrics set
        let currentTranslations = []; // array of strings parallel to currentLrcEntries
        let translationsShown = false;

        // New automatic options (in-memory only)
        let autoLyrics = false;         // fetch lyrics automatically when track changes
        let autoTranslation = false;    // translate automatically after lyrics fetched
        let autoClearLyrics = false;    // clear previous lyrics automatically when track changes

        // Translation provider setting (moved out of prompt, configurable in settings UI) - allowed values: 'google', 'hf', 'openrouter'
        let translationProviderSetting = 'google';

        // Centralized clear action (used by button and auto-clear)
        function clearLyricsAction() {
            currentLrcEntries = [];
            currentLrcIndex = -1;
            $('#lyricsInner').empty().html('<div style="color:#888; padding:20px; text-align:center;">Lyrics cleared</div>');
            $('#lyricsStatus').text('Lyrics cleared');
            $('#lyricsSearchModal').hide();
        }

        // Translate whole payload using Google Translate (single request)
        async function translateWholeWithGoogle(text) {
            if (!text) return '';
            // use googleTargetLang (ISO) from settings
            const base = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + encodeURIComponent(googleTargetLang) + '&dt=t&q=';
            const url = base + encodeURIComponent(text);
            try {
                const resp = await fetch(url, { cache: 'no-cache' });
                if (!resp.ok) return '';
                const data = await resp.json();
                // Google returns nested arrays of segments
                if (Array.isArray(data) && Array.isArray(data[0])) {
                    return data[0].map(seg => seg[0] || '').join('');
                }
                return '';
            } catch (e) {
                console.error('Google translate error', e);
                return '';
            }
        }

        // Translate whole payload using Hugging Face AI (Generative Language API). Requires API key.
        async function translateWholeWithHF(text, instruction = translationInstructionDefault) {
            if (!text) return '';
            const token = hfToken || window.HF_TOKEN || '';

            // The Universal Router Endpoint
            const endpoint = `https://router.huggingface.co/v1/chat/completions`;

            try {
                const body = {
                    model: hfModel, // The router finds the provider for this ID
                    messages: [
                        { role: "system", content: instruction },
                        { role: "user", content: text }
                    ],
                    max_tokens: 2048,
                    temperature: 0.1
                };

                const resp = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(body)
                });

                if (!resp.ok) {
                    const errorData = await resp.json();
                    console.error('HF API Error:', resp.status, errorData);
                    return '';
                }

                const data = await resp.json();
                return data.choices[0].message.content.trim();
            } catch (e) {
                console.error('Fetch error:', e);
                return '';
            }
        }

        async function translateWholeWithOpenRouter(text, instruction = translationInstructionDefault) {
            if (!text) return '';

            const endpoint = 'https://openrouter.ai/api/v1/chat/completions';
            const body = {
                model: OPENROUTER_MODEL,
                messages: [
                    { role: "system", content: instruction },
                    { role: "user", content: text }
                ],
                temperature: 0.1,
                max_tokens: 2048
            };

            // Prefer GM_xmlhttpRequest in userscripts to avoid CORS issues from file:// origin
            if (typeof GM_xmlhttpRequest === 'function') {
                return new Promise((resolve) => {
                    GM_xmlhttpRequest({
                        method: 'POST',
                        url: endpoint,
                        data: JSON.stringify(body),
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${OPENROUTER_API_KEY}`
                        },
                        onload(res) {
                            try {
                                const status = res.status || 0;
                                const textResp = res.responseText || '';
                                let data;
                                try { data = JSON.parse(textResp); } catch (e) { data = null; }
                                if (status >= 200 && status < 300 && data && data.choices && data.choices.length) {
                                    resolve((data.choices[0].message && data.choices[0].message.content || '').trim());
                                } else {
                                    console.error('OpenRouter API Error (GM):', status, data || textResp);
                                    resolve('');
                                }
                            } catch (e) {
                                console.error('OpenRouter parse error (GM):', e);
                                resolve('');
                            }
                        },
                        onerror(err) {
                            console.error('GM_xmlhttpRequest error:', err);
                            resolve('');
                        },
                        ontimeout() {
                            console.error('GM_xmlhttpRequest timeout');
                            resolve('');
                        }
                    });
                });
            }

            // Fallback to fetch (may be blocked by CORS when running from file://)
            try {
                const resp = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${OPENROUTER_API_KEY}`
                    },
                    body: JSON.stringify(body)
                });

                const text = await resp.text();
                let data = null;
                try { data = JSON.parse(text); } catch (e) { /* non-JSON response */ }

                if (!resp.ok) {
                    console.error('OpenRouter API Error (fetch):', resp.status, data || text);
                    return '';
                }

                if (data && data.choices && data.choices.length) {
                    return (data.choices[0].message && data.choices[0].message.content || '').trim();
                }

                return '';
            } catch (e) {
                console.error('Fetch error:', e);
                return '';
            }
        }

        // Translate all lines in one request, then split back into per-line translations using the delimiter
        async function translateAllLines() {
            if (!currentLrcEntries || !currentLrcEntries.length) {
                $('#lyricsStatus').text('No lyrics to translate');
                return;
            }
            $('#lyricsStatus').text('Translating...');
            // ensure cache array length
            currentTranslations = currentTranslations || [];

            // Build single payload with delimiter (avoid internal newlines inside lines)
            const texts = currentLrcEntries.map(e => (e.text || '').replace(/\r?\n/g, ' ')); // flatten internal newlines
            const payload = texts.join(TRANSLATION_DELIM);

            // Use provider selected in settings (fallback to 'hf' then google)
            let translationProvider = (translationProviderSetting || 'hf').toLowerCase().trim();
            //if ((translationProvider !== 'google' || translationProvider !== 'g') && (translationProvider !== 'hf' ||  translationProvider !==  'h') && (translationProvider !== 'openrouter' ||  translationProvider !==  'o')) translationProvider = 'google';

            let translatedAll = '';

            if (translationProvider === 'hf' && (hfToken || window.HF_API_KEY)) {
                translatedAll = await translateWholeWithHF(payload, translationInstructionDefault);
            } else if (translationProvider === 'openrouter' && (OPENROUTER_API_KEY || window.OPENROUTER_API_KEY)) {
                translatedAll = await translateWholeWithOpenRouter(payload, translationInstructionDefault);
            } else {
                // fallback to Google Translate if provider not available or explicitly selected
                translatedAll = await translateWholeWithGoogle(payload);
            }

            if (!translatedAll) {
                $('#lyricsStatus').text('Translation failed');
                return;
            }

            // Normalize translator output before splitting:
            // - remove CRs and ZERO-WIDTH spaces
            // - convert any literal "\n" sequences back to real newlines (some APIs escape them)
            // - normalize any stray variants of <<<LINE>>> (spaces/case) and remove surrounding whitespace
            let safeTranslated = String(translatedAll).replace(/\r/g, '').replace(/\u200B/g, '');
            safeTranslated = safeTranslated.replace(/\\n/g, '\n'); // replace literal backslash-n with newline (if API escaped)
            // Normalize any token-like markers (translators may localize or modify inside-token text,
            // e.g. <<<LÍNEA>>>, <<<Ligne>>>, <<<Linea>>>, or other accented/letter variants).
            // First try a Unicode-aware letter+mark+space pattern, then a broad fallback for any
            // short sequence enclosed by many < and >. Both replace with the canonical token.
            try {
                safeTranslated = safeTranslated.replace(/<<+\s*[\p{L}\p{M}\s\-\._]{1,40}\s*>>+/gu, '<<<LINE>>>');
            } catch (err) {
                // If environment doesn't support \p Unicode property escapes, fall back to a more permissive ascii-range
                safeTranslated = safeTranslated.replace(/<<+\s*[A-Za-zÀ-ÖØ-öø-ÿ\u00C0-\u024F\s\-\._]{1,40}\s*>>+/g, '<<<LINE>>>');
            }
            // Final defensive normalization: any short bracketed chunk becomes token (avoids missed edge-cases)
            safeTranslated = safeTranslated.replace(/<<+\s*[^>\n]{1,40}\s*>>+/g, '<<<LINE>>>');
            // remove incidental whitespace around token so split is reliable, but do NOT inject newlines
            safeTranslated = safeTranslated.replace(/\s*<<<LINE>>>\s*/g, '<<<LINE>>>');

            // Primary split by the exact token (preserves empty strings)
            let parts = safeTranslated.split(TRANSLATION_DELIM);

            // Fallbacks if counts don't match (try to recover while preserving empty lines)
            if (parts.length !== texts.length) {
                // Try regex extraction that captures segments between tokens (preserves empties)
                const re = /([\s\S]*?)(?:<<<LINE>>>|$)/g;
                const tmp = [];
                let m;
                while ((m = re.exec(safeTranslated)) !== null) {
                    tmp.push(m[1]);
                    if (tmp.length >= texts.length) break;
                }
                if (tmp.length === texts.length) {
                    parts = tmp;
                } else {
                    // Try simple newline split (preserve empties)
                    const nlParts = safeTranslated.split(/\r?\n/);
                    if (nlParts.length === texts.length) {
                        parts = nlParts;
                    } else {
                        // Last resort: align by truncating/padding to expected length
                        parts = parts.slice(0, texts.length);
                        while (parts.length < texts.length) parts.push('');
                    }
                }
            }

            // Map results back into currentTranslations aligning by index, and trim surrounding whitespace
            currentTranslations = new Array(currentLrcEntries.length).fill('');
            for (let i = 0; i < currentLrcEntries.length; i++) {
                const rawPart = (parts[i] !== undefined && parts[i] !== null) ? String(parts[i]) : '';

                // Remove weird/non-standard characters (modify regex as needed) (Clear the china words...)
                //const cleanedPart = rawPart.replace(/[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFA-Za-z0-9\s\.,;:!?\-'"]/g, '');

                // remove any accidental token remnants and trim ends but keep empty-lines
                currentTranslations[i] = rawPart.replace(/<<<LINE>>>/g, '').replace(/\u200B/g, '').trim();
            }

            $('#lyricsStatus').text('Translation ready');
        }

        // Insert or update translation text inside each .lrc-line -> .lrc-translation child
        function showTranslations() {
            const $lines = $('#lyricsInner .lrc-line');
            if (!$lines.length) return;
            $lines.each(function() {
                const idx = parseInt($(this).attr('data-idx'));
                const $trans = $(this).find('.lrc-translation');
                const text = (currentTranslations && currentTranslations[idx]) ? currentTranslations[idx] : '';
                $trans.text(text || '').show();
            });
            translationsShown = true;
        }

        function hideTranslations() {
            $('#lyricsInner .lrc-translation').hide();
            translationsShown = false;
        }

        // Toggle translations on button click
        $('#translationLyricsBtn').off('click').on('click', async function() {
            // If translations already shown, hide them
            if (translationsShown) {
                hideTranslations();
                $('#lyricsStatus').text('Translations hidden');
                return;
            }
            // else ensure translations are available and show them
            await translateAllLines();
            showTranslations();
        });

        // Toggle translations on button click
        $('#translationLyricsBtn').off('click').on('click', async function() {
            // If translations already shown, hide them
            if (translationsShown) {
                hideTranslations();
                $('#lyricsStatus').text('Translations hidden');
                return;
            }
            // else ensure translations are available and show them
            await translateAllLines();
            showTranslations();
        });

        // Lyrics settings popup (Translation settings)
        $('#translationSettingsBtn').off('click').on('click', function() {
            let $modal = $('#translationSettingsModal');
            if ($modal.length === 0) {
                $modal = $(`
                    <div id="translationSettingsModal" style="display:flex; position:fixed; inset:0; background:rgba(0,0,0,0.6); padding:20px; z-index:1000000; align-items:center; justify-content:center;">
                        <!-- Outer panel: column layout with constrained height so inner area can scroll -->
                        <div style="background:#222; color:#eee; padding:16px; border-radius:8px; max-width:760px; width:92%; margin:auto; display:flex; flex-direction:column; max-height:calc(100vh - 80px); box-sizing:border-box;">
                            <h3 style="margin:0 0 8px 0;">Lyrics Settings</h3>

                            <!-- Scrollable content area -->
                            <div style="overflow-y:auto; padding-right:8px; flex:1 1 auto;">
                                <div style="display:flex; gap:8px; flex-wrap:wrap;">

                                    <!-- Automatic options -->
                                    <div style="flex:1 1 100%; margin-top:6px;">
                                        <label style="color:#ccc; font-size:13px; display:block; margin-bottom:6px;">
                                            <input type="checkbox" id="setting_autoLyrics" style="margin-right:8px;"> Auto lyrics (fetch on track change)
                                        </label>
                                        <label style="color:#ccc; font-size:13px; display:block; margin-bottom:6px;">
                                            <input type="checkbox" id="setting_autoTranslation" style="margin-right:8px;"> Auto translation (translate after lyrics fetched)
                                        </label>
                                        <label style="color:#ccc; font-size:13px; display:block;">
                                            <input type="checkbox" id="setting_autoClear" style="margin-right:8px;"> Auto clear lyrics on track change
                                        </label>
                                    </div>

                                    <!-- Google target language and AI prompt language label -->
                                    <div style="flex:1 1 100%;">
                                        <label style="font-size:13px;color:#bbb; display:block; margin-bottom:6px;">Translation Provider</label>
                                        <select id="setting_translationProvider" style="display:block; width:90%; padding:8px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;">
                                            <option value="google">Google (public)</option>
                                            <option value="hf">HuggingFace / Router</option>
                                            <option value="openrouter">OpenRouter</option>
                                        </select>
                                        <label style="font-size:12px;color:#666; display:block; margin-top:6px;">Choose default provider for translations. The Translate button will use this setting instead of prompting.</label>
                                    </div>

                                    <div style="flex:1 1 100%;">
                                        <a href="https://hf.co/settings/tokens" style="font-size:13px;color:#bbb;">HuggingFace Token</a>
                                        <input id="setting_hfToken" style="display:block; width:90%; padding:8px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;" />
                                        <label style="font-size:12px;color:#666; display:block; margin-top:6px;">Your personal key to access models to your Hugging Face account.</label>
                                    </div>

                                    <div style="flex:1 1 100%;">
                                        <a href="https://huggingface.co/docs/inference-providers/en/index" style="font-size:13px;color:#bbb;">HuggingFace Model</a>
                                        <input id="setting_hfModel" style="display:block; width:90%; padding:8px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;" />
                                        <label style="font-size:13px;color:#666; white-space:pre-line; cursor:text;">meta-llama/Llama-3.3-70B-Instruct - allenai/Molmo2-8B:publicai
                                            mistralai/Mistral-7B-Instruct-v0.3 - openai/gpt-oss-20b:groq
                                            openai/gpt-oss-20b:hyperbolic - openai/gpt-oss-20b:together
                                            zai-org/GLM-4.7-Flash:zai-org - HuggingFaceTB/SmolLM3-3B:hf-inference
                                            allenai/Olmo-3.1-32B-Instruct:publicai - Qwen/Qwen2.5-VL-32B-Instruct:fireworks-ai
                                        </label>
                                    </div>

                                    <div style="flex:1 1 100%;">
                                        <a href="https://openrouter.ai/settings/keys" style="font-size:13px;color:#bbb;">OpenRouter API Key</a>
                                        <input id="setting_openrouter_key" style="display:block; width:90%; padding:8px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;" />
                                        <label style="font-size:12px;color:#666; display:block; margin-top:6px;">Your secret key for the OpenRouter API. It lets you use many different AI models (like GPT-4, Claude, Llama) through one platform.</label>
                                    </div>

                                    <div style="flex:1 1 100%;">
                                        <a href="https://openrouter.ai/models" style="font-size:13px;color:#bbb;">OpenRouter Model</a>
                                        <input id="setting_openrouter_model" style="display:block; width:90%; padding:8px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;" />
                                        <label style="font-size:13px;color:#666; white-space:pre-line; cursor:text;">meta-llama/llama-3.3-70b-instruct:free - google/gemini-2.0-flash-exp:free
                                            arcee-ai/trinity-large-preview:free - deepseek/deepseek-r1-0528:free
                                            mistralai/mistral-small-3.1-24b-instruct:free
                                        </label>
                                    </div>

                                    <!-- Google target language and AI prompt language label -->
                                    <div style="flex:1 1 100%; margin-top:6px;">
                                        <label style="font-size:13px;color:#bbb; display:block; margin-bottom:6px;">Google Target Language (ISO code)</label>
                                        <input id="setting_googleLang" placeholder="fa" style="display:block; width:90%; padding:8px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;" />
                                        <label style="font-size:12px;color:#666; display:block; margin-top:6px;">e.g. fa for Persian, fr for French, es for Spanish</label>
                                    </div>
                                    <div style="flex:1 1 100%; margin-top:6px;">
                                        <label style="font-size:13px;color:#bbb; display:block; margin-bottom:6px;">AI Prompt Language Label</label>
                                        <input id="setting_aiPromptLanguage" placeholder="Persian (Farsi)" style="display:block; width:90%; padding:8px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;" />
                                        <label style="font-size:12px;color:#666; display:block; margin-top:6px;">This text will replace "Persian (Farsi)" inside the AI system instruction</label>
                                    </div>

                                    <!-- App Font selection -->
                                    <div style="flex:1 1 100%; margin-top:6px;">
                                        <label style="font-size:13px;color:#bbb; display:block; margin-bottom:6px;">App Font (UI)</label>
                                        <select id="setting_appFont" style="display:block; width:90%; padding:8px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;">
                                            <option value='"Ink Free", "Segoe UI", Roboto, Arial, sans-serif'>Ink Free</option>
                                            <option value='"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'>Segoe UI</option>
                                            <option value='Roboto, "Helvetica Neue", Arial, sans-serif'>Roboto</option>
                                            <option value='Arial, Helvetica, sans-serif'>Arial</option>
                                            <option value='Tahoma, Verdana, Segoe, sans-serif'>Tahoma</option>
                                            <option value='Verdana, Geneva, sans-serif'>Verdana</option>
                                            <option value='"Times New Roman", Times, serif'>Times New Roman</option>
                                            <option value='Georgia, "Times New Roman", Times, serif'>Georgia</option>
                                            <option value='Calibri, Candara, "Segoe UI", Arial'>Calibri</option>
                                            <option value='"Courier New", Courier, monospace'>Courier New</option>
                                        </select>
                                        <label style="font-size:12px;color:#666; display:block; margin-top:6px;">Choose the font used for the entire UI and lyrics area.</label>
                                    </div>

                                    <!-- Visualizer Settings -->
                                    <div style="flex:1 1 100%; margin-top:12px; border-top:1px dashed #333; padding-top:12px;">
                                        <div style="font-weight:bold; color:#ddd; margin-bottom:8px;">Visualizer (Equalizer) Settings</div>
                                        <label style="display:block; color:#ccc; margin-bottom:6px;">
                                            <input type="checkbox" id="setting_visualizer_enable" style="margin-right:8px;"> Enable Visualizer
                                        </label>

                                        <label style="display:block; color:#ccc; margin-bottom:6px;">
                                            <span style="display:inline-block; width:120px;">Style:</span>
                                            <select id="setting_visualizer_style" style="padding:6px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;">
                                                <option value="bars">Bars</option>
                                                <option value="waveform">Waveform</option>
                                                <option value="radial">Radial</option>
                                            </select>
                                        </label>

                                        <label style="display:block; color:#ccc; margin-bottom:6px;">
                                            <span style="display:inline-block; width:120px;">Height:</span>
                                            <input id="setting_visualizer_height" type="range" min="10" max="200" value="40" style="width:200px; vertical-align:middle;"/>
                                            <span id="vizHeightLabel" style="margin-left:8px; color:#999;">40px</span>
                                        </label>

                                        <label style="display:block; color:#ccc; margin-bottom:6px;">
                                            <span style="display:inline-block; width:120px;">Sensitivity:</span>
                                            <input id="setting_visualizer_sensitivity" type="range" min="50" max="300" value="100" step="1" style="width:200px; vertical-align:middle;"/>
                                            <span id="vizSensitivityLabel" style="margin-left:8px; color:#999;">100%</span>
                                        </label>

                                        <label style="display:block; color:#ccc; margin-bottom:6px;">
                                            <span style="display:inline-block; width:120px;">Bars:</span>
                                            <input id="setting_visualizer_bars" type="range" min="8" max="128" value="80" step="1" style="width:200px; vertical-align:middle;"/>
                                            <span id="vizBarsLabel" style="margin-left:8px; color:#999;">80</span>
                                        </label>

                                        <label style="display:block; color:#ccc; margin-bottom:6px;">
                                            <input type="checkbox" id="setting_color_enable" style="margin-right:8px;">Custom Color:
                                            <input id="setting_visualizer_color" type="color" value="#66ccff" style="vertical-align:middle; width:64px; height:30px; border:1px solid #444; background:#111;"/>
                                        </label>


                                        <div style="font-size:12px; color:#666;">Enable or customize the visual equalizer shown under the metadata area. When audio is paused the visualizer will render a zero baseline.</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer: keep buttons visible (not part of scrollable area) -->
                            <div style="text-align:right; margin-top:12px; flex:0 0 auto;">
                                <button id="translationSettingsCancel" style="margin-right:8px; padding:6px 12px; background:#555; border:none; color:#fff; border-radius:4px; cursor:pointer;">Cancel</button>
                                <button id="translationSettingsSave" style="padding:6px 12px; background:#0073e6; border:none; color:#fff; border-radius:4px; cursor:pointer;">Save</button>
                            </div>
                        </div>
                    </div>
                `);
                $('body').append($modal);

                $('#translationSettingsCancel').on('click', function() {
                    $('#translationSettingsModal').hide();
                });

                $('#translationSettingsSave').on('click', function() {
                    // Apply settings only in-memory for this session (no persistence)
                    const v_hfModel = $('#setting_hfModel').val();
                    if (v_hfModel) hfModel = v_hfModel.trim();

                    const v_hfToken = $('#setting_hfToken').val().trim();
                    if (v_hfToken) hfToken = v_hfToken;

                    const v_or_key = $('#setting_openrouter_key').val().trim();
                    if (v_or_key) OPENROUTER_API_KEY = v_or_key;

                    const v_or_model = $('#setting_openrouter_model').val();
                    if (v_or_model) OPENROUTER_MODEL = v_or_model.trim();

                    // Google target language (ISO)
                    const v_google = ($('#setting_googleLang').val() || '').trim();
                    if (v_google) googleTargetLang = v_google;

                    // AI prompt language label
                    const v_aiPrompt = ($('#setting_aiPromptLanguage').val() || '').trim();
                    if (v_aiPrompt) aiPromptLanguage = v_aiPrompt;

                    // rebuild default instruction from aiPromptLanguage
                    translationInstructionDefault =
                        `Translate the following lyrics into fluent, natural ${aiPromptLanguage}. Preserve meaning and punctuation. Return the translation with each original line corresponding to the same number of lines, and separate lines using the exact token <<<LINE>>>.`;

                    // App font selection
                    const v_appFont = ($('#setting_appFont').val() || '').trim();
                    if (v_appFont) {
                        appFont = v_appFont;
                        try {
                            // update CSS variable on the container to apply across UI
                            $('#mp3ViewerContainer').css('--app-font-family', appFont);
                        } catch (e) { console.warn('apply app font failed', e); }
                    }

                    // Read new automatic option checkboxes
                    autoLyrics = !!$('#setting_autoLyrics').is(':checked');
                    autoTranslation = !!$('#setting_autoTranslation').is(':checked');
                    autoClearLyrics = !!$('#setting_autoClear').is(':checked');

                    // Read translation provider selection
                    const provider = $('#setting_translationProvider').val();
                    if (provider) translationProviderSetting = provider;

                    // --- Visualizer settings read & apply ---
                    visualizerEnabled = !!$('#setting_visualizer_enable').is(':checked');
                    const selStyle = $('#setting_visualizer_style').val();
                    if (selStyle) visualizerStyle = selStyle;
                    colorEnabled = !!$('#setting_color_enable').is(':checked');
                    const selColor = $('#setting_visualizer_color').val();
                    if (selColor) visualizerColor = selColor;
                    const selHeight = parseInt($('#setting_visualizer_height').val(), 10) || 80;
                    visualizerHeight = selHeight;
                    // sensitivity slider is percent: 50..300 -> 0.5..3.0
                    const selSensitivity = parseInt($('#setting_visualizer_sensitivity').val(), 10) || 100;
                    visualizerSensitivity = Math.max(0.5, Math.min(3.0, selSensitivity / 100));

                    // bars count (only meaningful for 'bars' style)
                    const selBars = parseInt($('#setting_visualizer_bars').val(), 10) || 32;
                    visualizerBarCount = Math.max(4, Math.min(128, selBars));
                    // Apply immediately
                    applyVisualizerSettings();

                    $('#translationSettingsModal').hide();
                    $('#lyricsStatus').text('Lyrics settings saved');
                });
            }

            // populate inputs with current values
            $('#setting_hfToken').val(hfToken || '');
            $('#setting_hfModel').val(hfModel || '');
            $('#setting_openrouter_key').val(OPENROUTER_API_KEY || '');
            $('#setting_openrouter_model').val(OPENROUTER_MODEL || '');

            // populate new google / ai inputs
            $('#setting_googleLang').val(googleTargetLang || 'fa');
            $('#setting_aiPromptLanguage').val(aiPromptLanguage || 'Persian (Farsi)');

            // populate app font select
            $('#setting_appFont').val(appFont || '"Ink Free", "Segoe UI", Roboto, Arial, sans-serif');

            // populate new auto option checkboxes
            $('#setting_autoLyrics').prop('checked', !!autoLyrics);
            $('#setting_autoTranslation').prop('checked', !!autoTranslation);
            $('#setting_autoClear').prop('checked', !!autoClearLyrics);

            // populate translation provider select
            $('#setting_translationProvider').val(translationProviderSetting || 'hf');

            // Populate visualizer controls with current values
            $('#setting_visualizer_enable').prop('checked', !!visualizerEnabled);
            $('#setting_visualizer_style').val(visualizerStyle || 'bars');
            $('#setting_color_enable').prop('checked', !!colorEnabled);
            $('#setting_visualizer_color').val(visualizerColor || '#66ccff');
            $('#setting_visualizer_height').val(visualizerHeight || 80);
            $('#vizHeightLabel').text((visualizerHeight || 80) + 'px');
            $('#setting_visualizer_sensitivity').val(Math.round((visualizerSensitivity || 1.0) * 100));
            $('#vizSensitivityLabel').text(Math.round((visualizerSensitivity || 1.0) * 100) + '%');
            $('#setting_visualizer_bars').val(visualizerBarCount || 32);
            $('#vizBarsLabel').text(visualizerBarCount || 32);

            // live update height label when user moves slider in modal
            $('#setting_visualizer_height').off('input').on('input', function() {
                $('#vizHeightLabel').text(this.value + 'px');
            });

            // live update sensitivity label
            $('#setting_visualizer_sensitivity').off('input').on('input', function() {
                $('#vizSensitivityLabel').text(this.value + '%');
            });

            // live update bars label
            $('#setting_visualizer_bars').off('input').on('input', function() {
                $('#vizBarsLabel').text(this.value);
            });

            $('#translationSettingsModal').show();
        });

        // Ensure minimal styling exists for translation lines (only once)
        if (!$('#lyricsTranslationStyles').length) {
            $('head').append(`
                <style id="lyricsTranslationStyles">
                    .lrc-translation { opacity: 0.95; display: none; direction: rtl; }
                    .lrc-line .lrc-original { display: block; }
                </style>
            `);
        }

        /*
        *
        * Add lyrics handling and lrclib fetching (END)
        *
        */

        // Playlist variables
        let playlist = [];
        let currentTrackIndex = 0;
        let isLoop = false;
        let isRepeat = false;
        let isShuffle = false;
        const playlistAlbumArts = new Map();
        const playlistTags = new Map(); // store parsed ID3 tags per File/src-item
        const extractingAlbumArts = new Set();
        let playlistSearchQuery = ''; // <-- Add this line

        // Add play/pause button logic
        $('#playBtn').off('click').on('click', function() {
            if ($audioPlayer[0].paused) {
                $audioPlayer[0].play();
                $(this).text('⏸️ Pause');
            } else {
                $audioPlayer[0].pause();
                $(this).text('▶️ Play');
            }
        });

        // Add play/pause cover logic
        $('#albumArt').off('click').on('click', function() {
            if ($audioPlayer[0].paused) {
                $audioPlayer[0].play();
                $('#playBtn').text('⏸️ Pause');
            } else {
                $audioPlayer[0].pause();
                $('#playBtn').text('▶️ Play');
            }
        });

        // Audio player event listeners
        $audioPlayer.on('play', function() {
            $('#playBtn').text('⏸️ Pause');
        });

        $audioPlayer.on('pause ended', function() {
            $('#playBtn').text('▶️ Play');
        });

        // Shuffle functionality
        function getRandomTrackIndex() {
            if (playlist.length <= 1) return currentTrackIndex;
            const availableTracks = [...Array(playlist.length).keys()].filter(i => i !== currentTrackIndex);
            return availableTracks[Math.floor(Math.random() * availableTracks.length)];
        }

        // Single shuffle button handler with improved logic
        $('#shuffleBtn').off('click').on('click', function() {
            isShuffle = !isShuffle;
            $(this).text('🔀 Auto Shuffle');

            if (isShuffle) {
                // Create shuffled order on activation
                const currentTrack = playlist[currentTrackIndex];
                const shuffledPlaylist = [...playlist];
                for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]];
                }
                playlist = shuffledPlaylist;
                currentTrackIndex = playlist.indexOf(currentTrack);
                renderPlaylist();
            }
        });

        // Update event listeners
        $fileInput.on('change', handleFileSelection);
        $audioPlayer.on('ended', playNextTrack);
        $('#nextBtn').on('click', playNextTrack);
        $('#prevBtn').on('click', playPrevTrack);

        $('#loopBtn').on('click', function() {
            isLoop = !isLoop;
            $audioPlayer.prop('loop', isLoop);
            $(this).text('' + (isLoop ? '🔂 Loop: On' : '🔁 Loop: Off'));
        });
        $('#repeatBtn').on('click', function() {
            isRepeat = !isRepeat;
            $(this).text('🔃 Repeat: ' + (isRepeat ? 'On' : 'Off'));
        });
        $('#shuffleBtn').on('click', function() {
            isShuffle = !isShuffle;
            $(this).text('🔀 Auto Shuffle');
        });

        // Play a track by index
        async function playTrack(index) {
            if (index < 0 || index >= playlist.length) return;
            const file = playlist[index];
            updateStatus('Processing file...');
            let audioSrc;
            if (file.src) {
                // Use src directly for file path
                audioSrc = file.src;

                // If remote HTTP(S) and GM is available, try to obtain a blob via GM to avoid CORS issues.
                // This will download the file via the userscript engine and create a blob URL we can set on the audio element.
                let usedBlobUrl = null;
                if (/^https?:\/\//i.test(String(audioSrc)) && typeof GM_xmlhttpRequest === 'function') {
                    try {
                        // Try quick download - if it succeeds we bypass CORS entirely.
                        const blob = await gmDownloadToBlob(audioSrc);
                        if (blob && blob.size > 0) {
                            try {
                                usedBlobUrl = URL.createObjectURL(blob);
                                // ensure no crossorigin attribute (blob urls don't need it)
                                try { $audioPlayer.removeAttr('crossorigin'); } catch (e) {}
                                $audioPlayer.attr('src', usedBlobUrl);
                            } catch (e) {
                                // fallback if createObjectURL fails
                                usedBlobUrl = null;
                            }
                        }
                    } catch (e) {
                        console.warn('gm download failed', e);
                    }
                }

                // If GM couldn't produce a blob, fall back to assigning original src (best-effort)
                if (!usedBlobUrl) {
                    // IMPORTANT: set crossorigin BEFORE setting src for remote/file URLs so WebAudio can attach.
                    if (/^(https?:|file:)/i.test(String(audioSrc))) {
                        try { $audioPlayer.attr('crossorigin', 'anonymous'); } catch (e) { /* ignore */ }
                    } else {
                        try { $audioPlayer.removeAttr('crossorigin'); } catch (e) { /* ignore */ }
                    }
                    // assign src AFTER crossorigin attribute set
                    $audioPlayer.attr('src', audioSrc);
                }

                $mainPlayerContainer.show();
                $playerContainer.show();
                $albumArt.hide();
                $trackInfo.html('<div>Loading metadata...</div>');

                // Ensure AudioContext exists/resumed and (re)create MediaElementSource to route audio through analyser
                try {
                    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                    if (audioCtx.state === 'suspended') {
                        // resume on user gesture or programmatically
                        audioCtx.resume().catch(()=>{ /* ignore */ });
                    }
                } catch (e) {
                    console.warn('AudioContext create/resume failed', e);
                }

                // If analyser not created yet, create it (setupAnalyzer will also do this)
                if (!analyser && audioCtx) {
                    analyser = audioCtx.createAnalyser();
                    analyser.fftSize = 1024;
                    bufferLength = analyser.frequencyBinCount;
                    dataArray = new Uint8Array(bufferLength);
                }

                // If a previous sourceNode exists, disconnect it to avoid routing issues when switching sources
                try {
                    if (sourceNode) {
                        try { sourceNode.disconnect(); } catch (err) { /* ignore */ }
                        sourceNode = null;
                    }
                    if (audioCtx && $audioPlayer && $audioPlayer[0] && typeof audioCtx.createMediaElementSource === 'function') {
                        sourceNode = audioCtx.createMediaElementSource($audioPlayer[0]);
                        if (sourceNode) {
                            if (!analyser) analyser = audioCtx.createAnalyser();
                            sourceNode.connect(analyser);
                            analyser.connect(audioCtx.destination);
                        }
                    }
                } catch (e) {
                    console.warn('Recreating MediaElementSource failed', e);
                }

                // Attempt to extract metadata from remote / file URL (ranged fetch).
                // This will populate playlistTags and playlistAlbumArts similar to local files.
                try {
                    await extractMetadataFromSrc(file, function() {
                        const tags = playlistTags.get(file) || {};
                        // display metadata if available, else show filename
                        if (Object.keys(tags).length) {
                            displayMetadata(tags, file.name || (new URL(file.src)).pathname.split('/').pop());
                        } else {
                            $trackInfo.html(`<div><strong>Filename:</strong> ${file.name}</div>`);
                        }
                        // call auto behaviors afterwards
                        try { handleTrackChanged(file); } catch (e) { console.error(e); }
                    });
                } catch (e) {
                    console.error('Remote metadata extraction error:', e);
                    $trackInfo.html(`<div><strong>Filename:</strong> ${file.name}</div>`);
                    try { handleTrackChanged(file); } catch (e) { console.error(e); }
                }
            } else {
                // Use File object
                audioSrc = URL.createObjectURL(file);
                $audioPlayer.attr('src', audioSrc);
                $mainPlayerContainer.show();
                $playerContainer.show();
                $albumArt.hide();
                $trackInfo.html('<div>Loading metadata...</div>');
                extractMetadata(file, file.name, function() {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        try {
                            const tags = parseID3Tags(e.target.result);
                            displayMetadata(tags, file.name);
                            updateStatus('File loaded successfully');
                        } catch (error) {
                            $trackInfo.html('<div>No metadata available</div>');
                        } finally {
                            // After metadata/display finished, run auto behavior
                            try { handleTrackChanged(file); } catch (e) { console.error(e); }
                        }
                    };
                    reader.readAsArrayBuffer(file);
                });
            }
            renderPlaylist();
        }

        // New: automatically handle per-track actions (clear / fetch / translate)
        async function handleTrackChanged(file) {
            // auto clear previous lyrics if requested
            if (autoClearLyrics) {
                clearLyricsAction();
            }

            // If auto lyrics is not enabled, stop here
            if (!autoLyrics) return;

            // Determine search query
            const tags = playlistTags.get(file) || {};
            const artist = tags.artist || tags.albumArtist || '';
            const title = tags.title || (file && file.name ? file.name.replace(/\.mp3$/i, '') : '');

            if (!title) {
                $('#lyricsStatus').text('No title available for auto-lyrics');
                return;
            }

            $('#lyricsStatus').text('Auto searching lyrics...');
            const query = (artist ? artist + ' ' : '') + title;

            // perform search
            const results = await searchLyricsOnLrclib(query);
            if (!results || !results.length) {
                $('#lyricsStatus').text('No lyrics found (auto)');
                return;
            }

            // pick first result (avoid modal) and fetch its lyrics
            const item = results[0];
            $('#lyricsStatus').text(`Auto-loading: ${item.trackName || item.name || title}`);
            const lrcText = await fetchLyricsById(item);
            if (!lrcText) {
                $('#lyricsStatus').text('Could not auto-load lyrics');
                return;
            }

            // parse and render
            const entries = parseLRC(lrcText);
            currentLrcEntries = entries;
            currentLrcIndex = -1;
            renderLyrics(entries);
            $('#lyricsStatus').text(`Auto-loaded: ${item.trackName || item.name || title}`);

            // optionally auto-translate after lyrics loaded
            if (autoTranslation) {
                $('#lyricsStatus').text('Auto-translating...');
                await translateAllLines();
                showTranslations();
            }
        }

        // Play next track
        function playNextTrack() {
            if (!playlist.length) return;

            if (isShuffle) {
                currentTrackIndex = getRandomTrackIndex();
            } else if (currentTrackIndex < playlist.length - 1) {
                currentTrackIndex++;
            } else if (isRepeat) {
                currentTrackIndex = 0;
            } else {
                return;
            }
            playTrack(currentTrackIndex);
        }

        // Play previous track
        function playPrevTrack() {
            if (currentTrackIndex > 0) {
                currentTrackIndex--;
                playTrack(currentTrackIndex);
            }
        }

        // Use the Media Session API
        if ('mediaSession' in navigator) {
            navigator.mediaSession.setActionHandler('previoustrack', function() { playPrevTrack(); });
            navigator.mediaSession.setActionHandler('nexttrack', function() { playNextTrack(); });
            navigator.mediaSession.setActionHandler('play', function() { $audioPlayer[0].play(); });
            navigator.mediaSession.setActionHandler('pause', function() { $audioPlayer[0].pause(); });

            // Use the actual audio element and guard against NaN/Infinite duration
            const audioEl = ($audioPlayer && $audioPlayer[0]) ? $audioPlayer[0] : document.getElementById('audioPlayer');

            // Update MediaSession position only when values are finite
            audioEl.addEventListener('timeupdate', () => {
                if ('mediaSession' in navigator && typeof navigator.mediaSession.setPositionState === 'function') {
                    const duration = audioEl.duration;
                    const position = audioEl.currentTime;
                    const playbackRate = audioEl.playbackRate;

                    if (Number.isFinite(duration) && Number.isFinite(position) && Number.isFinite(playbackRate)) {
                        // duration must be a finite float > 0
                        if (duration > 0) {
                            try {
                                navigator.mediaSession.setPositionState({
                                    duration: duration,
                                    playbackRate: playbackRate,
                                    position: position
                                });
                            } catch (err) {
                                console.warn('MediaSession.setPositionState failed:', err);
                            }
                        }
                    }
                }
            });

            // Also set once when metadata is loaded (ensures duration is available early)
            audioEl.addEventListener('loadedmetadata', () => {
                if ('mediaSession' in navigator && typeof navigator.mediaSession.setPositionState === 'function' && Number.isFinite(audioEl.duration)) {
                    try {
                        navigator.mediaSession.setPositionState({
                            duration: audioEl.duration,
                            playbackRate: audioEl.playbackRate || 1,
                            position: audioEl.currentTime || 0
                        });
                    } catch (err) { /* ignore */ }
                }
            });
        }

        // Render the playlist
    function renderPlaylist() {
        const $playlist = $('#playlist');
        $playlist.empty();

        // Add playlist styles
        if (!$('#playlistStyles').length) {
            $('head').append(`
                <style id="playlistStyles">
                    #playlist li {
                        padding: 10px 15px;
                        margin: 5px 0;
                        cursor: pointer;
                        color: #4c4c4c;
                        background: #1a1a1a;
                        border-radius: 6px;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        position: relative;
                        overflow: hidden;
                        transform-origin: left;
                    }

                    #playlist li.active {
                        border-radius: 6px 0 0 6px;
                    }

                    #playlist li:hover {
                        background: #2a2a2a;
                        color: #fff;
                        padding-left: 25px;
                        /*transform: scale(1.02);*/
                        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                    }

                    #playlist li.active {
                        background: linear-gradient(45deg, #003D6F, #001b3e);
                        color: white;
                        font-weight: bold;
                        transform: scale(1.02);
                    }

                    #playlist li::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(
                            90deg,
                            transparent,
                            rgba(255,255,255,0.1),
                            transparent
                        );
                        transition: 0.5s;
                    }

                    #playlist li:hover::after {
                        left: 100%;
                    }

                    #playlist li.ui-sortable-helper {
                        background: #333;
                        transform: scale(1.05) rotate(2deg);
                        box-shadow: 0 8px 16px rgba(0,0,0,0.3);
                    }

                    #playlist li.ui-sortable-placeholder {
                        background: #2a2a2a;
                        visibility: visible !important;
                        height: 40px;
                        border: 2px dashed #444;
                    }
                </style>
            `);
        }

        // Filter playlist based on search query
        let filteredPlaylist = playlist;
        if (playlistSearchQuery) {
            filteredPlaylist = playlist.filter(file =>
                file.name.replace(/\.mp3$/i, '').toLowerCase().includes(playlistSearchQuery)
            );
        }

        // Render playlist items
        filteredPlaylist.forEach((file, idx) => {
            // Find the real index in the original playlist
            const realIdx = playlist.indexOf(file);
            const fileName = file.name.replace(/\.mp3$/i, '');
            const isActive = realIdx === currentTrackIndex;
            let thumb = '';
            let artUrl = playlistAlbumArts.get(file);

            // Extract metadata if not yet attempted (handle both File objects and src-only items)
            if (artUrl === undefined && !extractingAlbumArts.has(file)) {
                extractingAlbumArts.add(file);
                if (file.src) {
                    extractMetadataFromSrc(file, function() {
                        extractingAlbumArts.delete(file);
                        renderPlaylist();
                    });
                } else {
                    extractMetadata(file, file.name, function() {
                        extractingAlbumArts.delete(file);
                        renderPlaylist();
                    });
                }
                artUrl = null;
            }

            if (artUrl) {
                thumb = `<img src="${artUrl}" style="width:32px;height:32px;object-fit:cover;border-radius:3px;vertical-align:middle;margin-right:8px;">`;
            } else {
                thumb = `<span style="display:inline-block;width:32px;height:32px;margin-right:8px;vertical-align:middle;background:#222;border-radius:3px;"></span>`;
            }
            $playlist.append(`
                <li data-idx="${realIdx}" class="${isActive ? 'active' : ''}">
                    ${thumb}${fileName}
                    <button class="removeTrackBtn" title="Remove Track">✖</button>
                </li>
           `);
        });

        // Click handler for tracks
        $playlist.find('li').on('click', function() {
            const idx = parseInt($(this).attr('data-idx'));
            if (!isNaN(idx)) {
                currentTrackIndex = idx;
                playTrack(currentTrackIndex);
            }
        });

        // Click handler for tracks
        $playlist.find('.removeTrackBtn').on('click', function(e) {
            e.stopPropagation();
            const idx = parseInt($(this).parent().attr('data-idx'));
            if (!isNaN(idx)) {
                const file = playlist[idx];
                const artUrl = playlistAlbumArts.get(file);
                if (artUrl) {
                    URL.revokeObjectURL(artUrl);
                }
                playlistAlbumArts.delete(file);
                extractingAlbumArts.delete(file);
                playlist.splice(idx, 1);
                if (currentTrackIndex === idx) {
                    currentTrackIndex = Math.max(0, currentTrackIndex - 1);
                    if (playlist.length) {
                        playTrack(currentTrackIndex);
                    } else {
                        $audioPlayer[0].pause();
                        $trackInfo.html('<div>No track loaded</div>');
                        $albumArt.hide();
                        $audioPlayer.attr('src', '');
                    }
                } else if (idx < currentTrackIndex) {
                    currentTrackIndex--;
                }
                renderPlaylist();
            }
        });

        // Make playlist sortable
        $playlist.sortable({
            update: function(event, ui) {
                const newOrder = $playlist.find('li').map(function() {
                    return parseInt($(this).attr('data-idx'));
                }).get();
                playlist = newOrder.map(i => playlist[i]);
                currentTrackIndex = newOrder.indexOf(currentTrackIndex);
                renderPlaylist();
            }
        });

        // Add search input event handler after DOM is ready
        $('#playlistSearch').on('input', function() {
            playlistSearchQuery = $(this).val().toLowerCase();
            renderPlaylist();
        });

        // Save playlist in custom XML-like format
        $('#savePlaylistBtn').off('click').on('click', function() {
            let xml = '[\n';
            playlist.forEach(file => {
                // Use file.path if available, otherwise file.name
                const path = file.path || file.name;
                xml += `<media src="${path}"/>\n`;
            });
            xml += ']';
            const blob = new Blob([xml], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'playlist.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });

        // Load playlist from custom XML-like format
        $('#loadPlaylistBtn').off('click').on('click', function() {
            alert("⚠Warning:\nTo display the song information (metadata) correctly, also select the songs included in the playlist.\n\nChoose your playlist file in .json format.");
            $('#loadPlaylistInput').trigger('click');
        });

        /* The .json file must include the following data:
           [
             <media src="C:\aaa.mp3"/>
             <media src="C:\bbb.mp3"/>
             <media src="C:\ccc.mp3"/>
           ]
        */
        $('#loadPlaylistInput').off('change').on('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(ev) {
                const text = ev.target.result;
                const regex = /<media\s+src="([^"]+)"/g;
                let match;
                const paths = [];
                while ((match = regex.exec(text)) !== null) {
                    paths.push(match[1]);
                }
                if (!paths.length) {
                    updateStatus('No valid tracks found in playlist file', 'error');
                    return;
                }
                // Build playlist using src paths
                playlist = paths.map(path => ({
                    name: path.split('\\').pop().split('/').pop(),
                    src: path.startsWith('file:///') ? path : 'file:///' + path.replace(/\\/g, '/')
                }));
                currentTrackIndex = 0;
                renderPlaylist();
                updateStatus('Playlist loaded.');

                alert("⚠Warning:\nTo ensure the song metadata is displayed properly, also select the tracks that are part of the playlist.\n\nChoose your music files in .mp3 format.");

                // Prompt user to select files for metadata
                $('<input type="file" multiple accept=".mp3" style="display:none;">')
                    .on('change', function(ev2) {
                        const selectedFiles = Array.from(ev2.target.files);
                        // Replace playlist items with File objects if filename matches
                        playlist = playlist.map(item => {
                            const match = selectedFiles.find(f => f.name === item.name);
                            return match ? match : item;
                        });
                        renderPlaylist();
                        updateStatus('Metadata loaded for matched files.');
                    })
                    .appendTo('body')
                    .trigger('click');
            };
            reader.readAsText(file);
        });

        // Ensure the active track is scrolled into view
        (function scrollActiveIntoView() {
            const $container = $('#playlistContainer');
            const $playlistEl = $('#playlist');
            const $active = $playlistEl.find('li.active:visible').first();
            if (!$active.length) return;

            const containerEl = $container.get(0);
            const activeEl = $active.get(0);
            if (!containerEl || !activeEl) return;

            // Prefer native API (handle same way as lyrics sync: small defer + center)
            if (typeof activeEl.scrollIntoView === 'function') {
                try {
                    // small delay helps ensure layout/DOM updates have settled (matches lyrics usage)
                    setTimeout(() => {
                        try {
                            activeEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
                        } catch (e) {
                            // Some engines may throw for certain options; fall through to manual calc below
                        }

                        // clamp to bounds after native call to avoid overscroll on some browsers
                        setTimeout(() => {
                            const maxScroll = Math.max(0, containerEl.scrollHeight - containerEl.clientHeight);

                            // Recalculate rects to detect whether the element is still out of view (common near end)
                            const containerRect = containerEl.getBoundingClientRect();
                            const activeRect = activeEl.getBoundingClientRect();

                            // If native call left the active item beyond the bottom of the container,
                            // explicitly animate to the maxScroll so the list can reach the end.
                            if (activeRect.bottom > containerRect.bottom - 1) {
                                $container.stop(true).animate({ scrollTop: maxScroll }, 220);
                                return;
                            }

                            // If native overscrolled, clamp back to maxScroll
                            if (containerEl.scrollTop > maxScroll) {
                                $container.stop(true).animate({ scrollTop: maxScroll }, 120);
                            }
                        }, 120);
                    }, 10);
                    return;
                } catch (e) {
                    // fall through to manual calculation if something unexpected happens
                }
            }

            // Fallback: compute target so active item is centered in container (manual smooth via jQuery animate)
            const containerRect = containerEl.getBoundingClientRect();
            const activeRect = activeEl.getBoundingClientRect();
            const offsetInContainer = activeRect.top - containerRect.top; // position relative to container viewport

            // target scrollTop = current scrollTop + offsetInContainer - half available space
            const desired = containerEl.scrollTop + offsetInContainer - ((containerEl.clientHeight - activeEl.clientHeight) / 2);
            const maxScroll = Math.max(0, containerEl.scrollHeight - containerEl.clientHeight);
            const targetClamped = Math.min(Math.max(0, desired), maxScroll);

            if (Math.abs(containerEl.scrollTop - targetClamped) > 2) {
                $container.stop(true).animate({ scrollTop: targetClamped }, 220);
            }
        })();
    }

// Call renderPlaylist() after updating playlist or changing track

});

    // Make the viewer draggable
    $(document).ready(function() {
        const $container = $('#mp3ViewerContainer');
        let isDragging = false;
        let startX, startY, initialX, initialY;

        // Use requestAnimationFrame for smooth animations
        function moveContainer(e) {
            if (!isDragging) return;

            requestAnimationFrame(() => {
                const newX = initialX + (e.clientX - startX);
                const newY = initialY + (e.clientY - startY);

                $container.css({
                    transform: `translate(${newX}px, ${newY}px)`
                });
            });
        }

        $(document).on('mousedown', '#mp3ViewerContainer', function(e) {
            if (e.target.id !== 'mp3ViewerContainer' && e.target.id !== 'closeBtn') return;

            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;

            const transform = window.getComputedStyle($container[0]).transform;
            const matrix = new DOMMatrix(transform);
            initialX = matrix.m41;
            initialY = matrix.m42;

            $container.css('cursor', 'grabbing');
        });

        $(document).on('mousemove', moveContainer);

        $(document).on('mouseup', function() {
            isDragging = false;
            $container.css('cursor', '');
        });
    });
})();