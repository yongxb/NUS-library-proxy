// NUS Library Proxy
// version 1.0

// Userscript alternative to the NUS bookmarklet.
// Adds http://libproxy1.nus.edu.sg/login?url= into all urls defined in the script to gain full-text journal access.
// This will send you to the NUS Library Proxy login page if you are not already logged in.

// ==UserScript==
// @name          NUS Library Proxy
// @description   Adds http://libproxy1.nus.edu.sg/login?url= into all urls defined in the script to gain full-text journal access to.
// @include       https://*.nature.com/*
// @include       https://*.science.org/*
// @include       https://*.cell.com/*
// @include       https://*.sciencedirect.com/*
// @include       https://*.springerlink.com/*
// @include       https://*.springer.com/*
// @include       https://*.wiley.com/*
// @include       https://*.tandfonline.com/*
// @include       https://*.tandf.co.uk/*
// @include       https://*.pnas.org/*
// @include       https://*.umi.com/*
// @include       https://*.portlandpress.co.uk/*
// @include       https://*.portlandpress.com/*
// @include       https://*.oxfordjournals.org/*
// @include       https://*.bmjjournals.com/*
// @include       https://*.aip.org/*
// @include       https://*.apc.org/*
// @include       https://*.biophysj.org/*
// @include       https://*.sciencemag.org/*
// @include       https://*.ingentaconnect.com/*
// @include       https://*.annualreviews.org/*
// @include       https://*.proteinscience.org/*
// @include       https://*.informaworld.com/*
// @include       https://*.molbiolcell.org/*
// @include       https://*.biologists.org/*
// @include       https://academic.oup.com/*
// @include       https://*.physiology.org/*
// @include       https://rupress.org/*
// @include       https://*.acs.org/*
// @include       https://*.jstor.org/*
// @include       https://*.sagepub.com/*
// @include       https://*.rsc.org/*
// @include       https://*.thelancet.com/*
// @include       https://ieeexplore.ieee.org/*
// @include       https://*.karger.com/*
// @include       https://*.liebertpub.com/*
// @include 	  https://*.iop.org/*
// @include 	  https://www.osapublishing.org/*
// @include 	  https://www.spiedigitallibrary.org/*
// @include 	  https://royalsocietypublishing.org/*
// @include 	  https://aip.scitation.org/*
// @include       https://dl.acm.org/*
// @include       https://*asme.org/*
// ==/UserScript==

if (window.location.href.indexOf("libproxy1.nus.edu.sg") == -1)
  a = 'http://libproxy1.nus.edu.sg/login?url=' + window.location
	window.open(a,"_self");