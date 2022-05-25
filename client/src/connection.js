import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const connection = sanityClient({
  projectId: 'lrhefduy',
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: 'skoScz0NenJyHG3Yk8BmVbmmhYnot6YUy7DY0J9rQNfSHVvrPtSWdnNQy6kbgvN9fdz0TFkdrA34i3kErJ4ewcjoSQvtNMhmhhLxpOPa10Cji4tGhjCiKuyYKButDz2kebaB6KlBoRvhnFRThKsqxFMHT4tHqIUlGReFyDJXRJXm8Npl0YLo',
});

const builder = imageUrlBuilder(connection);

export const urlFor = (source) => builder.image(source);