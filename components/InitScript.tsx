import {
  DEFAULT_LANGUAGE,
  LANG_STORAGE_KEY,
  LANGUAGES,
} from "@/lib/i18n";
import { DEFAULT_THEME, THEME_STORAGE_KEY, THEMES } from "@/lib/theme";

/**
 * Pre-paint inline script. Runs before first paint to set the initial
 * language (document.documentElement.lang) and theme (data-theme) so there is
 * no flash of the wrong language or wrong color scheme (no FOUC).
 *
 * Mirrors lib/i18n.resolveLanguage precedence: ?lang= > localStorage >
 * navigator.language > default. Kept dependency-free because it is stringified
 * and injected raw — it cannot import modules.
 */
export function InitScript() {
  const langs = JSON.stringify(LANGUAGES);
  const themes = JSON.stringify(THEMES);

  const code = `(function(){
  try {
    var LANGS = ${langs};
    var THEMES = ${themes};
    var d = document.documentElement;

    // --- language ---
    var lang = null;
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q) { q = q.trim().toLowerCase(); if (LANGS.indexOf(q) !== -1) lang = q; }
    } catch (e) {}
    if (!lang) {
      try {
        var s = localStorage.getItem('${LANG_STORAGE_KEY}');
        if (s) { s = s.trim().toLowerCase(); if (LANGS.indexOf(s) !== -1) lang = s; }
      } catch (e) {}
    }
    if (!lang && navigator.language) {
      var n = navigator.language.trim().toLowerCase().split('-')[0];
      if (LANGS.indexOf(n) !== -1) lang = n;
    }
    d.lang = lang || '${DEFAULT_LANGUAGE}';

    // --- theme ---
    var theme = null;
    try {
      var ts = localStorage.getItem('${THEME_STORAGE_KEY}');
      if (ts) { ts = ts.trim().toLowerCase(); if (THEMES.indexOf(ts) !== -1) theme = ts; }
    } catch (e) {}
    d.setAttribute('data-theme', theme || '${DEFAULT_THEME}');
  } catch (e) {
    document.documentElement.lang = '${DEFAULT_LANGUAGE}';
    document.documentElement.setAttribute('data-theme', '${DEFAULT_THEME}');
  }
})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
