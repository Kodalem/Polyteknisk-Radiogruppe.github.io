import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const projects = await getCollection("projects");
  return rss({
    title: 'PRG | Polyteknisk Radiogruppe',
    description: 'Electronics and radio club at the Technical University of Denmark',
    site: context.site,
    items: projects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.pubDate,
      description: project.data.description,
      link: `/projects/${project.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}