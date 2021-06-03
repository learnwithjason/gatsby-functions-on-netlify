import fetch from 'node-fetch';

export default async function handler(req, res) {
  const schedule = await fetch(
    'https://www.learnwithjason.dev/api/schedule',
  ).then((res) => res.json());
  const { search = '' } = req.params;

  const filtered = schedule.filter((episode) => {
    const regex = new RegExp(search, 'i');
    return episode.title.match(regex);
  });

  res.status(200).json(filtered);
}
