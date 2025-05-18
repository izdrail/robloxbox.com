import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Roblox Box - education from the future in a box',
    description: 'Welcome to roblox toy educationaional, the place where parents, kids learn frontend development, web design, and the latest technology trends by using play',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en</language>`,
  });
}