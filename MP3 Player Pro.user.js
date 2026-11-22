// ==UserScript==
// @name         MP3 Player Pro
// @namespace    https://i-ali.ir/
// @version      1.2.0
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
        // ===== v1.1: icon set (Lucide-style inline SVG, currentColor), helpers =====
        const ICONS = {
            play: '<polygon points="6 3 20 12 6 21 6 3" fill="currentColor"/>',
            pause: '<rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>',
            prev: '<polygon points="19 20 9 12 19 4 19 20" fill="currentColor"/><line x1="5" x2="5" y1="19" y2="5"/>',
            next: '<polygon points="5 4 15 12 5 20 5 4" fill="currentColor"/><line x1="19" x2="19" y1="5" y2="19"/>',
            repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
            repeat1: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/><path d="M11 10h1v4"/>',
            shuffle: '<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/>',
            list: '<path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/>',
            mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
            languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
            settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
            trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
            x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
            download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
            upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
            link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
            search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
            volume2: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
            volume1: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
            volumeX: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>',
            music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
            sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
            chevronUp: '<path d="m18 15-6-6-6 6"/>',
            collapse: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
            disc: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/><path d="M6 12a6 6 0 0 1 6-6"/>',
            disc2: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3.5"/>',
            frame: '<rect x="4" y="3" width="16" height="18" rx="2"/><rect x="7" y="6" width="10" height="9"/>',
            layers: '<path d="m12.8 2.2 8.5 4.3a1 1 0 0 1 0 1.8l-8.5 4.3a2 2 0 0 1-1.6 0L2.7 8.3a1 1 0 0 1 0-1.8l8.5-4.3a2 2 0 0 1 1.6 0z"/><path d="m22 12.5-8.6 4.3a2 2 0 0 1-1.8 0L3 12.5"/><path d="m22 17.5-8.6 4.3a2 2 0 0 1-1.8 0L3 17.5"/>',
            square: '<rect width="18" height="18" x="3" y="3" rx="3"/>'
        };
        const ic = (name, size = 18) =>
            `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
        // Escape any text (ID3 tags, file names, remote lyrics) before putting it into innerHTML
        const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
        let accentRGB = [139, 123, 255];

        // Read only the ID3v2 header+frames of a local file instead of the whole file (big FLAC/WAV files!)
        async function readID3Head(file) {
            const head = await file.slice(0, 10).arrayBuffer();
            const v = new DataView(head);
            if (head.byteLength < 10 || v.getUint8(0) !== 0x49 || v.getUint8(1) !== 0x44 || v.getUint8(2) !== 0x33) return head;
            const size = ((v.getUint8(6) & 0x7f) << 21) | ((v.getUint8(7) & 0x7f) << 14) | ((v.getUint8(8) & 0x7f) << 7) | (v.getUint8(9) & 0x7f);
            return file.slice(0, Math.min(file.size, size + 10)).arrayBuffer();
        }
        // ID3v2.4 stores frame sizes as synchsafe integers (v2.3 uses plain ints)
        function readFrameSize(dv, off) {
            const b = [dv.getUint8(off + 4), dv.getUint8(off + 5), dv.getUint8(off + 6), dv.getUint8(off + 7)];
            if (dv.getUint8(3) >= 4 && b.every(x => x < 0x80)) return (b[0] << 21) | (b[1] << 14) | (b[2] << 7) | b[3];
            return dv.getUint32(off + 4);
        }
        // Keep exactly one blob URL alive for the current track (prevents memory leaks)
        let lastTrackUrl = null;
        function trackObjectUrl(u) {
            if (lastTrackUrl && lastTrackUrl !== u) { try { URL.revokeObjectURL(lastTrackUrl); } catch (e) { /* ignore */ } }
            lastTrackUrl = u;
            return u;
        }

        // ===== v1.2: robust tag + cover reader =====
        // ID3v2.2/2.3/2.4 (incl. extended header, unsync, data-length flag), FLAC, MP4/M4A, Ogg Vorbis/Opus
        const u8str = (u, s, e) => { let o = ''; for (let i = s; i < e && i < u.length; i++) o += String.fromCharCode(u[i]); return o; };
        const ss4 = (u, o) => ((u[o] & 0x7f) << 21) | ((u[o + 1] & 0x7f) << 14) | ((u[o + 2] & 0x7f) << 7) | (u[o + 3] & 0x7f);
        function sniffImage(u) {
            if (u.length > 3 && u[0] === 0xFF && u[1] === 0xD8) return 'image/jpeg';
            if (u.length > 7 && u[0] === 0x89 && u[1] === 0x50 && u[2] === 0x4E && u[3] === 0x47) return 'image/png';
            if (u.length > 5 && u[0] === 0x47 && u[1] === 0x49 && u[2] === 0x46) return 'image/gif';
            if (u.length > 12 && u[0] === 0x52 && u[1] === 0x49 && u[2] === 0x46 && u[3] === 0x46 && u[8] === 0x57 && u[9] === 0x45) return 'image/webp';
            if (u.length > 2 && u[0] === 0x42 && u[1] === 0x4D) return 'image/bmp';
            return null;
        }
        // Find the real start of the image bytes (some taggers write a broken description field)
        function pickImage(u, from, mimeHint) {
            let data = u.subarray(from), fmt = sniffImage(data);
            if (!fmt) {
                const lim = Math.min(data.length - 16, 700);
                for (let i = 1; i < lim; i++) {
                    const f = sniffImage(data.subarray(i, i + 16));
                    if (f === 'image/jpeg' || f === 'image/png') { data = data.subarray(i); fmt = f; break; }
                }
            }
            if (!fmt) fmt = /png/.test(mimeHint || '') ? 'image/png' : 'image/jpeg';
            return { data, format: fmt };
        }
        function setPic(tags, img, type) {
            if (img && img.data && img.data.length > 32 && (!tags.image || (type === 3 && tags._pt !== 3))) { tags.image = img; tags._pt = type; }
        }
        function decodeText(b, enc) {
            try {
                let s;
                if (enc === 1 || enc === 2) {
                    let be = enc === 2;
                    if (b.length >= 2) {
                        if (b[0] === 0xFF && b[1] === 0xFE) { b = b.subarray(2); be = false; }
                        else if (b[0] === 0xFE && b[1] === 0xFF) { b = b.subarray(2); be = true; }
                    }
                    s = new TextDecoder(be ? 'utf-16be' : 'utf-16le').decode(b);
                } else if (enc === 3) {
                    s = new TextDecoder('utf-8').decode(b);
                } else {
                    // "ISO-8859-1" tags are often really UTF-8, or Windows-1256 (Persian/Arabic) written by older taggers
                    let high = 0, arabic = 0;
                    for (let i = 0; i < b.length; i++) if (b[i] > 0x7f) { high++; if (b[i] >= 0xC1 && b[i] <= 0xED) arabic++; }
                    if (!high) s = new TextDecoder('iso-8859-1').decode(b);
                    else {
                        try { s = new TextDecoder('utf-8', { fatal: true }).decode(b); }
                        catch (e) { s = new TextDecoder(arabic / high > 0.6 ? 'windows-1256' : 'iso-8859-1').decode(b); }
                    }
                }
                return s.split('\0').map(x => x.trim()).filter(Boolean).join(' / ');
            } catch (e) { return ''; }
        }
        function unsyncBytes(b) {
            const out = new Uint8Array(b.length); let n = 0;
            for (let i = 0; i < b.length; i++) { out[n++] = b[i]; if (b[i] === 0xFF && b[i + 1] === 0x00) i++; }
            return out.subarray(0, n);
        }
        const ID3_TEXT = { TIT2: 'title', TT2: 'title', TPE1: 'artist', TP1: 'artist', TALB: 'album', TAL: 'album', TYER: 'year', TYE: 'year', TDRC: 'year', TDRL: 'year', TPE2: 'albumArtist', TP2: 'albumArtist', TRCK: 'trackNumber', TRK: 'trackNumber' };
        function id3Picture(body, isPIC, tags) {
            let p = 0; const enc = body[p++];
            let mime = '';
            if (isPIC) { mime = u8str(body, p, p + 3).toLowerCase(); p += 3; }
            else { let e = p; while (e < body.length && body[e] !== 0) e++; mime = u8str(body, p, e).toLowerCase(); p = e + 1; }
            const type = body[p++];
            if (enc === 1 || enc === 2) { while (p + 1 < body.length && !(body[p] === 0 && body[p + 1] === 0)) p += 2; p += 2; }
            else { while (p < body.length && body[p] !== 0) p++; p++; }
            setPic(tags, pickImage(body, p, mime), type);
        }
        function parseID3Robust(u, tags) {
            const ver = u[3], flags = u[5];
            let data = u, end = Math.min(u.length, 10 + ss4(u, 6)), pos = 10;
            if (ver <= 3 && (flags & 0x80)) {                       // tag-level unsynchronisation
                const body = unsyncBytes(u.subarray(10, end));
                data = new Uint8Array(10 + body.length); data.set(u.subarray(0, 10)); data.set(body, 10); end = data.length;
            }
            const dv = new DataView(data.buffer, data.byteOffset, data.byteLength);
            if (flags & 0x40) {                                      // extended header
                if (ver === 3) pos += 4 + dv.getUint32(pos);
                else if (ver === 4) pos += ss4(data, pos);
            }
            const idLen = ver === 2 ? 3 : 4, hdr = ver === 2 ? 6 : 10;
            const looksLikeFrame = p => p + 4 <= end && /^[A-Z0-9]{4}$/.test(u8str(data, p, p + 4));
            while (pos + hdr <= end) {
                if (data[pos] === 0) break;                          // padding
                const id = u8str(data, pos, pos + idLen);
                let size;
                if (ver === 2) size = (data[pos + 3] << 16) | (data[pos + 4] << 8) | data[pos + 5];
                else {
                    const plain = dv.getUint32(pos + 4);
                    if (ver === 4) {
                        const sy = ss4(data, pos + 4), ok = p => p >= end || data[p] === 0 || looksLikeFrame(p);
                        size = (ok(pos + hdr + sy)) ? sy : plain;   // some taggers write v2.4 sizes as plain ints
                    } else size = plain;
                }
                const start = pos + hdr, fend = start + size;
                if (size <= 0 || fend > end) break;
                try {
                    let body = data.subarray(start, fend);
                    const f2 = ver >= 3 ? data[pos + 9] : 0;
                    let skip = false;
                    if (ver === 4) { if (f2 & 0x01) body = body.subarray(4); if (f2 & 0x02) body = unsyncBytes(body); if (f2 & 0x08) skip = true; }
                    else if (ver === 3) { if (f2 & 0x80 || f2 & 0x40) skip = true; else if (f2 & 0x20) body = body.subarray(1); }
                    if (!skip) {
                        if (id === 'APIC' || id === 'PIC') id3Picture(body, id === 'PIC', tags);
                        else if (ID3_TEXT[id] && body.length > 1) {
                            const key = ID3_TEXT[id]; let val = decodeText(body.subarray(1), body[0]);
                            if (key === 'year') val = val.slice(0, 4);
                            if (val && !(key === 'year' && tags.year)) tags[key] = val;
                        }
                    }
                } catch (e) { /* ignore one broken frame */ }
                pos = fend;
            }
        }
        function parseFlacPicture(u, o) {
            const dv = new DataView(u.buffer, u.byteOffset, u.byteLength);
            const type = dv.getUint32(o), ml = dv.getUint32(o + 4), mime = u8str(u, o + 8, o + 8 + ml);
            let p = o + 8 + ml; const dl = dv.getUint32(p); p += 4 + dl + 16;
            const len = dv.getUint32(p); p += 4;
            return { type, img: pickImage(u.subarray(p, p + len), 0, mime) };
        }
        function parseVorbisComments(u, o, tags) {
            const dv = new DataView(u.buffer, u.byteOffset, u.byteLength);
            let p = o; p += 4 + dv.getUint32(p, true);
            const n = dv.getUint32(p, true); p += 4;
            const map = { TITLE: 'title', ARTIST: 'artist', ALBUM: 'album', ALBUMARTIST: 'albumArtist', DATE: 'year', YEAR: 'year', TRACKNUMBER: 'trackNumber' };
            for (let i = 0; i < n && p + 4 <= u.length; i++) {
                const l = dv.getUint32(p, true); p += 4;
                if (p + l > u.length) break;
                const s = new TextDecoder('utf-8').decode(u.subarray(p, p + l)); p += l;
                const k = s.indexOf('='); if (k < 0) continue;
                const key = s.slice(0, k).toUpperCase(), val = s.slice(k + 1);
                if (key === 'METADATA_BLOCK_PICTURE') {
                    try { const bin = atob(val), arr = new Uint8Array(bin.length); for (let j = 0; j < bin.length; j++) arr[j] = bin.charCodeAt(j); const r = parseFlacPicture(arr, 0); setPic(tags, r.img, r.type); } catch (e) { /* ignore */ }
                } else if (map[key]) { tags[map[key]] = key === 'DATE' || key === 'YEAR' ? val.slice(0, 4) : val; }
            }
        }
        function parseFlac(u, tags) {
            const dv = new DataView(u.buffer, u.byteOffset, u.byteLength);
            let pos = 4, last = false;
            while (!last && pos + 4 <= u.length) {
                last = !!(u[pos] & 0x80); const type = u[pos] & 0x7f, len = (u[pos + 1] << 16) | (u[pos + 2] << 8) | u[pos + 3];
                const s = pos + 4; if (s + len > u.length) break;
                try {
                    if (type === 4) parseVorbisComments(u, s, tags);
                    else if (type === 6) { const r = parseFlacPicture(u, s); setPic(tags, r.img, r.type); }
                } catch (e) { /* ignore */ }
                pos = s + len;
            }
        }
        function parseOgg(u, tags) {
            let pos = 0, idx = 0, chunks = [];
            while (pos + 27 <= u.length && u8str(u, pos, pos + 4) === 'OggS') {
                const nseg = u[pos + 26]; let dp = pos + 27 + nseg;
                for (let s = 0; s < nseg; s++) {
                    const lv = u[pos + 27 + s]; chunks.push(u.subarray(dp, dp + lv)); dp += lv;
                    if (lv < 255) {
                        if (idx === 1) {
                            let total = 0; chunks.forEach(c => total += c.length);
                            const pkt = new Uint8Array(total); let o = 0; chunks.forEach(c => { pkt.set(c, o); o += c.length; });
                            if (u8str(pkt, 0, 8) === 'OpusTags') parseVorbisComments(pkt, 8, tags);
                            else if (pkt[0] === 3 && u8str(pkt, 1, 7) === 'vorbis') parseVorbisComments(pkt, 7, tags);
                            return;
                        }
                        chunks = []; idx++;
                    }
                }
                pos = dp;
            }
        }
        function parseMp4(u, tags) {
            const dv = new DataView(u.buffer, u.byteOffset, u.byteLength);
            const walk = (s, e, cb) => {
                let p = s;
                while (p + 8 <= e) {
                    let size = dv.getUint32(p), hs = 8; const type = u8str(u, p + 4, p + 8);
                    if (size === 1) { size = Number(dv.getBigUint64(p + 8)); hs = 16; } else if (size === 0) size = e - p;
                    if (size < hs) break; if (p + size > e) size = e - p;
                    cb(type, p + hs, p + size); p += size;
                }
            };
            const txt = (s, e) => new TextDecoder('utf-8').decode(u.subarray(s, e));
            const ilst = (s, e) => walk(s, e, (type, ds, de) => walk(ds, de, (t, s2, e2) => {
                if (t !== 'data') return;
                const fl = dv.getUint32(s2) & 0xFFFFFF, vs = s2 + 8;
                if (type === '\u00a9nam') tags.title = txt(vs, e2);
                else if (type === '\u00a9ART') tags.artist = txt(vs, e2);
                else if (type === 'aART') tags.albumArtist = txt(vs, e2);
                else if (type === '\u00a9alb') tags.album = txt(vs, e2);
                else if (type === '\u00a9day') tags.year = txt(vs, e2).slice(0, 4);
                else if (type === 'trkn') tags.trackNumber = String(dv.getUint16(vs + 2));
                else if (type === 'covr') setPic(tags, pickImage(u.subarray(vs, e2), 0, fl === 14 ? 'image/png' : 'image/jpeg'), 3);
            }));
            const meta = (s, e) => walk(s + 4, e, (t, s2, e2) => { if (t === 'ilst') ilst(s2, e2); });   // meta = full box (4 version/flag bytes)
            walk(0, u.length, (t, s, e) => {
                if (t !== 'moov') return;
                walk(s, e, (t2, s2, e2) => {
                    if (t2 === 'udta') walk(s2, e2, (t3, s3, e3) => { if (t3 === 'meta') meta(s3, e3); });
                    else if (t2 === 'meta') meta(s2, e2);
                });
            });
        }
        function parseTagsAny(buf) {
            const u = new Uint8Array(buf), tags = {};
            if (u.length < 8) return tags;
            try {
                if (u8str(u, 0, 3) === 'ID3') parseID3Robust(u, tags);
                else if (u8str(u, 0, 4) === 'fLaC') parseFlac(u, tags);
                else if (u8str(u, 4, 8) === 'moov') parseMp4(u, tags);
                else if (u8str(u, 0, 4) === 'OggS') parseOgg(u, tags);
            } catch (e) { console.warn('Tag parse failed (partial tags kept):', e); }
            delete tags._pt;
            return tags;
        }
        // Read only the part of the file that can hold tags/cover (never the whole audio stream)
        async function readTagBuffer(rd) {
            const head = new Uint8Array(await rd.read(0, 16));
            if (head.length < 8) return head.buffer;
            const sig = u8str(head, 0, 4);
            if (sig.slice(0, 3) === 'ID3') return rd.read(0, Math.min(ss4(head, 6) + 10 + ((head[5] & 0x10) ? 10 : 0), 32 * 1024 * 1024));
            if (sig === 'fLaC') {
                let pos = 4, last = false, guard = 0;
                while (!last && guard++ < 64) {
                    const h = new Uint8Array(await rd.read(pos, 4)); if (h.length < 4) break;
                    last = !!(h[0] & 0x80); pos += 4 + ((h[1] << 16) | (h[2] << 8) | h[3]);
                    if (pos > 32 * 1024 * 1024) break;
                }
                return rd.read(0, pos);
            }
            if (u8str(head, 4, 8) === 'ftyp') {
                let pos = 0, guard = 0;
                while (guard++ < 200) {
                    const b = await rd.read(pos, 16); if (b.byteLength < 8) break;
                    const dv = new DataView(b); let size = dv.getUint32(0); const type = u8str(new Uint8Array(b), 4, 8);
                    if (size === 1 && b.byteLength >= 16) size = Number(dv.getBigUint64(8));
                    if (type === 'moov') return rd.read(pos, Math.min(size, 64 * 1024 * 1024));
                    if (size < 8) break; pos += size;
                    if (Number.isFinite(rd.size) && pos >= rd.size) break;
                }
                return new ArrayBuffer(0);
            }
            if (sig === 'OggS') return rd.read(0, 4 * 1024 * 1024);
            return head.buffer;
        }
        function makeReader(item) {
            if (item && item.src) {
                return {
                    size: Infinity,
                    read: async (s, n) => {
                        const b = await fetchArrayBufferWithRange(item.src, `bytes=${s}-${s + n - 1}`);
                        if (!b) return new ArrayBuffer(0);
                        return b.byteLength > n ? b.slice(s, s + n) : b;   // server ignored Range -> slice ourselves
                    },
                    tail: n => fetchArrayBufferWithRange(item.src, `bytes=-${n}`)
                };
            }
            return {
                size: item.size,
                read: (s, n) => item.slice(s, s + n).arrayBuffer(),
                tail: n => item.slice(Math.max(0, item.size - n)).arrayBuffer()
            };
        }
        const tagLoads = new WeakMap();
        function loadTags(item) {
            if (tagLoads.has(item)) return tagLoads.get(item);
            const p = (async () => {
                let tags = {};
                try { tags = parseTagsAny(await readTagBuffer(makeReader(item))) || {}; } catch (e) { console.warn('Tag read failed', e); }
                if (!tags.title && !tags.artist && !tags.image) {
                    try {
                        const t = await makeReader(item).tail(128);
                        if (t && t.byteLength >= 128) { const v1 = parseID3v1(t.slice(t.byteLength - 128)); if (v1) tags = Object.assign({}, v1, tags); }
                    } catch (e) { /* ignore */ }
                }
                return tags;
            })();
            tagLoads.set(item, p);
            return p;
        }

        // ===== v1.2: generated cover (used when a track has no artwork) =====
        const placeholderCache = new Map();
        function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
        function placeholderCover(seed) {
            seed = String(seed || '?');
            if (placeholderCache.has(seed)) return placeholderCache.get(seed);
            const h = hashStr(seed), h1 = h % 360, h2 = (h1 + 40 + ((h >>> 9) % 80)) % 360;
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${h1},72%,54%)"/><stop offset="1" stop-color="hsl(${h2},70%,36%)"/></linearGradient></defs><rect width="600" height="600" fill="url(#g)"/><circle cx="480" cy="120" r="180" fill="#fff" fill-opacity=".09"/><circle cx="90" cy="530" r="220" fill="#000" fill-opacity=".14"/><g fill="none" stroke="#fff" stroke-opacity=".88" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" transform="translate(150 150) scale(12.5)"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></g></svg>`;
            const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
            placeholderCache.set(seed, url);
            return url;
        }

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

                <div id="appHeader">
            <div class="brand"><span class="logo">${ic('music', 18)}</span><span>MP3 Player Pro</span><span class="ver">v1.2.0</span></div>
            <div class="hdr-actions">
                <button id="miniBtn" class="hdr-btn" title="Compact mode" aria-label="Compact mode">${ic('chevronUp', 18)}</button>
                <button id="closeBtn" class="hdr-btn" title="Close" aria-label="Close player">${ic('x', 18)}</button>
            </div>
        </div>
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
                    <div class="drop-inner"><div class="drop-icon">${ic('upload', 24)}</div><div><div class="drop-title">Drop audio files here or click to browse</div><div class="drop-sub">MP3, FLAC, WAV, M4A, OGG, Opus</div></div></div>
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
                    <audio id="audioPlayer" preload="metadata" autoplay=""></audio>
                    <div id="transport">
                        <div id="seekRow">
                            <span id="curTime" class="time">0:00</span>
                            <div id="seekWrap"><div id="seekTrack"><div id="seekBuf"></div><div id="seekFill"></div></div><input type="range" id="seekBar" min="0" max="1000" value="0" step="1" aria-label="Seek"></div>
                            <span id="durTime" class="time">0:00</span>
                        </div>
                        <div id="controlsRow">
                            <div class="ctl-group left">
                                <button id="shuffleBtn" class="ctl" aria-label="Shuffle">${ic('shuffle', 20)}</button>
                                <button id="loopBtn" class="ctl" aria-label="Loop this track">${ic('repeat1', 20)}</button>
                                <button id="repeatBtn" class="ctl" aria-label="Repeat playlist">${ic('repeat', 20)}</button>
                            </div>
                            <div class="ctl-group center">
                                <button id="prevBtn" class="ctl" title="Previous (P)" aria-label="Previous">${ic('prev', 22)}</button>
                                <button id="playBtn" class="ctl" title="Play (Space)" aria-label="Play">${ic('play', 26)}</button>
                                <button id="nextBtn" class="ctl" title="Next (N)" aria-label="Next">${ic('next', 22)}</button>
                            </div>
                            <div class="ctl-group right">
                                <button id="speedBtn" class="ctl txt" title="Playback speed">1×</button>
                                <button id="muteBtn" class="ctl" aria-label="Mute">${ic('volume2', 20)}</button>
                                <input type="range" id="volBar" min="0" max="100" value="100" aria-label="Volume">
                            </div>
                        </div>
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
                        <div id="coverStage"><div id="vinyl"><div id="vinylDisc"></div></div><img id="albumArt" alt="Album art" style="display:none" /></div>
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
                            <button id="tabPlaylist" class="tabBtn">${ic('list', 17)}<span>Playlist</span></button>
                            <button id="tabTranslation" class="tabBtn">${ic('mic', 17)}<span>Lyrics</span></button>
                            <button id="tabSOON" class="tabBtn">${ic('sparkles', 17)}<span>Soon</span></button>
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
                                ${ic('upload', 16)}<span>Drop files here to add them to the queue</span>
                            </div>

                            <div class="search-wrap">${ic('search', 16)}<input type="text" id="playlistSearch" placeholder="Search queue..." autocomplete="off"></div>
                            <div class="pl-tools">
                                <button id="loadPlaylistBtn" class="pill">${ic('upload', 16)}<span>Load</span></button>
                                <input type="file" id="loadPlaylistInput" accept=".json" style="display:none;">
                                <button id="savePlaylistBtn" class="pill">${ic('download', 16)}<span>Save</span></button>
                            </div>
                            <div class="pl-head"><span>Queue</span><span id="plCount">0 tracks</span></div>
                            <ul id="playlist" style="list-style:none; padding:0; margin:0;"></ul>
                        </div>

                        <!-- Translation pane (Lyrics OR Translation Music) -->
                        <div id="translationContainer" style="display:none; overflow-y:auto; background:#222; border-radius:5px; padding:8px;">
                            <div class="lyr-bar">
                                <button id="fetchLyricsBtn" style="padding:6px 12px; background:#404040; color:#fff; border:none; border-radius:4px; cursor:pointer; font-family: Ink Free, sans-serif;">${ic('mic', 16)}<span>Fetch lyrics</span></button>
                                <button id="translationSettingsBtn" title="Lyrics Settings" style="padding:6px 6px; background:#404040; color:#fff; border:none; border-radius:4px; cursor:pointer; font-family: Ink Free, sans-serif;margin-left: 6px;">${ic('settings', 16)}</button>
                                <button id="translationLyricsBtn" style="padding:6px 6px; background:#404040; color:#fff; border:none; border-radius:4px; cursor:pointer; font-family: Ink Free, sans-serif;margin-left: 4px;">${ic('languages', 16)}<span>Translate</span></button>

                                <span style="margin: 0 10px;">|</span>

                                <!-- Manual search will be inserted here by JavaScript -->
                                <button id="manualLyricsSearchBtn" style="margin: 0 -10px 0 0; padding: 4.5px 6px 6.5px 0px; background: #555; color: #fff; border: none; border-radius: 3px; cursor: pointer; font-family: Ink Free, sans-serif;">${ic('search', 16)}</button>
                                <input type="text" id="manualLyricsInput"
                                       placeholder="Enter artist & song..."
                                       style="flex:1; padding:6px; background:#333; color:#fff; border:1px solid #555; border-radius:4px; outline:none; font-size:13px; font-family: Ink Free, sans-serif;">

                                <span id="lyricsStatus" style="color:#aaa; font-size:14px; margin-left:8px; font-family: Ink Free, sans-serif;">No lyrics loaded</span>

                                <!-- Clear Lyrics -->
                                <button id="clearLyricsBtn" style="padding:6px 6px; background:#553030; color:#fff; border:none; border-radius:4px; cursor:pointer; float:right;">${ic('trash', 16)}</button>
                            </div>

                            <div id="lyricsContainer" style="overflow-y:auto; padding:6px 0; background:#151515; border-radius:6px; border:1px solid #2a2a2a; color:#ddd; font-size:14px; line-height:1.6;">
                                <div id="lyricsInner" style="text-align:center; white-space:pre-wrap; line-height:1.3;">No lyrics to display</div>
                            </div>

                        </div>

                    </div>

                </div>

                
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
        $('head').append('<style id="mp3ModernTheme">' + `@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap');

@property --accent { syntax: '<color>'; inherits: true; initial-value: #8b7bff; }
@property --accent-rgb { syntax: '<number>#'; inherits: true; initial-value: 139, 123, 255; }

#mp3ViewerContainer {
  --accent: #8b7bff;
  --accent-rgb: 139, 123, 255;
  --accent-ink: #0d0d18;
  --bg: #0b0c15;
  --surface: #12141f;
  --raised: #1a1d2c;
  --line: rgba(var(--ov),.08);
  --text: #eceaf7;
  --muted: #8b8fae;
  --danger: #ff5d73;
  --ok: #3fe0b0;
  --ov: 255, 255, 255; --glow-a: .22; --glow-b: .12; --lyr-bg: rgba(0,0,0,.28);
  --cover: clamp(170px, 19vw, 340px);
  --r-lg: 22px; --r-md: 14px; --r-sm: 9px;
  --ease: cubic-bezier(.22,1,.36,1);
  transition: --accent .9s ease, --accent-rgb .9s ease;
  background:
    radial-gradient(900px 420px at 12% -10%, rgba(var(--accent-rgb), var(--glow-a)), transparent 60%),
    radial-gradient(700px 380px at 100% 110%, rgba(var(--accent-rgb), var(--glow-b)), transparent 60%),
    var(--bg) !important;
  border: 1px solid var(--line) !important;
  border-radius: var(--r-lg) !important;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,.75), 0 0 0 1px rgba(var(--ov),.03) inset !important;
  color: var(--text);
  padding: 14px 16px 16px !important;
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  animation: mpIn .55s var(--ease) both;
  scrollbar-width: thin;
  scrollbar-color: rgba(var(--accent-rgb), .5) transparent;
}
@keyframes mpIn { from { opacity: 0; transform: translateY(-14px) scale(.985); } }
#mp3ViewerContainer *, #mp3ViewerContainer *::before, #mp3ViewerContainer *::after { box-sizing: border-box; }
#mp3ViewerContainer *::-webkit-scrollbar { width: 8px; height: 8px; }
#mp3ViewerContainer *::-webkit-scrollbar-thumb { background: rgba(var(--accent-rgb), .35); border-radius: 8px; }
#mp3ViewerContainer *::-webkit-scrollbar-thumb:hover { background: rgba(var(--accent-rgb), .7); }
#mp3ViewerContainer *::-webkit-scrollbar-track { background: transparent; }
#mp3ViewerContainer .ic { flex: none; display: block; }
#mp3ViewerContainer :focus-visible { outline: 2px solid var(--accent) !important; outline-offset: 2px; }

/* ---------- Header ---------- */
#appHeader {
  display: flex; align-items: center; justify-content: space-between;
  margin: 0 0 12px; cursor: grab; user-select: none; text-align: left;
}
#appHeader:active { cursor: grabbing; }
#appHeader .brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 17px; letter-spacing: .2px; color: var(--text); }
#appHeader .logo {
  width: 34px; height: 34px; border-radius: 11px; display: grid; place-items: center;
  background: linear-gradient(140deg, var(--accent), rgba(var(--accent-rgb), .45));
  color: var(--accent-ink); box-shadow: 0 6px 18px -4px rgba(var(--accent-rgb), .7);
}
#appHeader .ver { font-size: 11px; font-weight: 600; color: var(--muted); padding: 2px 8px; border: 1px solid var(--line); border-radius: 99px; }
#appHeader .hdr-actions { display: flex; gap: 6px; }
#mp3ViewerContainer .hdr-btn {
  all: unset; box-sizing: border-box; width: 34px; height: 34px; display: grid; place-items: center; cursor: pointer;
  color: var(--muted); border-radius: 11px; transition: background .2s, color .2s, transform .2s var(--ease);
}
#mp3ViewerContainer .hdr-btn:hover { background: rgba(var(--ov),.07); color: var(--text); }
#mp3ViewerContainer #closeBtn:hover { background: rgba(255,93,115,.16); color: var(--danger); transform: rotate(90deg); }
#mp3ViewerContainer #miniBtn .ic { transition: transform .35s var(--ease); }
#mp3ViewerContainer.mini #miniBtn .ic { transform: rotate(180deg); }

/* ---------- Drop area & status ---------- */
#mp3ViewerContainer #dropArea {
  background: linear-gradient(180deg, rgba(var(--ov),.03), rgba(var(--ov),.015)) !important;
  border: 1.5px dashed rgba(var(--ov),.16) !important;
  border-radius: var(--r-md) !important;
  color: var(--muted);
  position: relative; overflow: hidden !important;
  transition: border-color .25s, background .25s, transform .25s var(--ease), box-shadow .25s !important;
}
#dropArea .drop-inner { display: flex; align-items: center; justify-content: center; gap: 14px; text-align: left; pointer-events: none; }
#dropArea .drop-icon { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; background: rgba(var(--accent-rgb), .16); color: var(--accent); transition: transform .35s var(--ease); }
#dropArea .drop-title { font-size: 16px; font-weight: 600; color: var(--text); text-transform: none !important; }
#dropArea .drop-sub { font-size: 12.5px; color: var(--muted); margin-top: 2px; }
#mp3ViewerContainer #dropArea:hover { border-color: rgba(var(--accent-rgb), .7) !important; background: rgba(var(--accent-rgb), .07) !important; }
#dropArea:hover .drop-icon { transform: translateY(-3px) scale(1.06); }
#mp3ViewerContainer #dropArea.dragover {
  border-color: var(--accent) !important; background: rgba(var(--accent-rgb), .14) !important;
  box-shadow: 0 0 0 4px rgba(var(--accent-rgb), .18), 0 12px 40px -12px rgba(var(--accent-rgb), .6) !important; transform: scale(1.01);
}
#dropArea.dragover .drop-icon { animation: bob .8s ease-in-out infinite alternate; }
@keyframes bob { to { transform: translateY(-6px); } }
#dropArea .droparea-controls { top: 8px; right: 10px; opacity: .0; transition: opacity .25s; pointer-events: auto; }
#dropArea:hover .droparea-controls, #dropArea:focus-within .droparea-controls { opacity: 1; }
#dropArea .droparea-controls button { display: inline-flex; align-items: center; gap: 6px; background: rgba(var(--ov),.07) !important; border: 1px solid var(--line) !important; color: var(--text) !important; border-radius: 9px !important; padding: 5px 10px !important; }
#dropArea .droparea-controls button:hover { background: rgba(var(--accent-rgb), .25) !important; }
#dropArea .droparea-fade-label { color: var(--muted); }
#dropArea.droparea-collapsed .drop-sub { display: none; }
#dropArea.droparea-collapsed .drop-icon { width: 30px; height: 30px; border-radius: 9px; }

#mp3ViewerContainer #status {
  display: inline-flex; align-items: center; gap: 8px; align-self: center; margin: 10px auto !important;
  padding: 5px 14px !important; min-height: 0 !important; border-radius: 99px;
  font-size: 12.5px !important; color: var(--muted) !important; background: rgba(var(--ov),.04); border: 1px solid var(--line);
  text-transform: none !important; max-width: 92%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
#status::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: var(--muted); flex: none; }
#status[data-type="info"]::before { background: var(--ok); box-shadow: 0 0 10px var(--ok); }
#status[data-type="error"] { color: var(--danger) !important; border-color: rgba(255,93,115,.35); }
#status[data-type="error"]::before { background: var(--danger); box-shadow: 0 0 10px var(--danger); }
#status.pop { animation: pop .4s var(--ease); }
@keyframes pop { 0% { transform: scale(.92); opacity: .4; } 100% { transform: scale(1); opacity: 1; } }

/* ---------- Transport ---------- */
#mp3ViewerContainer #mainPlayerContainer { gap: 6px; margin-bottom: 12px; }
#transport {
  width: 100%; max-width: 860px; padding: 12px 16px 10px; border-radius: var(--r-lg);
  background: linear-gradient(180deg, rgba(var(--ov),.05), rgba(var(--ov),.02)); border: 1px solid var(--line);
  box-shadow: 0 14px 40px -18px rgba(0,0,0,.8);
}
#seekRow { display: flex; align-items: center; gap: 12px; }
#transport .time { font-variant-numeric: tabular-nums; font-size: 12.5px; color: var(--muted); min-width: 40px; }
#transport .time:first-child { text-align: right; } #transport .time:last-child { text-align: left; }
#seekWrap { position: relative; flex: 1; height: 22px; --p: 0%; }
#seekTrack { position: absolute; left: 0; right: 0; top: 50%; height: 6px; margin-top: -3px; border-radius: 6px; background: rgba(var(--ov),.1); overflow: hidden; transition: height .2s, margin .2s; }
#seekWrap:hover #seekTrack, #seekWrap.dragging #seekTrack { height: 10px; margin-top: -5px; }
#seekBuf { position: absolute; inset: 0 auto 0 0; width: 0; background: rgba(var(--ov),.16); transition: width .4s; }
#seekFill { position: absolute; inset: 0 auto 0 0; width: 0; background: linear-gradient(90deg, rgba(var(--accent-rgb), .55), var(--accent)); border-radius: 6px; transition: width .28s linear; }
#seekWrap.dragging #seekFill { transition: none; }
#seekWrap::after { content: ''; position: absolute; top: 50%; left: var(--p); width: 14px; height: 14px; margin: -7px 0 0 -7px; border-radius: 50%; background: #fff; box-shadow: 0 0 0 4px rgba(var(--accent-rgb), .35), 0 4px 10px rgba(0,0,0,.5); transform: scale(0); transition: transform .2s var(--ease), left .28s linear; pointer-events: none; }
#seekWrap:hover::after, #seekWrap.dragging::after { transform: scale(1); }
#seekWrap.dragging::after { transition: transform .2s var(--ease); }
#transport input[type=range] { -webkit-appearance: none; appearance: none; background: transparent; margin: 0; cursor: pointer; }
#seekBar { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; }
#transport input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 22px; }

#controlsRow { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 10px; margin-top: 6px; }
.ctl-group { display: flex; align-items: center; gap: 6px; }
.ctl-group.center { gap: 10px; } .ctl-group.right { justify-content: flex-end; }
#mp3ViewerContainer .ctl, #mp3ViewerContainer #prevBtn, #mp3ViewerContainer #nextBtn, #mp3ViewerContainer #playBtn,
#mp3ViewerContainer #shuffleBtn, #mp3ViewerContainer #loopBtn, #mp3ViewerContainer #repeatBtn {
  all: unset; box-sizing: border-box; position: relative; display: grid !important; place-items: center; cursor: pointer;
  width: 40px; height: 40px; border-radius: 13px; color: var(--muted); margin: 0 !important; padding: 0 !important;
  transition: background .2s, color .2s, transform .25s var(--ease), box-shadow .25s;
}
#mp3ViewerContainer .ctl:hover { background: rgba(var(--ov),.08) !important; color: var(--text) !important; transform: translateY(-2px) !important; box-shadow: none !important; }
#mp3ViewerContainer .ctl:active { transform: scale(.9) !important; }
#mp3ViewerContainer .ctl.on { color: var(--accent) !important; background: rgba(var(--accent-rgb), .16) !important; }
#mp3ViewerContainer .ctl.on::after { content: ''; position: absolute; bottom: 4px; width: 4px; height: 4px; border-radius: 50%; background: var(--accent); }
#mp3ViewerContainer #prevBtn, #mp3ViewerContainer #nextBtn { color: var(--text); }
#mp3ViewerContainer #playBtn {
  width: 58px; height: 58px; border-radius: 50% !important; color: var(--accent-ink) !important;
  background: linear-gradient(145deg, #fff, var(--accent)) !important;
  box-shadow: 0 10px 28px -6px rgba(var(--accent-rgb), .85), 0 0 0 0 rgba(var(--accent-rgb), .5) !important;
}
#mp3ViewerContainer #playBtn:hover { transform: scale(1.08) !important; background: linear-gradient(145deg, #fff, var(--accent)) !important; color: var(--accent-ink) !important; }
#mp3ViewerContainer.is-playing #playBtn { animation: ring 2.4s ease-out infinite; }
@keyframes ring { 0% { box-shadow: 0 10px 28px -6px rgba(var(--accent-rgb), .85), 0 0 0 0 rgba(var(--accent-rgb), .45); } 70%,100% { box-shadow: 0 10px 28px -6px rgba(var(--accent-rgb), .85), 0 0 0 16px rgba(var(--accent-rgb), 0); } }
#playBtn .ic { animation: iconSwap .3s var(--ease); }
@keyframes iconSwap { from { transform: scale(.5) rotate(-40deg); opacity: 0; } }
#mp3ViewerContainer .ctl.txt { width: auto; padding: 0 10px !important; font-size: 13px; font-weight: 700; font-variant-numeric: tabular-nums; }
#volBar { width: 92px; height: 22px; --v: 100%; }
#volBar::-webkit-slider-runnable-track { height: 5px; border-radius: 5px; background: linear-gradient(90deg, var(--accent) var(--v), rgba(var(--ov),.14) var(--v)); }
#volBar::-webkit-slider-thumb { -webkit-appearance: none; width: 13px; height: 13px; border-radius: 50%; background: #fff; margin-top: -4px; box-shadow: 0 2px 8px rgba(0,0,0,.5); transition: transform .15s; }
#volBar:hover::-webkit-slider-thumb { transform: scale(1.25); }
#volBar::-moz-range-track { height: 5px; border-radius: 5px; background: rgba(var(--ov),.14); }
#volBar::-moz-range-progress { height: 5px; border-radius: 5px; background: var(--accent); }
#volBar::-moz-range-thumb { width: 13px; height: 13px; border: 0; border-radius: 50%; background: #fff; }

/* ---------- Now playing card ---------- */
#mp3ViewerContainer #playerContainer #metadata {
  float: none !important; height: auto !important; border: 1px solid var(--line) !important; border-radius: var(--r-lg) !important;
  background: var(--surface) !important; padding: 22px !important; gap: 22px; align-items: center; overflow: clip;
  box-shadow: 0 20px 50px -24px rgba(0,0,0,.9) !important;
}
#metadata::before { filter: blur(10px) brightness(.8) saturate(160%) !important; transform: scale(1.3) !important; opacity: .75 !important; }
#metadata::after { background: linear-gradient(180deg, rgba(8,9,16,.35), rgba(8,9,16,.82)) !important; }
#coverStage { position: relative; flex: none; margin-right: calc(var(--cover) * .4); align-self: center; z-index: 1; }
#coverStage:has(#albumArt[style*="none"]) { display: none; }
#mp3ViewerContainer #metadata #albumArt {
  position: relative; z-index: 2; display: block; width: var(--cover) !important; max-width: 100% !important; height: auto !important; aspect-ratio: 1;
  object-fit: cover; float: none !important; border-radius: 20px !important; cursor: pointer !important;
  box-shadow: 0 24px 60px -14px rgba(var(--accent-rgb), .65), 0 0 0 1px rgba(var(--ov),.1) !important;
  transition: scale .5s var(--ease), box-shadow .5s !important;
}
#mp3ViewerContainer #metadata #albumArt:hover { scale: 1.025; transform: none !important; }
#mp3ViewerContainer.is-playing #metadata #albumArt { scale: 1.01; }
#vinyl { position: absolute; z-index: 1; top: 5%; left: 6%; width: 90%; aspect-ratio: 1; transition: transform .9s var(--ease); pointer-events: none; }
#mp3ViewerContainer.is-playing #vinyl { transform: translateX(46%); }
#vinylDisc {
  width: 100%; height: 100%; border-radius: 50%;
  background:
    radial-gradient(circle, var(--accent) 0 9%, #0b0b10 9.5% 11%, transparent 11.5%),
    repeating-radial-gradient(circle, #232331 0 2px, #12121b 2px 4px),
    conic-gradient(from 20deg, transparent 0 20%, rgba(var(--ov),.14) 25%, transparent 32% 70%, rgba(var(--ov),.12) 75%, transparent 82%);
  box-shadow: 0 10px 30px rgba(0,0,0,.6), inset 0 0 0 2px rgba(var(--ov),.06);
  animation: spin 5s linear infinite; animation-play-state: paused;
}
#mp3ViewerContainer.is-playing #vinylDisc { animation-play-state: running; }
@keyframes spin { to { transform: rotate(360deg); } }

#mp3ViewerContainer #trackInfo {
  float: none !important; left: 0 !important; bottom: 0 !important; padding: 0 !important; overflow: visible !important;
  text-shadow: none !important; line-height: 1.35 !important; font-size: 15px !important; flex: 1; min-width: 0; text-align: left; align-self: center !important;
  height: auto !important; z-index: 1;
}
#trackInfo .ti-title { font-size: clamp(22px, 2.6vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -.2px; color: #fff; overflow-wrap: anywhere; }
#trackInfo .ti-artist { font-size: 17px; font-weight: 500; color: var(--accent); margin-top: 6px; }
#trackInfo .ti-album { font-size: 14px; color: rgba(255,255,255,.65); margin-top: 3px; }
#trackInfo .ti-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
#trackInfo .ti-chips span { font-size: 12px; font-weight: 600; padding: 4px 11px; border-radius: 99px; background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.1); color: #fff; backdrop-filter: blur(6px); }
#trackInfo .ti-file { margin-top: 14px; font-size: 12px; color: rgba(255,255,255,.45); overflow-wrap: anywhere; }
#trackInfo .ti-swap { animation: tiIn .55s var(--ease) both; }
#trackInfo .ti-swap:nth-child(2) { animation-delay: .05s; } #trackInfo .ti-swap:nth-child(3) { animation-delay: .1s; } #trackInfo .ti-swap:nth-child(4) { animation-delay: .15s; }
@keyframes tiIn { from { opacity: 0; transform: translateY(10px); filter: blur(4px); } }
#mp3ViewerContainer #trackInfo div:hover { filter: none !important; transform: none !important; }
#mp3ViewerContainer #visualizerCanvas { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; z-index: 0 !important; pointer-events: none; }

/* ---------- Tabs ---------- */
#mp3ViewerContainer #tabsWrapper { background: transparent !important; border-radius: var(--r-lg) !important; }
#mp3ViewerContainer #tabsHeader {
  position: relative; display: grid !important; grid-template-columns: repeat(3, 1fr); padding: 5px; gap: 0;
  border-radius: var(--r-md) !important; background: rgba(var(--ov),.04) !important; border: 1px solid var(--line) !important; box-shadow: none !important; margin-bottom: 10px !important;
}
#tabsHeader::before {
  content: ''; position: absolute; top: 5px; bottom: 5px; left: 5px; width: calc((100% - 10px) / 3); border-radius: 10px;
  background: rgba(var(--accent-rgb), .2); box-shadow: inset 0 0 0 1px rgba(var(--accent-rgb), .5), 0 6px 20px -8px rgba(var(--accent-rgb), .8);
  transform: translateX(calc(var(--tab-i, 0) * 100%)); transition: transform .45s var(--ease);
}
#mp3ViewerContainer .tabBtn {
  all: unset; box-sizing: border-box; position: relative; z-index: 1; display: flex !important; align-items: center; justify-content: center; gap: 8px;
  width: auto !important; padding: 9px 10px !important; border-radius: 10px !important; border: none !important; cursor: pointer;
  color: var(--muted) !important; font-size: 14px; font-weight: 600; background: transparent !important; box-shadow: none !important; transition: color .25s;
}
#mp3ViewerContainer .tabBtn:hover { color: var(--text) !important; background: transparent !important; }
#mp3ViewerContainer .tabBtn.active { color: var(--text) !important; background: transparent !important; }
#mp3ViewerContainer .tabBtn.active::after { display: none; }
#mp3ViewerContainer .tabBtn.active .ic { color: var(--accent); }
#mp3ViewerContainer #playlistContainer, #mp3ViewerContainer #translationContainer {
  background: var(--surface) !important; border: 1px solid var(--line); border-radius: var(--r-lg) !important; padding: 14px !important;
  animation: paneIn .45s var(--ease) both;
}
@keyframes paneIn { from { opacity: 0; transform: translateY(8px); } }

/* ---------- Playlist ---------- */
#mp3ViewerContainer #dropToPlaylist {
  background: transparent !important; border: 1.5px dashed rgba(var(--ov),.14) !important; border-radius: var(--r-md) !important; color: var(--muted) !important; padding: 12px !important;
  display: flex; align-items: center; justify-content: center; gap: 10px; transition: all .25s !important; font-size: 13.5px; text-transform: none !important;
}
#dropToPlaylist:hover { border-color: rgba(var(--accent-rgb), .7) !important; color: var(--text) !important; background: rgba(var(--accent-rgb), .07) !important; }
#dropToPlaylist.dragover { border-color: var(--accent) !important; background: rgba(var(--accent-rgb), .16) !important; color: #fff !important; }
.search-wrap { position: relative; margin-bottom: 10px; }
.search-wrap .ic { position: absolute; left: 12px; top: 50%; margin-top: -8px; color: var(--muted); pointer-events: none; }
#mp3ViewerContainer #playlistSearch { width: 100% !important; padding: 10px 12px 10px 38px !important; margin: 0 !important; border-radius: 12px !important; background: rgba(var(--ov),.05) !important; border: 1px solid var(--line) !important; color: var(--text) !important; transition: border-color .2s, background .2s, box-shadow .2s; }
#mp3ViewerContainer #playlistSearch:focus { border-color: var(--accent) !important; background: rgba(var(--ov),.08) !important; box-shadow: 0 0 0 4px rgba(var(--accent-rgb), .15); }
.pl-tools { display: flex; gap: 8px; margin-bottom: 12px; }
.pl-tools .pill { flex: 1; }
#mp3ViewerContainer .pill {
  all: unset; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; padding: 8px 14px;
  border-radius: 11px; font-size: 13px; font-weight: 600; color: var(--text); background: rgba(var(--ov),.06); border: 1px solid var(--line);
  transition: background .2s, transform .25s var(--ease), border-color .2s;
}
#mp3ViewerContainer .pill:hover { background: rgba(var(--accent-rgb), .2); border-color: rgba(var(--accent-rgb), .5); transform: translateY(-2px); }
#mp3ViewerContainer .pill:active { transform: scale(.96); }
.pl-head { display: flex; justify-content: space-between; align-items: center; margin: 4px 2px 8px; font-size: 12.5px; font-weight: 700; color: var(--muted); }
#plCount { font-weight: 500; }

#mp3ViewerContainer #playlist li {
  display: flex; align-items: center; gap: 12px; padding: 8px 12px 8px 8px !important; margin: 4px 0 !important; border-radius: 14px !important;
  background: transparent !important; color: rgba(var(--ov),.72) !important; border: 1px solid transparent; box-shadow: none !important; font-weight: 500 !important;
  transform: none !important; transition: background .25s, color .25s, border-color .25s, transform .3s var(--ease) !important;
}
#playlist li::after { display: none !important; }
#mp3ViewerContainer #playlist li:hover { background: rgba(var(--ov),.06) !important; color: var(--text) !important; padding-left: 8px !important; transform: translateX(3px) !important; }
#mp3ViewerContainer #playlist li.active { background: linear-gradient(90deg, rgba(var(--accent-rgb), .24), rgba(var(--accent-rgb), .04)) !important; border-color: rgba(var(--accent-rgb), .45); color: var(--text) !important; font-weight: 700 !important; }
#playlist .pl-thumb { position: relative; width: 44px; height: 44px; flex: none; border-radius: 11px; overflow: hidden; background: var(--raised); display: grid; place-items: center; color: var(--muted); }
#playlist .pl-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
#playlist li.active .pl-thumb::after { content: ''; position: absolute; inset: 0; background: rgba(8,9,16,.55); }
#playlist .eq { position: absolute; inset: 0; z-index: 2; display: none; align-items: flex-end; justify-content: center; gap: 3px; padding-bottom: 11px; }
#playlist li.active .eq { display: flex; }
#playlist .eq i { width: 4px; height: 100%; max-height: 22px; border-radius: 2px; background: var(--accent); transform-origin: bottom; transform: scaleY(.25); }
#mp3ViewerContainer.is-playing #playlist .eq i { animation: eq 1s ease-in-out infinite; }
#playlist .eq i:nth-child(2) { animation-delay: -.4s !important; } #playlist .eq i:nth-child(3) { animation-delay: -.75s !important; } #playlist .eq i:nth-child(1) { animation-delay: -.15s !important; }
@keyframes eq { 0%,100% { transform: scaleY(.25); } 50% { transform: scaleY(1); } }
#playlist .pl-name { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
#playlist .pl-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 14.5px; }
#playlist .pl-sub { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; font-weight: 400; color: var(--muted); }
#playlist li.active .pl-sub { color: rgba(var(--ov),.7); }
#mp3ViewerContainer #playlist li .removeTrackBtn {
  position: static !important; all: unset; box-sizing: border-box; width: 30px; height: 30px; display: grid; place-items: center; cursor: pointer; border-radius: 9px;
  color: var(--muted); opacity: 0; transform: scale(.8); transition: opacity .2s, transform .25s var(--ease), background .2s, color .2s;
}
#mp3ViewerContainer #playlist li:hover .removeTrackBtn, #playlist li:focus-within .removeTrackBtn { opacity: 1; transform: none; }
#mp3ViewerContainer #playlist li .removeTrackBtn:hover { background: rgba(255,93,115,.18); color: var(--danger); }
#playlist li.ui-sortable-helper { background: var(--raised) !important; box-shadow: 0 18px 40px -10px rgba(0,0,0,.8) !important; transform: scale(1.02) !important; }
#playlist li.ui-sortable-placeholder { background: rgba(var(--accent-rgb), .08) !important; border: 1.5px dashed rgba(var(--accent-rgb), .5) !important; height: 52px; visibility: visible !important; }
#playlist li.pl-empty { flex-direction: column; justify-content: center; gap: 8px; padding: 34px 10px !important; text-align: center; color: var(--muted) !important; cursor: default; font-size: 13.5px; }
#playlist li.pl-empty:hover { background: transparent !important; transform: none !important; }
#playlist li.pl-empty .ic { opacity: .5; }

/* ---------- Lyrics ---------- */
#translationContainer .lyr-bar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 12px !important; font-family: inherit !important; }
#mp3ViewerContainer #fetchLyricsBtn, #mp3ViewerContainer #translationSettingsBtn, #mp3ViewerContainer #translationLyricsBtn, #mp3ViewerContainer #manualLyricsSearchBtn, #mp3ViewerContainer #clearLyricsBtn {
  all: unset; box-sizing: border-box; display: inline-flex !important; align-items: center; gap: 7px; cursor: pointer; padding: 8px 12px !important; margin: 0 !important; float: none !important;
  border-radius: 11px !important; font-size: 13px; font-weight: 600; color: var(--text) !important; background: rgba(var(--ov),.06) !important; border: 1px solid var(--line) !important;
  transition: background .2s, transform .25s var(--ease), border-color .2s !important;
}
#mp3ViewerContainer #fetchLyricsBtn { background: rgba(var(--accent-rgb), .2) !important; border-color: rgba(var(--accent-rgb), .5) !important; }
#mp3ViewerContainer #fetchLyricsBtn:hover, #mp3ViewerContainer #translationSettingsBtn:hover, #mp3ViewerContainer #translationLyricsBtn:hover, #mp3ViewerContainer #manualLyricsSearchBtn:hover { background: rgba(var(--accent-rgb), .32) !important; transform: translateY(-2px) !important; box-shadow: none !important; }
#mp3ViewerContainer #clearLyricsBtn { margin-left: auto !important; color: var(--danger) !important; }
#mp3ViewerContainer #clearLyricsBtn:hover { background: rgba(255,93,115,.16) !important; transform: none !important; }
#clearLyricsBtn.sync-off { background: rgba(255,93,115,.2) !important; }
#translationContainer .lyr-bar > span:not(#lyricsStatus) { display: none; }
#mp3ViewerContainer #manualLyricsInput { flex: 1; min-width: 150px; padding: 8px 12px !important; border-radius: 11px !important; background: rgba(var(--ov),.05) !important; border: 1px solid var(--line) !important; color: var(--text) !important; }
#mp3ViewerContainer #manualLyricsInput:focus { border-color: var(--accent) !important; box-shadow: 0 0 0 4px rgba(var(--accent-rgb), .15); }
#mp3ViewerContainer #lyricsStatus { color: var(--muted) !important; font-size: 12.5px !important; width: 100% !important; margin: 0 !important; order: 9; }
#mp3ViewerContainer #lyricsContainer {
  position: relative; background: var(--lyr-bg) !important; border: 1px solid var(--line) !important; border-radius: var(--r-md) !important; padding: 18px 8px !important;
}
#mp3ViewerContainer #lyricsInner { padding: 30px 6px; }
#mp3ViewerContainer .lrc-line {
  background: transparent !important; border-radius: 14px; padding: 6px 14px !important; margin: 6px 0 !important; color: var(--text) !important; font-size: 24px !important; font-weight: 700;
  opacity: clamp(.22, calc(1 - var(--d, 4) * .2), 1); filter: blur(calc(min(var(--d, 4), 3) * .35px));
  transform: scale(.94); transform-origin: center; transition: opacity .45s var(--ease), transform .45s var(--ease), filter .45s, background .3s, color .3s !important;
}
#mp3ViewerContainer .lrc-line:hover { opacity: .9; filter: none; background: rgba(var(--ov),.06) !important; }
#mp3ViewerContainer .lrc-line.active { opacity: 1; filter: none; transform: scale(1.04); color: var(--text) !important; text-shadow: 0 0 28px rgba(var(--accent-rgb), .95), 0 0 8px rgba(var(--accent-rgb), .6); }
#mp3ViewerContainer .lrc-translation { color: rgba(var(--ov),.72) !important; font-size: 18px !important; font-weight: 500; margin-top: 2px; direction: auto; }
#mp3ViewerContainer .lrc-line.active .lrc-translation { color: var(--accent) !important; }

/* ---------- Modals ---------- */
#addUrlModal, #lyricsSearchModal, #translationSettingsModal { backdrop-filter: blur(10px) saturate(130%); -webkit-backdrop-filter: blur(10px) saturate(130%); background: rgba(5,6,12,.62) !important; animation: fade .25s ease both; }
@keyframes fade { from { opacity: 0; } }
#addUrlModal > div, #lyricsSearchModal > div, #translationSettingsModal > div {
  background: linear-gradient(180deg, #181b2b, #10121d) !important; color: var(--text, #eceaf7) !important; border: 1px solid rgba(var(--ov),.1); border-radius: 22px !important;
  box-shadow: 0 40px 100px -20px rgba(0,0,0,.9) !important; animation: modalIn .5s cubic-bezier(.22,1,.36,1) both;
}
#lyricsSearchModal > div { transform: translate(-50%, -50%); animation: modalIn2 .5s cubic-bezier(.22,1,.36,1) both; }
@keyframes modalIn { from { opacity: 0; transform: translateY(24px) scale(.96); } }
@keyframes modalIn2 { from { opacity: 0; transform: translate(-50%, -46%) scale(.96); } }
#addUrlModal h3, #lyricsSearchModal h3, #translationSettingsModal h3 { font-size: 20px; margin-bottom: 14px !important; color: #fff !important; }
#addUrlModal textarea, #translationSettingsModal input:not([type=checkbox]):not([type=range]):not([type=color]), #translationSettingsModal select, #translationSettingsModal textarea {
  background: rgba(var(--ov),.05) !important; border: 1px solid rgba(var(--ov),.12) !important; border-radius: 12px !important; color: #fff !important; transition: border-color .2s, box-shadow .2s;
}
#addUrlModal textarea:focus, #translationSettingsModal input:focus, #translationSettingsModal select:focus, #translationSettingsModal textarea:focus { outline: none; border-color: #8b7bff !important; box-shadow: 0 0 0 4px rgba(139,123,255,.18); }
#addUrlModal button, #translationSettingsModal button, #closeLyricsModal { border-radius: 11px !important; font-weight: 600; padding: 9px 16px !important; transition: transform .2s, filter .2s; }
#addUrlModal button:hover, #translationSettingsModal button:hover, #closeLyricsModal:hover { filter: brightness(1.2); transform: translateY(-1px); }
#addUrlConfirm, #translationSettingsSave { background: linear-gradient(135deg, #8b7bff, #6a5cf0) !important; box-shadow: 0 8px 22px -8px rgba(139,123,255,.9); }
#translationSettingsModal a { color: #a99cff !important; }
#translationSettingsModal label { color: #9ea2c4 !important; }
#translationSettingsModal input[type=checkbox] { accent-color: #8b7bff; }
#translationSettingsModal input[type=range] { accent-color: #8b7bff; }
.lyrics-result { border: 1px solid rgba(255,255,255,.07); background: rgba(255,255,255,.04) !important; border-radius: 14px !important; transition: transform .25s cubic-bezier(.22,1,.36,1), background .2s, border-color .2s; }
.lyrics-result:hover { background: rgba(139,123,255,.18) !important; border-color: rgba(139,123,255,.5); transform: translateX(4px); }

/* ---------- Mini mode & responsive ---------- */
#mp3ViewerContainer.mini #playerContainer, #mp3ViewerContainer.mini #dropArea, #mp3ViewerContainer.mini #status { display: none !important; }
#mp3ViewerContainer.mini #mainPlayerContainer { margin-bottom: 0; }
@media (max-width: 991px) { #mp3ViewerContainer { --cover: clamp(150px, 20vw, 260px); } #mp3ViewerContainer #metadata #albumArt { width: var(--cover) !important; } }
@media (min-width: 1920px) { #mp3ViewerContainer { --cover: 380px; } }
@media (min-width: 2120px) { #mp3ViewerContainer { --cover: 460px; } }
@media (max-width: 700px) {
  #mp3ViewerContainer { --cover: 200px; }
  #controlsRow { grid-template-columns: 1fr; justify-items: center; }
  #volBar { width: 70px; }
  #mp3ViewerContainer #playerContainer #metadata { flex-direction: column; }
  #coverStage { margin-right: 0; }
  #mp3ViewerContainer.is-playing #vinyl { transform: translateX(0) scale(.9); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  #mp3ViewerContainer *, #mp3ViewerContainer *::before, #mp3ViewerContainer *::after { animation-duration: .001s !important; animation-iteration-count: 1 !important; transition-duration: .001s !important; }
}

#addUrlModal, #addUrlModal *, #lyricsSearchModal, #lyricsSearchModal *, #translationSettingsModal, #translationSettingsModal * { font-family: "Vazirmatn", "Segoe UI Variable Text", "Segoe UI", system-ui, Roboto, Arial, sans-serif !important; }
#closeLyricsModal { background: rgba(255,255,255,.08) !important; color: #fff !important; border: 1px solid rgba(255,255,255,.1) !important; margin-bottom: 10px; cursor: pointer; }

/* ================= Themes ================= */
#mp3ViewerContainer[data-theme="daylight"] { --bg: #eceff8; --surface: #ffffff; --raised: #f1f2fb; --line: rgba(24,26,60,.12); --text: #191b34; --muted: #666b8c; --ov: 24, 26, 60; --glow-a: .18; --glow-b: .09; --lyr-bg: rgba(24,26,60,.045); box-shadow: 0 30px 80px -24px rgba(40,44,90,.45), 0 0 0 1px rgba(255,255,255,.6) inset !important; }
#mp3ViewerContainer[data-theme="sunset"] { --bg: #170d15; --surface: #211320; --raised: #2c1a2b; --line: rgba(255,226,214,.11); --text: #fbeee7; --muted: #b4939c; --ov: 255, 226, 214; --glow-a: .3; --glow-b: .18; }
#mp3ViewerContainer[data-theme="oled"] { --bg: #000; --surface: #0b0b0b; --raised: #161616; --line: rgba(255,255,255,.11); --text: #f4f4f4; --muted: #8c8c8c; --ov: 255, 255, 255; --glow-a: .1; --glow-b: .05; backdrop-filter: none; }
#mp3ViewerContainer[data-theme="daylight"] #transport, #mp3ViewerContainer[data-theme="daylight"] #tabsHeader { background: rgba(255,255,255,.7) !important; }
#mp3ViewerContainer[data-theme="daylight"] #dropArea { background: rgba(255,255,255,.6) !important; }
#mp3ViewerContainer[data-theme="daylight"] #playBtn { background: linear-gradient(145deg, var(--accent), rgba(var(--accent-rgb), .75)) !important; }
#mp3ViewerContainer[data-theme="daylight"] #seekTrack { background: rgba(24,26,60,.12); }
#mp3ViewerContainer[data-theme="daylight"] #seekWrap::after { background: var(--accent); box-shadow: 0 0 0 4px rgba(var(--accent-rgb), .25), 0 3px 8px rgba(0,0,0,.25); }
#mp3ViewerContainer[data-theme="daylight"] #volBar::-webkit-slider-thumb { background: var(--accent); }
#mp3ViewerContainer[data-theme="oled"] #metadata { background: #050505 !important; }

/* ================= Visualizer layout ================= */
#mp3ViewerContainer[data-viz="strip"] #playerContainer #metadata { padding-bottom: calc(22px + var(--viz-h, 80px) * .85) !important; }
#mp3ViewerContainer[data-viz="ring"] #coverStage { margin-top: 44px; margin-bottom: 44px; margin-left: 44px; }

/* ================= Cover styles (data-cover) ================= */
#mp3ViewerContainer:not([data-cover="vinyl"]):not([data-cover="cd"]) #vinyl { display: none; }
#mp3ViewerContainer:not([data-cover="vinyl"]):not([data-cover="cd"]) #coverStage { margin-right: 0; }
/* CD: iridescent disc with a hole */
#mp3ViewerContainer[data-cover="cd"] #vinylDisc {
  background: conic-gradient(from 10deg, #ff9ad9, #9ad9ff, #a6ffb8, #fff7a8, #ffb99a, #ff9ad9);
  -webkit-mask-image: radial-gradient(circle, transparent 0 7%, #000 7.4%); mask-image: radial-gradient(circle, transparent 0 7%, #000 7.4%);
  box-shadow: none; filter: saturate(.75) brightness(1.05); opacity: .92;
}
/* Polaroid */
#mp3ViewerContainer[data-cover="polaroid"] #coverStage { transform: rotate(-4deg); transition: transform .6s var(--ease); margin: 10px 10px 10px 6px; }
#mp3ViewerContainer[data-cover="polaroid"] #coverStage:hover, #mp3ViewerContainer[data-cover="polaroid"].is-playing #coverStage { transform: rotate(-1.5deg); }
#mp3ViewerContainer[data-cover="polaroid"] #metadata #albumArt { border: 12px solid #f7f4ee !important; border-bottom-width: 58px !important; border-radius: 5px !important; aspect-ratio: .88; box-shadow: 0 26px 50px -12px rgba(0,0,0,.75) !important; }
#mp3ViewerContainer[data-cover="polaroid"] #coverStage::after { content: attr(data-caption); position: absolute; left: 16px; right: 16px; bottom: 15px; z-index: 3; text-align: center; color: #2b2b33; font: 600 15px/1.2 "Ink Free", "Segoe Script", "Bradley Hand", cursive; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* Glass 3D with reflection */
#mp3ViewerContainer[data-cover="glass"] #coverStage { perspective: 900px; margin-bottom: calc(var(--cover) * .24); }
#mp3ViewerContainer[data-cover="glass"] #metadata #albumArt { transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) !important; border-radius: 26px !important; border: 1px solid rgba(255,255,255,.4); transition: transform .18s ease-out, scale .5s var(--ease), box-shadow .5s !important; -webkit-box-reflect: below 6px linear-gradient(transparent 76%, rgba(255,255,255,.3)); }
#mp3ViewerContainer[data-cover="glass"] #coverStage::after { content: ''; position: absolute; inset: 0; z-index: 3; pointer-events: none; border-radius: 26px; background: radial-gradient(circle at var(--mx, 30%) var(--my, 18%), rgba(255,255,255,.38), transparent 48%); mix-blend-mode: soft-light; transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)); transition: transform .18s ease-out; }
/* Spinning disc */
#mp3ViewerContainer[data-cover="disc"] #metadata #albumArt { border-radius: 50% !important; animation: spin 18s linear infinite; animation-play-state: paused; box-shadow: 0 24px 60px -14px rgba(var(--accent-rgb), .7), 0 0 0 9px rgba(0,0,0,.35), 0 0 0 10px rgba(255,255,255,.14) !important; }
#mp3ViewerContainer[data-cover="disc"].is-playing #metadata #albumArt { animation-play-state: running; }
#mp3ViewerContainer[data-cover="disc"] #coverStage::after { content: ''; position: absolute; left: 50%; top: 50%; width: 15%; aspect-ratio: 1; transform: translate(-50%, -50%); border-radius: 50%; z-index: 3; background: radial-gradient(circle, rgba(0,0,0,.75) 0 40%, rgba(255,255,255,.2) 42% 48%, transparent 50%), var(--bg); box-shadow: 0 0 0 4px rgba(0,0,0,.35); }
/* Card stack */
#mp3ViewerContainer[data-cover="stack"] #coverStage { margin: 30px 34px 12px 30px; }
#mp3ViewerContainer[data-cover="stack"] #coverStage::before, #mp3ViewerContainer[data-cover="stack"] #coverStage::after { content: ''; position: absolute; inset: 0; border-radius: 20px; background: var(--cover-url) center / cover; filter: saturate(.85) brightness(.72); box-shadow: 0 10px 30px rgba(0,0,0,.5); transition: transform .7s var(--ease); }
#mp3ViewerContainer[data-cover="stack"] #coverStage::before { z-index: 1; opacity: .75; transform: translate(-6%, -5%) rotate(-6deg) scale(.95); }
#mp3ViewerContainer[data-cover="stack"] #coverStage::after { z-index: 0; opacity: .5; transform: translate(7%, -9%) rotate(5deg) scale(.89); }
#mp3ViewerContainer[data-cover="stack"].is-playing #coverStage::before { transform: translate(-10%, -6%) rotate(-10deg) scale(.95); }
#mp3ViewerContainer[data-cover="stack"].is-playing #coverStage::after { transform: translate(11%, -10%) rotate(9deg) scale(.89); }
/* Flat */
#mp3ViewerContainer[data-cover="flat"] #metadata #albumArt { border-radius: 12px !important; box-shadow: 0 8px 24px rgba(0,0,0,.45) !important; }

/* ================= Settings chips (dialog is always dark) ================= */
.mp-set-title { font-weight: 700; font-size: 13px; color: #cfd2ee !important; margin: 14px 0 8px; }
.mp-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.mp-chip { all: unset; box-sizing: border-box; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.05); color: #e8e9ff !important; font-size: 13px; font-weight: 600; transition: background .2s, border-color .2s, transform .2s, box-shadow .2s; }
.mp-chip:hover { background: rgba(139,123,255,.2); transform: translateY(-1px); }
.mp-chip.sel { border-color: #8b7bff; background: rgba(139,123,255,.28); box-shadow: 0 0 0 3px rgba(139,123,255,.2); }
.mp-chip i { width: 20px; height: 20px; border-radius: 50%; display: inline-block; border: 1px solid rgba(255,255,255,.3); }
.mp-chip svg { display: block; }

@media (max-width: 900px) { #mp3ViewerContainer #playerContainer #metadata { flex: 0 0 auto !important; } }

/* ================= OpenRouter model browser (settings dialog) ================= */
#orPicker { margin-top: 10px; border: 1px solid rgba(255,255,255,.12); border-radius: 14px; background: rgba(255,255,255,.03); padding: 10px; width: 94%; }
.or-toolbar { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 8px; }
#orSearch { flex: 1 1 180px; min-width: 0; padding: 8px 12px; border-radius: 10px; background: rgba(255,255,255,.06) !important; border: 1px solid rgba(255,255,255,.12) !important; color: #fff !important; }
#orFilters { display: flex; gap: 6px; }
#orPicker select { padding: 7px 8px; border-radius: 10px; }
#orMeta { font-size: 12px; color: #8f94b8; margin: 2px 2px 8px; }
#orList { max-height: 320px; overflow-y: auto; display: flex; flex-direction: column; gap: 4px; padding-right: 4px; }
.or-row { all: unset; box-sizing: border-box; cursor: pointer; display: grid; grid-template-columns: 1fr; gap: 2px; padding: 8px 10px; border-radius: 10px; border: 1px solid transparent; transition: background .15s, border-color .15s, transform .2s; }
.or-row:hover { background: rgba(139,123,255,.18); transform: translateX(3px); }
.or-row.cur { border-color: #8b7bff; background: rgba(139,123,255,.22); }
.or-name { font-size: 13.5px; font-weight: 700; color: #fff !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.or-id { font: 12px ui-monospace, Consolas, monospace !important; color: #9da2c8 !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.or-badges { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 3px; }
.or-b { font-size: 11px; font-weight: 600; padding: 1px 8px; border-radius: 99px; background: rgba(255,255,255,.09); color: #c9cdee !important; }
.or-b.free { background: rgba(63,224,176,.18); color: #3fe0b0 !important; }
.or-empty { text-align: center; color: #9da2c8; padding: 22px 8px; font-size: 13px; }
` + '</style>');

        // --- App font control: default + inject overriding CSS that can be changed via settings ---
       let appFont = '"Vazirmatn", "Segoe UI Variable Text", "Segoe UI", system-ui, Roboto, Arial, sans-serif';
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
                    <button id="addUrlBtn" title="Add URL(s)">${ic('link', 15)}<span>Add URL</span></button>
                    <button id="dropAreaToggle" title="Toggle compact/fade">${ic('collapse', 15)}</button>
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
            $('#tabsHeader').css('--tab-i', 0);
            $tabTranslation.removeClass('active').attr('aria-pressed', 'false');
        }
        function activateTranslationTab() {
            $('#playlistContainer').hide();
            $translationContainer.show();
            $tabTranslation.addClass('active').attr('aria-pressed', 'true');
            $('#tabsHeader').css('--tab-i', 1);
            $tabPlaylist.removeClass('active').attr('aria-pressed', 'false');
        }
        $tabPlaylist.on('click', activatePlaylistTab);
        $tabTranslation.on('click', activateTranslationTab);
        // default
        activatePlaylistTab();

        // SOON tab alert
        $('#tabSOON').on('click', function() {
            updateStatus('Something new is coming to this tab soon');
        });

        // Set up event listeners
        $dropArea.on('click', function() {
            $fileInput.trigger('click');
        });

        $fileInput.on('change', handleFileSelection);

        $closeBtn.on('click', function() {
            $(document).off('.mp3pp');
            try { $audioPlayer[0].pause(); } catch (e) { /* ignore */ }
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
        function highlightDropArea() { $dropArea.addClass('dragover'); }
        function highlightDropToPlaylist() { $('#dropToPlaylist').addClass('dragover'); }

        // Remove highlight from drop area
        function unhighlightDropArea() { $dropArea.removeClass('dragover'); }
        function unhighlightDropToPlaylist() { $('#dropToPlaylist').removeClass('dragover'); }

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
            $status.text(message).attr('data-type', type).css('color', '').removeClass('pop'); void $status[0].offsetWidth; $status.addClass('pop');
        }

        // Extract metadata from MP3 file and optionally cache album art for playlist
        function extractMetadata(file, filename, onExtracted) {
            const finish = (tags) => {
                tags = tags || {};
                if (!playlistAlbumArts.get(file)) {
                    if (tags.image && tags.image.data) {
                        playlistAlbumArts.set(file, URL.createObjectURL(new Blob([tags.image.data], { type: tags.image.format })));
                    } else {
                        playlistAlbumArts.set(file, null);
                    }
                }
                playlistTags.set(file, tags);
                if (typeof onExtracted === 'function') onExtracted();
            };
            loadTags(file).then(finish).catch(() => finish({}));
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

        // Remote / file:/// items use the same reader (ranged requests)
        async function extractMetadataFromSrc(item, onExtracted) {
            if (!item || !item.src) { if (typeof onExtracted === 'function') onExtracted(); return; }
            await new Promise(res => extractMetadata(item, item.name, () => { try { if (typeof onExtracted === 'function') onExtracted(); } finally { res(); } }));
        }
        // --- End new src metadata extraction helpers ---

        // Parse ID3 tags from array buffer
        function parseID3Tags(arrayBuffer) { return parseTagsAny(arrayBuffer); }

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
            const fileNameWithoutExt = filename.replace(/\.[A-Za-z0-9]{2,5}$/, '');
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
                    .on('error', function() { paintCover(placeholderCover(fileNameWithoutExt), fileNameWithoutExt); })
                    .attr('src', url);

                // set CSS custom property used by ::before for blurred/dark background
                // wrap url in quotes to be safe with paths
                $metadata.css('--metadata-bg', `url("${url}")`);
                coverToken++;
                $('#coverStage')[0].style.setProperty('--cover-url', `url("${url}")`);
                applyAccentFromImage(url);
                // remember URL so we can revoke it later
                $metadata.data('bgUrl', url);
            } else {
                // No embedded art: generated cover now, then look for cover.jpg / folder.jpg next to file:/// tracks
                coverToken++;
                paintCover(placeholderCover(fileNameWithoutExt), fileNameWithoutExt);
                tryFolderCover(playlist[currentTrackIndex], fileNameWithoutExt, coverToken);
            }

            // Use the Media Session API for metadata
            let artworkUrl = '';
            let artworkFormat = '';

            if (tags.image && tags.image.data) {
                const blob = new Blob([tags.image.data], { type: tags.image.format });
                artworkUrl = $metadata.data('bgUrl') || '';   // reuse the blob URL (was leaking a second one)
                artworkFormat = tags.image.format;
            }

            if ('mediaSession' in navigator) {
                try {
                    // Prefer the in-memory blob URL when available, otherwise fall back to a bundled artwork URL
                    const fallbackArtwork = 'https://raw.githubusercontent.com/aliashori78/MP3-Player-Pro/9ecdc18985504a6a3889234b61739a79ef14fe38/Assets/Album1.jpg';
                    const artworkSrc = artworkUrl || fallbackArtwork;
                    const artworkType = artworkFormat || 'image/jpeg';

                    // Provide multiple size hints to improve platform compatibility (Windows notification/taskbar)
                    const artworkEntries = [
                        { src: artworkSrc, sizes: '96x96', type: artworkType },
                        { src: artworkSrc, sizes: '128x128', type: artworkType },
                        { src: artworkSrc, sizes: '192x192', type: artworkType },
                        { src: artworkSrc, sizes: '256x256', type: artworkType },
                        { src: artworkSrc, sizes: '512x512', type: artworkType },
                        { src: artworkSrc, sizes: 'any', type: artworkType }
                    ];

                    navigator.mediaSession.metadata = new MediaMetadata({
                        title: tags.title || fileNameWithoutExt,
                        artist: tags.artist,
                        album: tags.album,
                        artwork: artworkEntries
                    });
                } catch (err) {
                    console.warn('MediaSession metadata set failed:', err);
                }
            }
            //console.log('MY DEBUG: ' + tags.image.data);
            //console.log('MediaSession.metadata =', navigator.mediaSession.metadata);

            // Display metadata (all values escaped)
            const mdTitle = tags.title || fileNameWithoutExt;
            const mdArtist = tags.artist || tags.albumArtist;
            const chips = [];
            if (tags.year) chips.push(esc(tags.year));
            if (tags.trackNumber) chips.push('Track ' + esc(tags.trackNumber));
            let infoHTML = `<div class="ti-title ti-swap">${esc(mdTitle)}</div>`;
            if (mdArtist) infoHTML += `<div class="ti-artist ti-swap">${esc(mdArtist)}</div>`;
            if (tags.album) infoHTML += `<div class="ti-album ti-swap">${esc(tags.album)}</div>`;
            if (chips.length) infoHTML += `<div class="ti-chips ti-swap">${chips.map(c => `<span>${c}</span>`).join('')}</div>`;
            infoHTML += `<div class="ti-file ti-swap">${esc(filename)}</div>`;
            $trackInfo.html(infoHTML);
            $('#coverStage').attr('data-caption', mdTitle);
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
        let visualizerHeight = 80;
        let visualizerSensitivity = 1.0;
        // number of bars to draw when style === 'bars' (user configurable)
        let visualizerBarCount = 80;

        let audioCtx, analyser, sourceNode, dataArray, bufferLength, rafId, vizTime, vizFreq;
        const canvas = document.getElementById('visualizerCanvas');
        const canvasCtx = canvas ? canvas.getContext('2d') : null;

                function ensureCanvasSize() {
            if (!canvas || !canvasCtx) return false;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const w = canvas.clientWidth, h = canvas.clientHeight;
            if (!w || !h) return false;                       // hidden (compact mode / not loaded yet)
            const bw = Math.round(w * dpr), bh = Math.round(h * dpr);
            if (canvas.width !== bw || canvas.height !== bh) { canvas.width = bw; canvas.height = bh; }
            canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
            return true;
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

           // follow the cover-art accent, brighter with intensity
           const m = intensity * 0.5, [ar, ag, ab] = accentRGB;
           return `rgba(${Math.round(ar + (255 - ar) * m)},${Math.round(ag + (255 - ag) * m)},${Math.round(ab + (255 - ab) * m)},${alpha})`;
       }

        function setupAnalyzer() {
            if (!visualizerEnabled) return;
            if (!canvasCtx || (!window.AudioContext && !window.webkitAudioContext)) return;
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (!analyser) {
                analyser = audioCtx.createAnalyser();
                analyser.fftSize = 2048; // better resolution for waveform and radial
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

                // ===== v1.2 visualizer engine =====
        // Log-spaced frequency bands, attack/release smoothing, peak caps, six styles.
        // The canvas covers the whole "now playing" card BEHIND the cover/text:
        //   bars / mirror / area / waveform -> drawn in a strip at the bottom of the card (card gets extra bottom padding)
        //   radial / pulse                  -> drawn as a halo around the cover art
        let vizBands = null, vizLo = null, vizHi = null, vizPeaks = null, vizPeakV = null, vizBandKey = '';
        let vizGeo = null, vizGeoAt = 0, vizRings = [], vizBassAvg = 0, vizBeatAt = 0, vizLast = 0;

        function vizAccent(a) {
            if (colorEnabled) return hexToRGBA(visualizerColor, a);
            return `rgba(${accentRGB[0]},${accentRGB[1]},${accentRGB[2]},${a})`;
        }
        function vizLight(a, m) {
            if (colorEnabled) return hexToRGBA(visualizerColor, a);
            const [r, g, b] = accentRGB;
            return `rgba(${Math.round(r + (255 - r) * m)},${Math.round(g + (255 - g) * m)},${Math.round(b + (255 - b) * m)},${a})`;
        }
        function clearCanvas() {
            if (!canvasCtx || !canvas) return;
            canvasCtx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        }
        function rr(x, y, w, h, r) { if (canvasCtx.roundRect) canvasCtx.roundRect(x, y, w, h, r); else canvasCtx.rect(x, y, w, h); }

        // Layout mode drives the CSS (extra bottom padding for strip styles, breathing room around the cover for halo styles)
        function applyVizLayout() {
            const el = $viewerContainer && $viewerContainer[0];
            if (!el) return;
            const ring = visualizerStyle === 'radial' || visualizerStyle === 'pulse';
            el.setAttribute('data-viz', !visualizerEnabled ? 'off' : (ring ? 'ring' : 'strip'));
            el.style.setProperty('--viz-h', Math.round(visualizerHeight || 80) + 'px');
            vizGeo = null;
        }

        function getBands(n) {
            if (!vizFreq || vizFreq.length !== analyser.frequencyBinCount) vizFreq = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(vizFreq);
            const key = n + '|' + audioCtx.sampleRate + '|' + analyser.fftSize;
            if (key !== vizBandKey) {
                vizBandKey = key;
                const binHz = audioCtx.sampleRate / analyser.fftSize, fmin = 40, fmax = Math.min(16000, audioCtx.sampleRate / 2 - 1);
                vizLo = new Float32Array(n); vizHi = new Float32Array(n);
                for (let i = 0; i < n; i++) {
                    vizLo[i] = fmin * Math.pow(fmax / fmin, i / n) / binHz;
                    vizHi[i] = fmin * Math.pow(fmax / fmin, (i + 1) / n) / binHz;
                }
                vizBands = new Float32Array(n); vizPeaks = new Float32Array(n); vizPeakV = new Float32Array(n);
            }
            const len = vizFreq.length;
            for (let i = 0; i < n; i++) {
                const lo = vizLo[i], hi = vizHi[i];
                let v;
                if (hi - lo < 1) {                                   // narrow low band: interpolate between bins
                    const c = (lo + hi) / 2, i0 = Math.min(len - 1, Math.floor(c)), i1 = Math.min(len - 1, i0 + 1), t = c - i0;
                    v = vizFreq[i0] * (1 - t) + vizFreq[i1] * t;
                } else {
                    let s = 0, cnt = 0;
                    for (let j = Math.floor(lo), b = Math.min(len - 1, Math.ceil(hi)); j <= b; j++) { s += vizFreq[j]; cnt++; }
                    v = cnt ? s / cnt : 0;
                }
                v = (v / 255) * (0.7 + 0.6 * (i / n));               // highs carry less energy: tilt up
                v = Math.min(1, v * visualizerSensitivity);
                const prev = vizBands[i];
                vizBands[i] = v > prev ? prev + (v - prev) * 0.65 : prev + (v - prev) * 0.16;   // fast attack, slow release
                if (vizBands[i] >= vizPeaks[i]) { vizPeaks[i] = vizBands[i]; vizPeakV[i] = 0; }
                else { vizPeakV[i] += 0.0014; vizPeaks[i] = Math.max(vizBands[i], vizPeaks[i] - vizPeakV[i]); }
            }
            return vizBands;
        }

        // Cover geometry in canvas coordinates (cached ~4x/second)
        function vizCover() {
            const now = performance.now();
            if (vizGeo && now - vizGeoAt < 250) return vizGeo;
            const cv = canvas.getBoundingClientRect(), art = document.getElementById('albumArt');
            let g = { cx: cv.width / 2, cy: cv.height / 2, r: Math.min(cv.width, cv.height) * 0.2, round: true };
            if (art && art.offsetParent !== null) {
                const r = art.getBoundingClientRect();
                if (r.width > 20) g = { cx: r.left - cv.left + r.width / 2, cy: r.top - cv.top + r.height / 2, r: Math.min(r.width, r.height) / 2, round: $viewerContainer.attr('data-cover') === 'disc' };
            }
            vizGeo = g; vizGeoAt = now;
            return g;
        }
        function edgeDist(g, ang) {                                   // distance from centre to the cover outline
            if (g.round) return g.r;
            return g.r / Math.max(Math.abs(Math.cos(ang)), Math.abs(Math.sin(ang))) * 0.96;
        }
        function vizStrip(w, h) {
            const H = Math.max(20, Math.min(visualizerHeight, h * 0.6));
            return { H, x0: 22, x1: w - 22, y: h - 16 };
        }

        function drawBarsStyle(w, h) {
            const n = Math.max(8, Math.min(128, visualizerBarCount | 0)), b = getBands(n), { H, x0, x1, y } = vizStrip(w, h);
            const slot = (x1 - x0) / n, bw = Math.max(2, slot * 0.68), g = canvasCtx.createLinearGradient(0, y, 0, y - H);
            g.addColorStop(0, vizAccent(0.2)); g.addColorStop(0.6, vizAccent(0.8)); g.addColorStop(1, vizLight(1, 0.55));
            canvasCtx.fillStyle = g; canvasCtx.beginPath();
            for (let i = 0; i < n; i++) { const bh = Math.max(3, b[i] * H); rr(x0 + i * slot + (slot - bw) / 2, y - bh, bw, bh, Math.min(bw / 2, 4)); }
            canvasCtx.fill();
            canvasCtx.fillStyle = vizLight(0.9, 0.7); canvasCtx.beginPath();     // falling peak caps
            for (let i = 0; i < n; i++) { const ph = Math.max(3, vizPeaks[i] * H) + 4; rr(x0 + i * slot + (slot - bw) / 2, y - ph - 2, bw, 2.5, 1.2); }
            canvasCtx.fill();
        }
        function drawMirrorStyle(w, h) {
            const n = Math.max(8, Math.min(128, visualizerBarCount | 0)), m = Math.ceil(n / 2), b = getBands(m), { H, x0, x1, y } = vizStrip(w, h);
            const cx = (x0 + x1) / 2, cy = y - H / 2, slot = (x1 - x0) / (m * 2), bw = Math.max(2, slot * 0.68);
            const g = canvasCtx.createLinearGradient(0, cy - H / 2, 0, cy + H / 2);
            g.addColorStop(0, vizLight(0.95, 0.5)); g.addColorStop(0.5, vizAccent(0.45)); g.addColorStop(1, vizLight(0.95, 0.5));
            canvasCtx.fillStyle = g; canvasCtx.beginPath();
            for (let i = 0; i < m; i++) {                              // bass in the centre, highs at the edges
                const bh = Math.max(3, b[i] * H), off = (slot - bw) / 2;
                rr(cx + i * slot + off, cy - bh / 2, bw, bh, bw / 2);
                rr(cx - (i + 1) * slot + off, cy - bh / 2, bw, bh, bw / 2);
            }
            canvasCtx.fill();
        }
        function drawAreaStyle(w, h) {
            const n = 64, b = getBands(n), { H, x0, x1, y } = vizStrip(w, h), step = (x1 - x0) / (n - 1);
            const px = i => x0 + i * step, py = i => y - Math.max(1, b[i] * H);
            const curve = () => { for (let i = 1; i < n; i++) { const ax = px(i - 1), ay = py(i - 1), bx = px(i), by = py(i); canvasCtx.quadraticCurveTo(ax, ay, (ax + bx) / 2, (ay + by) / 2); } canvasCtx.lineTo(px(n - 1), py(n - 1)); };
            const g = canvasCtx.createLinearGradient(0, y, 0, y - H);
            g.addColorStop(0, vizAccent(0.04)); g.addColorStop(1, vizAccent(0.55));
            canvasCtx.beginPath(); canvasCtx.moveTo(x0, y); canvasCtx.lineTo(px(0), py(0)); curve(); canvasCtx.lineTo(x1, y); canvasCtx.closePath();
            canvasCtx.fillStyle = g; canvasCtx.fill();
            canvasCtx.beginPath(); canvasCtx.moveTo(px(0), py(0)); curve();
            canvasCtx.lineWidth = 2.2; canvasCtx.strokeStyle = vizLight(0.95, 0.6); canvasCtx.stroke();
        }
        function drawWaveStyle(w, h) {
            if (!vizTime || vizTime.length !== analyser.fftSize) vizTime = new Uint8Array(analyser.fftSize);
            analyser.getByteTimeDomainData(vizTime);
            const { H, x0, x1, y } = vizStrip(w, h), cy = y - H / 2, count = vizTime.length >> 1;
            let start = 0;                                             // trigger on a rising zero-crossing: steady picture
            for (let i = 1; i < count; i++) if (vizTime[i - 1] < 128 && vizTime[i] >= 128) { start = i; break; }
            const stride = Math.max(1, Math.floor(count / 200));
            const path = () => {
                canvasCtx.beginPath();
                for (let k = 0; k < count; k += stride) {
                    const v = Math.max(-1, Math.min(1, ((vizTime[start + k] - 128) / 128) * visualizerSensitivity * 1.4));
                    const x = x0 + (k / count) * (x1 - x0), yy = cy + v * H / 2;
                    if (k === 0) canvasCtx.moveTo(x, yy); else canvasCtx.lineTo(x, yy);
                }
            };
            canvasCtx.lineCap = 'round';
            canvasCtx.lineWidth = 8; canvasCtx.strokeStyle = vizAccent(0.14); path(); canvasCtx.stroke();   // soft glow (no shadowBlur: it is slow)
            canvasCtx.lineWidth = 2.2; canvasCtx.strokeStyle = vizLight(0.95, 0.55); path(); canvasCtx.stroke();
        }
        function drawRadialStyle(w, h) {
            const g = vizCover(), n = 72, m = n / 2, b = getBands(m);
            const room = Math.min(g.cx, w - g.cx, g.cy, h - g.cy) - g.r - 10, maxLen = Math.max(18, Math.min(64, room));
            canvasCtx.lineCap = 'round'; canvasCtx.lineWidth = 3; canvasCtx.strokeStyle = vizLight(0.9, 0.3);
            canvasCtx.beginPath();
            for (let i = 0; i < n; i++) {
                const bi = i < m ? i : n - 1 - i;                      // mirrored: no seam, bass at the top
                const ang = (i / n) * Math.PI * 2 - Math.PI / 2, ca = Math.cos(ang), sa = Math.sin(ang);
                const d0 = edgeDist(g, ang) + 8, d1 = d0 + 3 + b[bi] * maxLen;
                canvasCtx.moveTo(g.cx + ca * d0, g.cy + sa * d0); canvasCtx.lineTo(g.cx + ca * d1, g.cy + sa * d1);
            }
            canvasCtx.stroke();
        }
        function drawPulseStyle(w, h) {
            const g = vizCover(), b = getBands(16), now = performance.now();
            let bass = 0; for (let i = 0; i < 4; i++) bass += b[i]; bass /= 4;
            vizBassAvg = vizBassAvg * 0.96 + bass * 0.04;
            if (bass > vizBassAvg * 1.3 && bass > 0.3 && now - vizBeatAt > 220) { vizRings.push({ t: now, s: bass }); vizBeatAt = now; if (vizRings.length > 6) vizRings.shift(); }
            vizRings = vizRings.filter(r => now - r.t < 1400);
            const maxD = Math.max(30, Math.min(120, Math.min(g.cx, w - g.cx, g.cy, h - g.cy) - g.r));
            const outline = d => { canvasCtx.beginPath(); rr(g.cx - g.r - d, g.cy - g.r - d, (g.r + d) * 2, (g.r + d) * 2, g.round ? g.r + d : 22 + d); canvasCtx.stroke(); };
            canvasCtx.lineWidth = 2.5;
            vizRings.forEach(r => {
                const p = (now - r.t) / 1400, d = 6 + (1 - Math.pow(1 - p, 3)) * maxD * (0.6 + 0.4 * r.s);
                canvasCtx.strokeStyle = vizAccent((1 - p) * 0.7); outline(d);
            });
            canvasCtx.lineWidth = 3; canvasCtx.strokeStyle = vizAccent(0.25 + bass * 0.5); outline(5 + bass * 14);
        }
        function drawViz() {
            const w = canvas.clientWidth, h = canvas.clientHeight;
            canvasCtx.clearRect(0, 0, w, h);
            switch (visualizerStyle) {
                case 'mirror': drawMirrorStyle(w, h); break;
                case 'area': drawAreaStyle(w, h); break;
                case 'waveform': drawWaveStyle(w, h); break;
                case 'radial': drawRadialStyle(w, h); break;
                case 'pulse': drawPulseStyle(w, h); break;
                default: drawBarsStyle(w, h);
            }
        }
        function startDrawing() {
            if (!canvas || !canvasCtx || !analyser) return;
            cancelAnimationFrame(rafId);
            analyser.smoothingTimeConstant = 0.55; analyser.minDecibels = -90; analyser.maxDecibels = -20;   // smoothing is done in getBands()
            ensureCanvasSize();
            const draw = (ts) => {
                rafId = requestAnimationFrame(draw);
                if (!visualizerEnabled) { clearCanvas(); cancelAnimationFrame(rafId); rafId = null; return; }
                if (document.hidden || !canvas.offsetParent) return;            // nothing visible: skip all work
                if (ts - vizLast < 14) return;                                  // ~60 fps cap on high-refresh screens
                vizLast = ts;
                if (!canvas.width || !canvas.height) { ensureCanvasSize(); return; }
                drawViz();
            };
            rafId = requestAnimationFrame(draw);
        }
        // Resting state while paused: a faint baseline / tick ring
        function renderSilence() {
            if (!canvas || !canvasCtx || !ensureCanvasSize()) return;
            const w = canvas.clientWidth, h = canvas.clientHeight;
            canvasCtx.clearRect(0, 0, w, h);
            if (vizBands) { vizBands.fill(0); vizPeaks.fill(0); }
            if (!visualizerEnabled) return;
            if (visualizerStyle === 'radial' || visualizerStyle === 'pulse') {
                const g = vizCover(), n = 72;
                canvasCtx.lineCap = 'round'; canvasCtx.lineWidth = 3; canvasCtx.strokeStyle = vizAccent(0.3); canvasCtx.beginPath();
                for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2 - Math.PI / 2, d = edgeDist(g, a) + 8; canvasCtx.moveTo(g.cx + Math.cos(a) * d, g.cy + Math.sin(a) * d); canvasCtx.lineTo(g.cx + Math.cos(a) * (d + 3), g.cy + Math.sin(a) * (d + 3)); }
                canvasCtx.stroke();
            } else {
                const { x0, x1, y } = vizStrip(w, h);
                canvasCtx.lineCap = 'round'; canvasCtx.lineWidth = 3; canvasCtx.strokeStyle = vizAccent(0.3);
                canvasCtx.beginPath(); canvasCtx.moveTo(x0, y); canvasCtx.lineTo(x1, y); canvasCtx.stroke();
            }
        }
        if (window.ResizeObserver && canvas) new ResizeObserver(() => { vizGeo = null; ensureCanvasSize(); if (!rafId) renderSilence(); }).observe(canvas);
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
            
        });

        $viewerContainer.on('click', ensureAudioContext);
        $(window).on('resize', function() { if (analyser) startDrawing(); });

        // Optional: allow toggling visualizer programmatically
        function applyVisualizerSettings() {
            applyVizLayout();
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
                        <div style="font-weight:bold; color:#fff;">${esc(item.trackName || item.name)}</div>
                        <div style="color:#ccc; font-size:0.9em;">${esc(item.artistName)}</div>
                        <div style="color:#aaa; font-size:0.8em;">
                            ${item.albumName ? `Album: ${esc(item.albumName)} • ` : ''}
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
                    css: { cursor: 'pointer' }
                });

                const $orig = $('<div/>', { class: 'lrc-original' }).append(textNode(e.text || '—'));
                const $trans = $('<div/>', {
                    class: 'lrc-translation',
                    'data-for': i,
                    css: { display: 'none' }
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
                $('#clearLyricsBtn').addClass('sync-off').attr('title', 'Lyrics sync is off (double-click to enable)');
                $('#lyricsStatus').text('Lyrics sync disabled');
            } else {
                // Enable sync
                $audioPlayer.data('lyricsEnabled', true);
                $('#clearLyricsBtn').removeClass('sync-off').attr('title', 'Clear lyrics (double-click: toggle sync)');
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
                const lines = document.querySelectorAll('#lyricsInner .lrc-line');
                lines.forEach((el, i) => { el.style.setProperty('--d', Math.abs(i - best)); el.classList.toggle('active', i === best); });
                if (best >= 0 && lines[best]) scrollLyricIntoCenter(lines[best]);
            }
        }
        // Scroll the nearest scrollable ancestor only (scrollIntoView also scrolled the host page)
        function scrollLyricIntoCenter(el) {
            let p = el.parentElement;
            while (p && p !== document.body) {
                const oy = getComputedStyle(p).overflowY;
                if ((oy === 'auto' || oy === 'scroll') && p.scrollHeight > p.clientHeight + 1) break;
                p = p.parentElement;
            }
            if (!p || p === document.body) return;
            const pr = p.getBoundingClientRect(), er = el.getBoundingClientRect();
            p.scrollTo({ top: p.scrollTop + (er.top - pr.top) - (p.clientHeight - er.height) / 2, behavior: 'smooth' });
        }

        // Auto-search based on current track metadata
        $('#fetchLyricsBtn').off('click').on('click', async function() {
            const file = playlist[currentTrackIndex];
            let tags = file ? playlistTags.get(file) : null;
            if (!tags) tags = {};

            const artist = tags.artist || tags.albumArtist || '';
            const title = tags.title || (file && file.name ? file.name.replace(/\.[A-Za-z0-9]{2,5}$/, '') : '');

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
        let hfToken = 'YOUR_HF_API_KEY_HERE'; // Set it from Lyrics Settings (stored locally, never hard-code keys here)
        let hfModel = 'meta-llama/Llama-3.3-70B-Instruct'; // Any other model from https://huggingface.co/docs/inference-providers/en/index

        // Constants for OpenRouter (any other model from https://openrouter.ai/settings/keys)
        let OPENROUTER_API_KEY = 'YOUR_OPENROUTER_API_KEY_HERE'; // Set it from Lyrics Settings
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

                                    <!-- Appearance -->
                                    <div style="flex:1 1 100%; margin-top:6px; padding-bottom:12px; border-bottom:1px dashed #333;">
                                        <div class="mp-set-title" style="margin-top:0;">Theme</div>
                                        <div class="mp-chips" id="setting_themeChips">${Object.entries(THEMES).map(([k, t]) => `<button type="button" class="mp-chip" data-theme="${k}"><i style="background:${t.swatch}"></i>${t.label}</button>`).join('')}</div>
                                        <label style="display:block; margin-top:10px; font-size:13px;"><input type="checkbox" id="setting_accentFromCover" style="margin-right:8px;"> Match colors to the album cover</label>
                                        <div class="mp-set-title">Cover style</div>
                                        <div class="mp-chips" id="setting_coverChips">${COVER_STYLES.map(([k, l, i]) => `<button type="button" class="mp-chip" data-cover="${k}">${ic(i, 16)}${l}</button>`).join('')}</div>
                                    </div>
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
                                        <div style="display:flex; gap:8px; align-items:center; width:94%;">
                                            <input id="setting_openrouter_model" placeholder="vendor/model-name:free" style="flex:1; min-width:0; padding:8px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;" />
                                            <button type="button" id="orBrowseBtn" class="mp-chip" title="Browse all OpenRouter models (including free ones)">${ic('list', 16)}<span>Browse models</span></button>
                                        </div>
                                        <div id="orPicker" style="display:none;">
                                            <div class="or-toolbar">
                                                <input id="orSearch" placeholder="Search by name, vendor or id..." autocomplete="off">
                                                <div id="orFilters"><button type="button" class="mp-chip sel" data-f="all">All</button><button type="button" class="mp-chip" data-f="free">Free</button><button type="button" class="mp-chip" data-f="paid">Paid</button></div>
                                                <select id="orSort"><option value="new">Newest</option><option value="name">Name A-Z</option><option value="ctx">Largest context</option></select>
                                            </div>
                                            <div id="orMeta"></div>
                                            <div id="orList"></div>
                                        </div>
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
                                            <option value='"Vazirmatn", "Segoe UI Variable Text", "Segoe UI", system-ui, Roboto, Arial, sans-serif'>Vazirmatn (modern)</option>
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
                                            <input type="checkbox" id="setting_visualizer_enable" style="margin-right:8px;" checked> Enable Visualizer
                                        </label>

                                        <label style="display:block; color:#ccc; margin-bottom:6px;">
                                            <span style="display:inline-block; width:120px;">Style:</span>
                                            <select id="setting_visualizer_style" style="padding:6px; background:#111; border:1px solid #444; color:#fff; border-radius:4px;">
                                                <option value="bars">Bars (peak caps)</option><option value="mirror">Mirror</option><option value="area">Spectrum area</option><option value="waveform">Waveform</option><option value="radial">Radial halo</option><option value="pulse">Pulse rings</option>
                                            </select>
                                        </label>

                                        <label style="display:block; color:#ccc; margin-bottom:6px;">
                                            <span style="display:inline-block; width:120px;">Height:</span>
                                            <input id="setting_visualizer_height" type="range" min="10" max="200" value="80" style="width:200px; vertical-align:middle;"/>
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
                    savePrefs();
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
            $('#setting_appFont').val(appFont);

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
                
            } else {
                $audioPlayer[0].pause();
                
            }
        });

        // Add play/pause cover logic
        $('#albumArt').off('click').on('click', function() {
            if ($audioPlayer[0].paused) {
                $audioPlayer[0].play();
                
            } else {
                $audioPlayer[0].pause();
                
            }
        });

        // Audio player event listeners
        $audioPlayer.on('play', function() {
            
        });

        $audioPlayer.on('pause ended', function() {
            
        });

        // Shuffle functionality
        function getRandomTrackIndex() {
            if (playlist.length <= 1) return currentTrackIndex;
            const availableTracks = [...Array(playlist.length).keys()].filter(i => i !== currentTrackIndex);
            return availableTracks[Math.floor(Math.random() * availableTracks.length)];
        }

        // Shuffle: random next track, without permanently reordering the user's playlist
        $('#shuffleBtn').off('click').on('click', function() {
            isShuffle = !isShuffle;
            shuffleHistory.length = 0;
            syncToggles(); savePrefs();
        });

        // Update event listeners
        $fileInput.on('change', handleFileSelection);
        $audioPlayer.on('ended', playNextTrack);
        $('#nextBtn').on('click', playNextTrack);
        $('#prevBtn').on('click', playPrevTrack);

        $('#loopBtn').on('click', function() {
            isLoop = !isLoop;
            $audioPlayer.prop('loop', isLoop);
            syncToggles(); savePrefs();
        });
        $('#repeatBtn').on('click', function() {
            isRepeat = !isRepeat;
            syncToggles(); savePrefs();
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
                                usedBlobUrl = trackObjectUrl(URL.createObjectURL(blob));
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
                $trackInfo.html('<div class="ti-file">Loading metadata...</div>');

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
                    analyser.fftSize = 2048;
                    bufferLength = analyser.frequencyBinCount;
                    dataArray = new Uint8Array(bufferLength);
                }

                // A media element can be bound to ONE MediaElementSource only. Re-creating it (old code) silenced URL tracks.
                try { if (visualizerEnabled) setupAnalyzer(); } catch (e) { console.warn('Visualizer setup failed', e); }

                // Attempt to extract metadata from remote / file URL (ranged fetch).
                // This will populate playlistTags and playlistAlbumArts similar to local files.
                try {
                    await extractMetadataFromSrc(file, function() {
                        const tags = playlistTags.get(file) || {};
                        // display metadata if available, else show filename
                        if (Object.keys(tags).length) {
                            displayMetadata(tags, file.name || (new URL(file.src)).pathname.split('/').pop());
                        } else {
                            $trackInfo.html(`<div class="ti-title">${esc(file.name)}</div>`);
                        }
                        // call auto behaviors afterwards
                        try { handleTrackChanged(file); } catch (e) { console.error(e); }
                    });
                } catch (e) {
                    console.error('Remote metadata extraction error:', e);
                    $trackInfo.html(`<div class="ti-title">${esc(file.name)}</div>`);
                    try { handleTrackChanged(file); } catch (e) { console.error(e); }
                }
            } else {
                // Use File object
                audioSrc = trackObjectUrl(URL.createObjectURL(file));
                $audioPlayer.attr('src', audioSrc);
                $mainPlayerContainer.show();
                $playerContainer.show();
                $trackInfo.html('<div class="ti-file">Loading metadata...</div>');
                extractMetadata(file, file.name, function() {
                    try {
                        displayMetadata(playlistTags.get(file) || {}, file.name);
                        updateStatus('File loaded successfully');
                    } catch (error) {
                        $trackInfo.html('<div class="ti-file">No metadata available</div>');
                    } finally {
                        try { handleTrackChanged(file); } catch (e) { console.error(e); }
                    }
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
            const title = tags.title || (file && file.name ? file.name.replace(/\.[A-Za-z0-9]{2,5}$/, '') : '');

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
                shuffleHistory.push(currentTrackIndex);
                if (shuffleHistory.length > 200) shuffleHistory.shift();
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

        // Play previous track (restarts the track first if it already played > 3s)
        function playPrevTrack() {
            const a = $audioPlayer[0];
            if (a && a.currentTime > 3) { a.currentTime = 0; return; }
            if (isShuffle && shuffleHistory.length) {
                currentTrackIndex = shuffleHistory.pop();
            } else if (currentTrackIndex > 0) {
                currentTrackIndex--;
            } else if (isRepeat && playlist.length) {
                currentTrackIndex = playlist.length - 1;
            } else {
                if (a) a.currentTime = 0;
                return;
            }
            playTrack(currentTrackIndex);
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
            filteredPlaylist = playlist.filter(file => {
                const t = playlistTags.get(file) || {};
                const hay = [file.name.replace(/\.[A-Za-z0-9]{2,5}$/, ''), t.title, t.artist, t.album].join(' ').toLowerCase();
                return hay.includes(playlistSearchQuery);
            });
        }

        // Render playlist items
        filteredPlaylist.forEach((file, idx) => {
            // Find the real index in the original playlist
            const realIdx = playlist.indexOf(file);
            const fileName = file.name.replace(/\.[A-Za-z0-9]{2,5}$/, '');
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

            thumb = `<img src="${artUrl || placeholderCover(fileName)}" alt="" loading="lazy">`;
            $playlist.append(`
                <li data-idx="${realIdx}" class="${isActive ? 'active' : ''}" title="${esc(fileName)}">
                    <span class="pl-thumb">${thumb}<span class="eq"><i></i><i></i><i></i></span></span>
                    <span class="pl-name"><span class="pl-title">${esc((playlistTags.get(file) || {}).title || fileName)}</span>${(playlistTags.get(file) || {}).artist ? `<span class="pl-sub">${esc(playlistTags.get(file).artist)}</span>` : ''}</span>
                    <button class="removeTrackBtn" title="Remove" aria-label="Remove track">${ic('x', 16)}</button>
                </li>`);
        });

        $('#plCount').text(playlist.length + (playlist.length === 1 ? ' track' : ' tracks'));
        if (!filteredPlaylist.length) {
            $playlist.append(`<li class="pl-empty">${ic('music', 30)}<span>${playlist.length ? 'No tracks match your search' : 'Your queue is empty. Drop audio files or add a URL.'}</span></li>`);
        }
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
            items: 'li[data-idx]',
            disabled: !!playlistSearchQuery,   // reordering a filtered list used to drop hidden tracks
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
        $('#playlistSearch').off('input').on('input', function() {
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

        // ---------- v1.2: themes + cover styles (Lyrics Settings -> Appearance) ----------
        const THEMES = {
            midnight: { label: 'Midnight', accent: [139, 123, 255], light: false, swatch: 'linear-gradient(135deg,#0b0c15 45%,#8b7bff)' },
            daylight: { label: 'Daylight', accent: [91, 69, 245], light: true, swatch: 'linear-gradient(135deg,#f4f5fb 45%,#5b45f5)' },
            sunset:   { label: 'Sunset', accent: [255, 122, 89], light: false, swatch: 'linear-gradient(135deg,#2a1226 45%,#ff7a59)' },
            oled:     { label: 'OLED Black', accent: [235, 235, 235], light: false, swatch: 'linear-gradient(135deg,#000 55%,#e9e9e9)' }
        };
        const COVER_STYLES = [
            ['vinyl', 'Vinyl', 'disc'], ['cd', 'CD', 'disc2'], ['polaroid', 'Polaroid', 'frame'], ['glass', 'Glass 3D', 'sparkles'],
            ['disc', 'Spinning disc', 'disc2'], ['stack', 'Card stack', 'layers'], ['flat', 'Flat', 'square']
        ];
        let theme = 'midnight', coverStyle = 'vinyl', accentFromCover = true, lastCoverUrl = null;
        let appearanceSnapshot = null;
        function themeAccent() { return THEMES[theme].accent; }
        function applyAppearance() {
            const el = $viewerContainer[0];
            if (!el) return;
            el.setAttribute('data-theme', theme);
            el.setAttribute('data-cover', coverStyle);
            vizGeo = null;
            applyAccentFromImage(lastCoverUrl);
        }
        // One place that puts an image on the cover stage (real art, generated cover or folder cover)
        function paintCover(url, seed) {
            $albumArt.off('load error')
                .on('load', function () { $(this).show(); })
                .on('error', function () { if (this.getAttribute('src') !== placeholderCover(seed)) paintCover(placeholderCover(seed), seed); })
                .attr('src', url).show();
            $metadata_bg(url);
            applyAccentFromImage(url);
        }
        function $metadata_bg(url) {
            $('#metadata').css('--metadata-bg', `url("${url}")`);
            $('#coverStage')[0].style.setProperty('--cover-url', `url("${url}")`);
        }
        // For file:/// tracks without embedded art: look for cover.jpg / folder.jpg ... next to the file
        let coverToken = 0;
        function tryFolderCover(item, seed, token) {
            if (!item || !item.src || !/^file:/i.test(item.src)) return;
            const dir = String(item.src).replace(/[^\/\\]*$/, '');
            const cands = ['cover.jpg', 'cover.png', 'folder.jpg', 'folder.png', 'front.jpg', 'album.jpg', 'albumart.jpg', 'artwork.jpg'].map(n => dir + n);
            let i = 0;
            const next = () => {
                if (i >= cands.length || token !== coverToken) return;
                const url = cands[i++], im = new Image();
                im.onload = () => { if (token === coverToken) paintCover(url, seed); };
                im.onerror = next;
                im.src = url;
            };
            next();
        }
        function syncAppearanceUI() {
            $('#setting_themeChips .mp-chip').each(function () { $(this).toggleClass('sel', $(this).data('theme') === theme); });
            $('#setting_coverChips .mp-chip').each(function () { $(this).toggleClass('sel', $(this).data('cover') === coverStyle); });
            $('#setting_accentFromCover').prop('checked', accentFromCover);
        }
        $(document).on('click.mp3pp', '#setting_themeChips .mp-chip', function () { theme = String($(this).data('theme')); applyAppearance(); syncAppearanceUI(); });
        $(document).on('click.mp3pp', '#setting_coverChips .mp-chip', function () { coverStyle = String($(this).data('cover')); applyAppearance(); syncAppearanceUI(); });
        $(document).on('change.mp3pp', '#setting_accentFromCover', function () { accentFromCover = this.checked; applyAppearance(); });
        $(document).on('change.mp3pp', '#setting_visualizer_style', function () { visualizerStyle = this.value; applyVizLayout(); if (!rafId) renderSilence(); });
        // Live preview while the settings dialog is open; Cancel restores the previous look
        $('#translationSettingsBtn').on('click', function () {
            appearanceSnapshot = { theme, coverStyle, accentFromCover, visualizerStyle };
            syncAppearanceUI();
        });
        $(document).on('click.mp3pp', '#translationSettingsCancel', function () {
            if (!appearanceSnapshot) return;
            ({ theme, coverStyle, accentFromCover, visualizerStyle } = appearanceSnapshot);
            applyAppearance(); applyVizLayout();
        });
        // Glass style: subtle 3D tilt that follows the pointer
        $('#coverStage').on('mousemove', function (e) {
            if (coverStyle !== 'glass') return;
            const r = this.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
            this.style.setProperty('--tilt-y', ((px - 0.5) * 18).toFixed(2) + 'deg');
            this.style.setProperty('--tilt-x', ((0.5 - py) * 18).toFixed(2) + 'deg');
            this.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
            this.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        }).on('mouseleave', function () { this.style.setProperty('--tilt-x', '0deg'); this.style.setProperty('--tilt-y', '0deg'); });

        // ---------- OpenRouter model browser (Lyrics Settings) ----------
        let orModels = null, orLoading = false, orFilter = 'all', orSort = 'new', orQuery = '', orTimer = null;
        function orFetchModels() {
            const url = 'https://openrouter.ai/api/v1/models';   // public endpoint, no API key needed
            return new Promise((resolve, reject) => {
                const done = txt => { try { const j = JSON.parse(txt); if (!j || !Array.isArray(j.data)) throw new Error('Unexpected response'); resolve(j.data); } catch (e) { reject(e); } };
                if (typeof GM_xmlhttpRequest === 'function') {
                    GM_xmlhttpRequest({ method: 'GET', url, headers: { Accept: 'application/json' }, timeout: 20000,
                        onload: r => (r.status >= 200 && r.status < 300) ? done(r.responseText) : reject(new Error('HTTP ' + r.status)),
                        onerror: () => reject(new Error('Network error')), ontimeout: () => reject(new Error('Timed out')) });
                } else {
                    fetch(url).then(r => r.text()).then(done).catch(reject);
                }
            });
        }
        const orNum = v => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };
        function orIsFree(m) {
            const p = m.pricing || {};
            return orNum(p.prompt) === 0 && orNum(p.completion) === 0;
        }
        function orPrice(m) {
            const p = m.pricing || {}, a = orNum(p.prompt), b = orNum(p.completion);
            if (a === null || b === null || a < 0 || b < 0) return 'variable';
            const f = x => { const v = x * 1e6; return '$' + (v >= 10 ? v.toFixed(0) : v >= 1 ? v.toFixed(2) : v.toFixed(3).replace(/0+$/, '').replace(/\.$/, '')); };
            return f(a) + ' in / ' + f(b) + ' out per 1M';
        }
        function orCtx(n) { return !n ? '' : n >= 1e6 ? (n / 1e6).toFixed(n % 1e6 ? 1 : 0) + 'M ctx' : Math.round(n / 1000) + 'K ctx'; }
        function orRender() {
            const $list = $('#orList'), $meta = $('#orMeta');
            if (!orModels) return;
            const q = orQuery.trim().toLowerCase(), cur = ($('#setting_openrouter_model').val() || '').trim();
            let rows = orModels.filter(m => {
                const free = orIsFree(m);
                if (orFilter === 'free' && !free) return false;
                if (orFilter === 'paid' && free) return false;
                return !q || (String(m.id) + ' ' + String(m.name || '')).toLowerCase().includes(q);
            });
            rows.sort((a, b) => orSort === 'name' ? String(a.name || a.id).localeCompare(String(b.name || b.id))
                : orSort === 'ctx' ? (b.context_length || 0) - (a.context_length || 0)
                : (b.created || 0) - (a.created || 0));
            const freeCount = orModels.filter(orIsFree).length;
            $meta.text(`${rows.length} shown · ${orModels.length} models · ${freeCount} free`);
            if (!rows.length) { $list.html('<div class="or-empty">No models match your search.</div>'); return; }
            $list.html(rows.map(m => {
                const free = orIsFree(m), sp = m.supported_parameters || [];
                const badges = [
                    free ? '<span class="or-b free">FREE</span>' : `<span class="or-b">${esc(orPrice(m))}</span>`,
                    m.context_length ? `<span class="or-b">${esc(orCtx(m.context_length))}</span>` : '',
                    sp.includes('tools') ? '<span class="or-b">tools</span>' : '',
                    sp.includes('reasoning') ? '<span class="or-b">reasoning</span>' : ''
                ].join('');
                return `<button type="button" class="or-row${m.id === cur ? ' cur' : ''}" data-id="${esc(m.id)}"><span class="or-name">${esc(m.name || m.id)}</span><span class="or-id">${esc(m.id)}</span><span class="or-badges">${badges}</span></button>`;
            }).join(''));
        }
        function orOpen() {
            const $p = $('#orPicker');
            if ($p.is(':visible')) { $p.slideUp(160); return; }
            $p.slideDown(180, function () { try { this.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { /* ignore */ } });
            $('#orSearch').trigger('focus');
            if (orModels || orLoading) { orRender(); return; }
            orLoading = true;
            $('#orMeta').text('Loading models from openrouter.ai ...');
            $('#orList').html('<div class="or-empty">Loading ...</div>');
            orFetchModels().then(list => { orModels = list; orLoading = false; orRender(); })
                .catch(err => {
                    orLoading = false;
                    $('#orMeta').text('');
                    $('#orList').html(`<div class="or-empty">Could not load the model list (${esc(err && err.message || 'error')}).<br><button type="button" class="mp-chip" id="orRetry" style="margin-top:10px;">Retry</button></div>`);
                });
        }
        $(document).on('click.mp3pp', '#orBrowseBtn', orOpen);
        $(document).on('click.mp3pp', '#orRetry', function () { $('#orPicker').hide(); orOpen(); });
        $(document).on('click.mp3pp', '#orFilters .mp-chip', function () { orFilter = String($(this).data('f')); $('#orFilters .mp-chip').removeClass('sel'); $(this).addClass('sel'); orRender(); });
        $(document).on('change.mp3pp', '#orSort', function () { orSort = this.value; orRender(); });
        $(document).on('input.mp3pp', '#orSearch', function () { const v = this.value; clearTimeout(orTimer); orTimer = setTimeout(() => { orQuery = v; orRender(); }, 120); });
        $(document).on('click.mp3pp', '#orList .or-row', function () {
            $('#setting_openrouter_model').val(String($(this).data('id'))).trigger('input');
            $('#orList .or-row').removeClass('cur'); $(this).addClass('cur');
            $('#orPicker').slideUp(160);
        });
        $(document).on('click.mp3pp', '#translationSettingsCancel, #translationSettingsSave', function () { $('#orPicker').hide(); });

        // =====================================================================
        //  v1.1 additions: custom transport, cover-driven accent, shortcuts,
        //  persisted preferences, compact mode
        // =====================================================================
        const AUD = $audioPlayer[0];
        const shuffleHistory = [];

        function setPlayState(playing) {
            $('#playBtn')
                .html(ic(playing ? 'pause' : 'play', 26))
                .attr({ title: playing ? 'Pause (Space)' : 'Play (Space)', 'aria-label': playing ? 'Pause' : 'Play' });
            $viewerContainer.toggleClass('is-playing', !!playing);
        }
        $audioPlayer.on('play playing', function () { setPlayState(true); });
        $audioPlayer.on('pause ended', function () { setPlayState(false); });
        $audioPlayer.on('error', function () {
            if (AUD.getAttribute('src')) updateStatus('Could not play this file. Check the path or format.', 'error');
        });

        function syncToggles() {
            $('#shuffleBtn').toggleClass('on', isShuffle).attr({ 'aria-pressed': isShuffle, title: 'Shuffle: ' + (isShuffle ? 'on' : 'off') + ' (S)' });
            $('#loopBtn').toggleClass('on', isLoop).attr({ 'aria-pressed': isLoop, title: 'Loop this track: ' + (isLoop ? 'on' : 'off') + ' (L)' });
            $('#repeatBtn').toggleClass('on', isRepeat).attr({ 'aria-pressed': isRepeat, title: 'Repeat playlist: ' + (isRepeat ? 'on' : 'off') + ' (R)' });
        }

        // ---------- Seek bar ----------
        const $seekBar = $('#seekBar'), $seekWrap = $('#seekWrap');
        let seeking = false;
        function paintProgress(p) {
            p = Math.max(0, Math.min(1, p || 0));
            const pc = (p * 100) + '%';
            $('#seekFill').css('width', pc);
            $seekWrap[0].style.setProperty('--p', pc);
        }
        function updateTimes() {
            const d = AUD.duration, t = AUD.currentTime;
            $('#durTime').text(Number.isFinite(d) ? formatTime(d) : '0:00');
            if (seeking) return;
            $('#curTime').text(formatTime(t));
            const p = (Number.isFinite(d) && d > 0) ? t / d : 0;
            paintProgress(p);
            $seekBar.val(p * 1000);
        }
        ['timeupdate', 'loadedmetadata', 'durationchange'].forEach(ev => AUD.addEventListener(ev, updateTimes));
        AUD.addEventListener('emptied', function () { $('#seekBuf').css('width', 0); updateTimes(); });
        AUD.addEventListener('progress', function () {
            try {
                const d = AUD.duration;
                if (d > 0 && AUD.buffered.length) $('#seekBuf').css('width', (AUD.buffered.end(AUD.buffered.length - 1) / d * 100) + '%');
            } catch (e) { /* ignore */ }
        });
        $seekBar.on('input', function () {
            seeking = true; $seekWrap.addClass('dragging');
            const d = AUD.duration;
            if (!Number.isFinite(d)) return;
            const p = this.value / 1000;
            paintProgress(p);
            $('#curTime').text(formatTime(p * d));
        }).on('change', function () {
            const d = AUD.duration;
            if (Number.isFinite(d)) AUD.currentTime = (this.value / 1000) * d;
            seeking = false; $seekWrap.removeClass('dragging');
        });

        // ---------- Volume / mute / speed ----------
        function paintVolume() {
            const v = AUD.muted ? 0 : AUD.volume;
            const pc = Math.round(v * 100);
            $('#volBar').val(pc)[0].style.setProperty('--v', pc + '%');
            $('#muteBtn').html(ic(v === 0 ? 'volumeX' : (v < 0.5 ? 'volume1' : 'volume2'), 20))
                .attr({ 'aria-pressed': AUD.muted, title: AUD.muted ? 'Unmute (M)' : 'Mute (M)' });
        }
        $('#volBar').on('input', function () { AUD.muted = false; AUD.volume = this.value / 100; }).on('change', savePrefs);
        $('#muteBtn').on('click', function () { AUD.muted = !AUD.muted; savePrefs(); });
        AUD.addEventListener('volumechange', paintVolume);

        const RATES = [0.75, 1, 1.25, 1.5, 2];
        function setRate(r) {
            AUD.defaultPlaybackRate = r; AUD.playbackRate = r;
            $('#speedBtn').text(r + '×').attr('title', 'Playback speed: ' + r + '× (click to change)');
        }
        $('#speedBtn').on('click', function () {
            const i = RATES.indexOf(AUD.playbackRate);
            setRate(RATES[(i + 1) % RATES.length]);
            savePrefs();
        });

        // ---------- Compact mode ----------
        $('#miniBtn').on('click', function () { $viewerContainer.toggleClass('mini'); savePrefs(); });

        // ---------- Cover-driven accent colour ----------
        function rgbToHsl(r, g, b) {
            r /= 255; g /= 255; b /= 255;
            const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
            let h = 0, s = 0;
            if (max !== min) {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
                h /= 6;
            }
            return [h, s, l];
        }
        function hslToRgb(h, s, l) {
            const f = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; return t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p; };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
            return [Math.round(f(p, q, h + 1 / 3) * 255), Math.round(f(p, q, h) * 255), Math.round(f(p, q, h - 1 / 3) * 255)];
        }
        function setAccent(rgb) {
            accentRGB = rgb;
            const [r, g, b] = rgb, st = $viewerContainer[0].style;
            st.setProperty('--accent', `rgb(${r}, ${g}, ${b})`);
            st.setProperty('--accent-rgb', `${r}, ${g}, ${b}`);
            st.setProperty('--accent-ink', (0.299 * r + 0.587 * g + 0.114 * b) > 150 ? '#0d0d18' : '#ffffff');
        }
        function applyAccentFromImage(url) {
            lastCoverUrl = url || null;
            if (!url || !accentFromCover) { setAccent(themeAccent()); return; }
            const img = new Image();
            img.onload = function () {
                try {
                    const S = 32, c = document.createElement('canvas');
                    c.width = c.height = S;
                    const x = c.getContext('2d', { willReadFrequently: true });
                    x.drawImage(img, 0, 0, S, S);
                    const d = x.getImageData(0, 0, S, S).data;
                    const buckets = Array.from({ length: 12 }, () => ({ w: 0, r: 0, g: 0, b: 0 }));
                    for (let i = 0; i < d.length; i += 4) {
                        const [h, s, l] = rgbToHsl(d[i], d[i + 1], d[i + 2]);
                        if (l < 0.18 || l > 0.9 || s < 0.22) continue;
                        const w = s * (1 - Math.abs(l - 0.5) * 1.4);
                        const bk = buckets[Math.min(11, Math.floor(h * 12))];
                        bk.w += w; bk.r += d[i] * w; bk.g += d[i + 1] * w; bk.b += d[i + 2] * w;
                    }
                    let best = null;
                    buckets.forEach(b => { if (!best || b.w > best.w) best = b; });
                    if (!best || best.w < 1.5) { setAccent(themeAccent()); return; }
                    let [h, s, l] = rgbToHsl(best.r / best.w, best.g / best.w, best.b / best.w);
                    const lo = THEMES[theme].light ? 0.40 : 0.58, hi = THEMES[theme].light ? 0.52 : 0.74;
                    setAccent(hslToRgb(h, Math.max(s, 0.55), Math.min(hi, Math.max(lo, l))));
                } catch (e) { setAccent(themeAccent()); }
            };
            img.onerror = function () { setAccent(themeAccent()); };
            img.src = url;
        }

        // ---------- Keyboard shortcuts ----------
        function playerActive() { return $mainPlayerContainer.is(':visible'); }
        $(document).on('keydown.mp3pp', function (e) {
            if (!document.getElementById('mp3ViewerContainer') || !playerActive()) return;
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            const t = e.target;
            if (t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable)) return;
            const k = e.key;
            const seek = s => { if (Number.isFinite(AUD.duration)) AUD.currentTime = Math.max(0, Math.min(AUD.duration, AUD.currentTime + s)); };
            const vol = dv => { AUD.muted = false; AUD.volume = Math.max(0, Math.min(1, AUD.volume + dv)); savePrefs(); };
            switch (k) {
                case ' ': case 'k': case 'K': $('#playBtn').trigger('click'); break;
                case 'ArrowRight': seek(e.shiftKey ? 15 : 5); break;
                case 'ArrowLeft': seek(e.shiftKey ? -15 : -5); break;
                case 'ArrowUp': vol(0.05); break;
                case 'ArrowDown': vol(-0.05); break;
                case 'n': case 'N': playNextTrack(); break;
                case 'p': case 'P': playPrevTrack(); break;
                case 'm': case 'M': $('#muteBtn').trigger('click'); break;
                case 'l': case 'L': $('#loopBtn').trigger('click'); break;
                case 'r': case 'R': $('#repeatBtn').trigger('click'); break;
                case 's': case 'S': $('#shuffleBtn').trigger('click'); break;
                default: return;
            }
            e.preventDefault();
        });
        // Stop a focused button from also firing on Space-release while the player is active
        $(document).on('keyup.mp3pp', function (e) {
            if (e.key === ' ' && playerActive() && !/^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName || '')) e.preventDefault();
        });

        // ---------- Media Session: seeking from OS controls ----------
        if ('mediaSession' in navigator) {
            try { navigator.mediaSession.setActionHandler('seekto', d => { if (d && Number.isFinite(d.seekTime)) AUD.currentTime = d.seekTime; }); } catch (e) { /* unsupported */ }
            try { navigator.mediaSession.setActionHandler('seekbackward', d => { AUD.currentTime = Math.max(0, AUD.currentTime - ((d && d.seekOffset) || 10)); }); } catch (e) { /* unsupported */ }
            try { navigator.mediaSession.setActionHandler('seekforward', d => { AUD.currentTime = AUD.currentTime + ((d && d.seekOffset) || 10); }); } catch (e) { /* unsupported */ }
        }

        // ---------- Persisted preferences (localStorage) ----------
        const PREF_KEY = 'mp3pp:prefs:v1';
        function savePrefs() {
            try {
                localStorage.setItem(PREF_KEY, JSON.stringify({
                    volume: AUD.volume, muted: AUD.muted, rate: AUD.playbackRate, isLoop, isRepeat, isShuffle,
                    mini: $viewerContainer.hasClass('mini'),
                    autoLyrics, autoTranslation, autoClearLyrics, translationProviderSetting,
                    hfToken, hfModel, OPENROUTER_API_KEY, OPENROUTER_MODEL, googleTargetLang, aiPromptLanguage, translationInstructionDefault,
                    appFont, theme, coverStyle, accentFromCover, visualizerEnabled, colorEnabled, visualizerStyle, visualizerColor, visualizerHeight, visualizerSensitivity, visualizerBarCount
                }));
            } catch (e) { /* storage unavailable */ }
        }
        function loadPrefs() {
            let p = null;
            try { p = JSON.parse(localStorage.getItem(PREF_KEY) || 'null'); } catch (e) { /* ignore */ }
            if (!p) return;
            const has = k => p[k] !== undefined && p[k] !== null;
            if (has('volume')) AUD.volume = Math.max(0, Math.min(1, p.volume));
            if (has('muted')) AUD.muted = !!p.muted;
            if (has('rate')) setRate(p.rate);
            if (has('isLoop')) { isLoop = !!p.isLoop; AUD.loop = isLoop; }
            if (has('isRepeat')) isRepeat = !!p.isRepeat;
            if (has('isShuffle')) isShuffle = !!p.isShuffle;
            if (p.mini) $viewerContainer.addClass('mini');
            if (has('autoLyrics')) autoLyrics = !!p.autoLyrics;
            if (has('autoTranslation')) autoTranslation = !!p.autoTranslation;
            if (has('autoClearLyrics')) autoClearLyrics = !!p.autoClearLyrics;
            if (p.translationProviderSetting) translationProviderSetting = p.translationProviderSetting;
            if (p.hfToken) hfToken = p.hfToken;
            if (p.hfModel) hfModel = p.hfModel;
            if (p.OPENROUTER_API_KEY) OPENROUTER_API_KEY = p.OPENROUTER_API_KEY;
            if (p.OPENROUTER_MODEL) OPENROUTER_MODEL = p.OPENROUTER_MODEL;
            if (p.googleTargetLang) googleTargetLang = p.googleTargetLang;
            if (p.aiPromptLanguage) aiPromptLanguage = p.aiPromptLanguage;
            if (p.translationInstructionDefault) translationInstructionDefault = p.translationInstructionDefault;
            if (p.theme && THEMES[p.theme]) theme = p.theme;
            if (p.coverStyle) coverStyle = p.coverStyle;
            if (has('accentFromCover')) accentFromCover = !!p.accentFromCover;
            if (p.appFont) { appFont = p.appFont; $viewerContainer.css('--app-font-family', appFont); }
            if (has('visualizerEnabled')) visualizerEnabled = !!p.visualizerEnabled;
            if (has('colorEnabled')) colorEnabled = !!p.colorEnabled;
            if (p.visualizerStyle) visualizerStyle = p.visualizerStyle;
            if (p.visualizerColor) visualizerColor = p.visualizerColor;
            if (p.visualizerHeight) visualizerHeight = p.visualizerHeight;
            if (p.visualizerSensitivity) visualizerSensitivity = p.visualizerSensitivity;
            if (p.visualizerBarCount) visualizerBarCount = p.visualizerBarCount;
        }

        // ---------- Initial paint ----------
        loadPrefs();
        applyAppearance();
        applyVizLayout();
        applyVisualizerSettings();
        syncToggles();
        paintVolume();
        setPlayState(false);
        updateTimes();
        if (!AUD.defaultPlaybackRate || AUD.defaultPlaybackRate === 1) $('#speedBtn').text(AUD.playbackRate + '×');

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
            if (!(e.target.id === 'mp3ViewerContainer' || $(e.target).closest('#appHeader').length) || $(e.target).closest('button').length) return;

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
