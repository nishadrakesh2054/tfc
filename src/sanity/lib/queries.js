// GROQ queries for fetching data from Sanity

export const galleryQuery = `*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  title,
  _createdAt,
  image {
    asset -> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    },
    alt
  }
}`;

export const galleryQueryLimited = (limit = 4) =>
  `*[_type == "gallery"] | order(_createdAt desc) [0...${limit}] {
  _id,
  title,
  _createdAt,
  image {
    asset -> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    },
    alt
  }
}`;

export const playersQuery = `*[_type == "player"] | order(number asc) {
  _id,
  name,
  slug,
  position,
  number,
  age,
  dob,
  gender,
  nationality,
  bio,
  image {
    asset -> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    },
    alt
  }
}`;

export const playersQueryLimited = (limit = 8) =>
  `*[_type == "player"] | order(number asc) [0...${limit}] {
  _id,
  name,
  slug,
  position,
  number,
  age,
  dob,
  gender,
  nationality,
  bio,
  image {
    asset -> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    },
    alt
  }
}`;

export const playerBySlugQuery = `*[_type == "player" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  position,
  number,
  age,
  dob,
  gender,
  nationality,
  bio,
  image {
    asset -> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    },
    alt
  }
}`;

export const bannersQuery = `*[_type == "banner"] | order(_createdAt desc) {
  _id,
  title,
  subtitle,
  buttonText,
  buttonLink,
  image {
    asset -> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        }
      }
    },
    alt
  }
}`;
