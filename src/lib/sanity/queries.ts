export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, coverImage, excerpt, publishedAt
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, coverImage, excerpt, body, publishedAt
}`;

export const LATEST_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) [0...3] {
  _id, title, slug, coverImage, excerpt, publishedAt
}`;

export const UPCOMING_GAMES_QUERY = `*[_type == "game" && date >= now()] | order(date asc) {
  _id, date, opponent, homeAway, location, result, isWin, youtubeUrl
}`;

export const PAST_GAMES_QUERY = `*[_type == "game" && date < now()] | order(date desc) {
  _id, date, opponent, homeAway, location, result, isWin, youtubeUrl
}`;

export const NEXT_GAMES_QUERY = `*[_type == "game" && date >= now()] | order(date asc) [0...3] {
  _id, date, opponent, homeAway, location, result, isWin, youtubeUrl
}`;
