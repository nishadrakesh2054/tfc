// sanity/schemas/schema.ts
import { contactType } from "./contactType";
import { galleryType } from "./galleryType";
import { playerType } from "./playerType";
import { bannerType } from "./bannerType";

export const schema = {
  types: [
    contactType, // register your Contact schema
    galleryType, // register your Gallery schema
    playerType, // register your Player schema
    bannerType, // register your Banner/Slider schema
  ],
};
