// Alternative simple structure - uncomment to use this instead

// Simple flat list (current default style)
export const structureSimple = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("banner").title("Slider"),
      S.documentTypeListItem("player").title("Players"),
      S.documentTypeListItem("gallery").title("Gallery"),
      S.documentTypeListItem("contact").title("Contact Messages"),
    ]);
