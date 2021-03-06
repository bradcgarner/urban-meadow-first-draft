'use strict';

const fs = require('fs');
const { siteMapStatic } = require('./helpers/sitemap-static');
const thisUrl = 'https://www.urbanmeadow.org';

const staticJsArr = Array.isArray(siteMapStatic) ? siteMapStatic : [];

const staticXmlArr = staticJsArr.map(p=>{
  return `
    <url>
      <loc>${thisUrl}/${p.path}</loc>
      <lastmod>${p.lastmod || '2019-01-01'}</lastmod>
      <changefreq>${p.changefreq || 'yearly'}</changefreq>
      <priority>${p.priority || 0.5}</priority>
    </url>
  `;
});

const xmlString = staticXmlArr.join(' ');

fs.writeFile('public/sitemap.xml', xmlString, function (err) {
  if (err) throw err;
  console.log('Generated sitemap.xml');
});
