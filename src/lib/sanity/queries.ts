export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, coverImage, excerpt, publishedAt
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, coverImage, excerpt, body, publishedAt
}`;

export const LATEST_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) [0...3] {
  _id, title, slug, coverImage, excerpt, publishedAt
}`;

/** $seasonStart / $seasonEnd: ISO dates; pass a far-future $seasonEnd for the current season */
export const UPCOMING_GAMES_QUERY = `*[_type == "game" && date >= now() && date >= $seasonStart && date < $seasonEnd] | order(date asc) {
  _id, date, timeTbd, round, opponent, homeAway, location, result, isWin, youtubeUrl
}`;

export const PAST_GAMES_QUERY = `*[_type == "game" && date < now() && date >= $seasonStart && date < $seasonEnd] | order(date desc) {
  _id, date, timeTbd, round, opponent, homeAway, location, result, isWin, youtubeUrl
}`;

export const NEXT_GAMES_QUERY = `*[_type == "game" && date >= now()] | order(date asc) [0...3] {
  _id, date, timeTbd, round, opponent, homeAway, location, result, isWin, youtubeUrl
}`;

export const LAST_RESULT_QUERY = `*[_type == "game" && date < now() && defined(result)] | order(date desc) [0] {
  _id, date, timeTbd, round, opponent, homeAway, location, result, isWin, youtubeUrl
}`;

/** Only games with "Win?" explicitly set count, so an unticked box never shows up as a loss. */
export const SEASON_RECORD_QUERY = `{
  "wins": count(*[_type == "game" && date >= $seasonStart && isWin == true]),
  "losses": count(*[_type == "game" && date >= $seasonStart && isWin == false])
}`;
