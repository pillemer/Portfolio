export function initWindowAbout() {
  window.about = {
    webApplication: {
      buildHash: __BUILD_CONST_BUILD_HASH__,
      buildDate: __BUILD_CONST_BUILD_DATE__,
    }
  };
}