import  sanityClient, { createClient, SanityClient }  from "@sanity/client";
import  imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "px2vemg0",
    dataset: "production",
    apiVersion: "2023-05-27",
    useCdn: true,
    token: "skRQnipVP20ZUWNnxOLcBzccqbkCk4CVArfDl75k3I3vu2wEA9PvRfoQFizlsffhlM5muk5CtwviaY4sbpS7t7eCxHNMcpYsSibZV6HeI8KzYy53oQcWCMEq4eYhhebwrtaEabvLkPXSXhPRcqzY8ehhYWqxCfNbq7hDZgKNZknQJHH7apup",
});

const builder = imageUrlBuilder(client); 

export const urlFor = (source) => builder.image(source);